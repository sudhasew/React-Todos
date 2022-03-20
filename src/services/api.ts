const axios = require("axios");
export function GetAlltodo() {
  return axios.get("http://localhost:3004/todo").then(function (response: any) {
    return response.data;
  });
}

// export function getAllPosts(
//   title: string,
//   description: string,
//   duedate: string,
//   completed: string
// ) {
//   return axios
//     .post("http://localhost:3004/todo", {
//       data: {
//         title: title,
//         description: description,
//         due_date: duedate,
//         completed: completed,
//       },
//     })
//     .then((response: any) => response.data);
// }
