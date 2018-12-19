import React, { Component } from 'react'
import PropTypes from 'prop-types'
import convertNumTweet from '../../utilities/convertNumTweet'
import getLinkProfileFromUrl from '../../utilities/getLinkProfileFromUrl'
import { Link } from "react-router-dom";

export default class Followers extends Component {
    static propTypes = {
        followers: PropTypes.number,
        onChange: PropTypes.func
    }

    render() {
        let urlTweet = getLinkProfileFromUrl();

        let isActive = window.location.href.indexOf('/followers') !== -1;
        return (
            <li className={"ProfileNav-item ProfileNav-item--followers " + (isActive ? "is-active" : "")}>
                <Link className="ProfileNav-stat ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip js-openSignupDialog js-nonNavigable u-textUserColor"
                    title={this.props.followers + " theo dõi"} to={`/${urlTweet}/followers`}
                    onClick={this.props.onChange}>
                    <span className="ProfileNav-label" aria-hidden="true">Người theo dõi</span>
                    <span className="ProfileNav-value" >{convertNumTweet(this.props.followers)}</span>
                </Link>
            </li>
        )
    }
}
