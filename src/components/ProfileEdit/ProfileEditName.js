import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ProfileEditName extends Component {
  static propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func
  }

  onChange(value) {
    this.props.onChange("name", value.target.value);
  }

  render() {
    return (
    <div>
        <div className="ProfileHeaderCardEditing-name ProfileHeaderCardEditing-item">
            <input type="text" id="user_name" name="user[name]"
                className="ProfileHeaderCardEditing-editableField u-borderUserColorLight"
                value={this.props.name} onChange={this.onChange.bind(this)} placeholder="Name" maxLength="50" autoComplete="off" tabIndex="2"/>
        </div>
    </div>
    )
  }
}

export default ProfileEditName
