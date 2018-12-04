import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Navbar from '../components/Navbar/index';
import Banner from '../containers/Banner'
import Profile from '../containers/Profile'
import ProfileSidebar from '../containers/ProfileSidebar'

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
                        <div class="AppContainer">
                            <div class="AppContent-main content-main u-cf" role="main" aria-labelledby="content-main-heading">
                                <div class="Grid Grid--withGutter">
                                    <Profile></Profile>
                                    <div class="Grid-cell u-size2of3 u-lg-size3of4">
                                        <div class="Grid Grid--withGutter">
                                            <div class="Grid-cell">
                                                <div class="js-profileClusterFollow"></div>
                                            </div>
                                            <ProfileSidebar></ProfileSidebar>
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
