import React from 'react';

class input extends React.Component {

  inputFieldStyle() {
    if ( this.props.valid == true ) {
      return {
        border: '2px solid #DDD'
      }
    } else {
      return {
        border: '2px solid red'
      }
    }
  }

  render() {
    return (
      <div>
        <label for="email">Email</label>
        <input id="email" 
               type="email" 
               placeholder="Email"
               style={ this.inputFieldStyle() }/>
      </div>
    );
  }
}

export default input