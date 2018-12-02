import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export default class Follow extends Component {
    static propTypes = {
        
    }

    render() {
        return (
            <li className="ProfileNav-item ProfileNav-item--userActions u-floatRight u-textRight with-rightCaret ">
                <div className="UserActions u-textLeft">
                    <div className="user-actions btn-group not-following">
                        <span className="user-actions-follow-button js-follow-btn follow-button">
                            <button type="button" className="EdgeButton EdgeButton--secondary EdgeButton--medium button-text follow-text">
                                <span aria-hidden="true">Theo dõi</span>
                            </button>
                        </span>
                    </div>
                </div>
            </li>
        )
    }
}
