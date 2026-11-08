# Omoniyi (Niyi) Soneye · Personal Website

Plain HTML/CSS/JS site, hosted on GitHub Pages from this repo (`main` branch = live site).
No build step, no framework. Edit the files directly.

## Files
- `index.html`: all content. Sections are "floors": `#top` (hero), `#floor-1` About, `#floor-2` Skills,
  `#floor-3` Experience, `#floor-4` Projects, `#floor-5` Game Dev, `#floor-6` Research,
  `#floor-7` Community, `#floor-8` Hobbies, `#contact`.
- `styles.css`: theme. Colors and fonts are CSS variables in `:root` at the top.
- `index.js`: skill filter.
- `img/icons/`: skill logos (from Devicon, MIT). Put project photos in `img/`.

## How the skill filter works
- Each `.card` has `data-skills="python pytorch ..."`.
- Each card has hidden `<p class="skill-note" data-for="python">` lines explaining how that skill was used.
- Skill tiles (`.skill-tile[data-skill]`) and filter buttons (`.filter-btn[data-skill]`) call `applyFilter(skill)`.
- Adding a project: copy a card, set `data-skills`, add a `skill-note` per skill, add matching `.chip`s,
  and add a `.filter-btn` for any new skill.
- To swap a drawn cover for a real picture: replace the `<svg>` inside `.card-cover` with
  `<img src="img/name.png" alt="...">` (a short muted autoplay `<video>` also works).

## Working with Niyi (important)
- **He's learning web dev with this project.** Explain the 2-3 key ideas behind each change in plain words,
  and when it's easy, let him make small edits himself.
- **Show changes locally before pushing.** He previews in the browser first. Never push to `main`
  without his OK. Commit as him (name "Omoniyi Soneye", email soneyeniyi@gmail.com) so it counts on his GitHub.
- **No em dashes** in any site copy or writing for him.
- When editing his own written text, fix errors but keep his voice.
- He prefers direct, honest feedback.

## Theme rules
- Look: original "floating sky world" + glass HUD panels, inspired by VR MMO anime aesthetics.
- **Keep it original.** No Sword Art Online names, logos, characters, "NerveGear", "Aincrad", or copies of its UI.
  Same for Nintendo/Wii menus. Original floating islands and HUD styling are fine.
- Keep the "Floor N" labels. **Don't** use game wording in content (no "quests", "clear the game",
  "player stats", "guild"). Normal professional wording.

## Content source of truth
His resume (Nov 2026). Key facts: Sac State B.S. Computer Engineering (expected June 2028, per resume);
ldrboard.com SWE intern; 3D Animator on Roblox (R15/R6, 10+ animations, games with 10K+ CCU, since ~Jun 2024);
SMASH TA (Apr–Jul 2026); NSBE Region VI Treasurer (May 2026–present); CVPR 2026 3D-LLM/VLA Workshop paper
"Dynamic Anchors" (accepted); LeBuckets (AI basketball, Jan 2026–present); MosaicXR (4th place, Stanford
Immerse the Bay); AI watermarking position paper; Impact Football (Roblox, co-developing; animation + some Lua).

## Open items / roadmap
1. **Real pictures** for LeBuckets, MosaicXR, Impact Football (+ optional photo of Niyi). Maybe a small gallery per card.
2. **Custom domain** (required by his referral). Need the domain + registrar, then add a `CNAME` file
   and DNS records (GitHub Pages apex A records + `www` CNAME to omoniyisoneye.github.io).
3. Confirm: graduation May vs June 2028; Roboflow and Docker wording on the Skills tiles;
   add MESA / Chess Club to Community?; team sizes + hackathon length for card info rows.
4. LeBuckets repo is in an org the Claude GitHub app can't see yet; add its link once accessible.
5. Later (after the basics are solid): headset-style login intro animation, music toggle
   (royalty-free track only, no autoplay), floating island tower that moves on scroll.
