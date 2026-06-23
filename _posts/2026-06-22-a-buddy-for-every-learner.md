---
layout: post
title: "A buddy for every learner"
date: 2026-06-22
description: "What if every learner got an AI buddy that learned hands-on labs alongside them — and then walked away with them into production?"
tags: ["post", "learning-buddy", "ai-agents"]
---

Traditional online learning experiences usually combine learning components: a passive video or written text and some sort of active hands-on component. In the tech space, this generally takes the form of videos and labs. The shift from the passive learning to the active learning can be abrupt as the learner moves from a structured, guided environment to independent activity. But what if every learner got an AI buddy that worked alongside them as they progress through a curriculum — completing labs in its own environment, guiding them through their own session, and then walking away with them into production? This is not a thought experiment. It is a model I have been building, and I want to introduce it here.

The core idea is straightforward. Every lab progression runs two environments simultaneously. In the first, an AI agent completes the lab autonomously, before the human begins. It follows the same instructions, runs the same milestone checks, and confronts the same conceptual obstacles. At the end of this run it produces two artifacts: a structured knowledge record of the concepts it learned and a practical skill guide for how to apply them. These artifacts are built from a verified, correct run — not from the human's own session, with its inevitable fumbling and false starts.

In the second environment, the human completes the lab with that same agent now acting as a buddy. The buddy arrives at the session with ready-made expertise, having already done the work. It knows where the tricky concepts are. It knows what a successful run looks like. When the human gets stuck, the buddy can guide them with worked examples grounded in what the lab actually teaches, not in general knowledge about the subject.

Here is where the model reveals its full potential. During the human's session, two data streams are captured simultaneously. The platform logs the learner's behavioural signals: check retry counts, time spent per stage, which steps were abandoned and returned to. The buddy keeps its own record of what the learner verbalised: help requests, clarifications asked, failed-check recoveries. Both streams feed into a private profile that tracks, concept by concept, where the learner struggles.

The gap between those two streams is the highest-value signal in the system. A concept where the platform recorded multiple retries but the buddy log shows no help request is what I call a silent struggle — a misconception the learner may not even be aware of. This is the signal that makes personalisation possible. The buddy can identify that concept, suggest practice examples without being asked, and proactively re-teach it at the start of the next session. The experience adapts before the learner has to articulate what they do not understand.

Then comes the portable payoff. When the progression is done, the learner downloads their buddy with its full history of knowledge and skill artifacts. They walk away with a portable expert that ran the same labs they did. It carries worked examples grounded in the lab content, not general documentation. They can deploy it locally to help manage and optimise their own setup. Or they can extract the knowledge and skill records and use them with other tools. Either way, the lab is no longer a one-time rehearsal. It is the start of a persistent, personalised relationship with the material.

I argue that this model shifts the fundamental unit of online learning. Labs stop being isolated checkpoints that learners complete and forget. They become the focal point of a cumulative experience — one that produces real, deployable artifacts. The buddy is not a feature. It is a different way of thinking about what a lab is for.

In future posts I will go deeper into the architecture: the two-telemetry model, how the learner profile is built and maintained, and how this system adapts to different kinds of conceptual struggle. For now, this is the vision. Every learner deserves a buddy.
