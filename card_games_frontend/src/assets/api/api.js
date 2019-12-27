import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

export default axios.create({
  baseURL: "https://jays-card-games.herokuapp.com/"
});
