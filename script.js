


function onsubmithandler() {
    let input = document.querySelector(".inputdate");
    let output = document.querySelector(".outputdate");
    //since the input.value is in string therefore coverting it to localedate;

    let formattedDate = new Date(input.value).toLocaleDateString("en-In");
    output.value = formattedDate;


}