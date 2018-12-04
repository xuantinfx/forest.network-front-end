import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProfileEditName from './ProfileEditName';
import ProfileEditBio from './ProfileEditBio';
import ProfileEditLocation from './ProfileEditLocation';
import ProfileEditUrl from './ProfileEditUrl';
import ProfileEditTheme from './ProfileEditTheme';

export class ProfileEdit extends Component {
  static propTypes = {

  }

  render() {
    return (
        <div className="ProfileHeaderCardEditing u-bgUserColorLightest ProfileHeaderCardEditing--withEmoji ProfileHeaderCardEditing--withExtraFields">
            <ProfileEditName></ProfileEditName>
            <ProfileEditBio></ProfileEditBio>
            <ProfileEditLocation></ProfileEditLocation>
            <ProfileEditUrl></ProfileEditUrl>
            <ProfileEditTheme></ProfileEditTheme>
        </div>
    )
  }
}

export default ProfileEdit
