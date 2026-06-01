const birthdayEl = document.querySelector("#birthday");
const btnEl = document.querySelector("#btn");
const resultEl = document.querySelector("#result");



function calculateAge() {
    const birthdayValue = birthdayEl.value;
    if(birthdayValue === ""){
        alert("Please Enter your Birthday");
    }
    else{
        const age = getAge(birthdayValue);
         resultEl.textContent = `Your age is ${age} ${age >1? "years":"year"} old`;  
    }
}

function getAge(birthdayValue){
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth()- birthdayDate.getMonth();
    if(month <0|| month===0 && (currentDate.getDate() < birthdayDate.getDate())){
        age--;
    }
    return age;
}

btnEl.addEventListener("click",calculateAge);
