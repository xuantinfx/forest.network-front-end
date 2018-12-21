import React, { Component } from 'react';
import Banner from '../containers/Banner'
import Profile from '../containers/Profile'
import Follow from '../containers/Follow'
import ProfileTimeline from '../containers/ProfileTimeline';
import { getProfileByAddress } from '../actions/profileActions';
import { connect } from 'react-redux';

class ProfileView extends Component {
  constructor(props) {
    super(props);
    //get Profile by address from URL
    this.props.getProfile();
  }

  renderChildComponent() {
    switch (this.props.match.params.sublink) {
      case "followers":
      case "followings":
        return <Follow key={window.location.href} address={this.props.match.params.address} />

      default:
        return <ProfileTimeline address={this.props.match.params.address} />
    }
  }

  render() {
    return (
      <div id="page-outer">
        <div id="page-container" className="AppContent">
          <Banner address={this.props.match.params.address}/>
          <div className="AppContainer">
            <div className="AppContent-main content-main u-cf" role="main" aria-labelledby="content-main-heading">
              <div className="Grid Grid--withGutter" key={window.location.href}>
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getProfile: () => {
      const address = ownProps.match.params.address;
      dispatch(getProfileByAddress(address))
    }
  }
}

export default connect(null, mapDispatchToProps)(ProfileView);