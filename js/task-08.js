const loginData = [];
const registerForm = document.querySelector(".login-form");
registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  
  if (email === "" || password === "") {
    alert ("Please fill in all the fields!");
  }

  console.log(`Login: ${email}, Password: ${password}`); //de verificare
  loginData.push({ Login: email, Password: password})
  console.log(loginData); //de verificare
  form.reset();
}