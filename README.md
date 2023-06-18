## To solve the problem, I made the following changes to the code:
### Open live link [https://air-data.vercel.app](https://air-data.vercel.app) to view it in your browser.
- It took me approximately 30 to 45 minutes ⏱️ to make the project and deploy it 🚀
### In the App component:

- Imported the Loader component.
- Added the `loading` state variable and `setLoading`  function to manage the `loading state`.
- Passed the `setUsers` and `setLoading` functions as `props` to the Navbar component.
- Conditionally rendered either the Loader component or the UserGrid component based on the loading state.
### In the UserGrid component:

- Imported the CSS file for styling.
- Added an `img` tag to display the user's avatar.
- Updated the `users.map` function to properly render the user data.
- Used the `user.id` as the unique key for each user card.

### In the Navbar component:

- Added the setUsers and setLoading props to access the state functions from the parent component.
- Updated the handleClick function to set the loading state to true before making the API request and set it back to false after receiving the response.

- Used the setUsers function to update the users data with the response data.

With these changes, the Navbar component is responsible for fetching the user data from the API and updating the state, while the UserGrid component receives the users data as props and renders the user cards. The Loader component is shown when the API request is in progress.

## Available Scripts

In the project directory, you can run:

### `npm install`

Install all the required dependencies to run the project

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

