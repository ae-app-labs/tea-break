import firebase from 'firebase'

var TeaBreak = (function(){

    var usersRef;
    
    var init = function(){
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyCvEAF-ZBP6EXM1Z51k0ZCpMBj4J0xxPKg",
            authDomain: "tea-break.firebaseapp.com",
            databaseURL: "https://tea-break.firebaseio.com",
            projectId: "tea-break",
            storageBucket: "tea-break.appspot.com",
            messagingSenderId: "972097047700"
        };
        firebase.initializeApp(config);

        usersRef = firebase.database().ref().child("users");
    }

    var userValues = function(next){
        usersRef.on("value", snap => {
            next(snap);
        });
    }
        
    return {
        init : init,
        userValues : userValues
    }
    
})();

export default TeaBreak;
/*
	// Get reference to firebase database
	const usersRef = firebase.database().ref("users");

	// Add listener to child_added event
	usersRef.on("child_added", function(snapshot){
		console.log(snapshot.val());
		// showUsersAndCount(snapshot.val(), snapshot.key);
	});

	function showUsersAndCount(data, key){
		$("#list").append("<li data-key='" + key + "'>" + data.name + " = " + data.count + "</li>");
	}
*/
