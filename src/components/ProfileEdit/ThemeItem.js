import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ThemeItem extends Component {
  static propTypes = {
    themeName: PropTypes.string,
    themeColor: PropTypes.string,
  }

  render() {
    return (
    <div className="ColorPicker-transparent">
        <div className="ColorPicker-item ColorPicker-color" data-color="#1b95e0" 
        style={{backgroundColor: '#'+this.props.themeColor}}>
            <label className="Icon Icon--smallest">
                <span className="u-hiddenVisually">{this.props.themeName}</span>
                <input className="u-hiddenVisually" type="radio" name="ColorPicker-colorGroup"/>
            </label>
        </div>
    </div>
    )
  }
}

export default ThemeItem


