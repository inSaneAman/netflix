export const checkValidity =(email, password) =>{
    const isValidMail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isValidMail) return "Invalid Mail";
    if(!isValidPassword) return "Invalid Password";

    return null;
};