
(function(){
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
    
	// Get reference to firebase database
	const usersRef = firebase.database().ref("users");
	
	// Add listener to child_added event
	usersRef.on("child_added", function(snapshot){
		console.log(snapshot.val());
		showUsersAndCount(snapshot.val());
	});
	
	function showUsersAndCount(data){
		$("#list").append("<li>" + data.name + " = " + data.count + "</li>");
	}
	
	/*
    var firestore = firebase.firestore();
    const docRef = firestore.doc("boost/dec");
    
    docRef.get()
        .then(function (doc){
            if(doc && doc.exists){
                const mydata = doc.data();
                // showData(mydata);
            }
        }).catch(function(error){
            console.log("error " , error);
        });
    
    function showData(data){
        $("#list").empty();
        for(name in data){
            var tmp = name + " " + data[name];
            $('<li />')
                .text(tmp)
                .appendTo("#list")
        }
    }
	*/
    
})();