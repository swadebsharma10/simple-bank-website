document.getElementById('btn-submit')
.addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value ;
    // console.log(email)
    const passWordField = document.getElementById('user-password');
    const passWord = passWordField.value;
    // console.log(passWord)
    if(email ==='swadebriva2012@gmail.com' && passWord ==='701012sm'){
      window.location.href ='bank.html';
    }
    else{
        alert('You are invalid user.please enter correct input!')
    }
})