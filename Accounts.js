const sumbitbutton = document.getElementById("submit");
sumbitbutton.addEventListener("click", () => 
{
	let nameinput = document.getElementById("name");
	let emailinput = document.getElementById("email");
	let numberinput = document.getElementById("number");
	let usernameinput = document.getElementById("username");
	let passwordinput = document.getElementById("password");
	let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
	let newaccount = {
		FullName : nameinput.value,
		username: usernameinput.value,
		email :  emailinput.value,
		password: passwordinput.value,
		phoneNumber : numberinput.value,
		type: "user",
	}
	accounts.push(newaccount);
	localStorage.setItem("accounts", JSON.stringify(accounts));
	window.location.href = "/Login.html";
   
});
