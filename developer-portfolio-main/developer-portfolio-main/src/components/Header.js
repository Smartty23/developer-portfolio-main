import React from 'react';
import personalData from '../utils/data/personal-data';

const Header = () => {
  return (
    <header>
      <h1>{personalData.name}</h1>
      <h2>{personalData.designation}</h2>
      <nav>
        <ul>
          <li><a href={personalData.github}>GitHub</a></li>
          <li><a href={personalData.linkedIn}>LinkedIn</a></li>
          <li><a href={personalData.twitter}>Twitter</a></li>
          <li><a href={personalData.facebook}>Facebook</a></li>
          <li><a href={personalData.stackOverflow}>Stack Overflow</a></li>
          <li><a href={personalData.leetcode}>LeetCode</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;