import React, { Component } from 'react'
import ProfileCardFollowing from './ProfileCardFollowing'
import ProfileCardFollower from './ProfileCardFollower'
import PropTypes from 'prop-types'

export default class index extends Component {
    static propTypes = {
        listFollow: PropTypes.array,
        isFollower: PropTypes.bool,
        loadFollow: PropTypes.func,
        isLoading: PropTypes.bool,
        follow: PropTypes.func,
        unFollow: PropTypes.func,
        listUserFollow: PropTypes.array,
        sequence: PropTypes.number,
        alreadyLogin: PropTypes.bool
    }

    componentDidMount() {
        this.props.loadFollow(this.props.address)
    }

    follow(address) {
        //(listFollowings, address, sequence)
        this.props.follow(this.props.listUserFollow, address, this.props.sequence);
    }

    unFollow(address) {
         //(listFollowings, address, sequence)
        this.props.unFollow(this.props.listUserFollow, address, this.props.sequence);
    }

    render() {
        if(this.props.isLoading) {
            return <div>Loading...</div>
        }
        return (
            <div className="Grid-cell u-size3of3 u-lg-size4of4">
                <div className="Grid Grid--withGutter">
                    <div className="Grid-cell" data-test-selector="ProfileTimeline">
                        <div className="ProfileHeadings">
                            <div className="ProfileHeading-spacers"></div>
                            <div className="ProfileHeading-content ProfileHeading-content--noFill">
                            </div>
                        </div>
                        <div className="GridTimeline-items has-items" role="list" data-max-position="" data-min-position="0">
                            <div className="Grid Grid--withGutter" data-component-context="user" role="presentation">
                                {this.props.listFollow && this.props.listFollow.map((follow, index) => {
                                    return (this.props.isFollower ? 
                                        (<ProfileCardFollower 
                                            urlCover={follow.urlCover}
                                            urlAvt={follow.urlAvt}
                                            isFollow={follow.isFollow}
                                            name={follow.name}
                                            address={follow.address}
                                            key={index}
                                            follow={this.follow.bind(this)}
                                            unFollow={this.unFollow.bind(this)}
                                            alreadyLogin={this.props.alreadyLogin}
                                             />)
                                        :
                                    (<ProfileCardFollowing 
                                        urlCover={follow.urlCover}
                                        urlAvt={follow.urlAvt}
                                        isFollow={follow.isFollow}
                                        name={follow.name}
                                        address={follow.address}
                                        description={follow.bio}
                                        key={index} 
                                        follow={this.follow.bind(this)}
                                        unFollow={this.unFollow.bind(this)}
                                        alreadyLogin={this.props.alreadyLogin}
                                        />))
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
    }
}
