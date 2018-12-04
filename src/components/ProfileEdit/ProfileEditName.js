import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ProfileEditName extends Component {
  static propTypes = {

  }

  render() {
    return (
    <div>
        <div className="ProfileHeaderCardEditing-name ProfileHeaderCardEditing-item">
            <input type="text" id="user_name" name="user[name]"
                className="ProfileHeaderCardEditing-editableField u-borderUserColorLight"
                defaultValue="Văn Vi" placeholder="Name" maxLength="50" autoComplete="off" tabIndex="2"/>
        </div>
        <div className="ProfileHeaderCardEditing-screenname u-textUserColor">
            <span className="username u-dir u-textTruncate" dir="ltr">
                @<b>VnVi17</b>
            </span>
        </div>
    </div>
    )
  }
}

export default ProfileEditName
