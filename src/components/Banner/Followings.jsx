import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Followings extends Component {
    static propTypes = {
        followings: PropTypes.string
    }

    render() {
        return (
            <li className="ProfileNav-item ProfileNav-item--following">
                <a className="ProfileNav-stat ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip js-openSignupDialog js-nonNavigable u-textUserColor"
                    title="1.018 Đang theo dõi" href="/">
                    <span className="ProfileNav-label" aria-hidden="true">Đang theo dõi</span>
                    <span className="ProfileNav-value">{this.props.followings}</span>
                </a>
            </li>
        )
    }
}
