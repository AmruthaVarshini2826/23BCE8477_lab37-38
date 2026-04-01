import React from "react";

function StudentProfile() {
  const name = "Amrutha Varshini";
  const department = "CSE";
  const year = "3rd Year";
  const section = "A";

  return (
    <div>
      <p>Name: {name}</p>
      <p>Department: {department}</p>
      <p>Year: {year}</p>
      <p>Section: {section}</p>
    </div>
  );
}

export default StudentProfile;