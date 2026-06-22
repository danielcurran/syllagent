# Co.Labs: System Architecture Overview

---

## The core idea in one sentence

A Co.Labs lab progression gives every learner a personal AI buddy that builds expertise
alongside them — completing labs in its own environment before the human starts, then
guiding the human through theirs, and finishing with a portable bundle of knowledge and
skill artifacts the learner deploys in production.

---

## Two environments, two parallel tracks

Every lab progression runs two environments simultaneously:

```
┌─────────────────────────────────────────────────────────┐
│  AGENT TRACK  (runs before / in parallel with human)    │
│                                                         │
│  lab-agent completes the lab autonomously               │
│  → builds KNOWLEDGE.json  (what was learned)            │
│  → builds SKILL.md        (how to apply it)             │
│                                                         │
│  These are the agent's own deployable artifacts.        │
│  The human gets to keep them at the end.                │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  HUMAN TRACK  (the learner's own session)               │
│                                                         │
│  Human completes the lab with buddy support             │
│  → buddy logs SESSION.json  (verbalized struggle)       │
│  → platform logs PLATFORM-TELEMETRY.json (silent data)  │
│                                                         │
│  Both streams feed the learner's private profile.       │
└─────────────────────────────────────────────────────────┘
```

The agent track is not a simulation of the human — it is a separate AI agent running a
separate environment. Its purpose is to arrive at the lab with ready-made knowledge the
human can benefit from, and to produce artifacts the human walks away with.

---

## The two telemetry streams

After the human completes a lab, two data streams are combined to build their learner profile:

```
PLATFORM-TELEMETRY.json          SESSION.json
(from Instruqt)                  (from buddy agent)
─────────────────────            ────────────────────
Check retry counts               Help requests
Time spent per stage             Clarifications asked
Stages abandoned + returned      Failed-check recoveries
Hint button clicks               Reteach escalations
Terminal error counts            Unresolved concepts

     ↓                                ↓
     └──────────────┬─────────────────┘
                    ↓
          learner-profile-builder
                    ↓
             LEARNER.json
     (the human's private profile)
```

### The gap is the signal

A concept where the **platform recorded retries** but the **`SESSION.json` log shows no
help request** is a **silent struggle** — the learner fumbled without asking. This is the
highest-confidence indicator of a misconception the learner may not be aware of.

`LEARNER.json` captures this with a `struggle_gap: true` flag. The buddy uses it in two ways:
- **In the current session:** identify the concept and suggest practice examples or deeper dives without being asked.
- **In the next session:** proactively re-teach that concept, even if the learner doesn't raise it.

---

## The full pipeline

```
                    ┌──────────────────────┐
                    │  Lab content exists  │
                    │  (tech spec + env)   │
                    └──────────┬───────────┘
                               ↓
                    ┌──────────────────┐
                    │    lab-agent     │
                    │  completes the   │
                    │  lab autonomously│
                    └────────┬─────────┘
                             ↓
              ┌────────────────────┐
              │   KNOWLEDGE.json   │  ← agent's knowledge artifact
              │   SKILL.md         │  ← agent's skill artifact
              └────────┬───────────┘
                       │
          ┌────────────┤  (buddy uses these during the human session)
          ↓            │
   ┌──────────────┐    │
   │ Human learner│    │
   │ completes lab│    │
   │ with buddy   │    │
   └──────┬───────┘    │
          │            │
   ┌──────┴────────┐   │
   │ Two streams   │   │
   │ captured:     │   │
   │ SESSION.json  │   │
   │ PLATFORM-     │   │
   │ TELEMETRY.json│   │
   └──────┬────────┘   │
          ↓            │
   ┌────────────────────────────┐
   │  learner-profile-builder   │
   │  Combines both streams     │
   │  Identifies struggle gaps  │
   └────────────┬───────────────┘
                ↓
         ┌─────────────┐
         │ LEARNER.json│  ← human's private profile (not shown to learner)
         └──────┬──────┘
                │
                ├─ guides buddy in the next lab session (what to re-teach/reinforce/skip)
                ├─ adapts buddy behavior during current session (practice examples, deeper dives)
                │
                ↓ (does not modify KNOWLEDGE.json or SKILL.md)
   ┌─────────────────────────────────────┐
   │  agent's artifacts assembled into   │
   │  a portable bundle                  │
   └──────────────────┬──────────────────┘
                      ↓
┌──────────────────────────────────┐
│  bundle/                         │
│  ├── KNOWLEDGE-{lab}.json ×N     │
│  └── SKILL-{lab}.md ×N           │
└──────────────────────────────────┘
                      ↓
  Learner downloads and deploys
  the bundle in their own environment
```

---

## The artifacts and who they belong to

| Artifact | Built by | Purpose | Who sees it |
|---|---|---|---|
| `KNOWLEDGE.json` | buddy agent (agent track) | Machine-readable record of concepts learned | Learner (deployable) |
| `SKILL.md` | buddy agent (agent track) | How to apply each concept — built from the agent's verified run | Learner (deployable) |
| `SESSION.json` | lab-agent (buddy mode) | Buddy's log of human interactions during session | Internal only |
| `PLATFORM-TELEMETRY.json` | Instruqt platform | Behavioral trace: retries, time, checks | Internal only |
| `LEARNER.json` | learner-profile-builder | Human learner's private profile: drives next-session buddy guidance, current-session adaptation, and lab shaping | Internal only — passed between agents |
| `bundle/` | buddy system | Portable package of knowledge and skill artifacts | Learner (downloadable) |

---

## What persists across labs

The buddy experience is cumulative because these two artifacts carry forward from one
lab to the next:

```
Lab 1 → Lab 2 → Lab 3 → ...
  ↓        ↓        ↓
KNOWLEDGE.json accumulates → agent's growing expertise
SKILL.md files accumulate  → agent's growing skill library
```

Additionally, `LEARNER.json` updates with each lab — the human's evolving profile of what
to reteach, reinforce, or skip — and is read by each new buddy agent on startup.

---

## What the system rests on

The buddy model is built on a few platform capabilities. The first two make the buddy
possible; the next two make the personalized learner profile possible.

1. **Agent-parsable lab content** — the buddy reads lab content programmatically,
   distinguishing narrative from actionable instructions and working through the steps,
   code blocks, and milestone checks.

2. **Per-session working storage** — the buddy keeps an incremental session log it can
   write to during a session and retrieve once the session ends.

3. **Behavioral telemetry** — each session produces a behavioral signal of how the
   learner actually moved through the lab: per-stage retry counts, time-on-stage, and
   completion status. This is the silent stream that pairs with the buddy's own log.

4. **Cross-session persistence** — the learner profile and the accumulated knowledge and
   skill artifacts carry forward between sessions, loadable at the start of each new lab.
