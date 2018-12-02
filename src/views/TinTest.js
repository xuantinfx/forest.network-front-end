import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Navbar from '../components/Navbar/index';
import Banner from '../containers/Banner'

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
                    </div>
                </div>
            </div >
        )
    }
}
