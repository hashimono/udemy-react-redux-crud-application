import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="button" onClick={() => console.log("I am cliked.")} value="BUTTON" />
      </React.Fragment>
    )
   }
}
export default App;
