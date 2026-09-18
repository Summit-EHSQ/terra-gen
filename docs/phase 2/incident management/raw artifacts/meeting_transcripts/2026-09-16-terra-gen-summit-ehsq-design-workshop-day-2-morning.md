---
meeting_title: "Terra-Gen | Summit EHSQ | Design Workshop Day 2 - Morning"
meeting_datetime: "2026-09-16 09:00 PST"
participants:
  - Dave McLean
  - Mike Tran
  - Amy Roth
  - Whitney Goller
  - Matthew Futter
  - Jeremiah Soto
  - Vanessa Newmarker
  - Jacie Drakos
  - "Ethan (surname not captured)"
  - "Pat (surname not captured)"
---
0:00:00 Dave McLean: It's, uh, going to be a threat to their business model that Microsoft flags it that way. Oh, oh, threats to the market, yeah, that's, yeah, okay, thank you, yes.
0:00:11 Dave McLean: Of course that makes perfect sense. All right. We've messed around with a startling number of those, and, like, some of them are, some of them are specifically designed that they will be able to upgrade on your machine, so, like, the other people in the company, there's no way that they know that they're
0:00:31 Dave McLean: being imported. That's rude. Yeah. Totally. And that's depending on who you're talking to, right? Like, somebody, somebody in our group is advocating for that, just as a, like, less intrusive way, and it's like, I get it, but, Hey, do you have anything?
0:00:48 Dave McLean: Like, if you ever have to leave that meeting recording for the sake of, hey, this is who we talked about, like, do you want to have to explain to somebody that you reported it to a telegrapher?
0:01:00 Dave McLean: Like, both of your interpretations are too biased. They don't have to be able to sue you to be honest, they can be through with the rest of it, so.
0:01:14 Dave McLean: Yeah, something. Okay. Hey, California is great, unless you, Defensible times to believe that the other person is committing.
0:01:26 Dave McLean: In which case, I'm sure that was just that anyone is allowed to vote someone. Can they have a defensible evidentiary?
0:01:36 Dave McLean: Ontario is one party, which can include the person recording. So, I'm sure No.
0:01:53 Dave McLean: I'm trying to think of names. Name-taker, the audio seems to be recording. Let's speak about backstops Manhattan Beach, Alice. Okay, let's go.
0:02:11 Dave McLean: Yes. Perfect. Well, thank you everybody for coming, coming in for day 2. Mike, thank you very much.
0:02:23 Dave McLean: Today, this morning's focus is on primarily on the integration side of things. So this is a little bit more of an IT focused conversation.
0:02:31 Dave McLean: As far as the level of depth we'll get into for some of this, we're going to focus primarily on the employee integration side of it, a little bit on single sign-on.
0:02:38 Dave McLean: There's some rules of engagement within Elixir, they're the ones that do most of the SSO work, so we just want to make sure that we're primed and compatible for everything we're trying to do on this side of it.
0:02:49 Dave McLean: Depending on how this morning goes, we're projecting that we'll likely be able to start some of our inspections work before lunch, and then continue on through the afternoon.
0:02:56 Dave McLean: If for some reason we don't we run into a roadblock, something we need to really work through on the integration side, that's okay.
0:03:01 Dave McLean: We actually had a really good start to the inspections content during our overview session a few weeks ago. So, we can focus on making sure that we cover everything we did on the integration side of things.
0:03:13 Dave McLean: Sound good? Cool, uhm, I'm gonna slightly switch the sequence here, start with the employee integration, uhm, just cause there's probably more to talk about on that one, uhm, given some of the things we, we settled on yesterday with respect to job codes and profiles.
0:03:27 Dave McLean: Let's start with the basic model of the integration itself, so the purpose of what Intel X calls EDIS, the Employee Database Integration Subsystem, I think that's what the acronym stands for, uhm, is, it is a method by which customers of Intel X can integrate employee and user data into the system without
0:03:49 Dave McLean: having to independently hit each of five or six different tables, uh, in order to properly create an employee, put them into groups, create a user account for them, map them to a given employee, and environment that they should have access to, and so on.
0:04:02 Dave McLean: So they, they give this flat method to be able to push data through, and 95% of Intel X clients do this through, uh, an SFTP, uh, transfer with a CSV or an Excel file.
0:04:14 Dave McLean: So the model would be, it's a one-way interface. Integration, um, where you guys would configure a, a daily drop or a weekly drop, depending on whatever, daily is much more typical, um, daily drop of employee data that is, um, usually is built to reflect the full list of employees.
0:04:32 Dave McLean: Uh, and any given day, so you are, you're pushing back and forth all of the active employees, um, it's all the, I'm sorry, uh, pushing back, my bad, uh, pushing to us, yes, sorry, uh, get my verbs right here, um, pushing to us, a fine line.
0:04:49 Dave McLean: Um, we talked a little bit about maybe a status code for leave of absence, and we'll, we'll flesh that out a little bit more, um, but the idea in terms of properties that you're sending us at their minimum is an employee number.
0:05:03 Dave McLean: That's a unique, unique identifier from each person, and first name, last name, job title, email, uhm, supervisor's employee number, so we can build an employee hierarchy.
0:05:12 Dave McLean: Supervisor's employee number? Yes. Okay. Yeah, so if I'm employee number one and Ethan's number two, his supervisor's number I mean, we have that information, it's just I haven't seen a report that puts them both on the same page.
0:05:21 Dave McLean: Got it. Perfect. Perfect. Perfect. Perfect. The stuff that trips people up the most are the reference codes to the location structure that we talked about yesterday.
0:05:37 Dave McLean: So the reason why we talked about that first, it's to sort of have a framework by which we could do that for the employee of integration.
0:05:44 Dave McLean: So based on what we were talking about yesterday, what this would mean is for the location structure, we'd be looking to have a code sent through for each of the establishments, and for the secondary hierarchy, the left side of the board that we had up here, we'd be looking for either an individual job
0:06:04 Dave McLean: site, if it's something in the operations side of it, or any of the fill-in-the-blanks sections that we didn't actually fill in.
0:06:10 Dave McLean: And under each of the different headers that we had for CDO, for legal, for HR, for EHS, whatever the case is.
0:06:17 Dave McLean: But some reference to that hierarchical structure, so that we know where each person should be placed within that org structure for the home version of that.
0:06:26 Dave McLean: Where do they work for those codes. So I'll, we'll start there, Jeremiah, from what we were talking about yesterday, are those those properties or something that looks like those properties stored in the HR database right now, to the best of your knowledge?
0:06:42 Dave McLean: I think the majority of those are. There's going to be a few. Obviously you talked about an algorithm that runs in your system that calculates the, what do you call it?
0:06:54 Dave McLean: Stalage. Stalage, yeah. But, SFTP and CSV is very easy. I think we're already doing that for Velocity. I don't know if you've yet released it.
0:07:08 Dave McLean: It's going to be the same thing. Yep. Get started, but another, uh, integration platform we're looking at is Moomin. Yep.
0:07:18 Dave McLean: Yep. Because we're going to start distributing this information broadly to other systems. You're probably going to put that in place earlier.
0:07:27 Dave McLean: Right. So, I think that's what would benefit from that. It's a managed integration platform, which all the systems are connected to ERP, IntelliJ, software integration, Velocity, and then it maps that information to all those different systems.
0:07:48 Dave McLean: So, imagine each one connecting to a proper base, a list of data. Thank you. Governance is the key. It just manages the systems.
0:08:07 Dave McLean: It makes further integrations easier, right? Well, we, yeah, starting with the sole profit, we, you know, we talked about the APIs and integrations, and it lets us support a lot of that.
0:08:22 Dave McLean: It's handled outside of all those base conventions. It had to be managed elsewhere. So that was a big lesson for me.
0:08:28 Dave McLean: We talked a little bit about it, but we were still going to lean on software, you know. SQL Database would be the site location resource.
0:08:40 Dave McLean: After adding that, a lot of it started to make sense. But rather than write five different things, we managed five different systems.
0:08:46 Dave McLean: So that probably worked pretty well And it does support us. Perfect. So, um, again, for our AI note-takers here, the current decision we'll go off of is that the integration will be achieved using Boomi.
0:09:04 Dave McLean: Again, that might change in the based on the actual implementation details. If you go in that direction, would you, the fact that Intellect's 95% of its clients use an SFTP file drop doesn't mean that's the only option.
0:09:18 Dave McLean: And so, if you'd like, if there's a strong preference within the application, IT side of the business to do this through an API instead, where instead of having to stand up and manage an SFTP and potential encryption of the file back and forth, like, there's all sorts of different rules that come into
0:09:33 Dave McLean: play. You could also consume an Alexa's API to send the same data through. So that becomes an option. I think for the sake of today's conversation, let's go with sort of the originally scoped approach, which is SFTP.
0:09:45 Dave McLean: I just want you to have that in your back pocket in case, uh, candidly, I have another client that signed off on it in contracting with an SFTP, and the moment their IT group, uh, took a look at it to start the work, said, like, you know, we don't want anything going through an SFTP.
0:09:59 Dave McLean: We'd rather this be going through an API. So we're in the process now of changing it from a zero-cost point of view, but just in terms of making it API-scoped so they know how to use the endpoints, and they know where to push the data, what structure to pick.
0:10:11 Dave McLean: What the needs to look like, and all that good stuff. For you, just keep it in your back pocket. If you're looking at it, and for whatever reason, SFTP becomes an undesirable way to do it, you can use an Alexa's REST API for the same endpoints.
0:10:27 Dave McLean: We've looked at that REST API guide. We can send it if you haven't already. Oh, we've got it. Yeah. We'll evaluate that.
0:10:36 Dave McLean: That would be probably good. And that said, you know, maybe it is an option. But with what we have available to us, the AI, they're great at looking at creating REST API groups, logging, governance, buildings, the options are good to have.
0:10:59 Dave McLean: You might be talking about it, but one of the questions I have is how we integrate HID and how that maps to the user database.
0:11:10 Dave McLean: Will the SSD or CSV payload populate and select all the user accounts in the database? Yeah, so, somewhat up to you with how you stitch the file together.
0:11:26 Dave McLean: What I would say is the username field in that file, or in the endpoint if you use the API, is what's used for interchanging within a SAML token as a user authenticates with Entra.
0:11:37 Dave McLean: So, most companies would just push the person's email address into that one. That way it's unique and it's easy to call through the SAML configuration files that you set up.
0:11:48 Dave McLean: So, in that sense, it should be fine. Every now and again, you come across one where they want, like, just the prefix or UPN or something like that, but usually the email address is the one, and so, if you guys would identify what you want to use for the authentication token, you would have to ensure
0:12:03 Dave McLean: that that value is the one that's being pushed to IntelliX as the username field specifically, and then when we initiate the request with IntelliX to go configure the single sign-on stuff on their end to handle all the redirects and back and forth, they would confirm that, but they'll make sure that 
0:12:19 Dave McLean: Peace out. What you send through in that username is the token that's being passed through to match your SAML configuration on your end.
0:12:27 Dave McLean: But it's ultimately, it's up to you what you use. It's just whatever you decide on on the entrance side, make sure that that's a property that's identifiable.
0:12:36 Dave McLean: That's ideally available in Paylocity that you can send through. Otherwise, if it's not available in Paylocity, the file that you send to us, you're going to have to stitch it together.
0:12:46 Dave McLean: You're making it harder on yourself. I'm looking at the fields in the report and I, uh, they don't look clean.
0:13:03 Dave McLean: If you're familiar with that. Um, what do you mean, like, a field that represents? So, like, I'm looking at department description, for example, but it doesn't break down into.
0:13:21 Dave McLean: Oops. I'm looking at the map, the direct reports of John, like we talked about on the left-hand side of the screen.
0:13:32 Dave McLean: I'm not seeing the answer to that. Maybe you have different reports and different things to know Like, I don't see asset names, but maybe it's a strategy, but where are the rest of the team?
0:13:48 Dave McLean: Who are they bonded to? So it doesn't look like I'm not seeing the answer. Yeah, yes, uhm. No, there aren't ones that are like asset management.
0:14:01 Dave McLean: So, yeah, yeah, the way that. that out today is by the supervisor. Because they just have like all, uh, most, not all actually, but most of asset management is under, like, GGOC.
0:14:25 Dave McLean: And then there's like a couple that are a little bit different than that. There was a West, but yeah, there isn't.
0:14:30 Dave McLean: So we don't, so HR does not see, from what we know right now, HR does not see stuff, uh, sorted based on the people in the organization.
0:14:44 Dave McLean: Like the actual organization. Interesting. How does HR sort employees then today? What are some of the methods that you would typically see in there?
0:14:54 Dave McLean: They just see some weird department descriptions that don't match the organization. You might have seen one of the cases. Yeah.
0:15:00 Dave McLean: Seems like mostly the COO, but then I think it's intermingled with the personal officer. Some of her people are in there.
0:15:10 Dave McLean: And it looks like TGOC. And So, like, West, TGOC West is like most of the accounting, yeah, people who are on the, people who are assigned to, like, offices in, like, the West Coast, or.
0:15:49 Dave McLean: A remote, but reside in the West, like, for example, HR is under TGOC West, yeah, well, East is the bigger bucket.
0:16:05 Dave McLean: Is, like, the larger bucket, I think, because I think those are people who either are working or tied to the New York office or report to someone that is tied to the New York office, like, they're, like, working there.
0:16:21 Dave McLean: Well, on the left-hand side of that sheet, we had Gus, Amy, Legal, COO, right, so that we could do a Departments aren't by department.
0:16:40 Dave McLean: Maybe mine might be. I don't know that. I'd have to look. Yeah, there is one for HR. There is one for HR.
0:16:47 Dave McLean: I haven't looked to see if it's, like, all my people are there. But, like, there's no legal department. There's no HR department in the department.
0:16:53 Dave McLean: In department description, those people are, like, intermingled with other departments. Like, there's no clean departments, which there can't possibly be, and things like Yeah, I wonder if we try to do that.
0:17:08 Dave McLean: I think that may end up being the spot. The sole source of the, or the best source of this information.
0:17:13 Dave McLean: So, like, I feel like we'll talk with them about that, and then we can get it from one place. But if not, not for you to worry about as much as it was us to figure out how we're going to do it.
0:17:24 Dave McLean: Yeah, for sure. I think Edward's saying something about solos. It's just messed up. Okay. Alright. So, as part of this process, you probably see that it's a thing where we're trying to figure out how those systems meet.
0:17:40 Dave McLean: Very much so. Yeah. Very, very much so. Uhm, it's one of those things that, like, in theory is straightforward. It will align everybody to the org structure, but in reality, how HR or finance or any other part of the organization represents the org structure can be very different.
0:17:57 Dave McLean: It's very different than what DHS needs to represent it as, and I mean, it seems crazy to say it that way, but in reality, it's not.
0:18:05 Dave McLean: There's differences in the reporting, like external reporting for how you need to cut, slice, and dice the data. There's differences in security.
0:18:13 Dave McLean: There's differences model for how you need to see things across. So, the outcome sometimes ends up being, do the legwork to figure out what's possible on the payloss side, what's there, what's usable, what matches the closest to the needs of that we've talked about, if not the structure that we talked
0:18:32 Dave McLean: about. And if the answer comes back that like, hey, this is about the best that you can get from an automated feed point of view, then we go back to the whiteboard, just like, just like we talked about at the end of our session yesterday on this one, that, hey, there's going to be something that's going
0:18:44 Dave McLean: to cause us to have to really revise our thinking on this. And so the end result of that might be that the org structure and all of the security and reporting concepts that come from it might, might be represented as a, this is the best that we can do with it while still having an automated feed.
0:19:02 Dave McLean: And it becomes a game of trade-offs. I don't think you want to move to a model where everything is manually created.
0:19:08 Dave McLean: I don't think that's going to make sense in order to have an org structure set up a certain way. As far as hybrid options for, again, keeping in our back pocket, if there's a set of data in Paylocity that isn't representative of the org structure that we want, but we can figure out mapping rules that
0:19:30 Dave McLean: , you know, if, uh, if there's a department code or something like that for a person that's XYZ, it should all go to this, uhm, this location node or something like that.
0:19:40 Dave McLean: Okay. Okay. No, no, you know the data better than I do, so for your, If we take TGOC East and TGOC West out of it, the rest of them, uhm, probably align most similarly to when we have the establishments by location.
0:20:00 Dave McLean: Okay. For the most part, because, like, construction was not one of the establishments, but that's, like, the outlier. But then we have development, and then Edward Sanborn is basically it.
0:20:12 Dave McLean: Right, but I'm just saying, like, the way that we, what we currently have most closely aligns to that. Because TPOC Wind would be basically pretty much Palm Springs and Apache, and then Solrs is Lockhart, and Edward Sanborn is Mojave.
0:20:31 Dave McLean: Like, I mean that, so that is, like, the closest we have is probably in New York. But we have work location, so we're going to use that for the right-hand side, and then we're going to use, because that's how we do our establishments.
0:20:44 Dave McLean: So we're not going to use department to do establishments. We use work location, and then we take the remotes, and they are mapped.
0:20:50 Dave McLean: On the left-hand side was the departments of Kerrigan who report to the CEO's office. That was what we want for security, and that we do not have, and that would have to be mapped through some kind of exercise of, you could say, Bye.
0:21:06 Dave McLean: Let me just think for a second. If you somehow can report up to the job code for chief development officer, that you map there, and we wouldn't have to ignore the department to start saying, could we do that?
0:21:21 Dave McLean: Like, like, maybe you have three layers in the development officer's organization. Would it be able to go, I report to you, he reports to him, and they report to that?
0:21:33 Dave McLean: So this is where Boomi comes into play, because Boomi has what's called an ETL team. It's the, the T in the middle of that is transform.
0:21:42 Dave McLean: It's the, all of the business logic in the business. You got it. You got it. Uhm, if, if you wanted to push that transformation further downstream to us, we could probably do it from what you're doing.
0:21:54 Dave McLean: We're not it. We're just not going to change Cool, okay, so I think we have an option to give it.
0:22:15 Dave McLean: Yeah, again, back pocket, right? But I think the integration tool is. Yeah, let's see when that's money for so as they say.
0:22:35 Dave McLean: So, I think the action item. And for you guys on this one is to work with your HR team to figure out structure of the data there.
0:22:49 Dave McLean: If there's anything hidden in the background that, you know, you got it, you got it. And then following from that, it's then to work with with the HR and IT side to go and figure out what exactly that transformation logic is going to look like, where it's going to be stored, and how it's going to be 
0:23:05 Dave McLean: stored. On our end, we use those as an assumption that what comes through to us will reflect some version of the structure we saw on the board.
0:23:14 Dave McLean: You'll handle giving us that data points that we need in order Sounds off. Sounds off. Sounds off.
0:23:47 Dave McLean: Let me see if I can Okay, uhm, let's talk job code.
0:24:08 Dave McLean: So job code comes through right now, like, it would come through as an alphanumeric or like a number itself. How would that be represented?
0:24:22 Dave McLean: Yes, yes, yes. Our HR report, but we did it in the onboarding report. So we have never seen, as far as I know, I've never seen like a full list of companies on those.
0:24:37 Dave McLean: And like, if they fat-finger it, or if they actually. You have to select something, and it's covered. So, like, actually look at spread their data.
0:24:50 Dave McLean: Yeah. Um, maybe it's the same job, but you've got different products. You got it. What, what needs to happen on our end in order for us to use the job code in the fashion we were, we were talking about yesterday is that the job code needs to exist.
0:25:05 Dave McLean: It exist as a list in Intellects, which is going to have some governance around it, and it's going to have some other stuff that's associated with them.
0:25:12 Dave McLean: So in my mind, the way it would work is, um, let's say a new job code gets used or created, we receive a record of that job code.
0:25:21 Dave McLean: How we receive that record is, there's a couple of different ways, we'll talk about in a second, but at the end of the day, we get, hey, here's a new job code, 1, 2, 3, 4, Dash, Manager of Customer Success, or whatever the title actually is.
0:25:34 Dave McLean: Uhm, that likely is going to have to trigger some sort of a process in Intellects to have an admin define those other properties.
0:25:42 Dave McLean: So, okay, well, what is the job code that we're looking at here? Uhm, what are the groups that we want the person to be in?
0:25:48 Dave McLean: How do we want to determine all of these rules? If you don't, the person will have to do that, because otherwise we would never know from just the code and the name of the job title.
0:26:03 Dave McLean: So, wait, you got it. You got it. So, I would envision that as a notification. It goes to a designated group of admins, uhm, possibly it's a, you know, a workflow around it as well, just so that everybody knows who it is that, or knows whether that has been set up and established initially, uhm, and,
0:26:21 Dave McLean: yeah, once you click the link from the email address, it's okay, I see it, I'm gonna go put everything I need into it, and confirm, confirm job code creation.
0:26:29 Dave McLean: Uhm, we'll have to figure out, uh, do we want to version that, or, like, what happens when those things change over time.
0:26:35 Dave McLean: Uhm, but I think ultimately, that would be the, the basic model that we'll, we'll work on. If, if, uh, we produce a new user list every day through PIS, and HR hired, and we hired somebody else, and then we got the, yeah, it comes across as that, but we haven't established that yet, and then, it's, let's
0:26:55 Dave McLean: Thanks. I would say we can handle it a couple of ways, but I think the cleanest way is that even though we are, we are, in that scenario, we are likely to receive both the new job code and the person using that job code the same day, we hold off on processing the person with that new job code until somebody
0:27:13 Dave McLean: has set up the job code. So if, uh, again, if, if Edward joins the business with a new Intellects admin code, and we haven't defined what that's supposed to look like, leave him in Intellects' staging table, which is where you're pushing the data.
0:27:28 Dave McLean: For, for your integration, we just won't process him out until that point. Or if we do, you got, or if we do, we'll process him with some basic, uh, like the most stripped down possible parameters.
0:27:39 Dave McLean: So we literally create the employee just in case it gets injured on his first day, for example. Something we just injured you on your first day, um, create him with that basic level without access, even at that stage, at that stage, because we don't know what level he should have.
0:27:57 Dave McLean: Then when you go set it up, um, at that point, we can then then apply whatever those changes Employees, once they are hired at their job, then there is like a model of velocity that is onboarding, which has different, like, more limited, I think, information, but it does have the job code.
0:28:33 Dave McLean: If possible, like, we could feed the onboarding report that comes from that module, and it may, but it may not have, like, everything that, you know, we need to put to the stages.
0:28:47 Dave McLean: But we can't find out. There's a new employee on the day they start. We have to know ahead of time, because there's some in-person things that have to happen, like those, some of the site-specific things, trainings, and so forth.
0:29:01 Dave McLean: Uhm, the other thing is, we could, we can have things buttoned down if there's a new job probe, if we know before they're starting.
0:29:11 Dave McLean: Like, we haven't seen a job probe before, now we can get a, somehow we can do something to, uhm, so, I don't know.
0:29:20 Dave McLean: It's not, It's actually not on us, so, like, at the end of the day, that's going to be a question for HR and for IT to figure out at what point is that person's data accessible for the feed.
0:29:30 Dave McLean: There is no restriction on the intellect side on creating a person before they have officially started. You can create the person with the date of hire that's in the future, no problem.
0:29:40 Dave McLean: And in that scenario, if you were doing that, if you had access to that data for the integration, then create Edward two weeks before he starts, right after he's been hired and everything's been approved.
0:29:53 Dave McLean: Excuse me, so if we went down that road and there's only 1 feet, like, here for an employee that everything has to be populated.
0:30:06 Dave McLean: I don't think that would give us a heads up because there's. Is there, like, an interim where we could do, like, a feed of the stuff from the onboarding report, like we do today?
0:30:16 Dave McLean: We take the stuff from the onboarding report, we make it available to the safety coordinators so they know somebody's coming.
0:30:23 Dave McLean: Yeah, so at minimum. So, yes, you can do manual. I'm assuming a world where there's no manual creation here, because otherwise we're, right, otherwise we would say that every new person is going to be manually created through this fashion.
0:30:36 Dave McLean: But it's, there are minimum requirements for the feed to work, so you need to have an employee ID. You need to have a first and last name.
0:30:44 Dave McLean: You need to have, uhm, you need to have the location code that they're going to work at in order to create them.
0:30:51 Dave McLean: So, again, based on, on that board, you need to know what establishment either they're going to or they're working on, going to map them to from our rules that we talked about yesterday, uhm.
0:31:04 Dave McLean: We can calculate that. That should be taken in the employee ID and yes, we did. Yes, sorry, that's really me.
0:31:12 Dave McLean: Can't just page them with a limited employee. You must have a location for them. They have to. Otherwise, we're defaulting them somewhere, but even then, that location, like, that's, that's kind of integral to some of the training that we're going to be working off of here.
0:31:28 Dave McLean: So, your goal isn't actually to create the bare minimum. The goal is to create the bare minimum that serves the purpose of what we're doing.
0:31:33 Dave McLean: Well, I hear that. I'm just thinking it's part of the, yeah, it might make sense to get to that. Um, is it enough just to get staged and then part of the work will be staged with the minimals?
0:31:47 Dave McLean: To add to the initiative. To add with, like, a human? Well, if it's staged, yeah. The way that you talked about it, it's staged.
0:31:56 Dave McLean: Staged there, you know. But I think that, like, that's what gets away from the goal of nothing's manually done. May I tell you what we have now?
0:32:04 Dave McLean: Yeah. Automated daily report. Yeah. We have employee ID number. Yeah. First and last name. Hire date. Position code. Department name.
0:32:12 Dave McLean: Not very helpful. Work location name, which we use. You've got everything you need. Home address. Okay, that's that's all we need.
0:32:18 Dave McLean: And the supervisor. Yes. Occasionally we do get blank fields. Yeah. So, we will find out about it, you know, I'm pulling it the employees coming prior date.
0:32:35 Dave McLean: Yep. And, often times, not every field was completed for that person. Correct. And then, however, the next day's report will have additional information.
0:32:46 Dave McLean: And, you know, so on and so forth. All of this is an IT conversation. What we need on our end are those properties in order to create the budget.
0:32:53 Dave McLean: Yeah. If this is complete, that's enough to get the first step done. You got it. You got it. And so, sometimes they're not populated.
0:33:02 Dave McLean: And you're sending, HR is sending that file through. Whatever IT process in Boonme is transforming and compiling this file that comes to us.
0:33:11 Dave McLean: At the end of the day, the logic would need to be there for Boonme to recognize, oh, the job code, let's say job code is the one that we care about in this conversation.
0:33:19 Dave McLean: Job code's not there, so we're not going to send that. We're sending that to Intellect yet until we receive the job code in a subsequent file update of that onboarding one, once the job code's been assigned.
0:33:29 Dave McLean: Or if we don't have a work location for the person yet, we're not sending it through to Intellect. That's the advantage of having something in the middle doing this work.
0:33:38 Dave McLean: It's the sorting and mailman that's going to figure out what it is that's coming to us. At the end of the day, from the downstream system's point of view, it's one file that you're sending us, or one structured payload that you're sending us each day.
0:33:51 Dave McLean: How you build that is where all of that logic comes along. If something were to be accidentally pushed to Intel X that was not a complete data set, what would happen?
0:34:10 Dave McLean: What's not there. So if it was a date of hire, let's say, date of hire is not a mandatory field in Intel X.
0:34:15 Dave McLean: So if that fed through to us, we would just process the person without a date of hire. Person exists. Uhm, that functionally doesn't have much impact on anything that we're talking about as far as the data set.
0:34:26 Dave McLean: Sure, but like, if you had a job, it would just take, we'd have to set default logic in that case.
0:34:37 Dave McLean: So it would be today. You don't need it to create the employee record, because employees without email addresses can get injured, for example.
0:34:54 Dave McLean: You do if you want them to log into the system. It's right now, you know.
0:35:08 Dave McLean: But we get that, I mean, it's highly recommended and should be there by the time the person starts, but in order to create in order to create it.
0:35:25 Dave McLean: Yes, I, I'll see. I'll send them to you. Like, sorry, I'm, I'm, I'm going off memory here. So, there, there is that, we'll emphasize that as an IT mapping question.
0:35:39 Dave McLean: So, that file that we can, we can consume is columns A through AW, right? There's about 8 or 9 that are truly mandatory.
0:35:50 Dave McLean: Uh, there's another 3 or 4 that are, like, if you want the person to log in, they're mandatory. If you don't care about the logging in, they're not.
0:35:57 Dave McLean: And then there's another 3 or 4 that are, like, highly, highly recommended to log in because they're really meaningful. Things like the job title, for example.
0:36:05 Dave McLean: Yeah, yeah, for sure, for sure. We can send you a sample template and a data dictionary that gives you each one of them.
0:36:12 Dave McLean: The point, though, for you guys in terms of sequencing is the logic that you want the integration to capture for what sends to us.
0:36:24 Dave McLean: You guys will have to define what's the trigger for Paylocity to include that information and for IT to recognize when is it a complete job.
0:36:33 Dave McLean: It have to enough record to send to Intellects, because there are scenarios where you might have enough information to meet the technical requirements of creating an employee record in Intellects, but it doesn't have enough to do the things you want it to do in Intellects.
0:36:46 Dave McLean: So maybe just hold off until you have those extra parameters. Does, is it going to be okay if we create an employee record and maybe send a notice out because we know somebody's starting and we meet the minimums, but we don't have their email.
0:37:01 Dave McLean: So then when they, the day they start, the rest of the fields come in. Yeah, it can be. Handle that, right?
0:37:07 Dave McLean: Like a partial with the minimums and then the supplemental, and then it does what it knows to do. It stops.
0:37:13 Dave McLean: Yeah, you might think about it. It's going to be a daily. It's going to be a partial record of the case.
0:37:23 Dave McLean: That's not the thing that we grant access at that point. The record is supposed to be accurate a week ahead of the start date, correct?
0:37:34 Dave McLean: That's correct. They don't, like, we didn't have a lot of this. We just don't push it a week ahead By complete and accurate, you mean including the email address as well?
0:37:47 Dave McLean: No. So that piece doesn't come. Got it. Okay, and occasionally someone goes, oh, wait, we have someone starting tomorrow. Forgot to tell you here.
0:38:01 Dave McLean: And yeah, we just have to deal with it. Yeah, yeah, for sure. Right. And so the edge cases that we're trying to minimize, but right, the solution for those is further upstream.
0:38:10 Dave McLean: Ideally, and then it's. Sort of accepting that, like, there's going to be a 1% shove doesn't fit the mold. Yeah.
0:38:17 Dave McLean: So that's okay. I think, yeah, I think in that scenario. What we're shooting for then would be approximately a week in advance of the start date is when we we'd like, they're getting the feedback.
0:38:27 Dave McLean: And then first kind of complete record of the employee, not their user profiles yet, which would include the employee number, 1st name, last name, the job code, the work locations.
0:38:38 Dave McLean: We're able to map them through because we also have the date of hire, which would be future date in that scenario.
0:38:44 Dave McLean: We can use that information to then put them into the relevant groups, and in particular work groups for training management purposes that would assign their courses.
0:38:55 Dave McLean: The key from a scheduling point of view is when we assign them today, knowing they don't start until next week.
0:39:00 Dave McLean: We don't want those courses to be due today. So those courses need to be applicable from whatever date in the future that that start is, and that needs to be staged out.
0:39:11 Dave McLean: So that's some processing, processing logic on R, because the model works right now. But when I put you in that work group, if it's got five courses you do today, there's no, there's no sort of delay or grace period on that, that process.
0:39:25 Dave McLean: So all of that's controlled by the applicable form. That doesn't matter if that's a user. Yes, that doesn't matter. Assigning a course to an employee does not require an email address.
0:39:36 Dave McLean: Having the employee log in to complete the course requires the email address. Right, so ideally a week later when the email address gets married up to this record and we receive it in one of the daily feeds, that activates the user account and the person now, when you direct them to go log in to the 
0:39:53 Dave McLean: system, they click a single sign and it kicks them in. I think we'll, I think in reality you're probably not going to want to do it on a, a single universal rule.
0:40:08 Dave McLean: You're probably going to want to be able to define that, that increment per course. Yeah. Thanks. You're thinking it would be doing 5 days after 5 days.
0:40:20 Dave McLean: The rest are going to have, like, longer increments, probably longer increments to get them done. But the first stat, we're going to make kind of short.
0:40:29 Dave McLean: Okay. See, they only have 6 courses, and they're, you know, they have no money to do that. There's like 10.
0:40:36 Dave McLean: So the functionality enhancement to do that would then be what we need to introduce is the concept of a race period that you can define for each course that applies for the first assignment of it.
0:40:48 Dave McLean: So, so that we're not making it do this. The day that you assign it, we're setting up a lag of X number of days, whatever that number you define for that courses.
0:40:56 Dave McLean: So for those 10, those 10 sort of day 1 courses, they're actually 5 days out. And then all the others might.
0:41:08 Dave McLean: It's overdue, right? It's going to say it's overdue. Yes, so for most, because it was assigned ahead of time, it'll just say overdue.
0:41:21 Dave McLean: It's like, well, it is overdue. You're onboarding. Yeah, so we could just take that step. Yeah. If we wanted to make it simple, right?
0:41:28 Dave McLean: Yeah, we could. Yeah, that would be the simplest way. Yeah, the simplest way would be like, you're onboarding, this is your first week with the company, these are due overdue.
0:41:38 Dave McLean: Yeah, so it would Just do, yeah, just get in and do these. So with that, so that would be a, obviously a course, right?
0:41:46 Dave McLean: And then the frequency would be, uhm, so the frequency for that course would be onboarding. I almost see that as being 2 separate courses, right?
0:42:00 Dave McLean: Because the other course that may be due annually, but it's that same course, it's going to have a different frequency.
0:42:07 Dave McLean: So just first, is that course, is it fundamentally different content? Uh, the annualized one could be the same, right? I would say, I would say it's more, if we're going to change the behavior in Intellects in order to account for that lag, that initial lag, it's only the initial time through.
0:42:39 Dave McLean: It's not, it's not all subsequent times. I see. Just say it's not. I do. So then the frequency then, if it's an annual.
0:42:49 Dave McLean: So, do you think this is from the day that they did it? What's that? The recurring due date is going to be the same, no matter whether they started on day 1 or whether we assign it August 1st or anything like that.
0:43:12 Dave McLean: Right? The due date, the recurring due date is calculated as the frequency. On top of the date that it was completed, not the date that it was due.
0:43:20 Dave McLean: No matter if it's a new person, existing person. You got it. You got it. So that if 1 of those, 1 of those onboarding courses is an annual course that they need to do every year, and you assign it to the person a week in advance, of their start date, because that's when the feed did all of this orchestration
0:43:37 Dave McLean: . They show up on their first day, and they see it, and it shows overdue, and everybody has a conversation. Yeah, that's just, that's how the feed worked.
0:43:43 Dave McLean: Go do it as quickly as possible. They complete that course on the second day of their employment. Sorry, just a Data, how does it, how does it know that it's overdue as part of their lease?
0:44:05 Dave McLean: Kind of a week before they started, so when the person first logs into the system and sees the thing says it was due last week, by definition, that makes it overdue.
0:44:15 Dave McLean: So, is there 2, I guess, let's see. The way I think about it is, it's assigned and then there's a reoccurrence, like a reoccurrence.
0:44:25 Dave McLean: So, the reoccurrence setting would be, I think, a bit like that. Like, I'm signing it and the reoccurrence is due.
0:44:32 Dave McLean: So, it would be an assignment date, a due date, and then a reoccurrence frequency? Yeah, the record looks like this.
0:44:43 Dave McLean: There's no previous completion when it first gets assigned to a new person, so it's immediately overdue. So, there's, yeah, sorry, I'm trying to visualize it myself.
0:44:53 Dave McLean: So, we have. We have the person, we have the course, we have the data assigned, which might be, what's today?
0:45:01 Dave McLean: So, we'll say data assigned is, let's say it was assigned today, which is a week in advance of the start date.
0:45:12 Dave McLean: Which means, that based on the fact that it is an annual course, with no specific logic, that means, in this world, we're not talking about introducing a delay or anything, it's just the Thank you.
0:45:26 Dave McLean: It's going to show, so it's going to calculate the due date for that requirement as 09.16 today. Now we fast forward a week, he actually starts.
0:45:36 Dave McLean: So it's 09.23, hey Ed, how's it going? Glad to be aboard. Yeah. The first time he's ever completed it, so completes the record, completion date for that, so the most recent completion date as of the moment he finished it for the first time.
0:45:52 Dave McLean: Let's say he finishes it on his first day, so that's 09.23, which by virtue of that, and this, changes this to be 09.23, sorry, 2027.
0:46:07 Dave McLean: Updates. Updates. It takes this and adds that in order to get the due date, the next due date. It's on, and that'll happen.
0:46:19 Dave McLean: Feed creates the person with the job position, put them into a work group, which creates this training requirement record as of this date.
0:46:30 Dave McLean: Okay, so there are 2 ways to do this. The way to do this with us making no changes to the product would be upon this person's training record being created, which remember that.
0:46:46 Dave McLean: That's completely automated, so you're hands off of this. You now have to be hands on. You'd have to manually change those requirements to the future.
0:46:53 Dave McLean: If we want to make a change to the product to accommodate this, this is a change to training management. It's introducing a.
0:47:00 Dave McLean: What is the initial lag time for the 1st time somebody gets assigned to this course from the day that they're assigned so that the 1st due date is this date plus whatever that number of days is in order to give them the week or 10 days or whatever you want to be to the course.
0:47:18 Dave McLean: And I'm saying that's worth spending more money than you ever spoke, it's just due. You're here. Get it done. I agree.
0:47:25 Dave McLean: This is your 1st week. Get it done. And then there's no way to, because we have those handful of people that we get informed on, you know.
0:47:32 Dave McLean: Yep. They're here. Yeah. Yeah. Okay. If somebody says, I don't like the challenge of saying someone's overdue on their first day.
0:47:46 Dave McLean: It just wasn't a logic available without paying more. I'm like, so, like, I, you know, it's there. You don't like it, it's overdue?
0:48:00 Dave McLean: I'm not sure if this is the right time for this question. No, no, go for it. For implementation. What information are you going to need from us?
0:48:08 Dave McLean: Because we've got to catch everyone's prior training history to load in the system in order to calculate the next student.
0:48:19 Dave McLean: Yeah, we'll give you an Excel template. Uhm, that basically what's going to, what you're going to give us with that is for each person, course combination, the last date that they took it.
0:48:31 Dave McLean: Uhm. So you'll provide that? Yeah, yeah, and it's actually a deceivingly simple template. It's like five columns. On it, uhm, that you're, you're likely extracting out.
0:48:41 Dave McLean: Intellect has a, a place that we can load that, that then takes that information and goes, Oh, uh, Dave took that course, which means he must have a requirement for that course.
0:48:52 Dave McLean: It'll automatically build the requirement record and calculate that. And then the next date. Uhm, if it's a one-time course, it would recognize, oh, that was a one-time, so don't calculate the next one.
0:49:01 Dave McLean: If it's in every five years, then it adds five years on to it, whatever the, whatever the case is. Okay.
0:49:06 Dave McLean: Okay, but that's person, course, completion date. Okay. That's essentially it. And I, as an optional result, the frequency comes, it's inherited from the course, so you guys would load in another Excel, or you could do it manually if you wanted, depending on how many courses there are.
0:49:26 Dave McLean: How many, how many, I mean, based on how we've talked about that. Yeah, yeah, 100 plus, yeah, okay, definitely doing Excel.
0:49:38 Dave McLean: Correct, yeah, yeah. You know, we're going to have simpler training materials for corporate or office space, but we've lost the channel, I believe.
0:49:51 Dave McLean: Okay, okay. I'll make you do 5 just for good practice and then we'll. Okay, yeah, I'll make you do 5.
0:49:59 Dave McLean: I'll 5 courses just for good practice and then the rest of them will load with an Excel file reason. I say that I sort of say that half jokingly, but we work with some clients that like they never actually go through the process and implementation of creating a course because they get us to load it in
0:50:14 Dave McLean: from Excel file, which is great. That's expedient and fast, and then you get to go live and nobody's ever actually thought through that process of creating a course, because they there's a mind body connection of like when I'm actually entering the data into the system and making decisions about the 
0:50:29 Dave McLean: frequency and decisions about the content and. And how I want to structure and categorize it and all that. No, that's what I was asking yesterday about, you know, testing.
0:50:36 Dave McLean: Yeah. That, that, you know, do that, so. Yeah. You got it. You got it. Lighting up instruction. Yeah, you got it.
0:50:44 Dave McLean: Okay. But, back to the integration. So, to recap. So, to where it is, what we'll likely end up seeing is a week-ish in advance of the person's start date is when we'll likely see at least the first reference to their, that person's employee record in the feed coming to us.
0:51:02 Dave McLean: In an ideal world, that feed is going to contain enough information for us to create the person, map them to a job code, and using that job code, put them into work groups, which is going to create all of their, their training requirements.
0:51:14 Dave McLean: Those requirements will be due the day that those assignments are made, as opposed to post-dated. So, that's when the person actually logs in on their first day, it's going to look like everything's overdue, but that's okay.
0:51:25 Dave McLean: We've accepted that, that risk here. What will not be in that first feed, most likely, at least in most cases, is the information needed to create their user account, which, amongst other things, is going to include, include their email address.
0:51:37 Dave McLean: Uhm, when we get that, at a subsequent point in time, hopefully before their start date, uhm, then, okay, okay, then I will say as a constraint, if we don't have that, they will not be able to log in to do said training And that will automatically push the account out, right?
0:52:14 Dave McLean: It won't be a lag. It'll be the next, the next feed. So if the next feed is at 2.30 in the morning.
0:52:22 Dave McLean: It'll be 2.30 in the morning on day two. It's the daily process that, or the daily file that's being sent to intellects containing all of this information.
0:52:47 Dave McLean: Is it really, like, our email assignment, is it really cutting it that close to the person's start date? It just can be in some cases.
0:52:54 Dave McLean: We have to get it separately for our third parties at OT. Okay. Yeah. Okay, so you guys, uh, take those two things and put them on the same report, which then, you know, we're neighbors again.
0:53:13 Dave McLean: Well, I guess what we have not checked with HR, Matthew, I don't know if you're logged into HR, but we have not checked whether, now that they're getting the email address information sooner, so it's not We helped them arrange that.
0:53:28 Dave McLean: Yes, we did. If they could, uhm, put that into the onboarding report, or have we already run that down, that the onboarding report cannot fall as any?
0:53:38 Dave McLean: I don't see why it couldn't. I, that's a question. I have it, yes. Sorry, yes. Sensible idea, I will note it and we'll find out.
0:53:47 Dave McLean: Yes. If we're able to put the email address in there, then we could ask them if they would to put it in when they receive it, so that it would flow with the onboarding report.
0:53:58 Dave McLean: Can we get a copy of that onboarding report? Jeremiah, how? This is, I will, I will admit right now before I say the rest of this is the wrong solution to this problem.
0:54:13 Dave McLean: The problem is, or the solution should be that. The moment that email is provisioned in Entra by the 3rd party managed service provider, I guess, you know, it should be feeding directly to HR automatically to Marriott, but that person's account should be right.
0:54:28 Dave McLean: That's probably the real solution to this, but knowing that's not the case, no, knowing that that's probably, for whatever reason, that hasn't been the solution so far, how feasible do you think it would be that in that ETL process, you could retrieve the email from that person's Entra account before
0:54:49 Dave McLean: you compile it into the file, so that you're getting it basically the day that it's provisioned in Entra? I'm thinking through like what you're saying, the same time, and I think there's a way to do that.
0:55:02 Dave McLean: I feel like, with, with, with the ATL we can help with the integration of Velocity. Yeah. And so, I think it would be kind of happen that way.
0:55:10 Dave McLean: Yeah. Natural. Right. That's a stronger enterprise architecture for other things, right? Otherwise, if you build it into our process, it only helps us.
0:55:19 Dave McLean: Right. So, a couple ways to do that. We're going to make the effort to make that happen. Let's just make it happen.
0:55:28 Dave McLean: Right. Get it to Paylocity sooner, automatically, and then that way, us and anybody else down the road who is sourcing data from Paylocity gets the email address sooner.
0:55:37 Dave McLean: Okay. I know it's a manual process, but I, I think we And I will say, I don't think that's prerequisite to implementing an integration with Intellix.
0:55:47 Dave McLean: It just hardens that integration. It makes it stronger. It makes the data available much sooner in the process. And so it's going to avoid a lot of these scenarios where the person has started, and, you know, we just, we don't have the email address yet.
0:56:00 Dave McLean: It's worse because you're already telling him, a week in Perdue, but they can't even log in on their first day, it's just very good.
0:56:12 Dave McLean: So it's just more of an explanation. Yeah. On the, on the detail of it. I can see that. For sure.
0:56:18 Dave McLean: For sure. Okay. Okay, cool. So lots of good, open questions here. Good. So, um, from a logging point of view, so let's talk about when something goes wrong, we get a parameter in a data file that is mis-malformed, we get a date that doesn't exist, or we get a drop-down that doesn't, doesn't match the
0:56:41 Dave McLean: data, something, whatever the case, there will always be something like that. Um, Intellects logs all of those in processing, so if we receive something, and when we go to process it in that EDIS process, if it triggers an error, the most common one that I typically see is, uh, Supervisor Reference, 
0:56:56 Dave McLean: because Supervisor doesn't exist. If the Supervisor just left the organization, and all of their employees still report to them, it's not going to stop the integration from working, but it will flag that, oh, that person's Supervisor doesn't It logs it right now into a back-end screen, but there's no
0:57:13 Dave McLean: push out. Would we want to be introducing some sort of a weekly or daily integration summary to the Admin team?
0:57:21 Dave McLean: Or to IT? I mean, it's the same build if it's daily or weekly or anything else, right? It, how you cut the data might be a little bit different between the two.
0:57:33 Dave McLean: Like, we can, we can sort of figure out what we want to look at, but I think it's more, what's the likelihood that it's getting action daily versus if I show up Monday morning, there's my, there's my report.
0:57:43 Dave McLean: That would be the Yeah, for sure. For sure. So start, we'll start with daily.
0:58:01 Dave McLean: Because the man helps us to change someone's supervisor, and it turns out signatures, paperwork. Yeah. I'm thinking of these things not that regularly when I think of supervisors.
0:58:15 Dave McLean: For sure. Like, those people won't be reading. It's that. For sure. It's one example. There could be other things that cause the integrates to fail.
0:58:23 Dave McLean: So, I can't be seeing it early on. But, yeah, daily, just because if you expect to see an employee there, and they didn't make it, it's a reason.
0:58:31 Dave McLean: Well, we'll log in and find out. Yeah. And we'll look at a lot of methods to skip that. A lot of, say, integrates before today.
0:58:37 Dave McLean: Yeah. Yeah, then maybe we'll release it later. So, what is that going to mean for those employees? Nothing? For the employees, nothing.
0:58:47 Dave McLean: Yeah, I'll, no, you know what, I'll revise that statement. It somewhat depends on what we decide with some of the future workflows.
0:58:53 Dave McLean: We'll take the supervisor example. If, uh, let's say your incident workflow, upon submission, goes to the supervisor. It means that when they hit submit, you get an error message, you don't have a valid supervisor to send it to.
0:59:07 Dave McLean: Oh, it'll just be invalid? It'll be invalid. Or would they go off the train? You, you can. We can continue to build more and more logic to account for this, but the question I would then challenge you guys with is, are we solving the problem, or are we solving the symptom in this case?
0:59:23 Dave McLean: And, and maybe pragmatically we don't have control over solving the problem. That's an HR thing, so we have to account for it.
0:59:30 Dave McLean: But it's that kind of stuff that comes into play when, when the integration fails, is there might be scenarios where.
0:59:36 Dave McLean: A workflow doesn't work the way that it's supposed to in that case. These tend to be edge cases, right? Usually in that, that transient window, when a supervisor has left the organization between the day they left and the day that HR changes their supervisor.
0:59:51 Dave McLean: It's not actually that common that you see I don't an incident happen for that segment of people specifically, but it's possible.
0:59:59 Dave McLean: Like, they submit hazard recognition reports all the time. I think there will be hiccups. So if we feel like it's a risk that's worth solving for, then it's changing the logic of the workflow to account for that.
1:00:14 Dave McLean: It can be, if we're talking hazards, a lot of times hazards don't necessarily go to supervisors on submission. They go to a role that's more associated with the, like, an EHS coordinator at the site.
1:00:24 Dave McLean: That might be one that it. There's a possible solution that could be a bug. You could, you could put a failover to say, go up to the next level, which reduces the likelihood.
1:00:36 Dave McLean: How often would it be that both a supervisor and the next level supervisor got that probably solves it. But it, it, it's, it's, that decision has to be applied to every single workflow decision made.
1:00:46 Dave McLean: So. That's where the error is. Yep. I do, but that's.
1:00:58 Dave McLean: So this creates a self-correcting model, yeah. There, yeah, there, yeah, that's a, that's an interesting way to look at it too, but it makes it self-correcting, right?
1:01:14 Dave McLean: Uhm, that at least is the queue that, oh, it looks like HR hasn't made that change, and I've got to go turn it to you.
1:01:25 Dave McLean: Yeah, And would that still come to the error log, even though there's logical errors? The submission wouldn't trigger that. I wouldn't go to the level of trying to log every time it hit the failover.
1:01:39 Dave McLean: It would, it would get logged in the employee integration that, uh, in such and such such and such employees. Supervisor number is not that.
1:01:48 Dave McLean: OK, that's what the error code would be limited to the error. The process would still work if we built that kind of the process because it worked around today.
1:01:56 Dave McLean: I like this. Yeah, we got lots of stuff that I can't dispense with the hospital. Process or even progress with the system, but on the back end, we still need to make some fixes.
1:02:12 Dave McLean: I think that's probably the best solution. So it escalated to the error supervisor. It would be unlike, you know, not It isn't actually problematic, because they, they don't have things assigned to them.
1:02:39 Dave McLean: They're, they might have training courses that we're, we're deactivating, but like, most people at any given point in time won't have a corrective action assigned to them, or a permit condition assigned to them, or this or that, whatever the thing.
1:02:51 Dave McLean: But when they do, how do we want to handle that? Do we want, the options available to us right now are, we can either prevent the archival of that employee, if you have a task assigned to you, don't archive it, archive the person, log it in the air, log on the integration, so that an admin can do something
1:03:13 Dave McLean: , and at which point you can, as an administration team, you can then decide and reassign accordingly, so that it corrects on the next run.
1:03:20 Dave McLean: It's kind of option 1. There is also a world map. Where, yes, we want to deactivate the employee, even though they have tasks assigned to them, those tasks move to a separate task list, which is, creatively enough, uhm, inactive employee tasks, and it honestly becomes a bit of a dumping ground.
1:03:39 Dave McLean: So you have to be really on it to make sure that you are reviewing that and making sure that you reassign those Uhm, but that's also a possibility.
1:03:47 Dave McLean: It prevents the integration from stopping the archival of that person. Uhm, those are, those are the two pieces that exist.
1:03:55 Dave McLean: Uhm, other things that, that if we wanted to introduce into Sculpt as another is, Ethan's actually built a product like this before where that archival triggers a task to someone, typically the supervisor of a person who's left the organization that says, hey, so-and-so's left the organization, here's
1:04:17 Dave McLean: all the tasks that are assigned to them, you decide what you want to do with all of them, who they're going to go to, some of them you might take yourself, some of them you might delegate to other people, here's all the roles, that they're part of, so that you can decide, uh, who else do I need to put
1:04:29 Dave McLean: in, into that role for that location, you know, in their stead, um, who's going to fill that gap in that role.
1:04:36 Dave McLean: We haven't got to roles yet, uh, no, good, good point, sorry, we haven't covered roles in any depth, uh, because they're, they apply more to some of the other applications, but a role is a seat for the purpose of workflow routing, so say I have a role, uh, called EHS Coordinator, and I want to populate
1:04:53 Dave McLean: that role with one or more people for every individual site, and use that role for that as the recipient for every hazard that gets submitted into the system, so that the person who's submitting it doesn't have to select who it goes to, and in that scenario, we don't necessarily want it to go to the 
1:05:09 Dave McLean: supervisor of the person, we want a designated individual or set of individuals per site. Per location. Right, based on individual.
1:05:23 Dave McLean: You got it. You got it. You got it. You got it. That, that, uh, that you, exactly. Absolutely. There are a handful of companies that try and most of them fail.
1:05:34 Dave McLean: Uhm, because otherwise, every, every role, every workflow in Intellects has to also be provisioned in Entra, which makes it really difficult.
1:05:43 Dave McLean: You manage that administratively in, in Intellects because you know the people and you know the ES. It's not specific roles that you care about.
1:05:49 Dave McLean: They'll make the decisions administratively.
1:06:01 Dave McLean: That's going to be probably somebody in this room that's actually flipping the switches. That's, that's an admin task. You don't.
1:06:10 Dave McLean: Uh, the modules we're rolling out in this first phase are not, not role-heavy, typically. So, might change that decision when we get to inspections.
1:06:19 Dave McLean: This afternoon, uhm, yep, but as a general rule, training, document control, inspections are not usually the heaviest of roles. When we get to incident management, yeah, we'll have a pretty, pretty strong need for The, the, the, yeah.
1:06:38 Dave McLean: So if it's a, some kind of notice, or is it easy to make a notice to the health and safety coordinator?
1:06:54 Dave McLean: New person, Yeah. Yeah, so create, again, just following that sequence, create a role called the health and safety coordinator, populate it with one or more people per, per instance.
1:07:08 Dave McLean: The Department, probably dilogation, okay? And there's 1 logic chain goes through this whole thing. Okay, so, so if I take instruction and.
1:07:24 Dave McLean: And in country SS, both Stephanie and JC, no, no, there's 1 set of logic, which I can, I can give you that says.
1:07:34 Dave McLean: Check this, you know, like, this will override if it's 1 of these, it goes to Stephanie period. If it's not 1 of these, then check this.
1:07:41 Dave McLean: If it's, and then this is the 1 that refers back to the department list. Yeah, I understand. Gotcha. But there's 1 straightforward logic chain that covers this entire set of 2 tapes.
1:07:54 Dave McLean: Is that easily transferable, do you think? Except for the failover for the removal part, but we can, we can figure something out.
1:08:01 Dave McLean: Ultimately, what you're trying to get at is when a new person joins the organization, we want to send a notification to somebody that is relevant for that person.
1:08:09 Dave McLean: Correct. Yeah. If the work location is here, it matches. If it doesn't, it If the work location is remote, then there's another step.
1:08:15 Dave McLean: Yep. And then it becomes 150 steps. And what is the purpose of this, like, ultimately? So that a single health and safety coordinator among a group of 4 people is notified of the new person coming in so they can help onboard them.
1:08:28 Dave McLean: So they can help onboard them. And the reason that's not a function of HR is, like, normally when there's a new employee, they notify all the relevant people at the site.
1:08:37 Dave McLean: That's just because that's not within Paylocity's scope of what they are trying to do. Got it. Okay. That makes sense.
1:08:45 Dave McLean: Yeah, we can we can do something with that. Just so you know what we're talking about. I want you to see it because I knew I had a visual one.
1:08:50 Dave McLean: Okay. No, any given, we'll definitely use the concept of a role in this case. Tie that in. Roles can have multiple roles.
1:09:01 Dave McLean: And are site-specific. Now, all of this will be dependent. Yep, yep. All of this will still be dependent, though, on what is the structure of that organization.
1:09:17 Dave McLean: The structure of stuff that we are actually able to get from the Jira system, so. It's supposed to We'll just have to adjust the policy coordinators.
1:09:33 Dave McLean: And whatever it is, we can come up with. Yep. Question for Ethan, since you mentioned that he created that application.
1:09:41 Dave McLean: But, what is it that triggers an archive? Is this, uh, EDIS, speak-in, payload, and if that person speaks in, what happens when Depends on the setting of it.
1:09:54 Dave McLean: You could say it did not include it in the file, and then I'm going to take it as a prototype.
1:09:58 Dave McLean: The other option is that you send a little flag, like an activity flag, to the EDIS file. So you say, if it's active, you flag what to pay.
1:10:07 Dave McLean: So this is like, those are active. Once they're inactive, send it to iUber, and Mox has it as well. It's a part of the process for somebody, an admin, to go through and actually confirm the archive.
1:10:21 Dave McLean: Yep. So if they're missed, they're archived. If the file payload would be received, misses that record for any reason, they're going Yeah.
1:10:33 Dave McLean: So the file might not generate. There might not be a log file that generates an error, because that's a regular function, but our, we need to be very careful about it.
1:10:43 Dave McLean: Yeah. Based off a term, So you might want to have the slack in, Can you hear me? Can you hear me?
1:10:52 Dave McLean: We often get termination dates from HR. We have a column for, you know, that's the data field. Do you get that before or after the termination date?
1:11:08 Dave McLean: You're spot on, right? You have to be very careful with the logic for it. And part of that logic is that, hey, we, we.
1:11:20 Dave McLean: Want to send through a termination date and try to calculate it. We need to be confident with it and that that's going to come through consistently when we need it to.
1:11:27 Dave McLean: And we'll do the date comparison to figure out when that actually needs to happen. I don't think it's crucial that we deactivate someone, like, ahead of time.
1:11:41 Dave McLean: But if we got a more regular feed from HR that had the termination agreements, then it could be almost real-time.
1:11:52 Dave McLean: It could initiate the process. But it would be confirmed because HR has said, Have day. This is their term day, so their term day would probably come through that night, but they termed Monday 2 and 30 a.m.
1:12:09 Dave McLean: And that would make it so nobody gets distracted. Yeah, or we could map that term day to the activity. Yeah.
1:12:20 Dave McLean: That'd be a better way to do it. Make sure Right. We have both term days. Yeah. Yep. So they don't have term people.
1:12:32 Dave McLean: I think the list is, like, actives and LOAs, and then there's another report, starts and turns, and there's the onboarding report.
1:12:48 Dave McLean: I'm sure they could, I'm sure they could take everything in Palossi, and maybe, maybe create one report, maybe, and then there's the author.
1:12:56 Dave McLean: It's a different, it's a temporary report. Yeah. Yeah, you're probably going to have to pull the data from the Palossi API, rather than try to rely on six different reports to cobble together.
1:13:16 Dave McLean: Yeah. So, okay, you can call it though, like, as far as what the trigger is, you get a couple of different options, including some of it, where we maybe figure that out, figure out that flag field based on a term date, if that's consistently going to come through for us, or if, for the scenarios where
1:13:35 Dave McLean: it's not consistent. The only, the only thing I'd want to be mindful of if there was a person who's left the organization that, for some reason, still has an active profile in Intellects for, let's say, a period of days.
1:13:50 Dave McLean: It is a problem. It's not as huge of a problem as long as their Microsoft account gets deactivated right away.
1:13:56 Dave McLean: Because even though, even if the person's user profile in Intellects is still active, because of single sign-on, they can't get into Intellects if their Microsoft account is deactivated.
1:14:06 Dave McLean: That's less important than an information security problem, which is, hey, this person who was fired today.
1:14:17 Dave McLean: That would be that. It's just it's priority a problem. Yeah. 100% a workflow. That's annoying. But, like, life will go on.
1:14:27 Dave McLean: A data breach from a disgruntled former employee. That's the one you really want to be mindful of. We generally, when we terminate the project, that's the next step.
1:14:38 Dave McLean: Right. Step 1. Step 1 is kill their Microsoft access. And because that is the gateway to get into Intellects, we terminate.
1:14:53 Dave McLean: We don't terminate that bridge. When that happens, usually it's by Google. Because we don't only, we don't only touch Microsoft.
1:15:04 Dave McLean: We also have other places. Because, like, for instance, if somebody leaves our team, or it wasn't, like, an immediate combination or anything like that, we obviously know that it's not going to be great.
1:15:17 Dave McLean: Uhm, we make some coordination efforts to, okay, well, that email will forward to me for, you know, a limited amount of time before it's going to be deactivated.
1:15:27 Dave McLean: But, they do go through, like, a change in that master. They don't deactivate their email. They go through. Yeah, the task list.
1:15:36 Dave McLean: That's right. Yeah, they. Right. Yeah, it was a lock that you can put in. Yeah, I don't know what I.
1:15:47 Dave McLean: Obviously, out of this process, we're identifying communications that need to be, like, made at possible organizations Okay, cool. So we'll get an open item on this one.
1:16:04 Dave McLean: As far as the termination of an employee, we'll want to finalize a decision on what exactly you're sending through to trigger that, whether that's again, this is going to be a function of what you're able to get.
1:16:13 Dave McLean: From Paylocity and how that's structured, but the options are either send us a full list of people every time, including former employees that have an A or an I next to each person in the flag field.
1:16:26 Dave McLean: That way, we know whether that person's active or inactive, first time employee. We get notice of it automatically, or you'll switch it to inactive, and that's the trigger to archive.
1:16:35 Dave McLean: Second option, just send us a list of active employees every day. We will assume that if they're not in that one, they are now an inactive one.
1:16:42 Dave McLean: Make that switch. There's some risk to that in terms of making it be really difficult. Make it deliberate. Third option, send us a full list with a term date.
1:16:51 Dave McLean: Once that's populated, we use the term date to populate it, calculate out the active and inactive flag each day. The catch with that is that if the term date doesn't get populated by HR, in spite of the fact that they've left the organization, then they're still going to show as active and intellects
1:17:08 Dave McLean: through the window. So if it takes HR a couple of days for somebody to go in and update the termination date after they've left the organization, we're still going to have them as an active employee.
1:17:17 Dave McLean: The workflow routing is going to keep coming today. I mean, it's just going to build back up. The open question, too, that we'll want to consider at a later date is whether we want to introduce something that would be a change, but it would be to introduce some of the products that Ethan's worked with
1:17:35 Dave McLean: before. In the past, for automated routing of those tasks and workflow assignments to the supervisor or designated individual when a person leaves the company.
1:17:43 Dave McLean: So it creates more of an automation for what to do instead of relying on the admins to just know, hey, I've got to go.
1:17:51 Dave McLean: Review this list of tasks and look for all of Dave's tasks because he left yesterday and reassign them and make sure that all the roles that he's part of get reassigned to different people as well.
1:18:01 Dave McLean: Like today, that's just a, it's a manual admin task, right at the box. I think we will probably want, okay, okay, and then it's not in our scope, right?
1:18:12 Dave McLean: It's not, uhm, we, we sell it as like a single line item kind of thing. That's all. So instead of it being a build out of a new thing, because it exists as a, it's very similar to what I was talking about yesterday.
1:18:23 Dave McLean: One of those, we've already solved this problem, so how do we commercialize that? You just put a single price on it and deposit it.
1:18:32 Dave McLean: Conceptually, we actually didn't put it in there, because most of those clients aren't big enough to meet it. But it's very much the same kind of concept.
1:18:39 Dave McLean: Yeah, we're not going to have the problem with the admins is they're not going to know where to be assigned.
1:18:48 Dave McLean: Right, and then getting people to respond, it just sounds it sounds like we're going to have a long list of things I'll ask one more question before we take a break here, just to get you thinking about it.
1:19:01 Dave McLean: Do you guys have any sense of who you want your system admins to be? The folks that are actually going to be running it behind the scenes on a, on a, Matthew?
1:19:11 Dave McLean: Okay. That makes sense. Yeah. I'm sure that, maybe, that's been a problem. Yep. Okay. That makes sense. Cool. So, yeah, you definitely don't have to reassign all of them, does that make sense?
1:19:29 Dave McLean: No, not me. No, no, no, for sure. Okay, cool. Why don't we take a break? Take 10 minutes and we'll come back and talk single sign-on Oh.
1:19:47 Dave McLean: Now it should be visible. Yep. Just go to the, Yep, and then time the resume.
1:19:58 Dave McLean: I was going to say, I think it's available. Yeah. And then you can see Round. Xsys Admin is the absolute top level of success, right?
1:20:11 Dave McLean: That's the, Yeah, it's, uhm, Intellectus doesn't do a great job at this. Their admin license, the group of administrators that underpins it, it's more of a developer group, to be really honest with ourselves.
1:20:25 Dave McLean: I guess it's the same level of access. That I or any of the license app developers have, so you want to be judicious about that, because oftentimes there's a desire, like, well, we want to have, like, a local admin of this site, but if you put them into that group and you're really giving them, like,
1:20:41 Dave McLean: all the affiliate configuration, then now it's the honor system. Right. Uhm, so what, this isn't something that would be, I think, appropriate for you guys right now, but what some companies will do is they'll get us to create something as an in-between, where administrators truly becomes more of a developer-focused
1:20:58 Dave McLean: profile, and then admin is the Thank you. I need to be able to work with the location structure, I need to be able to work with role assignments, or emails, and stuff like that.
1:21:07 Dave McLean: True, admin, please. If we don't, please, please pay for this stuff. Okay, no question, I'll do it, hopefully. So, the people, you know, that have been looking at the community, the right, versus the APIs are, you know, so.
1:21:30 Dave McLean: No, like, I'm the one who's going to just sign things or something, because I know that's what I'm supposed to do.
1:21:36 Dave McLean: Yeah. So, you're not, you're not there to do it. It's your role in this is to work on the assigned ones, and you're not going to be able to push those through.
1:21:44 Dave McLean: Like, actually, I was just going to So, in, in actual fact, this is a closed portrait. That's why the person can't simply pick it up, right?
1:21:56 Dave McLean: So, this becomes a question. So, it's a, there's some messaging in terms of commentary. Yeah, he's looking at an old one that, like, it's a, it's a closed record, so.
1:22:08 Dave McLean: Makes sense. I was just curious, because, um, like, I'll just refresh it, because I'm looking at this book a few more times.
1:22:14 Dave McLean: Yeah, yeah, yeah. And then I'll, like. Yeah. I don't know if you run these with someone from the community. What day is it?
1:22:19 Dave McLean: What's the difference in it? Okay, so they're actually clear. So, I wanted to get someone to make sure, to review some of them.
1:22:27 Dave McLean: I was supposed to do it, but she's working on something else. I was going to work on, uh, mine Yeah.
1:22:34 Dave McLean: Yeah, no, uhm, removing that, in that case, is an exercise of, oh, you just, you have to make the jump.
1:22:44 Dave McLean: Yeah, it's supposed to Yeah, it's supposed to be an exercise. Well, I'll do it in my app. I was like, I need another bucket.
1:22:55 Dave McLean: Yeah, Oh, wait, wait. Yeah, that's on the right.
1:23:08 Dave McLean: Right. Okay, we share everything that's about to be launched, like, you know, building a place for us. So we're going to do that.
1:23:22 Dave McLean: Let me show you. Let's see. You know, I need, like, a project manager to help me with this. Yeah, yeah.
1:23:49 Dave McLean: She, she does, yeah, she does try, uhm, but you know, you have to see it, you have to get it.
1:23:57 Dave McLean: But that's how to be seated, so, trying to be seated. And we're just like, what's your preference? So, thank you for listening.
1:24:09 Dave McLean: Good night. Thank you, I've got a niece whose husband is a company breed, and whenever she's without him, she always goes to OpsGen.
1:24:41 Dave McLean: Yeah, yeah, I got that. Every time my wife and I go away for, like, a weekend or something like that, whenever we hang out, the first thing is always a convenience store to get Reese's Peanut Butter Pies.
1:24:55 Dave McLean: But we've, uh, we've just discovered Biscoff Butter. Biscoff actually makes, like, a spread that's made out of the cookie.
1:25:09 Dave McLean: I think it's ground-up cookies mixed with a, Oh, my God, it's complete. And there's no peanuts in it, so, I, uh, made toast with some of it for my son one day.
1:25:21 Dave McLean: He said, Dad, like, I can't have this. It's peanut butter. I said, no, it's something different. I guarantee you there's none.
1:25:27 Dave McLean: Give it a try. It's the first thing you do. I've been close to peanut butter in my life. I've had it before.
1:25:30 Dave McLean: It takes a bite. This is amazing. I want this every day. I can eat glass. That's it. That's it, right?
1:25:45 Dave McLean: Richard, this is Noah's Catering. Noah? It's Noah's, uhm. Bagel or something?
1:25:55 Dave McLean: Thank you, yes. Yeah. Noah, are you a local here, or is this a good thing? It appears to be a chain.
1:26:01 Dave McLean: I'm pretty sure it's two blocks down the road, it's real close. Tell me exactly who you are. They have two, they have four players.
1:26:14 Dave McLean: Uhm, I follow up with the forum this week and said, hey, what's the name of the general player card? Oh, you get Midtown and Chelsea.
1:26:23 Dave McLean: I said, oh, okay, great, so I got Midtown to start. And I was like, if you're going to Chelsea, I think that's the only place they'd really like you to get the same stuff.
1:26:29 Dave McLean: Yeah. So I made sure to get your same card. Cool. See what Matt thinks when he gets it. I mentioned how hot it was in here.
1:26:41 Dave McLean: I came in a few minutes earlier. So, it's a That's Yeah.
1:27:10 Dave McLean: Thank you. You had to put me out, too. Right? I think that's part of it, right? You can get radiation emails even though you can't tell.
1:27:22 Dave McLean: Do you? No. I love the mindscape. Absolutely love the mindscape. It's actually pretty It's operational standards. You know, like, what have you guys got?
1:27:35 Dave McLean: What do you guys have to bring? You need all sorts of information to do this. Summit Team. Flying in from all over?
1:27:40 Dave McLean: It's all from Toronto area. We have, uh, everybody's within 40 kilometers of our office. We are held the line on that one.
1:27:52 Dave McLean: I don't know how far, how much longer, but. It's, um, Toronto's talent market, this kind of stuff. Very wide, but very shallow.
1:28:04 Dave McLean: Yeah, so if you listen to our project manager for 3 months, 4 months now. And, like, every time we post it, with no paid option or anything, we get hundreds of applicants.
1:28:16 Dave McLean: And it's just... And, like, they're people, so, like, I'm taking for what it is, but, like, Like, they're, No, nobody's paid for it.
1:28:28 Dave McLean: It's very much, it's driven by a lot of people that have never worked with a client So, like, internal project managers, internal clients, no real certificates.
1:28:41 Dave McLean: No, no real financial implications for another party. A lot of folks that come in that are IT project managers that are entirely non-technical.
1:28:57 Dave McLean: Which is a, Like, you don't have to be a developer, you don't have to be an IT admin or anything like that, but like, if you're being familiar with the concepts, kind of thing, to be able build a plan around that.
1:29:09 Dave McLean: It's just, it seems to be a niche that's really tough to fill. Before you're even getting to the intellects and environmental health and safety specifics of it.
1:29:20 Dave McLean: I don't know what the answer is. Yeah. Can't avoid it. We're a tough one, but we hate it. I don't know which, uh, GPS you use, but Okay.
1:29:52 Dave McLean: Okay. Yeah. Sometimes they'll tell you to go on the Mini Travel Guru LA down They'll say, oh, you couldn't avoid, like, 5 minutes.
1:30:02 Dave McLean: Stay 5 minutes. And it's like, they can be small streets. Personally, it's a demo of Dockermouth, so I would just ignore those and just, like, they'll, well, maybe you get to see some of the stuff.
1:30:13 Dave McLean: Yeah, you'll see some of the stuff on left, but maybe it's up there, but I lost mine. I did that on my way back up to the control room.
1:30:23 Dave McLean: I was just sitting in the parking lot on the i5, and it goes, ding, you can save 12 minutes if you go this way.
1:30:31 Dave McLean: I was like, sure, you can auto-update that, and it goes, great. Exit here, and I did, and I got off the road, and I sat and sat and sat and sat and sat, and when I merged back in later, it was still a parking lot as far as the eye could see, and I was like, maybe I saved 12 minutes, I don't really know
1:30:48 Dave McLean: . Like, they weren't moving, it wasn't like they were crawling, they just weren't moving. If that happened again, I'd probably be like, what's my fuel?
1:30:56 Dave McLean: I'm just gonna say In case it's wrong, it's like, they tell you to save X amount a minute. It's like, everyone's pressing the X, so like, everyone's making that left click.
1:31:14 Dave McLean: Yeah, sometimes you just have to, like, ignore the map and then click I gotta ask, I've been to Toronto once, and I had a, like, it was only for two days, but the driver was super aggressive, and I looked it up, and there are some sources that would agree.
1:31:32 Dave McLean: Is that true? Is that what you guys, maybe you're used to it, so maybe that's normal? Just, I mean, I would say the same thing about driving in, like, used cars.
1:31:39 Dave McLean: I, I'll be here too, at LA especially, if drivers are driving I can't say I've ever driven with a lot of drivers in LA, but most of the time I get here, and it's pretty sensitive.
1:31:53 Dave McLean: I find something that makes it feel more aggressive for me when I'm driving in, to find you on your freeways, at least generally, like when you're on an interstate or something, the lanes are narrow.
1:32:06 Dave McLean: And so it feels like everybody's closer. I can see that. Uhm, I don't think I would agree with you, but I think drivers are pretty aggressive.
1:32:17 Dave McLean: Especially, you know, you gotta get where you're going, you gotta let speed fence, you gotta let But, uhm, I find that's hard.
1:32:25 Dave McLean: The quality of our roads is like, you know, when they are here, they all just tend to have bad roads, except in like the United States, it ends out.
1:32:35 Dave McLean: It's weather dependent. Thanks. It's like bad. Sick people are pretty sick. Especially if you're driving downtown. Driving, like, driving downtown in summer.
1:32:48 Dave McLean: These days, it's at least sick. It's my pleasure. Hmm. 16 lanes across? It's like 4 lanes.
1:33:08 Dave McLean: It's a lot. And they're widening it still. Yeah, mostly because that's the one that.
1:33:27 Dave McLean: ... But you gotta pair us with the others, eh? General?
1:33:39 Dave McLean: Are you sure you wanna be the group. We're photo group. We're a movie Thanks. We can't tell you about her, but we can.
1:33:49 Dave McLean: I was going to report her. Maybe we should talk to I just drove in, and I take a bump in the head.
1:33:55 Dave McLean: It's like a good bowel. That sounds like a good story. I'm trying to watch the time. No, I just don't want to hear what you're saying.
1:34:05 Dave McLean: It's comments and bad comments. Okay, great. I'm sorry. I don't have one question on the single side. I'm just to keep going.
1:34:13 Dave McLean: We're We're going to get there. Yeah, we've got to go through. Yeah, Jeremiah does have to leave the battle. I mean, but at the same time, I don't want to keep them.
1:34:27 Dave McLean: That's what I do. If you're, if you're going to feel free to say, I think that's everything, but if you want to, I have I don't want to keep going JIRA is the sharpest IT guy we've got in the entire Internet world.
1:35:00 Dave McLean: That's why, like, Whitney was saying, we have, uh, we have a company that will play around who manages our IT system.
1:35:06 Dave McLean: IT Yeah, yeah, yeah. You've never heard of No. BlueWire? You're out of, um, it's a very barely present.
1:35:24 Dave McLean: You know which Right? And, well, yeah, it's insane. Well, there aren't any. None there. So weird.
1:35:41 Dave McLean: And, yeah, boring. Yeah. So, yeah, it's not really bad, but, you know, he had his team, and a lot of the integration stuff, and he has a good manager, who puts some software in there, so it's, you know, it's a Uhm, Atlassian.
1:36:03 Dave McLean: So, yeah, the integration and all that. Uhm, even then, for like, Google Chess, like, like, I'm not a big feature person, because I've done a lot of stuff at companies, but we don't have to ask me questions about.
1:36:20 Dave McLean: I mean, I worked at a company who was like, everything's great, two good years, so, uh-oh, things are bad, 800 people out, but, like, that's stupid.
1:36:28 Dave McLean: You have that many people, you're stupid running your company. And Terrogen is right, Seth, but that also means we don't have spare people.
1:36:37 Dave McLean: Yeah. And if you have a new role that needs filling, I mean, Whitney, Whitney picked one up when somebody left, and she's like, I'm already doing that, or I, or I, or I can fill in on that.
1:36:48 Dave McLean: That's what I like to tell. So, her role changed from, from that. This to this, because that person left and she is capable.
1:36:58 Dave McLean: Sorry, but, but then, but there's a lot of people like, I mean, most people I know here, but we always have a full page.
1:37:07 Dave McLean: Yeah, because. I do, like, 3 separate things, have nothing to do with each other, but I was originally hired to do marketing, and now it's kind of morphed into, like, corporate compliance, HG reporting, substance abuse management, like, project management.
1:37:25 Dave McLean: Implementation, corporate technology, it's, like, all over the fan press line. Did you roll it up to your employees? No, I was hired to support our schedulers.
1:37:37 Dave McLean: You probably told me that before. No, I didn't. They were like, oh, it seems great. Here, do you know, I got the same thing.
1:37:48 Dave McLean: All right, guys, we'll get started. We'll, uh, we'll do a quick wrap up here on single sign on and then, uh, move to work.
1:37:57 Dave McLean: Towards the inspection program, so we've we've covered most of the most of the broad stroke detail for, uh, single sign on German sort of 2 questions for you to consider here on your end.
1:38:09 Dave McLean: I know that from what Matthews mentioned, there's a managed service provider. Provider that runs most of your IT infrastructure. I'm assuming that includes Entrep.
1:38:17 Dave McLean: So they'll be the ones configuring any single sign on profiles. Uh, yeah, I think we're we're going to get down right now.
1:38:25 Dave McLean: We. We have 2 different systems, but, you know, you know, that would be. We have an internal team that puts money back, so we may have taken the management of the Entrep that's associated with reusing it for a variety Function.
1:38:48 Dave McLean: Entrep needs the, the application that integrates, the cloud integrates with directory, which is Microsoft's application. And enable single sign-on. Similar to that, but it's not, It's the thing that you're logging into, and when you successfully authenticate into that, it then redirects you into the
1:39:27 Dave McLean: tool that you're trying to get to. At least, at least in the context of what we're using it here does a lot more than just that piece, but.
1:39:34 Dave McLean: For our purposes, it's when your users go to log into Intellects, because we'll be using single sign-on, they'll hit the URL for Intellects.
1:39:44 Dave McLean: Intellects will know, oh, somebody's trying to log into Teradent. As Intellects, redirect them to your Entra system, where they'll log in with their Microsoft credentials, and once they've successfully logged in, Entra will then put them back into Intellects with an active user session.
1:40:01 Dave McLean: So one thing I don't, I mean, I feel like Teradent's single sign-on. In some cases, it kind of seems clunky.
1:40:10 Dave McLean: So, for every time somebody wants to go into Intellects, are they going to have to enter their credentials? Like, isn't that the point of, like, you sign in at the morning, and then they go to night?
1:40:21 Dave McLean: Like, when I go to requeue logic, I always have to retype my credentials. So I guess that's what I'm assuming.
1:40:32 Dave McLean: But, like, Consolemate is supposedly, That is so clunky. That is clun- clunky. It's like you have to know, if you're signing in with Lexis, I don't know if you found this.
1:40:47 Dave McLean: So there's a couple of things. And then you have to sign in with Excel. I know. How do you make sure this isn't clunky for the user of the site?
1:41:01 Dave McLean: That's all going to be on your, yeah, from the Intellect side, the handshake between Entra and Intellects. you're, you're in.
1:41:10 Dave McLean: Intellect session only lasts for 30 minutes of inactivity, but from the user's point of view, that's immaterial, because even if you log in at 9 a.m., you do a bunch of things, and then you don't go in again until 430 p.m., if Entra is configured the way that you want it to be, Thank you.
1:41:26 Dave McLean: It would just cycle you through. It might take a few seconds, but you don't have to do anything with it, because it's just establishing a new session for you with an Intellect, so you don't have to enter a login or anything like that, provided that Entra is set up to maintain a persistent set.
1:41:40 Dave McLean: I'm assuming that it's just session management, not the Entra setup. Yeah, that's probably problematic with some of these other configurations, but you know, it's not- In here.
1:41:48 Dave McLean: Yeah. It's not going to be like Again, this isn't a function of Intellects. Thank you.
1:42:31 Dave McLean: but it will time out. TBC times out within 10 minutes. It gives you the options extended. It's not, I'm just saying.
1:42:42 Dave McLean: Question about this too, is that something we could do? Like, I wouldn't want it to say, we'll time you out after 4 hours after you log in, but maybe like 4 hours of inactivity.
1:42:53 Dave McLean: Is that a flag that we have in there? I don't know. Okay. Inactivity can be identified as something. It's 30 minutes for analogs.
1:43:01 Dave McLean: Okay. But again. That's the 30 minutes of an intellect session. So let's say you, you hit that trigger for an inactive session.
1:43:08 Dave McLean: You say, okay, refresh. And then it'll, it'll refresh the page, bounce you to Entra. Entra will authenticate you in, and assuming Entra's timeout session.
1:43:17 Dave McLean: is still open, then you just go in. You don't actually have to do anything. You refresh the page. If you, if you, if you left your browser window open without, you know, without logging out of intellects, you left it open for, you know, 60 minutes while you went for lunch.
1:43:35 Dave McLean: When you came back, it was just show a little dialogue saying your session is timed out. When you click OK or refresh, it, you see the page refresh.
1:43:43 Dave McLean: If you follow the URL in the browser, just watch it. You'll actually see it change to a Microsoft one. You can do a few things there.
1:43:50 Dave McLean: And then it'll come back to intellects and be back on the same page without having to click anything, without having to enter anything.
1:44:00 Dave McLean: So, for mobile app, when they're, when they're on the iPhone or Android app, the way it works for that one, it's the they'll support single sign-on.
1:44:07 Dave McLean: What'll happen is the first time the user goes to log in to that site or that, that intellects URL in the mobile app, it'll do the redirect and it'll ask them to log in with their Microsoft credentials.
1:44:20 Dave McLean: When they come back in, it'll ask them to set a pin. Within the app, whatever four-digit, a pin, a four-digit number that they can use.
1:44:28 Dave McLean: That way, at least there's some lock on the app in case they leave their phone somewhere and somebody tries to get into the device.
1:44:35 Dave McLean: Uhm, in that process, with mobile operating systems, when offline disabled, that first login downloads a copy of the database into the device or a miniature version of the database.
1:44:45 Dave McLean: Uhm, it contains just enough information for them to do the things that we want them to do in the mobile app when they're offline.
1:44:53 Dave McLean: From that point forward, if they lose connection, they go they go into airplane mode, whatever, Yep, yep. So they're out in the middle of nowhere, no cell towers or anything like that.
1:45:05 Dave McLean: As long as they've logged in once before, that's the key. They've got to have some, you got it. Yeah, it's typical pathways daily.
1:45:18 Dave McLean: So, you got it, you got it. Get the refresh, get the, you know, in case there's any updates to the database, for example, any, uh, any updates to checklists that you want, any new pathways.
1:45:27 Dave McLean: Any fields that have been added into the system, that's part of it, but it also, any data that's queued up from yesterday, you want to make sure that's going off as well.
1:45:36 Dave McLean: It does nobody any good if it's living only on my device locally. So, as long as they're logging in daily, then you're generally in good shape.
1:45:44 Dave McLean: They go out to the site, they do a bunch of inspections, maybe they log some hazards, maybe they, whatever, whatever those things are, all of that's just queued up as a record to sync, or a series of records to sync upon next connectivity.
1:45:57 Dave McLean: When they get back to the hotel, or back to connectivity, wherever that is. You got it. They just sync it off, and off they go, once they have, once they have a network connection.
1:46:06 Dave McLean: So, that's in the slide. It auto-locks, so that's what you enter your four-digit PIN to get it off. Okay. Wait, take it away.
1:46:23 Dave McLean: I don't actually know what the, what the frequency, or what the timeout window is in the app. For, fine. Yes, good question.
1:46:30 Dave McLean: I don't, actually have the information to do for the admins to tell me. It, it, it will be, and, and, much like many other apps that they use, you got it.
1:46:41 Dave McLean: That's it. This PIN is separate from the device's PIN. Yeah. So if they were going to share, now it's that PIN, and it's like, we have to be following it.
1:46:55 Dave McLean: So we need This is going to come up a lot, right? It's like, that'd be another reason, but not much shared devices, so it's not as sensitive.
1:47:11 Dave McLean: Are the PINs linked to the login, or are the PINs linked to the session? Yeah, that's, he was asking that question.
1:47:16 Dave McLean: Right, are these PINs linked to the beginning of the session? They're linked to the, they're linked to the user account.
1:47:21 Dave McLean: The user? Right, because every user has a different security index, which means the data that's syncing from the devices specific to that user.
1:47:34 Dave McLean: I can't use it because it's pinned out, right?
1:47:51 Dave McLean: I can't just grab and go, I have to log in if If the database is his context, not yours. If the session's open, I could be working, but that's why we wanted the kids to not be too in-breathing.
1:48:23 Dave McLean: Because, I mean, because of security signs. Correct, correct. You got it. So a two-person team sharing one tablet can only have one person logged in if they take it out in the field where there's no connectivity, period.
1:48:36 Dave McLean: It's going to be that one person. Correct. Okay, I think we're going to have a, Okay. If you ever had to, if you ever had to go through an information security issue, You got it.
1:48:56 Dave McLean: With a shared device model like that, it'd be finding after finding after finding. You'd get crushed on that one. You'd get And shared devices require, like, it's different terms for it, but it's usually something like kiosk mode, where the user accounts, The user that's being set up is specifically 
1:49:14 Dave McLean: been set up as a shared account, meaning it generally has a very restrictive security context and can't see anything. You got it.
1:49:22 Dave McLean: And therefore, it's one-way submission. Intel X actually can support a model like this, but it's, It's designed for, like, the factory floor where the device doesn't move.
1:49:33 Dave McLean: It's not, you know, interchangeable or anything like that. It's that all of the devices on the factory floor have the same pin.
1:49:39 Dave McLean: They're all set up with a device-specific user account that's been created as a, as a profile and intellects for each one, so you're allocating a license to each one.
1:49:48 Dave McLean: Uhm, it's rare. It doesn't typically play out that way. Okay. Okay. So this sounds like somebody gets to, gets to go buy a lot of iPads or, or Hardens.
1:50:01 Dave McLean: Yeah, the regular tablets are just missed. Samsung, Samsung Galaxy S10 Lite. Yeah, it's Android. Okay, that's all right.
1:50:17 Dave McLean: Testing 5 in the field, getting good feedback, and we're just working on, like, some safety accessories, because they climb the towers.
1:50:30 Dave McLean: Any of them support NFC chips? But you know what? I don't have an NFC reader, and we messed around with NFC near-field communication.
1:50:40 Dave McLean: You know when you, like, tap your phone on something, and it, you know, that's all done through a technology called near-field communication, but we've messed around a little bit with that with another client.
1:50:49 Dave McLean: The one with the specific use case was, you can, yeah, depending on the context. So it, I think the one that we specifically did was, hey, I need to open the app to do a bunch of things.
1:51:04 Dave McLean: And the client messed around with the idea of putting an NFC chip in the person's helmet. So they tap the phone to the helmet and it opens an app launcher to where they need to go to, to whatever they want to do.
1:51:14 Dave McLean: You can, you can extend that to, like, pre-populate an inspection. So if you put an NFC chip, that's been set up for a specific piece of equipment that you're inspecting, or a specific location that you're doing, then that payload can then pre-populate the type of inspection, the checklist, the equipment
1:51:32 Dave McLean: reference, so they're not searching for any of it. It's just one of those, if you're in the process of evaluating, and, you know, cost is not a neutral in this case, but if you're looking at them, it's another dimension for that evaluation is does it support NFC chips, because it might give you some,
1:51:49 Dave McLean: some other avenues down the road. QRCode would also work, you can, you can initiate the app into offline mode, using similar types of things as using a QR code as well.
1:52:10 Dave McLean: So if, if instead of NFC, it was SLAP, a very specific QR code that's been set up, not just with open the analytics app to the inspections app, but then also pre-populate these three fields.
1:52:24 Dave McLean: Right, makes it a lot easier for people. Yeah.
1:52:34 Dave McLean: So, just food for thought, something to consider. I'm looking for it right now.
1:52:45 Dave McLean: Last question on single sign-on. Standard practice when we do this. It doesn't have to be this way, but when we activate single sign-on, for a client's production site, we also will then typically get Intellects to stand up an external URL.
1:53:05 Dave McLean: It's basically a separate instance of Intellects that points at the same database, so that we, in particular, can still log into your Intellects site to go do work to support you.
1:53:14 Dave McLean: The reason I call this out is some companies, they say, no, that's just not something we want. We want all users who are logging into that site to go through single sign-on.
1:53:25 Dave McLean: If that's the case, then in order to complete this project, we'd need to be setting up Microsoft accounts for that.
1:53:30 Dave McLean: We don't have that in OpsGenie currently, but I think but it's like an intellect support account that's actually hard-coded into the platform.
1:53:51 Dave McLean: They have a password locker that refreshes the password every 12 hours for these things, so people, whether it's person A or person B or person C, can log in.
1:54:06 Dave McLean: It's very limited as far as who can actually get to those customer sites. They have to have a customer-facing reason to.
1:54:12 Dave McLean: But after this project, should you submit a ticket to IntellX, uhm, the single biggest thing that will become a barrier to them being able to investigate and work with you on those tickets is whether they can get to the site.
1:54:23 Dave McLean: So I always just advise clients that have that policy. Just be really sure because it's going to slow everything down going forward.
1:54:30 Dave McLean: And IntellX won't maintain a separate, uhm, Microsoft account for each one of their support reps in your environment. They change too quickly and stuff.
1:54:40 Dave McLean: So we'll go on the, on the assumption then that when we submit our request to IntellX to do their config, have them stand up the external URLs as well.
1:54:48 Dave McLean: Cool. I don't think we have near-field communication capability on the Tidal Suitcase. QR code's purposeful. Yep, I'm just saying. Yep.
1:54:56 Dave McLean: I found this best. Maybe since we're going to be buying them all new, maybe see if there's just a slight, like, the same thing, but with that.
1:55:03 Dave McLean: Okay. You know what I mean? Yeah, absolutely. It would be hard to reverse by purchase them and be expensive. I'm not going to do that.
1:55:17 Dave McLean: What did you say, Vanessa? What's the idea? Um, they're right behind me, like, um, an accessory that can plug in, that aren't, that isn't, like, like, lost, that you could just, compatible, plug it in, make a new account.
1:55:36 Dave McLean: Cool. That's all I got for integrations. Any, any questions before we wrap up? And we'll let Thank you. That's all we got for today.
1:55:47 Dave McLean: Thank you. Thank you. Bye-bye. This is it. Specific. It gives me an error that fails out every time, and it'll say, I'm not going to use the email again, and then if I just refresh it, it'll send one to me.
1:56:22 Dave McLean: I'm not going to use the email I'm not going I'm not going the email again. I'm not going the email again.
1:56:32 Dave McLean: I'm email again. I'm not I remember that we do not put any usernames. I sign in, not with my organization, I sign in with this organization.
1:56:54 Dave McLean: And then I'm in. You have to know the rhythm. It's like two clicks and I'm in. I mean, yeah, so like, what happens is if I haven't logged in Do I have a password?
1:57:10 Dave McLean: Do I like, can I look at my internet? But if I click on my name from an email, I go right in.
1:57:20 Dave McLean: And I'm just trying to go anywhere I'm going. Let's say we take the app and upload it to the web.
1:57:31 Dave McLean: It allows us to pass variables into the app package that gets pushed to the device. Sometimes those parameters are only modifiable if you put them that way.
1:57:47 Dave McLean: Very small, very small amount of times actually use a mobility solution to push the app to the device. Usually they just instruct where to download it from the Google It's probably, it's probably set down in the reliance that the person's device pumps, The rest of it might be because to refresh it, you
1:58:24 Dave McLean: need to land on the ship. So if the person's on a ship, for example, which is actually a really use case for it, it would be fine.
1:58:34 Dave McLean: And most of their users are on a ship, like a cargo ship, it would be fine on a connectivity-based platform.
1:58:43 Dave McLean: So I don't know if that refresh actually refers to internet connection. I don't to PIN or actually relogging in, yeah, well, well, can you pick these?
1:58:59 Dave McLean: I was trying to explain that I couldn't pick fixed costs, I don't pick hourly, but if this is a fixed cost, uhm, but then, I said, also, if fixed costs are legal, let them be our consultants, so how do you know if they have Just put in the money, go ahead.
1:59:18 Dave McLean: But that's, like, saying hourly, so, I, I, you know what I mean? There's, like, a multitude of issues, all sort of, solved by the matter description.
1:59:25 Dave McLean: By the text. You guess it's bizarre, huh? Well, I don't know, we'll find out. I'm sure, I think there's already invoices, because they can, they, like, as soon as we talk about Confluence.
1:59:40 Dave McLean: Oh, here, see, somebody rejected this. So then as soon as we, like, told them, hey, we're going to start working with you, they, like, started billing us out, like, even though we agreed to speak to you.
1:59:49 Dave McLean: And so, I don't know if they want, like, are we going to accept hourly bills up to the base fee?
1:59:55 Dave McLean: You know? Or, hey, do we just wait for the bill? It's not up there to really identify that, unless you read the text.
2:00:06 Dave McLean: So, anyway, somebody, I did not reject this, somebody rejected it. Do we just get distracted? That's the end page. That's awesome.
2:00:28 Dave McLean: Okay, leave things better than you found them, right? Let's share some lessons learned with everybody else. Love That's awesome. That's good to see.
2:00:39 Dave McLean: Those can be imported, SPB, that's that. We're good. We're gonna have it along. Be built. Right now, like, before we buy a tablet, level it up.
2:00:47 Dave McLean: Awesome. Okay. Okay. Like, uh, I need to be here like at lunch. I can probably read the book. And then so can you just.
2:01:00 Dave McLean: Right, the rest of the day, because there are some people who might say and go to the next day is all inspections related.
2:01:06 Dave McLean: So we're going to specifically do this through the lens of our 3 initial programs, though. I don't necessarily want to be so laser focused on those to the exclusion of others.
2:01:16 Dave McLean: So I want to. I want us to consider the others as well, but to refresh our own memory, and I'm pulling this from some of the documentation.
2:01:24 Dave McLean: Actually, this is from some of the nascent documentation that we've been preparing along the way. I'm going to show some of that at the end of the day, but, um, safety project.
2:01:32 Dave McLean: Site inspections, environmental compliance projects, site inspections, and office EHS inspections are the 3 programs we had previously identified. So just to level set for everybody in the room, those were the 3 inspections that we had agreed we would roll out with inspections.
2:01:48 Dave McLean: Because inspections was not supposed to be part of scope. We got strong armed by Matthew to put it in. We're just like, okay, we'll do the 3.
2:01:57 Dave McLean: Knowing that inspections was crucial for the, like, the future phases. So it's, in my opinion, it's kind of like, this is kind of a limited scope.
2:02:07 Dave McLean: And the only reason this works for Terrigen is because this, these are supervisor or health and safety, uh, team member inspections.
2:02:14 Dave McLean: This will not be the text. They will not need their tablets, but we expect all the supervisors to be on board and all the health and safety coordinators to have some type of electronic equipment to do this inspection.
2:02:30 Dave McLean: So anyone who doesn't need to be in inspections, like Paul, I know he talked about it so much, you're welcome to feel off, go somewhere else.
2:02:42 Dave McLean: It's the AC's office, it's getting warm again. Yeah, like I hope it just like, just like, you know, come back on.
2:02:45 Dave McLean: Yeah, awesome. Okay, uhm, so as we think this through, I want to say Let's start with understanding the relationships between what Intellects is going to call the inspection type and what it calls the checklist.
2:02:59 Dave McLean: Uhm, what the concept of that is, is that an inspection type is generally a program of some type, and that program contains one or more checklists underneath it.
2:03:11 Dave McLean: Those checklists might be context-specific, building-specific, equipment-specific, but, Thanks very much, Paul. If, uh, if we had, for example, a, uhm, vehicle inspection program, inspection type, then technically all of the checklists under it would be specific to each vehicle type that we might have
2:03:29 Dave McLean: , for example. Uhm, that, that's the relationship as intellects define Say that, uh, you're gonna have to go over that again, I'm sorry, I was maybe slightly That's all good, we just all get on the sheet here.
2:03:40 Dave McLean: I Do you want to take them, or, you know, it wasn't quite, you know, I'll just have to connect, so I can work with it.
2:03:50 Dave McLean: Awesome, all good. Uh, so inspection. Types and checklists. An inspection type in Intellecsys terminology is generally going to correspond to a program that contains one or more checklists within it.
2:04:07 Dave McLean: That program might be something like, for example, a vehicle inspection program, where the checklists underneath it correspond to different types of vehicles.
2:04:15 Dave McLean: For example, every question, or combination of questions, might be a little different for each one of them. How that actually applies to these three programs in particular really sort of remains to be seen.
2:04:25 Dave McLean: There's a world where each of these three programs is only one checklist each, and that's a little tricky. But that doesn't, they actually fall.
2:04:33 Dave McLean: So, so under, under Environmental Compliance Project Site Inspections, there are multiple checklists that you could use. Yeah, no, I don't mean that.
2:04:48 Dave McLean: I mean the 3 that are in scope. They fall under several roles. IPP, our Contractor, DHS Policy, Retires, Inspections of our Contractors, etc.
2:05:01 Dave McLean: So they fall under several different compliance areas. But the one we're tracking that is a compliance, a regular compliance item, would be the IIP.
2:05:12 Dave McLean: That would be like the highest level one. Thank you. And are they environmental required in the IIP, or just the helmet?
2:05:22 Dave McLean: Just the helmet. Uhm, so there's, out of the three in the SCELT, there's like a health and safety inspection at a field location, and there's a health and safety inspection.
2:05:33 Dave McLean: Health and inspection at an office location. Those fall under an IIP program that have like HVAC, and you have to get those inspections done.
2:05:43 Dave McLean: Uhm, I guess that's all I was saying. Yeah, thank you. In terms of, like, priority and compliance, what's the difference in that?
2:05:55 Dave McLean: I would, in my opinion, it would be nice if when I was checking inspections, I could type IIPP or IIP and check the inspection status.
2:06:06 Dave McLean: It's so easy to cast a search for, yeah. Let's see if we've done our work. Okay. Okay. That makes sense, yeah.
2:06:17 Dave McLean: The, from a functional point of view, beyond the fact that it would absolutely achieve that goal, it creates a, it's a category that allows you to bind different inspections that use different checklists together.
2:06:29 Dave McLean: What it also can capture, which we had started to allude to a little bit in our earlier session on this, is that some of the workflow options that you you might want to capture in inspections can be, can be sort of stored as parameters on that inspection type.
2:06:45 Dave McLean: For example, out of the box, there's no review stage when an inspection gets submitted. It's just, off it goes. We find often clients would like to have the ability to have a review or an approval stage after submission.
2:06:57 Dave McLean: We want to make sure that, uh, a site health and safety coordinator or a DHS manager, whoever it is, is going to review those results as they come in.
2:07:06 Dave McLean: In those cases, there's a world where we just say that every single inspection, regardless of type, regardless of checklist, always goes through a review.
2:07:16 Dave McLean: But the more common way to do this for us is that we configure it so that that is a setup parameter on the inspection type.
2:07:22 Dave McLean: So if we use IEPP, I think it's what it is. IEPP. IEPP. That, uh, if we use that as the inspection type, then when you're defining that, in addition to it being a collection of checklists underneath that header, it also would contain the parameters to say for all of our, all of the inspections within
2:07:40 Dave McLean: this type, activate a review type. So, stage, the person responsible for the review stage is going to be this role, or this person, or this calculation to figure it out, and this is how many days they're going to have to do the review.
2:07:53 Dave McLean: Perfect. So, then, in that scenario, IIPP inspections would have different types. There's different parameters from this, from other inspection types, where maybe you have a, just it's very locally, exactly, right?
2:08:06 Dave McLean: It's, we want the data, we want, we want to see what's happening, but we're not having somebody review every single one of them for the purpose of approving it and signing off.
2:08:14 Dave McLean: So, I think it would flow to the tagged health and safety coordinator that we're going to do in the one, the tool over here.
2:08:24 Dave McLean: Perfect. Perfect, so again, a roll. So, how would the health and safety coordinator be tagged? Every person has a health and safety coordinator, so we just let that flow from there.
2:08:42 Dave McLean: If you're the supervisor, you're tagged health and safety coordinator, so I'm sure they'd do it. Yeah, because they wouldn't. It's less about the person, it's about the location.
2:08:52 Dave McLean: It's tied to the location. Administratively, you make that that's 1 of those ones where once the person is in, you populate those seats within like, those roles within intellects for each location.
2:09:08 Dave McLean: Okay, so that'll be an intellect as opposed to a role. You got it. You got it. Our first, first usage of the role.
2:09:17 Dave McLean: You got it. You got it. Okay, and I think in this case we, the role will probably be called Site Health and Safety Coordinator or something like that.
2:09:28 Dave McLean: Like, something that's reflective of the actual role the person fills. And it's that in the inspections app, when you're setting up an inspection type, when you say, I want to have a review stage turned on for this, the field reviewer would allow you to choose whichever role you want it to go to in that
2:09:44 Dave McLean: case. So now you're choosing for that. That particular type, site health and safety coordinator, and another one might be whoever it might be yourself, right?
2:09:52 Dave McLean: Depends on it depends on how you want to set up each individual program to make sure I'm following. Yeah, when you say we're doing this in intellects, okay, we're going to choose this will go to the site health and safety coordinator.
2:10:03 Dave McLean: That's the name of the field that ties to a, OK, say it. It ties to the location and the person.
2:10:11 Dave McLean: I just wanted to make sure I understood it. Yeah, yeah, yeah, so this is one of those ones. What I'm going to show you is.
2:10:18 Dave McLean: Intellects Essentials Edition, because this is another one of those ones where we have built this in the past as part of that program.
2:10:24 Dave McLean: So rather than reinvent the wheel, let's focus it on what's already there so that it's it's cheaper and easier for everybody and something that's already in usage as is.
2:10:34 Dave McLean: I don't believe you can be cheaper for us to buy. That's the point. I didn't understand what is this, what is essentials adding that Intellects didn't have.
2:10:48 Dave McLean: I'll show you as we get into it all. I'll try to call out the difference between the two, but it's a good question.
2:10:53 Dave McLean: It's uhm. Yeah, is our stuff going to load faster than your page? It will. This is a dev environment. No, he's touched in a few days, so what you'll find this will apply to your dev in your test environment.
2:11:06 Dave McLean: environments. Every italic site that has low usage has to go through a cold start process. It's basically like it flushes the cache off of the server so that it's not constantly building, building more.
2:11:19 Dave McLean: up a cache memory, uhm. Is there any regulatory program that Terrigen has that requires your inspections and security?
2:11:35 Dave McLean: It's the inspections for environmental that, like, if something happens, let's say a regulator came in, they were looking at that program, it would say those inspections need to be done.
2:11:46 Dave McLean: This is the inspections that's in the scope, which is what we're talking about. This might know which ones are in the scope.
2:11:53 Dave McLean: It's our DHMS inspections. I'm just talking about environmental. Yeah, that's what we're looking for. Sure there is. I'm thinking of an example here.
2:12:07 Dave McLean: So, one of our programs that required it, and it's a program, but it's not necessarily dictated by regulation, is our Contractor E-Agency.
2:12:24 Dave McLean: On the regulation side, outside of our, you know, the, we're not talking about our, we're talking about our site, our environmental compliance and so on and on.
2:12:43 Dave McLean: My knowledge, there's no regulatory requirements for that. That's right. There are regulatory requirements for other inspections that we are not discussing today.
2:12:53 Dave McLean: Nothing. You know. Okay. Alright. Just to tell you my knowledge. Okay, so what you're looking at in this screen right now is an Intellectus Essentials Edition development site, specifically looking at the part of the inspections application where you would define an inspection type.
2:13:10 Dave McLean: This is a back office screen typically for admins or power users that run the program as opposed to people that are out there in the field doing everything.
2:13:19 Dave McLean: So most, most people will not see this, uhm, in the out-of-the-box version of this product, when you define an inspection type, all you're defining is this first little section up here.
2:13:30 Dave McLean: A code, which typically corresponds to, like, a program code, the name of the inspection type, a description that you might need in case you want to give a little more context, and whether it's active or inactive.
2:13:39 Dave McLean: Uh, you will see there's additional fields here, we'll go through those in a second. You'll also see that this type is skinned differently than what you've probably seen in past Intellects demos.
2:13:48 Dave McLean: The page looks different. This is applying a UI skin on it that is very specifically designed to make it so that a user who's using a mobile device, but not through the app, gets access to a more responsive experience, so that their responsive design is the technical term for the page should fit the 
2:14:06 Dave McLean: form factor that you're working off of. So in this case, what functional stuff is added to it? Are things like, does this program, for example, require checklist configuration?
2:14:16 Dave McLean: Do we actually need to make sure that people finish the checklist that they're doing when they're doing an inspection of this type?
2:14:22 Dave McLean: We're saying yes, but in some cases the answer is actually not yes. Sometimes there are ones where we're answering by exception only.
2:14:29 Dave McLean: This variable of, hey, sometimes I want to turn it on or off, if that parameter is hardcoded into the workflow, you don't get the option to choose one way or the other.
2:14:38 Dave McLean: And so when we talk about Intellectual Essentials Edition, what's been added to it, it's that thought process of why hardcode it when this can be an option that can be defined on a case-by-case basis.
2:14:48 Dave McLean: Similarly, some companies don't want to use the concept of findings when it comes to an inspection. Moreover, some companies don't want to use it for certain inspection types, but they want to use it for others.
2:14:59 Dave McLean: I've got one client, for example, that some of their inspection types are, like, the day-to-day stuff, the vehicle inspections or a quick daily site inspection that you might do.
2:15:09 Dave McLean: Others use inspections for full-blown ISO compliance audits. On the lower end, more frequent tier of that, if you run into an issue, you answer the question, you put a comment, and you do an action plan.
2:15:20 Dave McLean: You don't need to define a separate finding as its own thing, because the problem was defined in the comment that you gave on the question.
2:15:27 Dave McLean: But for a big compliance audit, the finding is a bigger deal. You've got to contextualize it, it's probably got a severity rating on it, so there's a finding for it.
2:15:35 Dave McLean: You've platform that gets activated for those. Out of the box, it's one or the other. Essentials Edition adds the, I want to decide on a program-by-program basis how I'm going to do this.
2:15:47 Dave McLean: Same for Equipment Listing. Do I want to reference equipment? And if I do reference it, am I doing it from a pick list because I'm feeding in a list of assets that are coming into the system, or is it just a text field that I work off of?
2:15:59 Dave McLean: Out of the box, it's one way globally, across the board. When we get to Workflow Rules, same idea. Do I want to enable a review stage?
2:16:07 Dave McLean: Thank you very much. For this type of inspection and any, any inspections that are underneath it, or do I simply want to turn it off?
2:16:14 Dave McLean: Often, those daily, somebody's just doing, no, you know what, I want the data, I want the volume of data, I don't care for people to review every single instance, but on the other side, the compliance one, I absolutely want a review process, and so, in that case, maybe I want five days or three days 
2:16:30 Dave McLean: or whatever to review, and the person responsible is going to be determined as, maybe it's the immediate supervisor or the submitter, maybe it's a role, maybe it's a specific person that I want to reference, or maybe it's an expression I actually want to put in, you know, if it's a pass, I want it to
2:16:44 Dave McLean: go here, if it's a fail, I want it to go there, something like that. Um, can be a bunch of different things.
2:16:48 Dave McLean: Most commonly, it's a role, in which case, I pick an existing role in the system, which, which role do I want to send it to?
2:16:55 Dave McLean: Maybe my hazard coordinator. Or whatever that, whatever that thing gets called. So when we talk about, hey, do we want to leverage some of the existing implementation assets?
2:17:05 Dave McLean: That's okay. I don't want to have to rebuild this and use a bunch of build time to go do this hour by hour.
2:17:10 Dave McLean: I'd rather say, if we've already got something that fits the bill, then let's figure out a way to use that within the context of this project, so that it is a closer fit for your needs as a starting point.
2:17:20 Dave McLean: And if we have to make tweaks or modifications on top of it to extend or, you know, add something, then so be it.
2:17:26 Dave McLean: But most of what you guys told me in our review session was a few weeks ago, like, bullet point by bullet point lines up with a lot of the functionality additions that are here or are in the out-of-the-box.
2:17:36 Dave McLean: And so you're covered in that case, without us having to go rebuild anything. Beyond the program layer, when you get into the actual, Go for Please, Days for review.
2:17:52 Dave McLean: What happened? So I, I, my understanding for that would be, uhm, Mike performs an inspection, it comes to me, you know, the rules are it gets routed to me for a review.
2:18:07 Dave McLean: What happens if I, if I don't review it in that five days? It's, it's, it just goes overdue. It starts sending email notifications on a schedule.
2:18:17 Dave McLean: Yes. You got it. For, for the system to start notifying you and reminding you, it has to have a date from which to anchor all of those, those calculations off of.
2:18:27 Dave McLean: Uhm, the, the, the concept of overdue sometimes almost gets conflated with, like, I can't do it anymore, and that's not it at all.
2:18:36 Dave McLean: If, if you, let's say you're on vacation, and that happens, and just nobody gets to the review, so you're three days past, it just means that you got a bunch of email notifications.
2:18:44 Dave McLean: You go in and complete the task. It's cleared. That's it. Right. Like, like, like the tweet. Training on the first day.
2:18:50 Dave McLean: Yep. It's just going to show overdue until you're done, and then it's in the system. It's not preventing you from doing it.
2:18:55 Dave McLean: One more question. Yep. Can you create an existing role right here, or does that, like, does it, let me rephrase, does that new role launch a new workflow, or do you just invent a role right here?
2:19:05 Dave McLean: You just invent a role. There's role that needs to be populated for each site, but it, it tries to close the gap a little bit between the administrative side of the product versus the, like, power user within the application.
2:19:16 Dave McLean: So we wouldn't have to stop and go, oh, wait, I have to stop and go and create a role. You can, you can essentially put a poster right here and go, I'm going to get to that when I'm done, finish, finish, now go populate.
2:19:24 Dave McLean: You got it. Okay, great. That's, that's, that's good user design. We, we tried on this one. Uhm, when it comes to the actual checklist in terms of variation within a program for this checklist, for example, versus that checklist, there are some additional sort of options that get into them.
2:19:42 Dave McLean: So again, these tend to be a little bit more cosmetic in facing, but in this case, it's, you know, is this a really flat checklist?
2:19:54 Dave McLean: It's got ten questions, there's no sectioning off of it, so we don't need to break this up into, into different sections for how we display it, or do we need to?
2:20:02 Dave McLean: Most of the time there are normally section or subsection headers within the checklist. The other one is scoring. Different companies will, will handle this differently.
2:20:09 Dave McLean: Some, some companies rigidly score it. So if I have ten yes, no questions, it's a, it's a score out of ten, and I'm, I'm attributing a percent complete.
2:20:18 Dave McLean: Others very deliberately don't ever want to score something, because people focus too much on the score versus the problems that came up out of it.
2:20:25 Dave McLean: I got 95 percent, but we completely ignore that that one question is a massive risk to the business. This is a program design question for you guys to answer.
2:20:35 Dave McLean: The point is that the product supports either side of it on a checklist by checklist basis, instead of you deciding what you want to way or the other globally, or have us go configure some other sort of model within within that vein.
2:20:50 Dave McLean: Correct, so that that kind of gives a little bit of a flavor of some of the implementation assets that we can we can put in into place on this one.
2:20:59 Dave McLean: But I think in terms of you guys deciding how it is you want to operate from what we've heard so far, the concept of the review is something that makes sense, and the concept of that review having slight variations from one program to the next, I think, makes sense sometimes.
2:21:13 Dave McLean: Sometimes the reviewer's different, sometimes you might not need it, depending on whatever the case is. We talked a little bit about scoring in our session originally, and it sounded like the prevailing thought process is that we don't score checklists right now.
2:21:28 Dave McLean: We're not scoring. Right. It's more of, like, the item by item. Yeah. Some items are more important, just have more risk associated with them.
2:21:38 Dave McLean: Okay. Okay. That's fine. We built scorecards for a couple of things in the time I've seen, but those are explicit to the item by item.
2:21:46 Dave McLean: That they're dealing with, everything else just needs to be done, right? Yeah. Okay, the health and safety and the environmental compliance inspection, it logs how many, how many inspection items there are, and then, you know, how many were.
2:22:02 Dave McLean: Acceptable versus what required corrective action. Got it. Got it. Okay. That's good. From a, from an action point of view, when somebody goes in, like, when you say corrective action, do you mean, like, a full-blown action?
2:22:18 Dave McLean: From CAR or AD process that entails a root cause analysis and sort of more of a thorough investigation? It's more, it's an action.
2:22:31 Dave McLean: Okay. Yep. Cool. So if I open an example of one of them here. Okay, so if I look at a specific example of that, like, ignore the scoring side at the top here.
2:22:51 Dave McLean: Uhm, let me pull, let me generate the checklist out. Okay, so, in this case, when I go to create an action, that action, I think this one's set up as, it's just straight to the action plan.
2:23:07 Dave McLean: Yeah, it's just, what type of action is it, who's doing it, when are we doing it, what do you need to do kind of thing, and that assigns a task, that task needs to be completed by the date that we gave, or ideally should be completed, it's gonna trigger notifications, reminders.
2:23:22 Dave McLean: But as far as, uh, the structure of one of those tasks, it's not, we're not asking for, for significant analysis, like, to me, that's when it gets more into findings.
2:23:31 Dave McLean: We want to investigate a finding first before we get into an action plan of some type. Right, and so, I mean, there could be, when we're out in the field, Thank you.
2:23:39 Dave McLean: performing an inspection, just trying to come up with maybe we observe an unsafe work practice that could actually be, uhm, Bye-bye.
2:23:55 Dave McLean: And, and, you know, and you're missing something. Okay. Right? Yeah. At that point, it would require a corrective action plan.
2:24:02 Dave McLean: Okay. Okay, let's talk through that for a second. So, In that, knowing that corrective action plan, I think, in the context of how we're describing it here, isn't, isn't an in-scope app within the product.
2:24:18 Dave McLean: The way I would handle what you're describing is if, if I was doing an inspection and I noticed an event that, that was a near miss, I would go to the incident application and log into a miss.
2:24:27 Dave McLean: Right. In that case, that near miss is an incident type. That's perfect. Got it. Got it. Yeah, you Climbing without full protection on, because that is an actual inspection.
2:24:47 Dave McLean: Was everybody wearing a proper PPE at the work site that you observed, right? But that's obvious that it's due, and it would also be logged as an incident.
2:24:54 Dave McLean: Okay, yep, you got it. And by the way, is this what we're looking at now? This one screen right here, this is a user-facing, this is not administrative.
2:25:02 Dave McLean: This is a user-facing. Right, and that's what it looked like, I just want to make sure. You got it, you got it.
2:25:07 Dave McLean: The only variation is this one. It's like the assignment to me, you know. Anybody can just go, I need to follow up on this, now I've got one of the liners coming.
2:25:15 Dave McLean: Okay. They're going to be creating checklists and so there's like the three, you know, super admins, but then there was like another layer.
2:25:24 Dave McLean: Are they able to create checklists? Yeah, so generally your super admins, absolutely. Each app has its own security context or levels that you can assign out, and so when you're talking inspections, you know, for lack of a better term, I'm going to call it the application administrator, the inspections
2:25:42 Dave McLean: application administrator. That person has full control within the inspections application itself. What that doesn't create, though, is siloed control over this program or that program.
2:25:55 Dave McLean: So it's important to be aware that anybody you give that inspections application administrator a level of access to has the same level of access to all of the inspection types.
2:26:05 Dave McLean: It's not just bound to this type or that type. So they do have to play nice in the sandbox. At some point there is a world where, you know, somebody could accidentally mess up a checklist.
2:26:18 Dave McLean: It's not just one program, And I don't want this thing to go out of control. Fair. Maybe with some, can some just be hard-coded that.
2:26:34 Dave McLean: We could, you know, change later splits and we can do scoring. Yeah, but I could see somebody someday going really want to score for my thing.
2:26:46 Dave McLean: Like, Dave, I need a score. And so someday we could change that. When he finally learns there's a scoring, you know, you never know.
2:26:55 Dave McLean: Yeah, yeah, yeah, we can default them to. I think what we have is the ability to review or not review.
2:27:05 Dave McLean: That's me as a toddler. Maybe some of these others we don't need, or we could make a decision to lock.
2:27:14 Dave McLean: It's like so very, very simple change to it. It's a heck of a lot easier for us to default it to know and hide it every time than it is for us to build it.
2:27:23 Dave McLean: The feature in the first place, so we can take this and maybe hide some of those toggles, because also every time we add all these checklists, then we now.
2:27:33 Dave McLean: Oh, now we have a procedure. Yeah, oh, toggle. No toggle. Yes. And then we have to change it. Some people, and then they mis-toggle, or they think they're doing something smarter, but now everything's different, because they thought they had a smarter idea, and like 90% of them are like this, and one
2:27:50 Dave McLean: is like this. I don't understand, now we have to train it. Well, we let people toggle, you know. Yeah. But, so, the, when we go to lock fields, it would be applicable across all of the steps we took.
2:28:06 Dave McLean: Yes, in the context of what we just described. Yeah, that is, that is us going in and changing the code to make sure we that field so nobody can see it in any context until such day that you Thank you so Scores.
2:28:31 Dave McLean: Why does it? Why does it win not get a score? But I've seen him score. Yeah, because they hit the toggle.
2:28:39 Dave McLean: This is also just limited to who has the admin access, right? It's the next level down. Is that right? App administrator, sorry to be actually to be more specific about that statement, changing the code to do it.
2:28:52 Dave McLean: That's an admin thing if it's turned on. So if we don't change the code and we leave it as is, then the app admins for inspecting it.
2:29:00 Dave McLean: It would be able to toggle that back and forth. So, so my, for myself, it would be if we were to make some sort of controls for when we're setting up these checklists, there's going to be.
2:29:17 Dave McLean: There's be a lot of admins. There are a lot of inspections and health and safety, so I don't see that just being a couple of people, because eventually, Oscar's going to go, hmm, I want this, and, oh, okay, but now, is that just the way specific to Montecristo, or is it, we're going to build that for
2:29:35 Dave McLean: all sites, or are we going to have a site admin who can build site-level inspection sheets that our team has nothing to do with, no responsibility for?
2:29:46 Dave McLean: I mean, I guess we'll cross that bridge if we need it. It will come. It's going to come when they're, they're, I mean, you know, where we could have beyond the EH&S team being admins, uhm, is the site, like, the site specific.
2:30:03 Dave McLean: I want to make some decisions now. That reduce my work creating procedures. Yes. Reduces somebody's training who has to create an inspection.
2:30:14 Dave McLean: And then it's something we just don't think they need right now. I understand But I want to just. Be, I guess, careful of what we put in place for limits.
2:30:27 Dave McLean: But we can always change it. You If we make changes now or today, we set on something today, we can always change it.
2:30:37 Dave McLean: Scoring, do you think we need scoring? I can't think, no. I don't either, so you need to turn it off before saying sweet things out there.
2:30:45 Dave McLean: Scoring. Right. Let me make sure that whatever we're going to turn off today, there's thought process and we're not thinking for the future.
2:30:55 Dave McLean: Yes. So when I look at this and I see toggle, toggle, toggle, toggle, toggle, I'm like, oh, crap. Like now I see a three page procedure.
2:31:04 Dave McLean: So if there's any of that, we can get out of here now. Let's get it out of here. And also, this is a toggle level thing for intellects or your sysadmins to do anyway, right?
2:31:13 Dave McLean: I mean, if we decide one day we just want scoring, we just go and scoring's back on for everybody and that's that.
2:31:18 Dave McLean: Yeah, you, you go into the code. So hiding it now, isn't it? Yeah, hiding is not, not redesigned. It's not, it's not.
2:31:25 Dave McLean: What's the word? Configuration and? Not customization. Customization. It's a configuration, click, not custom. Great. Okay, good. You got intellects, blurs the lines in those terms quite a bit.
2:31:37 Dave McLean: Just, yeah, it's a lot of structurally. You're, you're, you're in the right, yeah, yeah, yeah, talk that out, enable an equipment list, talk that out, you know, just all of these toggles.
2:31:56 Dave McLean: I mean, I definitely want finding tracking. Right, so we need to talk them all out because there's a bunch. Talk them all out and also make My opinion on visualized finding tracking is keep it on.
2:32:11 Dave McLean: Right. And then are we going to talk this up? We need to do this now? No, we can do this now.
2:32:18 Dave McLean: We have all day. So, truthfully, it didn't add. I will say I'm not entirely sure I agree with the premise that it is.
2:32:28 Dave McLean: If we don't think we're going to use it right out of the gate, let's actually configure it out of the product and, like, hide it from, hide it completely.
2:32:35 Dave McLean: I think that sort of becomes counterintuitive. So why don't you just talk through the, I see that option and I see a three page document.
2:32:41 Dave McLean: Where's that? That's right, that's what I thought we were milling for future, for future implementation, which we know that the vehicle inspections and all those other program inspections are going to be ran through this market world.
2:32:58 Dave McLean: That's what I'm saying. So I want to think through this now for a little bit. I don't even know, I don't even have a count on the number of inspections that are sitting on paper in people's offices.
2:33:11 Dave McLean: So someone is going to have to create a very single one of those inspections. Yep. And they're going to have to go through this process.
2:33:22 Dave McLean: Yep. That's what we're seeing. So if we are not going to use one of these features, and we know, hey, I don't really want to go down the road of scams, scoring, scoring is my easy exit.
2:33:31 Dave McLean: Yep. I don't really want to go down that road. Yep. Sure. Okay. Like, I just don't want to do it.
2:33:36 Dave McLean: Because if one team does it, then they're all going to have to do it. We're going to have to have this all teed up.
2:33:41 Dave McLean: Then what am I going to do with the scores? The Terry Genesis isn't like a scoring company. Okay. Like, it's not like that.
2:33:46 Dave McLean: Okay. Okay. I think I get where you're getting at. So, and I'm just thinking the work involved in all of this stuff, and then all of the maintenance, and then I want to avoid the non-objects.
2:33:57 Dave McLean: So, you want to set the decision for how inspections generally today and in the future will run. Again, barring the, completely unforeseen circumstances that might come down the road.
2:34:10 Dave McLean: So, if you run through the line, the line of them, the active one's got to stay, right? That's, there are going to be scenarios where you deactivate one.
2:34:18 Dave McLean: I will, I will ask it as a, as a binary question. Are there, do you foresee, Are be scenarios under which somebody would create an inspection program that does not require the checklist to be completed in full, even if the answer is not applicable?
2:34:33 Dave McLean: Never. You would, you would, you would insist there's a broad program constraint. Cool, Cool, awesome, so set it to default to default.
2:34:54 Dave McLean: Set it to yes, hide the field completely so it's just not an option going forward. OK, uh, enable checklist completion validation.
2:35:05 Dave McLean: Yeah, OK, second one, finding tracking when you, the functionality when you. You're keeping it, which means if I say no to that one for a given program, it's question to action plan.
2:35:17 Dave McLean: If I say yes to that one, it's question to finding, finding to action plan. So if I turn this option off.
2:35:26 Dave McLean: Right the way that it is right now, then when I'm answering my questions, if I have an issue, if I notice something wrong, what I'm logging is an action plan.
2:35:34 Dave McLean: I'm not logging a finding record. Right. Correct. So you don't actually have to do extra steps to find the action.
2:35:50 Dave McLean: It's going to be 3 steps instead of 2, right? You got it. You got it. If I turn this on, then when I'm answering my questions, I might have a no answer or something like that in my, in my action checklist.
2:36:00 Dave McLean: Instead of just simply putting a comment next to it and then adding an action plan, I'd actually have to initiate a record called a finding.
2:36:07 Dave McLean: In that finding, it's a description of the issue, probably some categorization or classification of it, uhm, a severity is typically for this, is this a major non-compliance, a minor non-compliance, maybe it's a best practice, maybe it's the inverse, it's something that's really good, whenever you, however
2:36:23 Dave McLean: you want to structure it, but the, the issue gets more fully defined as a record in and of itself. And when you say that, then you associate your action plans to that finding record.
2:36:34 Dave McLean: So it creates, exactly as you described, it creates another step in the process of documenting the issue. Typically done, like, in an ISOR.
2:36:41 Dave McLean: Like, it's a whole nother level. You got it. Than what Tara did in SAM. You got it. I did not think of handling safety inspections we're doing where we go through the findings.
2:36:55 Dave McLean: We have findings in incident investigations, but that's another level. Yeah, you got it. Okay, different place. On the environmental compliance inspection number, they, there are findings What this is saying, if we tick this box, right?
2:37:14 Dave McLean: Enable findings every time you have a. And then you find something, like, here's the question, you know, something's wrong, something's wrong, you type out the what was wrong.
2:37:27 Dave McLean: Now you have to go to another step, yeah. Yeah. Draft your findings. Yeah. Which typically would have a severity in the things you've described, like in an ISO audit.
2:37:38 Dave McLean: You get it. And then, you go to your corrective Exactly, you save the finding, and then start adding action plans, corrective actions, to the findings.
2:37:51 Dave McLean: They're just going to retype something. Through the context though that you're describing, because you're saying that there might be a scenario where that is actually a requirement.
2:38:01 Dave McLean: What's the scenario you're describing? All of our permit conditions and, you know, all that, and so we have stormwater compliance and, um.
2:38:20 Dave McLean: And, you know, I mean, even I think this extends beyond this environment. Compliance, we're doing, I think, dependent on the type of inspection we're doing, if we're doing a very detailed audit, wouldn't we want to have this finding feature enabled?
2:38:33 Dave McLean: I think it adds an extra step that you don't It does, but, I mean, it adds an additional step that for sure, but I think we train our supervisors not to always utilize this when they're making an inspection check.
2:38:45 Dave McLean: We're not going to say, observe something, now write a finding. With the severity, and then write a corrective action.
2:38:59 Dave McLean: That is way too much How does an issue get resolved? Walk me through that process. Do you always have an action plan piece?
2:39:11 Dave McLean: There's no version? There's version of everything we've just said, where if there's a problem that you identify that you don't get the ability to create an action plan to go fix the issue.
2:39:18 Dave McLean: So that's, that's a different thing. The question at hand is whether before you define the action that needs to be done, are you defining the findings of the issue itself as its own thing versus it just being a comment next to the question.
2:39:33 Dave McLean: If I come back to my example, uhm, sample record here, let me just open it up. And so what we're trying to decide now is whether to lock it to yes or no, and hide it, or whether to leave it as a checkbox that everybody has Section where we do this today.
2:39:53 Dave McLean: Okay. Get in time with buttons. Is there an option for the finding piece to be completed by, like, the health and safety or the environmental compliance person and not, like, the supervisor or whoever's actually doing the inspection?
2:40:22 Dave McLean: So, let's say it's time to a regulation. So the supervisor. It's not they may not know exactly. Which regulation it would be, but like the environmental compliance person would, so they would go in and that is where they would, in the finding piece, attach which regulation it's time to and then maybe
2:40:48 Dave McLean: grant. I'm not the severity of it based on. How severe I don't know what it is how many gallons or whatever it is to define that finding, because the supervisor.
2:41:00 Dave McLean: Or whoever's doing this inspection. most likely is not the best way to To make those determinations. Is this a real requirement or is this a hypothetical requirement?
2:41:12 Dave McLean: I still don't understand the question. Our environmental compliance inspection checklist covers a multitude of environmental compliance requirements, whether it's permit requirements, plan requirements, or regulatory, regulation requirements.
2:41:30 Dave McLean: Let's use HAZMAT for example. If we, if part of our inspection includes Bye-bye. Checking the accumulation area, and we have waste oil material in the aerosol hand drum, if we find it before the regulator does, we've prevented a fine, a potential fine.
2:41:50 Dave McLean: And a NOV. So, to me, those items could absolutely be findings. Imagine this question deals exactly with what we're talking about here instead of it being a JSA-focused question.
2:42:06 Dave McLean: In this case, in this example, I answer, you know, no, or whatever the issue was. Whatever question answer it is that triggers the negative path on that question.
2:42:17 Dave McLean: The simpler way for the user to do it is to simply describe the problem in the comment field. So, you know, this is, this is what I found, this is a big issue, big issue, blah, blah, blah, blah, blah, whatever, whatever the context of it is.
2:42:31 Dave McLean: So they document their findings, including, if they need to, attaching an image to that file. So, take a picture, move forward with her.
2:42:39 Dave McLean: To fix the issue, they then add an action plan, and in this version of it, the finding, as you're describing it, and I'll use the term lowercase f finding, is, I want to be, if I had to go pull a list of findings in this model, I'm looking for all of the questions that were answered with the negative
2:42:58 Dave McLean: response, pull in the comment field, pull in the list of actions that we did about it. And that would be the, the don't utilize findings pathway through this product.
2:43:08 Dave McLean: If you activate findings, instead of being able to just go, straight to the action plan, what you're initiating is a new form called a finding, where it's a, it's a higher level of documentation of that issue.
2:43:20 Dave McLean: And it sounds like from Amy's point of view, that's not something that's, that's needed. The, the idea of having a form specific to classifying this finding from a set list of picklist values and, you know, give me a, a separate description, a suggested action plan, a root cause analysis that typically
2:43:37 Dave McLean: comes with that, whether that's a free text field or a 5Y analysis or picklist, like some sort of an investigation of that issue.
2:43:44 Dave McLean: All of that typically comes into play when you're doing a broader finding or a, a true finding record against an audit.
2:43:53 Dave McLean: Can I ask a clarifying question about if the finding form or fields, like, were activated, does it provide us on the back end, like, what additional benefit would we get, like, in reporting or, uh, data tracking?
2:44:13 Dave McLean: Like, does it give us additional? If it's its own form, then it, yeah. Then it captures whatever fields you want it to capture about the issue, but that would imply that there is already a finding form in place right now that we're reproducing into that, something that is used every time we find an issue
2:44:30 Dave McLean: , here's the form we use to document Like, if we did, because to Whitney's point, like, whatever we're using for these current ones, uhm, we don't have that function, but if activating this set of fields gives them additional data tracking, or reporting capabilities, that may be something that they do
2:44:53 Dave McLean: want in the future, because they currently are not able to have it today. I think that's true. I think ultimately this goes to the goal of what Amy's trying to get to right now, which is to not set.
2:45:05 Dave McLean: Configurations here based on hypothetical requirements. It's based on the requirements that we know and see today for the programs that are first and foremost in scope for this phase, plus the next wave of programs that would come in that we know are going to come in.
2:45:17 Dave McLean: So, again, this is where it's a hypothetical. Requirements, and I can absolutely see a scenario where the answer to that is yes, but the strategy that Amy's trying to put forward here is that no, we don't want to.
2:45:30 Dave McLean: We don't want to leave hypothetical options open. If it's not something that we can see, we're going to use. We don't want to have to develop the procedure and the guidelines.
2:45:37 Dave McLean: We guidance for the users that are going to set up programs in the future on how to use these things, or when to not use them.
2:45:43 Dave McLean: We're looking for a more consistent program And often, if there's a piece that you guys want to build for findings, we'll go over it, and we'll switch it back.
2:46:01 Dave McLean: Hey, this is exactly why I don't like all these fields. So keep going. What else do we have? Equipment, and I'm going to, if there is ever a world where you have an inspection program that is going to be designed to inspect a piece of equipment, I would say that this is an option to look it it in place
2:46:27 Dave McLean: . Okay, now, within that context, if you've turned it on, it's whether or not the equipment field is mandatory for the person to fill out.
2:46:34 Dave McLean: Do they have to fill out the equipment reference on it when they're doing a vehicle inspection, for example? Some companies would say no, some companies would say yes.
2:46:42 Dave McLean: I think the answer you're probably going to go with is no. If it's an equipment inspection, and we say we want to do equipment tracking, then we always want the reference to the piece of equipment that they're working off of.
2:46:52 Dave McLean: So, can we hide make equipment mandatory and lock it to the other one? Yeah. So, one checkbox will enable you to enable both of them in IntelliX, but the user will only have to see enable equipment list, which will know.
2:47:03 Dave McLean: We will come to that option in a second, so it's whatever field shows would be mandatory. I think the direction that we're going off of here is that I want to make the equipment reference, whatever that reference is, whether it's time.
2:47:14 Dave McLean: Text or pick list. I want to make that optional, or I want to make that an option when we set up the program.
2:47:20 Dave McLean: If it's on, it will always be mandatory. And the last one here is the what type of reference is that?
2:47:26 Dave McLean: Is it a straightforward text field? I'm just entering in a VIN number, or I'm entering in a model number, serial number, whatever it is.
2:47:33 Dave McLean: Or is it actually a library of records? Because we feel that we're going to be sending in a list of assets down the road.
2:47:40 Dave McLean: I would posit from everything I've heard here, we probably won't have a list of assets down that's coming in, that's down to the individual piece of equipment level.
2:47:48 Dave McLean: And so, if I enable EquipmentList, hide this, and it's always, oh sorry, it's always the text option for that. If I want to have it, we might have a library, a library of equipment, uhm, yeah, I think also for EquipmentList is, so it's the assets, usually, again, you define the scope of what, what you
2:48:11 Dave McLean: do. Considered to be equipment. Yeah. Supervisor telling me. Check it was a forward one with me. That's not helpful. Was this a bit subject view?
2:48:40 Dave McLean: That's great. Okay. I would think we have equipment this far, but I do not know. We'll find out. Okay. So, just real quick, I want to make sure I understand the main equipment bandwidth range.
2:49:01 Dave McLean: Um, so that enable equipment list will always be on, be available for us to tumble, and then make equipment mandatory.
2:49:18 Dave McLean: Um, I guess I don't understand when that would be toggled on at this point. If you're going to turn the, if you're going to say that I want to reference a piece of equipment, is it mandatory to put that in, or is it not mandatory?
2:49:31 Dave McLean: It's optional to put the equipment reference in. The equipment reference should be mandatory for certain inspections that are coming on.
2:49:42 Dave McLean: Okay. Yeah. Sure. Well, I'm sorry. Let me rephrase that question. To be more specific, uhm, if you say that you want the equipment list, or if you say that you want the equipment to be a question that you're asking on the, on the inspection form, should it be mandatory always, or should it only be mandatory
2:50:05 Dave McLean: sometimes? The things we're going to talk about. Right, I would leave this in the architecture. So you choose it on an inspection by inspection basis.
2:50:19 Dave McLean: Thank you. Yeah. Okay. So I don't know how to select the vehicle that this applies to.
2:50:35 Dave McLean: K. I can go around it for you. Oh, okay. So decision, leave the enabled. You Yeah.
2:50:53 Dave McLean: You got it. Right now, we don't know. You got it. Yeah, we can, we can just go hide this. I mean, and, you got it.
2:51:01 Dave McLean: And, and, I mean, you have to, you have to do that eventually when we know. You got it. You got it.
2:51:05 Dave McLean: Yeah, something we don't know right now. Okay, so we'll leave it at that. Thanks, Switchwordalight. Side, case by case, do I want to have a reference?
2:51:11 Dave McLean: Reference to equipment, is it mandatory if I am going to have it, and is it coming from the library of things, or just give me a text entry?
2:51:19 Dave McLean: Yep. Finding trappings are still mandatory. We have a way, we don't utilize that, we have a way that I can go run a report to understand what was an issue, and I can confirm whether or not it's been closed out.
2:51:41 Dave McLean: Yep, I mean, the definition of an issue. Is the thing here, so when you set up your checklist, I'm going to use a simple example, let's say your checklist is all yes, no, or not applicable questions, or pass, fail, not applicable, the issue would be the no or, or fail option in that.
2:51:59 Dave McLean: That's what your filter is. So if I had a hundred questions in my checklist, and that checklist was completed a hundred times, filter the checklist results for all inspections where type equals whatever type you're looking at in environmental site compliance, where the results, or the answer to that 
2:52:16 Dave McLean: was given, was fail, or no, or whatever that, whatever that bad issue or issue flag is, and in that include the comment field where the person described the issue, and the list of action plans that they took with the action plan status.
2:52:28 Dave McLean: If you have that 100 question checklist done 100 times, and across that, what is that, 10,000 responses, let's say across 10,000 answers to that checklist, 50 of them had a no or a fail or something like that, and of those 50, everyone of them had one action plan.
2:52:49 Dave McLean: Hey, Pat, how's it going? You're a traveler. Uhm, your, your list would have 50 rows in it, with the question that was asked, the fail, the comment, the action plan, and the status.
2:53:04 Dave McLean: The status of the action plan, so that moment that you're in. So we have travel, Yep, totally. And all that's built into the current configuration.
2:53:17 Dave McLean: Yep, that's for sure. Welcome. How's it going? Just in time for lunch. I figured.
2:53:28 Dave McLean: Okay, before lunch, we'll wrap this last one here. And again, I think the answer from what we heard before is as far as review rules.
2:53:34 Dave McLean: Yes, we would want to keep this in place. We want to decide on a program by pros. Yeah. Okay, same thing goes for due dates.
2:53:45 Dave McLean: The only one I would, if you wanted to pare this down a little bit, expressions hard to use, um, and it would require somebody to write a fairly technical sort of if statement to figure out who it is.
2:53:57 Dave McLean: Generally speaking, the options that are going to be used for who the reviewer of an inspection is, it's either the supervisor or the person that submitted it, or it's a role.
2:54:06 Dave McLean: In the context. Specific person. Yeah, it's, uh, it's like, it looks like we've maybe changed the caption because it's not showing.
2:54:17 Dave McLean: It's like, I want to hard code it to 1 person. I actually wouldn't recommend doing that because that person leaves in it.
2:54:23 Dave McLean: Screws up a lot of things. Gotcha. So I would suggest that in this scenario is the only change. Okay, can you leave that up for just 1 second?
2:54:32 Dave McLean: Yep, for You dropped down. Sorry. I'm sorry. Yep, just 1 second here. Got it. Thank you. Perfect. I can go back.
2:54:47 Dave McLean: Sorry. It's just a checkbox. The validation under the hood looks at that checkbox to determine whether it's, uh. Whether to show the little asterisk next to the field or not, that's the only difference it does.
2:55:03 Dave McLean: I think you've already decided it, but I'll just confirm it. It's when you get to the checklist level, you want it to eliminate scoring.
2:55:08 Dave McLean: And I suspect the answer is that all of your checklists, even if they have just a single high-level section header, you're probably going to want to leave this on, based on the direction you're going.
2:55:19 Dave McLean: Okay, so then in that case, the decision is enable sections, default to TS, and hide it. Enable scoring, default it to no, and hide it.
2:55:26 Dave McLean: That's it. That's the last of them. That's lunchtime. If you say yes to something, you're going to get an additional sub-question.
2:55:43 Dave McLean: It does. One tier. Yeah, we can build up one tier now. It doesn't let you, question one triggers 2.1, 2.1 triggers 2.11, and so on.
2:55:53 Dave McLean: But you can, you got it. Yeah, you got it. You got it. The most common example we see for something like that is I have a, if I have an underground storage tank checklist.
2:56:11 Dave McLean: First question is, are there any underground storage tanks? If the answer is no, don't ask the 30 other questions that describe the underground storage tank, because there aren't any on site here.
2:56:20 Dave McLean: So you just answer the one question, move on, It doesn't push you through a bunch of stuff that's not necessary.
2:56:42 Dave McLean: Safety culture. Click NA versus no. It's just, they don't know. Really? Like, I don't know.
2:57:03 Dave McLean: Oh, you can put whatever, the choice list, you decide yourself, yeah. Yeah, just making sure that, obviously, what I'm But I would allow, in terms of a inspection mod, or app admin, probably would be myself and Mike initially, uhm, and then from there, you know, You But anyway, Mike and I certainly worked
2:57:37 Dave McLean: together on this stuff, what triggers what, but We've done enough to see people to understand And the work around this, uhm, to prevent This Strokes, if that makes sense.
2:57:53 Dave McLean: Okay, and the biggest issue you faced in this, in this realm is people Not differentiating well between not applicable and no?
2:58:02 Dave McLean: Interesting. I can't think of one, but I'm sure we can limit, like, the number of responses. Again, those response options, you decide what they are.
2:58:17 Dave McLean: So while it ships with a bunch of other boxes. You got it. You got it. You got it. The concept of NA, which, you know.
2:58:34 Dave McLean: Well, actually, the concept of NA is. Yeah, the concept of NA, actually, as far as it. Functionally matters in intellects without scoring.
2:58:45 Dave McLean: It doesn't actually matter as much. It's just another answer option. The only reason why it matters is a thing in intellects to have that that concept is that I had 100 questions.
2:58:53 Dave McLean: Each of which are scored out of one, not applicable, excludes it from the denominator, but without scoring. Doesn't really matter.
2:59:03 Dave McLean: It's just it's another. For safety. Say, uhm, is. If it's no right now, it's bad because that's the functionality of safety filter is the yes, yes, green.
2:59:17 Dave McLean: Yeah, no, it's bad in a is, you know, just it doesn't apply, but no, we have it. No, then why do you have to ask the question to align with the with your with the available selections and so if it's no, then you have to tell us what's wrong with it.
2:59:38 Dave McLean: You know, like, why is it no? And then, uhm, so does your app has that? You can tell it that this answer either requires a comment or this answer requires an action plan or both in that case.
2:59:55 Dave McLean: So if your no answer is the bad one, then, again, derivative off of the finding discussion, because in that model, the comment is a really integral piece of it.
3:00:06 Dave McLean: It's, the comment is the thing where you actually say what was wrong. Then you'd probably want to make that mandatory and you'd want to make it, uhm, an action plan mandatory.
3:00:14 Dave McLean: So, uhm, oh, so back to the NANO example. So, what, what I've seen is, uhm, did the contract, like, if it's a, somebody performing an inspection of a contract or performing site work.
3:00:28 Dave McLean: Yeah. Did their JSA, anyway, meet whatever requirements? And they click N-A. Because, simply because they just didn't look at it.
3:00:38 Dave McLean: It was an item that they didn't look at. However, they should have. You know what I mean? Yeah. So, it's like, If nothing else, you could click E.
3:00:48 Dave McLean: If nothing else, you'd probably want to say that in this scenario, you're going to still allow that N-A option for that button.
3:01:01 Dave McLean: If it's question, then it forces a comment, so that on review, when it gets submitted to you, if you're looking at all of the N-A ones, but didn't actually look at it when it was sent back, go do it the right way, kind of thing.
3:01:17 Dave McLean: Question is there a JSA for this work? And if it was no, it would be somewhere else. Obviously, no creates a finding, like, should there have been, but, uhm, and then, then you wouldn't ask, like, tell me about the JSA.
3:01:32 Dave McLean: You could, yeah, yeah, you could. Your, your question, your question, there is a JSA, yes. And then you ask, like, did it say something, or I can't remember what your question was.
3:01:43 Dave McLean: There would only be a yes or no. Well, so it actually start one level higher. The question is there working perform that requires a JSA?
3:01:54 Dave McLean: Because it's the same site inspection checklist for, like, there may not even be lists. So then that would be yes.
3:02:02 Dave McLean: We'll say yes. And then it would be like, oh, did you? Did you look at the JSA? Can you get the JSA?
3:02:10 Dave McLean: Yes. Okay. So now here's the question. That's what I'm saying. So you have to, you have to word your question to account for both.
3:02:18 Dave McLean: But I think that in the scenario we just described. There's logic that allows multiple tiers, but we rarely use it, depending on what we do.
3:02:36 Dave McLean: Just go one level. It's just a matter of us working together So, for our AI note taker.
3:03:01 Dave McLean: Right. Because we don't have to have any. It could be a different tick box, or we could remove it. You got it.
3:03:08 Dave McLean: It's technically every question. You could have different or varied choice list options available to you. So you, you, for simplicity's sake, most companies will, you know, run through, most of them will have the same thing.
3:03:21 Dave McLean: But if this question truly has an NA pathway to it, or, or scenario, then you can leave it there. The next question doesn't need to have that.
3:03:29 Dave McLean: It could just be yes, no, it could just be pass, fail, it could be whatever you want it to be.
3:03:33 Dave McLean: Okay, that's one limitation with many. This would be, once we picked a certain response set, we're committed to it, the entire checklist.
3:03:41 Dave McLean: Sounds like it's not the case here. Yeah, no, you can. You can define however you need to. It can even go past the choice list and say, you know, when my first question asks a, you know, it asks a question, then if I say yes, it gives me three others, one of which is a different choice list.
3:03:56 Dave McLean: One's a text field, one's a date field. Getting back to getting a list of the actions, corrective actions, and where we need a corrective action, then we'll easily be able to sort that through.
3:04:11 Dave McLean: I pick all inspections and I what? Yep, every action plan. You create, you're relating it to a question, a specific instance of that question that's been asked on a given inspection.
3:04:23 Dave McLean: So, depending on the question you're trying to answer when you do your report, if it's, uh, hey, show me a list of all of my functions.
3:04:31 Dave McLean: Findings, lowercase findings, that we've had in the last 30 days, you're building your report off the inspection object, expand it to give you all the responses to those inspections.
3:04:42 Dave McLean: Response is the, is the term I'm going to use in this conversation for each individual inspection. It's individual instance of a question that was answered, filter that for the ones that have the failed answer or the negative answer, and then include the fields that you need.
3:04:56 Dave McLean: On the flip side, if you wanted to ask a broader question over the given year, what questions are the ones that were most likely to lead to a finding, or have historically led to the most findings?
3:05:08 Dave McLean: Then you're building a similar checklist, but you're grouping it on the question itself. So you're aggregating the no answers that you gave, or the failed answers, by the question that was being asked.
3:05:21 Dave McLean: And so you're Pareto now, you know, it's somewhat verbose, because the questions normally are fairly long, and so maybe there's a short-form version we use for repeating.
3:05:31 Dave McLean: But it's, you know, what are the AB20 rules going to tell us? Most of our issues are going to come from the same place.
3:05:46 Dave McLean: That's a good question. We can, right now, it doesn't. It creates a task and if they assigned it to themselves, they just edit the record and put a completion node in.
3:05:56 Dave McLean: If we, if it's something that happens frequently enough where it's all sort of one step. I will say it's a simple configuration, so it is something we have to add into it, but it's not a complicated one.
3:06:13 Dave McLean: The idea would be I hit add action plan, what needed to happen, who, what Who's the person responsible, what's the due date, but what I'm doing is hitting a little checkbox on that action plan and saying, hey, I've already completed this one.
3:06:25 Dave McLean: Okay, I just fixed it. Yeah, and the nice thing about doing it that way is because you're creating an action plan, you have an it satisfies the validation criteria for that answer, but yes, you need to have an action plan without, without having to track I just want to be able, it says, well, when we
3:06:54 Dave McLean: , when we were out with the CVUC and we had 18 things, we fixed them on the spot. He was so sincere.
3:07:00 Dave McLean: I fixed them on the spot. So they may not be in the report. Right. Because I think twice if they're looking, make him specifically say what they did each time.
3:07:11 Dave McLean: Yeah. Yeah, so I mean, what I'm seeing is it's still in action, but it's just shown like it's not another state.
3:07:24 Dave McLean: It's step where I have to assign it to myself and I'll take more boxes, and these guys are going to get tired of that.
3:07:30 Dave McLean: Yeah. And then it will give, obviously, a completion date. And that's just freehand. So I think it through.
3:07:47 Dave McLean: Specify the type of action, corrective, preventative, or containment. Put the action, require the text, look, this is what needs to happen.
3:07:56 Dave McLean: And then, in fact, before you even get to the person responsible, that's where the little checkbox comes in, like, is this action already complete?
3:08:03 Dave McLean: If I, if I say yes, then who did it, what date was it completed, and, uh, what completion notes? Hypothetically, there's a number non-mandatory field.
3:08:13 Dave McLean: If I don't say yes to that, it's already completed, that's when I get the, who's responsible, and, um, what's the due date for Give me an idea of when we're, when the containment would be selected.
3:08:30 Dave McLean: I want to understand if we're just going to move that from our available list. Typically, it's going to be the, this is what I did just to, I'm not going to say stop the bleeding because that is actually a thing sometimes.
3:08:44 Dave McLean: Containment action would be, like, this is what I did in this moment that is not a permanent solution, it's not a corrective solution, corrective action, like it doesn't actually solve the problem today or tomorrow, but it allows us to move forward to the next step.
3:08:57 Dave McLean: It could be that I, uh, in the context of a of an environmental inspection, it would be, shut off valve.
3:09:06 Dave McLean: Yeah, you can already. Is that the type of action? Yeah, you gotta, you gotta pick this phone. But yeah, you can.
3:09:21 Dave McLean: Because it's a cross infection, I realize.
3:09:33 Dave McLean: Corrective or preventative. Oh, that's it? There's also nothing that prevents you from adding, there's nothing that prevents you from adding more than one.
3:09:48 Dave McLean: Action. So, like, again, it would require the user to make this connection, and they might not, but if they did a containment action, and they also need to, they also have identified the corrective or preventative action for the issue, they can do both.
3:10:02 Dave McLean: I'm just going to, I'm skeptical. That's it. I'm skeptical It's a of time. Yeah, because we've never seen those. I mean, obviously, it's a, it, they all require a third.
3:10:27 Dave McLean: In my opinion, they all require a third. So I, I do agree with that. I'm just, it's, it requires corrections.
3:10:33 Dave McLean: Okay. It may not have failed yet. But obviously, it's learning. So default, default, the type of action, decision, default, the type of action to correct it and hide it from the action plan.
3:10:45 Dave McLean: It's just not something you need The problem. Yes, another lock and hide. And I just feel like when it's a corrective, it just, it, people take it seriously.
3:11:00 Dave McLean: Like, oh, that's pretty good, so. That's probably true. Makes sense. Sorry, I'm just going off on At the risk of interrupting the flow, do we do we want to take a break for lunch here?
3:11:13 Dave McLean: No, this is great stuff. Appreciate it. Where does containment preventive corrective come in? Was that just, sorry, because I was going through, yes.
3:11:28 Dave McLean: So it's, the field is called type of. No, you're fine. The system name is CPAR type. I can't remember the, action type, is that a type of action?
3:11:37 Dave McLean: Yeah, yeah. Action type. Weird that I know the system name and not the front end name. Was it in that area?
3:11:47 Dave McLean: Or was it a different? It's actually a back end one that we can expose easily enough. I think that the decision for it is, is, is, it's just simply that we're going to, we're going to hide the, hide the field entirely and default it in.
3:12:03 Dave McLean: I just added front end, remove this from the end. Thank you. Cool. Excellent. Alright, we'll pause here. Excellent. Thanks guys.
3:12:13 Dave McLean: I'm going to drop out of the meeting here and I think we'll re-initiate. We just want to make sure to bring in our respective note takers.
3:12:20 Dave McLean: Yes, absolutely.