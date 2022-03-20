const axios = require("axios");
export function GetAlltodo() {
  return axios.get("http://localhost:3004/todo").then(function (response: any) {
    return response.data;
  });
}
