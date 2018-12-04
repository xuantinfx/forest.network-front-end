import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class ProfileEditUrl extends Component {
  static propTypes = {

  }

  render() {
    return (
    <div className="ProfileHeaderCardEditing-url ProfileHeaderCardEditing-item">
        <input type="text" id="user_url" name="user[url]" 
        className="ProfileHeaderCardEditing-editableField u-borderUserColorLight" defaultValue="" 
        placeholder="Website" maxLength="100" autoComplete="off" tabIndex="2"/>
      </div>
    )
  }
}

export default ProfileEditUrl
