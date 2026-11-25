// Copies this entry's X post address (POST.json) from the bot directory to the
// output directory, where the gate reads it. Node 22, standard library only:
// no network, no wall clock, no files outside the given directories.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// https://x.com/<handle>/status/<digits>, or the same on twitter.com. The
// <handle>/<digits> parts may also be the shipped placeholders "<handle>"/"<id>",
// which is what POST.json holds until the real post exists.
const X_POST = /^https:\/\/(?:www\.)?(?:x|twitter)\.com\/(?:[A-Za-z0-9_]{1,15}|<handle>)\/status\/(?:\d{1,25}|<id>)$/;

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

const source = join(BOT_DIR, 'POST.json');

let raw: string;
try {
  raw = readFileSync(source, 'utf8');
} catch (err) {
  fail(`cannot read ${source}: ${(err as Error).message}`);
}

let post: unknown;
try {
  post = JSON.parse(raw);
} catch (err) {
  fail(`cannot parse ${source} as JSON: ${(err as Error).message}`);
}

if (typeof post !== 'object' || post === null || Array.isArray(post)) {
  fail(`${source} must hold a JSON object`);
}

const url = (post as Record<string, unknown>).url;
if (typeof url !== 'string') {
  fail(`${source} must hold a "url" string`);
}

if (!X_POST.test(url)) {
  fail(`"url" is not an X post address: ${url}`);
}

const target = join(OUTPUT_DIR, 'POST.json');
try {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(target, raw);
} catch (err) {
  fail(`cannot write ${target}: ${(err as Error).message}`);
}
