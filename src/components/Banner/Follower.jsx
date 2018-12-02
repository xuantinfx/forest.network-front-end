import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Follower extends Component {
    static propTypes = {
        follower: PropTypes.string
    }

    render() {
        return (
            <li className="ProfileNav-item ProfileNav-item--followers">
                <a className="ProfileNav-stat ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip js-openSignupDialog js-nonNavigable u-textUserColor"
                    title="71.051.923 Người theo dõi" href="/">
                    <span className="ProfileNav-label" aria-hidden="true">Người theo dõi</span>
                    <span className="ProfileNav-value" >{this.props.follower}</span>
                </a>
            </li>
        )
    }
}
