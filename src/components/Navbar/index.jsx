import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import NavLeft from './NavLeft'
import NavRight from './NavRight'

export default class Navbar extends Component {
    static propTypes = {
        
    }

    render() {
        return (
            <div className="topbar js-topbar">
                <div className="global-nav global-nav--newLoggedOut">
                    <div className="global-nav-inner">
                        <div className="container">
                            <NavLeft />
                            <NavRight/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
