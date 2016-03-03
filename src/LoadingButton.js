import './LoadingButton.css';

import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Loading from './Loading';

class LoadingButton extends Component {
  static propTypes = {
    label: React.PropTypes.string.isRequired,
    loading: React.PropTypes.bool.isRequired,
    icon: React.PropTypes.string,
    loadingLabel: React.PropTypes.string,
  }

  render() {
    if (!this.props.loadingLabel) {
      this.props.loadingLabel = `${this.props.label}ing`;
    }

    return (
      <Button disabled={this.props.loading} {...this.props}>
        {this.props.loading
          ? <span><Loading inline delay={false} /> { this.props.icon && <img src={ this.props.icon } className="LoadingButton__icon" />} { this.props.loadingLabel }&hellip;</span>
          : <span>{ this.props.icon && <img src={ this.props.icon } className="LoadingButton__icon" />} { this.props.label }</span>
        }
      </Button>
    );
  }
}

export default LoadingButton;
