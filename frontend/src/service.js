const API = "/user/signup";

export const SIGNUP = async (email, password) => {
  var user = email;
  console.log(user);
  try {
    const response = await fetch(API, {
      method: "POST",
      headers: {
        Accept: "Application/json",
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const jsonResponse = await response.json();
    alert(JSON.stringify(jsonResponse.message));
  } catch (err) {
    alert(err);
  }
};
