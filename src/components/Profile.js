import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProfileHeaderCard from './ProfileHeaderCard';
import PhotoRail from './PhotoRail';

export class Profile extends Component {
  static propTypes = {

  }

  render() {
    return (
    <div className="Grid-cell u-size1of3 u-lg-size1of4">
        <div className="Grid Grid--withGutter">
            <div className="Grid-cell">
                <div className="ProfileSidebar ProfileSidebar--withLeftAlignment">
                    <ProfileHeaderCard></ProfileHeaderCard>

                    <PhotoRail></PhotoRail>
                    
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default Profile
