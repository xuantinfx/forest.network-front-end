import React, { Component } from 'react'
import PropTypes from 'prop-types'
import converseNumTweet from '../../utilities/converseNumTweet'
import { Link } from "react-router-dom";

export default class Followers extends Component {
    static propTypes = {
        followers: PropTypes.number,
        onChange: PropTypes.func
    }

    render() {
        let isActive = window.location.href.indexOf('/followers') !== -1;
        return (
            <li className={"ProfileNav-item ProfileNav-item--followers " + (isActive ? "is-active" : "")}>
                <Link className="ProfileNav-stat ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip js-openSignupDialog js-nonNavigable u-textUserColor"
                    title="71.051.923 Người theo dõi" to="/followers"
                    onClick={this.props.onChange}>
                    <span className="ProfileNav-label" aria-hidden="true">Người theo dõi</span>
                    <span className="ProfileNav-value" >{converseNumTweet(this.props.followers)}</span>
                </Link>
            </li>
        )
    }
}
