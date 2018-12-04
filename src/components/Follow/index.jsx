import React, { Component } from 'react'
import ProfileCardFollowing from './ProfileCardFollowing'
import ProfileCardFollower from './ProfileCardFollower'
import PropTypes from 'prop-types'

export default class index extends Component {
    static propTypes = {
        listFollow: PropTypes.array,
        isFollower: PropTypes.bool
    }

    render() {
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
                                            username={follow.username}
                                            key={index} />)
                                        :
                                    (<ProfileCardFollowing 
                                        urlCover={follow.urlCover}
                                        urlAvt={follow.urlAvt}
                                        isFollow={follow.isFollow}
                                        name={follow.name}
                                        username={follow.username}
                                        description={follow.bio}
                                        key={index} />))
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
    }
}
