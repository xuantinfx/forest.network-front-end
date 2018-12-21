import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash';

export default class Follow extends Component {
    static propTypes = {
        listFollowings: PropTypes.array,
        follow: PropTypes.func,
        unFollow: PropTypes.func,
        address: PropTypes.string
    }

    isFollow() {
        return _.findIndex(this.props.listFollowings, follow => follow === this.props.address) >= 0;
    }

    onClickBtn() {
        let isFollow = this.isFollow();
        if (isFollow) {
            //(listFollowings, address)
            this.props.unFollow(this.props.listFollowings, this.props.address);
        } else {
            //(listFollowings, address)
            this.props.follow(this.props.listFollowings, this.props.address);
        }
    }

    render() {
        let isFollow = this.isFollow();
        return (
            <li className="ProfileNav-item ProfileNav-item--userActions u-floatRight u-textRight with-rightCaret ">
                <div className="UserActions u-textLeft">
                    <div className="user-actions btn-group not-following">
                        <span className="user-actions-follow-button js-follow-btn follow-button">
                            <button type="button" className="EdgeButton EdgeButton--secondary EdgeButton--medium button-text follow-text"
                                onClick={this.onClickBtn.bind(this)}
                                >
                                <span aria-hidden="true">{isFollow ? "Ngừng theo dõi" : "Theo dõi"}</span>
                            </button>
                        </span>
                    </div>
                </div>
            </li>
        )
    }
}
