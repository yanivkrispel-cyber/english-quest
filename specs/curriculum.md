# Our own curriculum map (plan, 2026-11-01)

Night review finding 21. Every mission, talk and game is our own writing, but the order of the topics, their names and the
daily fallback link still come from test-english.com: `catalog.tsv` and `src/Catalog.js` hold 714 of their pages (titles and
addresses), mission ids are `<level><section><nn>` where `nn` is the topic's place in their list, the server keys missions by
their address (`src/MissionIndex.js`), and a kid with `Girls.Missions = no`, or a kid who has run out of missions at her level,
is sent to their site. Their terms allow linking, not republishing. This plan replaces their map with ours, aligned to the
**CEFR** and to the **Israeli Ministry of Education English curriculum (2020)**, which is also a selling point for Israeli
parents and schools ("follows the Ministry's curriculum, grade by grade").

## Done on 2026-11-01

- The mission files the phones download carry no test-english addresses (`url:` removed; `tools/missions-index.js` finds the
  address from the id and strips any it finds). The catalog stays on the server only, for the link fallback.
- Every link out of the kids' side goes through the grown-ups' gate (`grownUp()` in Index.html, `specs/store-readiness.md`
  rule 2): the old daily link, the old level test, the run-out fallback.

## The levels against the CEFR and the Ministry's benchmarks

| App level | CEFR | Ministry of Education 2020 benchmark | Grades (the sign-up form, `GRADE_LEVEL`) |
|-----------|------|--------------------------------------|-------------------------------------------|
| Chacho's Nest | pre-A1 | Pre-Foundation (oral, grades 1 to 2) | ages 2 to 7 |
| A1 | A1 | Foundation (end of grade 4) | 3, 4 |
| A2 | A2 | Intermediate (end of grade 6) | 5, 6 |
| B1 | B1 | Proficient (end of grade 9) | 7, 8, 9 |
| B1+ | B1+ | Advanced 1 (3 units, grades 10 to 12) | 10 |
| B2 | B2 | Advanced 2 and 3 (4 and 5 units) | 11, 12 |
| C1 | C1 | beyond the school curriculum | strong 12th graders |

The benchmark names, the grade at which each is expected and the CEFR equivalents are to be checked against the
Ministry's document ("English Curriculum 2020: Principles and Standards for Learning English as an International Language
for All Grades", on the Ministry's English inspectorate site) before any claim goes into marketing. The teacher who reviews
missions (`?missions&t=`) is the right person to sign the table off.

## Our topic map

One file, `src/Topics.js` (server) and `docs/topics.js` (the phone needs only ids, titles and order): for every level and
section, our topics in our order, each with

- `id`: the mission id it already has (`a2g05`), so no row in Log, Assignments, Review or the missions' audio changes. New
  topics take the next free number in their section; the number is no longer a place in anybody's list.
- `title`: our own short name ("Past simple: regular verbs"), never theirs.
- `cefr`: the CEFR can-do line it serves (from the CEFR Companion Volume 2020 descriptors, in our words).
- `moe`: the Ministry's domain (Social Interaction, Access to Information, Presentation, Appreciation of Language,
  Literature and Culture) and, for vocabulary, the Ministry's core word band (Band I, II, III) the topic draws from.
- `link`: the old test-english address, server side only, for kids on the old link until they move (below).

Order inside a level: by the Ministry's benchmark for that grade band first (what an Israeli class meets that year), then
by the CEFR descriptors, then the classic grammar progression. Sections keep the weekly rotation (`ROTATION`).

## Steps

1. **Freeze the ids** (small, server only): write `src/Topics.js` from `CATALOG` with our own titles, keyed by mission id;
   `MISSION_INDEX` keyed by id instead of address (the address stays in a `link` field); `nextExercise` and `apiMissionResult`
   read topics by id. Assignments keep their `URL` column for the history, and a new assignment for a topic with a mission
   writes `topic:<id>` there. Test: `node test/sim.js` with an export of the real data (`test/cf-parity.js`), every past
   assignment still finds its mission.
2. **Map to CEFR and the Ministry** (content work, with the teacher): fill `cefr` and `moe` for the 239 missions there are,
   reorder within each level, and list the topics the Ministry expects that we do not have yet (likely: more speaking and
   writing at A1 and A2, literature at B1 and above).
3. **Write the missing topics as missions** (the content plan): a level is "own" when every topic in its order has a
   mission. The link fallback is then never used at that level.
4. **Retire the link**: kids with `Girls.Missions = no` get a parent message and move to missions (the admin's Data card
   can switch them); when no kid is on the link and every level is own, `catalog.tsv`, `src/Catalog.js` and
   `gen-catalog.js` leave the repo and the old level test link (`LEVEL_TEST`) goes (the in-app level test replaced it).
5. **Show it**: the parents' area shows each week's topics with their Ministry domain ("This week: talking about the past,
   Social Interaction, grade 5 to 6"), and the store listing says "aligned with the CEFR and the Israeli English curriculum"
   once the teacher signed step 2 off.

## Not in this plan

Games (`docs/games.js`) and talks (`docs/talk/`) are already our own and keyed by level, not by catalog topic; they only
gain a `cefr` tag in step 2. The Nest has its own units (`docs/nest/nest.js`).
