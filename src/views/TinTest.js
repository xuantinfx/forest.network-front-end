import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Navbar from '../components/Navbar/index';
import Banner from '../components/Banner/index'

export default class TinTest extends Component {
    static propTypes = {
        
    }

    render() {
        return (
            <div>
                <Navbar />
                <div id="page-outer">
                    <div id="page-container" className="AppContent">
                        <Banner 
                            urlImg="./template/1500x500"
                            tweet="23 N"
                            followings="1.018"
                            follower="71,1 Tr"
                            likes="2.316"
                            list="1"
                            moment="4"
                        />
                    </div>
                </div>
            </div >
        )
    }
}
