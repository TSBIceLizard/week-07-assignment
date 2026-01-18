# Week 07 assignment

## Instructions

Creating and maintaining applications that submit and retrieve information from a database is a fundamental part of web development. Many of the websites and apps we use every day—such as Facebook, Instagram, WordPress, Trello, Moodle, banking apps, Eventbrite, and various fitness-tracking tools—are, at their core, database-driven applications.

Over the next few weeks, you will be tasked with creating a series of database-driven apps with increasing levels of complexity and functionality. You have the freedom to interpret this task in a way that suits your interests and creativity. Whether you choose to build a blog, a recipe-sharing platform, a book/movie/TV tracker, a habit tracker, a sports discussion board, or any other application idea you have, the goal is to apply the concepts you’ve learned and solidify your understanding of how data can be stored, retrieved and manipulated within web applications.

## Requirements

    ✅ Create a client using React.
    ⚠ Use Express to create your server, using both GET and POST endpoints.
    ⚠ Build a React form for users to create posts.
    ✅ Create multiple pages using React Router.
    ✅ Design a database schema, and seed the database with some realistic data.
    ✅ Use SQL to retrieve posts from the database in your Express server.
    ✅ Display all posts using .map().
    ❌ Use an interval and useEffect() to poll your database.

## Personal feedback on my own assignment

While I felt like i did significantly better than last week, I also felt this was another assignment where I didn't do as well as I'd hoped and could not flesh out this project.

### First significant issue that I encountered

Following on from our workshop in the week where we went into the different Route types to set them up, I ended up having issues at first with dynamic nested routes (where the route was nested within another route). After many attempts to get it functioning, I then refactored the code to take it out of its nested position and supplemented the path as `path={"/games/:gametitle"}` which got the single game page working. :gametitle reaches for the 'alias' value on the game_title database table, which is a list of supposedly reviewed games on this mock games review website. However, the dynamic route worked for a while but later stopped functioning (even when i didn't change any of the component code related to it), then only seemed to function sometimes - can't get my head around why it won't behave and there ended up not being enough time to fix it.

### Later issues

Render.com as per seeming the unanimous complaints of our entire class is incredibly glitchy and unstable, and seems to further exacerbate the inconsistent issues the site has already. On Render, we found the issue of directly traveling to /route urls was redirecting to a ... `NOT FOUND` ... page.

### POSTing the review form

Didn't work akin to the week-04 assignment. I don't fully understand if react handles this differently but I did not succeed at getting it to work, which means I couldn't test polling either (that was something I wanted to see working).

## The project I was aiming to build

In sum total, I was hoping to explore the idea of building a sort of game review website that also featured a veriety of subsections on modding and communities associated to specific games. Due to technical (bugs) and time constraints though I wasn't able to fully flesh this out like I had hoped. The app is technically full stack - it so far has two database tables, one for the game_titles that includes game name, genre, synopsis (an overview description of the game), release date, box art lnk and an alias value (had a auxiliary use) and the second table pertained to the game_reviews. Originally I wanted to display the reviews beneath the dynamic route specific game page beneath the synopsis, but these dynamic routes were unreliable and stopped working entirely after a while.

As the dynamic routes were not functioning, I attempted to delegate the reviews section into it's own route and would feature a submission form (with polling) and a section below it showing reviews others have left. I didn't have enough time on this assignment to fix the issue with my form not functioning unfortunately, afterwards I wanted to move onto polling.

## Final comments

Worked all the way from the instant the assignment was issued and up until roughly 9pm on sunday but there was simply not enough time to get this functioning. I understand these assignments are not intended for use as serious projects (only they can be as a side effect), but in this one there were alot of unforseen issues arose - but at the weekend when we are still working on the assignment we don't have access from anyone from TechEducators for help like in the week.

### Thanks for reading
