export const validateForm = (
    form,
    setErrMsg,
    setIsError,
    showAlert,
    hideAlert,
    validateName = false
) => {
    const errors = {
        name: false,
        email: false,
        password: false,
    };
    let errMsg = { title: "", subtitle: "" };
    let isError = false;

    if (validateName && form.name === "") {
        errMsg = { title: "Empty Name!", subtitle: "Please fill in the name" };
        errors.name = true;
        isError = true;
    } else if (validateName && !isValidFullName(form.name)) {
        errMsg = {
            title: "Invalid Name!",
            subtitle: "Please enter a valid name",
        };
        errors.name = true;
        isError = true;
    } else if (form.email === "" && form.password === "") {
        errMsg = {
            title: "Empty Fields!",
            subtitle: "Please fill in both fields",
        };
        errors.email = true;
        errors.password = true;
        isError = true;
    } else if (form.email === "") {
        errMsg = {
            title: "Empty Email!",
            subtitle: "Please fill in the email",
        };
        errors.email = true;
        isError = true;
    } else if (form.password === "") {
        errMsg = {
            title: "Empty Password!",
            subtitle: "Please fill in the password",
        };
        errors.password = true;
        isError = true;
    } else if (!isValidEmail(form.email)) {
        errMsg = {
            title: "Invalid Email!",
            subtitle: "Please enter a valid email address",
        };
        errors.email = true;
        isError = true;
    }

    setErrMsg(errMsg);
    setIsError(errors);

    if (isError) {
        showAlert();
    } else {
        hideAlert();
    }

    return isError;
};

const isValidEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
};

const isValidFullName = (fullName) => {
    const regex = /^[a-zA-ZÀ-ÿ-']+(?:\s[a-zA-ZÀ-ÿ-']+)*$/;
    return regex.test(fullName);
};
