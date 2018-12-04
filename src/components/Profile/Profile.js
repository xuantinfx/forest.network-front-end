import React, { Component } from 'react'
import ProfileHeaderCard from './ProfileHeaderCard';
import PhotoRail from './PhotoRail';

export class Profile extends Component {
  render() {
    return (
    <div className="Grid-cell u-size1of3 u-lg-size1of4">
        <div className="Grid Grid--withGutter">
            <div className="Grid-cell">
                <div className="ProfileSidebar ProfileSidebar--withLeftAlignment">
                    <div className='ProfileHeaderCard'>
                    <ProfileHeaderCard name={this.props.name} bio={this.props.bio} location={this.props.location}
                        hashtag={this.props.hashtag} url={this.props.url} joinDate={this.props.joinDate}></ProfileHeaderCard>
                    <PhotoRail withCountLink={this.props.withCountLink} withCountNum={this.props.withCountNum}
                        mediaBoxImg={this.props.mediaBoxImg}></PhotoRail>      
                        </div>              
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default Profile
