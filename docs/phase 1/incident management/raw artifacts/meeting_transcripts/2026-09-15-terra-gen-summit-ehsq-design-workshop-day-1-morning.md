---
meeting_title: "Terra-Gen | Summit EHSQ | Design Workshop Day 1 - Morning"
meeting_date: 2026-09-15
start_time: "09:00"
timezone: PST
participants:
  - Dave McLean
  - Matthew Futter
  - Mike Tran
  - Vanessa Newmarker
  - Jeremiah Soto
  - "Ethan (surname not captured)"
  - "Edward (surname not captured)"
  - "Austin (surname not captured)"
  - "Sam (surname not captured)"
participant_note: "The source transcript attributes all dialogue to Dave McLean; this list contains people explicitly identified or addressed during the session."
---

0:00:00 Dave McLean: there you go. Okay, can Mike hear us? Mike, can you hear me okay? Oh, he's invited, I'm sorry.
0:00:25 Dave McLean: Good stuff. We don't have any repeating audio here. That's good. Make sure we're on the right microphone array on somewhere.
0:00:30 Dave McLean: Perfect. Okay, so everybody in the meeting that wants to be in the meeting, so we can just test audio. I'm in the meeting.
0:00:42 Dave McLean: Everybody good? Maybe Matthew, you're still working? I'm using the Wi-Fi right now. Thanks, guys. Bye-bye. So, we have, I'll just start with a few things.
0:00:53 Dave McLean: We have this room 9 to 430. I understand part stop at 430. There is a farmer's market just out here today.
0:01:01 Dave McLean: My son tells me the pupusas that are by the library, and the pupusas are the best, but they take a long time, and you have to stand in the sun while you wait.
0:01:11 Dave McLean: So, fair warning. And then the, uhm, there's another thing. Tamales are quicker. They're already made. They just need to be heated up, and those are somewhere by the restaurants, and those are a quicker choice, and good.
0:01:27 Dave McLean: So, those are your advices if you want to grab a farmer's market lunch. There's also, we tried yesterday, we tried HealthNut, which is straight down here, like, two minutes.
0:01:36 Dave McLean: See you. Uh, very big salads and, like, protein options and stuff like that. So, if you're not into the Mexican side of things, you can try that.
0:01:43 Dave McLean: Um, We've pulled together some snacks and then in terms of coffee. You got, did you get haycobs?
0:01:54 Dave McLean: Yes. Okay, great. So, if anybody needs coffee at any time, just feel free. Hopefully, you guys saw the restrooms. They're just back here.
0:02:03 Dave McLean: There's the water filling station back here. We're not aware of any emergency drills. Are we? No. Thank you. Okay. I know the one exit through Sears.
0:02:13 Dave McLean: We know of another exit. Anybody check out the exit? Okay. Is it AI or A1? A1. That's not correct. That's another note what's on that sheet.
0:02:25 Dave McLean: It's not correct. It's just slightly different with, like, attention to detail, opportunity for Spectrum is set on A-1. Good catch, Vanessa, as always.
0:02:39 Dave McLean: Back corner of the other room. Back corner, this way, left, out, out, and to the left, the sign on the left.
0:02:43 Dave McLean: And I guess we could just meet up in front of the MetLocks parking garage, which is right across the street, if something happens.
0:02:55 Dave McLean: Any other kind of just helpful information? On high level note, oh, we have dinner planned for right, like, around 5 o'clock, Matthew, is that right?
0:03:03 Dave McLean: Yes, exactly. Okay, at Rock and Fish, that's just, you know, go down to the road that the pier is on and just walk down to the left.
0:03:10 Dave McLean: It's like, yeah, it's pretty quick. Uhm, so we're starting right at 5? That's right. Okay, right. That probably kicks off today a little bit.
0:03:24 Dave McLean: Matthew, is there anything we're forgetting? I don't think so. Right. Perfect. Can you guys see my screen on the, on the projector?
0:03:38 Dave McLean: It's terrific. Yes. Awesome. Can you make it a little bigger? Oh, oh, oh, oh. Too far, too far. Everybody got internet?
0:03:54 Dave McLean: Everything good? Little trick on the internet. All right, terrific. Thank you guys very much for coming together, bringing us all together like this.
0:04:07 Dave McLean: My name is Dave McLean. I think we've met briefly on virtual calls, although I think you guys will work with Matthew, my co-founder and co-managing partner.
0:04:16 Dave McLean: I'm the technical half of the two students in this case, so I work with our technical consulting team and the other folks back in Toronto to implement the stuff that Matt dreams up.
0:04:29 Dave McLean: So, depending on how things are going when he gets here tomorrow, we'll have to have words, but no, I think things will look great in this case.
0:04:34 Dave McLean: A little bit of background on me, I've been in, working in the intellects ecosystem for 17 years now. Six of them as an intellects employee and then everything since then, since, or as a faculty member.
0:04:48 Dave McLean: Founding member of Summit. My background at intellects, I started as a training specialist, actually moved into the into the consulting world and the last couple of years that I was there.
0:04:58 Dave McLean: I was a solution architect with a specific focus on clients at risk, really a sort of nice way of saying sounding nicer way of saying clients that were about to tell us to take a hike because they weren't necessarily getting the value out of the system.
0:05:12 Dave McLean: The reason why I talk about that sort of blemish on the on the sort of intellects roadmap is because it means I've seen this stuff when people do things the wrong way or when people do things in a way that isn't right.
0:05:21 Dave McLean: That isn't necessarily consistent with their long-term objectives. Sometimes there's tradeoffs that need to be made early on in order to make sure that we can, whether it's go live or do things a certain way.
0:05:32 Dave McLean: And so I raise all of this as a commitment to you guys through this workshop. You'll hear me qualify a lot.
0:05:38 Dave McLean: A lot of statements. Yes, we can do this, but maybe we don't want to, or maybe there's a different way to do it.
0:05:43 Dave McLean: That's the objective here, is to be able to explore all options. Sometimes those will come into conflicts with either the way that we've done things, or in some cases, come into conflict with what we'd hoped we would get from the system.
0:05:54 Dave McLean: That's okay. The journey is not a straight line here. The goal is, though, to try to make sure that we realize the value of the investment that you guys have made in Intellects and in Summit as well.
0:06:06 Dave McLean: For today's session, we're going to focus on plumbing for this morning. The location structure, which I think Ethan delivered a session a few weeks ago to get some basic terminology and concepts down.
0:06:17 Dave McLean: That is really a backbone concept in an Intellects implementation. It's one of the least sexy concepts that you can have in Intellects, but it really forms the foundation.
0:06:26 Dave McLean: It's the basics of all of the data reporting, much of the security model that you're going to see threaded throughout the entire product, whether it's incidents, training management, document control inspections, whatever the case is, and each of those will use it differently.
0:06:39 Dave McLean: That, this morning's session, you might go really quickly. There are, there are versions of this session that we walk in, we reconfirm the concept, everybody goes, yep, this is exactly how we need it to be, we model it on the whiteboard, we scrutinize a few checks, and then we come over to Jeremiah to
0:06:54 Dave McLean: say, how reasonable is it that we can feed our integration solutions in using this data as the, uh, as the basic structure for what we're going to do, and everything checks out, and a four-hour segment of the day is gone in an hour.
0:07:06 Dave McLean: There are other times when this first four hours will become the beginning of a lengthy conversation that will take weeks, so, no expectations.
0:07:14 Dave McLean: At this point, by lunch, the goal is understanding. That is the, that is where we're trying to get to, is to understand the magnitude of, of which end of that spectrum we're going to be on.
0:07:23 Dave McLean: Uh, we will then move on for this afternoon into training management and training competency. For this phase of the project, that competency piece is looking to be the one that represents the, the single biggest, uhm, amount of technical work that needs to be done.
0:07:36 Dave McLean: Also, the single biggest amount of technical risk in the project. It's something where we're building something that doesn't exist yet.
0:07:42 Dave McLean: So, uhm, we will talk about things in a business Thank you. Requirement and functional requirement sense, which is to say, what do you need it to do from a business point of view?
0:07:52 Dave McLean: What goals are you trying to get? What risks are you trying to manage? We'll talk about it from a functional perspective.
0:07:57 Dave McLean: How can it work? What if it did this? What if it did that? And then there might be a few windows where I'll have a session.
0:08:02 Dave McLean: We'll bit of slide bar with Ethan and Edward to model out how we might actually do some of those things to make sure that what we're talking about is achievable within product limitations, budget, scope, schedule, all sorts of those things.
0:08:15 Dave McLean: Again, commitment for you guys is that if we run aground of any of those, particularly in product limitations, we raise them early so that we can have a meaningful conversation about whether we want to push beyond those, or whether we want to use those as hard fabrics and limits.
0:08:27 Dave McLean: You guys are the ones in the drivers sense. Questions? Awesome, OK. OK, let me just pull open. So in terms of cords, how are we doing with cord management today?
0:09:47 Dave McLean: Yeah, I have a, I have actually, Vanessa and I commute, ah, team together, and I left the ones that I brought with me in, but I have, I have two cords at the morning.
0:09:57 Dave McLean: Oh, no, it's okay. Uh, does anybody have cords right now that look like trip hazards? Make sure we're all. Yeah, we have plenty of the blue strip tape so that we can secure it down for me.
0:10:11 Dave McLean: Uh, floors would help. They're going to be at the first break. Let's make sure we're good for everybody who needs to.
0:10:25 Dave McLean: Let's share the right working screen here. Share that one.
0:10:39 Dave McLean: Start sharing. All right. Can you guys see my screen? Perfect. Awesome, so we're going to talk about this just to reinforce first some concepts that Ethan would have introduced.
0:10:58 Dave McLean: Make sure everything's top of mind. This session will, some of the visuals are my best guess at what some of this looks like for TerraGen as opposed to any sort of confirmed.
0:11:09 Dave McLean: So if you're looking at something and go, Dave, you're way out in left field here, don't worry, that's, that was me taking a, what I thought was an educated guess, and I'm here for you guys to educate me properly on it.
0:11:20 Dave McLean: Location structure and business hierarchy, two different concepts though, though generally linked in Intellects, really refers to a business as a board structure.
0:11:28 Dave McLean: The reason why it matters from an Intellects point of view is that first and foremost, it represents the primary structure by which data is reported and aggregated in Intellects, whether that is show me incidents by organizational hierarchy, different levels, different locations, whatever you Good.
0:11:46 Dave McLean: Whatever sort of concept you end up using, whether that's inspection scores, whether it's audit scores, documents, whatever the case may be, pretty much every record in Intellects is related to the location structure from a reporting perspective so that you can use it as one of those primary metrics.
0:12:02 Dave McLean: And then there's the master data model reporting dimensions for slicing and dicing it up. This goes along with employees, the employee hierarchy of people reporting to people all the way through.
0:12:12 Dave McLean: This goes through jurisdictions and a few other different concepts that fill that master data role. On reporting side, the secondary, the second primary usage of the location structure is one of security.
0:12:26 Dave McLean: Almost all records and intellects that relate to the location structure practice a behavior called roll-up, which means very broadly that a user who logs into the system at a high location can see down the tree, and a user that logs in at a lower location can see their location below but not above, right
0:12:45 Dave McLean: ? This way, you can create situations where, you know, an incident, for example, or an inspection that was created at a specific location.
0:12:52 Dave McLean: Project, or job site, or department, or whatever that concept looks like for you is visible broadly to the leadership in the organization, while still secured from parallel locations.
0:13:02 Dave McLean: People at other sites, other departments, other whatever, cannot see that data, and while that You Is generally the way things follow.
0:13:10 Dave McLean: In reality, there's always exceptions to that, and exceptions are where the complexity comes into play. Many businesses are not uni-dimensional in that case.
0:13:19 Dave McLean: They're a matrix organization. They might have physical footprints, locations that roll up and into regions, which roll up into countries, and so on and so on.
0:13:28 Dave McLean: But they might also have a business hierarchy as well. We have, you know, broad divisions of the company, product lines.
0:13:33 Dave McLean: We have whatever the case may be, service offerings that cuts across locations. Uhm, so, uh, in that sense, we have a couple of different tools in the product that we can work with to achieve that result.
0:13:46 Dave McLean: And our goal today is to try to understand what this looks like for Terrigen, uhm, and map that against some of the goals that you have, and ideally some of the challenges that you've historically faced.
0:13:55 Dave McLean: with, with reporting and securing records. Questions so far? Cool. Uhm, so I went into some of this already in the intro here, but you know, to kind terms of why this matters as it applies to some of what we're talking about today, uhm, the location structure is certainly the reporting side of it.
0:14:14 Dave McLean: It connects into inspections, uhm, typically we are, we are scheduling or creating inspections at a certain location, uhm, from a, from a task ownership point of view.
0:14:22 Dave McLean: Every task lives at a given location. Let's do it. It's generally inherited from the record, uh, that, that it lives in.
0:14:28 Dave McLean: Uhm, documents, one of the few exceptions to the system has, uh, has a bit of a different rule. Documents certainly are location bound, but unlike most other parts of the system, documents not only roll up, they also trickle down.
0:14:40 Dave McLean: So if I have corporate-wide documents or documents that are applicable for the entire organization, I can put them up in a top-level location.
0:14:47 Dave McLean: Everybody who logs into the system below will be able to see those records. Uhm, to a certain extent, same goes for training, and that is to say, course creation.
0:14:55 Dave McLean: When I go ahead and create standardized courses that apply for large regions, or the entire company, or whatever kind of meta-level of the organization, those courses can live at a higher level.
0:15:07 Dave McLean: They are available to people, which is to say, depending on your configuration, they are either available for them to sign up for, they're available for them to be assigned to, whatever that model looks like for you, that is available all the way through the records themselves, they'll live with the 
0:15:21 Dave McLean: person at the location they belong to. Could we, for example, at, ah, at C&C, set up a training that just those people wanted, that, the way you're describing it, it sounds like we could absolutely tie it to that location, and, yep, yep, right.
0:15:35 Dave McLean: Some companies will go so far as they'll have the base version of a course, location-specific versions as well. So if, you know, Working From Heights has a version of it that's specifically this rig or that rig or whatever for an oil drilling firm, they might do something like that as well.
0:15:53 Dave McLean: The last one, and where this is going to intersect with Jeremiah the most for when we talk tomorrow about the integrations, employees live at locations.
0:16:00 Dave McLean: And they actually have 2 different location properties that we have to be mindful of when we're talking employees. Every employee has something called a home location.
0:16:08 Dave McLean: Where do they work? Where do they actually belong in the work structure? They also have something called a log in location, which is what can they see in the system?
0:16:16 Dave McLean: And that's a, for most users, it's one in the same, but for, dare I say, everybody in this room, that's what's going to control your visibility in the system.
0:16:26 Dave McLean: And it's an intellect specific property. It's not something that's generally going to live in an HR system. it. It's even like Entra or any sort of identity provider.
0:16:36 Dave McLean: It's so intellect specific that usually you're going to manage that administratively in intellects, but we still want to consider it either way.
0:16:47 Dave McLean: For those businesses that have. Two different structures, or exist as a matrix in some capacity. Those concepts can live side by side, and the question often becomes, well, which version of the structure goes where?
0:17:02 Dave McLean: Right, when would I use a certain version of it in the location? So, location structure versus the other one, which is called the business hierarchy.
0:17:08 Dave McLean: And the one kind of guiding principle that we want to keep in mind with that is, because we're going to be implementing incident management down the road, we'll have OSHA reporting requirements.
0:17:19 Dave McLean: And incident management has some hard-coded behavior that is changeable if we really need to, but ideally we don't change it, for generating OSHA 300, 300A, CalOSHA logs against the location structure.
0:17:32 Dave McLean: Because OSHA requires those to resolve down to the level of the establishment, which for most businesses corresponds to a physical address, um, ideally, any sort of physical geographic version of a hierarchy lives in the location structure.
0:17:48 Dave McLean: That's what why they use the term location versus business hierarchy, which is more, uh, divisional based or product one or something like that.
0:17:55 Dave McLean: There are exceptions. We've come across either way. There are times that we'll have to flip the switch on that. Um, that is not the goal.
0:18:01 Dave McLean: The goal is to try to work within it, within the model that it was designed to work. So, as we talk this through, the starting point for the conversation is really going to be geographically, how are you guys laid out?
0:18:15 Dave McLean: And as I understand it, at the base level, it resolves to job sites where a physical plant is laid as being built, or as an operation, or something like that, and then rolls up into regions from there.
0:18:26 Dave McLean: So, again, here for an education on that. That's me, that's me trying to assess it from a website, in that regard.
0:18:33 Dave McLean: Yeah, are we talking about this now, or are we? We'll, we'll intro first, give me give me two more minutes, and then we'll get right into it.
0:18:41 Dave McLean: So, a simple version of that hierarchy, and again, this is meant to be generic in this regard, typically starts with a top-level location, breaks down into some fashion of regions, and depending on the breadth of that organization, it might be regions that are really sort of continent-driven.
0:18:58 Dave McLean: It could also be regions within, for example, the United States, where we're chopping it up into the Midwest, Pacific, Northeast, whatever the case, or Pacific Northwest, and whatever the case is.
0:19:07 Dave McLean: Generally, there's that breaks down to the site or facility level. And for a lot of businesses, that's where it stops.
0:19:13 Dave McLean: They don't go any further than that. They don't try to get into, um, operational units, areas, departments, whatever the case is.
0:19:20 Dave McLean: The only time that ever happens with consistency is large manufacturing operations. If you've got a plant that's got 5,000 users in it, you probably want to break it down below that individual plant level.
0:19:31 Dave McLean: That is with consistency. It's not to say we won't go there. We certainly can look to break it down. But at minimum, it's going to typically resolve down to a site or a facility level.
0:19:41 Dave McLean: Exceptions to this would be businesses where the site is highly mobile. So, for example, if you're an oil field services company, your employees don't work at a specific site.
0:19:56 Dave McLean: They move around a state constantly. They could be giving us a certain region within within Louisiana at one point. A week later, they might cross the state line into Texas or wherever it is.
0:20:07 Dave McLean: And they're working in different areas. In that case, OSHA makes allowances for businesses that operate this way. And the concept of the established.
0:20:14 Dave McLean: Establishment changes a little bit, but as a general rule, uhm, that that tends to apply more for services based firms where people are out in the field constantly and rarely in a fixed address or fixed asset.
0:20:26 Dave McLean: So again, that might be the case. That might be the case for some of your employees as well. Questions. Yeah, for sure.
0:20:39 Dave McLean: From what you've seen in Terrigen so far would be, you know, most of our people are based at a site, even if they do move around a little bit.
0:20:46 Dave McLean: Do we fall into the first category that you were saying most people usually? Okay, usually. Do you foresee us falling into the first category?
0:20:53 Dave McLean: Usually. And the first question I'm going to ask is when you generate an OSHA log today, how do you structure that OSHA log?
0:21:01 Dave McLean: That generally is going to Give us that base or most atomic level of what that looks like and then build up from there.
0:21:07 Dave McLean: So in that scenario, I suspect the answer is yes, they move around, but there is a physical site that they're associated with.
0:21:17 Dave McLean: Last slide for this segment of it right now, when we're talking about this this morning, what good looks like for this conversation is ideally decisions that are prioritizing stability of the decisions that we make over detail, which is to say, we want to understand how and what the levels are, as opposed
0:21:36 Dave McLean: to what is every individual specific location. We can get that in an Excel file. We can get that in a data drop later on in the workshop.
0:21:43 Dave McLean: What we care about right now is making sure that we litmus test, um, the basic structural rules of the work structure and whether or not we need to be running two different hierarchies at the same time.
0:21:53 Dave McLean: Um, we generally want to strive for the minimum useful depth. So, I'll give an example of one, another client I'm working with right now.
0:22:02 Dave McLean: It's a manufacturing plant. They go down to the level of, um, what I'll call departments in this concept. Um, and they make cars.
0:22:11 Dave McLean: Um, so you get to the paint shop, you get down to multiple paint lines. But even then, in their ERP system, they can get down to specific stations on the line.
0:22:20 Dave McLean: And what they're struggling with is is that really a location, as we understand it in the org structure? Or, you know, somebody today could be at this station, tomorrow could be at that station.
0:22:30 Dave McLean: Since we can't pinpoint somebody to a specific one, it doesn't really make sense to go that level. And there's competing arguments for it, but this is that minimum usefulness.
0:22:38 Dave McLean: It's really challenging that you actually need to go that far, because it changes the nature of the org structure from several hundred locations to several thousand locations.
0:22:48 Dave McLean: More complexity usually means more overhead. Ideally, each level across the board should for the organization also, also aligns with a single concept or a single level, to reuse the word again.
0:23:02 Dave McLean: So if you've got a regional level in the business, every part of the org structure, the region is on the same numeric level within that whole.
0:23:11 Dave McLean: What we don't want to have is this part of the business goes from top level to region to site. This part of the business goes from top level to something else to something else to region to site.
0:23:22 Dave McLean: That makes reporting very difficult. It's it's really challenging for you to ever be able to put together a business A single report, show me all of my incident rates by region.
0:23:31 Dave McLean: If they don't, if they don't correspond to the same concept, it's not impossible. It's not impossible, but you don't want to make it difficult by design if you can avoid it.
0:23:39 Dave McLean: And that can go to the to the extent that it is possible. So of our outcome cases will create fake versions of levels, just to make sure that we have that structural alignment if we need to.
0:23:48 Dave McLean: Because we're doing integrations, we also want to try to challenge for what are the consistent identifiers of these, especially when we get down to those most atomic levels.
0:23:58 Dave McLean: And we don't need to know what they actually are, but we need to make sure that do we have some sort of a unique ID for that site, or for that region, or for that thing that'll work on the EHR site?
0:24:08 Dave McLean: And that's a very detailed question that we might not be able to answer in today's session, or even tomorrow's session, but identifying.
0:24:14 Dave McLean: that that is a need that we have, so that Jeremiah can take that one away and work with the DBAs that run that data, becomes very important.
0:24:22 Dave McLean: Otherwise, it becomes almost impossible for an integration to put people in that place. Uhm, the last question. So two are sort of secondary to the first four.
0:24:34 Dave McLean: Ideally, we want clear ownership in this because we're not doing a location structure integration here, at least not currently. We want to understand who it is within Terragen that will be responsible for that.
0:24:46 Dave McLean: Typically it's an admin feature, but. Some companies have multiple admins, different areas of the system, different focus areas of the system.
0:24:53 Dave McLean: So we want to make sure that whatever decisions we come up with that impact the first four items, is this something that we can say that a human being is going to be able to keep up to date for us.
0:25:04 Dave McLean: And it needs to be maintainable. It needs to be scaled in that regard. And last, if there's exceptions, the gotchas, the, hey, everything really works nicely for 95% of the organization, but we have this one joint venture, or we have this one partnership with another firm, or.
0:25:19 Dave McLean: Or a skunkworks division of the organization that sort of operates differently. We want to understand the impact of that, and we want to understand, frankly, do we care from that point of view?
0:25:31 Dave McLean: At the end of the day, you know, the 99 to 1% rule. It's going to apply here. And so if we're going to come into situations where a 1% of the business doesn't really fit the mold, this is how we're going to handle it.
0:25:42 Dave McLean: Even if that's not the most accurate, it's still the 1%. We just need to be able to say that that's the case.
0:25:46 Dave McLean: We need to know that. So that should it ever cause problems down the road, or should anybody ever ask for that?
0:25:51 Dave McLean: We have a really clear answer for why we've accepted that compromise. Cool. OK. Who would like to be the primary speaker for this one?
0:26:06 Dave McLean: As you guys take me to school on? What Terrogen's org structure looks like? I can start at the top. Please.
0:26:15 Dave McLean: OK, so it's at the. So, I mean, Terrogen is a development company, probably, you know, it's. Heart and Soul is developing assets, so it has a very large chief marketing officer organization of people who are mostly, let's say, remote.
0:26:36 Dave McLean: Not all, but mostly, and then they have 1 office in San Diego that they follow up. Their development office, there is no operations of that office.
0:26:44 Dave McLean: Uhm, so you typically see finance, marketing, like, account manager. So finance is separate under the CFO.
0:26:56 Dave McLean: So then the CFO has an office in New York. A lot of people work in that New York office, and those sometimes are referred to as R2 corporate, like, main offices.
0:27:08 Dave McLean: Uhm, so there's. It was a large finance team and accountants, and, uh, that's what's called that sort of people. So that's the CFO and the chief marketing officer, and then.
0:27:24 Dave McLean: Moving along, we have our COO. The COO is, I would say, who's got all the operations and including some oversight of construction of those development projects.
0:27:36 Dave McLean: So, they're going to have a whole slew of locations and they're going to have some change over time as they move things are coming on into construction.
0:27:48 Dave McLean: But there's my team, which is EHS, Energy Markets Compliance, Communications, you know, I have some stuff that I would say the majority of my team are working remote.
0:28:00 Dave McLean: But some of them, like, a portion of the team is tagged to certain sites to support them from a, let's say, environmental compliance or health and safety standpoint, or maybe, like, 10 out of the 20-something people.
0:28:13 Dave McLean: I guess my team also has a small operation of a couple of people, three people, doing ops in the public.
0:28:25 Dave McLean: So, Atlassian, we have HR, small group. Sorry to interrupt. Just, again, I will say my policy is that, you know, my policy mostly for myself.
0:28:33 Dave McLean: There's no stupid questions, therefore I get to ask stupid questions without labeling them as such. But, uh, you know, just to make sure I get the terminology right.
0:28:42 Dave McLean: When you say, you know, you guys are primarily a development firm, so what I hear with that statement is, you know, if, uh, your client is looking to build, uh, a new solar generating station, or wind farm, or whatever the case is, they'll contract you guys to handle the site selection, contractor selection
0:29:02 Dave McLean: , contractor management. And at the end of that project, you hand over a new wind farm, essentially, to them to operate.
0:29:09 Dave McLean: No. No. Okay. Okay. No, um, and it's less client-led, like, it's more development-led. Okay. So we've, uh, identified areas where we could build a project, secure the land, take the risk, permit the project, and then we take off, and then we get off-takers, and then we finance the project.
0:29:28 Dave McLean: So a lot of money goes out early. Got it. We're getting the whole concept down. We're reducing the risk that the project can be actually built.
0:29:36 Dave McLean: Yeah. Then we'll take financing it, and then we build it. And as it's being built, it's handed off to operations for oversight, and we have, like, what you would call an EPC contractor.
0:29:46 Dave McLean: We call it EOP. Yeah. We have a contractor that builds it, and then we turn it over to operations. Historically, Terrigen has done sold those and not operated them.
0:29:56 Dave McLean: So operations didn't get as much attention historically because they never really wanted to invest because they were flipping things out of the portfolio.
0:30:04 Dave McLean: Now we're a build and hold, so now operations has to kind of cover that. That's part of the reason for this investment.
0:30:10 Dave McLean: Upgrade our skills, same way with SoftBranch. We've got to have, like, operations who can perform on more than paper. Got it.
0:30:17 Dave McLean: Okay, so in that sense, you guys increasingly into the future, at least that part of the organization will start looking more like software.
0:30:24 Dave McLean: Like a utilities company, but in terms of the rules, you have to follow the structure of it versus. Yes, but we're not a traditional utility.
0:30:33 Dave McLean: Sure. We don't have the load that we need to serve. Okay. So we, we are what you would call. So, um, an independent power producer in the industry, basically, because we, but we also develop, so we develop and then now build and operate.
0:30:53 Dave McLean: Sure. So the build part, right? So development is. Is in-house, the build part, we use that APC contractor to operate in-house.
0:31:02 Dave McLean: Got it. And then our operations kind of is supported by various contractors for certain functions, but for the most part, we have site personnel that are out in the field.
0:31:13 Dave McLean: Do the maintenance, we have operators that run the plants. So, uhm, in that regard, we are sort of like utility, but we're not a true utility in that sense.
0:31:25 Dave McLean: Okay, commercially you sell into the grid, but you're not. Yeah, and that's who the operators are. Okay, but because we develop and build the projects, that is where we also have those investors, right?
0:31:39 Dave McLean: For the financing and then once it's built, we have investors that invest in those projects to get some benefit, even though we still maintain the responsibility for operations.
0:31:53 Dave McLean: So we do have reporting obligations for that because we are the operators. Depending on the setup of the agreements, it may be intelligence name, or it may be on behalf of some other party.
0:32:11 Dave McLean: It just kind of depends, but majority of our reporting obligations are. For terrorism because we hold the permits for things on the environmental side, which is like witnessing once it goes in operations and that the other half working on its construction.
0:32:28 Dave McLean: We have environmental permitting, so and then on the energy market. So, um, typically it's just interrogants name because operators, so we're interacting with, like, the market operators or the federal agencies.
0:32:45 Dave McLean: Okay, so what I hear from that is that the, the activities, the risks, the. The type of data, the nature of the data that's going to go into the system to be quite different for.
0:32:57 Dave McLean: The construction and development side of the business versus the operations side of the business, like, is that reporting obligations? Even if you get down to the level of.
0:33:06 Dave McLean: Like, training, right? The training side of it, it'd be interesting to see how that intersects with the development side of the business, but like, I hear, like, okay, training, the training app is primarily going to be focused on making sure that our operations team has met their training.
0:33:22 Dave McLean: Okay, sure. Kind of include the development side. Yeah. Because during the construction phase, it's contractors, so we don't train our contractors.
0:33:36 Dave McLean: That's why. That's their responsibility. Yeah. And they just have to meet certain obligations, which we use the ISM to start managing that intake to make sure they meet our requirements.
0:33:46 Dave McLean: But yeah, so the only gap in the training piece is that build part or the construction part. So the development and the operations are where we want to make sure they're covered.
0:33:59 Dave McLean: Okay. Okay. Rounding out here. I've got it on the screen. So we've got a chief commercial officer. They basically are like the business managers of the business.
0:34:08 Dave McLean: They're called asset managers at Territory. And most of them are remote. Then we've got the project management team. So they make our really large purchases of wind turbines and solar panels, transformers.
0:34:25 Dave McLean: We don't delegate. We delegate that to an EPC. That's why we call it a balance of plan EOP. So that team, um, that team negotiates some of our larger agreements.
0:34:35 Dave McLean: Plus they, uh, on the construction projects, they do, like, the high level project management. So, like. Making sure we're hitting our timelines, making sure we're seeing a budget, that sort of thing.
0:34:45 Dave McLean: Got it. So they're not, um, the construction oversight that's in the CLO organization. And then a small team in HR, I think I said already, and then a small team in general counsel.
0:34:58 Dave McLean: And HR is remote, general counsel mostly works out of New York. Got it. Okay, oh, and then we have the accounting office in Reno.
0:35:11 Dave McLean: We have an accounting office in Reno that would report out through CFO. Got it. Office of Accountants in Nevada. Okay, awesome.
0:35:21 Dave McLean: Where, where are most of the employees at the end of the day? Mojave. Mojave. Okay, so if, if the starting point for an org structure is that it has to resolve down to some sort of a site or a physical address level in order for us to get, uhm, if we just start with the operations side, because I think
0:35:40 Dave McLean: that once it's built, it is a fixed address in this regard. How many are we, how many are we dealing with that are in operation that are being built?
0:35:47 Dave McLean: That being operated by Terrigen today? For Mojave specifically? Sure. In Ops? Yeah. A hundred employees or sites?
0:36:00 Dave McLean: Start. No, no, it's okay. And how many sites? In Mojave, Phil? I'm going to say 15. Are you including substations when you're saying that?
0:36:11 Dave McLean: Or substitutions in your case? I'm substituting. Sorry, we like saying ensamble. Well, and I'm talking specific resources within it, so that gives you the, you know.
0:36:26 Dave McLean: Like, 15, 45. Yeah, somewhere between 40 and 50. And then we have 2 in Yeah, That are operational, yeah, we're not.
0:36:51 Dave McLean: We don't that are in construction, or reconstruction, or anything like that. Okay, and would anyone like Every one of those today, if somebody was injured at one of those sites, would it, would it have a, again, thinking purely from an incident injury point of view, would it have an OSHA requirement 
0:37:15 Dave McLean: to have an OSHA 300 log? No, it's not. Yeah. OK.
0:37:34 Dave McLean: So, so in, uhm. Mojave, which is our Ed scene. They, they are keeping Bez through. They get, they have their own, we also have operations out in Hinckley, which is our Lockhart assets.
0:37:51 Dave McLean: They, they have their own. OK. I think we have about 10. OK. Yeah, maybe 11. Addition of Monte Cristo. They get put to a specific log, whether it's New York or, ah, oh, now we know.
0:38:11 Dave McLean: I think it's called Bonne. Beaumont Canyon, if you go under Monte, it helps, you know, so you can go to Texas and some of the remotes.
0:38:19 Dave McLean: So Beaumont and Canyon actually, because we have employees at those sites now, they will be two new ocean access areas.
0:38:26 Dave McLean: Oh, okay. Yeah, so even though like, you're seeing there's projects, that doesn't mean there's that many offices. Sure. So. Sure, so the 1 thing we haven't done is like, we do have when you're seeing a physical address, we have the 70210.
0:38:43 Dave McLean: And that's what we use on the ocean for the wind, but there are a couple, I would call it satellite offices with other addresses where people are working.
0:38:53 Dave McLean: We typically circle it all up. They call it 1 establishment, but we don't list those addresses. And within one of those establishments, how mobile are people outside of that establishment?
0:39:08 Dave McLean: So if somebody works in Mojave, for example, that's the biggest one, part of them, how often is it that they would then be able to branch out and be working somewhere else in the organization?
0:39:18 Dave McLean: People dedicated to those spots, no, they're not going to branch out very frequently. The HV do, the high voltage, but that's a small portion.
0:39:26 Dave McLean: Okay. So we have a shared services kind of group? Yes. High voltage loop on there, or ITS? They are across every, every asset, even in Texas.
0:39:35 Dave McLean: So they would drive to, like, Palm Springs in just a moment. Okay. Maybe, maybe. But a home office might be, might be 702.
0:39:41 Dave McLean: Yeah, the establishment we have is 702 on Oak Creek Road in Mojave, and then, and then we have the Kennecott or how do you say that?
0:39:52 Dave McLean: Yes. Candy Country? No, no. Other Mojave. Kennecott. Kennecott. So we have two establishments in Mojave because we have two technologies.
0:40:04 Dave McLean: One of the main shares is high voltage ITST. If they aren't connected, which log would you put them on? Every employee has an assigned log.
0:40:13 Dave McLean: Yeah. So, like, we can give you that list. That's because they don't, most of them don't have that much of a log.
0:40:20 Dave McLean: They might, within that, within that establishment, if there are different sites, they might move around quite a bit within that.
0:40:27 Dave McLean: But, like, the, well, obviously, and if that person gets injured while working at a site, they'll be there. Got it.
0:40:35 Dave McLean: Okay. Okay. That, that's sort of the baseline, and from the Intellect's point of view, that works really nicely because that does not, A, require any reconfiguration the way that OSHA logs are generated from Intellect.
0:40:49 Dave McLean: Everything is designed that when an injury happens, we snapshot that. The location of the incident to the location of the employee.
0:40:56 Dave McLean: There are some companies that you need to be able to override that with great degrees of frequency. You actually have to choose which location the person was injured at because they, they are so mobile.
0:41:05 Dave McLean: But in this case, it becomes very easy for the person to be able to think about it. They just have to, It has never happened in my time with the company, 5 years, that somebody was injured outside of their establishment.
0:41:17 Dave McLean: Like, it just hasn't happened. As far as that next level down, so if we now get into the individual sites, there's a company that has of ways to achieve that in Internet.
0:41:27 Dave McLean: And for the sake of this conversation, I'm going to suggest that maybe that's not the location structure. It's just another audience related.
0:41:34 Dave McLean: So the idea would be, you pick the location or the location gets selected. You selected based on the person being injured, and another drop down then gives you a filtered list of what site was the person working at when they were actually injured.
0:41:47 Dave McLean: Then that way you get, for your own internal reporting, you can start to run your numbers against all of that.
0:41:52 Dave McLean: But it doesn't create a security requirement within the system. We're not securing, you know, this distribution or this transfer station or any other sort of type of asset that you've got.
0:42:02 Dave McLean: It all rolls up to that level of the establishment for the purpose of security. This also avoids the trap of having to put people into the system at one level even.
0:42:12 Dave McLean: Even though we want their, their data, their injury data specifically to be captured against a different level. And we can apply this logic everywhere in the system.
0:42:21 Dave McLean: So when inspection comes, uhm, same idea, you're picking which of the establishments that it would, would relate to, but a second level.
0:42:29 Dave McLean: A second dropdown shows up and is now filtered based on that establishment to show you all the individual sites, where exactly, where even this inspection was being done, or, uh, if we're talking a document, hypothetically, if a document is bound to a specific, specific location, as opposed to the establishment
0:42:44 Dave McLean: level, you can follow the same thing through. Like an area or a department? You got it. You got it. So one thing, um, that is, um, I feel like is somewhat problematic today is, um, we have so many managers that, like, take that 70210 pre-prod.
0:43:02 Dave McLean: We have a bunch of managers, like, you know, Jeremiah, maybe three or four other managers, and that could grow over time.
0:43:12 Dave McLean: Um, I, when I think about, um, Performance, I might want to look at like, high voltage, I might want to cut the high voltage incident.
0:43:23 Dave McLean: Yeah. But that is a department that might be back to your matrix conversation, like, how we're organized by business versus location.
0:43:30 Dave McLean: So are we going to be able to put those business you. It's a lack of, like, a better, like, I guess, it's everything we might call it.
0:43:38 Dave McLean: We'll have to look up what each are. Oh, all right. We've got our 1st, there we go. Thanks. So, um, put that there that wasn't there yesterday.
0:43:49 Dave McLean: This is a large conference room, right? We should report that to the facility. They should Presidents should secure it better.
0:44:04 Dave McLean: It wasn't there before. So is it, is it stable now, or? It's stable still. What is the status of the parents?
0:44:16 Dave McLean: You can go over here now while I'm writing on it, and then Oh, okay. Okay, it's going to look a little healthy Yeah, I guess I Why would you just, like, this is a good look.
0:44:39 Dave McLean: Maybe they were just That's an answer. Nothing but the You should've just put blue tape all over the internet.
0:45:11 Dave McLean: I just really do not want it to fall on you. Let's not deal with this pressure.
0:45:21 Dave McLean: Nobody, yeah, nobody be worried about my taping skills. My dad is a pro at duct taping everything. Another example on department like EHS, like, I've got my people spread out all over the place.
0:45:34 Dave McLean: Some, like, you know, one person supporting Wall Springs, one person supporting Mojave, one person supporting the, you know, Overthear. So I'm going to want to, like, look at my reporting for my team.
0:45:46 Dave McLean: EHS people are the ones that break things. There's definitely a problem with that. Yeah, people like purple hair. I've got brand new markers in 2009.
0:45:56 Dave McLean: Yeah, that's better. Thank Do you have an eraser? Yes, we have. Yeah, there's one here and I've got a, Sorry.
0:46:07 Dave McLean: I've got four markers on these. EHS, we're going to set off to the side, because EHS breaks all the rules.
0:46:13 Dave McLean: I mean, the EHS system. Generally, you're all bucking up at the higher level, High voltage, we'd call it a partner, sort of in line with Let me look at the 93 phase.
0:46:29 Dave McLean: or, uh, 7.7. Uh, it just depends. It's a, it's a person by person. Yeah, uh. We do establish them. Yeah.
0:46:38 Dave McLean: It's person by person and we have a methodology. With them. So they also make. Yeah. No, it's, it depends on their workload.
0:46:46 Dave McLean: It work location. And then if they're remote, we have a methodology to use. It doesn't, there are rules. So, for instance, we have a person designated to Sorry.
0:46:58 Dave McLean: Yeah. Did I say I was looking up But, I mean, it's similar to what you're seeing. What's most important. Just be here.
0:47:19 Dave McLean: There we go, there we go. Jossie. Okay, Jossie leads High Voltage Team. TGOC, WIN, and CA. So I might just be off on this one.
0:47:35 Dave McLean: Okay, there we go. Supervisor, High Voltage, Kenneth Mitchell, rolling up into Jossie. This is the High Voltage Team. Jossie runs it, is the general manager.
0:47:45 Dave McLean: Got it. Okay, so he has engineers. And so that's And so those folks, they would all work out of a specific physical location, right?
0:47:57 Dave McLean: We'll at least be aligned with that. Perfect. So if we think of this for a second, it's a different term.
0:48:12 Dave McLean: But, like, Abraham is assigned to all springs. Okay. So if we have the level of the establishment. Yeah, choppy, I say.
0:48:28 Dave McLean: Hatchy. Hatchy. Channel vibrating. Indicative example. So people are going to be assigned to each of these things and incident gets created.
0:48:50 Dave McLean: And most of the time, it's going to be tagged to whatever the establishment of the place of person is, and that'll flow through into the reporting requirements.
0:48:57 Dave McLean: In addition to that, each one of those people, by the sounds of it, is also bound to a department, which in and of itself has a hierarchy, but it somewhat resolves down to, we'll use a few different examples.
0:49:06 Dave McLean: EHS is the wild card that's going to change everything here. High voltage, low voltage. There's another, there'll be one or two more that I can throw in here just for, for the sake of examples that we can, we can work We'll probably use IT, another shared services, I guess, IT, HR.
0:49:25 Dave McLean: HR is all home-based. Absolutely. But, even still, those employees, while they might be home-based from a physical location point of view, they align with an HR department.
0:49:36 Dave McLean: So if they're two different hierarchs, every person. Yeah, they would be remote over here, and they would be their department.
0:49:43 Dave McLean: Because we have a lot of remote employees, a lot, a lot. And then develop, so like, HR is a good example, but development would be that at a much more number of employees.
0:49:55 Dave McLean: So develop. Development would have a bunch of remote employees all over the place, and then development might even subcategory. Some of them are tied to certain areas, though, because we have some folks that are tied or focused on Texas, and then we have the other folks.
0:50:14 Dave McLean: We have some that are still too different because every every individual person would essentially have two different properties that describes it.
0:50:24 Dave McLean: It still works in that way. So if we come back to the location structure specifically, so if this is our base level for the location structure.
0:50:31 Dave McLean: How would we then group these to the next level up? Are these grouped into regions that go above that? Let me just.
0:50:43 Dave McLean: So, wind. So we can start with wind. P, B, B, or P, B, Bez. And then, H, V. Actually, P, B, Bez, me, thinking ahead.
0:51:01 Dave McLean: Thinking ahead. We may integrate it with Lint as well. I don't know if we're going to stick Bez with P, B at all times.
0:51:06 Dave McLean: The technology, if it fits, P, Oh, Fewer is better. Thank you very much. It is actually serviced by Mojave 6 and 7, 2, 8, 10, and 3, 4, 5.
0:51:23 Dave McLean: I thought that one was, oh, no, Teva. But Teva was like our first starter. Everything since then has been to B.
0:51:30 Dave McLean: Yeah, well, Dave, even now, so. Oh, Robert. Yeah, yeah, so that's perception Mojave and then are all of our standalones go to a specific general manager has that that's in his portfolio, his operation portfolio, while we do have a best site that is serviced by a couple of our main assets, but his focus
0:51:57 Dave McLean: is battery energy storage systems. Um, his operational focus is just the Benz facility that is serviced by what may be a wind asset.
0:52:09 Dave McLean: But that was like our first wind asset. Everything since then is going to PVBenz. Yeah, I mean, I, I would just for now, I would say.
0:52:17 Dave McLean: But I think HR moved, like, when Jeff was still here, moved him under Dave. Dave, right, because, That GM, again, his operational focus is BEZ facilities and PV.
0:52:33 Dave McLean: For the sake of good, not perfect, let's set that one aside for a moment. There's a couple of ways that we can handle that, not the least of which is there are there are ways that on the exception basis, a person can have access to more than one of these branches of the org structure.
0:52:49 Dave McLean: We can also create levels to combine things where we feel like we need to for the sake of this part of the conversation.
0:52:54 Dave McLean: Think about it in terms of how you would cut it up on a chart or on a report. If you're looking at incident rates, it would cut it like this.
0:53:01 Dave McLean: And then is it that each one of these establishments rolls up into only one or could, could Palm Springs, for example, have sites that might have operate in both?
0:53:14 Dave McLean: Right now? They typically roll up to one. Oh, Lockhart doesn't have one, but Lockhart would just. Um, but remote would not.
0:53:25 Dave McLean: And the other offices, like, if I had the other offices, like San Diego, they would not roll up. Sure. Um, if I, can I assume that, like, this really starts to look like up here as an operation?
0:53:40 Dave McLean: Yes. Right. So, if these three all maybe all line up to the same one, but, uh, where would it? That would go to Vint.
0:53:49 Dave McLean: That would Vint? That would go to Vint. Okay, so just be balanced. Did you add a lock card? I don't think we're trying to get the whole thing.
0:53:57 Dave McLean: Yeah, just to get it. Yeah, just to get a few Again, remote and some of the physical office space, those are going to fall into a different branch here.
0:54:09 Dave McLean: If these ones, and whatever else, roll up into operations, what would we call this level? That would be almost like the leadership team that I was going through, like, the executive team, so Dev.
0:54:21 Dave McLean: The HRs, just just for safety. Yeah, I do think that we should add an HPE technology because that team is specific to our service.
0:54:32 Dave McLean: Substations, I'm not able to refer it, but our subs, while they may be within the footprint of another project, they are their own facility, essentially.
0:54:45 Dave McLean: Yeah, so there would be establishments that roll up and down. No, uh, well, no, no OSHA establishments there in those ones.
0:54:57 Dave McLean: Yeah, it was good. Because, again, every person is going to have two properties that describe them, so that's a They can live in an HP department and yet still be aligned with an establishment down here.
0:55:12 Dave McLean: So I might be an HP technician or whatever, whatever the job title is that works out of pumps. I Springs.
0:55:22 Dave McLean: And so in that sense, we cover the fact that when that incident happens, or that inspection occurs, or training record, or whatever the case is.
0:55:30 Dave McLean: I could present that based on, hey, show me all of my training records for Palm Springs, but then break it down by the type of department of the employee.
0:55:38 Dave McLean: And it cuts across here. So if every person has more than one identifier for where they fall, one for the location structure, one for the department level hierarchy, it gives us the ability to be able to present both pieces of data in conjunction with each other.
0:55:53 Dave McLean: We don't have to try to map and take this concept and layer it into a singular org structure. Well, in that case, then, I'm trying to understand the org structure, but you have to put it this way, so, I mean, we carve HV out of all of our technologies.
0:56:21 Dave McLean: That's what means that you have people. Across all of our technologies, all of our individual establishments, there will be some people that fall into the HV department, just like you'll have potentially DHS folks that are embedded at different establishments, in addition to the ones that are either 
0:56:37 Dave McLean: remote or that work out of a physical office somewhere, just like you will You could have HR people that might be sprinkled throughout the organization, you could have an IT person that's embedded at Mojave, in addition to whoever's in the, in the sort of back office, uhm, you will remote in that scenario
0:56:55 Dave McLean: , this doesn't describe where they work. So much as it describes what they do. This is going to be a department hierarchy.
0:57:05 Dave McLean: We might be able to take the technology. I'm just trying to think here for a second. Yeah. Um, there is a.
0:57:13 Dave McLean: Isn't it like a department called Venn right now? I'm trying to think what would be if we deleted the technology.
0:57:28 Dave McLean: So, when we go over there on the left, is that going to have every, it's going to have every department.
0:57:34 Dave McLean: So, like, if there's a wind, probably like Riddell's team or Rudy's team. Am I going to be able to roll up a few teams to get my wind picture?
0:57:45 Dave McLean: to get all the managers in terms of wind. Yeah, yeah. And the pull-ups, like, when you start talking about the most atomic level, it's really up to you guys to decide how you want to represent that.
0:57:57 Dave McLean: Uhm, that was the first thing that came to my mind, is the correct one, if it's the individual sites roll-up here.
0:58:05 Dave McLean: That is not. Those are things that we're going to see. That's what the technologies are doing in regards to incidents and things.
0:58:13 Dave McLean: Let me ask you this. lot of our reporting is going to be at What do you think about assets? We have assets organized, planned, and even better.
0:58:23 Dave McLean: Not that I have a bulletin, that shouldn't probably be there. I disagree with that. The one thing I see in our financial reporting, when we report to the board, is standards.
0:58:34 Dave McLean: I think I see those financial reports, so that would be a question. Because some are together, some are panels in a bus together, and then there are some CMOs.
0:58:43 Dave McLean: I think I see some of that. That might be how we might want to And now would you try again?
0:58:48 Dave McLean: You do. So, in my mind, the difference is, The thing about the technology piece, it's not built all in your day, because it's going to require a and a battery or a PD.
0:59:08 Dave McLean: But, in terms of assets, I think PA, GearPoint, Standalone, and PD can be separate. They have those two separate. An obvious site.
0:59:15 Dave McLean: Like, one version of it has panels, the other has both panels and a battery. With panels and baths. I wouldn't separate out the baths.
0:59:29 Dave McLean: Well, I won't, so. Yeah, because I'm going to ask, how would you, how would you Vibrance If you're tracking that 7 Is it it's own category?
0:59:43 Dave McLean: Like, in your tracking? Yeah, the resource will be one thing like resource or resource tracking But it's like, oh, instead of being a test But you're tracking in performance You can do it either way, right?
0:59:58 Dave McLean: At the end of the day, it's what you want in the reporting room and from a security point of view, somebody, ideally, you want somebody logs in who's responsible for that and sees the whole branch.
1:00:07 Dave McLean: So if it makes sense from a from a reporting point of visibility point of view for the leader of that group, you'll be able to see things broken out, then you break it out.
1:00:16 Dave McLean: If you don't, if it makes sense for them to see it all combined and it just goes straight down to the establishment level, you can do that as well.
1:00:33 Dave McLean: I'm thinking about it from a safety standpoint. I'm never trying to figure out if the hybrids have more near-misses. Like, we don't, we don't look at things like that.
1:00:40 Dave McLean: We've never gotten that directly. Two questions. I realize, good, not perfect. But we do plan on integrating an ERP at some point.
1:00:51 Dave McLean: Yeah. And I am trying to think ahead about how we're going to categorize things there as well. So this makes sense.
1:00:57 Dave McLean: So, and if we start one more question, yeah, we're potentially going to have Bez in the future to win. Also, so how hard would it be as we're thinking through this to add that later.
1:01:09 Dave McLean: Like, we have PDB with 3 categories underneath it. Can we. Total. You can change that at any point in the future.
1:01:16 Dave McLean: Yeah, so if fast forward a year and you need to add. You know, a couple more sites here and then realign these ones under wherever they need to go, you can do that and the data will follow.
1:01:26 Dave McLean: As far as the ERP side of it, it's just like the HR side, ideally you want to look at You don't want to worry about putting data in up here.
1:01:33 Dave McLean: You want to put the data down here and that this structure is unique to Intellects. This is something, well, it's not unique to Intellects.
1:01:39 Dave McLean: It doesn't exist in a vacuum, but it is managed entirely within Intellects. You don't integrate the entire structure in this case.
1:01:47 Dave McLean: You build these and put people, records, assets, equipment, whatever, whatever those things are, into that level of structure. But, once it's there, Intellects' location structure will handle all the reporting side of it.
1:02:01 Dave McLean: Like, when we're doing dashboard reporting, we'll be able to block whatever's tied to each of the buckets from technology. You got it.
1:02:11 Dave McLean: You got it. The one that I think is probably the biggest sort of risk to this model that you're going to want to think about as far as this technology goes, is the statement earlier was that right now, each one of these establishments would only sort of fall into one bucket.
1:02:27 Dave McLean: And so if Palm Springs today falls under wind, what is the likelihood that a year from now, two years from now, whatever it is, Palm Springs, Palm Springs also has PVB components to it as well, right?
1:02:42 Dave McLean: So that breaks the model. That if we look at it today, that if everything here is built off of a one-to-many relationship, and we look at it down the road, you know what?
1:02:50 Dave McLean: It could be a many-to-many relationship. Now you get into some really weird exceptions, where you have Palm Springs 1, which rolls up into wind, and Palm Springs 2, which rolls up into PVB.
1:03:02 Dave McLean: There's, there's some companies that do… So let's go. You could do that, or, or that's where maybe this technology piece comes out and goes into the other hierarchy and becomes a different, different parameter entirely.
1:03:15 Dave McLean: Are there only two hierarchies at all, or? There are only two that behave the way that we need them to.
1:03:22 Dave McLean: Uhm, we can create as many hierarchies as we want for the purpose of classifying records, for reporting dimensions. They generally won't have any security dimension associated with them.
1:03:34 Dave McLean: So if, for example, we decided to take the technology level out of this org structure, and let's just say we flattened it out, all of these establishments roll straight up to operations.
1:03:44 Dave McLean: And from there, we build out an object in Intellects to store the technology. Classify each site with one or more technologies it belongs to.
1:03:53 Dave McLean: We can do that. It is going to give us the ability to report the data that way, but you won't be able to have somebody who is a general manager of wind, that that now casts a filter on everything we see, unless we take that concept and put it over here.
1:04:09 Dave McLean: I just feel like it, the technology belongs on the department side. So you're saying if we find it out, and it was just like all the sites or whatever, and it rolls straight up to operations, then it, the technology.
1:04:27 Dave McLean: The technology would become almost like a tag to the DNOs, but that tag doesn't allow You can tag people, locations, you can take those tags and carry them through to each record individually without having to.
1:04:39 Dave McLean: A work location, we don't have to tag them. The tag doesn't allow that. Or the security in which we could say, this person can now say everything with this tag.
1:04:50 Dave McLean: Okay, so the hierarchy is what is establishing. So we could say, if it was flat, we would remove that. Or least that would be, uhm, the general manager could say everything that's appear to be.
1:05:06 Dave McLean: So general manager could say everything that's in Bob's rooms. If we, yes, if we flatten it, yeah, we could put our general managers down here.
1:05:13 Dave McLean: And as a general rule, most people aren't going to have that. So, like, your general manager, you guys got it, right?
1:05:23 Dave McLean: How do we carve that up today? That's general manager. How do we determine what they're? That's the best example, because you've got all PBBez, and he covers all those areas.
1:05:35 Dave McLean: PBBez for all of those areas. So, when GM, that technology, yeah, hit those different establishment areas. Got it. Well, but there's Robert.
1:05:47 Dave McLean: For PBBez. So, we don't have all the establishments. This is actually not an establishment, so I guess we should get rid of that.
1:05:56 Dave McLean: But there's like, say there's 12 establishments. Most of them have one manager. Yeah. But this one, has multiple managers. But there's only one gentleman.
1:06:09 Dave McLean: That's why I'm saying they're going to want to break it and they're going to go over here and probably just look like high voltage managers sits here.
1:06:16 Dave McLean: He's going to go pull his department over there. When we're doing this hierarchy, you can cast a filter on the dataset.
1:06:24 Dave McLean: You've got a manager here for high voltage. He's just going to look at his section. You know, but he has the one guy at Palm Springs that he's I think you might have some remote employees here, but the remote employees are assigned to logs.
1:06:39 Dave McLean: So once we have all our establishments up here, everybody's accounted But even though he or she may work at a specific establishment, it's possible that his login location, his operations, using this as the filter, to just look at all high-voltage data across the board.
1:07:02 Dave McLean: Right, that's what we would do. Okay. Okay, so in that scenario, that's what Yeah, I think you can pull it out.
1:07:11 Dave McLean: So I just think we need to run that one by Lord, because we don't know his plans, maybe for his org development.
1:07:20 Dave McLean: He's like, actually, I'm hiring Micah. I had a lot of blah, whatever that could be. It's like, oh, tell us what about the development.
1:07:31 Dave McLean: We have Rex Lair coming in all those other guys like he made, like, because he has Robert and David status.
1:07:39 Dave McLean: I'm wondering if someday it's just going to have, like, a head of the technology or something, and this would not.
1:07:46 Dave McLean: So I think we just need to check it, but this would be okay for right now. Okay, so the current to summarize for our AI friends called that are listening in for us.
1:07:56 Dave McLean: Say nice things, right? The current model, current being the underscored stress point there. The location structure, relatively flat, resolving down to the level of the establishment, rolling up into an operations and again, I realize that it branches out.
1:08:14 Dave McLean: It's more than just the operations side of the business, but that's, that's the biggest chunk that we're going to see here in terms of data, but departmental hierarchy where any given person is going to be tied to a specific department that casts a security filter across the location structure, which
1:08:28 Dave McLean: gives us the ability that a user at Palm Springs, who hypothetically needs to see all departments for Palm Springs, would know that they're at the top level location within the, within the department hierarchy, but on the flip side, you could also have somebody who's responsible for high voltage across
1:08:47 Dave McLean: a broad swath of establishments by putting the operations level. So it's the combination of those two dimensions that'll determine security, visibility of records, uh, and, uh, and a decent chunk of recording.
1:09:00 Dave McLean: In addition, not on the whiteboard here, is the technology, which would be an additional property that is purely for reporting purposes for slicing and dicing and filtering data, but doesn't have a security component to it.
1:09:13 Dave McLean: So this could be something that describes the site. It could be somebody, something that describes a person, or it could be something that describes a specific record, like an incident.
1:09:22 Dave McLean: If you had an incident that occurred at Palm Springs, where the injured person was somebody who works in high voltage, and, you know, the specific part of it that they were working at.
1:09:33 Dave McLean: Again, looking at this down the road, they were specifically working at a part of that establishment, but that piece only becomes a reporting dimension, and therein lies the action, which is, we want to ask the relevant people.
1:09:49 Dave McLean: Whether or not that's okay if we don't have a security component to that technology there. I don't exactly understand the limitation of the tag.
1:09:58 Dave McLean: Can you just describe that one? It's just a, it's just a field to describe a record, rather than something that's integrated into it.
1:10:05 Dave McLean: So you're, so you're guy. I'm spree. So you're managing to hatch because that's got lots of large areas, we'll say.
1:10:15 Dave McLean: you will be able to see everything on the technology. Because it's not a security setting, correct? The thing that it would introduce limitation for, uhm, imagine you hired a an SVP in the wind.
1:10:30 Dave McLean: Right, right, you need, yeah, like there could be some layering in here in the future. That would be the limitation, would be in that sort of precise wind level information for each individual, each individual site that is only what we'd be doing is essentially putting them in operations and potentially
1:10:52 Dave McLean: incorporating to the site. I know that sounds like it cuts across because it more describes the site rather than a person.
1:10:58 Dave McLean: People don't work in wind, they work in a site that is a wind site by the sounds of it. And so if you wanted to be able to do that, the most likely way that you would do that is by breaking this up.
1:11:10 Dave McLean: If you didn't have more than one operations, which would mean that you're essentially generating an ocean log for Palm Springs Wind and an ocean log for Palm Springs PVP.
1:11:22 Dave McLean: Oh, that's how we would have to address it in the future. You got it. How does SoftBranch roll up? Like, is there a technology or anything for you?
1:11:34 Dave McLean: Like, can you run reports by technology or anything? It doesn't have any integration besides PVBus right now, but by default there's no in SoftBranch to put it OpsGenium's probably not doing it.
1:11:52 Dave McLean: Ah, different job. I, I, I don't know. I'm thinking about past projects. And how we do this. I, I think this makes sense, but I hear the discussion about when you guys, I feel like that, that's something Borg's probably going to say.
1:12:07 Dave McLean: Then he's going to want that. I think Borg might say, I want that. So, you know, that's on the table, I think.
1:12:13 Dave McLean: We just got to talk about it. Talk a little bit about it. Yes. Didn't you say we couldn't do that?
1:12:24 Dave McLean: It's, sorry, couldn't, couldn't is a strong word. We couldn't do it and still have only one establishment record per establishment.
1:12:34 Dave McLean: It would be that. That's what it needs to be. You got it. This is like at the establishment. Well, it can only be one.
1:12:47 Dave McLean: You got it. Okay. You got it. We can't just add a dimension? Not with the security component. Yeah. You can't.
1:12:55 Dave McLean: If it was just about reporting, if it's just about cutting it up on a on a pie chart or a bar chart, it's in the way.
1:12:59 Dave McLean: Totally. 100%. And that extra dimension would just, it would be a many to many relationships. So when you, when you create each of the different establishments, you'd see checkboxes on the form to be able to say, okay, this one has solar, this one has wind, or whatever it is.
1:13:17 Dave McLean: So let's just say. There was a head of, um, all of our PB and DAS operations that magically appeared on the scene.
1:13:25 Dave McLean: And an old one. And he wanted to run a report to see how his area was doing. We would be, you know.
1:13:34 Dave McLean: He would only be able to grab establishments. Whatever's at the, he would have to pick an establishment and live with whatever was at that establishment.
1:13:42 Dave McLean: You got it. Now, if we wanted, if it was a on-use space, another thing that we could do, which doesn't have a security implication.
1:13:50 Dave McLean: But as we, as we look below the establishment, if you were to model it out for a second, we know that there's individual sites that are very granular, right?
1:13:58 Dave McLean: The physical place, physical address, GPS location, whatever. I wouldn't build that into the location structure. We're going to do a site.
1:14:05 Dave McLean: That's a site object. And so in that case, we have whatever those lists of things are underneath, underneath each establishment.
1:14:14 Dave McLean: And that person, when they're going to go run the report, they'd say, hey, look, I'm logging in from operations, from security.
1:14:19 Dave McLean: I don't think that. Filter, filter, filter. Yeah, I don't think that. OK. OK, no problem. I don't, yeah, I don't know the answer here, but we'll figure it out.
1:14:28 Dave McLean: I should say too. At this level, each one of these could then be classified from a reporting point of view.
1:14:35 Dave McLean: Is that site a solar site? Is that site, whatever the case may be, so when they're actually being filtered instead of having to explicitly articulate each one.
1:14:44 Dave McLean: It's just, hey, show me everything where the site is a whatever site. Can we talk about site for a second with regard to inspections?
1:14:51 Dave McLean: How are inspections set up? Bye bye. And right now we break it down by, uhm, how we have them identified in the site-specific IIPs, so all those sites that we broke out, and are the IIPPs, uhm, you're just, sorry, you're going to have to refresh me.
1:15:11 Dave McLean: They're not by establishment? No. What are those by? Uhm, how the GMs asked for them to be urbanized. I would worry about the inspections, please, because we can absolutely do that.
1:15:26 Dave McLean: We can it to whatever we can think of here. But, uhm, for instance, we have Palm Springs south of the I-10, which is a group of, you know, those Palm Springs projects.
1:15:41 Dave McLean: North of the I-10 is a different set-up. Or, if we just do a one-off, like if the EH&S team goes out and does an inspection, it's on that site specifically.
1:15:59 Dave McLean: So it might be Mojave, 6172. So it would be like the south of I-10. Right, it would not be that.
1:16:04 Dave McLean: It would not be that. It would not be the south, it would be more granular. It would be, so like if it's a contractor that's performing work on, uhm, a specific site.
1:16:15 Dave McLean: Project site or intelligent entity. I think at the site level, we're going to need entity because sometimes you have to report the incidents.
1:16:24 Dave McLean: And it seems like it's hard to figure out. Well, where did that when I go back to the track where I'm not always clear?
1:16:29 Dave McLean: Was that on? This entity, oh, now we're asking for a report for that entity. Project sense, but is that what you're saying?
1:16:39 Dave McLean: Like, those dashes would represent our each individual project site and that would be a filter. It can be okay, but I guess the other question I had is, like, if this is establishing the security level of what data someone has access to, like, under the general managers, they have.
1:17:03 Dave McLean: Managers, site managers, they are only responsible for a specific project or maybe a group of similar projects. How does their security work in this structure, like, because they should not necessarily.
1:17:17 Dave McLean: Have access to everything in Tashveer, everything in projects. They should focus on, like, have access or focus on just their specific sites.
1:17:27 Dave McLean: So how could we, I guess, structure that in this security setting? Interesting. But can they, like, what they do? I mean, I come in this way.
1:17:38 Dave McLean: I'm a supervisor in Tashveer. I'm going to come in, I'm going to click the projects I'm responsible for, but I can look at my other team members, my colleagues.
1:17:48 Dave McLean: I don't see, I don't see an issue with that because the incident data is going to have some additional locks, right?
1:17:55 Dave McLean: The injury data, right? But when you have that information at this level, you'd be able to So they would see all injuries?
1:18:07 Dave McLean: Their establishment, if they are, again, I'm presuming that a supervisor is a, uh, somebody who should be able You get to decide how you get to decide how much of that gets exposed.
1:18:22 Dave McLean: Uhm, as a general rule, what they're going to see is more, like, the name of the person, their supervisor, uh, typically data, like, the stuff that you would, you would often see, uhm, on the law.
1:18:33 Dave McLean: Okay, so we're going to, we're, we are going to want to look to see. Well, the incident data, the personal information is going to have to be secured.
1:18:44 Dave McLean: Got it. Okay. Okay. The incident report is one thing, but the OSHA record, it'll have to be very limited. The, oh, the people that can see the OSHA record are generally EHS people.
1:18:59 Dave McLean: That's what I thought. Yeah. But when you actually look at the incident record, because the incident record carries with it a bunch of properties that feed into the OSHA log.
1:19:07 Dave McLean: Right. By virtue of the fact that it shows up in both places, if you could see the incident, then, you know, those students are going to be able to see.
1:19:16 Dave McLean: And we can, we can manage that to a certain extent. But, you know, if you get away from the stuff that describes the person, like, in a really sort of privacy-focused way, even the description.
1:19:26 Dave McLean: It's something that you maybe don't necessarily want people to see unless they have need to know. So it probably bears some scrutiny.
1:19:36 Dave McLean: So are you saying they should have another hierarchy? I'm not saying I want to hear more. Maybe. This is the beachhead that sort of leads us into maybe we actually do need to go and level lower than this to create within an establishment a security context that can be used.
1:19:55 Dave McLean: But what about your assumptions? Do you care if, like, let's say Rudy, for example, can see all the inspections for all the Okay, so it's really just.
1:20:08 Dave McLean: And actually, we're at 10 to 30, so we're going to take a quick pause here for 10 minutes. Uh, bio break, coffee break.
1:20:16 Dave McLean: Caffeine, whatever, whatever your, uh, break of choice is. We'll start up again at 10.40. Thank you. Oh, sorry.
1:20:37 Dave McLean: I mean, we've, I don't know if we even want the supervisor to be looking at the date of birth to have the employee on their team who has entered.
1:20:44 Dave McLean: HR is really, really sensitive. We can write and say, just in case, just in case. So, I guess we'll have to, uh, Amy, Jira.
1:21:20 Dave McLean: I, uh, we'll have to get Vanessa and Vic together to, um, compose the question for Ward, so that we lay it out properly and then be able to explain it.
1:21:36 Dave McLean: How this can, I'm just going to call him and ask him what his future org structure is going So we're going to design around how you're going to, you know, if you're going to add a layer in the next couple of years, we should design now, because, you know, I can pull open folders.
1:21:52 Dave McLean: Development lists, if that might be helpful. You know, we've shared that with the agency. Oh, yeah, maybe, yeah.
1:22:07 Dave McLean: Maybe it could be. The annual business, any mime. They have in-line formula. The biggest template is the moshib interfering. Oh, I was like, wait, no, no.
1:22:41 Dave McLean: Oh, Oh, nothing. No, still nothing. Thank you, sir. Did you come down last night? I thought you were going to ask me if I could talk to I did.
1:23:00 Dave McLean: Yeah, I see. This is the first time I've ever seen you. English, that's all it is.
1:23:23 Dave McLean: I did. Do you have one for me? Yes, it is. Oh, there's some jokes. It's really funny. If we talk about the people that stay in How's that forward?
1:23:33 Dave McLean: Do we need to add more Tape on there? I I think we're Oh, okay. Thank you.
1:24:17 Dave McLean: That's it, I don't know if it sounded right, but it was in there.
1:24:29 Dave McLean: It's, it's, it's, oh, no, it's just, it's, it's, it's, Oscenie. Let's mute this silence. Did you see the draft VHS thing?
1:24:57 Dave McLean: Did that, Can you, can you mute? That's just a crazy plot. We're, uh, we're, we're live. Oh, it's just, ...
1:25:08 Dave McLean: ... ... , and Jira.
1:25:55 Dave McLean: That's it in the description.
1:26:06 Dave McLean: You know what? Shhh. What? Who are Should be, well, there's any of us sitting at a table. Thanks for having us at your school.
1:26:36 Dave McLean: Well, I brought my tubs and I brought them yesterday. Did you check the meeting? I'm just going to go straight to the meeting.
1:26:47 Dave McLean: Oh, okay, yeah. We can just, uh, deal with it. Deal with it first. And, well, we can take a break.
1:26:56 Dave McLean: Thank you for coming to class. Yeah, because you have, like, Thank you very much for the interesting Those are the ripest bananas they have by the way.
1:27:49 Dave McLean: I like bananas, they're firmly fat. I like them nice and sharp. You peel it off in pieces, but I don't want to eat They all came single with a bunch of like, solid I always like the first one with the green so on it, because I like the first one.
1:28:08 Dave McLean: Yeah. Yeah, there's a certain kind of person that likes the green banana and the spotted brown banana. There's banana bread.
1:28:22 Dave McLean: Yeah, there is, yeah, they're like all the, uh, the ones that start spotted, like, we'll make banana pancakes with it or something.
1:28:31 Dave McLean: Oatmeal, banana pancakes. Sweet, easy cookies. Well, I, yeah, when they start to, like, I'll freeze them and I'll use them Yeah, Bitbucket finds them.
1:28:54 Dave McLean: Until they arrive, and then, you know, it's an Anyway. Yeah. And then, it might be one of the two people that could go on one of your assignments.
1:29:13 Dave McLean: Is there- You don't even have an event. It's all going Sure. I mean, it's a hierarchy. So, uh, it's only CLLP.
1:29:21 Dave McLean: It's a Saga for each group. I think that's it. It's only CLLP. ... Situation?
1:30:11 Dave McLean: Yes, yes, yes. I remember now, sorry. Yeah, yeah, yeah. No, no, no, yeah, yeah. We have a very, we have very This will be so unfair.
1:30:18 Dave McLean: Uhm, yeah. I had a discussion with Gertrude Belgrum. Okay. I had a discussion with Rock Creek and DT.
1:30:31 Dave McLean: Uh, so, we can talk later on. Okay. I'll you more details about what we're going to do. Follow up on what we're doing.
1:30:36 Dave McLean: Uhm, the times are available in the next couple of days. They're not really convenient for most. But she does have a, uh, how he gave us a Friday in the mail, so as long as the DT's available, Do you Yeah, I was going to open it.
1:30:59 Dave McLean: Oh, yeah, I'm pretty sure that's what so here my Alexa situation is not.
1:31:15 Dave McLean: Well, I ran into, uhm. It's, you know, we personally hired to work on soft edge. And she was telling me how bad it is, and then I mentioned So.
1:31:31 Dave McLean: Water and, uh, yeah, I mean, yeah. In front of it goes the same way. And it's awesome. I know this thing.
1:31:57 Dave McLean: I know thing. I worked with it Because at least you have a bunch of hints. It's not foolproof to go through betting, but I would think it'd be better.
1:32:13 Dave McLean: Oh, try to fix yourself, maybe? I like that you got the half-calf. I'm, like, super jazzed about this. This is half-calf?
1:32:20 Dave McLean: This, well, the green mountain, right, is a half-calf. Those little prigs, Isn't it half-calf? Yeah. I love that. It's like half-de-calf-calf.
1:32:36 Dave McLean: I'm be We're with you. It's like 75%. Because deep- Deep chums. It's just like 50%. Tiny bit. 50% of what regular pigs.
1:32:49 Dave McLean: Dark, but she's actually but 2 o'clock pick me up. OK, alright, that's right. So I've made a revision to the to the model here.
1:33:02 Dave McLean: So let's consider a world for a second where at the level of operations. It resolves on both sides. However, on the department hierarchy side.
1:33:13 Dave McLean: We break down into again. Hypothetically, we broke it, break it down into different combinations of technology. Whatever these actually look like, we can decide.
1:33:20 Dave McLean: But from there it breaks down into each of the individual sites. What I had as an example little dashes over here.
1:33:27 Dave McLean: With each one of these sites, based on my haphazard color coding, aligning with a given establishment. So, site 3, site 4, aligning with Palm Springs, and so on and so forth.
1:33:39 Dave McLean: This way, We'll see you Can you create a record, incidentally the one I'm going to keep coming back to. The record will get an establishment, presumably from the person who was injured, and it will get a site, presumably selected by the person reporting the injury, or possibly based, like, inherited 
1:33:57 Dave McLean: from the person who was injured, although I think they move around, they might move around enough that it probably makes more sense to choose explicitly what the site is.
1:34:04 Dave McLean: I think choosing the site. Okay. So I create an injury, Dave is injured, who is a, who is an employee of Park Springs.
1:34:11 Dave McLean: I select site name. Site 4, which by virtue of its relationship allows us to tie that injury to not only Palm Springs for OSHA reporting, not only site 4 for internal reporting so we know where things are, but also the wind from a security and from a KPI point of view.
1:34:27 Dave McLean: That gives us all three properties. from two fields. We can now, we can now work off of. Does that better reflect the management structure and the, the reporting structure we have?
1:34:40 Dave McLean: Because in this world, I could have, let's say, General Manager of Palm Springs, somebody like somebody who rules the land of Palm Springs regardless of any, any given specific combinations.
1:34:50 Dave McLean: I could have a VP of Wind who's got all of the wind sites and therefore all of the wind associated data, injuries, inspections, documents, whatever the case.
1:35:00 Dave McLean: Rolled up into them, discreet from everything else, and it doesn't matter what establishment that comes from, because it all comes down to the site level.
1:35:07 Dave McLean: I can also have somebody who is responsible for a given site, which, because we know each site and it's a good question, I want to make sure I'm not assuming each site would only generally correspond to one technology.
1:35:23 Dave McLean: The way you define a site in this case. We to figure out here what we're going to call a site.
1:35:27 Dave McLean: I think we talked, somebody would call Ansan a site and Lockhart a site. But I'm looking at this thinking more about if we don't need that, that level of definition, then the sites would equal resources.
1:35:42 Dave McLean: I don't know what you think of that, so. We already have tax fees. In those general sites identified. Are you saying or, or and?
1:35:53 Dave McLean: And. I'm trying to figure out. And. Okay. Right, and the color coding implies a filtering that can happen so that when you create a record at Palm Springs, you only see site 3 and site 4 for the site selection field or, or resource or whatever the, whatever the term that we end up settling on is.
1:36:11 Dave McLean: So there, there is a natural linkage between this layer and this layer that creates a user filter for the person to work off of.
1:36:17 Dave McLean: But as a result of that, because the record gets tagged to the lowest level node in each hierarchy possible, it then rolls up through each hierarchy as well.
1:36:29 Dave McLean: So we can have people from a security point of view who are responsible for wind or who are responsible for PV or hybrid or whatever.
1:36:36 Dave McLean: I made a note here to come back to high voltage. This is the security side, right? Both. Both are security.
1:36:45 Dave McLean: In this model, where we take that, This is an alternative, I guess. No, they can work in conjunction. You must have this one.
1:36:56 Dave McLean: You must have a location structure. You can have a department hierarchy. Both operate, You said that we can have location and we can have, like, department or whatever the other No, this is not the department.
1:37:10 Dave McLean: The department still stands. You just erased it, right? It's the same place in Intellects. I just expected the departments to fall separately, but for the moment, let's ignore the departments as they were and focus just on operations.
1:37:24 Dave McLean: It is. This hierarchy and this hierarchy both deal with reporting and with access. Two separate things, but from a security point of view, each person sees records that live at the intersection of both of their hierarchy assignments.
1:37:47 Dave McLean: So if I am a Palm Springs user who has access to wind, I see all of the wind data within Palm Springs.
1:37:56 Dave McLean: Okay. If I'm an operations-level user with access to wind, I see all of the wind On the flip side, if I'm an operations-level user, again, whatever term we want to use for the umbrella, if I'm an operations-level user, if-level user at Palm Springs, and, and again, hypothetically, let's say there were
1:38:17 Dave McLean: sites across all of the different technologies operating at Palm Springs, then I would see all of it. So, the, the operations at the top, are they the same?
1:38:26 Dave McLean: Are they the same starting point, or is it two separate things? They conceptually are, but they are two different things.
1:38:37 Dave McLean: They, they are the, at least as far as operations is concerned, they, they basically are the thing that grant you access to absolutely everything.
1:38:43 Dave McLean: You got it. Uhm, but then you said the colors under like the sites denote like specific, right? Because the physical site is going to align with the, with an establishment, right?
1:38:54 Dave McLean: And so this creates a filter where you can create an incident whose establishment is Palm Springs, but I selected Site 8, which actually isn't at Palm Springs geographically, it could be at a different state.
1:39:08 Dave McLean: So that, that filtering between these two concepts where they actually connect at the lowest possible level is where you maintain data integrity.
1:39:15 Dave McLean: Okay, so this is where we could have a site supervisor only have access to sites 3 and 4. You got it.
1:39:24 Dave McLean: But the general manager of the, to hatch the site could see everything under one. Correct. Including PV and that area.
1:39:33 Dave McLean: Yes, that will So in terms of, like, the site configuration, uhm, we, so you had mentioned resource earlier. When you say resource, is that for off-site?
1:39:49 Dave McLean: Am I using that one? Yeah, we think the most granular level project would be a resource. So, they've got different off-site arrangements.
1:40:00 Dave McLean: They would be scheduled differently. Uh, a tech might be assigned to, uhm, one PV resource. Like, let's watch for one or two.
1:40:09 Dave McLean: Right. Uhm, but not, something else about work, but not for work here. So, I would have, I would have my data for injuries by, I could see, oh, I had 10.
1:40:21 Dave McLean: Injuries at Lockhart One and none anywhere else in this facility over the last three years. Yeah, I, I mean, that's, that would be pretty nice, like, you know, to be able to get that granular, like, what's going on at one and not two, you know, uhm, but.
1:40:37 Dave McLean: And then in terms of your reporting, is it by, you know, like, by resources? Yeah. Yeah, so when we're saying resources, are we saying project entities or is that?
1:40:52 Dave McLean: Yeah, I mean, I guess it could depends on, yeah, depends on who you're talking to. Because, like, project entity, when we're talking to, let's say, like, finance or whatever they're talking about, or asset management, they think of it in terms of, like, the LLC, like, the legal entity.
1:41:08 Dave McLean: That's what I was Yeah. Versus, um, when we're talking about project and, like, as, like, the asset or the resource, like, the individual, like, plants.
1:41:22 Dave McLean: Like, E1E0s. Yeah. Or, like, how, like, like, we have an LLC for, um, let's see, it's, like, Cabazon or something, but Cabazon actually, like, that project can see actually has, like, two or three actual, like, projects or resources or assets underneath.
1:41:41 Dave McLean: Yeah. How many has multiple? Yeah, so OG is 1A and 1B.
1:41:55 Dave McLean: At this time, there's projects, there's a meeting. Resources below that. Yeah, the, the assets or the plants underneath it, it's probably maybe 15, maybe.
1:42:08 Dave McLean: Okay, so company-wide, how many resources do we have today, roughly? 50? 60? Yeah, probably in the 60s because we have about 48 project entities, like LLC entities.
1:42:25 Dave McLean: So if somebody got hurt at the admin building. Which is not a resource. Yeah. Or the warehouse, right? Not a resource.
1:42:36 Dave McLean: You're right. Then where, what would they, how would that work? Usually make them their own sites. Like. Under that hierarchy, you could.
1:42:48 Dave McLean: Yeah. But on this side, it would be wherever that is. So, like, the Palm Springs warehouse, I would think, would be under Palm Springs on this side.
1:42:56 Dave McLean: But then it could be its own. What are we calling that, WinPB? That's. Technology, I think, is the term we were using over here.
1:43:04 Dave McLean: Okay, but they, in that hierarchy, it's equivalent to the establishments. Like, in terms of, like, how it provides access? Nope.
1:43:15 Dave McLean: Uh, yes, conceptually. Yeah. Yeah, yeah. So, yeah. So, if I have, if a record lives within a given site in PB, and I am somebody who's granted access to PB, I get access to those sites.
1:43:25 Dave McLean: Oh, can I have to manage security for both of these sites? So, what ends up happening is, from a security point of view, in the employee feed, each employee, each person comes through with two properties associated with it.
1:43:36 Dave McLean: They come through with, sorry, I guess technically it's four properties now that I think about it. There's a home location and a home business hierarchy.
1:43:44 Dave McLean: Where do they work for each of these ones? So, if I'm an employee at Palm Springs, and I work in the wind side of it, for example, let's say it was that specific, those are the two properties that I would get.
1:43:56 Dave McLean: What does that property do for that employee? Nothing, nothing from a security point of view, but it's when somebody gets injured, we snapshot them.
1:44:05 Dave McLean: You've got it. You're going to particularly this one. His establishment.
1:44:21 Dave McLean: He's assigned to the Tehachapi Mojave Wind Establishment. However, he, I mean, he supports many different projects. So what if he gets injured.
1:44:33 Dave McLean: On the Canyon Country. Site when he's there, uhm, because, I mean, that's where the incident will be tied to. So how would that, how would that work?
1:44:44 Dave McLean: It's not necessarily a given, but where is ours work going to live? Usually the incident gets. It's charged to wherever the hours work live, because otherwise you end up in a scenario where.
1:44:58 Dave McLean: I'm just saying, in terms of, if we wanted to pull data. Yeah. We want to know how many accidents have occurred at Canyon Country.
1:45:07 Dave McLean: Yeah. Well, so. Sebastien, through this exercise, Sebastien, his establishment is the Tehachapi Mojave land. Yeah, but you're still talking about a 1%, so let's just accept a scenario where every one of these fields override.
1:45:23 Dave McLean: So if the 99% scenario is that, hey, the person, when they get injured, we're going to tag it to the establishment that they belong to.
1:45:31 Dave McLean: But for the 1%, we just want a little tick box next to it to override to let us pick. That way, if they're mobile and they're, if they are somebody who moves around, we can select the establishment that the injury belongs to.
1:45:40 Dave McLean: We can do that. I would have major concerns if 50% of the records The override, that's where, you know, but if we're talking a very small number.
1:46:00 Dave McLean: I it's ever happened that we've had to reclassify someone because of an injury that I recall. I'm not talking about reclassification.
1:46:09 Dave McLean: Well, I mean, put them on a different log. Like, they didn't hit them have an injury at their establishment. I don't think it's ever happened since I've been here.
1:46:15 Dave McLean: It's very, it could happen. Sure, so for for the sake of this conversation, let's assume that there is an override on any given injury or or any, any given scenario where we are snapshotting the person's establishment onto the record to attribute it to that, that establishment, whether it's an injury
1:46:36 Dave McLean: or whatever, the ability to override. And even that behavior can vary from one app to the other. So maybe we have it in place for instance, maybe we don't want that in inspections because we never want it to snapshot, we always want it to choose in inspections.
1:46:52 Dave McLean: Depends on the context. Structurally though, right, from a security point of view, that's, that's what it's all gonna come back to and how we represent the data on the bar chart or on a matrix report or pivot table kind of thing.
1:47:04 Dave McLean: It's that this structure is going to determine what those classifications are. Can we just go through the security again? Yeah.
1:47:11 Dave McLean: So let's, okay, so I am a supervisor. At Palm. I'm a supervisor at Tehachapi. Yep. Alright, and I want to, I only should see the injury data within my team.
1:47:28 Dave McLean: Is that going to happen in this scenario? Yes, let's look at the foundations. So, Tehachapi exists, first and foremost, as an establishment in the location structure.
1:47:39 Dave McLean: In addition, the various sites or resources, or whatever we call them, exist within the department hierarchy, or, again, we can call that whatever we want to say.
1:47:48 Dave McLean: Secondary Hierarchy, Business Hierarchy, Secondary Hierarchy, yeah. Maybe we can call it Site, Site Okay. So those sites exist, or resources exist, and, not only do they exist, they are aligned to each technology that is predominant at that site.
1:48:08 Dave McLean: And I'm going to use that term intentionally here. I don't know if theoretically it's possible that Site 8 also has a wind component at it, but from everything I've heard so far, as a general rule, it sounds like we could probably resolve this locally.
1:48:20 Dave McLean: At least level on this side to a one-to-one relationship. So in this scenario, before anybody actually goes and logs anything, before that user logs in, the system understands that Tehachapi exists and these five sites exist aligned to this org structure.
1:48:36 Dave McLean: And we get our user logging in, who is a supervisor of, for simplicity in this first example, a specific site.
1:48:43 Dave McLean: We won't say a team or a group of sites, we'll just say a specific one. Site 6. So in this case, when he or she logs in, assuming they've been given the view of permission, for example, to the incident application, they would view any incidents that were logged at Tehachapi for site 6.
1:49:04 Dave McLean: Okay. Four. Four, no, four. Oh, sorry. Yeah, nope, nope, that's a good, that's a good clarification for site 6. So in this case, the security model is the intersection of this record and this record.
1:49:15 Dave McLean: Show me only the ones where in those two fields on the injury, we see Tehachapi and site 6. That's scenario one.
1:49:25 Dave McLean: And that's, that's the most restrictive model for somebody who's going to have a view permission. They only see one on, on both sides of that fence.
1:49:32 Dave McLean: Okay. Okay? Is it because, like, this structure on the right side takes, uhm, like, that's the, that's the, I guess, initial, or it overrides, or is the structure on the right the one that overrides?
1:49:48 Dave McLean: They work in conjunction with each other. The granularity. They work in conjunction. Okay. If, if we change the example to another, so let's say, for example, that, probably wouldn't happen where you'd have somebody, well, no, you wouldn't, it wouldn't in this case because Site6 can only align with Tajabi
1:50:07 Dave McLean: , so we go the other way. Let's say you have somebody who is at the operations level in the secondary. You have somebody who is like a general manager who should be able to see everything for Tajabi, regardless of what technology, what site, they need to be able to see everything.
1:50:25 Dave McLean: So in this sense, it's not that Tajabi overrides anything else, it's that the two properties work in conjunction to decide what, what filter counts.
1:50:34 Dave McLean: The level, and then it just gives them access to the lowest level, or the most restrictive level. You got it.
1:50:40 Dave McLean: I'm trying. Okay. Now the, the tricky one that we want to consider is what if I have access to multiple sites, but not at the level of a specific technology.
1:50:52 Dave McLean: What if my access is supposed to be site 6 and site 8, but not site 5, and certainly not site 1 or 2, because why would we do that.
1:51:00 Dave McLean: So I log in, there are ways to be able to grant multi-site access on this hierarchy, just like there are on this one.
1:51:08 Dave McLean: It's meant to be exception-driven, but before we go into that, is that kind of a scenario a common one, or is it more likely that if somebody has access to multiple sites within a given establishment, it's at the level of the technology?
1:51:23 Dave McLean: It's that I have, I am responsible for site 5 and 6 because I'm responsible for PV at Tehachapi. I think it could exist that you would have sites that are under different technologies.
1:51:33 Dave McLean: For some of our establishments on this site. I think that is a possibility, especially in the future. Okay. So how would subs be listed?
1:51:46 Dave McLean: The subs would come up under subs. No, they'd come up under, sites would roll up as a, to a substation, but I think the substations could still exist in this hierarchy.
1:51:58 Dave McLean: This just seems like way too much to manage if we're doing subs, and sites, and resources, and admin buildings, visit.
1:52:05 Dave McLean: Warehouses, it just seems like a lot to put in the sites, and manage. I could see resources, like, because we can just get a straight feed, right?
1:52:16 Dave McLean: Like, we can get resources, they have an ID, number. This seems, this seems to make a lot of sense. It's not taken by everything else where it's going to be integrated.
1:52:38 Dave McLean: We've worked like this, you know, from when you consider finance or operations or any of the roles that people have in the technician and engineer, general manager, the vice president.
1:52:51 Dave McLean: I think that this is probably going to work. The best we can do. Yeah, I think I think it helps with that because, like, we have.
1:53:02 Dave McLean: The remote people, right includes groups like asset management, and they would be a group that would regularly have multiple. Sites under various technologies, like they would cross, like, intersect and cross them.
1:53:16 Dave McLean: Um, basically, yeah, maybe the sites can be considered individual assets. Um, I mean, it's the same assets or resources.
1:53:31 Dave McLean: Basically, it's our individual plants. And so we have asset managers that are under the chief management commercial officer. They work remote, so technically on this side, they would be under the remote establishment.
1:53:47 Dave McLean: But they have two teams that are separated by like winds and a standalone BESS, and then they have PVBESS on the other team, but they have split it up between asset managers that might have, uhm, sites 5 and 8 and 9.
1:54:10 Dave McLean: And then they're on the win side, it's pretty, it's generally pretty easy right now, because they would just have all win sites, and then there's like a couple of standalone BESS that one of them might be in charge of.
1:54:22 Dave McLean: The asset managers cannot see any entry data, or the people that are diving in. But they, that, that would be a no-go.
1:54:30 Dave McLean: But it's neat to know who got in charge. But it's just the structure in the system for all reporting data, right?
1:54:37 Dave McLean: Not just OSHA? But it's an EHS system, right? So like fundamentally, it, it, it's all viewed through the lens of the applications and scope here.
1:54:47 Dave McLean: So it, it'll interest everyone. Boom. Totally. And you can, you can, you can carve it up and you can testify.
1:54:54 Dave McLean: You got From us for Voyager, Voyager 1 and 2. Like environmental? Uh, yeah, I would say incidents. Oh, okay. You know, I mean, we don't give them specific.
1:55:12 Dave McLean: Yeah. Specific number names or anything like that. Right. Let's see if we had, we had Ocean Portable. No, they can't have access like we're talking about here.
1:55:19 Dave McLean: Like, we're talking about a supervisor having access to his sites, and he would know who's injured on his team. But, like, we don't even want him to have a date of birth if we can.
1:55:29 Dave McLean: That's the most advantage Maybe at a high level? Yeah, definitely. Yeah, but, like, the actual data itself. Oh, yeah, no, the granular data, no.
1:55:42 Dave McLean: They're not even, like, working on the RSPA or anything. But I was thinking, like, Vanessa, that this is the foundation of the entire system set up.
1:55:50 Dave McLean: Not just for incidents, but this. It is, but it's against, sort of, real user requirements for those audiences. So if the asset manager doesn't actually have a need to see the data carved up this way, then it's, sort of, a moot point in that they're just a user that, like, we would need to be able to
1:56:11 Dave McLean: , if the asset manager happened to be doing a site visit at one of these sites and was injured on site, we'd need to be able to log the injury for that user, and we'd need to be able to properly attribute it to an establishment and a site and so on and so forth.
1:56:25 Dave McLean: But, like, once that incident's done, that asset manager's not seeing that record. Similarly, training records. The asset manager's probably not going to have any visibility.
1:56:33 Dave McLean: His ability to train records. The asset manager's probably. They will have their own somewhere in this, like we focus on Ops, but there's all those other teams and that every supervisor needs their own teams data.
1:56:49 Dave McLean: Including if someone was injured. Fundamentally, the asset manager scenario is not actually a core use case. It's a it's their use cases living in their own segment of the org structure, looking at their own data, looking at the stuff that's specific in their relevant to them that doesn't fit on our 
1:57:07 Dave McLean: board yet, we'll condense and compress afterwards. So if we're just looking at it in the operations context, the open question, then, is still if there's a need for a use case.
1:57:21 Dave McLean: Is there in operations, somebody who actually lives in this part of the org structure here, to be able to see two sites that don't fall under the same technology?
1:57:29 Dave McLean: It sounds like the answer is yes, on a somewhat limited basis there. Yes, so, Well, we haven't decided these bubbles yet.
1:57:39 Dave McLean: Right now, these are just examples. Exactly. We can work with Ward. What bubbles do you want? But what are you saying, how you can't have access?
1:57:47 Dave McLean: I don't quite follow. So what are we looking for? An example of someone who. I'd like to see site 6 and site 8.
1:57:54 Dave McLean: Well, aren't Like, you're a person. I think You have shared sources. If you create it as another one. We need sites underneath it.
1:58:09 Dave McLean: Right, it prevents them from being able to see across. Yeah. So, so we, yeah, Vanessa stated it. We, they're, they're the group that would definitely have to use That's a small site.
1:58:19 Dave McLean: Why can't you see it across? Because that would defeat the point of security. The security side of it. If you could see across by, if you were.
1:58:30 Dave McLean: Yeah, OK, I have a supervisor at Tenachapy who has an employee, let's say an employee at Palm Springs that works for them.
1:58:37 Dave McLean: Supervisor at Tenachapy. Yeah, so I need to see that. I need that employee's records. OK. Are they going to be able to see that employee's records?
1:58:44 Dave McLean: No, because in this scenario, again, if we're going to come back to the injury side of this, if most incidents are going to automatically assign their established records to the established person.
1:58:56 Dave McLean: I mean, like, training records. Training records. Yeah. So, again, same idea. The training record is going to inherit the established person.
1:59:04 Dave McLean: Right, so if the person is trained. The trained, right, but their manager is not going to be able to see it.
1:59:10 Dave McLean: They can't see the process. Okay, so if they were up there, I'd want to walk you through that. But not just for certain sites.
1:59:23 Dave McLean: I guess we would put them in operation on the right side, and then would meet them and be able to restrict it with the hierarchy on the left side.
1:59:32 Dave McLean: It would interesting if all of this happened and we restricted access to just the open But how does this all manual?
1:59:44 Dave McLean: Right, so luckily I mean, but it's like I see this applying to like Jesse or maybe Jeremiah upgrade like high voltage and where he just he does not need to see all the incidents at Tehachapi, Palm Springs, and Wynn, but he does need or Mojave, but he does have people assigned to each of those establishments
2:00:06 Dave McLean: , but you know, but his, his sites are, he wouldn't need it, he would be more granular down to the site.
2:00:16 Dave McLean: But what about the whole rest of the organization? So we've got New York, Reno, and San Diego. They're at the top.
2:00:23 Dave McLean: Operations, Corporate, you know, you got the rest across the area. So we're following the majority of the both the. Employees in this case, but yes, for sure.
2:00:34 Dave McLean: If we were to compress this model down and say, let's say this is good enough. Okay, cool. Let's compress this.
2:00:40 Dave McLean: So that it's just one box. Then it's all the other boxes that go that as well. So then, like, if we.
2:00:48 Dave McLean: This is a version that we have. You can't, right? Because, again, you can't have a privacy mandate and still open it up.
2:00:57 Dave McLean: It's one or the other. These are, these are two fundamentally. No, I mean, like, does the hierarchy on the left.
2:01:04 Dave McLean: Can we apply? Oh, yeah, for sure. You can continue to build out in the corporate. Yeah, you can continue to build out for sure.
2:01:09 Dave McLean: Or if this, like, I can't imagine that this is the extent of what that department hires. We have this good enough for operations that we make the corporate or shards, whatever we're calling that.
2:01:20 Dave McLean: You got it. And we can assign those people either sites or the technology or whatever. Correct. Other things need to come out from here as well.
2:01:29 Dave McLean: Absolutely. Just to make sure that, like, somebody who's managing a lot of remote people, that they're their people get dispersed across establishments, like, say, San Diego and New York.
2:01:42 Dave McLean: So, if up here we had development, his people are, uhm, okay, so there are more established establishments, like, operations doesn't, I don't think they have anybody in New York, for instance.
2:01:57 Dave McLean: Yep, this is a snippet of, yeah. Okay, snippet. Okay, so, development and, let's just take development and CFO office. Yep.
2:02:04 Dave McLean: Okay. And both of them, let's say both of them have people in New York, so New York establishment is down here.
2:02:11 Dave McLean: Okay. Let's see, do they both have people in New York? Both have remote, let's just, no, remote gets assigned to an establishment.
2:02:24 Dave McLean: Thank you. I think Gus in development, and I think the, let's see if they'll have anybody in. I'm just trying to figure out, I just don't want the, the security to be.
2:02:37 Dave McLean: Yeah, you have, like, no. I'm trying to. Doesn't it, but I don't think Gus has anybody in, you know, anybody know Gus who has, I think most of his people are San Diego, remote or San Diego.
2:02:51 Dave McLean: Yeah. Well, like, in the HR system, even though. They're remote, they are also assigned to an office. But that is not how we do establishments.
2:03:03 Dave McLean: So we're not going to insert that. So we have, like, a way we do establishments, and it's based on where people live.
2:03:08 Dave McLean: It's based on what HR has assigned them to, but if their office is not San Diego. And they are remote, then they go through a different methodology.
2:03:16 Dave McLean: So where, how do all, if there are other establishments just have multiple, you know, owners at the top?
2:03:29 Dave McLean: At this level, I guess, are they going to be, are the supervisors in their teams going to be able to look at training records for their people?
2:03:38 Dave McLean: New York has a gob of people assigned to it from different teams. Because that's, that's, that is our flow to the CEO, because all the remote employees outside of California typically report up to the CEO.
2:03:55 Dave McLean: And so, because we don't have, like, we have 4 people in Colorado, we don't have an office, so we have to have a methodology to assign them to a log.
2:04:03 Dave McLean: A lot of them end up in New York. Okay. All right. So, New York is a crazy log, big log.
2:04:09 Dave McLean: I mean, there were boats that are assigned that you have, you guys have assigned to New York? To the establishment.
2:04:17 Dave McLean: Of the OSHA establishment. It's like Jordan and Reggie boat. I don't, where's Jordan's home? Texas. Yes, probably, or yes, probably, probably New York.
2:04:31 Dave McLean: So, yeah, physical. If I'm hearing you correctly, it has people that roll up into CFO, that roll up into HR, that roll up into all different other umbrellas.
2:04:42 Dave McLean: Well, in the establishment, yeah, not in the physical office, the establishment. In establishment, In the establishment, it would be across a number.
2:04:54 Dave McLean: Yes, like, take two, just CFO and development. Those would be two, like, the chief development officer, chief finance, both of them have significant people in the New York establishment.
2:05:05 Dave McLean: I'm going to stop. I'm just going to ring my bell. See PB, et cetera, and so on and so So far.
2:05:38 Dave McLean: I don't know what to call that yet. Call it whatever it is in this case. We're coming at these other departmental.
2:05:45 Dave McLean: CDO, development officer, HR might have people on the New York log, or they might not be counseling. So they might not have somebody Legal.
2:06:01 Dave McLean: You can take me out as long as you think I'm- Yeah, we're going to go live, okay.
2:06:14 Dave McLean: Are all of Katie's teams in San Diego? I have to go person by person. It depends on where people live.
2:06:22 Dave McLean: It depends on their boss. It's a methodology. Okay, let's So, in this case, I would simply give you a question here for what to call this parent umbrella here.
2:06:34 Dave McLean: If I've got 100 users assigned to the establishment in New York, and 20 of them are lawyers, 20 of them are.
2:06:42 Dave McLean: under CDO in some specific branch. Like, how this gets broken down can be very specific to each one of these.
2:06:48 Dave McLean: That's okay, because it is fundamentally a business structure in this case. But, at the end of the day, they all roll up into one of these.
2:06:55 Dave McLean: So, your distribution of people that are assigned to the New York establishment are going to cut across all of these ones.
2:07:02 Dave McLean: It still works no different than what we saw here. Each person is allocated to the establishment, as well as somewhere in a structure.
2:07:11 Dave McLean: Are we in a department now, or are we still in the second phase? It's still a secondary hierarchy, just zoomed out off of this, right, because originally we had that breaking out here, and I'm running out of whiteboard room without a full wall, so if we zoom out a little bit, it's gonna break down into
2:07:26 Dave McLean: some structure as well, I'm guessing, but at the end of the day, if each person is tagged somewhere in here, and somewhere in here, to establishment, the rules still work.
2:07:40 Dave McLean: Okay. We still have our high voltage scenario that will likely creep up in other places, so that's an open question that we'll have to sort out.
2:07:46 Dave McLean: So people in that question mark, whatever we're going to call that, could still be assigned. Okay. So guys, so guys in Colorado, and he has a big team, that could be, let's say, in the San Diego, and for lack of, like, I don't have to look up all the details, but just for an easy example.
2:08:11 Dave McLean: So we've got that guy, he's got a team, they're across multiple establishments. What is he going to have? So, yeah, he's in the CDO office, he's the head of Solar Development.
2:08:24 Dave McLean: He has people that exist across the board here. Across different establishments.
2:08:36 Dave McLean: Yeah. Could be like, if you just add Sandy. So, let's just take those two. Yeah, he has got people in there, but he is an establishment.
2:08:46 Dave McLean: Yeah. And amongst them would be more of a structure here. Let these roll up into. Which we don't have a name on, but yeah.
2:08:56 Dave McLean: I would put that person here. Because that is going to cast a filter across all of the data here. So, while we're technically granting this person access to all of the establishments, it's only for the data that aligns with CDN.
2:09:17 Dave McLean: Right? So, presumably then, our three operations locations, or establishment locations, you'll see that they exist, but for the handful of employees that they've got in New York and the handful of employees that they've got in San Diego, or documents, or whatever the case may be, because the intersection
2:09:38 Dave McLean: of the these two things, that's what's going to dictate the record. But he can't, he can't be, he's got to rise up.
2:09:44 Dave McLean: You got it. You got it, and I'm presuming that there is some sort of literature to share both these two.
2:09:51 Dave McLean: Well, for the sake of simplicity, but maybe that ends up happening at some point. At a level in the location, that is as high as needed to be able to see all of the establishments that they would have some jurisdiction over, but then restrict based on the secondary hierarchy, you know, that they belong
2:10:06 Dave McLean: to, okay. Similarly, if I had, uh, if I had an HR person who needs to be able to see the training requirements of the HR team that is associated with operations, let's just say that it's a little narrower in this case, so I'm going to put my HR person at HR OK.
2:10:26 Dave McLean: And I'm also going to, I'm also going to map them to the operations level, because I'm assuming in this example that they are just an operations HR person, they don't have broad responsibilities.
2:10:42 Dave McLean: They a responsibility for other establishments outside of what's, what's going on in operations. So in that case, this person lives up here to be able to see all the way down through all of the establishments within operations.
2:10:54 Dave McLean: But the HR secondary hierarchy node is what casts a filter on the record level. So in this example, which we only have four people in HR, but you know, that team will grow, but, uhm, would they be able to see all of those operation records?
2:11:12 Dave McLean: Just the ones that are associated with it. With HR. With Which would be maybe none, because there's no embedded HR people in Ops, in this, in this service.
2:11:20 Dave McLean: You go. Just like with AHS, sometimes HR people, depending on, like, if they're a learning and development specialist, for example, they can also kind of break the rules a little bit.
2:11:29 Dave McLean: So in that scenario, typically an HR person isn't going to have view access. That learning and development specialist is not going to have view access to incident management.
2:11:38 Dave McLean: They're not going to have access to the inspection application at all, typically. Uhm, and so on and so on. What they will have high level of access to is training.
2:11:46 Dave McLean: I could see HR saying we'd like to be able to access training records for the whole company. You want to be able to see all that?
2:11:53 Dave McLean: Yep, that says HR. Let's see. Here. Okay. The app, the apps that they're given access to are restricted. They're restricted to just what an HR person needs.
2:12:04 Dave McLean: So, while they have this level of access up here to be able to see the full breadth of data, the fact that they're not being given permission to incidents or inspections or whatever, environmental compliance permits, whatever the case is that comes down the road.
2:12:18 Dave McLean: They're only being given access to the training application at that level. So, the types of data that someone is granted access to is managed or restricted by the hierarchy on the left.
2:12:34 Dave McLean: And. And the right, uh, sorry, no, the types of data is, it's, uh, it's what groups they're part of, which doesn't show up on the left.
2:12:41 Dave McLean: You got Separate from these two. You got it. Okay. It's a group model. And we get to define what those groups are.
2:12:47 Dave McLean: Is that a, uhm, third? Or, or, cause I know we have, like, the home, and then we have, if we have these two, is it, like, another setting that we would need to put in for someone?
2:13:00 Dave McLean: It's, it's, uh, no, it isn't that. It's actually multiple relationships, so they can be part of many groups. Okay, but can we establish those, I guess, as a profile, so if someone starts new, we can just say, we want them to have the HR profile, and it might have whatever all the groups are that we would
2:13:17 Dave McLean: want someone in HR to have. I have a question about that. Yeah, we example here, so we got the HR person who is in HR and supporting Ops, and they could only see the HR people in Ops, okay?
2:13:31 Dave McLean: Yeah, we have that example, so they're restricted. Like, let's say there's one HR person, you know, supporting Ops. They're only, they can only see that in Ops.
2:13:38 Dave McLean: And person. Yeah. Why is it, when we come up here, now they can see everything? It's all, it's all perfect for me.
2:13:46 Dave McLean: But why isn't it just like the HR person that supports Ops here and the HR person that supports Ops here?
2:13:50 Dave McLean: Why does it all of a sudden become everything? Why doesn't security just open up? Again, this is the access level, as opposed to where they work.
2:14:07 Dave McLean: So if my HR person were to work in New York, and I don't want them to see New York, those are actually two different properties that we're associating with a person.
2:14:15 Dave McLean: We're saying, there's the home location, the where do you work one, and the login location, the when do you see one.
2:14:20 Dave McLean: In the scenario where I'm putting them up here, home location is still New York in that case. Situation. The reason why I'm giving them a login location here is because I need to grant access to data across the board for them.
2:14:32 Dave McLean: So if I have a login location, can I have a login location to here? Yeah, so do I see? Sure, sure.
2:14:44 Dave McLean: OK, yeah, let's say HR is over here and they say, hey, I, I want everything for our ops, but they'll probably say I want everything for everything.
2:14:53 Dave McLean: But anyway, will they get all the people there? If I put them there and not just the people in the HR?
2:15:00 Dave McLean: Because they're also here, they're seeing HR to have, so it depends on the comment and how we, how we set the region where we're talking to them.
2:15:11 Dave McLean: Yes. But that's not about this, these view accesses and things you were just talking with this, but that's something separate where we're saying, hey, HR is going to want to see learning and incidents or whatever.
2:15:27 Dave McLean: You got it. You got it. Thank you. Bye. Right, but that's just what confused me was, you said, we'll put them here and they'll have access to everything.
2:15:35 Dave McLean: That's because we need that learning and development manager needs to. The training-related data, hypothetically, across the board, regardless of what establishment, that's why I need to put them here for their login location.
2:15:54 Dave McLean: If I don't even just see across the board, then I don't put them up there. I put their login location somewhere lower that's more descriptive.
2:16:01 Dave McLean: A supervisor who works here, uhm, and has a login location here, uhm, they can't see everybody because they're going to do the intersection.
2:16:11 Dave McLean: Okay. Yeah, it's such a big bag in this case. If I have, Full jurisdiction of access should be limited to New York, but further than that should actually just be wealthy.
2:16:29 Dave McLean: You got it. You got it. It's gonna work. You got it. If, hypothetically, you had somebody, that was responsible for all of New York, regardless of the secondary hierarchy nodes, There isn't any.
2:16:39 Dave McLean: Uh, from the south of the lake, Based on... Okay, then that's fine. You wouldn't have to put anybody in a higher location for at least that.
2:16:48 Dave McLean: It's more like, I believe that New York folks, they might have broader access outside of New York, depending on what their specific job is, but for many of them, they're just seeing New York, and they're just seeing their, their business fairly.
2:17:03 Dave McLean: So did we resolve the issue of, Of the head of, the head of, uhm, solar development that sits in the chief development officer office, and he, let's say he has people on 2 establishments, did we resolve that he will take those?
2:17:18 Dave McLean: Yeah, head of solar development that guy. Yeah. And, uhm, he's got, let's say, for example, he's got people in New York and San Diego.
2:17:29 Dave McLean: Reporting up to him. Reporting. But he himself is on the New York log. So, yeah. Oh, yes. The fact that he's in New York, that's just his home location.
2:17:41 Dave McLean: Yeah, that's his home location. Then we said we have to face him. But if we put him up there, he's not going to have everything, just because he's got the intersection.
2:17:51 Dave McLean: Okay. Here. There are other sort of one-off strategies that become even more administratively burdensome.
2:18:05 Dave McLean: There's a way where you create a specific route that just gives access to these two. And you can toggle back and forth, but it probably isn't one point, given the way that we're describing this, that goes for everything.
2:18:18 Dave McLean: And I just, I've never looked at our, I've never looked at our establishment data like this, so I'm not really well briefed on how we're I many supervisors go across what page, like how many supervisors have people in their teams that are across these establishments.
2:18:35 Dave McLean: I've never thought about it in Well, let's take Shane for instance. He, he has folks across multiple establishments. But he has a small team also, like just, you know, five people or less, right?
2:18:52 Dave McLean: So he's one, I'm one. HR is going to have at least access to everything, so they're not going to matter.
2:19:07 Dave McLean: So, like, Ken Wagner, head of real estate, probably he'll be across multiple docks. I'm just not sure without actually opening them up and looking at people.
2:19:22 Dave McLean: That's okay. It's coming back to our goals for this session. The goal for this part of it, we can't actually.
2:19:28 Dave McLean: Litmus test every one of these scenarios until we get into each of the individual workflows involved, right? So this is about establishing a straw man foundation for the use this afternoon and through the rest of the week here, including for what's possible from the integration problem.
2:19:43 Dave McLean: We get to tomorrow. It's entirely. Possible that whether today or tomorrow or Thursday that. Yeah, it's Tuesday, right? You're right.
2:19:53 Dave McLean: Okay. Whether it's sometime this week that some aspect of this requires us to come back to that. And that's okay.
2:20:03 Dave McLean: That's not atypical. That's not a problem. It's about understanding what our boundaries are, flexing, keeping this top of mind through all of those different workflow streams.
2:20:14 Dave McLean: From what we've got here. The question mark, the action item from our end, is the how do we want to cleanly handle the high voltage scenario.
2:20:23 Dave McLean: And I keep coming back to high voltage because it's the most sort of direct one based on what we've talked about, but it fundamentally still is the how is it that I want to handle a situation where somebody's needs to be able to see across multiple locations here and across multiple here without being
2:20:39 Dave McLean: bumped all the way to the top, because that would grant them too much. There are, you know, a few people, by the sounds of it, and it might come up in different contexts too, where I need to be able to be able to give them access to this and to this without putting them up here.
2:20:54 Dave McLean: And that's an action. That's okay. We don't have to have an answer for that right now. We can, we can do some research on that to figure out what that looks like.
2:21:02 Dave McLean: That's all right. The two filters are max? I, it's, so the real answer to this question is there are ways that I can create groups that bundle different combinations of these together.
2:21:16 Dave McLean: The more we leverage that, the more information we can get administratively burdensome it gets. So when I say I want to do some research, the full statement is, I want to do some research on a clean way that doesn't create a huge administrative burden for managing that.
2:21:32 Dave McLean: If that turns out to not be possible, be honest on that, then, hey, cool, we come back to the group option, we figure out what that actually looks like to make it easier to work Highly related, uhm, we have, real, real quickly, we have position codes, right?
2:21:49 Dave McLean: If somebody gets hired, a brand new employee, and they have a position code that we've already created before, like, you know, General Wind Tech, California.
2:21:58 Dave McLean: We put that in, it auto-populates all kinds of stuff across here. It saves us, it makes it scalable, it makes it faster, it saves us from having to reinvent the wheel, or do special exceptions every time.
2:22:06 Dave McLean: Every time a new person comes up. That is a concept we have in one part of our onboarding. The idea here, I believe, is to have something similar that we can shoehorn 99% of everybody into, right, Thank you.
2:22:23 Dave McLean: Because, in a way, welcome to the company, here's your badge for this, here's your badge for this, and here's your special key to that one place that you need by itself.
2:22:31 Dave McLean: Yeah, so if we were to consider that as the position code, as a parameter that would allow us to determine the rules, As much as possible.
2:22:39 Dave McLean: Right, what their login location should be, what their login secondary hierarchy should be, and what groups they should be part of.
2:22:47 Dave McLean: Right, basically, what part of this work structure can you see, what part of this work structure can you see, and which apps can you see that data from.
2:22:55 Dave McLean: Right, maybe some position codes need access to training management, some don't. We use a position code as, like, the profile.
2:23:02 Dave McLean: Yeah, we can look at it that way, yeah. Okay, are we on track to line that up to automate as much of this as possible?
2:23:08 Dave McLean: That would help, yeah. Okay. So the, Home location is going to be based on an individual all-the-time period, right? Yeah.
2:23:15 Dave McLean: That's separate, that's a separate identifier. You got it, you got it. That's, it's typically just a property in an HR, in an HR feed.
2:23:22 Dave McLean: Some, a lot of companies, so is the login location. A lot of, the most common way we see login locations or in the companies that use a secondary hierarchy, the login secondary hierarchy, is because 99% of people, their visibility is the same as whatever their, their home location is and home is.
2:23:40 Dave McLean: Just set it to that. And administratively, you're only managing that. You're managing the exceptions, right? That, I don't actually know if that's going to be the majority for you guys.
2:23:50 Dave McLean: It might just be that by very nature of this conversation, we're digging into things that are the exceptions, the, the things that don't fit the rule.
2:23:58 Dave McLean: But. That's the most common way we see it is just the 5 or 10% of people that have something other than that base rule.
2:24:05 Dave McLean: You're managing it administratively yourself. So remote employees have to get assigned to an establishment and that's like a little methodology to follow.
2:24:14 Dave McLean: Okay. How does that work? It's kind of like a few little ifs, thens that we might be able to put in.
2:24:23 Dave McLean: But like remote, you know, won't, it's not, it can't be automated because it says remote and then we have to look at their home list.
2:24:31 Dave McLean: State and then we have to look at who they report up through and then we have a, I'd say, a fairly straightforward methodology.
2:24:38 Dave McLean: We can probably maybe describe that work. Yeah, depending on. It can work a couple of ways, depending on how much control over that logic you want outside of Intellect.
2:24:47 Dave McLean: It would live in the transformation layer for whatever ETL is happening to send us the HR data. If it's something that really is because it's establishment, like that's a that's an EHS concept.
2:24:59 Dave McLean: In this case, if it's not something that's going to be generalizable to the rest of the business, that's really generalizable.
2:25:03 Dave McLean: It's just how you guys do this for the sake of it, I'm sure, but then it probably makes more sense to capture that logic in it.
2:25:10 Dave McLean: No, because they they put people as remote and they have to be assigned to an establishment. Okay, I thought that there was an integration for alert media that was already passing that information from Curiosity.
2:25:26 Dave McLean: There's nowhere that HRCAP includes the establishments for OSHA, currently. Is there a relation between the establishments and this? Bye-bye. In their own office?
2:25:39 Dave McLean: That's what I'm saying. There's a methodology to use to establish, take remote employees and assign them to an establishment. Yeah, so everything, all the reporting done now is, like using Excel, take HR's latest report and then take their remote, then not in California and then, Do you want to share
2:26:01 Dave McLean: the flowcharting? After you do that, you go through that algorithm and figure out their establishment with that. This is something that should go back to HR.
2:26:10 Dave McLean: It would be in Velocity. It's just so hard to work with HR on anything, so I'm just, I mean, just this is really, really difficult.
2:26:19 Dave McLean: No, it's good. I mean, actually, it should be assigned, you know. We should get it, and it should be Logic and Velocity, but it's just, it's just really difficult to accomplish anything.
2:26:33 Dave McLean: But they have, like, three fields in Velocity. There's, like, where they live is something that's different. Like, City and State is, like, columns of them, and then there's their work locations, which is where it would say, like, a site, if it's a sealed or remote, and then there's, like, event department
2:26:55 Dave McLean: locations, and that could be, like, it's right now, like, development, strategic, yeah, I think for now we could just write the methodology with guys, it's not terribly complicated, and then they would be automatically, remote would have to be twisted to an establishment, and then if there's a mistake
2:27:15 Dave McLean: , we'll figure it out up the road. So, I think between that, and tentatively the concept of the profile. Position codes.
2:27:25 Dave McLean: Yeah, thank you. For sure, for sure, for sure, yeah, so it's the when I say tentative, I mean 100% send the send the position poster because it's it's useful reporting data.
2:27:40 Dave McLean: Most likely we use that as the basis for setting up the profile with certain, right? Because it sounds like you guys will have more than just the kind of 5 or 10% that that need the, oh, just give them this level of access to their home location and to their home secondary hierarchy.
2:27:58 Dave McLean: There will be more variation that comes from that in which case. How many position codes are there today? There's almost like every, except for like maybe the tax.
2:28:11 Dave McLean: My understanding is almost every position. We have a lot of work to I think they're just getting job descriptions so that they can marry it to a code that exists and they won't say anything to anybody.
2:28:34 Dave McLean: Thank you. I mean, they're not asking anybody to screen like or set up standards like, hey, there's going to be like a layer of people called this and that.
2:28:45 Dave McLean: Got it, so it's possible there's a job for senior. Project manager and project manager. Yeah, got it. OK, yeah. Cool and conceptually.
2:28:56 Dave McLean: Project implementation and senior director. OK, you know, OK, so conceptually that that scenario where it's the same thing, it's just.
2:29:05 Dave McLean: Worded 2 different ways, and therefore it got 2 different codes, but I don't think those would have the same job description and be a different job description.
2:29:16 Dave McLean: OK, I've, uh, I've gone through an exercise myself of that kind of. Job harmonization and often times that turns out to not be the case.
2:29:25 Dave McLean: The example I had was very much one of these wording ones. It was, uh. Manager of customer success and customer success, comma manager and they're the same thing.
2:29:37 Dave McLean: It just literally came from two different VPs or whatever wrote the job description for it. And but fundamentally, when you look at the substance of it, you can do the same thing.
2:29:47 Dave McLean: And then it depends on what HR's goal with that initiative is. If it's purely just to reflect the data that's coming that's on paper, then it's two different job codes.
2:29:55 Dave McLean: But if their goal is to really look at the substance, okay, it's probably going to be two different things. They're getting job descriptions.
2:30:02 Dave McLean: Why this matters for you guys is it creates a scenario where you, let's say we receive a fee of job profiles, not just which job profile each or job code each person is in, but a separate list of all of the available job codes from the HR feed.
2:30:18 Dave McLean: Yeah. You guys will have to be the ones to decide for every one of those job codes what, what the rules are for allocation.
2:30:25 Dave McLean: Okay. So if, if there's 500 job codes, the question then I love it. I love it. I'm just going to say, like, if we have 170 people, there's probably, like, 320 position codes.
2:30:53 Dave McLean: Because there's only, like, maybe a handful, or up to a dozen, groups that have, like, they're consistent. Like, we have people that have this title, and if they flip out and we fill it, backfill it, it's going to be the same.
2:31:08 Dave McLean: Whereas, like, all the other groups, like, if they are backfilling, or they're creating a new position, it's totally different. Okay.
2:31:16 Dave McLean: So, but our plans for, like, when we get to the training conversation is to use the job codes to set, you know, work groups that get assigned training.
2:31:27 Dave McLean: We're ready to talk with you about that. Yes, I wouldn't say we're aligned totally, but we're at least ready. That's right.
2:31:34 Dave McLean: That's awesome. That's awesome. Okay, so I guess we're kind of nailing this down here, right? I have a couple of questions.
2:31:40 Dave McLean: Okay, go ahead. First, just to make sure our AI hopefully can get that on the transcript. There's a reason I keep coming back to this.
2:31:49 Dave McLean: I use it pretty heavily for documentation afterwards. So, um, teeing up our integration conversation tomorrow, what we'll need to make sure that we factor in is not only a feed for employees, but also potentially a feed for job codes as well that comes in side by side, and some sort of logic mechanism
2:32:06 Dave McLean: and intellects to notify, hey, there's a new job code. We've got to go define the parameters and profiles for it.
2:32:12 Dave McLean: That's one piece. We need to also be able to handle or factor in scenarios where a person's job code changes, and then cascade that into the profile.
2:32:21 Dave McLean: So if I go from job code A to B and they have different parameters that are assigned to it, it's the, do we, do we want to reflect that change?
2:32:29 Dave McLean: Yes. Okay, perfect. So we need to, we need to figure that out because that all plays into the interaction. We also need to factor in, and I'm only going to thematically lump this with the integration because it deals with employee creation, but it's the logic for remote workers and how we assign them
2:32:47 Dave McLean: to establishments that we need will be not so much your problem to solve, that's just once we receive the data, we'll then need to apply that logic and whatever lookups that look like.
2:32:57 Dave McLean: So tee that up for tomorrow, but we, we agree there will be some logic that allows us to take the hundreds of remote employees.
2:33:05 Dave McLean: It's a hundred books. It's okay. It's a third of the company, right? Let's take a snapshot. It was 110. That's exactly accurate, but it's a book.
2:33:13 Dave McLean: Okay, that's a sizable enough chunk that, yeah, we, we don't want you having to go in notified and go work with that.
2:33:20 Dave McLean: Uhm. My questions on the org structure side, uhm, specific to development, uhm, I think I know the answer to this, but ultimately, do you, do you have a contractor safety management side of this that you care about, or is that the, the EPCM that is really handling that?
2:33:40 Dave McLean: So, like, ultimately, when, when the workers show up to go build, or to, to work on site when you're building that site out, if you were the main contractor for this, you, you'd have a need for some sort of a contractor safety element.
2:33:53 Dave McLean: To make sure that every time somebody walks on site, we've onboarded them in, we've, you know, whatever, but you push that to them.
2:34:00 Dave McLean: You don't have to worry about that for yourself, right? Not, not, not, not accurate. Not accurate, okay. Uh, sorry, for the sake of this conversation, just development, just, just under construction sites.
2:34:18 Dave McLean: My bad, I'm sorry, I figured that would be under development. Okay, whole different animal. Who came from this conversation? Okay.
2:34:28 Dave McLean: Okay, so it, when, when does something go from development to operations? Like, in the process of a substantial completion? Well, but, say, just under construction.
2:34:40 Dave McLean: Oh, I mean, yeah, so from development to construction. Once they break ground, then it would fall under the operations bucket because construction sits under operations.
2:34:51 Dave McLean: Got it. I'm sorry, I might have been mispronouncing the term operations. Theoretically, construction should be, uhm, Involved if there's any work on a site that we're going to develop, which there could be work like geotech work.
2:35:04 Dave McLean: We're learning very early in the process before you've mobilized it, so. Yeah, before you broke ground. So construction could be in, like, I guess, like, Yes, construction should, could be involved at very early stages, even before you have received your, like, your seat, your conditional use permit.
2:35:23 Dave McLean: Okay. Okay, and ultimately the part of it that, I guess, I'm most interested in is, regardless of where in the org structure it lives, when construction is happening, do you, what, what level of contractor data are you requiring an intellect?
2:35:43 Dave McLean: So, we'll put the most sort of structure data. Straightforward example here. So, a contractor is injured on-site while doing construction activities at one of your sites.
2:35:53 Dave McLean: Yes, well, we, we would put them. Well, we would put them in, right?
2:36:04 Dave McLean: Are you saying, or are they going to That's a question for you guys, because the, the, So, my, my experience with this is that, first and foremost, the, like, the contractor firm itself, the demolition firm or whatever, whoever it is that's doing work there, they, they have to store this information,
2:36:21 Dave McLean: they've got a, they've got a lot of it, so. Usually, the, the site contractor, so let's say it's Moss that's building the, building the farm for you, they, they've got a contractor management solution that includes, say, they want to know about it.
2:36:33 Dave McLean: Some of those firms, care to have it as though it was one of their own employees that was injured on site.
2:36:39 Dave McLean: So the only difference being, hey, this is a contractor, I enter the person's name in, otherwise we treat it exactly the same.
2:36:49 Dave McLean: I guess we're done. Other companies only care about the numbers. As opposed to, like, the files related. Like, right now, there's a share, like, we say, okay, send us your initial report, send us your final report.
2:37:03 Dave McLean: Okay, we're going to do an investigation of your incident. All of that today is not SharePoint, but it would need to be an Infolex and not SharePoint, I guess, where we go beyond the numbers.
2:37:15 Dave McLean: I guess I'm, where do we draw the line between Infolex and Compass? That's what the question is. Yeah. Well, you don't store anything, Sven, with regard to a specific injury, right?
2:37:30 Dave McLean: Well, no, that doesn't mean we can't, right? Because we can create action items, but if I submit, ,their summary upload, then we're fine.
2:37:41 Dave McLean: However, not all of our contractors may have an incident or an accident. Yeah, I think we'll define I-Incident. That's just another software platform used for, I-Incident contractors need qualifications.
2:37:53 Dave McLean: We only use them for high-risk contractors. So it's a subset of contractors. And in it, amongst other things, like in addition to safety KPIs that you're getting from the contractor, it's, Yeah, as it's, uh, like, contractor onboarding, show up on site, they've got to register, and that.
2:38:15 Dave McLean: So... So contractor by contractor basis, and what, They're not, uhm, a contractor that has care and custody of the site.
2:38:28 Dave McLean: They don't necessarily do the onboarding for them. They might do their own onboarding, but, uhm, Our operational sites can do.
2:38:39 Dave McLean: Onboard our, the contractors we have on the The only reason I was thinking of using XLX to get the detail of entries is because it has the root cause analysis toolkit.
2:38:51 Dave McLean: I guess that was, I was thinking, well, if your team is supposed to be digging into things. And now they have a contractor incident.
2:38:58 Dave McLean: Now we've got the nice toolkit. I don't see any issue with overlapping, but I just didn't. Let me, let me, let me narrow the conversation because what specifically or what breadth of information we use it for can be a function of each team.
2:39:12 Dave McLean: The part that matters for this here is, let's say there is a contractor incident that we, we care a log here.
2:39:21 Dave McLean: I'm assuming that we would log that at the site that it was applicable to. We classify it as a contract one.
2:39:27 Dave McLean: We are not having the power to have log into Intellects, and therefore we don't have to worry about that. That's what I care about.
2:39:35 Dave McLean: That would be doing anything, any input for contractor incidents. Okay, whatever that, but I can't tell hypothetical contractor safety workflow looks like.
2:39:47 Dave McLean: It's still fundamentally being led and driven by Terrigen, EHS, and the police. Yeah, so. You're doing the, you're probably talking with the contractor in the real world, they're health and safety people as well, but again, no one need to have them brought in, which means no need to have a contractor
2:40:03 Dave McLean: security context where one contractor can't see the data of another contractor. Yeah, yeah, we're not at this stage. Contractors. That could change, but we're just rolling out.
2:40:22 Dave McLean: I said, so, you know, we're not ready, you know. Okay, so again, I don't want to be the scenario. Yeah, maybe there is a contractor safety and security.
2:40:32 Dave McLean: Incident type that has its own streamlined workflow, or maybe there is a series of KPI fields that marry up along the hours worked and recordables for TerraGen folks.
2:40:42 Dave McLean: And we're getting all the KPIs through ISNAT, so we could port those in. You got it. It should be a more complete safety picture here.
2:40:52 Dave McLean: All of that's fine for the purpose of this. I would say it's not round one. We can pick it back up maybe in phase 2 if we're ready.
2:41:00 Dave McLean: Okay. Yeah, I mean, we're getting the KPIs for the contractors who are required. That's right. Yeah, that makes That makes sense, especially if you're going to do some of them.
2:41:11 Dave McLean: It's a subset in the high-response setting. Yeah, yeah. Okay, perfect. Okay, I think we have enough of a strong picture of the people and I'll start to apply it to training management this afternoon and through the rest of them.
2:41:24 Dave McLean: Like I said before, we're going to come back to this. There are still open questions that we need to summarize, some of which are online, and to figure out the how will we handle some of these circumstances, some of which will be on you guys through the week here to decide and make sure that we can think
2:41:37 Dave McLean: of as we start to get into each of the individual apps that we need to come back to. It's all okay, right?
2:41:42 Dave McLean: And eventually what this will all build towards is we'll need to build out the lists, the actual data records that are going to go into the system to populate these.
2:41:50 Dave McLean: But in the vein of, you know, I'm a model versus detail, or that's why I'm living at this level of, like, I don't care what all the details are down here, it's more about, can we imagine what that will carry?
2:42:00 Dave McLean: I'll fill in the blank on the question mark yet. We will need that at some point, once again. And I'm sure.
2:42:08 Dave McLean: There's going to be some vouchers. We will have a moment where we got to come back to this and probably scratch the whole thing once No, probably not that, but it'll feel that way at some point, I'm sure.
2:42:22 Dave McLean: Awesome. Questions before we break for lunch here. Oh, when are you going to need that list of position codes again, Austin?
2:42:32 Dave McLean: Is that something you need live this week, or is that something you'll need before? Oh, hesitantly. Sam. Sam. I questions.
2:42:43 Dave McLean: Like, HR has crazy stuff, like Rissa's sitting there with some San Diego tag. Rissa does not even live in California.
2:42:51 Dave McLean: Yeah. She cannot begin her establishments for California. Right. So, she's got a tag in there for remote. Like, she's got a tag for, I think all three of us have a remote tag.
2:43:03 Dave McLean: Yeah. So, when they're outside of California, and they are remote, we go through the chain of command. So, that would be to you, but you're in California.
2:43:12 Dave McLean: They cannot be on the call. Then it comes to me, oh, they don't speak Boston California. They can't be on in California.
2:43:18 Dave McLean: Then they go to my boss. My boss is in New York. They can be on the New York log, because that's a federal log.
2:43:26 Dave McLean: Okay. Oh, because. They're not going to be looking at all. We don't want to bring under Cal. We don't want to show that we just want them under federal motion.
2:43:37 Dave McLean: So the next best site is will we go up the chain? Yeah. Yeah. Yeah. So the 1st log that's available.
2:43:45 Dave McLean: Yeah, is the CEOs and that's almost like, like, yeah. Yeah. Yeah. So unless they live in California, yeah. And then everybody who lives in California lost.
2:44:01 Dave McLean: Beyond California logging that ports out. No matter who their supervisor is. So like, it's easy for all costs. Yeah, yeah.
2:44:11 Dave McLean: But then it's like the development, people who live, who are remote, Yeah! And then they live all over the place.
2:44:18 Dave McLean: So then we follow the chain of command, and let's say it's Brian Borda. Yeah. Brian Borda, I can't remember. He might be from San Diego.
2:44:24 Dave McLean: Yeah, he is, yeah. And he goes to San Diego. California, so then that's the first log available. Right. And then that person goes to Belmont.
2:44:32 Dave McLean: Yeah, because there's a lot are physically living there. They're in physically, and then they're brought to Hawaii. You don't set the chain until you get to, like, California.
2:44:44 Dave McLean: Right. But we have a Texas log, right? Thank you. Uhm, well, there are two sites. Yeah, but do we, do we follow the same thing, like, they have to be in Texas to get to Texas?
2:44:57 Dave McLean: No, they have to, no, because those are federal. So, it's okay. If somebody is not working at an establishment, we're not going to shove them into that.
2:45:05 Dave McLean: They go up their chain of command. Right, right. Oh, uh, Ward reports to the CEO, Ward reports to New York.
2:45:14 Dave McLean: Yeah. That's all, that's all kind of reviewed by audit. Yeah, but so like, let's say New York, right, she lives in Texas, and then, and she reports to, up to Katie, so she, in New York, so she, so Naomi would go into the, I don't know who does Katie, well, and whoever, I don't know who she is.
2:45:38 Dave McLean: Yeah, yeah. Oh, but you are gone. Like, just first of all, it would be, because we have virtually never been able to find a log.
2:45:49 Dave McLean: Find a log. Okay. Is this our lunch break?
