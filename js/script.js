const form = document.querySelectorAll('.form'),
submitInput = form[0].querySelector('button[type = "submit"]');

function getDataForm(e) {
    e.preventDefault();

    var formData = new FormData(form[0]);
    console.log(`userName : ${formData.get('username')}, password : ${formData.get('password')}, conformPassword : ${formData.get('conformPassword')}`);
    
    if (formData.get('password') != formData.get('conformPassword')){
        alert("password and conform password is not same");
    }
}

submitInput.addEventListener('click',getDataForm, false);
