import React from 'react';

import { useParams } from 'react-router-dom';


 

function CoursePage() {
  console.log(coursesData);

  const { courseId } = useParams();

  const courseData = coursesData.find((course) => course.id === courseId);

  

  if (!courseData) return <p>Course not found</p>;

 

  return (

    <div>

      <h1>{courseData.title}</h1>

      <p>{courseData.subject}</p>

      {/* Render other course data as needed */}

    </div>

  );

}

 

export default CoursePage;
