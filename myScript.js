var form = document.getElementById('form');


form.addEventListener('submit', function(event) {
  event.preventDefault();

  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var number = document.getElementById("number").value;
  var email = document.getElementById("email").value;
  var bank_company = document.getElementById("bank_company").value;
  var topic = document.getElementById("topic").value;
  var message = document.getElementById("message").value;
  var contactChoice1 = document.getElementById('contactChoice1');
  var contactChoice2 = document.getElementById('contactChoice2');
  var contactChoice3 = document.getElementById('contactChoice3');
  var agree = document.getElementById('agree');
  
  var myFormValues = {
    firstname: firstname,
    lastname: lastname,
    number: number,
    email: email,
    bank_company: bank_company,
    topic: topic,
    message: message,
    agree: agree.checked,
    gender: null
  };
  
    if (contactChoice1.checked) {
    console.log('option 1 is checked');
    myFormValues.gender = contactChoice1.value
  } else if (contactChoice2.checked) {
    console.log('option 2 is checked');
    myFormValues.gender = contactChoice2.value
  }
   else if  (contactChoice3.checked){
    console.log('option 3 is checked');
    myFormValues.gender =  contactChoice3.value
  }
  
  console.log('submit',JSON.stringify(myFormValues));
  alert('form submitted')
  
});


