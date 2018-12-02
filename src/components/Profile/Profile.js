import React, { Component } from 'react'
import ProfileHeaderCard from './ProfileHeaderCard';
import PhotoRail from './PhotoRail';
import { dummyProfileData,dummyPhotoRailData } from "../../DummyData/DummyData";

export class Profile extends Component {
  render() {
    return (
    <div className="Grid-cell u-size1of3 u-lg-size1of4">
        <div className="Grid Grid--withGutter">
            <div className="Grid-cell">
                <div className="ProfileSidebar ProfileSidebar--withLeftAlignment">
                    <ProfileHeaderCard name={dummyProfileData.name} bio={dummyProfileData.bio} location={dummyProfileData.location}
                        hashtag={dummyProfileData.hashtag} url={dummyProfileData.url} joinDate={dummyProfileData.joinDate}></ProfileHeaderCard>
                    <PhotoRail withCountLink={dummyPhotoRailData.withCountLink} withCountNum={dummyPhotoRailData.withCountNum}></PhotoRail>                    
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default Profile
