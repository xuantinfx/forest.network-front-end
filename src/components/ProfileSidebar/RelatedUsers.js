import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserSmallListItem from './UserSmallListItem';

class RelatedUsers extends Component {
  static propTypes = {

  }

  render() {
    return (
        <div className="RelatedUsers module">
            <div className="RelatedUsers-header">
                <h3 className="RelatedUsers-title">Bạn cũng có thể
                    thích</h3>
                ·
                <button className="btn-link js-refresh-related-users"
                    type="button">Tải lại</button>
            </div>

            <div className="RelatedUsers-users">
                {this.props.userSmallListItems.map((user,index)=>{
                    return <UserSmallListItem {...user} key={index}></UserSmallListItem>
                })}
                
            </div>
        </div>

    )
  }
}

export default RelatedUsers

RelatedUsers.propTypes = {
    userSmallListItems: PropTypes.array
}