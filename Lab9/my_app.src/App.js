import StudentProfile from "./StudentProfile";
import StudentCard from "./StudentCard";
import Counter from "./Counter";

function App() {
  return (
    <div style={{ textAlign: "center" }}>

      <h1>Exercise 1: Student Profile</h1>
      <StudentProfile />

      <hr />

      <h1>Exercise 2: Student Cards</h1>
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px"
      }}>
        <StudentCard name="Amrutha" department="CSE" marks={90} />
        <StudentCard name="Rahul" department="ECE" marks={85} />
        <StudentCard name="Priya" department="IT" marks={95} />
      </div>

      <hr />

      <h1>Exercise 3: Counter</h1>
      <Counter />

    </div>
  );
}

export default App;