const sumbitButton = document.getElementById("submit");
const accounts = JSON.parse(localStorage.getItem("accounts")) || [];
sumbitButton.addEventListener("click", (event) => {
	event.preventDefault();
	let email = document.getElementById("email").value;
	let number = document.getElementById("email").value;
	let password = document.getElementById("password").value;
	let found = false;
	for (let i = 0; i < accounts.length; i++) {
		if (accounts[i].email== email ||accounts[i].phoneNumber== number) {
			found = true;
			if (accounts[i].password == password) {
				localStorage.setItem("currentuser", JSON.stringify(accounts[i]));
				if (accounts[i].type == "admin") {
					window.location.href = "Admin.html";
				} else {
					window.location.href = "Classes.html";
				}

				break;
			} else {
				alert("password or username is incorrect");
				break;
			}
		}
	}
	if (!found) {
		alert("account not found");
	}
});