const API = "http://localhost:8001/user/signup";

export const SIGNUP = async () => {
  const response = await fetch(API, {
    method: "POST",
    headers: {
      Accept: "Application/json",
      "Content-Type": "",
    },
  });
};
