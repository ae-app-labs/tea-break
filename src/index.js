import React from 'react'
import ReactDOM from 'react-dom'
import firebase from 'firebase'

// var Fire = require('./fire')

var AppComponent = require('./containers/AppContainer');
ReactDOM.render(<AppComponent />, document.getElementById('app'));

class App extends Component{

  constructor(){
    super();
    this.state = {
      speed: 10
    }
  }

  componentDidMount(){
    /* Fire.loadDate( data => {
      this.setState({
        speed: data
      })
   });
    */
  }

  render(){
    return(
      <AppComponent speed={this.state.speed}/>
    )
  }
}

var config = {
	apiKey: "AIzaSyCvEAF-ZBP6EXM1Z51k0ZCpMBj4J0xxPKg",
	authDomain: "tea-break.firebaseapp.com",
	databaseURL: "https://tea-break.firebaseio.com",
	projectId: "tea-break",
	storageBucket: "tea-break.appspot.com",
	messagingSenderId: "972097047700"
};
firebase.initializeApp(config);

const usersRef = firebase.database().ref().child("users");

usersRef.on("value", snap => {
  this.setState({
    data: snap.val();
  })
});
