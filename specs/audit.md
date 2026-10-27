# The audit trail

Asked by the owner on 2026-10-27: to run the friends' pilot properly and decide from it whether to go to the stores, the
admin needs to see who came in, who did what, and on which kind of device.

## What is kept (tab Audit, server `src/Audit.js`)

One row per event: Timestamp, Date, Role (`kid`, `parent`, `admin`, `teacher`, `owner`, `join`), Who, Group, Action,
Detail, Ok (`no` for a refused attempt), Device.

- **Opens**: a kid's dashboard (`apiDashboard`), the parent area and the admin view (`apiParent`), the teacher link
  (`apiTeacherCheck`). Once per half hour per person and device (`AUDIT.openGapSec`, a CacheService key), so a refresh is
  not a new visit.
- **Refused**: every wrong PIN or teacher code (from `checkPin`, with the attempt number and the 15-minute lock; tries
  while locked add nothing) and a join screen opened from a closed or wrong invite link (once an hour per code). The PIN
  that was typed is never kept.
- **Grown-ups' changes**: a family joining, adding a family or a kid, reminder hours, opening or closing the invite link,
  test reminders, parent notifications turned on, a kid's reminders turned on.
- **Hand edits in the sheet** (`onEdit`): the tab and cell, the column name and the new value, except for PIN and code
  cells (their value is not copied). Edits in the Audit tab itself are not kept.
- **Device**: the app sends a coarse label with every call (`DEVICE` in Index.html: iPhone / iPad / Android phone /
  Android tablet / Computer, and app (installed) or browser). The server keeps only a label that matches this list. No
  ids, versions or user-agent strings.

Practice is not copied into this tab: `apiAudit` merges Audit with Log, Games, Gates, Chats, Shop, Placements, Flags,
Feedback and Duels into one timeline.

## The admin's Audit card

Below the Pilot card: today / 7 / 30 days, visits of kids and parents, wrong PINs, the device split (people on each
device: the installed-app share and iPhone against Android matter for the store decision), each family's last visit,
visits and active kid-days, and the timeline with filters (visits, grown-ups, practice, problems) and a family picker.

## Store rules

Our own sheet only (rule 1). The open times and device kind are in the data list of `specs/store-readiness.md` and in
the privacy text at sign-up (rule 4). The rows belong to a kid or family by Who and Group, so the deletion path (still a
gap) must remove them too (rule 5).
