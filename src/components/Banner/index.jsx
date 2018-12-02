import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ImgBanner from './ImgBanner'
import Infbanner from './Infbanner'

export default class Banner extends Component {
    static propTypes = {
        urlImg: PropTypes.string,
        tweet: PropTypes.string,
        followings: PropTypes.string,
        follower: PropTypes.string,
        likes: PropTypes.string,
        list: PropTypes.string,
        moment: PropTypes.string
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
                        follower={this.props.follower}
                        likes={this.props.likes}
                        list={this.props.list}
                        moment={this.props.moment}
                    />
                </div>
            </div>
        )
    }
}
