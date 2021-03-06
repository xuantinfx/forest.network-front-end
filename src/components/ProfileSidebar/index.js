import React, { Component } from 'react'
import SignUpCallOut from './SignUpCallOut';
import RelatedUsers from './RelatedUsers';
import Trends from './Trends';
import Footer from './Footer';

class ProfileSidebar extends Component {
  render() {
    return (
    <div className="Grid-cell u-size1of3">
        <div className="Grid Grid--withGutter">
            <div className="Grid-cell">
                <div className="ProfileSidebar ProfileSidebar--withRightAlignment">
                    <div className="MoveableModule">
                        <div className="SidebarCommonModules">
                            <SignUpCallOut></SignUpCallOut>

                            <RelatedUsers userSmallListItems={this.props.userSmallListItems}></RelatedUsers>

                            <Trends trends={this.props.trends}></Trends>

                            <Footer></Footer>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default ProfileSidebar
