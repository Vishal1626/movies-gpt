export const validateEmail = (email) => {
  const result = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  return !result ? "Enter address Valid Email" : null;
};

export const validatePassword = (password) => {
  const result =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );

  return !result ? "Please Enter Valid Password" : null;
};

export const validateName = (name) => {
  const result = /^[\\p{L} .'-]+$/.test(name);

  return !result ? "Please Enter Valid Name" : null;
};

export const validatePhoneNo = (phoneno) => {
  const result = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(
    phoneno
  );

  return !result ? "Please Enter Valid Phone No" : null;
};
