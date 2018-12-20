import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Tweet from './Tweet'
import Followings from './Followings'
import Followers from './Followers'
import Follow from './Follow';

export default class Infbanner extends Component {
    static propTypes = {
        tweet: PropTypes.number,
        followings: PropTypes.number,
        followers: PropTypes.number,
    }

    onChange() {
        // Để cập nhật lại HeightLine
        this.forceUpdate();
    }

    render() {
        return (
            <div className="ProfileCanopy-navBar u-boxShadow">
                <div className="AppContainer">
                    <div className="Grid Grid--withGutter">
                        <div className="Grid-cell u-size1of3 u-lg-size1of4"></div>
                        <div className="Grid-cell u-size2of3 u-lg-size3of4">
                            <div className="ProfileCanopy-nav">
                                <div className="ProfileNav">
                                    <ul className="ProfileNav-list">
                                        <Tweet tweet={this.props.tweet} onChange={this.onChange.bind(this)}/>
                                        <Followings followings={this.props.followings} onChange={this.onChange.bind(this)}/>
                                        <Followers followers={this.props.followers} onChange={this.onChange.bind(this)}/>
                                        <Follow/>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
