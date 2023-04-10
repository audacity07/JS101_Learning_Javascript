let signin_username = "xyz";
let signin_password = "password";

let login_username = "xyz";
let login_password = "passwor";

if (signin_username === login_username) {
  if (signin_password === login_password) {
    console.log("Logged In");
  }
  else {
    console.log("Check your password");
  }
}
else {
  console.log("Check your username");
}