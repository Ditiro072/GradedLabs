import React from "react";
import ProfileCard from "./ProfileCard.jsx";
import "./App.css";
import guy from "./images/guy.jpeg";
import devLady from "./images/dev lady avatar.png";

function App() {
  return (
    <div className="app-container">
      <h1>Team Members</h1>
      <div className="card-list">
        <ProfileCard
          image={guy}
          name="Junior Scott"
          title="Software Engineer"
          bio="Junior is a passionate developer with strong techinal background, Ifv you can think it he can build it.     

            Contacts:JScott@gmail.com
          "
        />
        <ProfileCard
          image={devLady}
          name="Jess Xolo"
          title="UI/UX Designer"
          bio="Jess is a creative designer well known to shape ideas ANd detail to creativity.
          Contacts:+2772-334-6102
          "
        />
      </div>
    </div>
  );
}

export default App;
