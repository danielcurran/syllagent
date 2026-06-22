# MongoDB Co.Labs — Partnership Proposal

*A proposal from MongoDB University to Instruqt.*

---

## In one sentence

We are building Co.Labs: unified labs for humans and AI agents. Narrative-driven
exploration for people, structured machine-readable outcomes for agents. One format,
two paths to mastery.

---

## A buddy for every learner

Imagine every learner gets an AI buddy that works alongside them through their entire
skill progression — in its own environment, learning the labs with them, then guiding
them through their own session.

At the end of each lab the agent produces two artifacts: a `KNOWLEDGE.json` of the
concepts covered and a `SKILL.md` of how to apply them. Those belong to the learner.

What makes it personal is a third document: `LEARNER.json` — a living profile that
tracks where the learner struggles, concept by concept. That's the engine of
personalization. It tells the buddy what to re-teach, what to reinforce, and how to
frame the next lab — the scaffolding level, the task complexity, even the instructions
themselves — before the learner starts. The knowledge and skill artifacts stay clean.
They're built from the agent's own verified run, not the human's.

Concretely: if a learner keeps getting the field order wrong in a compound index, the
model records that specific gap — not just "a check failed" — and the agent builds worked
examples around it. The experience adapts to where the learner actually is.

---

## The payoff

When the progression is done, the learner downloads their agent with its full artifact
history. They walk away with a portable expert that ran the same labs they did — built
from a correct, verified run, carrying worked examples grounded in what the lab actually
teaches.

They can deploy it locally to help manage and optimize their MongoDB setup. Or just take
the `KNOWLEDGE.json` and `SKILL.md` and use them with other tools. Either way, the lab
isn't a one-time thing anymore. It's the start of a persistent, personalized relationship
with Instruqt and MongoDB that produces real artifacts they put into production.

Labs stop being rehearsal. They become the focal point of the learning experience.

---

## Memory across sessions

The whole buddy model depends on memory persisting across sessions. The key layer is the
learner model — a continuously updated, per-learner document the buddy reads at the start
of every new lab.

This is what makes guidance cumulative and adaptive rather than resetting every time. An
agent runs alongside the learner, reading and writing that memory as the session unfolds,
and the artifacts it produces are stored and handed off at the end of the progression.

See [architecture-overview.md](architecture-overview.md) for the full technical picture —
the two tracks, the telemetry streams, and how the pieces fit together.
