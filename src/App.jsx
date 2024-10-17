import Card from "./components/Card";
import Content from "./components/Content";
import EventHandler from "./components/EventHandler";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App({ title, num1, num2, content }) {
  let data = {
    student_name: "Usman khan",
    address: "Mardan",
    theme: {
      color: "white",
      backgroundColor: "blue",
      padding: "10px",
    },
  };

  let fullName = "Ami Zeb";

  let loggin = false;

  const people = [
    {
      id: 0,
      name: "Creola Katherine Johnson",
      profession: "mathematician",
    },
    {
      id: 1,
      name: "Mario José Molina-Pasquel Henríquez",
      profession: "chemist",
    },
    {
      id: 2,
      name: "Mohammad Abdus Salam",
      profession: "physicist",
    },
    {
      id: 3,
      name: "Percy Lavon Julian",
      profession: "chemist",
    },
    {
      id: 4,
      name: "Subrahmanyan Chandrasekhar",
      profession: "astrophysicist",
    },
  ];


 

  return (
    <>
      <Header />
      <div className="container mt-3 mb-5">
        <h1 style={{ color: "red", backgroundColor: "pink", padding: "10px" }}>
          {title}
        </h1>
        <p>{content}</p>

        <h2>My Name is {fullName}</h2>

        <div style={data.theme}>
          <p>Student Name: {data.student_name}</p>

          <p>Student Address: {data.address}</p>
        </div>

        <h2>{loggin && "Loggedin"}</h2>

        {loggin && <Content />}

        {loggin === true ? "OK" : "Not OK"}

        {people.map((row, k) => (
         <Card record={row} />
        ))}




        <hr />


        

      </div>

      <div className="container mb-5 mt-2">
        <h2>Events</h2>
        <EventHandler />
      </div>

     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />

      {/* <Footer name="Encoder Technologies" year="2024" /> */}
    </>
  );
}

export default App;
