import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeItem from './ThemeItem';

class ProfileEditTheme extends Component {
  static propTypes = {

  }

  render() {
    return (
        <div className="ProfileHeaderCardEditing-userColor ProfileHeaderCardEditing-item dropdown">
            <button type="button" id="js-userColorButton" name="user[profile_link_color]" className="EdgeButton EdgeButton--secondary ProfileHeaderCardEditing-userColorButton js-current-color js-dropdown-toggle" data-color="#1DA1F2" tabIndex="2">
            Theme color
            </button>
            <div className="ColorPicker dropdown-menu" tabIndex="-1" role="dialog" aria-labelledby="color-picker">
                <div className="dropdown-caret">
                    <span className="caret-outer"></span>
                    <span className="caret-inner"></span>
                </div>
                <fieldset>
                    <legend id="color-picker" className="u-hiddenVisually">Color Picker</legend>
                    <div className="ColorPicker-colorList">                
                        <ThemeItem themeName='orange' themeColor='ff691f'></ThemeItem>
                        <div className="ColorPicker-item ColorPicker-hex" data-color="#1da1f2" data-original-color="#f0f0f0"
                            style={{backgroundColor: 'rgb(29, 161, 242)', 
                                display: 'inline-block',
                                borderColor: 'rgb(29, 161, 242)'}}>
                            <label className="Icon Icon--smallest Icon--check">
                                <input className="u-hiddenVisually" type="radio" name="ColorPicker-colorGroup"/>
                            </label>
                            <input type="text" className="ColorPicker-hexInput" aria-labelledby="js-userColorButton" 
                            placeholder="1da1f2" maxLength="6" style={{borderColor: "rgb(29, 161, 242)"}}/>
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>
    )
  }
}

export default ProfileEditTheme
