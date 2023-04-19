const firebaseConfig = {
    apiKey: "AIzaSyD83AsDXJ6zDS3aY898jgF2kjVrNZNj5bs",
    authDomain: "synapse-c59b8.firebaseapp.com",
    databaseURL: "https://synapse-c59b8-default-rtdb.firebaseio.com",
    projectId: "synapse-c59b8",
    storageBucket: "synapse-c59b8.appspot.com",
    messagingSenderId: "197823434219",
    appId: "1:197823434219:web:01b9972398ba1c87731dae"
  };

//initialize firebase
firebase.initializeApp(firebaseConfig);

//reference your database
var bidbuildDB=firebase.database().ref('bidbuild');
document.getElementById("bidbuild").addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();

    var teamName=getElementVal('teamName');
    var leaderName=getElementVal('leaderName');
    var leaderEnrollment=getElementVal('leaderEnrollment');
    var member1Name=getElementVal('member1Name');
    var member1Enrollment=getElementVal('member1Enrollment');
    var member2Name=getElementVal('member2Name');
    var member2Enrollment=getElementVal('member2Enrollment');
    var member3Name=getElementVal('member3Name');
    var member3Enrollment=getElementVal('member3Enrollment');
    
    console.log(teamName,leaderName,leaderEnrollment,member1Name,member1Enrollment,member2Name,member2Enrollment,member3Name,member3Enrollment);

    saveMessages(teamName,leaderName,leaderEnrollment,member1Name,member1Enrollment,member2Name,member2Enrollment,member3Name,member3Enrollment);

    //enable the alert message
    document.querySelector('.alert').style.display='block';

    //remove the alert
    setTimeout(()=>{
        document.querySelector('.alert').style.display='none';
    },100000);
    //enable the alert message
    document.querySelector('.alert2').style.display='block';

    //remove the alert
    setTimeout(()=>{
        document.querySelector('.alert2').style.display='none';
    },10000)

    //reset the form
    document.getElementById("bidbuild").reset();
}

//save message to firebase
const saveMessages=(teamName,leaderName,leaderEnrollment,member1Name,member1Enrollment,member2Name,member2Enrollment,member3Name,member3Enrollment)=>{
    var new_bid_build=bidbuildDB.push();
    new_bid_build.set({
        teamName:teamName,
        leaderName:leaderName,
        leaderEnrollment:leaderEnrollment,
        member1Name:member1Name,
        member1Enrollment:member1Enrollment,
        member2Name:member2Name,
        member2Enrollment:member2Enrollment,
        member3Name:member3Name,
        member3Enrollment:member3Enrollment,
    });
};

const getElementVal=(id)=>{
    return document.getElementById(id).value;
};
//just today