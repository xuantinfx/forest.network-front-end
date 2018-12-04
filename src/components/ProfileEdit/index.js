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
        <div className="Grid-cell u-size1of3 u-lg-size1of4">
            <div className="Grid Grid--withGutter">
                <div className="Grid-cell">
                    <div className='ProfileSidebar ProfileSidebar--withLeftAlignment'>
                        <div className='ProfileHeaderCardEditing u-bgUserColorLightest ProfileHeaderCardEditing--withEmoji ProfileHeaderCardEditing--withExtraFields'>
                            <ProfileEditName></ProfileEditName>
                            <ProfileEditBio></ProfileEditBio>
                            <ProfileEditLocation></ProfileEditLocation>{/* 
                            <ProfileEditUrl></ProfileEditUrl>
                            <ProfileEditTheme></ProfileEditTheme> */}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default ProfileEdit
