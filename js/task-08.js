const form = document.querySelector(".login-form")
const users = {

}
const formSubmit = (event) => {
    event.preventDefault();

    const {
        elements: { email, password }
      } = event.currentTarget;
    
    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!")
    }
    users.email = email.value
    users.password = password.value
    console.log(users);

    event.currentTarget.reset();
}

form.addEventListener("submit", formSubmit);