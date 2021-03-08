import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'));

// import configureStore from "./store/configureStore";

// const store = configureStore();

// store.dispatch(() => {
//   // Call an API
//   // When the promise is resolved => dispatch()
//   store.dispatch({ type: 'bugsReceived', bugs: [1,2,3] })
// })
// // import {
// //   bugAdded,
// //   bugResolved,
// //   getUnresolvedBugs,
// //   bugAssignedToUser,
// //   getBugsByUser,
// // } from "./store/bugs";
// // import { projectAdded } from "./store/projects";
// // import { userAdded } from "./store/users";

// // const store = configureStore();

// // store.subscribe(() => {
// //   console.log("Store changed!");
// // });

// // store.dispatch(userAdded({ name: "User 1" }));
// // // store.dispatch(userAdded({ name: "User 2" }));
// // // store.dispatch(projectAdded({ name: "Project 1" }));
// // // store.dispatch(bugAdded({ description: "Bug 1" }));
// // // store.dispatch(bugAdded({ description: "Bug 2" }));
// // // store.dispatch(bugAdded({ description: "Bug 3" }));
// // // store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));
// // // store.dispatch(bugResolved({ id: 1 }));

// // const bugs = getBugsByUser(1)(store.getState());
// // console.log(bugs);