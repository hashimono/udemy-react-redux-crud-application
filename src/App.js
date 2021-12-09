import React, { Component } from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    {name: "Taro", age: 12}
    , {name: "Hanako", age: 8}
    , {name: "false", age: 8}
  ]
  return profiles.map((profile, index) => {
    return <User name={profile.name} age={profile.age} key={index} />
  });
}


const User = (props) => {
  return <div>Hi, I am {props.name}. {props.age} years old.</div>
}

User.propTypes = {
  name: PropTypes.string
  , age: PropTypes.number.isRequired
}

export default App;
