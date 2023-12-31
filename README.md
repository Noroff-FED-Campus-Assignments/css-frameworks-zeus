[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/WzuOnFrK)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11650804&assignment_repo_type=AssignmentRepo)

# FED CSS Frameworks Course Assignment

This bootstrap template is intended to help you deliever a amazing website which delights your end-users. Feel free to change, remove or start your own project from scratch. Please replace any text which starts with an `_`.

This is a vanilla website that displays a styled website using dummy data.

This project was bootstrapped with Vite.

## Resources

<!-- You must replace these links -->

- [Brief](https://fed-vocational-astro-course.vercel.app/en/css-frameworks/ca/ca)
- [Design](https://www.figma.com/file/yRXnqBF2sY3ZUJGe0RfsuS/Css-Frameworks-CA?type=design&node-id=4%3A2&mode=design&t=2GiLNcCdIppbTa1c-1)
- [Production deploy](https://social-media2.netlify.app/)
- [Deployment CI](_LINK_TO_NETLIFY_VERCEL_DASHBOARD_)

## Report FED2-CSS Frameworks Course Assignment

### Intro

This document will serve as our CSS frameworks CA Rapport & Rationale, throughout the document we will detail our design choices and the work process, as well as the coding choices we went with.

Each team member will detail their design choice for their respective page.
This project was the first group project all of us went through during our time studying at Noroff, we got off to a bit of a rough start being that team member Espen was sick during the first week of the module so he had a lot of catching up to do, he basically had to learn how to implement a framework in the code base and how tailwind works in a day, the rest of the team, i.e. Sander and Ali took it upon them selves to help and guide him in this process and was of great help to him.

We quickly settled on a design for our website, nothing to fancy, nice minimalist design with a familiar color palette that draws inspiration from known social media sites.

### Login page - Sander Selfors

My section of this report outlines the creation of a fictional social media site's header, footer, and login form. The chosen blue and white color scheme aligns with industry standards for clean and professional design.

Beginning with the header, I applied Tailwind CSS classes to design a visually appealing and user-friendly navigation system. The footer, similarly styled with Tailwind CSS serves the design of the website nicely. The header and footer was then applied to the other pages.

The central focus was the login form, meticulously crafted with HTML elements and Tailwind CSS classes to ensure both aesthetics and functionality. It was made responsive to various screen sizes for seamless user interaction.

In summary, this project effectively utilized Tailwind CSS to develop a cohesive social media site. The blue and white color scheme, known for its industry relevance, was consistently applied across the header, footer and all three pages. Working with Ali and Espen enhanced the learning experience, making this assignment a valuable step in mastering Tailwind CSS and web development.

### Home page - Ali

Home page includes a feed section, and a section where a user can write a new post. It's a very simple view, as in it is not in any way interactive. Which in retrospect might be a bit boring. But it does follow the overall simple and generaly flat design which we went for. 

I wanted to use the dummy API for this and I DID get it to work, however, it was not a in my apinion an easy API to work with. Since it did not contain all the data i needed under one respons. f.e I would love it if it had time of post, author, profile pic... I believe there might have been a way to get the ID of one post and call to another API base to get the author data or more, but i'm not as of yet familiar with React. 

Using Tailwind was at first a bit annoying, but I understand why it is so popular. it made it really easy to copy past a code from a library. You basically copy a single page of code containing all three of HTML, CSS and JS. But, I still prefer writing regular CSS, it's cleaner and easier to debug. 

### Profile page – Espen Henriksen Snerten

I will first off state that I struggled with tailwind and found it frustrating to use, i felt that my hands were tied, being that the design I went for is something I could have churned out in an hour writing my own CSS.
Being this was the first time I used react I went with a hard coded HTML base for my content instead of it being dynamic and API based.

The design in it self is pretty simple, though I think it looks neat, there is a lot of room to expand upon the design, I will state that the images I went with was found on unsplash, it was only later when looking through the tailwind documentation i saw that a lot of the same pictures was used there, a case of good taste i guess.

The coding is pretty self explanatory, it is after all a framework, being this was the first time I had touched a CSS framework I have probably made a lot of newbie errors that with I will eliminate.
To conclude my section of the rapport, working in a team is genuinely of a great educational value being that it emulates a in real life work environment, I thoroughly enjoyed working with Ali and Sander.

## Getting Started

In the project directory, you can run:

- install the project node module dependencies $`npm i`
- Runs the app in the development mode. `npm run dev`
- Open `http://0.0.0.0:5173/` to view it in the browser.

## Minimum acceptence criteria

All of these todo's must be done to pass the asssignment.

- [ ] As a customer I can view the searchbar component.
- [ ] As a customer I can fill a form to create a new post.
- [ ] As a customer I can list of posts.
- [ ] As a customer I can view a profile image.
- [ ] As a customer I can view details about a user
- [ ] As a customer I can view a users contact details
- [ ] As a customer I can view a users posts
- [ ] As a customer I can fill out a form to post on a users wall
- [ ] As a customer I can fill a form to login

## Checklist

Make sure you go through this checklist before submitting your project to Moodle.

- [ ] All pages have a meta description.
- [ ] All pages have a valid title.
- [ ] All pages import the correct css files.
- [ ] All pages import the correct JS file.
- [ ] Input fields have the following attributes;
  - [ ] Name
- [ ] All images have an alt tag;
  - [ ] A name,
  - [ ] A placeholder,
  - [ ] A aria-describedby,
  - [ ] Required
- [ ] Removed all unused files.
- [ ] Named all images properly.
- [ ] Committed all my code to github.
- [ ] My repo is publically viewable.
- [ ] I've submitted/ written a report.
- [ ] I've removed all todo notes in code.
- [ ] I've removed all console logs in code.
- [ ] Code is formatted correctly.
- [ ] There are no red underlines in VSCode.
- [ ] There are no error messages in the terminal when I run the project.
- [ ] My code is indented correctly.
- [ ] I've checked my report for grammer & spelling using grammerly or chatGPT
- [ ] I've used used [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [ ] I've checked off every todo in this README.

## Help & Tutorials

- https://web.dev/learn/forms/
- https://fed-vocational-astro-course.vercel.app/en/css-frameworks/module-1/intro-to-sass
- https://dummyjson.com/
- https://www.youtube.com/watch?v=BEdCOvJ5RY4

## Application stack

- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [Prettier](https://prettier.io/) - An opinionated code formatter
- [Eslint](https://eslint.org/) - Find and fix problems in your JavaScript code
- [sass](https://sass-lang.com/) - Supercharged CSS .
- [TanStack react-router](https://tanstack.com/router/v1) - Modern and scalable routing for React applications.
- [TanStack Query](https://tanstack.com/query/latest) - Powerful asynchronous state management.
- [Axios](https://axios-http.com/docs/intro) - Axios is a promise-based HTTP Client.

## Authors

- Ali (@AliNough)
- Espen (@EspenSnerten)
- Sander (@sanderselfors)

## References

### Fonts

https://fonts.google.com/specimen/Poppins

### Media

https://unsplash.com/photos/sibVwORYqs0
https://unsplash.com/photos/rDEOVtE7vOs
https://unsplash.com/photos/_H6wpor9mjs
https://unsplash.com/photos/YUu9UAcOKZ4
https://unsplash.com/photos/yd4ubMUNTG0
https://unsplash.com/photos/tTdC88_6a_I

### Framework documentation

https://tailwindcss.com/docs/installation
