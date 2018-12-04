import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ImgBanner from './ImgBanner'
import Infbanner from './Infbanner'

export default class Banner extends Component {
    static propTypes = {
        urlImg: PropTypes.string,
        tweet: PropTypes.number,
        followings: PropTypes.number,
        followers: PropTypes.number,
    }

    render() {
        console.log('remder')
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
                    />
                </div>
            </div>
        )
    }
}
