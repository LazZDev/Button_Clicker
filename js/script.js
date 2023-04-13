function message() {
    alert("Ninja was liked");
}

function removeButton() {
    var button = document.getElementById("greenButton");
    button.remove();
}

function changeButton() {
    var button = document.getElementById("loginButton");
    if (button.innerHTML === "Login") {
        button.innerHTML = "Logout";
    } else {
        button.innerHTML = "Login";
    }
}
