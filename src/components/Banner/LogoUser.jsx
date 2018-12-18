import React, { Component, Fragment } from 'react';
import UploadImageModal from "../UploadImageModal";
// import PropTypes from 'prop-types'

export default class LogoUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modal: {
                isOpen: false
            }
        }
    }

    changeProfileAvatar = () => {
        alert('click');
    }

    toggleModal = () => {
        console.log('toggle')
        this.setState((prevState) => {
            const prevIsOpen = prevState.modal.isOpen;
            console.log(prevIsOpen);
            return { modal: { isOpen: !prevIsOpen } }
        });
    }

    render() {
        return (
            <Fragment>
                <div className="AppContainer">
                    <div className="ProfileCanopy-avatar" onClick={this.toggleModal}>
                        <div className="ProfileAvatar">
                            <div className="ProfileAvatar-container u-block js-tooltip profile-picture" >
                                <img className="ProfileAvatar-image " src={`data:image/jpeg;base64${btoa(this.props.imgBinaryData)}`} alt="YouTube" />
                            </div>
                        </div>
                    </div>
                </div>
                <UploadImageModal isOpen={this.state.modal.isOpen} toggle={this.toggleModal} />
            </Fragment>
        )
    }
}
