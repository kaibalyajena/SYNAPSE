const firebaseConfig = {
    apiKey: "AIzaSyD7ChT02-zd9BDWzFqdWE7YjxYRmXbW2ic",
    authDomain: "ieee-registration-a982b.firebaseapp.com",
    databaseURL: "https://ieee-registration-a982b-default-rtdb.firebaseio.com",
    projectId: "ieee-registration-a982b",
    storageBucket: "ieee-registration-a982b.appspot.com",
    messagingSenderId: "571812745604",
    appId: "1:571812745604:web:f418d76c05ff76ebc84dd1"
  };

//initialize firebase
firebase.initializeApp(firebaseConfig);

//reference your database
var registration_formDB=firebase.database().ref('registration_form');
document.getElementById("registration_form").addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();

    var teamName=getElementVal('teamName');
    var leaderName=getElementVal('leaderName');
    var leaderEnrollment=getElementVal('leaderEnrollment');
    var leaderEmail=getElementVal('leaderEmail');
    var member1Name=getElementVal('member1Name');
    var member1Enrollment=getElementVal('member1Enrollment');
    var member1Email=getElementVal('member1Email');
    var member2Name=getElementVal('member2Name');
    var member2Enrollment=getElementVal('member2Enrollment');
    var member2Email=getElementVal('member2Email');
    
    // console.log(teamName,leaderName,leaderEnrollment,leaderEmail,member1Name,member1Enrollment,member1Email,member2Name,member2Enrollment,member2Email);

    saveMessages(teamName,leaderName,leaderEnrollment,leaderEmail,member1Name,member1Enrollment,member1Email,member2Name,member2Enrollment,member2Email);

    //enable the alert message
    document.querySelector('.alert').style.display='block';

    //remove the alert
    setTimeout(()=>{
        document.querySelector('.alert').style.display='none';
    },10000);

    //reset the form
    document.getElementById("registration_form").reset();
}

//save message to firebase
const saveMessages=(teamName,leaderName,leaderEnrollment,leaderEmail,member1Name,member1Enrollment,member1Email,member2Name,member2Enrollment,member2Email)=>{
    var new_registration_form=registration_formDB.push();
    new_registration_form.set({
        teamName:teamName,
        leaderName:leaderName,
        leaderEnrollment:leaderEnrollment,
        leaderEmail:leaderEmail,
        member1Name:member1Name,
        member1Enrollment:member1Enrollment,
        member1Email:member1Email,
        member2Name:member2Name,
        member2Enrollment:member2Enrollment,
        member2Email:member2Email
    });
};

const getElementVal=(id)=>{
    return document.getElementById(id).value;
};