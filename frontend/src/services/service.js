export const SIGNIN = async (email, password) => {
  try {
    const response = await fetch("/auth/login", {
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
    console.log(jsonResponse);
    if (!response.ok) {
      throw new Error(jsonResponse.message);
    }
    localStorage.setItem("token", jsonResponse.token);
    return response;
  } catch (err) {
    alert(err + "from service");
  }
};
