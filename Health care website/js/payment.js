const firebaseConfig = {
  apiKey: "AIzaSyAyLwhPk7Nb1iNv36VZwbZs9p-5-ChiYGs",
  authDomain: "paymentform-e5a7e.firebaseapp.com",
  databaseURL: "https://paymentform-e5a7e-default-rtdb.firebaseio.com",
  projectId: "paymentform-e5a7e",
  storageBucket: "paymentform-e5a7e.appspot.com",
  messagingSenderId: "323443143100",
  appId: "1:323443143100:web:20e854c50ab652d6e9bbb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// reference your database
var paymentFormDB = firebase.database().ref("paymentForm");

document.getElementById("paymentForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var fname = getElementVal("fname");
  var nname = getElementVal("nname");
  var email= getElementVal("email");
  var dd= getElementVal("dd");
  var mm= getElementVal("mm");
  var yyyy= getElementVal("yyyy");
  var gender=getElementVal("gender")
  var card=getElementVal("card")
  var cardcv=getElementVal("cardcv")
  var cardexp=getElementVal("cardexp")
  saveMessages(fname, nname , email, dd , mm ,yyyy ,gender,card,cardcv ,cardexp);

  

  //   reset the form
  document.getElementById("paymentForm").reset();
}

const saveMessages = (fname, nname , email, dd , mm ,yyyy ,gender,cardcv ,cardexp) => {
  var newPaymentForm = paymentFormDB.push();

  newPaymentForm.set({
    firstname: fname,
    nickname:nname,
    emailid: email,
    dd:dd,
    mm:mm,
    yyyy:yyyy,
    gender:gender,
    card:card,
    cardcv:cardcv,
    card:cardexp,

  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};