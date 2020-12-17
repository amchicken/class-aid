import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Course = ({ token, isAdmin }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    if (isLoading && token) {
      if (courses === null) {
        axios
          .get(`/enroll`)
          .then((res) => {
            setCourses(res.data);
            setIsLoading(false);
          })
          .catch((err) => {
            console.log(err.response);
          });
      }
    }
  });
  return (
    <div className="course-continer">
      {isAdmin ? (
        <div className="course">
          <Link to="/addNewCourse">ADD COURSE</Link>
        </div>
      ) : null}
      {isLoading
        ? "LOADING"
        : courses.map((e) => <div className="course">{e.course}</div>)}
    </div>
  );
};

export default Course;
