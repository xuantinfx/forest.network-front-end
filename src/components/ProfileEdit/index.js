import React, { Component } from 'react'
import ProfileEditName from './ProfileEditName';
import ProfileEditBio from './ProfileEditBio';
import ProfileEditLocation from './ProfileEditLocation';
import PropTypes from 'prop-types'
/* import ProfileEditUrl from './ProfileEditUrl';
import ProfileEditTheme from './ProfileEditTheme'; */

class ProfileEdit extends Component {
    static propTypes = {
        updateProfile: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {
            bio: props.bio,
            location: props.location,
            name: props.name
        };
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.updateProfile(this.state);
    }

    onChange(key, value) {
        this.setState({
            [key]: value
        })
    }

  render() {
    return (
        <div className='ProfileHeaderCardEditing u-bgUserColorLightest ProfileHeaderCardEditing--withEmoji ProfileHeaderCardEditing--withExtraFields'>
                            <form onSubmit={this.onSubmit.bind(this)}>
                                <ProfileEditName name={this.state.name||''} onChange={this.onChange.bind(this)}></ProfileEditName>
                                <ProfileEditBio bio={this.state.bio||''} onChange={this.onChange.bind(this)}></ProfileEditBio>
                                <ProfileEditLocation location={this.state.location||''} onChange={this.onChange.bind(this)}></ProfileEditLocation>
                                {/* 
                                <ProfileEditUrl></ProfileEditUrl>
                                <ProfileEditTheme></ProfileEditTheme> */}
                                <button type="submit" id="js-userColorButton" name="user[profile_link_color]" className="EdgeButton EdgeButton--secondary ProfileHeaderCardEditing-userColorButton js-current-color js-dropdown-toggle" data-color="#1DA1F2" tabIndex="2">
                                    Save
                                </button>
                            </form>
                        </div>

    )
  }
}

export default ProfileEdit
