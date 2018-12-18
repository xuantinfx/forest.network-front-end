import React, { Component } from 'react'
import PropTypes from 'prop-types'
import convertNumTweet from '../../utilities/convertNumTweet'
import getLinkProfileFromUrl from '../../utilities/getLinkProfileFromUrl'
import { Link } from "react-router-dom";

export default class Followings extends Component {
    static propTypes = {
        followings: PropTypes.number,
        onChange: PropTypes.func
    }

    render() {
        let urlTweet = getLinkProfileFromUrl();

        let isActive = window.location.href.indexOf('/followings') !== -1;
        return (
            <li className={"ProfileNav-item ProfileNav-item--following " + (isActive ? "is-active" : "")}>
                <Link className="ProfileNav-stat ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip js-openSignupDialog js-nonNavigable u-textUserColor"
                    title="1.018 Đang theo dõi" to={`/${urlTweet}/followings`}
                    onClick={this.props.onChange}>
                    <span className="ProfileNav-label" aria-hidden="true">Đang theo dõi</span>
                    <span className="ProfileNav-value">{convertNumTweet(this.props.followings)}</span>
                </Link>
            </li>
        )
    }
}
