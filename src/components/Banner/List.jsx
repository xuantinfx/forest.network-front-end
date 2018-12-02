import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class List extends Component {
    static propTypes = {
        list: PropTypes.string
    }

    render() {
        return (
            <li className="ProfileNav-item ProfileNav-item--lists" data-more-item=".ProfileNav-dropdownItem--lists">
                <a className="ProfileNav-stat ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip  js-openSignupDialog js-nonNavigable u-textUserColor"
                    title="1 Danh sách" href="/">
                    <span className="ProfileNav-label" aria-hidden="true">Danh sách</span>
                    <span className="ProfileNav-value">{this.props.list}</span>
                </a>
            </li>
        )
    }
}
