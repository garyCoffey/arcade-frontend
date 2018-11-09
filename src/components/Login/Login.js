import gapi from 'gapi-client';
import { GoogleAPI, GoogleLogin, GoogleLogout, Cookie } from 'react-google-oauth';
import React, { Component } from 'react';


//On load, called to load the auth2 library and API client library.
gapi.load('client:auth2', initClient);

// Initialize the API client library
const initClient = () => {
  gapi.client.init({
    discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],
    clientId: '776023546974-7k1gc3eb28t3nuu1i480v77oqs64ungk.apps.googleusercontent.com',
    scope: 'https://www.googleapis.com/auth/drive.metadata.readonly'
  }).then(function () {
    // Perform all the actions related to the backend API.
    //This can include sending authentication params to the backend api as mentioned earlier above
    // Once the backend send the success status redirect user to the Home page.
  });
}

class Login extends Component {

  responseGoogle = (response) => {
    var token = google_response.Zi;
    const requestOptions = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${google_response.Zi.accessToken}`,
        'Content-Type': 'application/json',
        'access_token': `${google_response.Zi.accessToken}`
      },
      body: JSON.stringify(token)
    }

    return fetch(`backend rails api url to google sign in path`, requestOptions)
      .then(response => {
        Cookie.set('accesstoken', response.headers.get('access-token'), {
          expires: 7
        });
        Cookie.set('client', response.headers.get('client'), { expires: 7 });
        Cookie.set('tokentype', response.headers.get('token-type'), { expires: 7 });
        Cookie.set('expiry', response.headers.get('expiry'), { expires: 7 });
        Cookie.set('uid', response.headers.get('uid'), { expires: 7 });
      }
      )
  }

  render() {

    return (
      <GoogleAPI className="GoogleLogin" clientId="776023546974-7k1gc3eb28t3nuu1i480v77oqs64ungk.apps.googleusercontent.com" >
        <div>
          <GoogleLogin height="10" width="500px" backgroundColor="#4285f4" access="offline" scope="email profile" onLoginSuccess={this.responseGoogle} onFailure={this.responseGoogle} />
        </div>
      </GoogleAPI>
    )
  }
}

export default Login;