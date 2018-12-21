import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

export default class index extends Component {
  static propTypes = {
    arrayBufferData: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array
    ])
  }

  render() {
    let imgSrc = !_.isEmpty(this.props.arrayBufferData)
      ? `data:image/jpeg;base64,${Buffer.from(this.props.arrayBufferData).toString('base64')}`
      : '/img/picturenotfound.png';

    return (
      <img className={this.props.className} style={this.props.style} alt={this.props.alt || ''} src={imgSrc} />
    )
  }
}
