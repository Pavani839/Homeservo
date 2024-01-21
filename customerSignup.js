let nameinput = document.getElementById('fullname');
let label = document.getElementById('fullnamelab');

let emailinput = document.getElementById('email');
let emaillabel = document.getElementById('emaillabel');

let passwordinput = document.getElementById('password');
let passwordlabel = document.getElementById('passwordlabel');

let phoneinput = document.getElementById('phone');
let phonelabel = document.getElementById('phonelabel');

let famcountinput = document.getElementById('famcount');
let famcountlabel = document.getElementById('famcountlabel');
// console.log(input);
console.log(label);
console.log(nameinput.value);

nameinput.addEventListener('keyup',()=>{
  if(nameinput.value !== ""){
    label.style.transform= 'translateY(-30px) translateX(10px) scale(0.75)';
  }
  if(nameinput.value === ''){
    label.style.transform= 'translateY(0px) translateX(-10px)';
  }
},false);

emailinput.addEventListener('keyup',()=>{
  if(emailinput.value !== ""){
    emaillabel.style.transform= 'translateY(-30px) translateX(10px) scale(0.75)';
  }
  if(emailinput.value === ''){
    emaillabel.style.transform= 'translateY(0px) translateX(-10px)';
  }
},false);

passwordinput.addEventListener('keyup',()=>{
  if(passwordinput.value !== ""){
    passwordlabel.style.transform= 'translateY(-30px) translateX(10px) scale(0.75)';
  }
  if(passwordinput.value === ''){
    passwordlabel.style.transform= 'translateY(0px) translateX(-10px)';
  }

},false);



phoneinput.addEventListener('keyup',()=>{
  if(phonelabel.value !== ""){
    phonelabel.style.transform= 'translateY(-30px) translateX(10px) scale(0.75)';
  }
  if(phonelabel.value === ''){
    phonelabel.style.transform= 'translateY(0px) translateX(-10px)';
  }
},false);

famcountinput.addEventListener('keyup',()=>{
  if(famcountinput.value !== ""){
    famcountlabel.style.transform= 'translateY(-30px) translateX(10px) scale(0.75)';
  }
  if(famcountinput.value === ''){
    famcountlabel.style.transform= 'translateY(0px) translateX(-10px)';
  }
},false);

let submit = document.querySelector('.submit');

let form = document.querySelector('.form');
console.log(form);

submit.addEventListener('click', async()=>{
  sessionStorage.setItem('Customer_Name',nameinput.value);
  sessionStorage.setItem('Customer_Email',emailinput.value);
  sessionStorage.setItem('Customer_Phone',phoneinput.value);
  sessionStorage.setItem('Customer_Password',passwordinput.value);
  sessionStorage.setItem('Customer_Familycount',famcountinput.value);

  emaillabel.style.transform= 'translateY(0px) translateX(-10px)';
  phonelabel.style.transform= 'translateY(0px) translateX(-10px)';
  famcountlabel.style.transform= 'translateY(0px) translateX(-10px)';
  passwordlabel.style.transform= 'translateY(0px) translateX(-10px)';
  label.style.transform= 'translateY(0px) translateX(-10px)';

  if(nameinput.value != '' && emailinput.value != '' &&  passwordinput.value != '' &&  phoneinput.value != '' && famcountinput.value != '') {
    const customer = {
      "name" : nameinput.value,
      "email" : emailinput.value,
      "phone" : phoneinput.value,
      "pwd" : passwordinput.value,
      "familyCount" : famcountinput.value
    };
    try{
      const response = await fetch("http://localhost:8080/customer",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customer),
      });
      if(response.ok){
        const data = await response.json();
        console.log(data);
      }
      else{
        console.log("failed to get customer");
      }
  
    }
    catch(error){
      console.error("error", error);
      window.alert("error", error);
    }

    nameinput.value='';
    emailinput.value='';
    phoneinput.value='';
    passwordinput.value='';
    famcountinput.value='';
  }
  else{
    window.alert("please enter your details");
  }
  

},false);


