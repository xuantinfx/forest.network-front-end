import React, { Component } from 'react'
import ProfileHeaderCard from './ProfileHeaderCard';
//import PhotoRail from './PhotoRail';

class Profile extends Component {
    render() {
        return (
            <div className="Grid-cell u-size1of3 u-lg-size1of4">
                <div className="Grid Grid--withGutter">
                    <div className="Grid-cell">
                        <div className="ProfileSidebar ProfileSidebar--withLeftAlignment">
                            <div className='ProfileHeaderCard'>
                                <ProfileHeaderCard displayName={this.props.displayName} userName={this.props.userName} 
                                    bio={this.props.bio} location={this.props.location}
                                    joinDate={this.props.joinDate}></ProfileHeaderCard>
                                <button type="submit" id="js-userColorButton" name="user[profile_link_color]" className="EdgeButton EdgeButton--secondary ProfileHeaderCardEditing-userColorButton js-current-color js-dropdown-toggle" data-color="#1DA1F2" tabIndex="2">
                                    Edit Profile
                                </button>
                                {/* <PhotoRail withCountLink={this.props.withCountLink} withCountNum={this.props.withCountNum}
                        mediaBoxImg={this.props.mediaBoxImg}></PhotoRail>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile
