---
meeting_title: "Terra-Gen Training Setup Q&A"
meeting_date: 2026-10-28
start_time: "15:30"
timezone: America/Toronto
source: "User-supplied transcript attachment; meeting title, date and time supplied by the user"
participants:
  - Dave McLean
  - Paul Niemer
  - Matthew Futter
  - Vanessa Newmarker
participant_note: "Participants listed are attributed speakers in the supplied transcript; others are mentioned but not confirmed as speaking."
---

00:00 Dave McLean: All right, let's rock. Okay. 
00:02 Paul Niemer (Contractor): Uhm, so there were, we had a call, I guess last week, and there were three things that came up, uhm, in our call that, uh, wanted to go through with you and get answers to.
00:15 Paul Niemer (Contractor): So, uhm. The first one is, you know, is we're working on mapping. Work groups to position codes, OK, uhm, and pay loss.
00:27 Paul Niemer (Contractor): So the I guess I guess what we call pay loss. The position codes, but it's really. There's also an and, so it's not work groups to position codes, it's work groups to position codes and 
00:42 Dave McLean: location codes. Position codes and location codes. Pay loss to the location codes. 
00:48 Matthew Futter (Contractor): Just to be clear, yeah, 
00:50 Paul Niemer (Contractor): not to be confused with yours. Uhm, and. Want to make sure that. 
01:00 Dave McLean: That works. Uh. You're 
01:05 Paul Niemer (Contractor): going to have to give me an example. OK, so you know we may have an accountant. We may have an accountant that works from home, so their.
01:16 Paul Niemer (Contractor): Location is remote worker and then we may have the same person. With the same title that works in New York.
01:25 Paul Niemer (Contractor): OK, uhm, and so if we, you know, we can establish training for the accountant, but then the person that works in the New York office is working is going to need a something else, because they're in an office, as opposed to, like, the remote worker doesn't need that.
01:45 Paul Niemer (Contractor): OK. That's something else that's not tied to a location. OK. 
01:53 Dave McLean: OK, so what you're really saying is that the the utility of the position code is meaningless unless it's also combined with the location 
02:00 Matthew Futter (Contractor): code the person belongs to. Yeah, maybe limited, not meaningless. Right? Yeah. Meaningless is a little bit harsh, but OK. 
02:07 Dave McLean: OK. OK, so. So there is, like with just position code, there are still things that you could do. You could, you know, there are there are certain known things that are applicable to anybody in that position code, regardless of where they work.
02:21 Dave McLean: That that would live there. There's no location specific requirements. Or, sorry, there are some requirements that are not bound to the location.
02:29 Dave McLean: That's a more accurate way to say it. Yes. Okay. Okay, I'm going to give you two levels of answer to this question.
02:37 Dave McLean: Okay. The first one is from a technology point of view. Yeah, we can we can support that. We can, like, because this concept of the position code and everything to do with, like, this is all being built custom for TerraGen.
02:49 Dave McLean: I actually just got out of a design review meeting with Ethan, like, just before this call, going through the spec with him for it to be figured out.
02:57 Dave McLean: So, if we're going to make a change, like, we're, we're sort of, we're at a good point to do it.
03:02 Dave McLean: And if this was coming up two weeks from now, that would be a little more challenging to do. Um, technically speaking, it's possible.
03:07 Dave McLean: What it would look like is, uh, it can be a couple of different flavors. The easiest flavor would be, from a, from a, an effort point of view, is that you guys handle that.
03:17 Dave McLean: So, from, from Intellect's perspective, what you feed in is a unique value that is the combination of what you would call the position code and the location code.
03:26 Dave McLean: 1, 2, 3, 4, 5, dash, ABC. For example, or whatever that, whatever that combination looks like. Okay. In that world, you just, you use the configuration exactly as we've talked about it thus far, except instead of it just being a position code, it's a position slash location code and you just.
03:45 Dave McLean: Define every one of them uniquely. So if you have 12345-ABC, 12345-XYZ, 12345-000, whatever the, whatever the third one is, you would essentially, in Intellects, treat them all as independent entities that you are managing.
04:04 Dave McLean: That changes the administrative profile on your end a little bit, and I, I question whether or not that actually is worth the value of it, because I think when you, when you start to build the intersection of it in that fashion, I can't imagine that there's there's, I suspect there's going to be a lot
04:19 Dave McLean: of position codes when, especially when combined with location where there's only one person in it. Right, uhm. 
04:33 Paul Niemer (Contractor): I mean, yes, there are some. I don't know about a lot, but yeah, there definitely are are some. 
04:40 Dave McLean: OK, because you guys told me there's like. Like 200 plus position codes for something like 400 
04:48 Paul Niemer (Contractor): employees, right? Like. Yeah, I think that's probably for, yeah, for roughly 350 plus or minus employees, a couple hundred position codes.
04:58 Paul Niemer (Contractor): So then when you 
04:59 Dave McLean: factor in. The location as well, let's say you have a position code that has 5 people in it across the organization.
05:08 Dave McLean: But if you then add in the position code as well. Like those 5 people, maybe split it, spread out across 3 locations, which means that.
05:18 Dave McLean: You know, at least some of those. location, position, code combinations, and only have one person in them. That's correct, OK?
05:25 Dave McLean: OK. Alright, I understand, but ultimately, ultimately up to you guys to decide whether that actually automates anything for you, but it's definitely possible you would just send it in instead of sending us the position code.
05:38 Dave McLean: On its own, you would send us the position code with the location code appended to it, and that's what we would use to select the bundle of things that you would put them into.
05:49 Dave McLean: You would just have to define every bundle as its own 
05:53 Paul Niemer (Contractor): discrete thing. Okay, and I think we've headed down that path. Uhm, then, is it okay, so, you know, you were using this, like, so say a, you know, a position has, you know, A, B, C, and then X, Y, Z, uhm, Could another one have A, B, C, and then just X, Y, you know, uhm.
06:18 Dave McLean: It can, but you would have to define every permutation of those independent of the others. 
06:24 Paul Niemer (Contractor): Oh, and I think that's going to be by 
06:27 Dave McLean: location. Yeah, I think if I, maybe it's helpful for us I think it sounds like, 
06:35 Vanessa Newmarker: yeah, what Dave is saying is that we would have to create, like, a custom. Position. Position code for the individuals in positions that require an additional qualifier, such as location.
06:50 Vanessa Newmarker: But I guess my question is, if we did that, it's not going to automatically feed from Paylocity, because that position code doesn't 
06:58 Dave McLean: exist today. Your integration would have to manage that, so you're increasingly getting to a point where, like, this is now a function of the integration that you send through.
07:09 Dave McLean: So let's just let's just model 
07:11 Vanessa Newmarker: it out hypothetically. So that would be something we'd have to talk to Jeremiah about, but go ahead, Dave. 
07:16 Dave McLean: Okay, so let's say I have position code 1, 2, 3, 4, 5, right? And that that's a numeric code associated with a job title, you know, position name might be Safety Supervisor, let's say.
07:31 Dave McLean: Okay, now in that file, you might have a list, like, on the Intellect side, using the the setup screens that we're building for you, you might say for position code 1, 2, 3, 4, 5, we want to put them into workgroups, ah, workgroup A, workgroup B, and workgroup C.
07:57 Dave McLean: Hypothetically, so three different workgroups. You might also say that anybody in this one should be in role A as well.
08:07 Dave McLean: And then finally, document distgroups. They might be in Distribution Group A, Distribution Group B, hypothetically.
08:28 Dave McLean: So in this case, that, that's it. That, that ignores security, which would just be another set of groups, but at some point it's just more columns in a table here.
08:36 Dave McLean: So, in Intellects, because in this case, you know, 1, 2, 3, 4, 5 is a position code that's a known one, it exists already in your, in your Paylocity system, or at least, Thank you.
08:45 Dave McLean: Whatever it really is, uhm, we would load this in from a spreadsheet, uhm, and either Matthew, you administratively would go through for each one of them and pick and choose the workgroups, roles, and distribution groups that it should align with, or we can load them in from a spreadsheet.
08:59 Dave McLean: Whatever that looks like from an implementation point of view, this is what we would be setting up in Intellects, is a table that says this.
09:08 Dave McLean: Then on the feed, what you're saying is that when you send somebody through, you also have another variation of this where it might be 1, 2, 3, 4, 5, Bye-bye.
09:18 Dave McLean: Location A, and another one where it might be 1, 2, 3, 4, 5, Location B, and that's, Vanessa, from what I think you just said is, this isn't, this isn't a value that lives in Paylocity right now.
09:31 Dave McLean: Right. These are two different fields in Paylocity. Yes, that's correct. Yeah, we have 
09:38 Vanessa Newmarker: a position code and then we have a work location. Yeah, call, 
09:43 Dave McLean: ah, feed, yeah. OK, so let's model this out. So let's say. A let's say we did it this way. This is the this is the way that changes things on my end the least.
09:58 Dave McLean: Yeah, just format it so in that scenario you would still have your position code 12345. You would just create another 112345 dash.
10:06 Dave McLean: Locate and another one dash look be you'd list them out accordingly. And let's say that the work group assignments are almost identical except.
10:19 Dave McLean: It looks like that, so A and B are the same. The second the root position code like the sort of generic one that isn't location specific, but the third one that the person is part of that.
10:31 Dave McLean: That's a location specific bundle of courses. Otherwise everything is the same. In this model, all this means is that for every variation of 12345 that you want to have, you just create them as another location code profile in Intellects with whatever discrete course assignment or work group and role
10:51 Dave McLean: and group assignments that it needs. And on the integration side. You ask Jeremiah to build this code into the code that you send to Intellects for each person.
11:01 Dave McLean: So when inevitably it creates a new employee, Dave McLean, it creates Dave McLean with position code 12345-location-b. Because that's where that's the 
11:11 Matthew Futter (Contractor): one that we want to map him to. OK, I'm sorry. 
11:16 Paul Niemer (Contractor): So, uhm, Dave, can you, if we take and lay this out just slightly differently, uhm, could you add a column between B and C?
11:30 Paul Niemer (Contractor): Let 
11:30 Dave McLean: me do this. Duplicate. 
11:38 Paul Niemer (Contractor): Between B and C? Yes. And, yeah, you know, and let's call that location name. 
11:46 Dave McLean: Yeah, before we go any further, if we do this, I'm change ordering it, guys. That's why I was trying to go the other way.
11:52 Dave McLean: Commercially speaking, this model, this is possible, but commercially speaking, it's, it's a complete mess. It's complete reconfiguration of the underlying design to do this, and it's a more sophisticated set of logic.
12:04 Dave McLean: I'm already stretching the budget on this one because everything to do with this sort of position code maintenance piece, none of this is referenced in scope.
12:12 Dave McLean: All it says in our scope of work. Is that you guys will send through people with position codes and that people will get mapped into work groups to assign courses.
12:23 Dave McLean: That assumes that doesn't assume that any of that logic lives in intellects. That assumes that it lives in your integration layer by building something for that logic to work.
12:31 Dave McLean: To live in intellects for intellects to be the thing that controls. Hey, if somebody is in this position code, put them into these work groups.
12:39 Dave McLean: That's me already stretching the budget that you have in order to accomplish something. If I got to go further than that by adding this piece in, that's going to take us over budget.
12:47 Dave McLean: And I got a change order for that. So before we go any further, I just want to understand whether I'm looking at looking at the screen up here and you're down here.
12:55 Dave McLean: That's again. Weird. I just want to understand. First, before we go do that, are we even open to the idea of doing a change order to make this a more sophisticated set of logic?
13:07 Dave McLean: Or do we want to try to make this work within the existing commitment that we have? 
13:12 Paul Niemer (Contractor): Let's try to make it work because it's so where I was heading. Headed was, you know, the spreadsheet that we have for all this has kind of where I was heading and that's how we, you know, I kind of laid it out, but it sounds like I need to change what I'm doing or had done in order to make it fit, uhm
13:38 Paul Niemer (Contractor): , what you need. I have 
13:40 Matthew Futter (Contractor): a question. Yeah. Can I jump in? So, um, we, Paul, Vanessa, I looked at the work group position code and location spreadsheet.
13:51 Matthew Futter (Contractor): A day or two ago. Uhm, I think, I think I looked at this on Monday and then I didn't come back to it until today.
13:59 Matthew Futter (Contractor): We have 213 unique position codes as of the report that you built this from. That is a lot of unique position codes, but those are fully automated.
14:07 Matthew Futter (Contractor): First question. Dave, what you're showing on the screen, would this be automated or would it be manual every time? I mean, I understand conceptually it could be automated.
14:17 Matthew Futter (Contractor): Is this going to be a highly hands-on thing or is this only when we create a new position? Oh, we're hiring another general win.
14:23 Matthew Futter (Contractor): Contact at Mojave. Great. No problem. Click done. Automated in. Oh, now we have a specific position that hasn't existed before.
14:31 Matthew Futter (Contractor): We have to have a new position code in Paylocity. Now we go in and touch this, this table in intellects or in the integration or wherever it lives.
14:40 Matthew Futter (Contractor): How much of that is going to be manual with what you're showing us on screen? A lot? A little? None?
14:46 Matthew Futter (Contractor): One-time build? 
14:47 Dave McLean: Yeah. So, so let me, again, I'm going to answer that in two levels. Sure. If we, if we viewed it through the original model of this, which is that none of the this has anything to do with, uhm, position.
15:01 Dave McLean: So it's just straight up like this. 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, whatever. Something like that.
15:09 Dave McLean: Let's say there's three very distinct Well, um, position codes, uhm, and we'll say admin assistant and general manager. Something like that.
15:20 Dave McLean: So in this, in this scenario, this model is closer to is exactly what we had talked about during the workshop.
15:26 Dave McLean: Position code has nothing to do with with location. It is, it's just its own thing. Uhm, in this model, anytime somebody comes through with an existing position code, one that we have already processed before and built all of this logic out for, hands off.
15:43 Dave McLean: So tomorrow you're going you get a new general manager. Doesn't matter where in the org they are, just a new general manager with position code 75893490.
15:52 Dave McLean: Because it's in the table already, the system recognizes it, joins them to the latest version of that, uhm, that one, and then maps them to all the groups.
16:00 Dave McLean: On the flip side, if you get a new person in tomorrow with a position code that we've never heard of before, what will happen is the system will create a position code record.
16:10 Dave McLean: It'll activate a workflow on that and notify the admins. So Matthew, I'm going to use you as the proxy for, uh, for the admins as a nebulous concept.
16:19 Dave McLean: You get a task that says, Hey, we've got a new position code for Mickey Mouse. Uh, here's the code. Go in.
16:27 Dave McLean: You define the name of the code. You define all the different requirements. You publish that code so that we take a snapshot of all the parameters you've given and complete the workflow.
16:36 Dave McLean: And on the completion of the workflow, that employee that originated the position code, plus anybody that came in after them, but that still doesn't actually have all the parameters, instantly they now get everything you just defined.
16:49 Dave McLean: and published to them. And going forward, anybody new that comes in against that position code 
16:54 Matthew Futter (Contractor): gets whatever that one is. Okay, so even the touch would be, would be from an automated workflow. We wouldn't have to watch for that, report that, check on that, intellectual, uh-oh, new one.
17:05 Matthew Futter (Contractor): Task created, as long as I'm paying attention to my notifications, where I check in every day or whatever, we're good, we set up, everybody wins.
17:12 Matthew Futter (Contractor): You 
17:12 Dave McLean: got it. Okay. So, in that sense, like, I'm, I'm skeptical given the numbers that are involved, number of employees versus number of position codes.
17:20 Dave McLean: Like, that's, that's, that's, that's a, the, the gap between those two numbers is not as high as I would think it is normally, but I think in particular that, that problem gets exacerbated if we think about it this way.
17:32 Dave McLean: So if, if every safety supervisor at Thank you combination is now a unique thing with unique parameters, then, you know, coming back to this one, like, it's great that we have this, but imagine tomorrow you get an admin assistant at location A, well, we've never had an admin location at assistant A, 
17:52 Dave McLean: or, sorry, an admin assistant at location A, so now that's considered a new one. And then the next day we get an admin assistant at location B, we've never had that one before because they all lived at location D and X and whatever down the road.
18:04 Dave McLean: So I just think that, it is going to be kind of high touch, it's just, it's manageable, but it's not automated.
18:10 Dave McLean: You got it, you're just going to get a lot of those, hey, we've got a new position code tasks that show up that you're going to have to sort of constantly build in.
18:17 Dave McLean: So, the first question for you guys. I 
18:22 Vanessa Newmarker: I think that's something that's just going to happen as we're growing and we grow and that's expected. If it's a completely new position code, I think the only, uhm, I guess caveat in terms of Paul's training would be, like, if we already have this position code, but we just don't have it at that location
18:44 Vanessa Newmarker: , what's gonna happen 
18:46 Dave McLean: to their training? So the, the, the one for you to consider is the, the more sophisticated version, i.e. the change order version of this, would allow you, when you define the position code, what you're defining first are, show me the, the groups, roles, and distribution groups that apply to this position
19:07 Dave McLean: code regardless of location. Then, you see a grid at the bottom where you then specify. Okay, now for all of the locations we have, what, if any, location-specific requirements do we have?
19:23 Dave McLean: And the idea then comes into play that when we receive a person, we can map them against both properties and we can compute their location.
19:30 Dave McLean: So can consume both the position code universal ones, the ones that are location-agnostic, and any of the requirements that are bound to a specific location for that position code without you having to rebuild Thank you.
19:46 Dave McLean: Thank you. The universal stuff for every location independently, so you can imagine a scenario where if you've got safety supervisor and look for 9 out of 10 sites, it's exactly the same, but it's that one site that's different.
20:02 Dave McLean: That has an additional group, or maybe a different group or something like that in in this model you have to manage all 10 variations of it, whereas in the more sophisticated change order model, you manage the universal profile and then you.
20:18 Dave McLean: Build in a list of essentially location specific additions or 
20:22 Paul Niemer (Contractor): modifications to that. So. It sounds like about the best, but you know the. I guess caught most cost effective way.
20:34 Paul Niemer (Contractor): To do this would be, you know, if you have to take this safety supervisor and we have one of them is in.
20:43 Paul Niemer (Contractor): Say Mojave and the other is in Palm Springs. The Mojave might be 1, 2, 3, 4, 5. Yep, 1st position code.
20:52 Paul Niemer (Contractor): Exactly. And, uhm. And then, that's uhm. And then they would have different, the same things, but then that last thing for 1-2-3-4-5 might be Mojave location, you know, or a site-specific, and then 1-2-3-4-6, uh, might be all the same technical trainings plus Palm Springs.
21:22 Paul Niemer (Contractor): Yep. 
21:22 Dave McLean: Yep, and each, each of them, in spite of the naming convention, in spite of the fact that, like, in the real world, it's the same job, it's just applied at different locations, from a data point of view and intellects, they are functionally independent.
21:37 Dave McLean: There is no tie-in between these two things. Other than the fact that the name of it looks similar. Right. Okay.
21:43 Dave McLean: Okay. Okay. It's funny how, when you get into, into starting to think about how to automate it, it starts to get all these.
21:55 Dave McLean: Different sort of cases that you have to come across, and so ultimately it's about figuring out is the juice worth the squeeze, right?
22:02 Dave McLean: Like, is it in the, in the pursuit of automating? This is full automation, knowing that that's probably going to be more expensive.
22:11 Dave McLean: Is that worth it compared to kind of the middle ground option here, which is essentially treat every combination as its own unique thing?
22:20 Dave McLean: OK, 
22:21 Paul Niemer (Contractor): well, I think I understand, uhm, so, uh. Anyone else 
22:28 Matthew Futter (Contractor): before we leave this item? I think some of the background work that we've done here, and I'm not. I'm not going to share my screen, because I didn't build this.
22:37 Matthew Futter (Contractor): I looked at this kind of out of out of turn. I don't want to. I don't want to muck up anybody's works.
22:43 Matthew Futter (Contractor): Um, yeah, we, we might have enough information that we could come back and say, aha, what if we do this instead?
22:52 Matthew Futter (Contractor): Dave, if we build a table with 30 work groups and we can make every position, right? Let's say all 213 fit into one or more work groups, and we just give you that table and go, here, this is our entire staff, we have 30 work groups, it'll apply to everything, 15 of them are location-agnostic, 15 of them
23:10 Matthew Futter (Contractor): are location-specific, we're done. Is that is that automation or is that sliding into change order still? 
23:18 Dave McLean: Say that all again. Sorry. If that helps. 
23:23 Matthew Futter (Contractor): Do you mind, Paul, can I share this? Oh, no, not at all. All right. Um, hold on here. Let me hear, let me, whatever I'm on over here.
23:28 Matthew Futter (Contractor): I had multi-factor. Multiple tabs. So real quick, I, sorry, sorry, sorry, sorry. Here. We dumped out the last, I guess this was the last Actives report to get all the location codes.
23:44 Matthew Futter (Contractor): Sorry. Sorry. Position codes. Work location. Names. You can see there's a lot of filtered stuff up here. I didn't build this.
23:51 Matthew Futter (Contractor): The rest of the team did this. What I did was dump this into Unique. So Excel could tell me there's 213 location codes.
24:00 Matthew Futter (Contractor): Fine. Position. I gotta stop using that word. Fine. There's 213 unique position codes in our current actives list. But if, and I, I didn't touch anything you guys made, Paul, I copied the sheet over and then started cutting and pasting on it.
24:17 Matthew Futter (Contractor): If we remove all the location items, and then go to those 213 unique codes, there's only seven that had any overlap, you know, corporate office.
24:27 Matthew Futter (Contractor): Yes. Corporate office. No. Cause it was remote. Okay. All of these in this column right here, we're just a remote flag.
24:33 Matthew Futter (Contractor): Yes or no. Someone who works at the corporate office, like me. Paul said, gets training for being on site. Someone who's remote doesn't have to necessarily have that training.
24:41 Matthew Futter (Contractor): We've got that set up right now. Corporate field office. It's, it's anyway, 
24:46 Dave McLean: I'm not going to hit it that way. Oh, and, and, and sorry, Matthew, how many people are we talking about across these, what, dozens?
24:51 Dave McLean: Like, 
24:53 Matthew Futter (Contractor): examples here. Each of these duplicated lines represents one person. There are seven people who didn't fit the mold. Don't, 
25:03 Dave McLean: don't don't try to opt, don't change the automation for seven people. That it's, you, you're, you're going to lose that every time, right?
25:10 Dave McLean: No, I wasn't planning to. That's what I was going to say. Okay. 
25:12 Matthew Futter (Contractor): Yeah. Here is seven people. Seven individual lines had a different flag out of the entire original map. Once I squeezed the data for a few minutes to see if I could understand what we were looking for.
25:27 Dave McLean: Yeah. In preparation for this phone call. Okay. Yeah, so don't, so in, given that, I wouldn't change anything about the design, including how you feed it.
25:33 Dave McLean: Just put people into the position code, create a, like, go off of the sort of lowest required amount. of, of stuff.
25:41 Dave McLean: So in the case of, we'll just take the accountant staff one that's there. The corporate office Reno, yes, no. Build it on the no path.
25:50 Dave McLean: And then if there's a work group that that one person needs, or a set of even, not even a work group, but frankly a specific course, is probably what it resolves down to.
26:00 Dave McLean: That that one person needs by virtue of being both accountant staff as well as at the corporate office. Just map them to that course as an individual assignment.
26:12 Matthew Futter (Contractor): Okay, if we literally have seven exceptions after what we build to automate, just manage those seven manually. If you're at seven exceptions, you're at world class, Mike.
26:27 Paul Niemer (Contractor): Mike, I think, I think might be more than seven, but we can talk about that. I didn't build this, that's why 
26:34 Matthew Futter (Contractor): I wasn't going to show it, but I think it might be relevant if we're considering change order, we might not need to.
26:38 Matthew Futter (Contractor): No, yeah, I think, I think we 
26:42 Vanessa Newmarker: need to see if Jeremiah, can get on our call tomorrow, so we can see what our integration might be able to do for us.
26:52 Vanessa Newmarker: No, no, no, hang on, if we're at seven, this table, well, to Paul's point, it might not be seven, because this table, This table doesn't include any of my workgroups.
27:02 Vanessa Newmarker: It doesn't include any of Legal's workgroups. This is not at all a comprehensive list. So that is why I'm saying, we need to go back and look at how many exceptions, but in the interim, it is beneficial for us internally to be able to run down what our option is with the integration side and what it 
27:21 Vanessa Newmarker: can do if we need to do something where we tack on a little qualifier to the existing position code in Paylocity for specific locations because a tab that Matthew has is not all-inclusive of every single workgroup 
27:37 Matthew Futter (Contractor): we have created right now. No, no. No, no, no, no. That's why I was saying there were like twice as many workgroups.
27:43 Matthew Futter (Contractor): Even, even when I took a glance at it, this is just, I hit everything down or squeezed it down so we could just.
27:48 Matthew Futter (Contractor): Ignore location and see what shook out. That is the only reason I did this. Got it. Was to find out if we had a least common denominator.
27:58 Matthew Futter (Contractor): Sorry, go on. The other thing 
28:00 Dave McLean: that, that might help you in this circumstance, like. You're in the pursuit of finding work group to position code to work group mappings, which would then carry work group to course mappings.
28:13 Dave McLean: The system also supports a course being bound to a location and therefore any person at that location. Gets that course.
28:23 Dave McLean: So I'll give you an example. Staff accountant, right? Forget where they are for a second. Staff accountant has 55 courses in that work group that they need to be part of hypothetically or in any combination of work groups.
28:36 Dave McLean: They need to have a. You know, a gap audit compliance one that we've got to do a FinTrack or a Sarbanes-Oxley compliance course, blah, blah, blah.
28:45 Dave McLean: All the finance courses I can possibly think of. They also need to have another work group, which carries with it sort of all of office worker stuff.
28:55 Dave McLean: So, you know, fire prevention within an office environment, maybe basic first aid or something. Again, whatever it is that you want for anybody who's considered an office worker, you map, you build a work group for that, you map it.
29:07 Dave McLean: Again, that's location agnostic. You work in an office, or if your position code is one that is designated to work in an office, then you get into that work group.
29:16 Dave McLean: But then, if the person works in New York at the corporate office, let's say there's three other courses that the person needs to be part of that deal with specific emergency procedures at that place.
29:30 Dave McLean: Fire drill, fire drill procedure for the New York corporate office, where the muster stations are, what the procedures are, all that kind of stuff.
29:37 Dave McLean: Perhaps there's also a, uhm, Thank you. Whatever, yeah, I'm sure you can get the, get the idea, but things that have nothing to do with your job, they have, they're only bound by what it is, or by where it is that you work in that regard within the org structure.
29:52 Dave McLean: You can do that. You don't have to create work groups for that. You can take those courses. You bind them to the location.
29:59 Dave McLean: This is functionality that already exists in Intellects today in the out-of-the-box, and any employee that is put in that location, regardless of their position code, gets those courses.
30:09 Dave McLean: So now, the person gets their courses assigned by way of the program. The position code to workgroup mapping to course mapping, plus the location to course mapping.
30:21 Dave McLean: The only piece that doesn't give is if you had a version of, a version of one of those courses that was job-based.
30:29 Dave McLean: It's position-specific to a location, but I don't think that's how it's set up. I think it's, there are two independent 
30:36 Paul Niemer (Contractor): tracks right now, right? Yeah, I think what you're, what you just said makes a lot of sense. I think that's 
30:43 Dave McLean: exactly what we have. Okay, that's great. And then you don't have to do anything right now. You just send us the position code, and you're already going to be sending us the location.
30:52 Dave McLean: We put people into a position code, which vacuums up whatever work groups you've defined for that position code. Again, regardless of location, it's just, if you're in that position code, you should have that work group, which means you should have those courses.
31:05 Dave McLean: And if you are in that location, the location will carry with it a list of courses that would get assigned to the person in order to make sure that people who work at the same time and place have the same requirements in that regard.
31:20 Dave McLean: OK, well, I think that might solve our problem by myself. It's never. It's never something where like you have a, uh.
31:30 Dave McLean: Sarbanes-Oxley compliance course specifically. Specific to New York and another Sarbanes-Oxley, uh, compliance 
31:37 Matthew Futter (Contractor): course specific to, uhm. Wherever 
31:42 Dave McLean: else I can't think of where you have staff accountants anywhere else, but like, it's not like it's the same course, but a variation of it that has to be assigned based on the intersection of those two things.
31:52 Dave McLean: It's two 
31:53 Paul Niemer (Contractor): different streams of assignments. Okay, well, I think that's good. Uhm, should we move on to the next thing? Because I think that one's, uh, I don't want to use up all of our time.
32:04 Paul Niemer (Contractor): No, 
32:04 Matthew Futter (Contractor): no, yeah, I think we've, we've run that. To the point where we might have learned the capabilities that we have could solve the issues.
32:11 Matthew Futter (Contractor): So I agree. So thank you. I'll be back on mute. Number, number 
32:15 Paul Niemer (Contractor): two, um, Dave. So, you know, new hire training. Um, one of the things that we're doing now that we want to implement.
32:22 Paul Niemer (Contractor): Really at the same time that, uh, this program gets implemented is to stage, you know, that new hire training. So, you know, your, um, your new employee, you're going to have a, you know, some, uh, training due on on day one.
32:38 Paul Niemer (Contractor): Yep, and then day 30 day 60 day 90. How I guess there's 2 things with that. Um, 1, we want to, even though you might have some training on day 60.
32:50 Paul Niemer (Contractor): Uhm, that's due on day 60. If your supervisor wants you to have it on day 1, you know, we want them to give the supervisors that flexibility to pull that horse out and assign it to you on day one.
33:05 Paul Niemer (Contractor): Uhm, and then how do we set that up? 
33:08 Dave McLean: You know, so that there's no staging of courses. This is something we talked about this in the workshop. When you assign the course.
33:16 Dave McLean: It's assigned it to do that day. If you want to change it, you have to manually assign those requirements and kick them out to whatever day, but you can't predefine a grace period or something like that as a, like, hey, for the 1st time that we assign something, you know, if I got 10 courses, you know
33:33 Dave McLean: , 3 of them are day 0 courses and 3 of them are day 16 courses. And 3 of them are day 90 courses.
33:39 Dave McLean: That functionality doesn't exist and it's not part of our scope of work to go add 1. 
33:43 Paul Niemer (Contractor): OK, so if you have to do those, if you're required to do those courses, they all become due on day 1.
33:51 Paul Niemer (Contractor): They all 
33:51 Dave McLean: become, technically they all become due on the day that they're assigned to you, which, based off of something else that you guys were looking for in the workshop, which is, hey, we want people to be created in the system by palosity before their start date.
34:06 Dave McLean: So imagine, you know, Dave starts on November 1st. And everything gets set up, whatever trigger in the integration that Jeremiah builds, sends Dave's record through with a date of hire of November 1st, but with a, like, the date that that actually gets created in IntelliX is October 21st.
34:25 Dave McLean: Then those courses are due October 21st, and when Dave shows up on day one, 
34:30 Paul Niemer (Contractor): it looks like they're overdue. OK, but either way, you can't do them until day one. No, because you're not there.
34:39 Dave McLean: Yeah, OK, yeah, you can't. Got it. So it's up to you to decide how to how to play with that.
34:46 Dave McLean: Do you want to just leave it like that was kind of Amy's take in the meeting was like, look, it's just that's the way it is.
34:52 Dave McLean: Or do you like want somebody going in to like manually change all those dates to push them forward? I've done some staggered schedule or whatever the case, which is probably the most accurate way, but it's also administratively the highest effort way.
35:04 Dave McLean: Kind of defeats the point of the direction you guys are headed. Right, OK, 
35:08 Paul Niemer (Contractor): uhm, OK, uhm. OK, that answers that. That's fine. It's not. I think the answer we were hoping for, but that answers that, uhm, and then the last thing you were working on, uhm, getting all the the training history due dates, OK, or training history.
35:29 Paul Niemer (Contractor): I guess, uhm, you know, completion dates, not due dates, but completion dates, uhm, and so. How? I guess I'd be easiest to work with a kind of a go live date minus X number of days.
35:45 Paul Niemer (Contractor): To get you that information, you know, when does that have to get to you? You know, if we're going live?
35:52 Paul Niemer (Contractor): Say January 31st. Yeah, 
35:55 Dave McLean: when would you need that? So from an accurate data accuracy and completeness point of view. Like three days before. Now, in reality, if we're going to leave it that close, if we're going to plan the deployment to be that kind of just-in-time model, then what we have to factor in is that it has to go 
36:17 Dave McLean: well. So it can't be the first time that we're trying that process, which means that I would need you guys to send me samples, large-scale samples, you know, let's say a month in advance, two months in advance, ideally before the holidays, so that we can do a practice run in the testing environment to
36:34 Dave McLean: make sure that the logic that we're using to consume that file and process it does everything that we need it to, and if there's gaps, that those are known gaps that you can take into account.
36:46 Dave McLean: The worst case is that we leave it until three days before Go Live, we load it in, and then you guys realize that, oh, shoot, there's a bunch of gaps.
36:55 Dave McLean: There's these courses that we didn't get history for that we we've got to scramble for, or, you know, a good example of this is that the history import, if somebody has ever taken something before.
37:06 Dave McLean: Intellects will use that history record, load it, and then as a result of that, create a requirement record to show that the person required it at some point in time.
37:16 Dave McLean: But if the person requires something, but never had the, never took the course in the past, Intellects has no way of knowing that.
37:22 Dave McLean: That's one of those known, known things that, that you just have to know going into GoLive, that, hey, if there's a scenario where we know that somebody needs a course, if they've never taken it before, Intellects won't automatically know that they need to take the course.
37:37 Dave McLean: We'll either have to make that assignment, or we'll have to rely on the position code to work group the course mapping to do that for us.
37:44 Dave McLean: Okay, and it's these types of things that, like, I can, I can explain the principles of it, but you're not actually going to fully grasp it until you see real data loaded in, which is where I, we want to do a proper practice run beforehand with, ideally, a large set of it.
37:59 Dave McLean: Okay, good enough, because, you know, we 
38:01 Paul Niemer (Contractor): can't, uhm, really create that data set until we turn off at least, you know, some of the TPC training here, 
38:10 Dave McLean: or book. Thank you. Turn off. You can't create, you can't create the final one, but I mean, ultimately, you're building a report, right?
38:17 Dave McLean: Out of TPC. Yeah. I'd start the report sooner rather than later, because you can, like, 
38:22 Vanessa Newmarker: reports can just be rerun. Yeah, that works. We're going to have it planned out to do it staggered, where we're going to pull everything up to a certain point, and then we will, the current trainings that are assigned, those are going to be turned off.
38:43 Vanessa Newmarker: Closer to, uhm, you know, go live. But, yeah, we have historical for basically from, uhm, September, all the way to the beginning of time that we have in TBC, and we're going to work on pulling that.
39:02 Vanessa Newmarker: And so we should be able to give that subset and then see if there's issues. And we can chop it up to only give you, you know, a small bulk of it, just in case we run into issues.
39:14 Vanessa Newmarker: Uhm, but, yeah, either way, we should be able to stagger that with our current schedule. 
39:18 Dave McLean: OK, just when we go to do it for real in production, let's not plan for it to be like, hey, we did a load of production already, and now we're doing another load.
39:27 Dave McLean: It's when we go to do the production load, it's one shot to get it all in, so. Right. OK. OK, you want the full, you want the 
39:34 Vanessa Newmarker: full, uhm, data set up to whatever that point is? You got it. Let's say the practice run you were 
39:42 Dave McLean: doing it today, give me the, you know, the beginning of time or one year or whatever, whatever time you timeframe you're looking at for production.
39:50 Dave McLean: Give me that starting point up to September. We load that in, verify everything, understand all of its limitations, all of its, you know, all of its nuances and stuff like that.
40:00 Dave McLean: Great, awesome. Now we have a procedure that when we get to Thank Go live. Again, we can maybe refine the schedule.
40:07 Dave McLean: I'm saying three days just because it's a random number of days, but like shortly before we want it to be just in time.
40:13 Dave McLean: You extract the same file with the same start date, but now taking us up to end of January. Whatever that date that you're running, it is to give us the cumulative amount.
40:25 Dave McLean: That's what we load into production. OK, 
40:27 Paul Niemer (Contractor): so only one, only one file. 
40:31 Dave McLean: For production, yeah, for production. Yeah, OK, yeah, great. Otherwise, what ends up happening is like. If for some reason something ever changed in the data that was loaded originally, that's usually a whole other process that you guys have to go through in order to identify that change.
40:46 Dave McLean: So if, you know, let's say there was a record that we loaded in the beginning of time to September. But then after we loaded it in TPC, somebody realized, oh shoot, we actually fat-fingered in the date wrong or something like that, so we backdated it.
41:01 Dave McLean: It might not get caught in your, in your extraction. You want, you want your, the production load to be everything.
41:08 Dave McLean: Okay. Okay. Hey, Matt. Good enough. 
41:11 Matthew Futter (Contractor): Um, two questions. First off, how big a slice, and I have, I have two parts to this. How big a slice do you need for the test run?
41:19 Matthew Futter (Contractor): And then how big and crazy and ugly can the, can the production be? Two questions. Two parts to both questions.
41:26 Matthew Futter (Contractor): For the test run, do you need at least one item from every active employee? Do you need at least one record of every course?
41:33 Matthew Futter (Contractor): Do you want 10 of everything for every person? What would be a good sample size to test? 
41:40 Dave McLean: I mean, within the global population of employee, like active employees and active courses, everything. Okay. Okay. At least one of every course, at least one of every employee would be ideal.
41:52 Dave McLean: You got it. Now what you guys will need to decide as part of that, though, is, you know, there's a lot of people that don't work for Terrigen anymore.
41:59 Dave McLean: Those people will not be loaded in by your HR feed. So, how do you want to handle that? Because if every course needs to go against an employee record in Intellects, then you end up with a mismatch there.
42:10 Dave McLean: If you want to load in date, training dates, and data for people that are no longer with Terrigen, then that means you need to load in all the people that are no longer with Terrigen, then load in their courses, then archive the people that are no longer with you.
42:25 Dave McLean: Same goes for courses. If there was a course that no longer exists, but you want to bring over its historical data, you need to give us the course data for all those historical courses so that we create it as a course code, load the data in against those people, courses, like create the history of it
42:42 Dave McLean: , then archive the course because it's no longer an active course. that people are, are using. Okay, do mismatches that 
42:49 Matthew Futter (Contractor): you mentioned crash, or do they just pop out a report? Hey, these 500 records mismatched. They 
42:55 Dave McLean: fail, uh, the individual rows fail. 
42:57 Matthew Futter (Contractor): Okay, alright, so it won't crash the import, it would just spew out a very, uh, unfortunate 
43:03 Dave McLean: report. Okay. Yeah, yeah, it's, it's more, it's less about the error handling side of it. What I want you guys to make sure you know is that when you go live, do you, do you know what the scope of the data that's been loaded into Intellix is, and do you agree to that that's, that, that scope is what 
43:19 Dave McLean: you were looking for. Gotcha. Okay. Um, when we do the 
43:23 Matthew Futter (Contractor): giant import, I, I, I have not, sorry, might be a dumb question. I have not looked at the training, training management materials very closely.
43:33 Matthew Futter (Contractor): Paul's handling that. I am aside. Um, do we have, so we can pull reports that we can export to Excel.
43:43 Matthew Futter (Contractor): Easy peasy. Then we have, uh, your template, I presume for how you want that historical training data. Right? Yep. Yes, we did.
43:51 Matthew Futter (Contractor): Okay. All right. So never mind. That answer my question is we can map it onto your template and we'll, we'll deal with the in-between and I will look closely at it and not ask any more questions in 
44:00 Paul Niemer (Contractor): this live meeting. Thank you. Okay, I don't have anything else. Anyone else? Vanessa, 
44:11 Dave McLean: Matthew, Whitney? I have tangentially related questions for you guys. 
44:18 Paul Niemer (Contractor): Of course. 
44:18 Dave McLean: Okay, I'm going to rapid fire them at you. First of all, Matthew, you had mentioned that you guys were having some conversations internally with Legal, I think, about the possibility of a different org structure, something that more accurately reflects the way that Terragena is organized instead of using
44:37 Dave McLean: establishments. Did that 
44:39 Matthew Futter (Contractor): conversation go anywhere? Uh, yeah, I don't, I don't remember that being legal specific, but, I'm sorry, I might 
44:48 Dave McLean: be, I might be manufacturing that part. 
44:50 Matthew Futter (Contractor): Yes, we, Jeremiah has information. Ah, I that he briefly parsed with Amy that we have not brought you yet, that we would like to get, in fact, I was going to follow, ah, would love to know when you have time in the next, say, a week or so, ho, ho, ho, that your calendar doesn't show if you have another
45:08 Matthew Futter (Contractor): slot like this where we could go on and squeeze in there. You don't have to tell me that right now because I need to check with Jeremiah, but if you have a slot or two, we will do everything we can to work around those.
45:18 Matthew Futter (Contractor): Ideally, not this week. Okay. No problem. Uh, 
45:23 Dave McLean: not this week because Amy is not available for meeting. Just this week. Okay. I got you. Um, just to throw out a few for you here that I can book over, um, 1 o'clock Eastern time.
45:36 Dave McLean: So it was a 10, 10 o'clock 
45:38 Matthew Futter (Contractor): Pacific time on Monday. Okay. 
45:42 Dave McLean: Uh, 1 o'clock Pacific time on Monday. Okay. Um, 1 o'clock Pacific time on Tuesday. All right. And last one, um, any, like, any slides.
45:56 Dave McLean: Not between 12 o'clock and 2 o'clock on Wednesday, Pacific time. All right. Thank you 
46:04 Matthew Futter (Contractor): so much. I will see if I can get one of those booked as quickly as possible. In preparation, excuse me, get that booked now while we prepare the materials 
46:11 Dave McLean: that will make that available. Okay, so I'm going to ask that let's make the agenda for that centered around three topics, all of which are intersecting with Jeremiah.
46:21 Dave McLean: And in order that we're going to talk through them, the location structure piece. We need to do a kickoff on the Paylocity integration.
46:28 Dave McLean: And then single sign-on. 
46:32 Matthew Futter (Contractor): Got it. I'm 
46:35 Dave McLean: assuming single sign-on is going to run through Jeremiah as well? Absolutely. Okay. Perfect. All right, second question. Because that knocks three of them, but we're going to call those question one.
46:48 Dave McLean: You guys were having a conversation internally with another group about an asset hierarchy, uh, potentially. And it, I think it dealt with an ERP system implementation that's forthcoming at some point.
46:58 Dave McLean: Same question, did that one go anywhere? Is that something that we 
47:01 Matthew Futter (Contractor): need to factor? I haven't emailed the group yet, Dave. Yes, but Jeremiah said now he has, he has prepared his materials.
47:07 Matthew Futter (Contractor): He is ready to have that conversation. Okay. If you want to make that one call, we can, if we need to make that two calls, I'll look to pick two of those times you gave me.
47:15 Matthew Futter (Contractor): That'd be great. Let's, let's separate it to 
47:16 Dave McLean: just to give everybody a chance to reset. If it can't, because only one of them works, then, hey, we make it one.
47:22 Dave McLean: But I think between those four topics, that's, that's probably two hours worth of calls. Okay. Okay. Cool. And then the last one, this was a confirmation One you put it in a chat window and I can't access the chat window anymore.
47:35 Dave McLean: Could you shoot me the logic for, um, assigning establishments? Um, yes. Uh, just the, I have that in hand. I will email it to you.
47:45 Dave McLean: Right. Appreciate it. Thank you very 
47:47 Matthew Futter (Contractor): much. You got it. Amazing. 
47:52 Paul Niemer (Contractor): All right. And then, Dave, you probably saw Amy's note about the certification. I did. I've got to catch 
47:57 Dave McLean: up with Emma tomorrow to bring her up to speed on that one. So, the, just so you know, like, I'll let I'll bring, I'll have Emma bring this one to Amy and have them chat through how they want to handle it.
48:09 Dave McLean: Yeah. Um, no problem to defer, right? To cut it out and to, and to defer to leave everything that we know about it down there.
48:15 Dave McLean: But there's the, the rationale for why we're deferring it is a combination of different things. giving you guys some runway to answer certain questions about how you want the program to be structured, but that also could then lead to, hey, we want a more sophisticated take on how this should work versus
48:32 Dave McLean: what was in it. So there's a scenario where it might not just be a straight up deferral, it might be a deferral with a budgetary increase to be able to handle the additional logic and functionality that everybody's trying to pursue.
48:45 Dave McLean: My take on that is that until you guys workshop through what it is that you really want it to do and how the program should be fits the lowercase program, fits the system of intellects and what you're looking for out of it, how much automation you're looking for, how much data entry you're looking for
49:04 Dave McLean: individuals to do, all of those questions, we can't really give you a revised budget until we know what it is.
49:11 Dave McLean: So I'm going to, I'm going to recommend to Emma to do a straight deferral with a note in the change order that when we kick that off, the first step is a re-scoping of that activity or of that work stream to understand the full effort that we're now looking at based on all the conversations that you 
49:29 Dave McLean: guys have had internally and refinement of your requirements along the way. There's a scenario where, like, hey, you've managed to change the program enough that it fits everything we're talking about and it should fit the budget just fine.
49:42 Dave McLean: There's also a scenario where you've solidified the nuances of your needs enough that, hey, everything that we're running into that doesn't really fit our budgetary profile right now, you have confirmed, yes, we absolutely need those things.
49:57 Dave McLean: They need to provide mega value to us, blah, blah, blah, blah, blah. We need you to build that. Okay, then that's what we build our scope of work around.
50:05 Dave McLean: And the, and the resulting 
50:07 Matthew Futter (Contractor): budget that goes with it. Dave, so, you know, I met with Emma this morning, just in our every couple of weeks check-in.
50:14 Matthew Futter (Contractor): Yeah. Um, I told, I realized that Amy had only copied me and Paul on that email to you and that said, we're going to, we're going to put off calls and certs until a later phase.
50:23 Matthew Futter (Contractor): Perfect. Okay. So. Did you let her know? Emma told, yeah, I, I did. I forwarded Emma a copy of that email and then as an afterthought, remember to forward it to me.
50:30 Matthew Futter (Contractor): So Whitney's anyway, so two separate emails. I told Emma that verbally, I forwarded her the email while we were on the call.
50:37 Matthew Futter (Contractor): She is aware of the deferral. She said that would be a no cost change order at this time to, and yes, defer is the right word.
50:44 Matthew Futter (Contractor): Thank you. It is our goal, it is my understanding that our goal is to make our system fit into Lexus capabilities within a reasonable or non-existent budget change.
50:56 Matthew Futter (Contractor): So hopefully, I totally understand you can't give us a scope, a cost, sorry, you can't give us a, a, a cost or, you know, confirm zero cost until we confirm 
51:06 Dave McLean: the actual scope we need. Yep. I'd say to, like, treat that stream between now and when we started almost as though we're sort of back in discovery with Matt, uh, my Matt.
51:18 Dave McLean: Right. So that as you work through it, if you then come across a, you know, start to solidify a view of what all that should look like and what you, what you want versus what you need, what you're willing to trade off on, what you're willing to not trade off on, all of those good, good things that need
51:31 Dave McLean: to come out of those discussions before the identification process. Ideally, before that project starts, loop back in, hey Dave, we want to bring you up to speed on what, where our head is at with this, and that conversation would treat that as a pre-sales conversation so it doesn't hit your budget, 
51:47 Dave McLean: and the purpose of that is, it's, it's more like sales discovery, it's the, ok, let's look at what our scope of work was, let's see how that integrates with what you've come back with and what doesn't integrate, and then I can at least give you a, a sort of ballpark idea of, hey, everything you've done
52:03 Dave McLean: so far, does it fit? Does it fit with a plus, or does it fit with a plus, plus, plus, plus, plus?
52:10 Dave McLean: I'm with you. Right, and, and again, maybe that becomes the interplay until we're ready to start for you to at least be able to say look, yes, we, we need what we need but we also, we don't want to run away on the budget here so if it ends up being plus, plus, plus, plus, plus.
52:23 Dave McLean: then you guys can go back and continue to refine if you need to before we, we go and lock it in and, and put paper to it.
52:29 Dave McLean: Got it. Okay. 
52:31 Matthew Futter (Contractor): Sounds good. 
52:34 Paul Niemer (Contractor): Okay. 
52:35 Dave McLean: Awesome. Paul, if and when you're ready for, uh, if you've got a sample set of records, courses, groups, position codes, all that stuff for, take our staff accountant, for example, and, uh, you know, staff accountant, position code, staff accountant at New York versus not at New York.
52:52 Dave McLean: Like, if you've got a, uh, forget the template for a second. For one position, code with the different variations you're talking about, if you want to just send it over in an email in sort of plain text, I always find it's easier to take the example and parse that out with specific all the way down to
53:07 Dave McLean: the courses. We can potentially even look to use that as one of the early drafts. test cases for the position code manager feature in Intellects 
53:17 Paul Niemer (Contractor): that's being built now. Yeah, uhm, yeah, like Matthew was saying, it's done, but, uhm, not done right, you know, after this discussion.
53:28 Paul Niemer (Contractor): Yeah, once you're comfortable with it, yeah, yeah, I need to, you know, have to redo that, uhm, and, you know, certainly get with with Amy on that too.
53:38 Paul Niemer (Contractor): So we've got to download some of this, you know, with her, uhm, and then that's going to adjust, uh, that's going to be although not by very much, uhm, because it sounds like we'll be able to take that, uhm, safety supervisor that was 1, 2, 3, 4, 5, and say, OK, outside of this mapping, that person you
54:00 Paul Niemer (Contractor): know, lives in Mojave, and so then they can, uhm, so that kind of gets us, like I said, that gets us what we want, so I think we're going to get there, uhm, just, uhm, not the way we had envisioned it, but I 
54:15 Dave McLean: think it'll be all the same. It's a great little feature, Intellect's recent, like, added it in the last couple of years to it, but, uh, it's exactly this type of thing, like, hey, there are, there are requirements that have nothing to do with your job, it's everything to do with where you work.
54:28 Dave McLean: So, courses get mapped to work groups, courses get mapped to individuals, courses get mapped to locations, and the underlying guts of it all is what funnels out the list of things that any one person needs based on, hey, this was directly assigned to you, this was assigned to you because of a work group
54:45 Dave McLean: , or this was assigned to you because 
54:47 Paul Niemer (Contractor): you were part of that location. And then on what spreadsheet, and I'll have it in front of me, do we detail where that person works, their location?
54:57 Paul Niemer (Contractor): Ah, that's the Paylocity integration. Oh, OK, so it's already on there, so we've got that. But again, it's going to be 
55:03 Dave McLean: the establishment, right? So, it's another one of those, as long as the org structure works for you, which I think is the, that's where Matthew was sort of socializing with the rest of the broader team.
55:16 Dave McLean: Hey, maybe there's another way to do that. So, I think we get some more detail on that from Jeremiah next.
55:21 Dave McLean: OK, OK, 
55:23 Paul Niemer (Contractor): very good. Well, uhm, I'm done. Matthew, Whitney, you guys, any other questions? Not at the moment. OK, good. All right.
55:33 Paul Niemer (Contractor): Dave, sounds good. Thanks for putting this together. Thanks, guys. You're doing great 
55:39 Dave McLean: here, guys. Like, I know this is, I know it's tough, right? Hey, it's good to hear. You know, that's good to hear.
55:46 Dave McLean: Yeah, yeah, you're doing great with it. It's hard to move this stuff from an Excel, like, unstructured Excel data multiple times.
55:53 Dave McLean: Multiple systems, all kinds of different things where we can come up to one set of rules. So, it's, this is a, this is a typical track, and you guys are doing well with it.
56:01 Dave McLean: Ok, I appreciate it. Take care. 
56:03 Matthew Futter (Contractor): Establishment Logic email is in my draft. It's going to go out to you in about 60 seconds. Thank you, sir.
56:08 Matthew Futter (Contractor): Appreciate it. I'm it to you. copy the whole both teams so everybody knows you've gotten this again and everybody can see it.
56:13 Matthew Futter (Contractor): Love it. Thank you, sir. Appreciate it. Thank you, everybody.