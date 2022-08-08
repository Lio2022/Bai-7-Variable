function ChangeMoney() {
    const k = 23000;
    let Amount = document.getElementById("Amount").value;
    let From = document.getElementById("From").value;
    let To = document.getElementById("To").value;
    let Result;

    if ((From == "USD") && (To == "USD")) {
        Result ="Result: " + Amount + "$";
    } else if ((From == "VND") && (To == "USD")) {
        Result = "Result: " + Amount / k + "$";
    } else if ((From == "USD") && (To == "VND")) {
        Result = "Result: " + Amount * k + "VND";
    } else {
        Result ="Result: " + Amount + "VND";
    }
    document.getElementById("Result").innerHTML = Result;

}