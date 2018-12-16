import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Search from './Search'
import User from '../../containers/User'

export default class NavRight extends Component {
    static propTypes = {
        
    }

    render() {
        return (
            <div className="pull-right nav-extras">
                <Search/>
                <User/>
            </div>
        )
    }
}
