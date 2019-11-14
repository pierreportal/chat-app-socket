import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios'

// TEMP USER
// const tempUser = {
//   _id: "abc",
//   username: "pipo",
//   firstanem: "Pierre",
//   lastName: "Portal",
//   password: "qwertyui",
//   picture: ""
// }


axios.get('/chat/fakeAuth').then(response => {
  // console.log(response.data)




  // fakeUser !== null &&

  ReactDOM.render(

    <BrowserRouter>
      <App user={response.data} />
    </BrowserRouter>


    , document.getElementById('root'));

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();

}).catch(err => console.log(err))