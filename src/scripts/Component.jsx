import React from 'react';

var Component = React.createClass({
  render: function () {
    if (this.props.onRender) {
      this.props.onRender();
    }
    return (
      <p>Hello123 world</p>
    );
  },
  propTypes: {
    onRender: React.PropTypes.func
  }
});

export default Component;
