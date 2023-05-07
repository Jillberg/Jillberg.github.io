let myVariable;
myVariable='Melina';
if(myVariable=='Melina'){
    alert("I offer you an accord");
}else{
    alert("Very well");
}

document.querySelector("html").addEventListener("click", ()=> {
    alert("easy,man");
  });

let myImage = document.querySelector('img');

myImage.onclick = ()=> {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/eldenring4.jpg') {
      myImage.setAttribute('src', 'images/Melinaburning.jpg');
    } else {
      myImage.setAttribute('src', 'images/eldenring4.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName){
    setUserName();
    }else{
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to the Lands Between，' + myName;
  }
}

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to the Lands Between，' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
 }