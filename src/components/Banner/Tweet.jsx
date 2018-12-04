import React, { Component } from 'react'
import PropTypes from 'prop-types'
import converseNumTweet from '../../utilities/converseNumTweet'
import { Link } from "react-router-dom";

export default class Tweet extends Component {
    static propTypes = {
        tweet: PropTypes.number,
        onChange: PropTypes.func
    }

    render() {
        let isActive = window.location.href.indexOf('/followers') === -1 && window.location.href.indexOf('/followwings') === -1;
        return (
            <li className={"ProfileNav-item ProfileNav-item--tweets "+ (isActive ? "is-active" : "")}>
                <Link className="ProfileNav-stat ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip js-nav"
                    title="22.967 Tweet" to="/"
                    onClick={this.props.onChange}>
                    <span className="ProfileNav-label" aria-hidden="true">Tweet</span>
                    <span className="ProfileNav-value">{converseNumTweet(this.props.tweet)}</span>
                </Link>
            </li>
        )
    }
}
