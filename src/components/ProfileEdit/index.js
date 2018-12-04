import React, { Component } from 'react'
import ProfileEditName from './ProfileEditName';
import ProfileEditBio from './ProfileEditBio';
import ProfileEditLocation from './ProfileEditLocation';
import PropTypes from 'prop-types'
import ProfileEditUrl from './ProfileEditUrl';
import ProfileEditTheme from './ProfileEditTheme';

class ProfileEdit extends Component {
    static propTypes = {
        updateProfile: PropTypes.func
    }

    onSubmit(e) {
        e.preventDefault();
        let displayName = document.getElementById('user_name').value;
        let bio = document.getElementById('bio').value;
        let location = document.getElementById('location').value;
        this.props.updateProfile({bio, displayName, location,});
    }

  render() {
    return (
        <div className="Grid-cell u-size1of3 u-lg-size1of4">
            <div className="Grid Grid--withGutter">
                <div className="Grid-cell">
                    <div className='ProfileSidebar ProfileSidebar--withLeftAlignment'>
                        <div className='ProfileHeaderCardEditing u-bgUserColorLightest ProfileHeaderCardEditing--withEmoji ProfileHeaderCardEditing--withExtraFields'>
                            <form onSubmit={this.onSubmit.bind(this)}>
                                <ProfileEditName displayName={this.props.displayName||''} userName={this.props.userName||''}></ProfileEditName>
                                <ProfileEditBio bio={this.props.bio||''}></ProfileEditBio>
                                <ProfileEditLocation location={this.props.location||''}></ProfileEditLocation>
                                {/* 
                                <ProfileEditUrl></ProfileEditUrl>
                                <ProfileEditTheme></ProfileEditTheme> */}
                                <button type="submit" id="js-userColorButton" name="user[profile_link_color]" className="EdgeButton EdgeButton--secondary ProfileHeaderCardEditing-userColorButton js-current-color js-dropdown-toggle" data-color="#1DA1F2" tabIndex="2">
                                    Save
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default ProfileEdit
