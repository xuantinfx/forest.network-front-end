import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Moment extends Component {
    static propTypes = {
        moment: PropTypes.string
    }

    render() {
        return (
            <li className="ProfileNav-item ProfileNav-item--moments" data-more-item=".ProfileNav-dropdownItem--userMoments">
                <a className="ProfileNav-stat ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip  js-openSignupDialog js-nonNavigable u-textUserColor"
                    title="4 Khoảnh khắc" href="/">
                    <span className="ProfileNav-label" aria-hidden="true">Khoảnh khắc</span>
                    <span className="ProfileNav-value">{this.props.moment}</span>
                </a>
            </li>
        )
    }
}
