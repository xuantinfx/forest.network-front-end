import LogoUser from '../components/Banner/LogoUser';
import { connect } from 'react-redux';
import { updateProfilePicture } from '../actions/profileActions';
const mapStateToProps = (state) => {
  let imgBase64Data = state.profile.picture && Buffer.from(state.profile.picture.data).toString('base64');
  imgBase64Data = imgBase64Data || ''
  return {
    imgBase64Data: imgBase64Data
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateProfilePicture: (pictureBuffer) => {
    dispatch(updateProfilePicture(pictureBuffer))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(LogoUser)