# MongoDB Co.Labs — Partnership Pack

This package is a high-level brief for the Co.Labs AI-buddy system — a conceptual overview
of what we're building together and how the pieces fit.

Everything here is **conceptual**. It describes what each agent does, what data flows
through the system, and what it produces — not a MongoDB-specific implementation. Paths are
written as platform-neutral placeholders.

---

## Read in this order

1. **[proposal.md](proposal.md)** — the vision and the learning buddy model.
2. **[architecture-overview.md](architecture-overview.md)** — the system in one page:
   two tracks (agent + human), two telemetry streams, the full pipeline, and the platform
   capabilities it rests on.
3. **[agents/](agents/)** — the two core agents in the buddy pipeline.

The agents read and write a few data files — a behavioral telemetry record, the buddy's
session log, and the learner profile. These are described conceptually throughout; the
exact shape is an implementation detail.

---

## The buddy pipeline at a glance

| Agent | Role | Turns this… | …into this |
|---|---|---|---|
| [lab-agent](agents/lab-agent.md) | Learner | A lab environment | `KNOWLEDGE.json`, `SKILL.md`, `SESSION.json` |
| [learner-profile-builder](agents/learner-profile-builder.md) | Analyst | Two telemetry streams | `LEARNER.json` (private profile) |

Downstream steps bundle every lab's artifacts into a portable package the learner keeps.
Those bundling steps are mechanical and are kept out of this pack for brevity.

---

## The one idea to take away

Every learner gets an AI buddy that completes labs in its own environment, then guides
the human through theirs. Two data streams are captured during the human's session — the
**platform's silent behavioral signals** and the **buddy's record of verbalized
struggle**. The **gap between them** is the highest-value signal: a concept the learner
struggled with *without asking for help*. That signal drives a personalized, cumulative
experience and a portable set of artifacts the learner deploys in production.

The platform capabilities the system rests on are described at the end of
[architecture-overview.md](architecture-overview.md).

---

## Placeholder conventions used throughout

These stand in for whatever the platform provides:

| Placeholder | Means |
|---|---|
| `{lab-workspace}/` | The lab's working directory for a run |
| `{store}/{learner-id}/` | The per-learner persistence layer |
| "milestone checks" | The lab's pass/fail validation scripts |
| "the learner-model store" | The read/write layer for the cumulative profile |
