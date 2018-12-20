import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class index extends Component {
  static propTypes = {
    arrayBufferData: PropTypes.array
  }

  render() {
    let imgSrc = this.props.arrayBufferData
      ? `data:image/jpeg;base64,${Buffer.from(this.props.arrayBufferData).toString('base64')}`
      : '/img/picturenotfound.png';

    return (
      <img className={this.props.className} alt={this.props.alt || ''} src={imgSrc} />
    )
  }
}
