function generateID() {
    return (
        Math.floor(1000 + Math.random() * 9000) + " " +
        Math.floor(1000 + Math.random() * 9000) + " " +
        Math.floor(1000 + Math.random() * 9000)
    );
}

function checkInputs() {
    let email = document.getElementById("inputEmail3").value.trim();
    let password = document.getElementById("inputPassword3").value.trim();
    let IGN = document.getElementById("ign3").value.trim();
    let generatedID = document.getElementById("generatedID");

    if (email !== "" && password !== "" && IGN) {
        if (generatedID.innerText === "") { 
            generatedID.innerText = generateID();
        }
    } else {
        generatedID.innerText = ""; 
    }
}
document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
    setTimeout(() => {
        this.submit();
        window.location.href = "homepage.html"; 
    }, 1000);
});
document.getElementById("inputEmail3").addEventListener("input", checkInputs);
document.getElementById("inputPassword3").addEventListener("input", checkInputs);
document.getElementById("ign3").addEventListener("input", checkInputs);
