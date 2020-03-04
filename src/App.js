import React from 'react';
import logo from './logo.svg';
import './App.css';
import { messaging } from "./init-fcm";

function askPermission(){

  // Get Instance ID token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
messaging.getToken().then((currentToken) => {
  if (currentToken) {
  console.log(currentToken);
  } else {
    // Show permission request.
    console.log('No Instance ID token available. Request permission to generate one.');
    // Show permission UI
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token.-->', err);

  
});
}

messaging.onMessage((payload)=>{
  console.log("onMessage-->"+payload);
})

function App() {

 

  return (
    <div className="App">
      <button onClick={askPermission}>CLICK me</button>
    </div>
  );
}

export default App;
