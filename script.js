let captchacheck = false;


function onsubmithandler(event) {
    if(captchacheck) {
    let input = document.querySelector(".inputdate");
    let output = document.querySelector(".outputdate");
    //since the input.value is in string therefore coverting it to localedate;

    let formattedDate = new Date(input.value).toLocaleDateString("en-In");
    output.value = formattedDate;
    }
    else {
        alert("Please check the recaptcha checkbox");
        event.preventDefault();
    }


}

function timestamp() { var response = document.getElementById("g-recaptcha-response"); 
if (response == null || response.value.trim() == "") 
    {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);elems["ts"] 
        = JSON.stringify(new Date().getTime());
        document.getElementsByName("captcha_settings")[0].value = 
        JSON.stringify(elems); } } setInterval(timestamp, 500); 

function captchachecked() {
    captchacheck = true;
}
