---
meeting_title: "Summit + TG: Asset Hierarchy Setup"
meeting_date: 2026-11-10
start_time: "16:00"
end_time: "17:00"
timezone: America/Toronto
source: "User-supplied transcript attachment; meeting title, date and scheduled time window confirmed by the user in this chat"
participants:
  - Matthew Futter
  - Dave McLean
  - Jeremiah Soto
  - Amy Roth
participant_note: "Attributed speakers only; Whitney and other named people are mentioned, not confirmed as speakers."
time_note: "The user supplied a 4–5 PM ET meeting window. The transcript ends at 1:06:49; actual end time is not established."
---

0:00:00 Matthew Futter (Contractor): I mean, but it's like, are you sure this isn't a bot every single time? 
0:00:03 Dave McLean: I know, I know, it's a real problem for, and it like, looms like an Atlassian product, it's not 
0:00:08 Matthew Futter (Contractor): exactly a small company. Right. Alright, is 
0:00:12 Dave McLean: there anybody else we're waiting on from your end? 
0:00:15 Matthew Futter (Contractor): Whitney confirmed to show up. But knowing, I mean, knowing Whitney's position, she could easily have had something vital crop up that she has to handle.
0:00:23 Matthew Futter (Contractor): Amy is driving and maybe mostly listening. Jeremiah is driving and I will be screen sharing for him, but obviously this is primarily a discussion between you two.
0:00:32 Matthew Futter (Contractor): On the on the technical side of things for the backbone and how we can work out. Anyway, I'm going to shut up and let you guys talk.
0:00:40 Dave McLean: Okay, sounds good. I think starting point just to frame up the purpose of the call. This is a follow on after I think you guys had an internal discussion with.
0:00:48 Dave McLean: I don't recall the other team, but another team that was looking at, I believe, standing up an ERP system that might contain something that resembles an asset hierarchy.
0:00:58 Dave McLean: Is that, uh, are we in the right ballpark? Yes. Okay, perfect. I think 
0:01:04 Jeremiah Soto: we talked about it after the asset hierarchy. We also talked about org structure and what we might get from Paylocity.
0:01:10 Jeremiah Soto: But we covered that a week ago, didn't we? Yeah, you got it. So, asset hierarchy had a little bit to do with that other, with the finance group, but we did talk with our, uh, data reporting team and, and, uh, performance engineering team about asset hierarchy.
0:01:27 Jeremiah Soto: So, uhm, to help with the, with the level set on exactly what we want to cover here, I have a few points, Dave, that maybe you can consider that, that I'm trying to emphasize.
0:01:37 Jeremiah Soto: Understand better on how this is important to intellect. And so, to my point, we're identifying the assets. I'm going to pause 
0:01:46 Dave McLean: for a sec, Jeremiah, this is not important to intellects. Anything that comes from this is a change order. This was identified by.
0:01:53 Dave McLean: Your folks as something potentially important as a reporting dimension within the system. There is no need to have an asset hierarchy and asset list or anything like that from the intellect side of things.
0:02:04 Dave McLean: This is entirely whether or not, whether or not you guys feel that you need that for the purpose of. Specifically, it came up in context of inspections as whether or not you'd want to be tying individual inspections to a given asset that's being inspected or an area that's being inspected.
0:02:22 Dave McLean: That was the use case, not required on our end. It was, uh, it was something that was identified as desirable, is the word I'm going to use from, uh, from the Terrigen users in the room.
0:02:33 Jeremiah Soto: That's helpful. Okay. Okay, thanks for that. So, so then, um, yeah, the points we want to get to are identified assets and the attributes of these properties.
0:02:41 Jeremiah Soto: One of those we'll have, um, does it make sense in hierarchy to identify, uh, jumping off points, like if we want to get to specific assets that may be removed from, uh, or identifiable by other means?
0:02:57 Jeremiah Soto: Rather than just a single asset name, we do have multiple names for different assets, and we want to somehow capture that and select the 
0:03:06 Dave McLean: larger user base. Like an alias for each asset? So, like, the asset might have an ID number or something like that, and a primary name, but, like, an alias?
0:03:13 Dave McLean: Aliases that it might otherwise be referred to in different contexts? Yeah. Yeah. I mean, again, the object in this case, we'd be building it to support whatever data you guys have for it, so properties on our end are, like, we actually would match you guys you'd give us an export of what you have, and
0:03:31 Dave McLean: we'd build around that rather than, rather than, whereas document control, for example, you guys having to fit it into Intellect's model.
0:03:39 Dave McLean: So, if there is something that is considered an authoritative source for asset, uh, asset lists, then we would, we would want to be consuming as much of that data is as useful as identified 
0:03:51 Jeremiah Soto: by you and your users. Okay, and you blanked out on me for a minute, but, uh, because I'm driving, but, does it make sense then to have, you know, a separate database that feeds into Intellect where we maintain 
0:04:04 Dave McLean: this asset hierarchy? Yeah, yeah. In fact, it's prerequisite. If that doesn't exist right now, this 
0:04:11 Jeremiah Soto: conversation shouldn't go any further. Well, let's look at the screenshot that, uhm, that Matthew has. Do you have an idea?
0:04:24 Jeremiah Soto: And then, uhm, maybe we discuss really quickly the difference between asset attributes and hierarchy, and maybe you can tell us how that might fit.
0:04:33 Jeremiah Soto: Okay. If I can see your screen, Matthew, that's the one I'm looking for. 
0:04:42 Matthew Futter (Contractor): Is, if it's the official Terrigen one, I've got that a couple of, couple of items in. This is the one where you wrote Establishment on the side and Asset on this, and we have Resource, Feeder, Unit, Substation, all that.
0:04:57 Matthew Futter (Contractor): That's the one I was starting with. We do not have to have this one up. 
0:05:00 Jeremiah Soto: Okay, let's look at this one real quick. So, okay. Okay, so we'll start with, Under Asset, you see Resource. This is going to be one of the main names that we use for the project.
0:05:14 Jeremiah Soto: From here, it'll have different attributes, like what substation it connects to on the left, and what feeders and then units, which end up being assets, are identified on the right.
0:05:22 Jeremiah Soto: For that resource. Okay, so you can kind of see how 
0:05:26 Dave McLean: that works. Okay, so the kind of primary record of an asset, for example, E1A, would then break down into multiple components that each of the feeders, F1A, F1, F10, F11, F12, each of which breaks down into units, PCS1, PCS2, PCS3.
0:05:44 Dave McLean: Am I reading that, reading that right? Yeah, you are, exactly. 
0:05:48 Jeremiah Soto: And the weirdness of this is we're not starting at the root of the tree. Yeah. I'm looking at branches, so we're kind of starting in the middle on the trunk and then moving left and right.
0:05:58 Jeremiah Soto: Yeah, so would you consider the substation and switch yard, I guess, interconnect and. Territory or sub lab to be attributes associated with the resource, or should.
0:06:10 Jeremiah Soto: For jumping off points within intellect, which what I'm calling a jumping off point is when we have a technician or a supervisor in the field.
0:06:19 Jeremiah Soto: Who wants to take an asset, for example, at the unit side, all the way to the right PCS 1. It'd be easier for them.
0:06:26 Jeremiah Soto: To start with the resources associated with or with the substation associated with and then narrow down. So, if they picked Edward substation, for example, then they would hit E1A or E1B in a drop down, then they would choose.
0:06:42 Jeremiah Soto: Which feeder? Is that how you can you see how that might work with the hierarchy might work with an input?
0:06:52 Dave McLean: Yeah, I mean, at bare minimum. You would feed in everything from the resource level and below. Into a single object in intellects, just called asset, and it would have a self reference property on it in that model where that's the level that you consider to be the top level of an asset.
0:07:16 Dave McLean: Interconnect, Switchyard, Substation, those would just be descriptors on the resource. They would be, they would just be fields, no different than the name or the asset ID.
0:07:25 Dave McLean: He just many to one drop downs pointing at other objects that store those values. You could, I mean, depending on what you consider to be an asset in the truest sense of the term, have seen companies in the oil and gas sector.
0:07:40 Dave McLean: They consider the asset more broadly. So, for example, uhm, if you were an oil and, if you were a drilling company and you had a drilling field where you had a rig that is covered, like, drilling 200 holes, uhm, over the span of, you know, however many acres, you might consider that entire parcel of 
0:08:01 Dave McLean: land to be the top-level asset. Uh, the rig itself, uh, might be another, like, the next layer down from that, and then as you get into all the different components of the rig, uh, all the stuff that's out on the ground, all the, uh, all the, uh, you know, battery backups, pumping stations, all that 
0:08:16 Dave McLean: stuff that support the rig, each one of those becomes the next level down, down, down, until you get to whatever the base-level unit is.
0:08:23 Dave McLean: So, in that sense, uh, you could theoretically describe the asset at the level of geography, almost as the starting point, but it's not the most common way to do it.
0:08:35 Dave McLean: Based on what you're describing here, uhm, I would, I would suggest that resource is your asset, uh, interconnect, switchyard, and substation are all just drop-down values on the asset that all play a point at objects that we can set up, you can maintain, and we can use them in 
0:08:50 Jeremiah Soto: different places in the system. That makes a lot of sense. I think that that seems to fit what this, this hierarchy, uh, also represents.
0:09:00 Jeremiah Soto: Okay. What, what about this, this though? This may be more relevant. One of the key questions is, uhm, in terms of an asset, the resource level makes sense.
0:09:10 Jeremiah Soto: Can we also call a substation, like Edwards or Sanborn, an asset? 
0:09:15 Dave McLean: You can call it whatever you want. So, in that scenario, if, if, let's go, let's go with Switchyard as the top level.
0:09:22 Dave McLean: So if you wanted to say that the starting point, the top level of the asset hierarchy is what you're calling the Switchyard in this diagram, and each Switchyard breaks down into substations, each substation breaks down into resources and so on, Thank You can do that too, but that wouldn't be problematic
0:09:39 Dave McLean: , and it would just mean that when you, for example, use an inspection, if that inspection is one that you want to bind to an asset, you want to have the user select what asset they're inspecting, you know, they would go, okay, I'm at Sunlight, Sunward, uh, Sunward Switchyard, I subdivide that, I'm at
0:09:54 Dave McLean: Sanborn Substation, and I'm inspecting 
0:09:57 Jeremiah Soto: SBE-SS1. Okay, inspecting, could they also be inspecting Sunward Switchyard? Thank your time. Thank you. Take care. Bye-bye. 
0:10:07 Dave McLean: Oh, as the top level, yes, totally, there's nothing that says that they have to go all the way down to the lowest level, for sure.
0:10:13 Dave McLean: Okay. They could, it could be a, it could be a broader inspection of the, the, the sort of 
0:10:18 Jeremiah Soto: meta-asset, if you will. Okay, well that, that's helpful, that was one of the, The more tricky questions, I think we might have had our scenario, so that, that helps.
0:10:28 Jeremiah Soto: Okay, 
0:10:28 Dave McLean: the only, the only thing you'd want to consider with that one, Jeremiah, is that the, the fields that would live on the object are all the same in that scenario.
0:10:38 Dave McLean: So, you know, let's, you know, let's say you've got, you've got your 25 fields that describe a resource, uh, feeder unit level asset.
0:10:45 Dave McLean: That's the same 25 fields that you've got on, for switch yards and substations. We might do a little bit of show-hide.
0:10:51 Dave McLean: You might decide that, you know, fields 1 through 10 are only applicable for resources, You might decide 11 through 20 are applicable for everything, and 21 through 25 are only applicable for switch yards and substations.
0:11:05 Dave McLean: That's okay, but on the table itself in the database, the fields are all the same, so you would just have to be selectively populating them with whatever you need.
0:11:13 Jeremiah Soto: That makes sense. Okay, yeah, and obviously, we would want to mask some of those, because a substation is going to be part of another substation, especially.
0:11:21 Jeremiah Soto: You got 
0:11:21 Dave McLean: it, right? You think of an address, for example, like, you might put an address in a sub, or 
0:11:25 Jeremiah Soto: whatever. Yeah. Go ahead. Sorry. Yeah, I know. Yeah, I got it. How many fields, then, do you have an idea, or should we just present to you what we think makes sense?
0:11:39 Jeremiah Soto: But I don't think it's going to be over 25. It's whatever you want. I've seen one. 
0:11:43 Dave McLean: I've seen one that had over 200. Like, it's whatever you have. So, in this case, we'd be, we'd be treating it as a completely custom object 
0:11:51 Jeremiah Soto: that's TerraGen specific. Okay, and so, in terms of what I'll, I'll be presenting. We're exposing to you to import and then select.
0:12:03 Jeremiah Soto: I feel like there's a bit of, uh, maybe a pre-configured, a pre-configuration sheet that you would receive. It goes along with the connection to, to, to show what fields will be mapped.
0:12:16 Jeremiah Soto: You 
0:12:16 Dave McLean: got it. Yeah. If you can give me a data dictionary of what you have and what you'd be sending in either an API payload or a spreadsheet or whatever the case is, I'll build the mapping on my end around that.
0:12:28 Dave McLean: Okay. Okay. 
0:12:31 Jeremiah Soto: Uh, okay. Well, that, that sounds pretty straightforward then. Okay. Based on this, I think we can, we can give that to you.
0:12:43 Jeremiah Soto: Um. 
0:12:46 Dave McLean: Okay. Where does this data look like? 
0:12:47 Jeremiah Soto: Jeremiah, where is this, where is this SQL database. 
0:12:53 Dave McLean: Okay, so how is it that it gets managed 
0:13:03 Jeremiah Soto: Is 
0:13:05 Dave McLean: that normally when it comes to us from Intellects, it's coming from an asset management solution, like something that's built into an ERP or some other sort of set of workflow.
0:13:19 Dave McLean: That ensure that that data is up to date. I want to be cognizant of if we're trying to solve a problem that's a like a nice to have problem by cobbling together something upstream that doesn't necessarily have a strong business process around it to keep the data up to date and so on like otherwise it
0:13:36 Dave McLean: just becomes a solution for the sake of having it as opposed to something that that really sort of fits the general 
0:13:42 Jeremiah Soto: landscape well. I appreciate that and probably more than, you know, I'm able to express 
0:13:49 Dave McLean: here. I'm sure I'm sure you're managing a bunch of those things. 
0:13:52 Jeremiah Soto: So that said, you know, a lot of this stuff is being developed ahead of an ERP release, which we're further out on, but we need to select earlier than that.
0:14:03 Jeremiah Soto: So this is the stage that we're in. That said, though, it is the process has to support this data, and that's why I signed it to the Asset Management Team.
0:14:14 Jeremiah Soto: The ITOK team will manage the database, but the updates to that database will be made by, uh, well, you know, it'll be a process that, that, uhm, an asset is identified or a change is made, and then the Asset Management Team will approve that, and then the change will be implemented, and then that will
0:14:34 Jeremiah Soto: reflect in the downstream systems like Inflect. Okay. So, uh, the process has been, uh, you know, identified. So, not only is it just going to be a, you know, a dead database that's sitting out 
0:14:47 Dave McLean: there, but static information. Okay. Sounds good. Then I will take as an assumption from this that the data that's housed within this asset object will not be managed manually by anybody in Intellects.
0:15:03 Dave McLean: So, what that means is, like, all the fields will be, all the screens will be read-only, all the, uh, all the buttons that would allow you to add a new record to it, those will all be read-only.
0:15:13 Dave McLean: All be marked out so that you can't, can't do that. It will assume that all of these records will be managed via the integration, and therefore, if an end user tries to go do an inspection at a specific substation, let's say, or at a, at a feeder or whatever level, at level of the hierarchy, expecting
0:15:31 Dave McLean: it to exist in that hierarchy, and it doesn't, they will, they'll have to call in and have that, have that data updated at the source system, and then let it flow through whatever boomy process you're using to 
0:15:42 Jeremiah Soto: populate it to Intellects. Yeah, hopefully they wouldn't, they wouldn't encounter that, so it would be updated prior to that happening, but yeah, I can see that happening.
0:15:53 Jeremiah Soto: So, what would the update process look like? Yeah, so we're not, from 
0:15:59 Dave McLean: an integration point of view, like, I'm assuming you'll want to follow the same model that we're taking with, uh, the Paylocity one, so you want to use the Intellects API, uhm, you'll, a new record gets created, you'll post the record to Intellects, Intellects will respond back with a payload, a response
0:16:17 Dave McLean: that includes the identifier of that asset in Intellects, you'll ideally want to store that in the SQL database, uh, for future references, because if a week later that asset gets updated, uh, let's say it's status changed or something like that, you'll want to patch the record in Intellects using that
0:16:36 Dave McLean: identifier. If you don't store that identifier, then what it means is any time something gets updated, you'll first have to request the, uh, the Intellects unique identifier for it.
0:16:49 Dave McLean: Using your asset ID or whatever, the unique identifier you maintain in SQL, have it returned to, uh, to Boomi, and then use Boomi to then string together the patch afterwards.
0:17:00 Dave McLean: It's a less efficient way to use the API than posting the record initially and then storing the patch. The value within your SQL database so that you always know anytime we ever update this asset record, this is the corresponding record in IntelliX.
0:17:15 Dave McLean: OK, 
0:17:17 Jeremiah Soto: Uh. Back to the question about a substation being an asset and also, you know, at the unit level or whatever, those will be separate records.
0:17:25 Jeremiah Soto: Then, in that case, not just the record with that, right? Uh, correct. 
0:17:32 Dave McLean: So, yeah, if they're if they're part of the asset, they're hierarchy, they'll be separate records in the hierarchy. You got it.
0:17:41 Dave McLean: You got it. So you'd have to, you'd have to have an identifier on your end for each one of them, and then we'll issue an intellects GUID for each record when we, when we create 
0:17:50 Jeremiah Soto: it via the API. Okay. Okay. That's helpful. Uh, so then those, the last thing, uhm, you and I talked briefly about a kickoff with Boomi as it relates to the integration with Just Intellect.
0:18:06 Jeremiah Soto: Uhm, I don't have a date for that yet. You think you would, you would be happy to attend? Uh, yeah.
0:18:13 Jeremiah Soto: Okay. Yeah, for sure. So, by that time, we'll have the, the Phalocity Index and also this one hopefully ready to, to look at.
0:18:21 Jeremiah Soto: So, uh, that could be pretty, yeah. 
0:18:25 Dave McLean: Awesome. For the sake of, of just making sure we understand the scope of work for this one, uhm, are you okay if I use a constraint of, uh, configure an asset hierarchy object with up to 30 fields, uh, across the board for it?
0:18:41 Dave McLean: Would that, would that be okay? Sort of give, give enough runway for you, uh, for what you're expecting the data to look like?
0:18:48 Jeremiah Soto: Yeah, I think, I think 30 is plenty. Okay. 
0:18:51 Dave McLean: Cool. And then, Will, again, you're using API in this case, so it's just a, it's an API support. The actual build out of the object.
0:18:58 Dave McLean: And incorporating it into inspections is not complicated, uhm, the API support side of it. We might want to throw a few hours at it just to make sure that we've got enough to go through.
0:19:09 Dave McLean: The only nuance that I can think of here that doesn't exist in the other one is that it's a hierarchy.
0:19:14 Dave McLean: So you need to make sure that when you're pushing the records, the parent record exists and that Boomi is able to call whatever the parent is.
0:19:25 Dave McLean: For example, let's say, uh, let's say that you were standing up a new site. A new substation at Sunward Switchyard with a series of resources underneath it.
0:19:36 Dave McLean: You would have to make sure that when you send those data points through for the first time, that you send the substations first, then bring back the substation ID so that when you go to push through the resource, the resource has a parent field on it.
0:19:53 Dave McLean: You need to be able to reference the parent that you've just created, whatever that new substation was, and so on and so forth.
0:19:59 Dave McLean: And we can facilitate that a little bit on the Intellect side so that you don't have to constantly go referencing Intellect's IDs each time.
0:20:05 Dave McLean: We can make it a little easier to use whatever your unique identifiers are, but it's it's a nuance that doesn't exist with the employee feed that we're doing that could lead to, if we don't, if we don't treat it properly, it could lead to a lot of failures in the, uh, 
0:20:20 Jeremiah Soto: in the API logging. Okay, I'm thinking about the differences between Paylocity and this integration, and it seems like there is a parent object from Paylocity for the work structure, but I think you, what I'm trying to do is understand the differences.
0:20:40 Jeremiah Soto: I think that you said if a supervisor leaves or is not in the database, the import can still happen, or the updates can still happen.
0:20:50 Jeremiah Soto: Okay. You got it. That's it. You got it. That's it. 
0:20:54 Dave McLean: The Employee User Access API is a purpose-built API just for employees that actually has some additional failure logic built into it for situations like you're describing where the supervisor is no longer there.
0:21:06 Dave McLean: It'll still take it and just leave that one. For the, the, every other API, whenever there's one of these self-reference properties, it has to go in the right order in order for it to work.
0:21:16 Dave McLean: You, you, the parent always has to exist for the child record to exist. To be created, unless we expect that to be a problem from the start and build the logic in accordingly, where we could say, look, rather than you ever connecting these records together through the API, if instead you just send whatever
0:21:35 Dave McLean: the, the identifier of the connection is, connecting record in a text field to us, like as a, as just a text string, for example, then when we receive it, we can run some logic in Intellects to go connect it if it exists, and failing that, flag it that, oh, you know, you're trying to create a resource
0:21:52 Dave McLean: against a substation that doesn't exist. Maybe that triggers a message to Matthew or something like that, say, that way he can go hunt it down and figure out what's going on, and then click a button to kind of rerun that connection process.
0:22:05 Dave McLean: All of that's possible. It's all kind of second best in an ideal world. The integration logic actually handles that sequencing for you so that you don't have to have this business process that exists alongside it for when the integration doesn't do something that is a predictable 
0:22:23 Jeremiah Soto: outcome in the first place. Got it. Yeah, that's it. 
0:22:28 Dave McLean: That Think of it as a get-out-of-jail-free card. We can keep it in our back pocket if we really need to.
0:22:33 Dave McLean: Ideally, we shoot for a scenario where Boomi actually sequences this correctly. Okay. Okay. Uh, that all sounds good. I think I know what I need to prepare.
0:22:47 Dave McLean: Uh, so, I don't 
0:22:50 Jeremiah Soto: know, Matthew or Amy, Whitney, do you have anything, or? 
0:22:53 Matthew Futter (Contractor): Uh, I have to admit that I've followed probably half of what you guys have said today. Uh, I understand some of the big pictures, but a lot of the details are beyond my usual knowledge, so I'm not sure.
0:23:07 Matthew Futter (Contractor): I have some questions, some 
0:23:08 Amy Roth: non-technical questions, but go ahead, Dave. 
0:23:11 Dave McLean: No, no, go, go ahead, because the non-technical questions might blow up everything we just said. So that actually, much better, much better.
0:23:18 Dave McLean: No, no, it's all good. Those, that's what we're, we're trying to satisfy, right? It's the non-technical side of 
0:23:22 Amy Roth: this as well, so go ahead. Uh, so, okay, so I, I couldn't see the screen because I'm driving, but, uh, I guess my first question is, Jeremiah, you're gonna, are you gonna start at the resource ID level?
0:23:36 Amy Roth: Is that, like, the first tranche of what you're talking about? And then people kind of have drop-downs from there. 
0:23:45 Jeremiah Soto: That'll be, that will be an option. And I think that one of the jumping-off points should be a substation as well, but, like, we talked about, that can be identified as an asset as well.
0:23:58 Jeremiah Soto: And I know that when we do inspections, we'll have, we talk about assets first. With Interigen, that can mean, that mostly means our resource and the different generation assets, but, clearly, we have buildings, facilities that are also assets.
0:24:13 Jeremiah Soto: So, that'll be identified in the structure. So, there would be, like, a list of warehouses. Thank you joining us. 
0:24:19 Amy Roth: Yeah. Okay. The resource IDs, warehouses, substations, that's the first dropdown you're thinking of? Uh, 
0:24:32 Jeremiah Soto: yeah, I. It is, yes. A building or a resource, yes. 
0:24:39 Amy Roth: Um, and could you just give me an example of a resource ID at Edwards Sanborn? 
0:24:52 Jeremiah Soto: Uh, the diagram shows E1B, for example, and then we can go. It's just the projects. 
0:24:58 Amy Roth: It's like the projects. It's like those, you know, small projects, some solar and BES combined, some, you know, some are just solar, maybe some are just gas.
0:25:08 Amy Roth: Like that. 
0:25:09 Jeremiah Soto: Right. Yeah, so, so their individual, uhm, projects and resources could be synonymous in this case. Yeah. Okay. 
0:25:24 Amy Roth: And then just in terms of the inspections, I'm just, you know, they had that weird list, Dave, we showed you.
0:25:31 Amy Roth: It wasn't a list, but it was like just a list that wasn't set up for, like, based on any particular logic.
0:25:40 Amy Roth: North of the I-10, so we'll just have each of them do 2 inspections next year, you know, that kind of weirdness that can't really be mapped into a system.
0:25:50 Amy Roth: So, I guess, is there going to be. This may not make sense, but where is the establishment then going to be completely separate for OSHA?
0:26:03 Dave McLean: Because that's based on people. Yeah, so based on where we landed in the employee integration discussion, the Paylocity integration discussion a week and a half ago.
0:26:12 Dave McLean: I think, Matthew-ish, the org structure that Paylocity is able to serve up is more of a reporting structure, I think, in the vein of what you guys are used to for your day-to-day, which means that we use that for the localization of location structure and intellects.
0:26:30 Dave McLean: Establishments become its own object that lives off to the side. It can be used where we need it, but in particular, it gets used for incident management.
0:26:39 Dave McLean: And we can still do the mapping with the logic that you guys have described, based on where the person is.
0:26:44 Dave McLean: And then, you know, the different algorithm and algorithmic logic that you have to figure out which establishment to charge it to.
0:26:51 Dave McLean: But the location structure, the big hierarchy that we use in intellects for everything, that would not be based on where off of that flat establishment list that 
0:27:01 Amy Roth: we were talking about in our workshop. Yep, no, the way you guys are headed is exactly where we need to be because it sets the security.
0:27:08 Amy Roth: But, so, we're going to tie, uhm, a person is going to be tied to an establishment. So, if a person went and did an inspection and then they used, like, the assets to select the asset, I could also, uh, log the establishment that was inspected, correct?
0:27:29 Amy Roth: I would, 
0:27:30 Dave McLean: I would even go. I would even go a step further and say that, under the hood, the asset, by virtue of its relationship up through a substation, a switchyard, an interconnect, and, and I'm, I'm following the diagram here, but, like, every asset should ultimately be related directly to an establishment
0:27:47 Dave McLean: . So that when the person goes to do the inspection, all they have to choose is the asset, and 
0:27:53 Amy Roth: we'll populate the rest. Okay, that is, uh, good. Yeah, I just don't want them to have to pick too much, you know, like, it'll get a little complicated.
0:28:02 Amy Roth: Yeah, if, if we can see. 
0:28:03 Dave McLean: Store that in, like, assets, I realize they can move, but, like, I think in the concept of the asset that you guys have, they generally don't move that much.
0:28:12 Dave McLean: They, like, once you install 
0:28:14 Amy Roth: it. Right. Okay. Okay. Yeah, so I guess we would set up the establishment. It's based on the resource. We'd start with that list of assets as you're describing it.
0:28:25 Amy Roth: So in Intellects, it's called an asset. Is that correct? Yeah. Warehouses, substations, resource IDs, 
0:28:33 Dave McLean: everything, the whole mix. You got it. And then the only piece of that, if I'm just following the diagram that you can't see because you're driving, totally get that.
0:28:42 Dave McLean: The farthest left, the kind of umbrella term that Jeremiah modelled out here is the establishment. Everything falls under an establishment from there.
0:28:51 Dave McLean: I would love to leave the establishment separate. I'd leave that in just its own table. It's a little more usable for incident management if we do that way, but every asset relates to either directly relates to an establishment or relates to the establishment of its 
0:29:05 Amy Roth: parent asset. 
0:29:08 Dave McLean: Okay, that way, that way, in the model he's got here, Windhub SCE, you would select under the establishment, Western CA, and then from there, all the switch yards, all the substations, all the resource feeder units, all the way down, would just automatically take the establishment.
0:29:24 Dave McLean: of their respective parents. That way, everything falls 
0:29:27 Amy Roth: under Western California. Okay, and so the establishments, you have those, Jeremiah, from us, that we do our OSHA reporting on, or you'd need that?
0:29:36 Amy Roth: Yeah, 
0:29:38 Jeremiah Soto: I think that's what we're going to use. I need that information. We'll add it to this hierarchy. 
0:29:47 Amy Roth: Okay, so Matthew, can you just? Yes. It's pretty self-explanatory, Jeremiah. I don't even know if you're going to have any questions, but, um, okay.
0:29:57 Amy Roth: We'll do. And you're going to, you're going to do offices, too, like the Reno office at, you know, located at address whatever, whatever.
0:30:06 Amy Roth: That's going to be in the 
0:30:07 Jeremiah Soto: outset list, too, right? Yeah, we're going to have to. Include everything for the entire convention. 
0:30:16 Amy Roth: The whole shebang. The ones that have the interesting 
0:30:19 Jeremiah Soto: hierarchy are the, are the actual resources and generation assets. So those are the, the other ones are not as tricky, but yeah, they're all going to be included.
0:30:29 Amy Roth: Okay, so when I want to determine how many inspections have been done at an OSHA establishment. I'll be able to have like a dashboard that gives me that and could give me a little more detail even like, what kind of assets have they been inspecting and are they closed?
0:30:45 Amy Roth: And stuff like that, so that seems good. And then, I guess, based on, like, the personnel, maybe like a supervisor is going to have a different dashboard.
0:30:55 Amy Roth: He's going to be looking at who in his team did some inspections and what are their corrective actions that are open.
0:31:01 Amy Roth: So there'll be different ways to like 
0:31:02 Dave McLean: cut and slice it. You got it, you got it. I will say that in this model, none of this has any specific bearing on security, so it's not going to prevent somebody from seeing it in the same way that location structure would, but the word you just said, cut the data, you know, slicing, dicing, like, on
0:31:19 Dave McLean: a dashboard using slicers, absolutely. All of this stuff would be accessible for, uh, for cutting the data that way. Yeah, 
0:31:27 Amy Roth: I don't think inspections are private information. 
0:31:30 Dave McLean: No. Okay. Okay. And that's And then, Jeremiah, when you're looking at the data model, again, depending on what you've got and where it's coming from, if you have latitude, longitude coordinates at, you know, at any level of this, then that becomes another one, because if you can feed that through, Intellects
0:31:48 Dave McLean: doesn't natively have of, uh, like a, you know, visualization type in the reporting tool to put it all onto a map and heat map it that way, but if you have the data, then should you ever choose to then start to pull the data out into Power BI or any of the other commercial enterprise reporting tools 
0:32:07 Dave McLean: on the market that are designed to sort of connect from lots of different sources, they almost always have, uhm, geomapping capabilities that allow you to, like, take those latitude and longitude coordinates and start to heat map so you can start to see, you know, Bye.
0:32:22 Dave McLean: If I'm looking at California, for example, show me all of the substations or all the resources, heat map them by the number of severe findings 
0:32:29 Jeremiah Soto: that we're finding, or something like that. Uh, Jeremiah, we may have a way to Uh, Whit, you may have a lot of that data.
0:32:42 Amy Roth: Okay, I think she's got maps because of the emergency response stuff, but just check with her. 
0:32:50 Jeremiah Soto: Okay, yeah, that'll be a nice add. Thanks. 
0:32:53 Dave McLean: Okay, cool. So, to bring this to a couple of action items, just specific ones here, first one, Jeremiah on your end, if you can take the action away to, and we'll summarize this in an email afterwards, but if you can take the action away to You I think first and foremost, it's, we want to figure out 
0:33:13 Dave McLean: what the, what the data dictionary actually looks like. So, what are those up to 30 fields that we would need to be able to, to capture?
0:33:22 Dave McLean: That's what my team would need from a technical point of view to start to build the object and then connect it into inspections and wherever else it's going to go.
0:33:29 Dave McLean: We don't necessarily need all the data at this juncture yet, but understanding what those properties are, that's the, that's kind of the starting point, and if we can, if we can be planning to have that within the next, like, 10 days, Thank you.
0:33:42 Dave McLean: Bye Just to throw a date out there for the sake of proposing it, by the 20th of November, that would be ideal.
0:33:50 Dave McLean: Does that sound like we're on the right planet here, or is that, that a crazy timeline that I just laid out?
0:33:56 Jeremiah Soto: No, it may be slightly ambitious, considering where we're at with this. Yeah, anyway, I 
0:34:03 Dave McLean: think that that's doable. Okay. If we go past the 20th, I think we still have a reasonable window up until the end of the month.
0:34:13 Dave McLean: What might happen, though, is just, it might not make the cut for UAT, that's all. It might be something we're introducing into midway through UAT or something like that.
0:34:22 Dave McLean: That's the only thing I'd want to be mindful of, because it's not just the object itself, it's then the next step after that is getting the integration logic right.
0:34:29 Dave McLean: You guys can't start to build the integration logic until I can give you the endpoints and I need to build the object itself to 
0:34:36 Jeremiah Soto: give you the endpoints for Yeah, it's critical to get that. I think that, yeah, we're going to try and get it to you in 10 days.
0:34:42 Dave McLean: Okay, appreciate it. And then in parallel to that, Amy, I'll talk to Emma. I'll get her message over with a summary of this call in the next 20 minutes here.
0:34:52 Dave McLean: Just laying out what our decision is that we're going to move forward with building an asset hierarchy and adding another API integration.
0:35:00 Dave McLean: I'll estimate the work right now, just in terms of like configuration and support for the API call. We're talking, assuming we're at that 30 field limit, we're talking like 10 hours worth of work.
0:35:11 Dave McLean: It's not, it's not huge compared to the full project, but I do want to make sure we cross our T's and dot our I's because No.
0:35:18 Dave McLean: More important than than the hours is, hey, we're bringing a whole new integration into scope. That's a, that's something that you guys will have to consider from a support point of view and all that kind of stuff.
0:35:27 Dave McLean: No licensing costs or anything. So that's a neutral thing. It's just the just the hours to stand it up. That's all.
0:35:33 Amy Roth: That's fine. Just to have a change order when it is ready, OK, 
0:35:37 Dave McLean: we'll do awesome. OK, and then I think Jeremiah, once we get the data model or the data dictionary, we can rip through and build the tables pretty quickly when we do the kickoff for Paylocity with the boomerang.
0:35:50 Dave McLean: Help me team. Do we want to factor this into that conversation as well? Or will you have some work to do to build out the SQL database first before we start to 
0:35:58 Jeremiah Soto: focus on the integration side? I'm hoping that both will be in that same kickoff. 
0:36:05 Dave McLean: OK, love it. That'd be great. OK, this is exciting. Man, you guys, when you set your mind to something, 
0:36:14 Matthew Futter (Contractor): you kick ass and take names. Hey, Dave, while we're while we're talking about crossing our T's and dotting our I's, if you're going to get back to one, a recap from this call from Emma, would you also ask her if she can go ahead and send the one from our morning call?
0:36:30 Matthew Futter (Contractor): I haven't seen that yet, and I know you guys are coming up near day's end, so I'd love to get that today, if possible.
0:36:34 Matthew Futter (Contractor): Uhm, there wasn't a lot to do. She was going to send me about three different terms in there. And one of those, I think, included a quote.
0:36:44 Dave McLean: We'll do. Specifically an email, not a change order itself, right? Is that what you're- Correct, yeah, just the email recap.
0:36:49 Dave McLean: Yeah, just the email recap. 
0:36:50 Matthew Futter (Contractor): Yep. Okay. 
0:36:52 Dave McLean: Alright. Just messaging her. Now, real quick, I can see she's on a call, but I'll catch her at the end here.
0:36:58 Dave McLean: No problem with you. Okay, got it. 
0:36:59 Matthew Futter (Contractor): Thanks. And I don't remember what that detail about the quote was offhand, but I did mention it in my own semi-recap that didn't include her three items.
0:37:07 Matthew Futter (Contractor): So, like, I asked about it, but I don't remember what it was off the top of my head. So it's in there, Gracie.
0:37:14 Amy Roth: Is this the, uhm, is this integration the main, like, the, the thing that needs to get done, everything else, you know, call it on track, is it?
0:37:27 Amy Roth: Are we not able to launch, uh, by, I mean, how, how much time are we talking here, like, is this going to delay our project from launching 
0:37:40 Dave McLean: in Q1? No, like, so, like, we'll talk, asset hierarchy first here. So, like I said, the actual build out of this object is very straightforward, the way we're talking about it.
0:37:50 Dave McLean: It's the kind of thing somebody, once we have all the things we need, we knock it out in a day, day and a half, kind of thing, tops.
0:37:55 Dave McLean: Uhm, the, the, the schedule, what we're going to work in this case, or the schedule run is, it's on the boomy side, because from Jeremiah's point of view, and apologies, Jeremiah, if I'm speaking out of turn here on your behalf, so correct me if I'm wrong, but it sounds like what he's got to set up on
0:38:13 Dave McLean: his end is not only the integration, Thank you. but the actual SQL database that will store all of this data on Terragen's side first, and then populate it with whatever spreadsheets, whatever source data exists, lists that exist in the sort of ether of Terragen right now.
0:38:32 Dave McLean: He's got to consolidate all of that together and put it into one SQL database before we then start to integrate it, which on that front, the integration is not a super complex one, but we want to be mindful of the fact that this, along with Pandas, Halocity, it's the first time that, that Terragen is
0:38:51 Dave McLean: doing this with Dell Boomi. So there's a learning curve to it. Uh, presumably you guys are working with a vendor to set up the integration on that side.
0:38:58 Dave McLean: There's, they're going to have a bit of a learning curve. It's just, it's all in theory. It's all very straightforward.
0:39:04 Dave McLean: And easy. And yet in practice, when people have to put fingers on keyboard, there, there's all kinds of things that make tasks that might be 30, 40 hours worth of work take six weeks.
0:39:15 Dave McLean: And so that's the piece I want to be mindful of is if we close in our timelines too much. It's not to say we can't do that, it's that we risk that when we hit the, hit that timeline, there might be individual pieces of it that are not ready to go yet, because of whatever factor.
0:39:31 Dave McLean: And now you guys are in a situation where you're having to decide, do I want to push the date back?
0:39:36 Dave McLean: Or do I want to move forward, kind of provisionally, knowing there's a key piece that's not there, and it 
0:39:43 Amy Roth: just comes after the fact. Uh, at the moment. 
0:39:52 Dave McLean: The plan has it starting January 25th. 
0:39:58 Amy Roth: Okay. Like, we're, I guess, we're trying to close down our current LMS. So, we're, if we did user acceptance testing.
0:40:06 Amy Roth: Starting at the end of January, when would we be launching? So, 
0:40:11 Dave McLean: as, again, as of right now, the current, I'm sorry. Amy, my bad. I'm reading the wrong project plan. I'm reading a different one.
0:40:17 Dave McLean: Oh, good. Okay. Just a second. Sorry. You scared me, Dave. I saw your hand go up there. I was like, I thought it was the end of November, not the end of January.
0:40:26 Dave McLean: Okay. My bad. You're all right. Forget what I just said. Okay. Let's start with UAT. UAT is... 
0:40:35 Amy Roth: We're just We're We're like, hi. No, it didn't sound right when I said it either. 
0:40:44 Dave McLean: UAT preparedness, uh, 30th of November. So end of this month, uh, with round one starting, like you guys getting in with, with your first round of it the same, uh, starting the same week.
0:40:55 Dave McLean: Uh, UAT runs through until 22nd of January, which UAT factors in not only the testing, but then any rework or bug fix window that comes after that, the verification that comes after.
0:41:10 Dave McLean: And it is elongated because of the holiday season, um, with production deployments scheduled for the week of Jan 25th to February 5th, and you guys live on February 8th.
0:41:27 Amy Roth: And that's assuming there's no hiccups with Boomi, or that assumes, like, you know, a reasonable amount of time for us to 
0:41:35 Dave McLean: implement Boomi? It definitely, it definitely assumes a reasonable amount of time to implement Boomi, but if we think about it in terms of, like, what's our, what's our critical path here?
0:41:44 Dave McLean: Depending on when the kickoff happens for Boomi, we may not have Boomi in place for the start of UAT. So if we think about the consequence of that, it means that we're likely loading, 
0:41:54 Amy Roth: Oh, I was going to say, that sounds like a big issue. It, 
0:42:00 Dave McLean: it can be. It can also be something that we accept provisionally if there's a clear timeline for when all that stuff is set up.
0:42:07 Dave McLean: So, for example, if, if upon kickoff, we're talking with the vendor that's doing the configuration, or if it's, if it's Jeremiah, that's going to be fingers on keyboard doing the work, if Jeremiah is looking at it saying, hey, look, I think I can have Paylocity up and running by December 15th, and the
0:42:22 Dave McLean: asset hierarchy up in place by December 20th, just throwing random dates out there, then we all get to decide, look, is there merit in still going ahead with November 15th?
0:42:32 Dave McLean: November 30th, testing all the other things, and we can, you know, we can simulate the rest of it, we can load up employees manually for the sake of testing, we can load up a subset of the assets for testing, and once the full list is ready to go, then rerun the second, the cases again, or whatever in
0:42:49 Dave McLean: early January to go vet against those pieces, but it's those types of compromises that come into play as we start to, to run into these types of dependencies, so it's almost never truly clean and easy in that regard when you're trying to hit a specific date, and that just get exacerbated 
0:43:06 Amy Roth: if we start to pull the date in. I mean, Jeremiah, do you have a timetable? For Boomi? 
0:43:15 Jeremiah Soto: I don't. We, we wanted to start, or have our initial kickoff, uhm, within these three weeks here. That we have in November, and so then that leaves us with next week.
0:43:25 Jeremiah Soto: Uhm, I, I'm, I don't think we'll be ready for that, but I'm going to try and push, push it. Uhm, no, I don't have any other concerns.
0:43:33 Jeremiah Soto: Uhm, I'm less concerned about the SQL database build out. Uhm, I think that we can have that within 10 days along with the asset, or the, the org structure that we discussed.
0:43:44 Jeremiah Soto: So, I feel like Intellects is going to be able to proceed, and, and the integration piece, I, I, I think we can have that by the end of the month.
0:43:52 Amy Roth: Oh, with Boomi, we can have the integration? 
0:44:00 Jeremiah Soto: Yeah, because we do have, as part of the, the Boomi, uhm, implementation, you know, we, we did hire the integrator to help us with that.
0:44:09 Jeremiah Soto: So, that should be there for us. And we discussed some of this going into it so that they knew how to 
0:44:13 Amy Roth: scope it out. Okay. Okay. So, what, okay, what I'm hearing is it may be possible, then, to have Boomi working for the launch on the 30th of UAE?
0:44:25 Jeremiah Soto: My tracking. Yeah, that's the UAT that the start of it. Anyway, I think it could happen in within the UAT, but a goal for us knowing that that's the date would be to have it ready by then.
0:44:39 Jeremiah Soto: And right now I don't. I think. I'm probably the 
0:44:42 Amy Roth: only hold-up to that happening. Uh, Dave, and so do you need something by the 30th from us, or do you need something ahead to launch the UAT testing?
0:44:53 Amy Roth: Like, what is, what is it you need, I guess, from us on Booty? So, 
0:44:59 Dave McLean: I need, I need one of two things for the 30th. I can live without a working integration on the 30th.
0:45:06 Dave McLean: That's fine, because you're, you're, your UAT isn't actually focused on the back-end integrations that drive it. What, what people need is, But need when they log into the system is they need to see employees in the employee list, they need to see the org structure in the org structure list, they need
0:45:21 Dave McLean: to see if we're expecting any assets, we need to see the assets in the asset list. All of those can be loaded in with one time spreadsheets that are going to probably a hell of a lot easier to generate in advance of the 30th.
0:45:34 Dave McLean: So, given, given that I would say November 30th to have the Boomi integrations ready to go is aspirational, I would actually say don't shoot for that.
0:45:46 Dave McLean: Shoot to have one-time upload lists of locations, employees, and assets over to us by, like, the 28th of November so that we can load that data in with a one-time process in advance of UAT starting.
0:46:02 Dave McLean: And run UAT at least through December using that data. If UAT doesn't have a new asset show up in the test environment that was just created on December 5th, like, that doesn't really matter that much.
0:46:17 Dave McLean: We can test the integration. The integration works separately once it's ready to go, and everybody feels comfortable with it, that it's in place.
0:46:26 Dave McLean: Okay, my focus for UAT is no users got to log in, meaning they have to have an employee account and a login set up.
0:46:34 Dave McLean: The org structure has to properly position them, which we can put them in with a spreadsheet so that they can test their security context, and they need to be able to go in, you know, register a new document, view or search for existing documents, create an inspection with one of the checklists that 
0:46:50 Dave McLean: we have. And they're ready, we've got loaded up in the system. All of that stuff doesn't rely on the integration, it just relies on the data being there.
0:46:56 Dave McLean: Do that once. Okay. And 
0:46:58 Amy Roth: then, does my team have a list of all the other things? Like, are we getting you all the documents by the end of the month then?
0:47:05 Amy Roth: I know, 
0:47:05 Dave McLean: I know the team is trying sort of working through, I know Matthew, in particular, is working through nuances of the upload spreadsheet process in particular with respect to who the approvers are, which that is pretty far down the line in terms of the process.
0:47:19 Dave McLean: So, like, technically, Matthew, approvers are not needed for loading the documents in. Marking the approver helps it so that, inevitably, when you go to trigger a new revision of those, the approver's already ready there.
0:47:29 Dave McLean: So I get where, I get where you're going with it. And we wanted that in our header. You got it.
0:47:33 Dave McLean: Fair. Uhm, so, yeah, in this case, Amy, to answer your question, we're working through the stuff that they need. At this point, with 20 days to go, we're not a, we're not at a yellow or red flag 
0:47:45 Amy Roth: at this point. We're, we're okay. Okay. I mean, I just want to make sure I have a clear list of what my team needs to get you, because they're still working on, you know, a lot of these templates.
0:48:00 Amy Roth: They're working 
0:48:01 Dave McLean: on the right stuff. They're working on the right stuff. They know what it is. Um, Matthew, I did see your message.
0:48:05 Dave McLean: I skimmed your message in a call earlier today about setting some folks up for them to start messing around. Happy to do that.
0:48:10 Dave McLean: I want to narrow the focus, though, because what I don't want is implicitly UAT starts today, if you know what I mean.
0:48:18 Dave McLean: Like, if we grant access to everybody today, what are the parameters that they're being told about the purpose of that access?
0:48:27 Dave McLean: I'm fine narrowing that down. That's why 
0:48:29 Matthew Futter (Contractor): I put kind of a, uh, who needs to access to what at the end of that message. Got it. Understood.
0:48:35 Matthew Futter (Contractor): So I told all the, all the document contributors, you know, hey, give us some documents and then you can see how it looks in the test environment before you give us the documents.
0:48:43 Matthew Futter (Contractor): You're not next 300 that are going to go in the real upload, for example. That's one of the things we said.
0:48:46 Matthew Futter (Contractor): Yeah. And we really need to get in and test the training. 
0:48:51 Dave McLean: For what it's worth, I would hold off on giving them access until those documents are in the system, even if they're only in provisionally.
0:48:59 Dave McLean: Take, for example, the document spreadsheet you're working on right now with the approvers. If the approver piece was the last piece to get in, I would say, send it over, let's get it loaded, so that then they when they log in, they're not looking at an empty box, because that's what they're going to
0:49:14 Dave McLean: see right now. Oh, I'm with you. No, I, 
0:49:17 Matthew Futter (Contractor): that's fair, yes. Good point. 
0:49:21 Amy Roth: I just, uh, I, we have to change the tablets on, like, 15. 25 health and safety policies and a bunch of more procedures.
0:49:29 Amy Roth: So I just don't know what it's going to look like. And I thought when we had the kickoff, we were supposed to give you, like, 20 to 30 documents and we were going to see if we were going to give you the headers.
0:49:39 Amy Roth: So we have all that. And I just don't know what happens. I happens 
0:49:47 Matthew Futter (Contractor): Like, so, Dave, before we, before we come to bulk upload day on 11-25 and we owe you everything in one big block, are we going to get in there to see with the technology?
0:49:57 Matthew Futter (Contractor): I mean, documents that you've already, you know, sort of loaded, but you don't have all the metadata for it assigned yet.
0:50:07 Dave McLean: I need metadata for, even if it's just a subset, right? Even if it's just 10 of them, I need the metadata to do it.
0:50:13 Dave McLean: It's, it's in the spreadsheet. It's in 
0:50:16 Matthew Futter (Contractor): the shared folder. I was just, one of the questions answered before we said, okay, take it, take it and run.
0:50:20 Matthew Futter (Contractor): No, it's like, I, there's nothing to see as 
0:50:23 Dave McLean: a user until that metadata is there. The, like the, the files that are loaded. So we transfer the metadata. Yeah.
0:50:29 Dave McLean: Yeah. 
0:50:30 Amy Roth: Transfer, whatever you have, Matthew. I'm happy to look at it if you are, do not know what to put in, but you have to transfer something so we can look at this because we cannot authorize, like, the change in all the time, all the policies.
0:50:45 Amy Roth: Right. Because I have no idea what is going to look like, and we're going to crash into the 25th. I'm with you.
0:50:50 Amy Roth: So, I don't know. What, what are you waiting on? 
0:50:56 Matthew Futter (Contractor): Until last Friday, I hadn't met with, I, I still, we can, we can just run with them. These are the kinds of unpostable files.
0:51:03 Matthew Futter (Contractor): We can just run with what we've got right now. I will have that. I will give you the, yeah. All right.
0:51:08 Matthew Futter (Contractor): You'll have that in five minutes. Cool. Awesome. 
0:51:11 Amy Roth: Give it to them. Okay. So we can, we can play around with things. This isn't like a permanent thing. This is like to play around.
0:51:18 Amy Roth: Right. Okay, I don't have to be accurate. They just have to be complete. That's a good point. Yeah, 
0:51:24 Dave McLean: you got it. And then any, any issues you corrected on the next run. 
0:51:27 Amy Roth: Okay, and then my other 1 question was, our team is super excited about adaptive learning. And I've been telling them we should have adaptive learning.
0:51:38 Amy Roth: Can we just get in and test the adaptive learning to, like, lock this down, that we really have it, and we know 
0:51:45 Dave McLean: what it's going to deliver? Yeah, so the bottleneck on that one is me. Well, it was historically, actually. We got access to the Marcom content three weeks ago.
0:51:56 Dave McLean: Discovered that while Intellix has a distributor agreement with Marcom, they actually have no mechanism to distribute the content to a client other than, here's a crap ton of files.
0:52:07 Dave McLean: And go in and upload them yourself. I had one of my team members build a Marcom content library into your site, a place to hold the actual Marcom content adjacent to training management, so that, for example, when you go in and think post go in, for example, if you go in to create a new course, you'd
0:52:26 Dave McLean: say, what kind of course is this? It's a SCORM one. Do I want to upload it myself? Because we had a third-party vendor author it for us?
0:52:33 Dave McLean: Or do I want to select from the Marcom library, which then pulls it in from this Marcom place? That library is built.
0:52:40 Dave McLean: It's deployed to your test environment right now. We were starting to work through the actual process of uploading the SCORM files last week and just ran into a technical barrier.
0:52:49 Dave McLean: I have time scheduled on Thursday to circle back to that, which, best case scenario, by Thursday afternoon, all the Marcom content is available in Intellects, at which point, if you want to test it, pick a, pick a, give a couple of courses.
0:53:03 Dave McLean: We can set them up and assign them to Paul, yourself, whoever else wants to go in and give them a shot.
0:53:09 Dave McLean: Absolutely. That's perfect. 
0:53:11 Amy Roth: Yep. 
0:53:11 Dave McLean: Okay. 
0:53:14 Amy Roth: Did, did Marcom give you all the content? They did. Like, the whole shebang? They did. Yeah. That's positive. Yeah, my understanding is that the way you guys 
0:53:24 Dave McLean: pay for it, it's just a bulk subscription. You guys don't 
0:53:26 Amy Roth: pay per course. Right? Oh, we, yeah, we just have, like, a, yeah, like, we just pay annually for courses. Okay.
0:53:35 Dave McLean: Yeah, they gave us everything. I should say Intellects gave us everything that Marcom gave them. It all lives in a share file.
0:53:42 Dave McLean: The only other piece that. Intellects doesn't seem to have an answer for right now is what is the mechanism by which if Marcom publishes a new course or a new version of a course, how do you know about that?
0:53:56 Dave McLean: They don't seem to have a great answer to that question. 
0:54:00 Amy Roth: So we've, 
0:54:02 Dave McLean: this is it, right? And from, this is me editorializing, so take it for what it is. It seems that that responsibility lives in a no man's land between Marcom and Intellects.
0:54:14 Dave McLean: Marcom's perspective is no, Intellects doesn't Intellects, you're the distributor, this is on you to figure out, Intellects looks to Marcom to say, well, yeah, we're the distributor, but like, if you, like, just posting a new file to a shared folder isn't the same as publishing something.
0:54:30 Dave McLean: Both sides have, have some merit it. And they need to work that out on their end. What we've told them is, which is more than any other client of Marcom or Intellects has right now in this world, is we've at least created a landing spot for all that content to live once they figure out their stuff.
0:54:45 Dave McLean: So that when you get it, you get to decide what you want to or not that new version of the course, or that new course, or whatever it is, is something you want to use, or whether it's something that just lives in the background 
0:54:56 Amy Roth: for a rainy day down the road. Well, we will always use the updated courses. 
0:55:04 Dave McLean: I think about it this way, though, if that, like, if it's a brand new course, you have no policy, no procedure for it.
0:55:10 Dave McLean: There's nothing that it references. 
0:55:12 Amy Roth: You've never reviewed it before. Yeah, no, right. But, like, it's not like that. It's like, they'll take heat illness, and they'll just do an update.
0:55:20 Amy Roth: So it'll be, like, there's nothing new to heal heat illness, like, with more modern information and video. 
0:55:30 Dave McLean: Wouldn't you want 
0:55:31 Amy Roth: to review that first? That's happens. So it'll be, like, a course, a course we use. It's, it's, this is general awareness training.
0:55:40 Amy Roth: So it's, from what I have seen, there's never been an issue with the updates. The updates are very welcome. They're outdated.
0:55:48 Amy Roth: Like, you know, we've been working with really outdated stuff. We just thought that's what all we had to access to.
0:55:54 Amy Roth: So everything that's been updated is good. You know, it's good content. Okay. Okay. 
0:56:02 Dave McLean: I'm 
0:56:02 Amy Roth: not saying I'm automated. I'm just saying, um, I'm just saying that in general, it's always going to be accepted. Like, there's probably going to be, it would be unusual not to update the course.
0:56:16 Dave McLean: Sure. Sure. Okay. Look, it supports either way, right? So I think our, our operating assumption is that the, if there was a new course that, let's say somebody from, from Intellects received a notification from Marcom, hey, there's a new version of heat stress.
0:56:30 Dave McLean: They go, they go into your site, they push it into the, into the Marcom content library. We've sort of taken the philosophy that the better approach is once they do that, notify you.
0:56:41 Dave McLean: Hey, there's a new version of this course available. And then you can go in and decide, okay, yeah, no, we want to use that.
0:56:47 Dave McLean: So connect it to our version of that course. Rather than it being something that's automated, somebody takes the course and there's something in there that's incompatible with your policy framework or something like that.
0:56:57 Dave McLean: That triggers a, you know, hey, the course said this, but the policy says that. 
0:57:05 Amy Roth: Yeah, they just don't. They don't really do that, but it makes sense if it's general awareness level that that sort 
0:57:11 Dave McLean: of makes sense. It's not that controversial or boring. Yeah, it's definitely not. 
0:57:16 Amy Roth: And then, so will we have to then remove the old content? Like, we'll go in and be like, okay, we got the new one.
0:57:22 Amy Roth: Now we've removed the old one. No, it would be the way it's set 
0:57:25 Dave McLean: up right now. Again, I'm going to use Matthew as the sort of notification front end for from this. If the new course gets published in, uhm, again, through whatever mechanism Intellects chooses to work through that, Matthew gets notified, hey, there's a new version of whatever course is.
0:57:40 Dave McLean: All he has to do is say, yes, I want to use that as the new version of our course. Done.
0:57:44 Dave McLean: Everybody from that point forward. Taking that course uses the new version. 
0:57:49 Amy Roth: Oh, OK, more of a more of a confirmation. OK, got it. All right, and then when we do the kick the tires on adaptive learning, will we also be able to upload that one of those?
0:57:59 Amy Roth: Because we're having our, a company, a consultant build microcourses, and we can't get the quiz to work in our current LMS, and we're hoping it works in ITSLACS.
0:58:11 Amy Roth: As soon as it's available, yeah, send them through. Oh, well, we have the quiz, so the team will I might be out 
0:58:19 Dave McLean: of date on that one. Don't let 
0:58:26 Amy Roth: me speak out of turn here. Just a second. Oof. Cough. So the one we just did was called Hazard Communications, and it had a quiz, so I don't know if the team sent you that, but I could get them to.
0:59:04 Amy Roth: I'm just logging 
0:59:05 Dave McLean: in, just doing two questions. Factor authentication into the, uh, SharePoint. I might be out of date on that one. TerraGen documents to Summit.
0:59:13 Dave McLean: Quiz and policy example for two-course setup. Uh, I have Incipient Firefighting. Uh, let me 
0:59:21 Amy Roth: just check samples. Two-course. I don't have that one. Matthew, do you know if we sent one of the ROI models to somebody?
0:59:38 Amy Roth: They could run it, or we could run it in the local management system, all by chance? I'll have to go see if 
0:59:44 Matthew Futter (Contractor): I have a record of Paul sending that. He usually copies me on stuff, so I should know in just a moment here.
0:59:49 Matthew Futter (Contractor): Yeah, could you just, could 
0:59:50 Amy Roth: you just hand this over to Paul and just tell him if he didn't go ahead and just send? I would like the module that has the quiz.
0:59:59 Amy Roth: Yes, got it. Okay. He just needs to reset it if he's already sent it. Just reset it again to date.
1:00:05 Amy Roth: Okay, thank 
1:00:07 Dave McLean: you. Appreciate Uh, the only content that's not related to quals and certs that I have from Paul is incipient fire.
1:00:18 Dave McLean: If you can send it through, if you can send it through, we can convert it 
1:00:21 Amy Roth: over to a quiz. No problem. Well, it has a quiz already. It's a smart file. We just want to know if it runs.
1:00:31 Dave McLean: Sorry, a quiz in intellects is a list of records. So whatever you send it through as I have to convert it into an intellects quiz.
1:00:41 Dave McLean: Okay, right, like, in the same way that, like, when you guys sent over your inspection checklists, I can't just take that PDF.
1:00:47 Dave McLean: I have to convert that to an Excel file that I can upload into the question and checklist objects and intellects.
1:00:53 Dave McLean: Same idea here. I have to take whatever it is that that structure looks like, that quiz, and I have to convert it to an Excel file that we can load into the quiz and question objects and intellects to then connect to the course.
1:01:05 Dave McLean: But this is a, this 
1:01:05 Amy Roth: is a SCORM file. Oh, I'm 
1:01:08 Dave McLean: sorry, I thought you meant the quiz builder one. So if it's a SCORM file, then we just upload the entire package.
1:01:13 Dave McLean: My bad. I'm sorry. I, I, I, You were saying quiz. I thought you meant quiz builder, uh, like what you're trying to do with the quiz builder and intellects.
1:01:20 Dave McLean: No, it's just a SCORM file. Okay. 
1:01:23 Amy Roth: Functionality is not working in the SCORM file in our current LMS. I think it's just because it's old. I understand.
1:01:31 Amy Roth: Okay. Okay. Gotcha. 
1:01:34 Dave McLean: Yeah. Yeah. Okay. Yeah. That's even easier. Yes. Even easier. Yep. No problem. 
1:01:42 Amy Roth: And I think the problem was that, um, you could fail the quiz, but it would pass you. But 
1:01:47 Matthew Futter (Contractor): I think that was the problem. Our LMS only does SCORM 1.2, and it's not collecting any data from it like it, I think we think it's supposed to.
1:01:55 Matthew Futter (Contractor): And I hope that yours will. But we, we don't know because until we can test it. Okay. Cool. Yeah. 
1:02:00 Dave McLean: Have them send it over. We can, we can load it up and assign it. Okay. 
1:02:04 Amy Roth: Okay. Great. Okay. Those are, I think, my hit list items. Awesome. So needs to get over to you. Like, I feel like we owe you quite a few templates for training.
1:02:17 Amy Roth: Everything over to you. Before 
1:02:20 Dave McLean: Thanksgiving, basically. You got it. You got it. If there's, and again, if it's, if it's perfectly imperfect, that's okay. Right?
1:02:28 Dave McLean: Like, UAT is as much about a learning exercise. So, for example, if the course list is, if you hit UAT, if you hit Thanksgiving and Paul's got 85% of it, send it.
1:02:39 Dave McLean: It's okay. That's fine. We don't have to work with 100% for UAT. We do need 100% for GoLive, but 
1:02:47 Amy Roth: that's, there's runway for that. Okay. That helps. I didn't know that. Okay. Okay. Got it. Thank you, Dave. Appreciate it.
1:02:59 Dave McLean: Thank you guys very much. 
1:03:00 Amy Roth: Dave. Talk to you later. Thank you. Drive safe, Amy. 
1:03:03 Matthew Futter (Contractor): Thank you. Dave, if I misunderstood the whole test environment thing, uhm, for, like, UAT now, as you said, I thought we talked about in the design sessions that we were going to run, we were going to poke around in the test environment, make sure things were doing what we wanted, and that's what we 
1:03:16 Matthew Futter (Contractor): were kind of late for. If we're still early for everything, that would explain why you keep saying we have plenty of runway, but I don't want to come up on our, our bulk upload right to remind and have a document issue we could have avoided.
1:03:26 Dave McLean: No it Matthew, it's more than like on inspections there's active configuration that's happening, we'll have to get promoted to that.
1:03:33 Dave McLean: So like I have no issue with your core team having access to the product. Frankly, that probably shouldn't happen. I think that was probably a miscarriage I guess on Ethan's part or my part in order to get that set up.
1:03:42 Dave McLean: So we're fine with that. My bigger concern though is that just looking at the number of people. Well, it's the people that weren't part of the design workshop.
1:03:50 Dave McLean: They don't necessarily have the context that they're being given access to a product that doesn't reflect all the stuff that Terrigen is getting.
1:03:59 Dave McLean: You're going to get access to volume. 
1:04:00 Amy Roth: That makes sense. Well, hold on. Hold on. So who, who is it that's getting access right now? Like, maybe I should look at that list because I agree.
1:04:10 Amy Roth: Like only a couple people 
1:04:11 Matthew Futter (Contractor): need access right now. Oh, okay. Okay. It was, it was the core team of you, you know, me, Whitney, Vanessa, Jeremiah, Paul, and John.
1:04:22 Matthew Futter (Contractor): Uh, and then I had added in the document contributors like Matt. Michael, Jeremy, Robert, uhm, we're gonna add in Darnez and, but, but we don't have to put all those people on right now, or even, you know, once you get the metadata uploaded, Dave, I just emailed a note over to confirm that you can grab
1:04:41 Matthew Futter (Contractor): it and go. And there's 4 lines you guys added that shouldn't have been in there. Those are. Those were our header templates, 
1:04:45 Dave McLean: but everything else is good. Okay, cool. Then, so let's just, I mean, can we just 
1:04:52 Amy Roth: start with like Paul and Matthew, Vanessa B and Whitney, can we just start with that? Cause there's nothing. We're doing on inspections right now.
1:05:01 Amy Roth: We're just testing the documents, testing the LMS. Fair. So John doesn't need it. And then before we give it to people who aren't even on our weeklies, we're just periphery talking to them and collecting documents.
1:05:14 Amy Roth: Let's look at, you know, what their documents look like. That's fair. And you can, you know, you can meet with them and tell them what they need to prepare and, you know, if there's an issue.
1:05:25 Amy Roth: Agreed. And then we can, if you need them to have access, then we can add them. Like, but let's just get that done.
1:05:32 Amy Roth: Like, maybe those five people just first round, you know, is that more. That sounds like much better right now to see what the, I just want to know what the health and safety policies are going to look like.
1:05:45 Amy Roth: Like, I just want to know before you go in. And do all the edits. Agreed. 
1:05:53 Dave McLean: Cool. Okay, so Matthew sent me that. I see Matthew, your message here. Notification, all the files, the files for the, this initial partial load at the stage.
1:06:02 Dave McLean: They're up there. I will take a look at this tonight, uh, and see if there, if there's any data issues.
1:06:07 Dave McLean: If there are, I'll come back to you first thing in the morning with, hey, I need a clarification on X, Y, and Z before I can click the button to load it.
1:06:14 Dave McLean: If there isn't, I'll click the button tonight and it'll go through, at which point, Amy, we can then take a look at exactly what's what you're trying to do.
1:06:21 Dave McLean: Forget the rest of the users for a second. Just, if, if you want to look at it as a starting point, just within the core team, hey, when you generate a health and safety policy, this is what it will look like.
1:06:30 Dave McLean: This is how the mapping exists. And if there's issues with that, we can refine that before you go out and get it to anybody else in there.
1:06:38 Dave McLean: Yes, perfect. That'll be great. Cool. Okay. Apologize, guys. I gotta go pick up my kids just from aftershare here. I will take a look at these files tonight.
1:06:49 Dave McLean: Bye, you guys. Alright, thank you. Thank you both. Thanks, guys. Bye, everybody. Bye.