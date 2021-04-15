## React - Weirdness Calculator (with Giphy API)

The Weirdness Calculator uses the Giphy API to show users several GIFs that range from 0-10 on Giphy’s weirdness scale. Users need to enter a search term and the app will display a matching GIF starting on 0
weirdness. Using a slider, users can then increase the weirdness and receive weirder and weirder results. When a user finds a GIF they like, they can add it to their list of favorite GIFs by pressing the Like button. Once a user selects their 5 favorite GIFs, they will be prompted to see their result telling them how weird they are.

## System requirements
` NodeJS `

## Instructions to run the project
- Clone the project using git. You can also download it as zip and extract the contents.
- Open the terminal and `cd` into the project directory
- Run `npm install`. This is install the project dependencies.
- Run `npm run start`. It will run a local webserver generally on port 3000.
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Test Coverage
- Run `npm run test` inside the project directory. It will run the test cases using Jest and Enzyme.

## Tools and Technologies Used
- React 16 (React Hooks)
- Redux
- React-Router
- Jest/Enzyme
- Bootstrap
- SCSS 
- Redux Saga