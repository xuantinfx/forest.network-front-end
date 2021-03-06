import React, { Component } from 'react'
import ProfileHeaderCard from './ProfileHeaderCard';
import ProfileEdit from '../../containers/ProfileEdit';
import { Keypair } from 'stellar-base'
//import PhotoRail from './PhotoRail';
import * as encodeDecodeSecretKey from '../../utilities/encodeDecodeSecretKey';

class Profile extends Component {
    OnClickEdit = ()=>{
        this.props.editProfile();
    }

    render() {
        let canEditProfile = false;
        try {
            //check if user is logged in and is on his page
            let address = this.props.address;
            let secretKey = encodeDecodeSecretKey.decode(sessionStorage.getItem('SECRET_KEY'));;
            if(secretKey) {
                let myAddress = Keypair.fromSecret(secretKey).publicKey();
                canEditProfile = (myAddress === address);
            }
        }
        catch (err) { console.error(err); }

        return (
            <div className="Grid-cell u-size1of3 u-lg-size1of4">
                <div className="Grid Grid--withGutter">
                    <div className="Grid-cell">
                        <div className="ProfileSidebar ProfileSidebar--withLeftAlignment">
                            {
                                (!this.props.isEditting)?
                                (
                                    <div className='ProfileHeaderCard'>
                                        <ProfileHeaderCard 
                                            name={this.props.name}
                                            bio={this.props.bio} 
                                            location={this.props.location}
                                            joinDate={this.props.joinDate}
                                            balance={this.props.balance}
                                            bandwidth={this.props.bandwidth}
                                            bandwidthTime={this.props.bandwidthTime}
                                            address={this.props.address}
                                            sequence={this.props.sequence}
                                            >
                                        </ProfileHeaderCard>
                                        {canEditProfile && <button id="js-userColorButton" onClick={this.OnClickEdit}
                                        className="EdgeButton EdgeButton--secondary ProfileHeaderCardEditing-userColorButton js-current-color js-dropdown-toggle"
                                        data-color="#1DA1F2" tabIndex="2">
                                            Edit Profile
                                        </button>}
                                        {/* <PhotoRail withCountLink={this.props.withCountLink} withCountNum={this.props.withCountNum}
                                mediaBoxImg={this.props.mediaBoxImg}></PhotoRail>*/}
                                    </div>):
                                (
                                    <ProfileEdit></ProfileEdit>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile
