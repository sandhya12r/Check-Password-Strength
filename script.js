const password =document.getElementById("password")
const progressBar = document.getElementById("progressBar")

// checking a num
const hasNum = /\d/;  

//checking upperCase
const hasUpper =/[A-Z]/;

//checking lowerCase
const hasLower =/[a-z]/;

//checking special chars
const hasSpecial = /[@#$%^&*_+-=\(:;"'<>,.?){}[]]/;

password.addEventListener('input', function(){
    const value = password.value;
    // console.log(value)

    let strength = Math.min(6, Math.floor(value.length/3))
    
    strength += value.length > 3 ? hasNum.test(value) + hasUpper.test(value) + hasLower.test(value) +hasSpecial.test(value) : 0;

    updateBar(strength)
});

function updateBar(strength){
    progressBar.style.width = strength * 10 + '%';

    if(strength >8){
        progressBar.style.backgroundColor = 'palegreen'
    }
    else if(strength >5){
        progressBar.style.backgroundColor = 'orange'
    }
    else{
        progressBar.style.backgroundColor = 'red'
    }
}
