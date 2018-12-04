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
                        <Profile></Profile>
                        <ProfileSidebar></ProfileSidebar>
                    </div>
                </div>
            </div >
        )
    }
}
