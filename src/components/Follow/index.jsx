import React, { Component } from 'react'
import ProfileCard from './ProfileCard'
import PropTypes from 'prop-types'


export default class index extends Component {
  static propTypes = {
    listFollower: PropTypes.array
  }

  render() {
    return (
        <div className="Grid-cell u-size2of3 u-lg-size3of4">
    <div className="Grid Grid--withGutter">
        <div className="Grid-cell" data-test-selector="ProfileTimeline">
            <div className="ProfileHeadings">
                <div className="ProfileHeading-spacers"></div>
                <div className="ProfileHeading-content ProfileHeading-content--noFill">
                </div>
            </div>
            <div className="GridTimeline-items has-items" role="list" data-max-position="" data-min-position="0">
                <div className="Grid Grid--withGutter" data-component-context="user" role="presentation">
                    {this.props.listFollower && this.props.listFollower.map((follower, index) => {
                        return <ProfileCard {...follower} key={index}/>
                    })}
                </div>
            </div>
        </div>
    </div>
</div>)
  }
}
