import React, { Component } from 'react'
import PropTypes from 'prop-types'
import converseNumTweet from '../../utilities/converseNumTweet'

export default class Likes extends Component {
    static propTypes = {
        likes: PropTypes.number
    }

    render() {
        return (
            <li className="ProfileNav-item ProfileNav-item--favorites"
                data-more-item=".ProfileNav-dropdownItem--favorites">
                <a className="ProfileNav-stat ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip js-openSignupDialog js-nonNavigable u-textUserColor"
                    title="2.316 Lượt thích" href="/">
                    <span className="ProfileNav-label" aria-hidden="true">Lượt thích</span>
                    <span className="ProfileNav-value">{converseNumTweet(this.props.likes)}</span>
                </a>
            </li>
        )
    }
}
