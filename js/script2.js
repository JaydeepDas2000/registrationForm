document.getElementById('myBtn').onclick = function(e){
    e.preventDefault();
    var userName = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    if(password != confirmPassword){
        alert("Password and confirmPassword is not equal");
    }
    console.log(`userName : ${userName} password : ${password} confirmPassword : ${confirmPassword}`);
};