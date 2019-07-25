import React from 'react'

class NotFound extends React.Component {
  constructor (props) {
    super();
    this.state = {}; 
  }

  render() {
    return (
      <p>404: page Not found</p>
    );
  }
};

export default NotFound;