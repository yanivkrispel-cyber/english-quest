# For the lawyer: what to read in the privacy policy and the terms

Open `https://coco.coachkrispel.com/privacy.html?review` and `/terms.html?review` (or the files in `docs/` with `?review`): each
place to read carries a red chip (L1 to L10 on the privacy page, T1 to T10 on the terms) and its card is outlined. Orange
chips are blanks the owner fills in. Both pages are in Hebrew and English; the Hebrew is the one families read first, the
English must say the same. The short notice parents agree to in the app (`PRIVACY_ITEMS` in `src/Index.html`) must agree
with the page too; `store/data-safety.md` lists where it does not yet.

The facts behind both pages: `store/data-safety.md` (what the code keeps and sends), `specs/store-readiness.md` (the rules).
The app is for children in Israel first (Israeli law, the Privacy Protection Authority), installed from Google Play
(the Families Policy, COPPA for any US user) and open on the web (GDPR / UK GDPR for any EU or UK user).

## Privacy policy

| Mark | Where | The question |
|---|---|---|
| L1 | Who runs the app | Who is the controller (בעל השליטה במאגר) while the owner is a private person, and after a company exists? Is a database registration or a privacy officer needed under Amendment 13 for a database about children? What must the contact line contain? |
| L2 | Children and parents' consent | A parent ticks a box at sign-up and holds a 6-digit parent code. Is that enough consent for children under Israeli law, and is it "verifiable parental consent" under COPPA (the FTC's methods)? COPPA's 2025 rule wants separate consent for disclosures to third parties: is the browser's speech service (L5) such a disclosure? Under GDPR, which legal basis (consent under Art. 8, or contract / legitimate interest) fits each use? |
| L3 | What we keep, retention, backups, IP and Cloudflare logs | Are the periods acceptable and clearly put (opens up to 37 days, audit up to 210, talk text 90 days, writing a year, errors 30 days, 12 months of no use, backups up to 30 days after a deletion)? Is "while the account is active" acceptable for practice data and feature use? Is the IP sentence right for a value kept only in memory? |
| L4 | Who processes the data, and where | Cloudflare, Google, Apple, Mozilla, GitHub as processors abroad: what Israel's transfer regulations and GDPR (standard clauses, adequacy) require, and whether data processing agreements must be signed and named here. |
| L5 | The microphone and speech | With the parents' switch on, the browser sends the child's voice to Google or Apple to be turned into text; the app keeps only the text. Is this explained enough, and is the parents' switch a valid separate consent? Does it need its own notice at the moment the switch is turned on? |
| L6 | Your rights | Are the statutes named correctly (Privacy Protection Law 1981 with Amendment 13, COPPA, GDPR, UK GDPR) and are the rights complete (access, correction, deletion, objection, portability, complaint)? Is "we answer within 30 days" the right period? |
| L7 | Security | Is the incident sentence enough under the Data Security Regulations (2017) and GDPR Art. 33/34? Kid PINs are kept as they are (not hashed): does the page need to say anything about the security level? |
| L8 | Ages | The store app is for grade 3 and up (about 8 to 18); the Nest (ages 2 to 7) is on the website. Anything special for under-13s or under-5s that the page must say? |
| L9 | Changes | Is "a new notice version, shown in the parents' area, agree again" a valid way to change the policy? What happens to a family that does not agree? |
| L10 | Deleting without the app | Play asks for a web way to delete. The page gives steps on the website and an email for a forgotten code (identity checked by the sign-up email or phone). Is that enough, and what proof of being the parent may we ask for? |

## Terms of use

| Mark | Where | The question |
|---|---|---|
| T1 | Who we are | What the operator details must be (name, ID or company number, address). |
| T2 | Consumer rights | What the Consumer Protection Law requires for a free app now, and for a future paid plan (cancellation, disclosure). |
| T3 | Liability | Does the limitation hold against consumers and toward children? What must stay (gross negligence, data protection)? |
| T4 | Ownership | Is the licence wording right for content made with AI help? Who owns what a child writes at the Writer's Desk, and may the operator keep it for the year the policy says? |
| T5 | Courts | Which court to name (the owner's district) and whether a consumer may still sue at home. |
| T6 | Content | Is the AI-and-teacher sentence a fair disclosure, and enough of a disclaimer for mistakes in learning content? |
| T7 | The parent agrees for the child | A minor cannot be bound alone (the Legal Capacity and Guardianship Law): does "the parent agrees on the child's behalf" work, and does the parent need to agree to the terms too (today the sign-up says "קראתי ואני מסכים/ה לשימוש במידע", the privacy notice only)? |
| T8 | A future paid plan | Anything to promise or not promise now about subscriptions sold through the stores. |
| T9 | Ending | Is closing an account for misuse, after telling the parents "where possible", fair under consumer law? |
| T10 | Law | Is Israeli law enough for users abroad (EU consumers keep their own law)? |

## Also for the lawyer (outside the two pages)

- The sign-up screen's consent line (`joinWelcome` in `src/Index.html`) covers the privacy notice; does it need a separate tick
  for the terms (T7)?
- The name "English with Chacho" and the character: the trademark search and filing in Israel (classes 9 and 41) is open
  (`specs/store-readiness.md`).
- The operator is a private person: before selling, a business entity, business accounts (Cloudflare, Google) and data
  processing agreements with them.
