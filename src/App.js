import React, { Component } from 'react';

const App = () => {
  const profiles = [
    {name: "Taro", age: 12}
    , {name: "Hanako", age: 8}
    , {name: "NoAge"}
  ]
  return profiles.map((profile, index) => {
    return <User name={profile.name} age={profile.age} key={index} />
  });
}


const User = (props) => {
  return <div>Hi, I am {props.name}. {props.age} years old.</div>
}

User.defaultProps = {
  age: 1
}

export default App;
