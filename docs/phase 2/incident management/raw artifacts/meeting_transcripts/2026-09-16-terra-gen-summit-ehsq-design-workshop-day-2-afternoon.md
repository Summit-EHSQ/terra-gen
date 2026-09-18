---
meeting_title: "Terra-Gen | Summit EHSQ | Design Workshop Day 2 - Afternoon"
meeting_datetime: "2026-09-16 13:00 PST"
participants:
  - Dave McLean
  - Amy Roth
  - Whitney Goller
  - Matthew Futter
  - Vanessa Newmarker
---
0:00:00 Dave McLean: and the last one, so just in case it makes a difference coming to the day. I'm the only one, so maybe if I say it's a little bit You know, maybe you want to think about spawning the dog with me.
0:00:15 Dave McLean: I think I'm just worried too. Okay, um, thank you, nice to meet you. Thank coming Thank you. Yeah, I'd like to...
0:00:24 Dave McLean: ... ... ... ... ... ... ...
0:00:47 Dave McLean: ... dinner. Bye. Bye. Okay. They're just thinking. Alright, we're ready to get this. We're ready.
0:00:57 Dave McLean: I think we can go, like, repeat. Did you get Did you get to eat anything? Okay, good. I do that on the regular, so I wanted to ask.
0:01:09 Dave McLean: Just make sure you get something. I am, uh, I'm going to say one of those things that's, uh, normally a, you don't say it when you're ahead of the game, but we're ahead of schedule today for inspections, Now it's all going to fall apart on us.
0:01:26 Dave McLean: Oh, no, if you put sarcasm to it, it deflates the negativity. Okay, that's, that's how you do it. That's like a verb.
0:01:35 Dave McLean: There we go, there we So a couple of, we'll start off with a quick one here in terms of security model within Intellect, so we talked yesterday about location structure, hierarchy, how that controls visibility, and we have a big fat open-ended question as far as what we can get from the HR feed to support
0:01:52 Dave McLean: that. So we, we may undergo some significant revisions, but for this conversation, we'll assume everything we said yesterday is a plausible scenario.
0:02:02 Dave McLean: Uhm, which means that for a user that has access to the inspections application, We're just Does not necessarily mean everybody, right?
0:02:11 Dave McLean: It's users that you grant that access to. If they have access to ViewIt, they're going to see data that lives at the intersection of those two hierarchies.
0:02:19 Dave McLean: So if I create an inspection at, uhm, one of our, uhm, our establishments, and I specify it against one of our sites, or assets, or resources, whatever, whatever the term was for that bottom layer in the left side of the page hierarchy, the record is visible for the combination of those things.
0:02:39 Dave McLean: Yeah. Okay, there we go. So we'll bring it back here. There we go. Okay, so we had our establishments.
0:02:52 Dave McLean: Mojave. We had, I'm sorry I can't remember what they were now. Palm Springs. Yeah, so that should be. You can put TEH if you want.
0:03:03 Dave McLean: No, H is a good one. And even, just a couple of them. That's it. That's it for our full sample.
0:03:13 Dave McLean: Which we kind of left it at. That just rolls up into operations. And we know that that's potentially a broader, but we also have New York and so On the other side of the fence, we had operations.
0:03:25 Dave McLean: The umbrella we were focused on, we had. And we had PBL, PVB. We just guessed a few things here. We don't know Fine, we don't know what these are.
0:03:43 Dave McLean: Yeah. Whatever, I'll send each one of these reports on to different sites, which, based on color coding that I didn't do this time around, would align with each of the establishments.
0:03:55 Dave McLean: Yeah. So the idea would be, when you go in to create an inspection, I'm creating that inspection, perhaps at Mojave, Thanks watching.
0:04:01 Dave McLean: Bye for Site 1, and the visibility of that record is going to be for people who have access to those two things by virtue of their rollout.
0:04:09 Dave McLean: So, if I am a user with, let's say, view permission to inspections at Mojave, and I have access to see all of WIN, then I will see that.
0:04:17 Dave McLean: But if I have access to Mojave and only access to PDB, I would not see those two things in that case.
0:04:24 Dave McLean: So, it's an AND relationship again? It is. Now, technically, we get to decide whether that's applicable here. So, there's a world where, perhaps, the concept of the secondary hierarchy is wholly irrelevant for inspections, and maybe we only want to use the main location structure.
0:04:40 Dave McLean: If it's really just driven by the establishment, you might want to be more specific about where the inspection occurred. But if it doesn't really align and it doesn't make sense, from a security point of view for inspections, we don't actually have to use both hierarchies to control visibility for every
0:04:57 Dave McLean: application. So that's Do you have it locked down today? Like, if somebody logs in, can they see every single inspection today, or are they locked in?
0:05:15 Dave McLean: No, they can only see what they were directly involved with for the inspections. You just haven't seen full visibility. Do you see any issues with somebody in Mojave?
0:05:32 Dave McLean: So, it would be every single person in Mojave, right, having access? You actually get to decide, so, I mean. In theory, if it's of your 300 and some odd and growing number of users, if really it's actually just a subset, unless it's 100 people that need any level of access to inspections, whether it's
0:05:49 Dave McLean: a create, whether it's a view, whether it's. Thank you. So, yeah, yes, we can display here. Yes, supervisors. Okay, so I don't, because why would it really care if somebody sees a question for?
0:06:09 Dave McLean: I don't think they. I don't, I don't think it should care, but it just might be confusing having to navigate through You can I can't find, I don't think there's any controversial inspection that would.
0:06:34 Dave McLean: Okay, let's pause that for a second. Let's define. Like, because sometimes we do have, like, an outside party. Every year we have an outside party who does 3 of our values.
0:06:51 Dave McLean: Okay, let's pause on this completely because that actually is more related to this one. So, if I'm understanding what you're saying, this would be for the purpose of storing it in Intellects, assuming you want to store it in Intellects, then it's an inspection without a checklist, because they're going
0:07:11 Dave McLean: to complete it in whatever tools they use, whether it's Excel or Excel file, checklist, whatever. What you would probably care about in that case is, hey, I need to be able to log that this inspection happened at this location, this place, on this day, uhm, this was the third party that completed the
0:07:27 Dave McLean: inspection. You got it? Uhm, when I save it, alright, and I need to be able to specify what type of inspection it is, and based on that type, there's another one of those options that we probably want to introduce on the inspection type, which is, does this thing even have a checklist?
0:07:44 Dave McLean: Because if the answer is no, it doesn't have a checklist, then we're when you save the record, it gives you an upload place, right, so, you got And probably don't get those out, so we can.
0:08:08 Dave McLean: Because those come and cheat. Right, those come to us from their system. So, yeah, so Tracker, so. And, right, um.
0:08:18 Dave McLean: And, wait, correct, right? Or, you know, we tracked you, that's it. Okay? You can, you can, so there's nothing that would prevent us from again, instead of that big checklist UI element in the middle of the page, create a file drop.
0:08:37 Dave McLean: So I, I dropped the report there and then the action plan grid below for you to log all the actions that they, they suggested.
0:08:43 Dave McLean: Normally, in my experience with these sort of third party audits or inspections, it's they're telling you a suggested list of actions.
0:08:49 Dave McLean: Hey, you should do this. You should do X, Y, and Z, and it's up to whoever it is that's entering it into the system to then, first of all, like, decide whether you're actually going to do those things, but more importantly, log it and put, put a name next to it, or if it's already complete, close it 
0:09:03 Dave McLean: in. In this case, we're required to do it for what we're autographing, so that we do them annually on a cadence.
0:09:17 Dave McLean: Then there's, like, a CPU sequence. We audit, uhm, the California Public Utilities Solution, and those generate corrective actions, too.
0:09:31 Dave McLean: It's similar, though, like, I think people are going to think it's all one of them. Yeah, all provided to us by external sources.
0:09:38 Dave McLean: Externally provided. Yeah. It'd be nice to have it with all of our inspections. It would be nice to see who should report it.
0:09:45 Dave McLean: Yep. It would be nice to be able to tag it as closed. Yeah. Like, it's completed and closed. Yep. Same issue.
0:09:53 Dave McLean: Yep. So. What we would configure then is, in the inspection type, when you're setting it up, some mechanism, and we can go back and forth on what exactly the option's called and how it's structured, but some version for us to say, is this an external or is this a third-party audit, something like that
0:10:10 Dave McLean: . If I say yes to that, you don't get to define a checklist for it, because it's not your checklist. Uhm, you, the options that you show nullify where they're not relevant, so in that case, it's more about, uhm, That is the end.
0:10:26 Dave McLean: The review cycle, it's just if you, if you want to add a review at the end of it, once somebody uploads it to make sure it goes, and then on the inspection front end side of it.
0:10:36 Dave McLean: Then you would just turn. Okay, and if it's done. It was seeking to see if I go to a quicker.
0:10:47 Dave McLean: For sure, yeah, so then you define yes, I want the review. Here's who's going to do it. Here's the period of time that we have for it.
0:10:54 Dave McLean: And on the front end side, when the user goes to enter it. They would probably want to be doing that more often than not on a laptop, given that they're getting it from an email or something like that.
0:11:05 Dave McLean: Okay, perfect, alright. No, certainly a laptop specifically, but not a mobile app. When they go, they're going to say, hey, I want to log a new inspection.
0:11:14 Dave McLean: Select a type, it's whatever, the CUPC audit, uhm, therefore no checklist selector for it, it's just, okay, who did it, when did it happen, uhm, who did it, when did it happen, upload the file, or attach the file to it.
0:11:30 Dave McLean: When you save the record, then you get your action plan, you're going to start creating the actions just as we describe this moment.
0:11:36 Dave McLean: Do you practice like we do for the tag and track and stuff, or are you still just seeing me just upload an Excel tracker and then have to go in and update?
0:11:50 Dave McLean: No, no, you, you, what you're uploading is whatever the output from the third party was. Yeah, so that the file is there.
0:11:57 Dave McLean: And when you save the record to go add action plans, you're using the exact same action button form we saw the morning where what is the action?
0:12:05 Dave McLean: Is this already complete? Yes or no? If I say yes, here's the completion details. If I say no, it's not complete, then here's who's responsible.
0:12:12 Dave McLean: Here's the date, the target date that it needs to be done, and it's now a workflow driven task. Something that could be loaded that would automatically update the suggested correctives, so somebody doesn't have to make them up, like, take them.
0:12:30 Dave McLean: Like a CSV file. It comes back to something we said yesterday. Anytime we're importing something, we're updating something. It's a risky thing.
0:12:38 Dave McLean: You get one value wrong, they're updating another record, unbeknownst to them. It's not, the import tool is not designed for non-admins to be using it.
0:12:47 Dave McLean: It's a legacy data migration tool, or an integration tool, as opposed to, as opposed to a bulk uploader in the front-end user-facing You know, all the items, you know, it wouldn't show up in our report, the, all the, their inspection checkpoints, just their, just the deficiencies so we can ensure that
0:13:19 Dave McLean: they get permission. That is not signed, yeah, so like. Out of the report, somebody would have maybe a printout of the report they'd be typing in.
0:13:27 Dave McLean: Yep. Some correctives, assigning them due dates. Yep. When all the correctives are closed, could it automatically close the inspection? Or does somebody have to plug it Because each corrective action has its own workflow.
0:13:43 Dave McLean: As a general rule, we don't leave the inspection open pending the completion of the actions. The sort of general mindset of keeping the inspection open is as a placeholder so that somebody is tracking the actions to complete the actions.
0:13:55 Dave McLean: That's my mind. But if every individual action is a tracked workflow task in the system that has its own reminder notification schedules, it shows up on task lists, it can escalate to supervisors or whoever.
0:14:09 Dave McLean: Sort of different. I can do that, like, pick 3rd in world of inspections, pick 3rd shardings, give me the practice that are on them.
0:14:18 Dave McLean: You can. Or overview. And that's all easy to find, right? Yep, yep, there's Yep, Um, maybe, uh. Maybe, uh.
0:14:39 Dave McLean: Ease of use sort of middle ground that we can introduce. To that rather than a workflow stage. Workflow workflow always implies that you need to do something to it.
0:14:49 Dave McLean: Maybe it's a class of like a calculated classification. So if you're looking at the inspection list, you see the record number, the location, the type, the who did it, when it was done, all that kind of stuff, but a current status in addition to the workflow of it.
0:15:04 Dave McLean: And it's a, you know. Fully complete versus, you know, it's still in progress versus hey, it's complete, but there's still some actions open so that now it's at least a little easier for you to.
0:15:15 Dave McLean: Isolate for, hey, show me the CUPC inspections where we still have some actions open, right? And then that way it's less about it creating a workflow task, but it's now an easier to use filter criteria.
0:15:31 Dave McLean: Maybe it's not going to have questions, but overview items. Right, right. Maybe like a full contract or something. Yep. That's to a meeting.
0:15:44 Dave McLean: Yep. Yeah, that's, uh. You got generally want that real workflow status to be bound to.
0:15:58 Dave McLean: I actually need the person to do something in that stage. So what it would be is, but again, usually it's, um, as you're filling out the action plans, the moment the action plans are logged, they're assigned.
0:16:11 Dave McLean: There isn't a delay or a hold back. It's okay. Save it. Ed's got his got his action when I move the inspection for it.
0:16:18 Dave McLean: So I submit the action and now. Goes to Amy for review or whoever the designated reviewer for that type is, you review it and the action plan is in a stage called first review or under review, whatever it ends up, whatever we want to caption.
0:16:32 Dave McLean: I think it's called first review. Because it supports two layers of reviews, optional. So, you would have it in that first review stage.
0:16:43 Dave McLean: When you complete your review and accept it as yes, this is complete and accurate, it's closed. The, the, this inspection itself, but that classification field would still say, as long as there are open action plans, you know, pending action completion or, or open action still assigned, something like
0:16:59 Dave McLean: that. Which, again, makes it easier for you to search, or it creates a different slice of the pie here. So, let's see.
0:17:11 Dave McLean: Thank you for the second review after the second part, it's pretty painful. Then, um, does C&T Coordinator gets a list of actions that are, like, for their workflow.
0:17:28 Dave McLean: So, they've opened up their workflow, they've got 25 actions. I go to my first one. Sometimes people don't write things very thoroughly.
0:17:37 Dave McLean: You know, they might say, uhm, fix the sign, you know, right? Yeah, yeah, yeah. But then you don't really know what So, will there be the other part where, I don't know, that's the corrective, but what was the comment, what was We're talking about a third party, you're pivoting back to, okay.
0:17:57 Dave McLean: So, putting aside the third party. Yeah, yeah, yeah, no problem. So, putting, putting aside the side, putting aside third party, that's in this case.
0:18:12 Dave McLean: So, back to the ones where you're actually entering the results of the inspection. It wouldn't be, because the, the third party one, you're just uploading a file.
0:18:22 Dave McLean: You're not actually storing the detail of the individual you. Questions that were So again, I'm going to I'm going to separate because functionally it does matter.
0:18:45 Dave McLean: Right, so for internal, the action plan is not only related to the inspection, it's related to the question and that's displayed on the action.
0:18:53 Dave McLean: The inspection also, the field that references the inspection is a link that lets them go back, provided they have the view permission to the inspection application.
0:19:02 Dave McLean: They click the link and it now shows them the inspection. In addition to that, the action plan question that that action is related to, provided it is related to a question that you can't create separate.
0:19:18 Dave McLean: So in that scenario, your question reference would show, you know, this was question number one. Here's the question text. Here's the answer.
0:19:26 Dave McLean: So that was given here's the comment on the actions that. It's on the form itself. You, yeah. If you want the photo, the photos attached to the action, or sorry.
0:19:50 Dave McLean: Photos attached to the question. We can get, we can give you. Oh, I'm sorry that, uh, like the completion as opposed to a photo of the problem.
0:20:02 Dave McLean: It's the photos. Yes, they can attach a photo to the actual stuff. Yeah, I think. I think the pragmatically the way that these in the scenario, you're describing where it's a 2nd review, the safety coordinator reviewing it after all the actions have been completed.
0:20:25 Dave McLean: So they're sitting on it until all those actions are done the way they're probably going to do. It is when they scroll down below.
0:20:30 Dave McLean: Below the list of questions on the inspection, they'll see a summary of all of the actions that were created for that inspection, including completion status and anything they want to dig into a little bit further.
0:20:42 Dave McLean: Click into it. Now I see the question. Now I see the comment, the answer, and now I can. I can backtrack into the photo if I need to.
0:20:49 Dave McLean: All of that would be driven off of the action plan summary at the bottom of the, ah, at the bottom of the inspection.
0:20:55 Dave McLean: In terms of logic for the corrective action, so something we had faced with safety culture was folks were just going in and courting.
0:21:02 Dave McLean: Items, so we had required, we went in and put some logic in that said, they got to write a comment, upload a picture, something.
0:21:11 Dave McLean: They can't just go say it was, you know, by accident. Yeah, well, same is true. Same is true for us, it forces a comment.
0:21:18 Dave McLean: Yeah, for exactly, even just mistakes, sometimes people accidentally click it and it closes it out, it's, we're giving the benefit of the doubt here, right, but, uh, it's, it's not the easiest thing to reopen any given workflow action, so, yeah, we validate to make sure that there's at least a comment
0:21:34 Dave McLean: that's been entered, right. When they, when they go to close it. Same goes for what we would do if they were adding an action that they've already completed, when they take that little option to say it's already complete, they'd have to put the comment in, which will go into the same place in their completion
0:21:49 Dave McLean: notes. Yeah, I can see. Yep, whatever they, whatever they identify.
0:22:07 Dave McLean: You know, and accessible, blah, blah, blah.
0:22:19 Dave McLean: And no, right? And then it. Triggered our logic trigger, it requires an action. Maybe it requires a comment. And that's how you post it, right?
0:22:30 Dave McLean: Post it. Yeah, Okay. So in terms of creating those third party or those, um, corrective action. Actions for the third party findings, are you saying it's just, it's a matter of us working with the person, our health and safety coordinator or whoever, you know, to key it in?
0:22:50 Dave McLean: You got it. Because when you create the action for a, for a third party audits, because there is no question in intellects to join that action plan 2, there's nothing that actually carries that additional context.
0:23:02 Dave McLean: So let's still be crashing like 12345. It still would be a numbered list with assigned parties. All of that would be good.
0:23:13 Dave McLean: There's just no context. It'd make for sloppy. It's not clear. So now a checker is trying to check, but they have no idea what they're approving in this case.
0:23:24 Dave McLean: I see the problem here. Getting too low. It's the, like, the action required doesn't really carry enough information for them to sort of fully and completely solve the problem.
0:23:39 Dave McLean: and you tell somebody to, check the fire extinguisher, without actually telling them why they're checking the fire extinguisher, then are they actually going to check it for the thing you need them to, and on the one hand, Right.
0:23:54 Dave McLean: So, Is the answer, like, And there's still nothing that's going to absolve the person creating these action plans and intellects from identifying that information, but if it's about queuing them to do it, then it can be a separate field that only shows for third-party actions, which would be the, you
0:24:18 Dave McLean: know, finding, or whatever, whatever you want to call it, field, but a text field for them to describe the problem, and then the action required to do, and that would show in place of the question reference that would happen for an internal list.
0:24:31 Dave McLean: Doesn't that make sense? Okay. This stuff is a lot of, um, repetitive work, because it wasn't, you know, done in intellect, so it's like, we have a PDF, now we're retyping, typing, now we're retyping, maybe, or coming up with the brackets.
0:24:52 Dave McLean: It just sounds like something people are not going to have a happy day to do. Yep. Because, I mean, some of those inspections are, like, that's what we're going to do now.
0:25:05 Dave McLean: Yeah. But at least now Yeah. And so we come back to the findings. I think If we're talking about sort of pragmatically what it is that you're going to get out of this, like, what you're coming back to is you don't want somebody doing the data entry.
0:25:32 Dave McLean: And so, but because by definition, these reports are coming from 3rd parties whom you don't control the format of the structure of the output that you get from them.
0:25:43 Dave McLean: This party sends you a CSV. This 1 sends you a PDF that's locked down. This 1 sends you a Word document.
0:25:50 Dave McLean: Even if, even if our scope of work said, hey, let's go build a custom data loader for this, where you can just give the file and it parses it out, that would work for one of those parties.
0:25:59 Dave McLean: And the moment any of those parties change that structure, the thing needs to be recompiled. They make a list of findings and suggest correctives and give it to me, and I would just copy and paste it.
0:26:17 Dave McLean: You know, it could be streamlined. But it would take someone, like, you know, having those skill sets, like, write the prompt and provide the, you know, stuff our team just does.
0:26:28 Dave McLean: I also see it, though, maybe occurring, though, maybe just a little bit bigger, Amy, like. Take our, um, Crest, the 3rd part of the, um, CPP, whichever one.
0:26:40 Dave McLean: We did a report back, and it's typically, it, well, they're site-specific. Yeah. And something's triggered in it. Either it was a regulatory audit.
0:26:48 Dave McLean: Yeah. Or it's because we have agreements with off-takers that we're requiring, that we have, it's a compliance matter. Yeah. So, um, what I would do is, I would sit down first with the site team and review the summary, right?
0:27:08 Dave McLean: Here were all the findings, so on and so forth. What do you suggest be the corrective action for this deficiency or this finding?
0:27:17 Dave McLean: And then from that meeting, that is what varies. Exactly. Because, like, they, I mean, ideally, in my mind, ideally, like, I would never want a site manager or supervisor to ever be blindsided by a third-party audit finding through intelligence, right?
0:27:35 Dave McLean: They should know about it before me on. And then be expecting that that was going to be a site manager.
0:27:43 Dave McLean: Yeah. Somebody like Dave might have somebody from his own team do this and not Jason. Right. And maybe, like, they'd get the records and stuff.
0:27:51 Dave McLean: Right. There's certain people who would just be taking it. Right. OK, so work around. Yeah, I'm not committed. So like those are the findings, but definitely like the corrective and responsible party and everything like it.
0:28:08 Dave McLean: I'd say we start there. We say, when we say, when we say finding as a, like, if I imagine what it's going to look like, it's like, for that action plan.
0:28:20 Dave McLean: Yeah, well, so for an action plan, you have the action required. And then, you know, already complete. Checkmark, and so on, everything that comes from there.
0:28:35 Dave McLean: Now, for an internal one, it's going to have an inspection reference. With a, you know, number 25, with a link that lets you go back, and a questions reference, which would be, whatever it is, with the answer, and then the comment, or something like that.
0:28:53 Dave McLean: What if, what if that fields for the exit? External ones. Instead of showing a question, because there is no reference to a question in Intellects, it substitutes out for a, just a straight text field.
0:29:04 Dave McLean: And then at least, I want to try without it. Without it, we'll queue them to give us the, give us all context needed to complete the action in the actual call.
0:29:27 Dave McLean: Backfired, so just be very discreet. Or if it's Steve and his guys doing it, he knows what they need, so he just takes a photo of it.
0:29:39 Dave McLean: Right, so he takes a photo of it. Maybe it's fine. Yeah, we have a It's very, very difficult to administrate in Bergen, it's very difficult.
0:29:59 Dave McLean: There was, there was a little, uh, jaunt on an unexpected road, so that's okay, because I said we were almost done.
0:30:15 Dave McLean: Is that a scenario that cites within the same establishment, you mean?
0:30:29 Dave McLean: No. That would still be without a lot of stabbing. Well, thanks for playing. I'll see you I'll just ... ...
0:31:04 Dave McLean: So, in our records, we call an inspection and an audit the same thing, so I think one of these is, one of these is an audit, so it's, that's One of them was, It's probably more of an investigation than an inspection, it's definitely an investigation, so it would be a, it was a prostitute establishment
0:31:32 Dave McLean: , so they said it may not be, it may not be for us, but other non-sites do not be specific as to what that is.
0:31:39 Dave McLean: Okay. Okay. And if that changes, Delaware can be changed. There were no, like, same type of complaints, there was no, like, it was like, give us an answer to this project.
0:31:53 Dave McLean: Here's a regulatory requirement. Go out, look at this, and see if it's meeting this requirement. It wasn't like, it would be a much bigger thing to fix it if it wasn't compliant.
0:32:06 Dave McLean: It's not like, there's just a simple little prep in. Yeah. Yep, I mean, the term somewhat become interchangeable, but if, if in that sense, what you're going out to look at is a single specific compliance requirement.
0:32:24 Dave McLean: Yes. Okay. I would agree I wouldn't call that an audit in the sense that, yeah, So, yeah, I didn't want to hang out the whole time, like, to correct it.
0:32:39 Dave McLean: Yeah. Yeah. Yeah, and I don't think it aligns. I don't think it aligns with 1 of our kind of core 3 programs that we're starting with.
0:32:48 Dave McLean: Yeah, it's a compliance model. I don't think it's going to show up at work, but like, something like that might go there.
0:32:58 Dave McLean: Yeah, the idea is that you, through typically a content feed from a 3rd party, like, uh, Hesa is the biggest one that I think in OpsWorks.
0:33:06 Dave McLean: It's the only one The content provider provides like a global list of requirements for the sites that you're you operate based on local requirements, state requirements, federal requirements, uhm, somewhere, whether it's on the Hesa side or the Intellect side, I mean, you do an applicability analysis
0:33:25 Dave McLean: to decide what's relevant and what's not, which builds a compliance profile for that site. Those compliance requirements then have tasks that you can create and generate that are associated with them.
0:33:35 Dave McLean: So, if one of those requirements says, you know, thou shalt do a, you know, you have to go check this thing every six months or something like that, that's your task that you're creating.
0:33:46 Dave McLean: You define the task template, which carries the recurrence logic, and each time the task happens, it's a history record against that, that, uh, that task.
0:33:55 Dave McLean: The word is template, but it's not really a template. It's a, it's like a compliance task. So, you're, you're making.
0:34:02 Dave McLean: So, the day we get that, it might be two years, but for about a week or something, until then, like, might have inspection CS to do for spill prevention plans, right?
0:34:15 Dave McLean: The, well, the FBCC. So, um, there's monthly inspections on certain things, certain areas. So, in the future, that would be part of that, right?
0:34:27 Dave McLean: That would be in that model as opposed to the inspections. So, this is, this is where they kind of stream a little differently and you decide.
0:34:34 Dave McLean: How you want to use them. The compliance tracking one, the task is just a task. It isn't, it doesn't link to inspections.
0:34:42 Dave McLean: So, if the task is every 6 months, we need to do an inspection, then that's the cue for the person to go launch an inspection in the inspections that they're going to then they complete it.
0:34:52 Dave McLean: They come back to the compliance tasks, say, okay, it's completed, inspection number, whatever. It isn't out of the box. And I'm not going to solution a hypothetical here, but that's the model.
0:35:01 Dave McLean: So, whether it's an inspection, whether it's a, you know, a workflow that's a requirement that you do an audit or something every year, whatever the case is, they're, they're isolated tasks that join back to the requirement itself.
0:35:16 Dave McLean: And if nothing else, it at least cues the person that, hey, you've got to do this thing. And it's related back to the underlying requirement.
0:35:23 Dave McLean: So you can show your, your calendar in the compliance tracking piece that we're talking about. Generally, they're assigned to one.
0:35:36 Dave McLean: Uhm, no, you can assign them to a one. Which can have more than one person. Multiple sites you mean? They're different tasks.
0:35:45 Dave McLean: So in that sense, it's not actually creating a single task. It's creating. It's a. Anyway, it's what are you put it this way?
0:36:05 Dave McLean: If you assign it to 4 people, is this say the 1st one to get it wins? Or is it also.
0:36:11 Dave McLean: 4 people need to do? Then it is 4 tasks as far as NLX is concerned, uhm. Sure, yeah, yeah, by all means.
0:36:27 Dave McLean: Are we going to be prompting that?
0:36:39 Dave McLean: Like, we're going to go, hey, you need to do this on this frequency, because it's twice a year. Or else, oh, it's We have a tracker.
0:36:59 Dave McLean: When you create the action, or when you create the inspection, I should say, of the action plan, um, you can specify a frequency with it.
0:37:06 Dave McLean: Uh, I will say right now, I will explain all of this, I do not recommend using it this way. When you, let's say you set it up as a monthly task that needs to happen.
0:37:15 Dave McLean: Each task, each time that task gets completed, the system will automatically create a draft version of that inspection for the next month, or whatever that next period is.
0:37:24 Dave McLean: The challenge with that is that since that next iteration exists, in order for the person to complete the inspection, they have to go retrieve that one that was automatically created, which is something most users won't do.
0:37:37 Dave McLean: They don't know to go search for something that already exists. I would avoid that at all possible costs. And so this is the difference between scheduling something versus creating something.
0:37:47 Dave McLean: Creating a target schedule that needs to happen. So, what you're actually describing in my mind is we need to be able to set a target that this type of inspection happens once per month for these sites.
0:38:01 Dave McLean: And that creates a requirement. That those happen, so that as people do them, the system recognizes, oh, a new inspection was completed that was at this site, used this type, and whatever other parameters, we fulfilled that requirement so that on your matrix report, it goes from, you know, Right.
0:38:19 Dave McLean: It's green, or whatever the case is that you would want to display So, uh, let's just take the office. That's kind of simple.
0:38:33 Dave McLean: Okay, that's great. Yeah. Okay. Yep. It's whoever, whoever does it, right?
0:38:56 Dave McLean: Inspection. I can make a workgroup called Inspection Leads. And, uhm, let's say there's 3, because I have 3 sites, and each of them need to do 2 in a year.
0:39:04 Dave McLean: Now, and then I could add the second review. I could add a 1st or 2nd review by your HMS coordinator, so your audit is, because they will have reviewed.
0:39:15 Dave McLean: They will have reviewed the inspection. So I can cover that with just the steps. Okay, how do I set that up?
0:39:23 Dave McLean: Like, is that going to do to be like, do I have to go and say, okay, we know, like, here's an inspection sheet for we know, and this is given to the.
0:39:31 Dave McLean: So today, today, that doesn't exist. So if we, we open the conversation to, well, what does it take to build a target scheduler like that?
0:39:39 Dave McLean: Or, uh, you know, create something that actually tracks the, the calendar of what we need to do, the requirements for an inspection program against the actual inspections themselves.
0:39:50 Dave McLean: What you would need is something that lets you say, okay, I need to create an, I'm going to use the term program for, just a general catch-all.
0:39:57 Dave McLean: I need to create a new program. This program is going to apply to the following sites or offices or whatever the case is.
0:40:03 Dave McLean: Establishments is perfect. Uhm, the frequency of that program is every 60 days. It's twice per year. It's however you want to define the, how often this needs to happen over what period of time.
0:40:19 Dave McLean: Yep. Yep, so a target number and per, per period. You got it. You got it, uhm. And, uhm, and again, the way those work typically is that there is a version of it where it's X number of events per frequency, whether it's year, month, quarter, whatever.
0:40:38 Dave McLean: There's also another version of it where it's, it needs to happen every three months. And so if, they technically cross-reference, but like, they have different rules for what satisfies the requirement.
0:40:50 Dave McLean: You'd also specify parameters. So what kind of inspection qualifies for this one? Because if you just say, hey, I want to track inspections, it's not good enough.
0:40:58 Dave McLean: You want to specify the office inspections. For that program, and it might even go to the level of more specific criteria.
0:41:06 Dave McLean: We might need to have not just office inspections, but inspections that use this checklist. It might need to require a passing result.
0:41:13 Dave McLean: If such a thing existed or. Thanks. Okay. That's right. Thank you. That would probably be it for. I needed six, but I need to.
0:41:32 Dave McLean: Yeah, so that program is used as the engine for generating a requirement for each individual site that you identify. Right?
0:41:42 Dave McLean: And that's going to be time bound as well. So when we say over twice per year, you're basically also saying.
0:41:49 Dave McLean: Setting an end date, just because you can't perpetually run that, but every every month, every week, every day, whatever frequency we're talking about, it's going to check to see whether or not that requirement has been met by looking at the actual inspection data.
0:42:03 Dave McLean: So the moment the person creates it. And finishes it, it now maps back into whatever the requirement is to say, yes, it's been done or we're 50%.
0:42:12 Dave McLean: So that I mean, I feel like the offices tied to establishments, but I'm opening this record because I don't think these prices.
0:42:21 Dave McLean: In the operations, the health and safety checklists for operations, it's not going to, it will, they'll be within establishments, but it'll be sub areas.
0:42:31 Dave McLean: The requirement is at a lower, it's at a lower level, and it's not the resource area we talked about on the last slide.
0:42:37 Dave McLean: We talked about sites, and we said there are going to be resources. When we're talking about operations, it's specific for the rest of it.
0:42:46 Dave McLean: So, how would it work for, for the offices? Because they, they don't generally fund. It's just at the establishment level, This is New York, Reno, San Diego.
0:43:02 Dave McLean: And they use the office checklist twice a year. Each one of them need to do 2, and it's the IIPP.
0:43:09 Dave McLean: Yeah, easy. That one seems easy. Okay, um, so I can, we can slap that up. Like, prior to rolling this out, and then we don't have to have to track her anymore, at least for those.
0:43:20 Dave McLean: So we can, we can, we have the requirements for it. We can factor that into our design and make sure that aligns with the button.
0:43:25 Dave McLean: The other side of this is to build out a tracking report and figure that out. Okay. If that doesn't align with our budgetary profile, then the other side of this is.
0:43:37 Dave McLean: I mean, I would love that. The simpler option I was going to offer if we if we had. If that's going to eat up too much budget and we don't want to we don't want to throw more money at that is it can be a report that can at least present to you that data based on what exists.
0:43:51 Dave McLean: The catch, though, is that it doesn't know how to report off of the things that don't exist. So if you have a site or an office, that has a requirement for two per year, that hasn't done one yet.
0:44:02 Dave McLean: That's it, and if it doesn't have one, it won't So, in this case, we have, like, you know, this is our tracker, date of first semiannual, date of second semiannual.
0:44:26 Dave McLean: Yep. Okay. Here's responsible parties. I guess you can see that. And then there's that health and safety audit. They're supposed to be looking at the second audit of the year, reviewing it and auditing that the inspection is happening properly.
0:44:44 Dave McLean: So, we can just set that up for both. That's fine. That'll be easy. So, the data, just talk to me through the date of the annual audit.
0:44:50 Dave McLean: When we say that, that is somebody who's there to go check periodically that that site is on track for it's 2 per year?
0:44:58 Dave McLean: They're supposed to be looking at the inspection. Oh, okay. It's our reviewer. I got you. I got you. Okay. Okay.
0:45:07 Dave McLean: Hypothetically, what, what prevents us from getting, you know, if it's 2 per year for a given site, what prevents us from getting to November 1st and we haven't done one for a given site?
0:45:18 Dave McLean: This is, okay, so this is a, so is there a component that once this schedule is established, we want to use it to then drive notification or?
0:45:31 Dave McLean: Right. Yeah, November 30th and December 1st. Yeah, so some sort of a component to trigger a notification.
0:45:46 Dave McLean: If something hasn't been done by X number of days in advance. This year, they actually did that in the first half of the Yeah, all but three.
0:45:59 Dave McLean: Uhm, but then I had, that's mostly not been, like, literally, I have safety people disappear into seconds. Yeah, yeah, yeah.
0:46:09 Dave McLean: So again, I think it can be a. I don't want to guess the solution for that, but something that would at least allow you to say.
0:46:21 Dave McLean: You know, if by what. Whatever threshold in the window, we're not on track. Yeah. The spirit of this. Yes, yeah.
0:46:35 Dave McLean: OK, set a reminder date in the window. Yep, the halfway point. So, Vanessa, these are not going to align with the resources, right?
0:46:44 Dave McLean: We go to the resource route, like, our resource is going to say Mojave 1678, right? I don't see where that is.
0:47:02 Dave McLean: Like, that one, so I'm not trying to just. So, that's TFS. So, that's the battery. Oh. I'm seeing substations. Those are not going to be individual resources.
0:47:15 Dave McLean: Substations are not resources. It's like, they're part of a resource. Is that true? Sure, I think that's everything. Is ever a situation where a substation deals with energy from wind and heat?
0:47:32 Dave McLean: I don't think so. Um, yesterday we're thinking of loading, like, the resource IDs that Tristel has. So, now we're seeing, oh, well, along the um, how is somebody doing inspection?
0:47:44 Dave McLean: Well, they'll go pick a site, but we've only loaded the resource, resources per ISO. So, I don't think substations are a resource with an ID, right?
0:47:53 Dave McLean: They don't, uhm, they might have a ISO resource ID, but they do have, like, individual resource names, like how we have, uh, they have names for our switch yards and stations, like our specific ones, uhm, but, but we're on a number, because we want, right?
0:48:23 Dave McLean: Don't we want something like below with a number and a site, like, they're, you know, like, printable? Uhm, no, they don't.
0:48:31 Dave McLean: We, we might have a KAISO resource ID, uhm, I'd have to double-check that on the switch art. So, like, Edwards is not going to have a resource ID.
0:48:44 Dave McLean: Edwards is the combination of, what, like, five people? Five projects or something? Yeah. So, how would all these operational sites, so they would pick an establishment, they could do an, they can do an inspection by establish.
0:49:02 Dave McLean: Yep. That I am the need to establish. So, this comes back to what we were originally talking about with inspections in the beginning of this one.
0:49:09 Dave McLean: Do we, do we want to link in that secondary hierarchy to inspections? It sounds like, yes, we do for this case, where the inspection needs to be tied in.
0:49:18 Dave McLean: Not just at the establishment level, it's whatever we define that next level down. Is the next level down on the right-hand side of the sheet?
0:49:25 Dave McLean: It's on the left side. On the left side. It's kind of exciting. It's just a made-up construct. This is just a made-up construct.
0:49:35 Dave McLean: It's like this is how maybe the guys are organized in the field. Like, the supervisor, he oversees this stuff, so we're going to have him inspect this stuff.
0:49:44 Dave McLean: As opposed to, like, something Kaizo might recognize as a proper set of assets that are within them. But if you're setting a target for inspections to be completed, it's not just an informally stood up thing.
0:49:58 Dave McLean: It's a thing. It has to live as a thing in order for us to define. A parameter that allows you to set up a.
0:50:05 Dave McLean: A target schedule and then link in the actual inspection. So whether I mean, if it if it doesn't quite correspond to the resources that we were talking about underneath wind and so on and so on.
0:50:17 Dave McLean: Then it can also be a separate object that has no security connotation knowledge, but sounds like it makes sense. So it doesn't sound like it needs to secure the data, but if whatever we call this, let's just say it's a list of sites for the sake of site inspection name, then that would be something 
0:50:33 Dave McLean: that you guys could manage administratively. It's a big list that you would use to specify each one. My next question, though, would be, is that something that needs to be applied everywhere in the inspection application?
0:50:44 Dave McLean: And then what about, you know, when we get down the road to incident management and so on? Like, what I'm getting is a sense here that how we actually organize people and assets and structures, that that's that lowest level of the organization is, I'm not going to say arbitrary, but it's, we adapt its
0:51:04 Dave McLean: purpose depending on any given thing without actually referencing a master data list or a master list. And that is a, I hate to say it, but that's a you guys thing to solve.
0:51:16 Dave McLean: We are consumer of those types of decisions as opposed to we can solve that for you. Right, so if below the, below the level of a establishment, as we've defined the term here, if there's three different ways of organizing people.
0:51:33 Dave McLean: Right, let's see. 14, explain. Before, so again, because I can't solve it, can I, can I ask you why that, what's the, what, what's the driving factor for not having a single way of organizing the, that lowest level of the, the org chart?
0:51:55 Dave McLean: Just so that we can For all the different people. So the reason why we put them in that way is to prevent one inspection per resource.
0:52:10 Dave McLean: To break it down to the less is. Okay, so then the most. Granular possible entity would be the resource by the sounds of it.
0:52:20 Dave McLean: No, when you see those for us, I mean, I I'm paraphrasing. We have to keep each other together, yeah, there's a mix in here of establishments, maybe resources, maybe.
0:52:39 Dave McLean: And something then the resources then need to just. Is that assets or is that saving source?
0:52:50 Dave McLean: Yeah, I'm talking about like. When we spoke yesterday, we agreed. The left hand side of that sheet, for example, I want to.
0:53:04 Dave McLean: It would be resources per ISO, yeah, or whatever plan or whatever, yeah, this is substations are a resource and those do need to be individually expected, so we're, we're wondering if maybe we can break it down.
0:53:20 Dave McLean: Done by resource, I like that, but then, yeah, yeah, yeah, but I don't know how we'll create the twice a year.
0:53:31 Dave McLean: Okay, sometimes it's beneath the resource, sometimes it's a resource and sometimes. Are any of these places local? Like, within 2 hours driving distance?
0:53:43 Dave McLean: Okay, so from your sub scene. It would be just, like, just that one. You're right, I'm sharing the screen.
0:54:03 Dave McLean: Yeah. But. So, like, EdSanSubstations. Okay, yeah, so that is what I should be covering. Right, so if the inspection name is called EdSanSubstations.
0:54:24 Dave McLean: It's those three. Right. Okay, so, right, so then I guess, like, and if you said this, sorry, but when, uhm.
0:54:38 Dave McLean: That they're opening up or starting an inspection, can they select multiple resources to be tied to that one inspection? Can they say, like, that it applies to these three sites or resources?
0:54:55 Dave McLean: People put aside the question of how exactly do we define the resources in Intellects, but yes, there is a way that we can do that.
0:55:04 Dave McLean: It will not have a security context with it. That would be the one thing. It's going to have access to what needs access to, to be able to solidify them.
0:55:22 Dave McLean: Yes, but it all comes back to, again, how exactly are we structuring Intellects? So the thing that is like, okay, so for the substation example, like, when we had wind and then have like site 1, 2, 3, whatever, right?
0:55:39 Dave McLean: The substation version of this, right? Which we potentially said we'd have to decide if hybrid or high voltage was its own, like, tree.
0:55:48 Dave McLean: Let's say that it is, right? So it'd be high voltage, and then we would have all the individual, right? So for the Ed, San ones, it would be Edward, Sunward, whatever the other one, right?
0:55:59 Dave McLean: And then underneath it would also be the Palm Springs ones, right? And then when we have this construct on the right side, yeah, so Palm for Abraham, who's at Palm Springs, he would be on this side.
0:56:16 Dave McLean: On the right side, he would be under Palm Springs, and then when we combine it with the one on the left, he would just select the Palm Springs sites and or substations and that then he would only see those things because they would go to the intersection of like, that's.
0:56:33 Dave McLean: The lowest common denominator, so he'd only see all the Palm Springs, but if just add to Palm Springs plus HB, so say we did on the left-hand side have an HB, we could get on the right-hand side.
0:56:56 Dave McLean: He would only see the specific, yeah, the specific substations, he wouldn't just get access to all of each, he would just go down to the specific, whatever the Palm Springs are.
0:57:04 Dave McLean: Like, you would be able to pick Altwin, VanWin, and SanWin. And then, like, so Marty, right? Like, you don't want him Like, you just pick, but you don't I don't, I don't think it's going to be a discussion, but I just want to put that out there.
0:57:26 Dave McLean: You know, I'm trying to figure out how somebody, how we're going to do a signed cadence of discussions. Because, like, for offices, the offices section, we can assign a cadence twice a year for the re-establishment of the workers.
0:57:44 Dave McLean: Again, and it'll structure, it'll structure the processes. This one has some exceptions. That's helpful for adults. That is. Versus what they need for their guidance and their guidelines.
0:58:08 Dave McLean: I, one, inspection to multiple sites. Again, we're talking about it in three different contexts without making a single decision on any of them.
0:58:21 Dave McLean: I can have an inspection where you can pick multiple sites. Because that's me creating a specific relationship, a many-to-many relationship to that site, object, or resource, or whatever.
0:58:36 Dave McLean: Right. Right. So, even if we did that, Oh, because they have, like. Because it's seriously confusing. I'm not following because I don't understand the underlying structure.
0:59:11 Dave McLean: Let's see. And, and, And truthfully, it seems like no matter what we decide here, the TerraGen problem to solve first is that depending on specific contexts, you change how you organize these things.
0:59:29 Dave McLean: We will never be able to follow that in any consistent way. So if that's the thing that we want to work towards, then it means, okay, that's fine.
0:59:40 Dave McLean: We can create an object, store Palm Springs substations, Palm Springs wind building 1. Palm Springs wind building 2, building 12, and so on and so forth, and that will have nothing to do with security.
0:59:51 Dave McLean: It's literally just a list that it can get used in one context or another context. It's just, it's just a field that has no behavioral characteristics.
1:00:02 Dave McLean: It's just to it. Yes, I mean, we have to burp into that or something. We're going to have to start to be in process.
1:00:29 Dave McLean: So, I don't think that there's a. To say nothing of the fact that, sorry to interrupt, all of what we're talking about here.
1:00:38 Dave McLean: From what we heard this morning about what's in the HR database, none of it exists. So all of this is a moot point if none of that exists in the HR side of things, because.
1:00:48 Dave McLean: Then this is all, this is all a moot point, because if we're still shooting to have an HR feed, where those people need to be sent to intellects and automatically placed into an org structure somewhere, that org structure needs to exist in the HR system.
1:01:06 Dave McLean: This isn't Like, we've talked about it in a couple of sentences of, oh, so-and-so should be able to log in and only see the ones that that he needs to be able to see.
1:01:29 Dave McLean: That's a security context, which means the system needs to be aware of what he aligns with. If that's not a need.
1:01:36 Dave McLean: Right, if it's an item, right? I log into Mojave, because that's the establishment that I'm assigned to, and I see all of it for Mojave, and I might have to search for it.
1:01:46 Dave McLean: I have to do a little bit of digging to search for the specific site that I'm looking for. We're in business.
1:01:50 Dave McLean: We, that has nothing to do with the HR's feet, but this is where I come back to where we're throwing about 3 different sets of requirements together without an actual decision on them.
1:02:00 Dave McLean: So, I think the 1st part is. We, we know we want an HR fee. Right, that's that's immutable. Perfect. Right.
1:02:09 Dave McLean: And as a con, as a constraint on as a constraint of that, that means that any security context that is applied to those users for what breadth of the organization or what they can see has to exist.
1:02:24 Dave McLean: That data has to exist in the HR feed. If it doesn't exist there, we can't automatically stand somebody up with access to this part of the order, that part of the order, this set of records, or that set of records without it.
1:02:35 Dave McLean: Does it need, does the HR feed have to include, like, Site 1, 2, 3, blah, blah, blah? If you expect it to provide a security context.
1:02:47 Dave McLean: Okay. Right? If you don't, if it's, if it's, let's say we, we envision it, forget the left side, right side of the board, let's say it's literally just establishment-level orgs.
1:02:58 Dave McLean: The org structure is setting security on records, so I create a user at Mojave, and when they log into it, and I realize this is slightly oversimplified for word of action, but when they log in and they go to the inspection application, they see everything that was bound to Mojave.
1:03:12 Dave McLean: That's okay. Or that's not that's, that's, say, it's okay, it's up to you, that's possible. It means that if they were to look for a specific inspection that happened at Mojave Wind Area 2 substations, they'd have to search for that.
1:03:28 Dave McLean: There's nothing that's going to automatically say, oh, you've got access to that. That thing, because that thing isn't something that controls access.
1:03:36 Dave McLean: I don't think so. You'd have a field when you create the inspection that would allow you to pick the site.
1:03:47 Dave McLean: You got it, whatever it is, and you got it. So let's say there's a, there's a site drop down on the inspection form that you select one of these options from when you, when you create the inspection.
1:04:01 Dave McLean: So when I say search, for it, I mean, you enter in a filter criteria on the list, say, hey, show me all of the inspections that were tied to Mojave Wind Area 2 substations.
1:04:10 Dave McLean: And when you hit enter, you get a narrower, narrower set of lists. That isn't security, that's filtering. Bye. So, it's the Mojave that I'm going to see the Palm Springs ones.
1:04:33 Dave McLean: If we tell you where these establishments are, like, if we say the Diff 6 shop is Mojave, will the Palm Springs guy also be able to, you know, see the Mojave?
1:04:47 Dave McLean: So, you're saying then, if you tell us, if everything that's in column B here, if you can align each one of those to an establishment, then what that means is all of the inspection records, when they get created, since you're selecting an establishment and then a site from within that establishment, 
1:05:02 Dave McLean: it means that, you know, a Mojave user is not going to see any of the Palm Springs, so they would not.
1:05:07 Dave McLean: Okay, so if we use this list as it is, would it be. Um, sites under those, like, in a pick list or something, it would not set any security criteria.
1:05:26 Dave McLean: And then if, like, in 6 months or a year, somebody's doing inspections on their made-up basis, that is another sheet of 50 that are tied to establishments You're going to have to, any new group that comes in, you're going to have to work with them, or have us work with them, whatever that looks like,
1:05:51 Dave McLean: to either fit the existing data model that exists, Or, If there's some fundamental reason why that structure needs to exist, maybe it's no longer about a site, maybe that particular user wants it to be, like, areas of buildings, washrooms, versus this, versus that, kind of, hypothetically.
1:06:10 Dave McLean: Then, I mean, they have to make the business of business case for why that, that change should be made to Infolex, but then it becomes We didn't have a, uhm, library.
1:06:30 Dave McLean: How is this different than a library? The, the equipment Yeah. So, how is this different than equipment? I mean, you tell me, like, are these assets?
1:06:41 Dave McLean: Would these be fed in through an equipment piece? That would go through that? That wasn't about fire extinguishers, that was about trucks, that was about, it's, it's, it's ultimately, yeah, it's ultimately designed for, it's ultimately you guys decide what the scope of that term equipment is.
1:07:02 Dave McLean: What if I said the, what, I don't understand why, why do I have to put them underneath there? Why can't I just make a library of these and then make an inspection cadence associated with the library instead of maybe muddying the waters here with things that don't, that aren't renewable?
1:07:16 Dave McLean: I mean, these aren't, these aren't real operations, but they're kind of made up. What I'm saying, what I'm saying back here for this was essentially this would just be a different picklist in addition to equipment.
1:07:29 Dave McLean: So on your inspection form, when you. Setting it up, say your first thing, your first thing you're going to answer is the location of the inspection and out of the box there's the inspection type, checklist.
1:07:47 Dave McLean: And if you're doing the equipment one, that we talked about, the equipment one will show up down here. If you wanted to build this in with another one.
1:07:59 Dave McLean: Just going to try and cite that, cite your taxonomy for It works. It would be a hit list there. So, depending on the specific type of inspection that you're doing, is it a site level inspection?
1:08:14 Dave McLean: Is it an equipment level inspection? None of this still has anything to do with security context, so it has nothing to do with the hierarchy.
1:08:20 Dave McLean: It's just another way to classify an inspection. It's another field to be able to add more metadata that describes an inspection.
1:08:31 Dave McLean: I guess I thought. Like, uhm, if I wanted to set up equipment inspections, there would be different kinds of equipment.
1:08:42 Dave McLean: Let's say I have a list, a library of AEDs, a library of others. Yeah, you decide what the equipment is.
1:08:47 Dave McLean: Right, and I'm not going to go pick off a pick list where it's going to have an AED, a fire extinguisher, and a truck, you know, because that would be, like, thousands of lines long.
1:08:56 Dave McLean: Like, I assume somewhere I'm going to go, this is a vehicle inspection, and then only vehicles would pop up. Is that true?
1:09:02 Dave McLean: That's where, that's why you would use the text option. Yeah, so if you're doing an equipment inspection where you don't actually have a asset list, numbered assets.
1:09:10 Dave McLean: See, I do, I have asset lists for all those, just pretend. Okay. I have an AED list with numbers, a fire extinguisher list with some kind of numbering.
1:09:18 Dave McLean: Okay. And it, our trucks are numbered. Okay, so whatever that scope of assets is, let's say it's 10,000 items long.
1:09:24 Dave McLean: 10,000. Every 1 of those has a number, a name, a manufacturer, a type of asset. All of that's going into an asset object, a table that stores the list of, that's the library.
1:09:36 Dave McLean: You got it. No, it's 1, it's 1 bucket. 1 bucket, and they're classified. Okay, um, so in that context. If I was doing a truck inspection, vehicle inspection, do, do, do.
1:09:55 Dave McLean: I'm going to pick my assets, yep, and then I'm only going to see an equipment vehicle. Nope, nope, it's the only connection is if you say that the vehicle inspection type has equipment tracking, it shows the equipment list.
1:10:12 Dave McLean: There's nothing else. There's nothing that filters this list of equipment for specific subcategories of equipment. Say that what you just said one more time.
1:10:22 Dave McLean: So if I have, if I have 10 different kinds of equipment in here, there's nothing that connects this to filter this list to a specific subset of that.
1:10:33 Dave McLean: The option as it's currently constructed only shows the field. If you want to go the next level down, so if you want to say that, hey, that inspection type, not only does it show the equipment list, but it should filter it for just this type of equipment, we can do that, but that's not a thing that we
1:10:49 Dave McLean: talked about this morning. It's not really the scope either. I agree. It's the other sites. I agree. Right. Yeah. Is that here?
1:11:01 Dave McLean: Because I just figured it out. If you say I'm going to list my vehicles through a library, like you were saying, like, I want them to.
1:11:09 Dave McLean: It's just a flat list in that regard. So if you want to make it more dynamic, yeah, to your point, that's fine.
1:11:16 Dave McLean: Would that be a customization to add in a later configuration? Okay, so we've got an ignoring equipment in this case, because it's not actually relevant to this example.
1:11:29 Dave McLean: So sites, yeah. The sites that need to be inspected on some patents or something. I mean, that is just not all going to end up.
1:11:43 Dave McLean: And again, I will say once again, if if these sites have nothing to do with security, this isn't actually that important.
1:11:49 Dave McLean: It's not complicated. It's not. It means we create a site object, just like the equipment one. So this is an object list, like your equipment list.
1:11:59 Dave McLean: Yes, you got it. We load this list in, and it can include column B, column C, column D is the one that has to here, by the looks of it, right?
1:12:09 Dave McLean: So then, as a result of that relationship, it means we can at least filter this. If I create an inspection and say it's Mojave, and then we see the Mojave site.
1:12:17 Dave McLean: It's that. Okay. And if it's not, then it's just the, it's just a list of sites then. And so, from the target setting side of this, we tie in the same thing.
1:12:30 Dave McLean: Because when I said before that when I establish a target for a given establishment for a given period of time with a given frequency and a given set of rules that can extend beyond just the type of inspection and the checklist, if it also needs to include for this site or for this whatever, it just 
1:12:47 Dave McLean: means that each site will have its own rule that's being tracked, independent of the others. What is the, the main goal?
1:12:54 Dave McLean: I'm trying to all the different frequencies that you can set up. Is it the establishment? Yeah, that's the 1 that's going to that's like the key 1.
1:13:04 Dave McLean: Yeah. Okay. But then, if we're further breaking it down. To, you know, even if we're grooving that way, EdSandsSubstations, it's a couple of things.
1:13:18 Dave McLean: Sorry, I gotta, I gotta ask you terminology is considered when we say EdSandsSubstations. Is that a site? That would be a site.
1:13:25 Dave McLean: Okay. So that can have its own cadence, even though it's one of many sites under Mojave that we would want to have a different cadence.
1:13:35 Dave McLean: Yeah, and if you want to tie site into that kind of rule engine, not only can it, it must, every time.
1:13:41 Dave McLean: Every site must have its own cadence that you're building. So if you've got 100 sites, you have to set a hundred yearly calendars that say for this establishment, this site combination, for this inspection type, we expect two per year.
1:13:58 Dave McLean: You got it. Now, administrate, that's going to be more likely an administrator or an application administrator. That's a high level thing.
1:14:06 Dave McLean: So you can, you'd be more likely to be doing both. Okay, you could load that in from inspection. So, okay, that's another requirement.
1:14:16 Dave McLean: So, we'll come back to that in Yeah. And moving that's on the screen. Yeah. Then that can be like a standoff thing where it's covering the 3 sites Whitney need and it has its own cadence separate from San Diego and Dallas.
1:14:40 Dave McLean: So, these are the are number at the, I don't know what point in the conversation where they were like, this is an arbitrary list.
1:14:52 Dave McLean: This is not how our literal sites are named. That's what we're talking about. So, like, Ed San substations. Thanks. Awesome.
1:15:02 Dave McLean: In this list, that's not a true. Resource name or site name. That is just a group of 3 resources that can be on 1 inspection.
1:15:17 Dave McLean: So, for example. The site drop down that's in here that you said we could make them and it's a standalone thing has nothing to do with any other things because it's a specific tied to a specific type of inspection and it's 1 of the sites that are an option, right?
1:15:34 Dave McLean: You can. So that can have My concern is whether you shoot because we're, we've acknowledged that this is an arbitrary collection.
1:15:42 Dave McLean: So if it's actually arbitrary, then my challenge back to you guys is why do you Okay. But why specific to this inspection program?
1:15:55 Dave McLean: If it, if it, if it's not arbitrary, if it's something about. Like, how the teams are all in class, like the same person.
1:16:06 Dave McLean: Okay, would be required to do those 3 site inspections. So rather than make that person do 3 separate inspections on 1 for each resource, we group them together and then that.
1:16:23 Dave McLean: Employee just goes out and goes resource 1, resource 2, resource 3, 1 inspection for them. It's for, like, efficiency for them, so they don't have to, like, do duplicated work.
1:16:38 Dave McLean: So, like, I think. I think, like, this is a case where the high-voltage team is parked out because they inspect the substations, even though substation and solar panels are together.
1:16:52 Dave McLean: Yeah, on-site. Yeah, yeah. Yeah, no, so, and admittedly, this is where, when I was saying, like, hey, is there somebody local, the context for that question that I was telling Matthew earlier is I had a very similar problem with an oil drilling company once.
1:17:06 Dave McLean: We drove up to an oil rig, and the moment you see the rig and get up there and see what they're talking about, it's, oh, this makes a lot more sense about how things are organized on site.
1:17:14 Dave McLean: It's, uh, it's always a nice to have, but it's not a positive thing. Yeah, like, when you see it, it feels like, uhm, like, uh, Windows is a good example.
1:17:24 Dave McLean: Yeah. Because, if you look at it, like, at, uh, Mountain, where there's several turbines, they all just are, like, a bunch of little white sticks with fans on them.
1:17:37 Dave McLean: But, while you might see plenty, like, little fans out there, there's actually five plants. And, like, one plant might have one turbine, one plant might consist of four turbines, and one plant might have the rest of the ones on that one mountain where you're looking.
1:17:57 Dave McLean: And there's no nec- I mean, like, when you're when you go up close to them, you can see that they're arranged in, like, sort of like a grid.
1:18:04 Dave McLean: Yeah. But, like, from the distance, it just looks like they're all over the place. Yeah, And you can't- And they're literally- You can't dozens of them.
1:18:10 Dave McLean: Right. They're literally right next to each other. So you can have two turbines right next to each other, but they can't be on two completely different plans, and they may have two completely different owners.
1:18:20 Dave McLean: And then somewhere down the hill is where the substation is, where all of those little wind farm fans connect to.
1:18:27 Dave McLean: Yeah. And so that is one of why we would have a high voltage team member who is assigned to Palm Springs, who is assigned to that site as he is going to go inspect that substation.
1:18:42 Dave McLean: And then all the different wind farms, or like, plants, right? Even though, like, it's a different plant, it may consist of multiple actual turbines, or little fans, right?
1:18:56 Dave McLean: And so, like, one row of five is 1.5. And then the next row is a different plant, and then the next row is a different plant, like, so.
1:19:03 Dave McLean: Just to interpret what you're doing, when you say plant, is that corresponding to resource? Yeah. As we were describing earlier, so.
1:19:09 Dave McLean: But in our company, we don't call them plants. Yeah, we don't call them plants, mainly because they're plants. It's just like a weird thing, because it's renewables, but yes, it would be a plant.
1:19:18 Dave McLean: A plant and a resource are the same, and the little hierarchy on the right side, where we were saying site 1, 2, 3, that would be basically a resource.
1:19:31 Dave McLean: Okay, To my point earlier that I was going to make is, like, I don't think that Whitney's needs, like, let's say that she needs the.
1:19:41 Dave McLean: The 1 inspection that covers 3 substations, I don't think that it conflicts with. The structure that we was on the right to make security more granular, but I did want to confirm that you said, like, if we did want to employ that as part of the security setup, that needs to be part of the HR feed?
1:20:03 Dave McLean: Yeah. Yeah, because there's nothing for you to load those people into. So, different problems, so you gotta set that aside for now.
1:20:18 Dave McLean: Okay, can we try a new group on group security? Which would be, you That may or may not But that's what we keep on doing.
1:20:35 Dave McLean: And is it possible to have these sites load, just these sites load that we want to hear from? Yeah, so if you say YIPP, that's going to give you the specific checklist selector for whatever type, so let's say it's the environmental one, and if you want, if this site field is something that is specific
1:21:02 Dave McLean: to IIQP checklist, this would show as a result of you selecting IIQP. Is this something every single person's going to come in and do to initiate their IIQP inspection?
1:21:15 Dave McLean: Like, oh, I know I'm on the book to do an inspection. So this is like what I would see. Yeah, you got it.
1:21:21 Dave McLean: You got it. So they pick their establishment. I click. New York office. Yep. Okay. This is one of the easy ones.
1:21:28 Dave McLean: I'm at the New York office. There's nothing really inspections they are going to be doing, maybe fire extinction stuff. So let's just say magically IIQP is in the checklist though.
1:21:39 Dave McLean: So now, yeah, and then it populates the H and S office inspection checklist, right? And they don't have a site, right?
1:21:49 Dave McLean: Because it's, you know, not necessary. So it's just they knew you want It could be one thing, but it would have to have something.
1:22:04 Dave McLean: Otherwise, it can't connect to the room. Establishment is, um, Baham Springs. I know I'm doing and I, I, I, Yep, now the H and S field one populates, it would know to do that, I guess somehow, or they'd have to pick it.
1:22:23 Dave McLean: Pick it. Not in office. I think, yep. Okay, and then, but you know, somebody's going to be like, well, there's an office here at Palm Springs, so, you know, somebody's going to do it.
1:22:39 Dave McLean: It's a field No, yeah, they'll use your IP address. They will come up with a checklist below, and then they'll pick the right one.
1:22:50 Dave McLean: That's the, they have to pick the right checklist. It It's like, of course, there's nobody here doing the JSA. So, we'll rename this to Field Plus Authors, so that people in New York don't pick this, uhm, the authors name.
1:23:13 Dave McLean: And then, pick this, and then now, you see with my list that I put in earlier, if I tell you what of the, what of these 50 sites are related to the Palm Springs establishments, and those could come up on a checklist?
1:23:28 Dave McLean: Yes, yes. If you can tell me which of that column, the list relates to Palm Springs and every other establishment they relate to.
1:23:38 Dave McLean: It's a many-to-one relationship, so each, each site is related to a single establishment. Then the list that shows up here is filtered by this.
1:23:48 Dave McLean: So these are all the Palm Springs sites. I love doing these online. I am so sick of paper. I have my thing I do in the field.
1:24:04 Dave McLean: It's like a thing that isn't an institution. It's a thing. I do it by sight. I have my own magical ways.
1:24:09 Dave McLean: But I am able to accommodate that. So I follow my establishments, and I say, now this is like your magical establishment.
1:24:21 Dave McLean: And then type, whatever they're doing. And something else. I don't know why. Yeah. So if their new thing involves creating a new inspection type and adding one or more checklists below it and the decision, Different checklists.
1:24:35 Dave McLean: Different checklists. And one of the decisions that they make when you're setting up the inspection type is, do I want to use the equipment list or do I want to use the site list or do I want to use none of them?
1:24:45 Dave McLean: Everything is okay. The site list is still the site list. Now we're reconfiguring. So if the, What they have is not equipment and not sites, it's, uh, bathrooms.
1:24:59 Dave McLean: It's a list of every washroom on one of our properties, because that's what it is. It's possible, it's just reconfiguration.
1:25:08 Dave McLean: For site, can we take this. Basically, can we steal this, this word site and use it here and such that it won't.
1:25:23 Dave McLean: That we won't have a, probably, so much. The site of the inspections you're doing, are you, do you have a different set of sites?
1:25:31 Dave McLean: So, we, for like SPCC, those are grouped differently. Yeah, they're combined in some cases. Thank you. For more clients, aren't they more detailed and split apart?
1:25:51 Dave McLean: HMDPs combined to environmental? Sorry. No, no, it's okay. Yeah, so some plans, it makes sense for them to be consolidated because it just saves on permitting fees and just the administration costs of developing plans.
1:26:10 Dave McLean: So, if they're geographically. Connected adjacent to each other, we'll try to consolidate. So, like, these plots of land that are called up here on, I think this is Amy.
1:26:20 Dave McLean: I think Sorry. Yeah, we have several wind sites, several different wind sites that will share. They're specifically called out in the plan, but they all share that plan, and that plan requires an monthly inspection.
1:26:49 Dave McLean: But it's assumed that all of the applicable inventory in that plan is inspected monthly. So, like, while the I think I follow.
1:27:05 Dave McLean: So, again, it's going to follow the same kind of thought process you were going through, Amy, which is that in this scenario, if you're rolling this out later, it's another Category field.
1:27:14 Dave McLean: It's another drop down, another pick list of some type that's specific for that purpose. And that's fine, it's just the configuration that needs to be done to be able to support that.
1:27:25 Dave McLean: But you said the site is determined by the establishment, like, because if we can tell you every site that falls under Palm Springs, that's what's going to populate.
1:27:38 Dave McLean: Can the inspection type determine which site options you have? It means that you are defining that every single time.
1:27:50 Dave McLean: For every single inspection type, it means. OpsBan maintaining. And maintaining, so you can maintain it as a group. So if we we can make it applicable to just, I mean, how many SPC sequence do we have?
1:28:04 Dave McLean: Like, 15, or? So we could theoretically create. 15 different section of checklists for the SPC. Or could we install it in the SPC?
1:28:23 Dave McLean: Instead of making intellects, you know, make all this that an administrator needs to manage, could we take the resource list and see how closely we can align to the resource list with this?
1:28:35 Dave McLean: And then you try to align to the resource list where you're inspired. So, C, could we look at this? Because the resource list is something real.
1:28:45 Dave McLean: It's like, it's something, like, legit that we can keep up to date with, like, even maybe, I don't know about automation, but maybe automation is a good do that.
1:28:58 Dave McLean: Yeah. I have one more clarifying. The establishment in this drop-down, does it also determine what inspection types are available? Yeah, it would be in there.
1:29:10 Dave McLean: Oh, okay. So, you can pick any establishment and you'll see every inspection type. Yeah, let's see. Okay, but if it is an inspection type that doesn't apply, let's say you pick New York and you picked, I don't know.
1:29:26 Dave McLean: Beals. Something that doesn't exist for the corporate office with this, but it would still allow you to, like, as long as you pick something, you'd be like, pick something and then it would follow the workflow.
1:29:44 Dave McLean: And health and safety would be like, what the hell is that? Office inspection network. You completed the inspection, the number of questions that you went through.
1:29:54 Dave McLean: I'm sorry, I thought you wasted your time. Right, but I mean, it would still allow you to do that. Yeah, I mean, I'm just saying, like, if someone picked New York and then did some field type inspection that does not apply to them, it would still allow them to go through the process.
1:30:14 Dave McLean: I think, pragmatically, what's going to happen is they've made a mistake, they've realized it, asked somebody to archive the record, they're going to be able to pick the right checklist, in that case.
1:30:23 Dave McLean: But, Amy, what you said, the, hey, can we sit down and actually work through site resource, like, how we group it?
1:30:31 Dave McLean: When we talk about master data management, when we talk about, like, coming up with an architecture that supports all of these different contingencies without each program deciding how to organize data independently, that's the way.
1:30:44 Dave McLean: That's the way to do it, because otherwise, what you're setting yourself up for is, as every additional program joins, you are signing yourself up for more reconfiguration every time.
1:30:56 Dave McLean: You got Um, for that site field, can we select multiple? Okay, so that's a great question. So, as currently on the board, because the field isn't there in the system, no, it'd be a one-off.
1:31:15 Dave McLean: So I want to talk through what the scenario is for that The understanding of the concept of the site here is that it is, um, it is already a collection of things that are designed to make something easier to work with.
1:31:31 Dave McLean: So if we're choosing more than one, when does that play out? How does that, like, what's the length of validity of that in the real world, when I go out and do something from more than one site?
1:31:40 Dave McLean: Like, if we're doing a resource, a resource list, and that's very specific, like, let's say, Mojave 345, 16718, the SBCC inspection or plan that permits that, whatever, it encapsulates both those sites, just uses the signature.
1:31:56 Dave McLean: Sure, yeah. So, that's a case where, if we're doing an SBCC inspection, that one inspection is going to cover multiple sites.
1:32:05 Dave McLean: So, is that something that we can do? I would challenge you guys to create that as a next layer up that joins them together.
1:32:14 Dave McLean: So, in this situation. Which site are you physically on, I guess, when you're inspecting this? When you us through this, you arrive at the site, and you are going where to what equipment on what official site?
1:32:33 Dave McLean: But if we're inspecting that has waste, uh, accumulation area, that's Lockhart, that area holds waste to Lockhart. 1, 2, 3, go locate, uhm, that's.
1:32:51 Dave McLean: So the site has a waste accumulation area for the site. Okay, for the site. Like, I'm going to look here and see just, I don't know, how it compares to this grouping.
1:33:03 Dave McLean: So in this grouping. So, Thinking about future development, like, when it comes down to the field guys doing their JSAs and what have you, is this going to dictate what sites they select from for the JSAs?
1:33:23 Dave McLean: I just I I actually, sorry, I don't want to specifically don't want to look at other programs like outside of the context of inspections here before we settle on a specific model, because what we're saying now is, can we do a hypothetical on a hypothetical?
1:33:40 Dave McLean: Maybe, maybe that's the thing, right? That becomes available as side options across our entire system.
1:33:54 Dave McLean: No, Matt, you're shaking your head, but the answer is not necessarily the case, right? So, if you guys can agree to a single taxonomy for how this is set up, that is the way to do it, that's the best way to do it, and that's where Matt's shaking his head yes is the way to go.
1:34:12 Dave McLean: I have not seen evidence that we can agree to a single taxonomy, which means, which means then that every single app, every program will end up having its own independent, and that's an administrative trainwreck, but that is, that is the, the strongest option.
1:34:28 Dave McLean: Option that's been shown at the table here, unless we can come to a common taxonomy for this. Helps, yeah, that's what she's asking for context.
1:34:39 Dave McLean: Sure, but if we go with individual resources. Then Whitney. Knows that that's how it's organized. It's going to be organized across the board.
1:34:49 Dave McLean: Yeah, she can think about a list of the recent. Sure, no, this does not exist. It doesn't. I mean, I have ones that that's missing, like.
1:35:00 Dave McLean: Together, but there's not a solid whole. It is juncture right now, I suspect that may not happen for If you get to the most atomic possible thing, right, whether that's a physical asset in town or substation or whatever, and then the next grouping above that will be however you want to name and then 
1:35:29 Dave McLean: the next grouping, maybe it's maybe it's specific, it's just called SBC. Because that's how you group them. Whatever that is, that text, if that taxonomy can be constructed, even if it's multiple layers, then we're independent of the org structure and if they exist in three different tables, because 
1:35:47 Dave McLean: then we can use them. It still requires us to decide on the taxonomy. I understand you're not necessarily, when you're saying, if we build this, it'll impact everything, that was a yes, but that's it, right?
1:36:02 Dave McLean: Sure. Okay, sure. You got it. Yep, that's it. Very good. So this is my superpower, David, it's figuring out what everybody's asking and trying to make sure we can all get We are actually 20 after 3, so let's take a break here.
1:36:14 Dave McLean: Let's, uh, let's do a reset. We'll come back. Hello. Yeah. And I, I just, I didn't think SoftBranch was going to have our equipment hierarchy.
1:36:32 Dave McLean: I thought it was going to be something that was kind of granular that went up. It came together. Yeah. It changed yesterday.
1:36:40 Dave McLean: We, we learned yesterday that that's not working out the way we hoped. We didn't know that when we came here.
1:36:45 Dave McLean: Jeremiah came in and said the company's not doing the software. Yes, yes, sir. I don't mean to laugh, I'm sorry.
1:37:13 Dave McLean: How do other companies, uh, do, like, uh, equipment and locations, like, when you have warehouses, like, they have warehouses, substations?
1:37:25 Dave McLean: And then, uhm, I don't know, like, I know the guys go really deep, like, they have to say, work needs to be done at this inverter, or, this set of, this row of panels, you know, so, like, I see that as, like, the granular equipment, and then it gets rolled up, we have projects.
1:37:41 Dave McLean: Yeah, they define a single, common, universal enterprise asset hierarchy. So, they don't try to solve that as a function of EHS people sitting there, that's an enterprise resourcing company.
1:37:54 Dave McLean: It comes in a few. Yeah. You got it. You get it as a, you get it as a hierarchy, similar to what we have on the left side of the screen, but with no security context.
1:38:05 Dave McLean: It doesn't care, it's just a list where everything has a parent, which is a parent, has a parent, and so you get to whatever that is.
1:38:12 Dave McLean: That's what top-level definition of a thing is. So when you go to, in that context, when you go to create an inspection, audit, or whatever the thing is, if it's related to an asset, regardless of whether it's a top-level asset or a, no, no, it is this specific piece of equipment, it's out of sight, 
1:38:31 Dave McLean: you're all, your point, you're picking it from the same list. If you were defining targets, it's the same thing. You define a target where you would say, hey, I want, I want a set of targets, and I'm going to pick all of the assets that that target applies to.
1:38:44 Dave McLean: The target would be twice. You got it. Yeah, yeah, I'd say, you know, I need to do my. You got it.
1:38:55 Dave McLean: You got it. But what isn't allowed in that case? What, what companies that do this really do? Well, wouldn't say is that if, uh, in one specific context.
1:39:07 Dave McLean: We somehow these 2 assets together and make. It's probably whatever was supposed to be because when we started this project that, like, we don't have an asset, but then I learned we will have it.
1:39:27 Dave McLean: Is that the 1 more? I mean, don't leave it. Operation done. Right? It's like they know, like, there's Mojave 345, right?
1:39:37 Dave McLean: And then each turbine has a number, so that's how they- But where is that asset hierarchy to provide them to vote, and where is the- We can, we can ask the general manager.
1:39:47 Dave McLean: It's like- No, no, no, we can't do that. I can't let go of It's got to be a feed, right?
1:39:52 Dave McLean: I know, but I'm saying we need to get the information to see where we can get it to them. You need to ask them because they are the ones that of the website.
1:40:05 Dave McLean: Thank you Bye-bye. Yeah, which does need to be at a resource level. You need to be able to identify it.
1:40:16 Dave McLean: In some cases, it's at an inverter level for some of the more technical networking. Okay, if I try to line Darren up for a conversation.
1:40:23 Dave McLean: The company is investing in base to get all of our operational data. Yeah, so maybe our historian enterprise wide. So that might be the place to push.
1:40:37 Dave McLean: That like how they're organizing the data because all of the operations like. Yeah, I think I think let's let's frame a specific set of questions.
1:40:51 Dave McLean: Data system, their leaders. Data, all of that is going through, but once it gets implemented, it will go into these fields and live as our historian.
1:41:02 Dave McLean: And that is where we get very granular for a lot of the technical reporting that we have to do. So it.
1:41:09 Dave McLean: They know, so like to the example where, like, you know, this rack in this battery storage is was worked on or it's out of service right now because of some event that information all stacks up to this is the input.
1:41:25 Dave McLean: We have enclosure and these six enclosures make up this battery storage resource and then that feeds it ties to a Kaiso resource ID and then it within that they know like these six meters.
1:41:41 Dave McLean: Tied to that Kaiso resource ID for and then you know it spires out from there for different reporting. That makes sense.
1:41:49 Dave McLean: So that might be your best place to get this hierarchy because like offline, you know I have. Disparate lists everywhere.
1:41:59 Dave McLean: Sure. Like, here's all my wind resources. Here's all my PV best and here's my hybrids and here's my corporate offices and like.
1:42:11 Dave McLean: But I don't have, like, 1. Consolidated list and, like, it. The part of the issue with why there's so many different naming conventions or why certain things are grouped differently.
1:42:23 Dave McLean: Is because we have different groups that have different needs, right? So, so, so. Bye. Exactly, yeah. And this is why we have, like, you know.
1:42:36 Dave McLean: Yeah. And so it's just a lot of different things. Right. It's unfortunate that this is the biggest project team problem to solve and without solving in some capacity you can't really move forward mentally.
1:42:57 Dave McLean: And so if, if, Darren I think was the name? If Darren, Darren, Darren has a project that's working to solve or at least amongst other things is working to solve this concept.
1:43:13 Dave McLean: Like our, our plants performance data together, and it they have to be able to group and manipulate the data, you know, down to extremely granular levels of inverter up to just having it at the plant, or maybe even having it at a site or this.
1:43:34 Dave McLean: So, you know, because, yeah, it depends on who they're reporting to and what the report is for. So, that might be the system that could provide the theme of that hierarchy, because, honestly, the age are so different.
1:43:50 Dave McLean: So, it's not going to be the least to have that, because that's just not, like, something they lost the, yeah.
1:44:02 Dave McLean: Right, yeah. Yeah. What I mean is, it's true. Security. Yeah. Maybe there's a simplified version, or maybe it's But even simple, it's just not needed.
1:44:24 Dave McLean: It's as long as we can get things to the establishment level. That's enough for me to extract from the reportings.
1:44:29 Dave McLean: And then we have the structure based on the establishment, which are the wide buckets of geographic location. Uhm. Is there a way to use, I guess, tags filtering as a way to kind of block out the view of certain data for people?
1:44:47 Dave McLean: You skipped to contradictory characterizations. Yeah, but I mean, like, on the back end, if we were like, okay. We know that Palm Springs consists of at least 10 sites.
1:45:00 Dave McLean: Okay, so it would have to be something like the secondary, the department. If you say that, you know, this and all of its constituent components are just a mockup, then yeah, you can have it so that it shows all the records that are linked to this.
1:45:21 Dave McLean: Right, but that still assumes that this exists. Which I think that they could, in theory, just clean up in the HR system the departments to match that, even if it was more simplified, like, Okay.
1:45:40 Dave McLean: When, or PVVAS, or whatever, they have fields to do that. It's just mainly a few tweaks to how they're interpreting.
1:45:51 Dave McLean: Again, it has to be a conversation you have to have with them in case there's a reason why they do it the way they do it, but, uhm, I mean, they could reorganize how they slice up departments, and I think that could be what is used to kind of manage that to large priority on some steps.
1:46:12 Dave McLean: Because those departments, some departments, like, you know, Amy's point, we have remote workers everywhere, they would just have to make a decision, like, which establishment, which location are you putting it under?
1:46:28 Dave McLean: Because that's the establishment it's gonna correspond to, regardless of the fact that you live in Montana, whatever, it doesn't matter, it's your New York office, which is the same typologic that I asked when she was describing how to categorize it.
1:46:44 Dave McLean: So I don't think that's a huge deal, but I think that the departments could be refined, so that they could be used as part of the security feed, so that we could refine what we can do.
1:47:00 Dave McLean: It's like, the example of the Palm Springs High Voltage Violet, so that he doesn't see all the palmy sites, he can see the things at Palm Springs, which would make sense, because that's a peace station, not 14 words, and those are the, those are the sites that he, like, has to deal with.
1:47:19 Dave McLean: Yeah, and he'll believe them. And so, unfortunately, that's a, that's a derogatory thing to solve for. Yeah. I think the, the concept, though, is that whatever it is that is there, that's, that's the extent of what we can do.
1:47:36 Dave McLean: Right. But, under this example, under that, well, like, if we had Establishment, and it's Palm Springs, and then we go wherever the instruction type is.
1:47:48 Dave McLean: And then we have the sites, since that is basically just a list of library options that we're assigning to that for that inspection list.
1:48:03 Dave McLean: Yeah, they. In theory, it's a nice point, but I mean, like, I don't know. We'll just use your Mojave example.
1:48:14 Dave McLean: So we like Mojave, SPP, what we like. And so then, you know, if you're doing an SPP. Inspection, you would pick that site name instead of straight up picking 89 and 90 or whatever, because you know that that is, that would represent.
1:48:33 Dave McLean: So, I mean, you could just. Just have. As I should just leave it up to the inspector to watch out those detail.
1:48:47 Dave McLean: You mean like, as opposed to saying, okay, whoever's doing inspection is has to know to select both 89 and MB?
1:48:56 Dave McLean: That might work for inspection where a lot of sites are combined. I'm sorry, are we still using sites managed? That distinction is important though, because in this moment.
1:49:13 Dave McLean: We don't actually have a consensus on what constitutes that list and from everything we're describing here. It's not a list that we want people just managing it and keeping up to date.
1:49:23 Dave McLean: It sounds like if we're going to look at. Look into a conversation about this being an asset driven list. That's a hierarchy being fed into the system.
1:49:30 Dave McLean: So you have to change that. That is 100% led by the integration. Have it be like a multiple selection list?
1:49:44 Dave McLean: You can, yes, if you then also want that to then connect into the, uhm, that's a fundamentally different architecture. This is no longer, you're counting that, that thing against one entity, you're counting against multiple.
1:50:04 Dave McLean: So, I can't really think of an option from a technical implementation point of view, it is, it is not ideal, it, it, it, Like, 3x is the effort to do, it makes it more complicated for you guys to support or strive for one selection that corresponds to that concept.
1:50:23 Dave McLean: If in this one case for SPCC inspections, if every other context works with an asset hierarchy that we can fit, but in this SPCC concept doesn't, then cool, what we're saying then is SPCC.
1:50:39 Dave McLean: They are now a different thing, which, by the way, SPCC stuff is not actually the scope for this project right now.
1:50:44 Dave McLean: This is our, uh, this is a future hypothetical state, and when I say, hey, this is where we get into reconfiguration down the road, based on real institutional requirements, that's exactly Whatever.
1:50:56 Dave McLean: I would kind of like those in general. They're flyers. So you can work those out. But I guess, I mean, would, I guess, I could mention a sample.
1:51:08 Dave McLean: I don't like, I have some kind of frequency thing on this. I need to do This is more than a inspection, like, whatever.
1:51:16 Dave McLean: This I don't know. I think the app that we might have probably seen 40 millionth, is, is it more to be on course, or does it mean to just allow our inspector to select only places to look at applicable sites for whatever they're doing, or And Spectrum, and then we just need the one that does that.
1:51:56 Dave McLean: Like, if we're able to solve the question of, like, to be able to get every site into a feed so that it, like, that feed has a If we can solve that, and that is going to be, like, how our, how our structures work down across the board.
1:52:19 Dave McLean: So, like, how we use the original question, like, yeah. we talk to Darren, he's like, yeah, I think that's not a problem, but the people over at ADNM should review it like that, so we can push that.
1:52:29 Dave McLean: And he was right. So, that is the, you know, which scenario, and I think, you know, this is his example of the one-stop inspection that requires great decency, because, like, what happens when it has its own inspection?
1:52:50 Dave McLean: Again, we're, you know, hypothetical environments that are in the background system. So, it's, uh, it's sort of, to some extent, it's a moot point.
1:53:04 Dave McLean: Like, we could cut this conversation off with SPCC right now, and it would have no difference over our individuals. That would be our objective for this project.
1:53:13 Dave McLean: If this project was brought in, like, based on where we are right now, where, you know, there's some sort of an asset feed, but that asset feed doesn't exist.
1:53:26 Dave McLean: It doesn't correspond to the SPCC program's need for how to organize in that city as the one-off. I would create a new object, SPCC location, something like that, It would only show when a person selects the SPCC inspection, instead of showing the asset bar, and all of those steps together, that represents
1:53:58 Dave McLean: a really high degree of exception-based configuration, that I can live with that if it's lost. My worry is that the next one is going to run, and that's more of a systemic argument.
1:54:14 Dave McLean: So, if it feels like I'm resisting, part of that is true, because what I'm trying to get you guys to not do is continue to perpetuate isolated programs that don't funnel back to it.
1:54:30 Dave McLean: So, if you can solve for that, if you can get to something that makes sense, that works across the board, then all of a sudden, the time that we spend together solving for how to integrate this, how to repopulate this, applies for everything.
1:54:46 Dave McLean: Is there a supervised automatic target It's not accredited or anything. Nearly true. It's not a permit. Yeah. Thanks. Yeah, thanks.
1:55:12 Dave McLean: So, maybe, can we drive any further? Maybe. But I guess that's where we have to go back and look at how the groupings match up with the project, like the LLC entities.
1:55:31 Dave McLean: Yeah. Because particularly, like, around the wind project, there is a lot of overlap when you guys are saying this is our grouping for this.
1:55:41 Dave McLean: I see that the individual resources or assets that feed into your group match what's in the project. Well, that was just because it, like, ties up, ties to, like, is how it kind of gets into the project.
1:55:59 Dave McLean: Can I pose another? I'm hoping that I'm understanding the scenario you're describing. So, if I understood you correctly, what When you go out, let's say I was doing an SBCC audit, and you probably wouldn't do this at a collection of wind towers, but let's say it was a wind tower where I'm trying to group
1:56:15 Dave McLean: them together. In practice, when I go out and I inspect, at my 100-point inspection, and I inspect this one and this one and this one, if I was doing this as one inspection, then any of them that has an issue, I'm going to mark that question as a fail.
1:56:31 Dave McLean: I'm going to put an action plan. If I see that issue again at the next one, then I'd probably put another action plan.
1:56:35 Dave McLean: Yeah. And, and you're structuring it this way, where I can't go out and I need to be able to say when I create the inspection that it applies to these three.
1:56:43 Dave McLean: You're doing that for ease of use, but in actuality, you're doing three inspections by the sentence, but you're just trying from a data point of view to make it.
1:56:51 Dave McLean: Well, there, there's three, three sites. The sites that are still being inspected, but one form is being completed, and the deficiencies that may be discovered at each of the three sites are also identified on the website.
1:57:06 Dave McLean: But at its most granular, if I have a hundred questions. That I've inspected, or that I, the hundred point checklist that I've gone through, what you're really doing.
1:57:24 Dave McLean: Ten questions, okay. So if I have a ten question checklist when I go out to that site. Or that collection of sites, it, it seems like what we're trying to solve for is, I just don't want to answer the ten questions three times.
1:57:42 Dave McLean: Just filling it out, like, answering only ten questions, but one deficiency applies to one of the three locations.
1:57:54 Dave McLean: I don't understand, what does it mean? I guess the inspections, they do cover multiple locations. So, yeah, we are in a way trying to.
1:58:05 Dave McLean: So, if I gave you a clone result from a past inspection, and I go out and I inspect this one first, and I finish the inspection and it got 8 out of 10.
1:58:12 Dave McLean: And I now go to the next. And instead of me starting that 10-point inspection again from scratch, it's, okay, I'm going to do the next one, I'm going to select that site, and I'm going to clone the past one that I just did, or select a prior one, or whatever the taxonomy is in the system.
1:58:29 Dave McLean: But that pre-populates my checklist with the prior results from the last one. Not including the action plans, though, because the action plan is specific to there.
1:58:39 Dave McLean: Thanks. Are you just to 1 of the sites in. So, it's the. But you only fill out 1. Just fill it out.
1:58:53 Dave McLean: Just fill it all out. Just fill 3 sites. Why would you want 4 sites? Like, it's 3. Like, you can have question number 1 is a problem here, question number 7 is a problem here.
1:59:03 Dave McLean: Question number 3 is a problem there, right? It's 3 stuff that we have to fill out, right? If they do, then we're going to saturate it.
1:59:10 Dave McLean: Yeah, but I mean, like, 4 of them are important. It's just, like, when they announce it. And they just submit 1.
1:59:19 Dave McLean: Like, 1 inspection. We did the inspection on this date to satisfy this requirement. It has to be combined. That's how the 1% is issued.
1:59:29 Dave McLean: And so I'm saying, like, if on the front end, we'll read the paper, right? And we resolve the issue of needing it to be 1 reporter, 1 inspection on the front end.
1:59:43 Dave McLean: Okay. So, quick question. Question 2 fails here. Question 4 fails here. Are we saying that this for the site? Question 2 and 4 failed.
1:59:55 Dave McLean: That's clear for the actions that came out. What if question 2 failed here and here, Ed? Let's say you would just say we failed and then identified from, in theory, you would identify this was a turbine side of Bison.
2:00:08 Dave McLean: And it could be across just these 2 and not this one. It could be on all 3. That's the SBCC specific.
2:00:16 Dave McLean: Yeah, that's these 3 are considered the 1 reporting entity. It's time to I'm going stop writing and working for you.
2:00:24 Dave McLean: I'm going to bind the data into a summary of some kind and I'm going to try to create a situation where I'm actually doing what I'm supposed to be doing, and then tagging it to multiple locations, because people are, The difference, architecturally, is that adding a layer on top for SPCC, where I say
2:00:46 Dave McLean: , hang on, I need to do SPCC filings, and I need to consolidate the results of these three inspections together to one.
2:00:53 Dave McLean: Because that's its own thing, it can literally live inside both sides of the inspection. It's like basically taking the raw data and just putting the way we did for the requirement.
2:01:06 Dave McLean: Yeah. Because, in practice, it's they are going to go here, and then maybe tomorrow they're going to look here, and then the next day they're going to look there.
2:01:25 Dave McLean: And then when they're done, they, in today's work, write the one form and go get it. And then they're going to send it to them once they're done with all three.
2:01:32 Dave McLean: But yes, in practicality, they are doing three separate inspections. So if they did it one-to-one, we could solve the reporting requirement by creating a singular line.
2:01:46 Dave McLean: And not having the inspection. Yeah. Right, right. So it doesn't have to be an outlier. I think it's an individual thing, yeah.
2:02:07 Dave McLean: So why tend to think that it isn't, um, third-party? That's another explanation of if there's extra functionality to So, now, if there's extra functionality to it, It's a good thing.
2:02:27 Dave McLean: Yes, this is fine. No, that was very helpful. That was helpful. Yeah. No, yeah, Yeah, if you're like, I'm just gonna be looking at all the SVDs.
2:02:51 Dave McLean: I'll see whatever the hell SVD inspection data I have. Oh, okay, I have the ones that I need. All of them.
2:03:00 Dave McLean: It's awesome. Yeah. It's It's not bad. It's exciting. It's because there's a specific, yeah. Yeah, the agency that seeks to receive them has them as one, so.
2:03:20 Dave McLean: But yes, they're not, like, going Like, it's the same. And this one is good. This one is fine. I just feel like the games.
2:03:43 Dave McLean: There have been four here, there have been six here, there have been one there. Okay, good. So now here's what the corrective actions are for.
2:03:50 Dave McLean: Respective. the survey because of all it does. We have failed and maybe a different reason, different component, different issues. Yeah, yeah, yeah.
2:04:02 Dave McLean: So, um, and that is to be the case. Yeah, it just depends on like what themselves are gonna, uhm, what the problem is that they're trying to meet.
2:04:31 Dave McLean: And like, yeah. And I I think that's Yeah, I mean, otherwise that would be settled, you're welcome. Thank you. I think that's useful information in a small way.
2:04:56 Dave McLean: Thanks. And because the day we get that, that's not to say that, for some reason, we might need it combined in a different way, or we might like to just look at plan B, is that what you mean by plan B?
2:05:12 Dave McLean: Oh, okay, what do you mean by plan B? Like, it consistently fails most of the time. This is the problem.
2:05:22 Dave McLean: Maybe that's something my operations needs to think about. Like, figure out, or asset management, because when they are, like, setting up their things, sometimes they're like, oh, okay, this one is, like, reaching its last leg, it's Confluence, or I'm running into a parent, and I'm running into, uhm,
2:05:43 Dave McLean: it seems like they're going to beat me. Thanks to their, uh, consideration, so, I mean, I mean, I could see it, because we have the line, having them literally enter separate periods, yeah, is beneficial, if I mean, maybe it's not, it's not, I don't care, but it depends on what, but, but, but, but, but
2:06:10 Dave McLean: , but, but, but, but, but, It in and of itself creates a data point that is useful, even though it came out of whatever inspection and assets they looked at in their preview.
2:06:27 Dave McLean: But they do care about that corrective action plan, because that corrective action plan has dollars. and a lot of But, I don't know Not the big 100, but I had to love the first ones.
2:06:39 Dave McLean: I think it's a legend. I love the first one. It's awesome. It's how you grow. Boom. I guess that is it.
2:06:50 Dave McLean: I think it's the first one I've done. Because, well, it's a trend. And I know a lot of people do.
2:06:56 Dave McLean: So, that's it. Whether that is true or not, I think it's truly an exception. Broad or not, I think of a carriage.
2:07:06 Dave McLean: It's the trend. I think, I think the answer is no. It's very specific. During that inspection, because of that checklist, you walk the site, or you walk the area, you're essentially answering that question.
2:07:29 Dave McLean: And usually, you people try to get their minds to it. If I had an issue, I'd answer the question. And then I go to the next site and answer the question.
2:07:41 Dave McLean: That actually is a material finding that requires. Same thing if I go to the third site, and it's kind of a splash back.
2:07:49 Dave McLean: That is a distinct result, but if you do fill out one record for all three sites, because that's what you're filing, then that's sort of distinct from the underlying data.
2:07:59 Dave McLean: So the direction I think we head with is, do the inspection three times, one for each site that you've done it, along with the architecture of the site that you're going to get, but then view the SPC specifically, the ability to, oh sorry, or the SPC's filings, view the ability of that specific site.
2:08:22 Dave McLean: So I need to create a summary report that consolidates the results of this inspection, that inspection, that inspection, with the predefined finance.
2:08:29 Dave McLean: So I pull it in, I see all three instances of all 10 questions, and if question 1 all 10 of them passed, question 2, any one of them failed, it's a fail.
2:08:44 Dave McLean: I bring in the action test report, it failed twice, probably two actually, it's a mature, it's a fail, or whatever, whatever the thing was.
2:08:53 Dave McLean: So presumably, you have to tell Indefilum what to do, and what actions to be able to do. That way it treats the inspection process as something that fits the broader architecture of everybody else, while leaving SBCC Filum as something different than Series 2.
2:09:12 Dave McLean: Like I did. The implementation of that is great, and that summary for people is identical. Honestly, we don't know too much.
2:09:27 Dave McLean: We don't much about SBCC violence, so I have no reserve on that one for the moment, but in terms of, like, just consolidating it together the way that I just described it without focusing too much on what the outcome looks like, yeah, uhm, no.
2:09:43 Dave McLean: And it's not in scope, but it's very doable. It's, yeah. Do you remember this morning when Amy was talking about how can we lock in content so we can simplify the process for conflict?
2:09:55 Dave McLean: Yeah. Uhm, this was the exact same concept. Adding that layer there. So, you you need to go through inspection process.
2:10:04 Dave McLean: You can do it with the tools you already have, that are reliable. It's not like you have to have 3 pieces of paper, it's the same form, it's just digital.
2:10:15 Dave McLean: And then you can manipulate that data, whether it's 2 or 3 or 6 or 12 places that you're all on and get it however we need.
2:10:24 Dave McLean: But, physically, during that, it remains to be scoped, but it's totally accountable. And it uses the tools that we've got without changing it for everybody else I'm not sure if it's a page form.
2:10:54 Dave McLean: I'm not sure if it's a one I'm not it's a one page form. The So it's date dates of inspection or date range of inspectionley, maybe that's more than one that might not of all this day but so this day to this day.
2:11:12 Dave McLean: Uh, starting to inspection, these are the, these are the units or assets or whatever, whatever things that might were actually inspected, this, this, and this, probably separated.
2:11:23 Dave McLean: Here's the checklist that we used, a table that listed all the questions, and the lowest possible answer given for each one, with the comments consolidated together for each so we had to find, had to know what to fail here, to fail there, and a comment that was discreet for each one, and the clients 
2:11:40 Dave McLean: and subgroup, something like that, probably, yep, yep, yep, yep, yep, yep, yep, yep, He called in all the responses. Yep.
2:11:54 Dave McLean: That would work. That, I think. That's okay. Okay. Especially when they're doing inspections, I don't get what they mean. We're trying to get a few more minutes in here.
2:12:01 Dave McLean: Let's take, let's take one more minute of a break. I'm just going to run them. Oh, yeah, please go ahead.
2:12:05 Dave McLean: Sorry. Sorry, we were out of No, no, no, it's okay. And then all of this, this whole set up is.
2:12:24 Dave McLean: We've built a tariff disaster hierarchy instead of having somebody present their made-up stuff to us each time they want us to.
2:12:30 Dave McLean: Yes, and they're like, I want you to break it to this, you know, you know, tell us what's moving us, and then we can sort of, sort of, you know, sort of, not like, ah, tell me, it's a form.
2:12:40 Dave McLean: It's a, what, right, yeah, yeah, yeah, but I think it's like, it also becomes potentially be able to hold for other applications that we were not able to use it for today because, like, one, we're talking about this like example or whatever like, if you find out, like, that this is Katamon and it is 
2:13:06 Dave McLean: like failing 90 percent of times together to do a line in that specific thing and it has like a problem, like, these four turbines under that are always having a problem, then when asset management is sort of viewing numbers and performance and, like, going through the budget cycle, they're like, okay
2:13:23 Dave McLean: , I think we're reaching the point where it's costing us more in Thank you. Fines and maintenance costs to continue running it, and so maybe it's time for us to start talking about what the next plan is.
2:13:37 Dave McLean: That does not translate. It has been leaking for a year. See, on the 12 month inspection. Right, yeah. Coming up is.
2:13:44 Dave McLean: Yeah, and so that kind of gives more of that granularity to know, like, where's your money going? Like, what are you guys spending your money on?
2:13:54 Dave McLean: All right, we don't have that much time, but I just wanted to say that. If I did say it was not the first time then, that we're going to chase the NASA hierarchy and figure out what to And then I think it will be dependable in the company when people come to us.
2:14:12 Dave McLean: Like, for example, Whitney came to our team and said, I have my own way, here it is, now put all these sites in, we'll go, no, no, no, we conform to the NASA hierarchy of territories, so you'll have to conform to those.
2:14:25 Dave McLean: I think it'll just give us some defense if we do it from the start. I think so, and I think for at least the context of the SPCC, uhm, inspections and reporting, I think, I think we've worked out a model that would work, so well, and so in this case, you know, digging it apart, the way that it sounds
2:14:43 Dave McLean: , that it, this idea of sort of, hey, we're going to go do multiple sites or multiple, uhm, whatever the, whatever the level of that asset hierarchy is, in actual fact, it's three different inspections, and so what the need is, is some mechanism after the fact to combine them together into a single report
2:15:02 Dave McLean: , so ten, ten question checklist, by the sounds of it, if I did that checklist here, here, and here, then after the fact, if I need to do a filing with the results of that, for me to be able to say which of the three inspections that were completed, each one aligning to one location, or one asset, or
2:15:20 Dave McLean: whatever the thing was, combine them together and give me the lowest possible answer for each one of those questions. So if it took three different inspections together, ten questions a piece, uhm, and, you know, question one, all three answers were pass, question two was a fail, one of them was a fail
2:15:38 Dave McLean: , it's a fail for the purpose of that combined version of it. Yeah, or whatever the answer is, sorry, whatever the answer No issues or any If we ever need the, let's just say at some point, a regulator did ask us for the inspections associated with your SDCC built on multiple, built by multiple assets
2:16:09 Dave McLean: . You would just pull them, right, download them, and stuff like that. I not. I mean, that's, that's meant to happen.
2:16:15 Dave McLean: What would you do with a combined It would be nice to be able to, like, identify what equipment has been, has been failed repeatedly each month.
2:16:25 Dave McLean: For making that inspection pop-ups, or, you know, just make a request. So, I'm thinking, like, combining reporting isn't necessary now, right?
2:16:34 Dave McLean: Like, you would want to say. Big change. Fair or failed reports. See if that's consistent. Same essence. I'm picturing just something that summarizes the collection of reports.
2:16:48 Dave McLean: Again, if you have an SBCC plan that has 5, 7 sites, I think one of them does have that. Then it's nice to just have everything consolidated in one.
2:16:57 Dave McLean: One-page or two-page report. But again, it's nice to have, maybe not necessarily a requirement. I suppose, yeah. Right, this one, in this example, it is definitely more on the, it's on the bottom of the totem pole.
2:17:14 Dave McLean: It's not something that we typically submit. It's actually to the insight of the repeated failures. It's more than just the practice.
2:17:26 Dave McLean: So, yeah, consistently failing. The dashboard is something that's going to be easily or already have since we've had all of our inspection, uhm, I guess results and it yeah, depending on the level of granularity you want.
2:17:42 Dave McLean: Like you configure the dashboard to show if you need quite a question level answers to everything, for example, then it can be a model where you've got a widget that shows your question results on the left side and whatever other charts or visualizations trying to stay away from stuff that deals with
2:17:58 Dave McLean: scores, but. Okay, Yeah, yeah. Yep.
2:18:11 Dave McLean: But we don't score. How do we pass? Uh, just the show right now?
2:18:26 Dave McLean: Um, yeah, yeah, yeah, yeah, yeah, yeah, yeah. Good, yeah, the site with no flaws. Flawless site, that's your goal, flawless site for environment.
2:18:41 Dave McLean: So, you know, site with, uh, no, ,whatever you call it, no's, like, ...percent number. If you're looking for that, that's what I'm saying.
2:18:54 Dave McLean: Over 100 percent. You said you wanted repeated failures, right? You want to know... Right, so you can just build it up for I don't want to make it seem like a 90 percent is okay, because it sounds like an A, right?
2:19:22 Dave McLean: It's actually, like, we don't have confidence in it, but maybe it's ideal that 90 percent have. But would say it's all overdone in the last year, or is it a month later?
2:19:33 Dave McLean: And you have 29 of them. Got, you know, got no findings, 90, uh, 9, uh, 11 out of 12 months.
2:19:44 Dave McLean: It's like, these supervisors are kind of on top of things. But I have a site that has a supervisor who is, like, they are, like, never getting through.
2:19:53 Dave McLean: It's a compliance issue. It could potentially be a compliance issue as well. Because if we have those conformals, it's supposed to be corrected, and it's supposed to be documented that it was corrected.
2:20:06 Dave McLean: For SPCs being compliant. So, then I would, if I had an LAPD. Outlier, and you will, I'm sure not the outliers, I would start to look at, let's say you have five sites that are outliers, are three of those sites with the same manager?
2:20:18 Dave McLean: And like, it's just a manager who's not on top of things, and he needs some re-training. I don't know. That's how I would do it.
2:20:24 Dave McLean: Something like that, to identify the outliers. Problem childs first. Yeah. And also, like, we were just talking about how, yes, our plans grew multiple sites together, uhm, but ideally the inspection form should be completed each time for each site, and it actually might be multiple sites, because it's
2:20:42 Dave McLean: also, in some cases, also substations, which is a different team of performing those. But in our future world, I think a sub and a site will have two different, like, in my vision of, you know, your 12, like, housing and all the rest.
2:20:58 Dave McLean: Last year or whatever, a sub and the other one will be listed separate. Absolutely. Yeah, so, but also that one plan for compliance reasons, we would ideally at the end, you know, even monthly, right, when we're reconciling, what site in this plan does not.
2:21:17 Dave McLean: What are you missing? Yeah, it's almost, you can go to your checklist. Yeah. I see this site doesn't exist. So right now, it's in that manual tracker as well.
2:21:27 Dave McLean: What sites? It's all in Making sure that we collect the inspections. So your, your percentage could be telling you 100% of the sites have reported for August.
2:21:38 Dave McLean: Right, and it should be a check to make sure that every single site in this plan has been reported. But that would just be on like, yeah, in the future.
2:21:50 Dave McLean: No, yeah, that's what I mean. Like, that could be one of the graphics on the dashboard and it says like 80% so that you can like, you're gonna be like, who's missing?
2:21:59 Dave McLean: Who's Okay, okay. The actual hierarchy is we're going to talk about scoring.
2:22:18 Dave McLean: Yeah, findings. No. So again, I say that somewhat facetiously, but based on what we just said, where there is a pass fail, there is some mechanism of evaluating the result and that how that happens, whether it's ever presented to the user that I hear you loud and clear.
2:22:33 Dave McLean: You don't want to show people they got a percent score. But in reality, if I have a 10-question checklist and we consider that inspection a fail, if any one of those questions had a no, that means that we do have a score underneath the hood, right?
2:22:48 Dave McLean: And then how we evaluate that score is into pass, fail, or whatever other bucket, that's all a calculated function of the reporting.
2:22:54 Dave McLean: So, you got it. So we leave that there, but the change being, because the very real sort of cultural aspect to this is that it's not, not actually exposing that numeric score to the user.
2:23:09 Dave McLean: In the version of it that I showed you, this is exactly, this is exactly it, Box scoring begins in high D, because it will have a different interpretation of the terms.
2:23:22 Dave McLean: If you did make it visible on the front end to the user who completed it, could you change it from a percentage to just simply saying pass or fail?
2:23:36 Dave McLean: Sure, If there's any no's, it's a fail, so there's no seeking out of Yeah. So, that would be nice, like, almost like a bonus.
2:23:53 Dave McLean: Alright. If it's, whatever, 10 questions, and any one of those questions is no, which means there's a reduction, in theory, you do consider that inspection as a fail, until they fix it, it's a fail, and then they do they have to re-inspect it after?
2:24:13 Dave McLean: Absolutely. Yeah, so I think, I mean, there's some benefit to just saying, look, if it's not a yes, ever all the way down the line, then it's a yes.
2:24:26 Dave McLean: Sometimes you don't have to show it, like, not under the hook, we use that because it's under. I don't love the fail, because then they might just lie, and that's a In this case, in the equivalent case, it is different, because there could be a safety issue that they need to red tag the vehicle.
2:24:45 Dave McLean: Like, there are, there's a reason something's that fail on a vehicle, and it's usually safety. Yes. Yep. And that vehicle might be a regulated vehicle.
2:24:54 Dave McLean: Yes. Yeah, there's just so many different Okay, so all of this hinges on, there's like a future conversation about asset hierarchy.
2:25:05 Dave McLean: And so is that a tomorrow conversation? That's okay. Okay. Okay.
2:25:30 Dave McLean: That's totally fine. Yeah, yeah, yeah. This week isn't the end. It's the meaty middle, right? Do you have a calendar link or anything?
2:25:40 Dave McLean: I get that. Yeah, yeah. So we should also have Jera line up in there. Oh, yes. Absolutely. Before we wrap things up today or tomorrow, we're going to get things available from Dave and then, um, work together too.
2:25:56 Dave McLean: It's not going to show much for next week. I'm at a training workshop with Intellects next week. If it's possible, if you don't mind sharing.
2:26:18 Dave McLean: For Asset Hierarchy, we're including everybody who is, everybody who is here from TerraGen, right? For Asset Hierarchy, the key one is Jeremiah, Dave, Darren.
2:26:32 Dave McLean: Me. Right. And Whitney is optional, but she'll come soon. Okay, alright. Which I think they'll come. Okay, so. Matthew. This link is specific to, it cross-references Ethan and Vi's schedule.
2:26:52 Dave McLean: Okay. Edward's schedule is generally open enough that I'm not going to include him in because it would just entail creating a new bucket link and I've got 20 or 30 of them already.
2:27:01 Dave McLean: And that's it. So, once. Once we're able to something out, we'll move Edward in and it'll be okay. Like I said, next week is probably not going to happen, but the week after should be.
2:27:12 Dave McLean: I mean, if you have anything, I hope to see if it's a Hail Mary and we can just get everybody in, but I won't expect that to happen.
2:27:18 Dave McLean: No, you don't need to answer that, I'm just saying. Uh, how long do you think we need to discuss Asset Hider?
2:27:26 Dave McLean: I mean, I wouldn't even dream of going under an hour, it's going to be longer than that. I think that's a good starting point.
2:27:33 Dave McLean: You can get Monday afternoon, it's fine. I'll tell you when the afternoon is coming, so. Can you do I don't, I don't really have a system, but they do have something that they pull from the Asset Hider.
2:27:51 Dave McLean: I think it's, they're supposed to start. I thought at the, this Q3, at the earliest Q4, and then I think they were hoping to, well, no, I mean for completion.
2:28:17 Dave McLean: I think they were hoping to complete it in Q1 or first half, it depends. It depends on some things that they're waiting to hear on, yeah.
2:28:27 Dave McLean: So we have an integration plan for software. Now we need to find what's the integration. But anything we integrate separately from Velocity, is not a security item.
2:28:41 Dave McLean: True or false? We'll keep it that way. True. Yeah. Yeah. You got it. You got it. So in this context, an asset hierarchy, we would be using that purely as a, you could call it it.
2:28:56 Dave McLean: You got it. I think I understand why, because that's, like, about 4.8. Yeah. What is the group on the picture?
2:29:07 Dave McLean: Establishments? What is the group? So these are, these are locations. These are, these are some things. Yeah. There were two other sites.
2:29:21 Dave McLean: So, let's talk about. Waterworks? And then the other site was. Yeah. Yeah. Erase the groups against two locations. Is that true?
2:29:35 Dave McLean: Oh, like when you were, uhm, you shrunk. Oh, we zoomed out? Still the same thing, it was just zoomed out.
2:29:57 Dave McLean: Columns, so there are only a few columns, Backtrack a little bit on yesterday. I don't even want to try to visualize that until we actually see what's actually there in this team or not team.
2:30:10 Dave McLean: That's a different product. Uh, it's it's going to come from Payloss at the end. Oh, boom. Yeah, the integration.
2:30:24 Dave McLean: Yeah, yeah, sorry. Yeah, yeah. I got that spelling. I spelled it wrong. Yeah, yeah, boom. No, so the data is going to originate for any sort of person level hierarchical data that's going to originate in Payloss.
2:30:37 Dave McLean: Boomi just sends it to us. Could you pull this up? Pull up on the screen and we'll take Which one appears to be the one that most closely represents how you would want data to roll up?
2:30:58 Dave McLean: For people. We're out by 430 months ago, right? Yes, we're supposed to be out of the building by 430. In about 10 minutes we can start getting out.
2:31:08 Dave McLean: I'll just show you the assets so far. That's great. And we don't get every field that we want to see, obviously.
2:31:33 Dave McLean: Yeah, yeah, yeah, yeah, and the reality is, Jeremiah is not going to build it based off, build the integration based off of the files that you get.
2:31:46 Dave McLean: He's going to pull it from the API, which sources everything, so that's he can pick and choose There's status, so there isn't, like, any.
2:32:09 Dave McLean: There's only two statuses as shown. There's another report that has terminated. Here's position description. What I don't know is if I can get the position code.
2:32:18 Dave McLean: Okay. Uhm, this is the workbook. This is This is the department description that I said. This department description does not line up with how we are organized as a company.
2:32:30 Dave McLean: The location codes, I think, are going to be fine. That's how we establish the list. Except for remote, which we have the rules, which I just think, I think they'll be fine.
2:32:42 Dave McLean: Here's their hire date, rehire date, as you mentioned earlier. Terminated date, I don't think, I don't even know if that's still valid.
2:32:49 Dave McLean: It should be blank in here. Yeah, on this report, it will always be blank. Supervisor name, but we don't have a supervisor ID.
2:32:57 Dave McLean: I'm guessing they can add that, and then working now, and then whether they are classified currently as safety. Okay, so this department field, which would be the closest analog.
2:33:10 Dave McLean: And we said that that's not actually reflected. Okay. Okay.
2:33:22 Dave McLean: And if we put a minus. True department is often saying this, but I'm just telling you that this could be like an act of God that I have to talk from CEO.
2:33:38 Dave McLean: I don't know why they would. So, even if we said, hey, what if we purchased? What is that representative of?
2:33:47 Dave McLean: So we're saying what it's not. It's not. She's not. This could be my team, I haven't checked. No, it is.
2:34:01 Dave McLean: I've looked at most of these. T10 is a subset of AspetMirror. Uhm, it's. No, they're, they're not. I'm, I'm thinking about it from a CEO perspective.
2:34:12 Dave McLean: Yeah. Like, what will the report say? To the CEO, so Katie. It's a subset, yeah, but they're CC. Katie is the Chief Commercial Officer, Tijan is one of the teams, so this is like a partial representation of her.
2:34:28 Dave McLean: Okay. Construction, I haven't looked at the people, but that's part of the COO office. Development, it might be clean. It might be good there.
2:34:38 Dave McLean: Chief Development Edward Sanborn sits within COO office. Solars is Lockhart sits within COO office. From what I could tell, East and West might be Finance office.
2:34:55 Dave McLean: And then this Wind is a mix of people. Okay. And I don't know where the Asset Managers so that Katie group that seems to be Katie's group is dispersed.
2:35:06 Dave McLean: Legal is dispersed. HR is dispersed. They're dispersed within East and West. And Management is dispersed. So, I have, uhm, I have 4, 4 groups that report to the CEO who don't have a department.
2:35:23 Dave McLean: Okay, ultimately. If this is not a reliable and accurate reflection of how. Oh, you would need data to roll up or to be organized within intellects, then it effectively is something we ignore at best.
2:35:43 Dave McLean: It's search parameter, but like, even then, it sounds like it's sort of meaningless from a data point of view. Right.
2:35:51 Dave McLean: Which means that from a hierarchical point of view, we're only focused on the right side of the board, which was the establishment layer.
2:36:01 Dave McLean: And it's possible that out of the gate, at go-live, that hierarchy and data roll up is very simple. It's, uh, it's establishment level and that's about it.
2:36:13 Dave McLean: That's all we can get. Right. So something that sticks. Right. Uhm, so, the, the logic that's used for remote workers?
2:36:22 Dave McLean: Is that something that you said, I mean? It's, yeah, we can, we can apply it. We can see it. Ideally, ideally, ideally Terrijet applies it in the transformation layer, but if, if necessary.
2:36:39 Dave McLean: Because East and West holds most of the, like, remote finance, accounting, HR, all of those folks are in there. I'm not doing it.
2:36:50 Dave McLean: Like, Wind is just everyone that is in it. And so East and West is the two that needs to be split up.
2:36:57 Dave McLean: But that's why I'm saying we can ask HR, like, why they have it East and West and not any of the other departments?
2:37:03 Dave McLean: Like, why I'm just going to ask them if they have a field that we also need that could be used by the CEO's for the company that are actually the departments of the company and see what they say.
2:37:17 Dave McLean: I'm guessing because construction wasn't under COO that that's why it's just sitting there. Uh, you know, Because Robert, Robert, reports to, you know, doesn't report to Dave.
2:37:29 Dave McLean: So Robert had to have something and they just called him Solders. Yeah, I'm in the Solders. I know that Roberts or the thing he recently did all of that.
2:37:43 Dave McLean: Like, this year, because it didn't use to say Solars, it was a CSAG. So I know that they updated it.
2:37:51 Dave McLean: Construction is not construction. It's got some accounting, it's got project management. It's just, it's not, it's not. It's not how the company is organized.
2:38:03 Dave McLean: And so, again, look, there, there are scenarios where things can change over time, but as a starting point here, if we hit go live January and we got to go forward with what we have that works within the company.
2:38:15 Dave McLean: Context to the integration that we, we can work with. It just seems like, HR. Yes, yeah. Okay, and it just, the consequence of that means that from a data security point of view, if I am a user, like, essentially, you're the flattest version of that work structure, establishments all rolling up to Harijan
2:38:45 Dave McLean: . Now, you can got it. Now, if you wanted to create a structure above those establishments between Terragen or between, you can do that.
2:38:53 Dave McLean: You can do that. You can do that manually in Intellects as long as the people come in at the establishment level.
2:38:59 Dave McLean: So, how you organize the location table in Intellects is also important. It's ultimately up to you as long as people come into the system into a location that already exists.
2:39:11 Dave McLean: And that's why we say if the most granular that we get in that table is the establishment, because that's what we can determine from Paylocity.
2:39:27 Dave McLean: I, I, I, I, nothing, nothing I've heard in the last 2 days seems to coalesce around a sort of thing that actually makes sense in that concept of how to having intermediary layers, because your establishments don't fall under specific executives, they don't fall under, like, it's not how the establishments
2:39:45 Dave McLean: are organized, they're literally just work locations. Yeah. Uhm. So. This is great. That's not a filter, you're saying that you would create that based on how it comes in, so we would have to establish the hub, and then we could establish it.
2:40:05 Dave McLean: That was good. No, no, no, no, no, no, Remember, the whole point here is that it's supporting an employee integration.
2:40:16 Dave McLean: So if employees come in at the establishment level. That's cool, but if you decide to put more locations in that.
2:40:23 Dave McLean: Exist above, just to answer the question, but if you decided to put more locations in above to create a roll-up structure within that, that's okay.
2:40:32 Dave McLean: That has nothing to do with the integration because the people all come in at those establishments down To create the locations.
2:40:48 Dave McLean: You have to create all of the locations. You don't have a location in the original place. You have to build that.
2:40:58 Dave McLean: You have to build that table, which as of right now, the closest that it looks like it's going to be is a list of establishments rolling up into TerraGen.
2:41:07 Dave McLean: You build and manage that human intellects. It's that when the people come in, they have to connect to something in that list.
2:41:15 Dave McLean: So, as long as every value that could possibly show up for work location, plus the rules that we're talking about, as long as something resolves to where we need it to be in that table, if you add to that, like, creating additional, you're doing that in the UI, that's entirely a function of NLS.
2:41:32 Dave McLean: And we can set it up, like, one time, definitely. If it says the supervisor is Amy Roth, they're going to be in whatever one.
2:41:43 Dave McLean: Because you would get into dozens or hundreds of rules. At that point, it's the person comes in, and if you decide to take that person and move them up, Amy's a great example of this, because we'll probably want Amy to see the whole organization.
2:41:56 Dave McLean: That, that is a person level exception that you just do administratively. Chief executive level, we have six of those.
2:42:09 Dave McLean: We have six people, that would be six rules we put in, and you could bucket them into those six things.
2:42:12 Dave McLean: I think we're still talking about something different. Yeah. Your, your chief executive, your C-suite, they don't have establishments that will open to them.
2:42:22 Dave McLean: So this is a different concept. It has no place in the location structure. If the lowest level is establishment, whatever, unless we made them the lower level.
2:42:36 Dave McLean: I don't think it fits at all. I think it's actually apples and oranges. I don't think establishments has anything to do with management hierarchy or business hierarchy.
2:42:43 Dave McLean: In that sense, when you're talking C-suite executive. of the chief customer officer. Has people ultimately that roll up into them from all establishments.
2:42:52 Dave McLean: It's not a many-to-many relationship. It's one-to-many all the way through. So I don't think you'd build it that way. Could we come back to what Amy's saying, which is, no, that it's simplest if push came to shove, it go live, and there's nothing, nothing that we can do on the payloss side to make this
2:43:07 Dave McLean: more robust than its establishments rolling up into Terrigen. We were supposed to get out of here. Yeah. Okay. I'm going to
