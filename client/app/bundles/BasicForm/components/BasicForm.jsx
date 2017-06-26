import PropTypes from 'prop-types';
import React from 'react';

export default class BasicForm extends React.Component {
  constructor(props, _railsContext) {
    super(props);
  }

  updateName = (name) => {
    this.setState({ name });
  };

  render() {
    return (
      <div>
        <h3>
          This is a basic form!
        </h3>
        <hr />
      </div>
    );
  }
}
