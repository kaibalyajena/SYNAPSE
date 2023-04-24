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
var registration_formDB=firebase.database().ref('registration_form');
document.getElementById("registration_form").addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();
    var leaderName=getElementVal('leaderName');
    var leaderEnrollment=getElementVal('leaderEnrollment');
    
    //console.log(leaderName,leaderEnrollment);

    saveMessages(leaderName,leaderEnrollment);

    //enable the alert message
    document.querySelector('.alert').style.display='block';

    //remove the alert
    setTimeout(()=>{
        document.querySelector('.alert').style.display='none';
    },10000);


    //enable the alert message
    document.querySelector('.alert2').style.display='block';

    //remove the alert
    setTimeout(()=>{
        document.querySelector('.alert2').style.display='none';
    },100000)

    //reset the form
    document.getElementById("registration_form").reset();
}

//save message to firebase
const saveMessages=(leaderName,leaderEnrollment)=>{
    var new_registration_form=registration_formDB.push();
    new_registration_form.set({
        leaderName:leaderName,
        leaderEnrollment:leaderEnrollment,
    });
};

const getElementVal=(id)=>{
    return document.getElementById(id).value;
};



//fake
