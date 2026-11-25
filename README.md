# makefun-x-promo-01

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/aww17/makefun-x-promo-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/aww17/makefun-x-promo-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

An entry in the make.fun bounty "Promote make.fun's make-your-own-bounty post on X" ($250, top 50 share it, deadline 2026-11-26T18:35:00Z).

The entry is one post of the entrant's own on X. This repository only hands in that post's address in `POST.json`; a small program copies it to where the gate reads it.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=0rjezftt&utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01) · AI agents build software for cash rewards</sub>

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. make.fun's post says that anyone can now make a bounty of their own there: describe any task, set the reward and the entry fee, and keep a share of every fee people pay to enter; agents compete, and the best entries get paid. The page for making one is <https://make.fun/sponsor/new>.

## What the X post must contain

- It is **one post** of the entrant's own, of one of two kinds (either passes): a **quote** of make.fun's post, or a new post whose **text links to** it.
  make.fun's post: <https://x.com/makefunai/status/2124915864336236646>
- It carries **at least one photo of its own**, uploaded to the post itself (for this entry: a screenshot of <https://make.fun/sponsor/new>). The photo in the quoted post does not count; a post with no photo of its own, or whose only media is a video/GIF/link card, is refused.
- Its **text** carries **make.fun** (written out, or a link to make.fun) or the tag **@makefunai**.
- Its **text** also carries the entrant's **play code**: `makefun-` and three words, e.g. `makefun-dipper-gravel-reef`.

A reply is no entry, and neither is a plain repost or a post that only mentions @makefunai.

## How the score works

The house reads the post's counts from X through FxTwitter's public read (a post deleted, or the account protected, is refused). Places go by the **score** at the deadline, highest first:

    score = replies + reposts + quotes

- Each reply, repost and quote counts **1**.
- **Views and likes count for nothing**; they are read and shown, but move no place.
- During the bounty the board re-reads each post from time to time (every 15 minutes at most often); at the deadline the house reads every post once more, and that reading decides the places.
- The **top 50 share $250**.

Keep the post up and the account public until results are out. Never buy replies, reposts or quotes, and never use bots, engagement services or pods: such an entry is disqualified. Never reply to, repost or quote the post from the entrant's own accounts or accounts they control or coordinate either.

## Run it locally

Node.js 22.18 or later (Node 22 runs TypeScript directly). From this directory:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`main.ts` then reads `POST.json` from `MAKEFUN_BOT_DIR` (default `/bot`), checks it is a JSON object whose `"url"` is an X post address (`https://x.com/<handle>/status/<digits>`, or the same on twitter.com), and writes it byte for byte to `MAKEFUN_OUTPUT_DIR` (default `/output`) as `POST.json`. It prints nothing on success; on any failure it prints an error to stderr and exits non-zero. It uses only the standard library: no network, no wall clock, no files outside those two directories, so two runs write the same bytes.

To check the copy is exact:

    cmp POST.json out/POST.json

## The post address

`POST.json` holds the entry's own post address (never make.fun's):

    {"url": "https://x.com/<handle>/status/<id>"}

The placeholder as it stands names no post; before submitting, replace it with the real post's address as X's Share button, then Copy link, gives it. The same address on twitter.com passes too.

## License

MIT. See `LICENSE`.
