import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Navbar from '../components/Navbar/index';
import Banner from '../containers/Banner'
import Profile from '../containers/Profile'
import Follow from '../containers/Follow'
import ProfileTimeline from '../components/ProfileTimeline';
import ProfileSidebar from '../containers/ProfileSidebar';

export default class TinTest extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <Navbar />
                <div id="page-outer">
                    <div id="page-container" className="AppContent">
                        <Banner />
                        <div className="AppContainer">
                            <div className="AppContent-main content-main u-cf" role="main" aria-labelledby="content-main-heading">
                                <div className="Grid Grid--withGutter">
                                    <Profile></Profile>
                                    <div className="Grid-cell u-size2of3 u-lg-size3of4">
                                        <div className="Grid Grid--withGutter">
                                            <ProfileTimeline />
                                            {/* <ProfileSidebar /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
