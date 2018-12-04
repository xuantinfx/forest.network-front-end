import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ProfileEditName extends Component {
  static propTypes = {
    userName: PropTypes.string,
    displayName: PropTypes.string,
  }

  render() {
    return (
    <div>
        <div className="ProfileHeaderCardEditing-name ProfileHeaderCardEditing-item">
            <input type="text" id="user_name" name="user[name]"
                className="ProfileHeaderCardEditing-editableField u-borderUserColorLight"
                defaultValue={this.props.displayName} placeholder="Name" maxLength="50" autoComplete="off" tabIndex="2"/>
        </div>
        <div className="ProfileHeaderCardEditing-screenname u-textUserColor">
            <span className="username u-dir u-textTruncate" dir="ltr">
                @<b>{this.props.userName}</b>
            </span>
        </div>
    </div>
    )
  }
}

export default ProfileEditName
