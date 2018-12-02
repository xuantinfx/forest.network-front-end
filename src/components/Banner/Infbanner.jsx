import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CurrentTweet from './CurrentTweet'
import Followings from './Followings'
import Follower from './Follower'
import Likes from './Likes'
import List from './List'
import Moment from './Moment';
import Follow from './Follow';

export default class Infbanner extends Component {
    static propTypes = {
        tweet: PropTypes.string,
        followings: PropTypes.string,
        follower: PropTypes.string,
        likes: PropTypes.string,
        list: PropTypes.string,
        moment: PropTypes.string
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
                                        <CurrentTweet tweet={this.props.tweet}/>
                                        <Followings followings={this.props.followings}/>
                                        <Follower follower={this.props.follower}/>
                                        <Likes likes={this.props.likes}/>
                                        <List list={this.props.list}/>
                                        <Moment moment={this.props.moment}/>
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
