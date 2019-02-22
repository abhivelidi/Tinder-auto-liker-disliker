# Tinder-auto-liker-disliker

This is a cypress project which automatically likes/dislikes(based on preference :P) the entire feed in tinder.
You can set this to run everymorning in a cron-job which will leave you to only check your matches and save time
spent on swiping right.

Steps to run:
1) Create a npm repo (Run npm init)

2) Make sure that your system has cypress installed. You can install it from 
https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements

Use npm install cypress --save-dev as it adds the package as a dependency in the package.json of this project

3) Clone the repo and open cypress/integration/exec.spec.js

4) Enable the function which you want to run.(like/dislike) Defaults to like.

5) Execute command npx cypress open and run the exec.spec.js

Note: Cypress opens chrome by default which is void of cookies. Please login to facebook in the browser opened and
login to tinder using facebook. This has to be done only the first time.
