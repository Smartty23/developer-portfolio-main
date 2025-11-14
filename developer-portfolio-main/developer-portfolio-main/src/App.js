import React from 'react';
import Header from './components/Header';
import { personalData } from './utils/data/personal-data';
import './styles/main.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <h1>{personalData.name}</h1>
        <img src={personalData.profile} alt={`${personalData.name}'s profile`} />
        <h2>{personalData.designation}</h2>
        <p>{personalData.description}</p>
        <h3>Contact Information</h3>
        <p>Email: {personalData.email}</p>
        <p>Phone: {personalData.phone}</p>
        <p>Address: {personalData.address}</p>
        <h3>Social Links</h3>
        <ul>
          <li><a href={personalData.github}>GitHub</a></li>
          <li><a href={personalData.facebook}>Facebook</a></li>
          <li><a href={personalData.linkedIn}>LinkedIn</a></li>
          <li><a href={personalData.twitter}>Twitter</a></li>
          <li><a href={personalData.stackOverflow}>Stack Overflow</a></li>
          <li><a href={personalData.leetcode}>LeetCode</a></li>
        </ul>
        <a href={personalData.resume} target="_blank" rel="noopener noreferrer">View Resume</a>
      </main>
    </div>
  );
};

export default App;