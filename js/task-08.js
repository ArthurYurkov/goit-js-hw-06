const sendForm = document.querySelector(".login-form");

const userData = { email: "", password: "" };
sendForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert(
      "Будь-ласка зверніть увагу, що поля Email та Password повинні бути заповнені! "
    );
  } else {
    userData.email = email.value;
    userData.password = password.value;
  }
  event.currentTarget.reset();
  console.log(userData);
});
