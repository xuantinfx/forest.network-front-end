import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ProfileEditName extends Component {
  static propTypes = {
    name: PropTypes.string,
  }

  render() {
    console.log('edit',this.props)
    return (
    <div>
        <div className="ProfileHeaderCardEditing-name ProfileHeaderCardEditing-item">
            <input type="text" id="user_name" name="user[name]"
                className="ProfileHeaderCardEditing-editableField u-borderUserColorLight"
                defaultValue={this.props.name} placeholder="Name" maxLength="50" autoComplete="off" tabIndex="2"/>
        </div>
    </div>
    )
  }
}

export default ProfileEditName
