$(document).ready(function () {
    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAV8FVULhrykmoZSxUm4HYWI1bHf-zdYEo",
    authDomain: "traintime-27883.firebaseapp.com",
    databaseURL: "https://traintime-27883.firebaseio.com",
    projectId: "traintime-27883",
    storageBucket: "",
    messagingSenderId: "345877805194"
  };
  firebase.initializeApp(config);

  var dataBase = firebase.database()
  var trainName = "";
  var destination ="";
  var firstTrainTime = "";
  var frequency = "";

  $("#submit-button").on("click", function(event){
      event.preventDefault();
    trainName = $("#train-name").val().trim();
    console.log(trainName);
    destination = $("#destination-name").val().trim();
    console.log(destination);
    firstTrainName = $("#firstTrainTime-name").val();
    console.log(firstTrainTime);
    frequency = $("#frequency-name").val().trim();
    console.log(frequency);

    dataBase.ref().push({
       train: trainName, 
       dest: destination,
       firstTrain: firstTrainTime,
       freq: frequency
    
    })

  })
  dataBase.ref().on("child_added", function(childSnapshot, prevChildKey){
      console.log(childSnapshot.val());
  })

})

