let form = document.querySelector("form");
let dismissBtn = document.querySelector("#dismiss");
let signUpContainer = document.querySelector(".signup-form");
let successMessage = document.querySelector(".success-message");
let email = document.querySelector("input");
let errorMsg = document.querySelector(".error-message");


function validate(){
     if(email.value.length < 5 || !email.value.includes("@") || !email.value.includes(".")){
        form.classList.toggle("error");
        errorMsg.classList.toggle("hide");
        return false;
     }
      else{
        if(form.classList.contains("error")){
            form.classList.toggle("error");
        }
        if(!errorMsg.classList.contains("hide")){
            errorMsg.classList.toggle("hide");
        }
        return true;
      }
}

function toggleStyles(event){
    event.preventDefault();
    if(event.target == form){
        if(validate()){
            console.log("form is validated");
            signUpContainer.classList.toggle("hide");
            console.log(`signup container classes ${signUpContainer.classList}`);
            successMessage.classList.toggle("hide");
        }
    }
    else{
        signUpContainer.classList.toggle("hide");
        successMessage.classList.toggle("hide");
    }
    
}

form.addEventListener("submit", toggleStyles);
dismissBtn.addEventListener("click", toggleStyles);