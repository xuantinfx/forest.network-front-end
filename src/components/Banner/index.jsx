import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ImgBanner from './ImgBanner'
import Infbanner from './Infbanner'

export default class Banner extends Component {
    static propTypes = {
        tweet: PropTypes.number,
        followings: PropTypes.number,
        followers: PropTypes.number,
        alreadyLogin: PropTypes.bool,
        listFollowings: PropTypes.array,
        follow: PropTypes.func,
        unFollow: PropTypes.func,
        address: PropTypes.string
    }

    render() {
        return (
            <div className="ProfileCanopy ProfileCanopy--withNav ProfileCanopy--large js-variableHeightTopBar">
                <div className="ProfileCanopy-inner">
                    <ImgBanner 
                        urlImg={this.props.urlImg}
                    />
                    <Infbanner 
                        tweet={this.props.tweet}
                        followings={this.props.followings}
                        followers={this.props.followers}
                        alreadyLogin={this.props.alreadyLogin}
                        listFollowings={this.props.listFollowings}
                        follow={this.props.follow}
                        unFollow={this.props.unFollow}
                        address={this.props.address}
                    />
                </div>
            </div>
        )
    }
}
