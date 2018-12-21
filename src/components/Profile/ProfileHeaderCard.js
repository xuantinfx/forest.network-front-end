import React, { Component } from 'react'
import PropTypes from 'prop-types'
import defaultName from '../../constants/defaultName'

class ProfileHeaderCard extends Component {
  render() {
    return (
        <div className="ProfileHeaderCard">
            <h1 className="ProfileHeaderCard-name">
                <span className="ProfileHeaderCard-nameLink u-textInheritColor js-nav">
                    {this.props.name || defaultName}
                </span>
                <span
                    className="ProfileHeaderCard-badges"><a href="#/" onClick={e => e.preventDefault()}
                    className="js-tooltip" target="_blank" rel="noopener noreferrer" title="Tài khoản được xác nhận"
                    data-placement="right"><span className="Icon Icon--verified"><span
                    className="u-hiddenVisually">Tài khoản được xác nhận</span></span></a>
                </span>
            </h1>
            <h2 className="ProfileHeaderCard-screenname u-inlineBlock u-dir" >
                <a className="ProfileHeaderCard-screennameLink u-linkComplex js-nav"
                    href="#/" onClick={e => e.preventDefault()}>
                        <span className="username u-dir" >@<b className="u-linkComplex-target">
                            {this.props.name || defaultName}
                        </b></span>
                </a>
            </h2>

            <p className="ProfileHeaderCard-bio u-dir" >
                {this.props.bio}
                {/* <a href="https://twitter.com/hashtag/SaveYourInternet?src=hash"
                data-query-source="hashtag_click" className="twitter-hashtag pretty-link js-nav">
                <s>#</s><b>
                    {this.props.hashtag}    
                </b></a> */}</p>
            
            
            {this.props.location?
                (
                <div className="ProfileHeaderCard-location ">
                    <span className="Icon Icon--geo Icon--medium" aria-hidden="true" role="presentation"></span>
                    <span className="ProfileHeaderCard-locationText u-dir" >
                        {this.props.location}
                    </span>
                </div>
                ):
                (
                <div className="ProfileHeaderCard-location ">
                </div>
                )
            }
            
            {/* <div className="ProfileHeaderCard-url ">
                <span className="Icon Icon--url Icon--medium" aria-hidden="true" role="presentation"></span>
                <span className="ProfileHeaderCard-urlText u-dir"> <a className="u-textUserColor"
                        target="_blank" rel="me nofollow noopener noreferrer" href="https://t.co/DyF7tJFG4h"
                        title={this.props.url}>
                        {this.props.url.substring(8,36)+'....'}
                    </a>
                </span>
            </div> */}

            {this.props.joinDate?
                (
                    <div className="ProfileHeaderCard-joinDate">
                        <span className="Icon Icon--calendar Icon--medium" aria-hidden="true"
                            role="presentation"></span>
                        <span className="ProfileHeaderCard-joinDateText js-tooltip u-dir" 
                            title={new Date(this.props.joinDate).toLocaleString()}>Đã tham gia tháng {new Date(this.props.joinDate).getMonth()} năm {new Date(this.props.joinDate).getFullYear()}</span>
                    </div>
                ):
                (
                    <div className="ProfileHeaderCard-joinDate">
                    </div>
                )
            }
            

            {/* <div className="ProfileHeaderCard-birthdate u-hidden">
                <span className="Icon Icon--balloon Icon--medium" aria-hidden="true"
                    role="presentation"></span>
                <span className="ProfileHeaderCard-birthdateText u-dir" >
                </span>
            </div> */}
        </div>
    )
  }
}

export default ProfileHeaderCard

ProfileHeaderCard.propTypes = {
    name: PropTypes.string,
    bio: PropTypes.string,
    location: PropTypes.string,
    joinDate: PropTypes.number
}