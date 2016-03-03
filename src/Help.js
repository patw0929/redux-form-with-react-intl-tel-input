import './Help.css';

import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import React, { Component } from 'react';
import Tooltip from 'react-bootstrap/lib/Tooltip';

class Help extends Component {
  static propTypes = {
    text: React.PropTypes.string.isRequired,
  }

  render() {
    const tooltip = <Tooltip>{ this.props.text }</Tooltip>;

    return (
      <OverlayTrigger overlay={tooltip} delayShow={300} delayHide={150}>
        <Glyphicon className="Help" glyph="question-sign" />
      </OverlayTrigger>
    );
  }
}

export default Help;
