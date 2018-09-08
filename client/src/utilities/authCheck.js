import setAuthHeader from "./setAuthHeader";
import jwt_decode from "jwt-decode";

const authCheck = () => {
  let decoded;
  if (localStorage.jwtToken) {
    setAuthHeader(localStorage.jwtToken);
    decoded = jwt_decode(localStorage.jwtToken);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      localStorage.removeItem("jwtToken");
      window.location.href = "/login";
    }
    return decoded;
  }
};

export default authCheck;
