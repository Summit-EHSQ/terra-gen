---
meeting_title: "Terra-Gen - Training Management - MARCOM Requirements Knowledge Transfer"
meeting_date: 2026-10-23
meeting_time: null
timezone: null
reported_time: "23 October 2026, 02:44pm; recording title contains 20261023_104418; timezone and authoritative time unconfirmed"
duration: "19m 0s"
participants:
  - Dave McLean
  - Khurram Agha
  - Edvert Colegio
  - Ethan Hung
source: "Meeting transcript provided by the user; original text preserved below"
---

Terra-Gen - Training Management - MARCOM Requirements Knowledge Transfer-20261023_104418-Meeting Recording
23 October 2026, 02:44pm
19m 0s

Dave McLean started transcription

Dave McLean   0:03
thing go and then you'll forgive me if I explain the whole thing again. Sorry, guys. Okay, step one, for context for the AI, we are discussing how it is to best distribute Marcom training course content, which are a series of several 100 SCORM files to our client, Terrigen.
The decision that we settled on is that we want to create a Marcom course catalog library object or catalog object in Intellex that will live in training management and would store all of the course metadata for Marcom's course catalog, which would include course names, unique identifiers, topics, categories.
language property, and so on. In addition, we would also have a place to upload the relevant SCORM zip file for each of those courses into that object. As a stretch goal, if this could also be versioned as well, so that if MarCom ever releases a new version of one of those courses, we can append it to the original course record. That would be great.
As well, once the course library is created, we then need to create a linkage from the training course version object in training management to the course catalog object. In this case, it would be to the course catalog object, not the versioned object, because we would want to make sure that we are selecting the...
the generic version of the course and building business logic to make sure that we're pulling in whatever the latest course content is from the version as we go. This would allow the user, when they're setting up a training course, when they go to the version of the course, they would say whether that...
that course has some sort of e-learning content? And if the answer is yes, they would have to choose whether or not that content is going to be manually uploaded to the course version or selected from the Marcom library. If they choose Marcom library, we then show a pick list or a dropdown of all of the...
Marcom courses from the main course object in Marcom Catalog Library that would allow them to select whatever is needed, and at point of selection, we would pull in whatever the latest version of that course is. If A Marcom course is ever revised, so a new version of that course is uploaded.
To the catalog, then we would need to make sure that we cascade that update through all courses that are associated to that Marcom course to use the new version of the record going forward. That way, whenever somebody gets assigned to the course and they take and they go to take the course, they'll see whatever the latest version of the Marcom.
Training content is at that point in time.
Pause there. Questions about the approach.

Khurram Agha   2:56
I think it nothing yet for me to see it.

Dave McLean   2:58
Okay. Separately from Terragen, Khurram, everything we're describing here, would this also in your mind be something useful for other clients generally, Air Tractor in particular, as a thing for like...

Khurram Agha   3:11
Yeah.

Dave McLean   3:11
Again, we still have to solve the what happens, how does how does anybody get notified that there are new Marcom courses to up version? But if this thing existed today, and if somebody could solve that question.

Khurram Agha   3:23
Mm.

Dave McLean   3:26
Do you think, do you think that'd be of interest for Air Tractor?

Khurram Agha   3:31
I would think so, especially because they also just lost their main training guy as well. So now they're, now it's just the main person who's going, I have no idea what to do here, but I think you might need a little bit of hand-holding with like, okay, if I get new courses, what do I do?

Dave McLean   3:33
Yeah.
Got it.

Khurram Agha   3:49
with, you know, with that, like, or how, I have no idea even where to start, he would say. So, yeah, might be that, yeah, might be helpful.

Dave McLean   3:55
Okay. Okay. Let's, you and I can keep that in our back pocket as a secondary thing if we can get an answer from Intellex on this. In an ideal world, hopelessly an unrealistic world, Intellex just pays us to manage this for everybody going forward. So if there's 500 clients that buy, not to say there will be, but 500 clients that buy Marcom.
Then, you know, we take a monthly or annual per client fee just for managing this content distribution layer across all those clients. That is unlikely to happen, right? Like, so fantastically small of a possibility. And yet, if we can, like, if we gotta build an object to store these things anyway for Terragen, because they don't know what they don't know at this point.
So if we got to build an object, then if we just spend a couple of extra hours building it in such a way that it could actually be reused for that type of purpose down the road, then I'm all for it at this point. Let's kill more than one bird with one stone, blah, blah, blah. Okay, so at the end of this sort of first leg of task, we have an object.
We have that tied into the course objects necessary within training management. It's potentially reusable. Step 2 would then be for us to load the entire course catalog up.
So, Khurram, that's probably going to be you and I to do that. We're going to use some AI-assisted tools to push that in. But the net result of that would be that the entirety of the Markon course catalog would then live in Terrigen site as a list of course records that could then be selected.
I think the way that we're going to go here for this one, Khurram, depending on your bandwidth, I would love for you to handle the build up for all of this end to end, because you're ultimately going to do that sort of integration of the data, one time integration. If you're really slammed for the next little bit, then we can have Edvert build, and then he turns it over to you for the data load with me.

Khurram Agha   5:52
Yeah, sounds good. Is there like any timeline on this? Like next week are we looking or the week after?

Dave McLean   5:58
Probably next week, I think, just to keep it moving, because we'll have to then get them to start filling out the necessary templates to map their courses to the SCORM content. They know which content, they know which courses they want to have SCORM content from Marcom associated with, but they've never actually seen the Marcom.
Content, so they're kind of stuck on that on that step.

Khurram Agha   6:21
Got it, got it.
And I just shared the OneDrive link with you, so you should have gotten it.

Dave McLean   6:31
Amazing. Yep, I see it.

Khurram Agha   6:31
I'll find your e-mail, yep.

Dave McLean   6:34
Okay, so if I can produce some documentation to build this stuff today.
would, for just the build out, I would expect we're probably talking like 4 hours of configure, again, give or take whatever it actually is, but just for the sake of estimation, probably about four hours to build out the objects needed to do it. If I can give you a field list and all that kind of stuff by end of day today, would you be able to slot that in for next week?

Khurram Agha   7:00
Yep, yep, for sure. I think, uh, yeah, Tuesday, Wednesday onwards is pretty, pretty good for me.

Dave McLean   7:01
Yeah, OK.
Okay, and then you and I can then spend 2 to 4 hours the following week working on the data load of all of the existing stuff as of whatever that latest version of the content is at that point in time. And we'll load that into the client's test environment so that they can work through. We'll build the functionality in dev, we'll load it all into test.
So, just to shorten the number of times that we have to load the data in, then from that point forward.
At that point forward, the model here is going to be like, Edvert, you're fundamentally going to be responsible for the actual loading of all the data once the client gets it to us. I think that this mapping between the course list that they're creating now and the Markcom catalog library would just be an extension of that. So you and I can work together
to then produce a template that we can send to the client once all this is built. So that they can basically select or like they can basically say, hey, this course that we wanted to add in, we also want this particular mark on course so that we know and you can load that in. But that won't be for a couple of weeks. The reason I say we should.
transfer that to Edvert is because he's already working through data migration, or he's already going to be assigned to data migration, so he's just working through some document control stuff now, but let's keep that together. The other piece of this is the questions about the Marcom content itself. They keep talking about adaptive learning.
Is that a term that you've heard in reference to Marcom at all?

Khurram Agha   8:37
Yeah, it's actually is part of the file name, Marcom Adaptive Learning Course Files. It's, I was trying to figure that out too. I was like, I don't know if it's just the way that it's being presented or if it's that it, like it actually has updates that come in, but.

Dave McLean   8:43
What the hell does that mean?

Khurram Agha   8:57
Donna couldn't answer it either. So I'm like, okay, let me, let me just table that for now. I can, I can bring it up again and see if we can figure it out.

Dave McLean   9:05
Okay, I think let's table that for Donna and possibly getting somebody from Marcom to answer that. When they say like personalized training format offered through the Marcom marketing website and the CourseWorks learning management system, that to me makes sense that it would be like the way the client has explained it is that Marcom adaptive learning is like

Khurram Agha   9:11
Mhm.

Dave McLean   9:29
If you've already taken this course before, you know, like it'll map your course pathway through a curriculum.
That has nothing to do with SCORM content. That has everything to do with a learning management system. That is logic that is scaffolding around the content. If you're going to move the content into intellects, there's nothing adaptive about it.

Khurram Agha   9:53
Mm.

Dave McLean   9:53
In my mind.

Khurram Agha   9:55
Yeah.

Dave McLean   9:55
I haven't had the heart to tell the client that yet because it's not my place to, but it seems that Intellects made that adaptive learning thing part of the pitch. And I don't actually think that anybody on their end understood it well enough to go from there. So again, I think the answer to this question is going to be just like the what happens with updates.
If Donna's the person you've been given, then part of that conversation is, Donna, is there somebody at Marcom that we can be talking to to get clear answers on what Marcom's expectations for this are? Because if there is something that was said amiss in the sales cycle, then somebody's going to have to correct it, and we need to do that sooner rather than later.

Khurram Agha   10:37
Yeah, I, the only thing I can think of as well was just like, when you open a course, the way it looks like, you know, it's rendering from like almost so it looks like Flash, right? Like, and then I don't know if that's what SCORM is, yeah, yeah, yeah.

Dave McLean   10:47
Yeah, that's, but like, that's what the SCORM like runner is, right? Like, so SCORM, like SCORM's a protocol for how you structure the payload, the content. A SCORM player is fundamentally like, it's something that's basically doing like an interactive slideshow.

Khurram Agha   11:07
Right.

Dave McLean   11:07
And I don't know if it's a Flash player specifically, but like, you're not wrong. Like, it's very much like that. It's very much static content in that regard. You're just clicking through the path and it might have some like loop path in it. So answer a bunch of questions and maybe it allows me to skip the next section if I did well enough. But like, you don't get to pick and choose that. That would all be coded into the SCORM package itself.

Khurram Agha   11:13
Like that.
Correct, yeah. That's what I've noticed.

Dave McLean   11:32
Okay, good times. Glad we're light.

Khurram Agha   11:34
Gee.

Dave McLean   11:37
OK, so next steps.
Kerm's going to reach out again to Donna, copying everybody here, so that we can get a hopefully a more robust conversation going next week about updates and about adaptive learning are the two key threads. In parallel to that, today I will shoot to have a spec put together that's based off of the Marcom.
metadata for the Marcom course catalog objects, including versioning. If I can get that pulled together, I will send that over to you, Khurram, so that you can plan to work on that and we'll create the necessary tasks and forecasts to be able to do that. Next week would be about building it. The following week would be about you and I going and loading that in.
API driven, Ethan Edvert will absolutely include you in those meetings just so you can start to see how to do some of that stuff. Khurram for context, I'm actually having a lot of success lately with like simple data migrations, just feeding the data into a local.
like a local ChatGPT model through our team one, which is protected from others. I wouldn't do this with employee data, but like course data, anything that doesn't have personal information, and giving it the endpoints, giving it the object names for the Intellect API and a temporary API key, go push it through the API.

Khurram Agha   12:57
What's she doing?
Wow, okay. I did you...

Dave McLean   13:00
I did, I did one this week. I loaded 74 objects, 74 library objects with pick list data in like 8 minutes.

Khurram Agha   13:06
Oh, wow.
So out of curiosity, does that use a lot of tokens? Because as you and I found when I was trying to do this, it was for me, it was using a lot of tokens. It's not using a lot of tokens.

Dave McLean   13:17
No.
No, it's, you know what it was, the addition that you and I are using in order to manage the flow of token usage. It has a workspace level 5 hour limit. So in any given 5 hours, you can't use much. So like in the grand scheme of things, is a task like that really heavy?

Khurram Agha   13:31
Okay.

Dave McLean   13:38
No, it is heavier than just asking it to go write documents and read documents for you, because anytime it has to go out and run some sort of external processing, like running PowerShell scripts or Python scripts to send API calls, for example, that has a compute cost to it that is a little higher.
So, you'll burn through your five-hour window a little bit faster.
Especially if you...
have it like if you're in authoring mode. So if you are, if you like have to teach it how to use that one API method. And so before you actually load the data in, let's say you have it write the script 8 times and test it every time and get different variations of it and everything. Well, of course, it's going to take a while.
The skill that I've built that's a draft right now, basically, what it does is you tell it the object you want to load the data to. You give it the data.
And the first step of it is that it goes and looks up that object's object record to go figure out the data dictionary in Intellects for that object. So go pull all the fields directly out of Intellects so that it knows exactly what all those fields are called. That way I don't have to build the payload. It builds the payload for me.

Khurram Agha   14:41
Mm.

Dave McLean   14:55
and simply asks me to confirm that it has understood the mapping of what I gave it in Excel to what it parsed from the data model of that object. Once you confirm, off it goes. And it maintains a list in its memory of what IDs it returns so that if I go, oh ****, you know what, I actually need to modify these seven. So I've updated the Excel file.
can you go push the updates, it can then skim through looking for anything that doesn't match and push a patch update to go through separately.

Khurram Agha   15:26
That's amazing. Actually, especially for training management. There's that one where you have the unique records that get generated. Oh, it's so good for that. Yeah. Oh my goodness. I spent hours on that report. I remember. Yeah, yeah.

Dave McLean   15:32
You got it.
You got it, right?
So again, some more to come that we can do with that. It's not perfect. I'm giving the sales pitch right now, which is always the fluffy one. Like it, the major flaw with it right now is that like you have to, have to, have to, have to, have to.
deactivate the API key that you use after you're finished this, because it, like, ChatGPT is storing that API key in memory. And so like, you potentially, like, let's say I were to like let 25 people go and do this. You would have production admin level API keys.
Living in memory with OpenAI for all those sites.

Khurram Agha   16:23
Oh wow, okay.

Dave McLean   16:25
Right, potential for security breach is massive. Now, there's different ways to do this, but the level of sophistication needed to then incorporate, okay, go use this key from this key locker. That's a different animal.
that I haven't solved yet. So we'll get there. But at least in this case, we can use the quick and dirty one, and then we'll just keep ourselves honest to make sure we disable our API key.

Khurram Agha   16:46
Gotcha, yeah, yeah, okay, makes sense.

Dave McLean   16:47
Okay, cool. Awesome. So that takes us ahead. So next week is build, following week is data load into the catalog, at which point, Edvert, we should have all the data that we need in the test environment for you and I to go together and put together an Excel spreadsheet that allows them to map, or maybe even an addendum to the spreadsheet they're already working on, that allows them to map the courses that they're.
they want us to create in training management to the Marcom course that needs to exist. And assuming that Khurram did everything he needs to do on the build side, when they make that connection, it should pull in the course SCORM package onto the course version object. If we ever have to push a new version of the Marcom package in, then that should automatically update the.
the other piece as well, the training course as well.
And then hopefully somewhere in that window we get an answer on adaptive learning and course version dissemination from Intellects or Markham.

Edvert Colegio   17:45
Yeah, I had a, I was very curious what adaptive learning was, but I searched it on their website. Apparently it's like you go through the course and based on your answers, it skips some content if you've already like mastered it, but they didn't give much after that.

Dave McLean   18:00
So if the first quiz you get 10 out of 10, you don't have to do the second quiz kind of thing.

Edvert Colegio   18:04
I guess so, yeah, kind of. Or it's like in that one, in that one quiz, you skip questions, but not too sure.

Dave McLean   18:07
Yeah.
OK, yeah.
They made it such a central piece of the marketing side of it that the client wants to see the feature.
So without knowing specifically how to activate the feature or how to follow that path, it's very, very tricky.

Edvert Colegio   18:21
Yeah.
Yeah.

Dave McLean   18:38
Okay, cool. Awesome. Khurram, I'll send you a spec later today, assuming I can get to it. If I can't by 3:00, I will let you know and we'll re-baseline the plan here, okay?

Khurram Agha   18:40
Right.
Sounds good. Yeah, I'll just drafting the e-mail to Donna and then I'll, yeah, they're all on there.

Dave McLean   18:54
Awesome. Thanks very much, guys. Appreciate it.

Khurram Agha   18:55
All right, thank you.

Dave McLean   18:57
Cheers, guys. Bye.

Edvert Colegio   18:57
Bye, everyone. See you.

Khurram Agha   18:58
Ly.

Ethan Hung   18:58
Thank you, bye.

Dave McLean stopped transcription
