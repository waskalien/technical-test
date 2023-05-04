# Technical test

## Introduction

Fabien just came back from a meeting with an incubator and told them we have a platform “up and running” to monitor people's activities and control the budget for their startups !

All others developers are busy and we need you to deliver the app for tomorrow.
Some bugs are left and we need you to fix those. Don't spend to much time on it.

We need you to follow these steps to understand the app and to fix the bug : 
 - Sign up to the app
 - Create at least 2 others users on people page ( not with signup ) 
 - Edit these profiles and add aditional information 
 - Create a project
 - Input some information about the project
 - Input some activities to track your work in the good project
  
Then, see what happens in the app and fix the bug you found doing that.

## Then
Time to be creative, and efficient. Do what you think would be the best for your product under a short period.

### The goal is to fix at least 3 bugs and implement 1 quick win feature than could help us sell the platform

## Setup api

- cd api
- Run `npm i`
- Run `npm run dev`

## Setup app

- cd app
- Run `npm i`
- Run `npm run dev`

## Finally

Send us the project and answer to those simple questions : 
- What bugs did you find ? How did you solve these and why ? 
- Which feature did you develop and why ? 
- Do you have any feedback about the code / architecture of the project and what was the difficulty you encountered while doing it ? 

## Answers by Antoine

### Bugs

1. The server cannot connect to the application. You need to change the port of the app to 8082 (`app/server`). The address at which the API talks is indicated in `api/src/config.js`, it's `http://localhost:8082`.

2. The update button on the People page doesn't work. You need to change `onChange` to `onClick` on the update button (`app/scenes/user/view`). When clicked, the button doesn't change state, so you need to capture a click event rather than a change in state.

3. The placeholder in the comment section of a project activity displays "undefined" for the project name. You need to change "e.project" to "e.projectName" (`app/scenes/activity`). In the API, the name of the project is called "projectName," the "project" attribute doesn't exist.

4. When creating a user via the People page, the name is not taken into account. You need to change the input name "username" to "name" (`app/scenes/user/list`). In the API, the user's name is called "name," not "username."

5. When selecting a project, the app crashes because it tries to read an object, but it has received an array. In the API, when using ".find()" with mongoose, it returns an array. You need to use ".findOne()" to retrieve a single element and thus avoid this crash, it's much better than repeatedly accessing the first (and only) element of the array.

6. When modifying or creating a name with a capital letter, it is no longer possible to log in with the account in question. You need to remove ".toLowerCase()" from the signin function to avoid comparing two different usernames. (`api/src/auth`) We could have added ".toLowerCase()" to the necessary places if that was the desired behavior.

7. Warning: "'useFindAndModify': true by default. Set to false to make findOneAndUpdate() and findOneAndRemove() use native findOneAndUpdate() rather than findAndModify()." It is preferable to add the option "useFindAndModify: false" to use these types of functions. (`api/src/mongo`)

8. It's possible to create the same user multiple times. To avoid this, you probably need to add "autoIndex: true" to the options of `mongoose.connect`, but you would need access to the server to restart the db to verify. Otherwise, the problem can be fixed by adding an independent check from `mongoose` when creating a user.

### Feature

I developed a map to geolocate each person in the organization and have information about them when hovering over profiles. There was a Google API key in index.html, which gave me the idea. Depending on the project, it can be useful to have a visual display to see where collaborators are, especially those who are available. Example: A client of a project has an urgent problem in a given location, we can look at the map to find the nearest collaborator to send there.

#### Benefits of using the map feature

- Improving collaboration: By having a visual display of where team members are located, it can help to foster collaboration and communication within the team, as well as enable team members to better understand each other's locations and time zones.

- Enhancing productivity: With the ability to quickly see where team members are located, it can be easier to delegate tasks and make informed decisions about who is best suited to tackle a particular problem or project.

- Streamlining communication: Having a map feature can make it easier to quickly find and contact team members who are geographically close to a particular location or who have expertise in a certain area.

- Supporting remote work: In an increasingly remote and distributed work environment, having a map feature can help team members feel more connected and provide a sense of presence, even if they are physically located in different parts of the world.

### Feedback

After some adaptation time, the code and architecture are quite clear and understandable. I followed the instructions step by step, and discovered some bugs while developing the feature. The Activities page was the one that I had the most difficulty understanding, probably because the unit used is not specified, but each unit actually represents 25 euros.

From a technical point of view, I encountered relatively few difficulties, but the one that took me the most time was probably putting a custom icon on the map markers because I was trying to pass it an SVG. In the end, I decided to use the profile avatar photo instead. I also spent time splitting NewList() (app/src/scenes/user/list) in order to reuse selectors for the map page without duplicating code.

#### For more information on the modifications made: `cat diff.txt`