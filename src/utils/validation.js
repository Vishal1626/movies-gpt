export const validateEmail = (email) => {
  if (email === "") {
    return "Please Enter Email";
  } else {
    const result = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
      email
    );

    return !result ? "Enter address Valid Email" : null;
  }
};

export const validatePassword = (password) => {
  if (password === "") {
    return "Please Enter Password";
  } else {
    const result =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
        password
      );

    return !result ? "Please Enter Valid Password" : null;
  }
};

export const validateName = (name) => {
  if (name === "") {
    return "Please Enter Name";
  } else {
    const result = /^[a-zA-Z ]{2,30}$/.test(name);

    return !result ? "Please Enter Valid Name" : null;
  }
};

export const validatePhoneNo = (phoneno) => {
  if (phoneno === "") {
    return "Please Enter Phone Number";
  } else {
    const result = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
      phoneno
    );

    return !result ? "Please Enter Valid Phone No" : null;
  }
};
