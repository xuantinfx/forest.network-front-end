import React, { Component } from 'react';
import Banner from '../containers/Banner'
import Profile from '../containers/Profile'
import Follow from '../containers/Follow'
import ProfileTimeline from '../containers/ProfileTimeline';

class ProfileView extends Component {
    renderChildComponent() {
      switch (this.props.match.params.sublink) {
        case "followers":
        case "followings":
          return <Follow/>
      
        default:
          return <ProfileTimeline address={this.props.match.params.address}/>
      }
    }

    render() {
        return (
            <div id="page-outer">
            <div id="page-container" className="AppContent">
              <Banner />
              <div className="AppContainer">
                <div className="AppContent-main content-main u-cf" role="main" aria-labelledby="content-main-heading">
                  <div className="Grid Grid--withGutter">
                    <Profile></Profile>
                    <div className="Grid-cell u-size2of3 u-lg-size3of4">
                      <div className="Grid Grid--withGutter">
                        {this.renderChildComponent()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default ProfileView;