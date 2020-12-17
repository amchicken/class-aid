import axios from "axios";

function getCourse() {
  let data = null;
  axios
    .get(`/enroll`)
    .then((res) => {
      console.log(res.data);
      data = res.data;
    })
    .catch((err) => {
      console.log(err.response);
    });
  return data;
}

export default getCourse;
