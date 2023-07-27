function Validation(values) {
    let error = {};
    const email_pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if (values.email === "") {
        error.email = "Please enter your email!";
    } else if (!email_pattern.test(values.email)) {
        error.email = "Please enter a valid email address!"
    } else {
        error.email = "";
    }

    if (values.password === "") {
        error.password = "Please enter your password!";
    } else if (!password_pattern.test(values.password)) {
        error.password = "Please enter a valid password address!"
    } else {
        error.password = "";
    }
    return error;
}

export default Validation;