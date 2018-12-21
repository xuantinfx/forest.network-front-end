import LogoUser from '../components/Banner/LogoUser';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateProfilePicture } from '../actions/profileActions';
import { Keypair } from 'stellar-base';

const mapStateToProps = (state, ownProps) => {
  let canChangeProfilePicture = false;
  try {
    //check if user is logged in and is on his page
    let addressFromUrl = ownProps.match.params.address;
    let myAddress = Keypair.fromSecret(window.localStorage.getItem('SECRET_KEY')).publicKey();
    canChangeProfilePicture = state.user.isLogin && (myAddress === addressFromUrl);
  }
  catch (err) { console.error(err); }

  return {
    imgData: (state.profile.picture && state.profile.picture.data) || null,
    canChangeProfilePicture: canChangeProfilePicture
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateProfilePicture: (pictureBuffer) => {
      dispatch(updateProfilePicture(pictureBuffer))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LogoUser))