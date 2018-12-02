import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CurrentTweet extends Component {
    static propTypes = {
        tweet: PropTypes.string
    }

    render() {
        return (
            <li className="ProfileNav-item ProfileNav-item--tweets is-active">
                <a className="ProfileNav-stat ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip js-nav"
                    title="22.967 Tweet" href="/">
                    <span className="ProfileNav-label" aria-hidden="true">Tweet</span>
                    <span className="ProfileNav-value">{this.props.tweet}</span>
                </a>
            </li>
        )
    }
}
