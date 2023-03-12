// import logo from './logo.svg';
import './css/App.css';

import React from "react";
import { users } from "./components/user";

//for picture display
const UserPicture = ({ user }) => {
  return <img src={user.profilePicture} alt="Profile" />;
};



const UserName = ({ user }) => {
  return (
    <div>
      <p>{`${user.firstName} ${user.lastName}`}</p>
    </div>
  );
};

const UserSchool = ({ user }) => {
  return <p>{user.school}</p>;
};

const UserEmail = ({ user }) => {
  return <p>{user.email}</p>;
};

const UserClassLevel = ({ classLevel }) => {
  const textColor = classLevel === "Freshmen" ? "green" : "black";
  return <p style={{ color: textColor }}>{classLevel}</p>;
};

//for user display
const User = ({user}) => {
  return (
    <div className={`class-level-${user.classLevel}`}>
      <UserPicture user={user} />
      <div>
        <ul>
          
          <li><strong>Full name: </strong><UserName user={user}/></li>
          
        </ul>

        <ul>
          <div>
          <li><strong>Class Level: </strong> <UserClassLevel classLevel={user.classLevel} /> </li>
          </div>
        </ul>

        <ul>
          <div>
          <li><strong>School: </strong><UserSchool user={user} /></li>
          </div>
        </ul>

        <ul>
          <div>
          <li><strong>Email: </strong><UserEmail user={user} /></li>
          </div>
        </ul>
      </div>


    </div>
  );
};

const App = () => {
  return (
    <div>
      {users.map((user) =>(
      <User key= {user.username} user={user} />))}
    </div>
  );
};

export default App;



