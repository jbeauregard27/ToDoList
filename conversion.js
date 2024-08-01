document.getElementById("convert").addEventListener("click", function () {
    convertTemperature()

});

function convertTemperature() {
    let userTemp = document.getElementById("temp").value;
    let celsiushtml = document.getElementById("cels")
    let celsvalue = Math.floor(userTemp - 32 * 5 / 9);
    celsiushtml.innerHTML = celsvalue;
    console.log(userTemp);
    let kelvinhtml = document.getElementById("kelv")
    let kelvvalue = celsvalue + 273;
    kelvinhtml.innerHTML = kelvvalue;
    console.log(kelvvalue);
    let newtonhtml = document.getElementById("newt")
    let newtvalue = celsvalue * 33 / 100;
    newtonhtml.innerHTML = newtvalue;
    console.log(newtvalue);
}