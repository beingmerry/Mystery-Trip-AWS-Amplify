# Mystery-Trip-AWS-Amplify

Initialization at 13:36 EST, 2023-02-04 -- Ben Merryman

# MysteryTrip App

- [ ] -- Cool Sign up / Demo Gif / Login front splash page
- [ ] -- Login that will allow access
  - [ ] -- to trip creation
    - [ ] -- to trip editing (if ROLE=CREATOR)
    - [ ] -- to trip deleting (if ROLE=CREATOR)
    - [ ] -- to trip viewing (if ROLE=INVITED, CREATOR, PUBLIC)
  - [ ] -- to trip invitation
  - [ ] -- to trip invitation

# AWS Goals

## Deploy!

"I would really like to deploy the web site first, then build." - Ben Merryman on the first day of the project

# Vite Goals

## TypeScript

TypeScript is a much more modern, typed version of JavaScript. I should be able to learn it quickly enough!

## Vite Reasoning

- Zero Vulnerabilities at install!
- Very similar to standard React libraries
- Lets make sure this is as complicated as possible.

# ToDo

- [x] -- Initialize the Vite repo - 02-04 13:30
- [x] -- Decide to use TypeScript - 02-04 13:32
- [x] -- Build initial Vite Repo - 02-04 13:39
- [x] -- Get site up and showing on AWS - 2-04, 17:40
  - "It's ACTUALLY WORKING!!!" - Ben
- [ ] -- Get Ruby working (Got ruby Working but needing to switch to build mode for site)

# Frontend Status
- [x] -- Login page roughed out
  - [ ] -- Login page interacting with Rails
- [ ] -- Build router and top bar links
- [ ] -- Build basic fetches and interactions for Friday MVP
- [ ] -- 2 roles Trip Taker or Trip Builder
  - [ ] -- Trip builder puts together all the trip parts and event triggers for emails / SMS messages
    - [ ] -- Build in event triggers
    - [ ] -- Build in Emails
    - [ ] -- Build in SMS messages
  - [ ] -- Trip take can observe trips they've taken, or see "certain" parts (dependent on Trip Builder's configuration of trip)
    - [ ] -- Build own trips if they "subscribe" to the service