import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ProfileEditLocation extends Component {
  static propTypes = {

  }

  render() {
    return (
        <div className="ProfileHeaderCardEditing-location ProfileHeaderCardEditing-bioRich ProfileHeaderCardEditing-item dropdown">
            <span className="visuallyhidden" id="user_location_label">Location</span>
            <div className="RichEditor RichEditor--emojiPicker u-borderUserColorLight ProfileHeaderCardEditing-GeoLocationFieldInput">
        
                <div className="RichEditor-mozillaCursorWorkaround">&nbsp;
                </div>
                <div className="RichEditor-container u-borderRadiusInherit">
          
                    <div className="RichEditor-scrollContainer u-borderRadiusInherit">
                        {/* <div id="user_location" name="user[location]" aria-multiline="true" aria-labelledby="user_location_label" 
                        className="ProfileHeaderCardEditing-editableField rich-editor u-borderUserColorLight GeoSearch-queryInput js-geo-search-trigger js-dropdown-prevent-close is-showPlaceholder" 
                        data-placeholder="Location" maxLength="30" autoComplete="off" role="textbox" tabIndex="2" data-initial-location="" 
                        contentEditable="true" dir="ltr" aria-owns="profile-geo-dropdown" aria-autocomplete="list">
                        
                        </div> */}
                            
                        <input type="text" id="location" name="location"
                            className="ProfileHeaderCardEditing-editableField u-borderUserColorLight"
                            defaultValue="Location" placeholder="Location" maxLength="200" autoComplete="off" tabIndex="2"/>
                        <div className="RichEditor-pictographs" aria-hidden="true">
                        </div>
                    </div>
          
                    <div id="profile-geo-dropdown" className="GeoSearch-dropdownMenu dropdown-menu" role="listbox">
                        <div className="dropdown-caret" aria-hidden="true">
                            <span className="caret-outer"></span>
                            <span className="caret-inner"></span>
                        </div>
                        <ul role="presentation">
                            <li className="GeoSearch-searchStatus" role="presentation" style={{display: "none"}}></li>
                        </ul>
                        <ul className="GeoSearch-resultsContainer" role="presentation"></ul>
                    </div>
                    <input className="ProfileHeaderCardEditing-locationPlaceId GeoSearch-placeId" 
                    type="hidden" name="user[location_place_id]" defaultValue=""/>
        
                </div>
                <div className="RichEditor-mozillaCursorWorkaround">&nbsp;</div>
            </div>
        <div style={{position: "absolute", visibility: "hidden"}}>
            <div><br/></div>
        </div>
        <div style={{position: "absolute", visibility: "hidden"}}>
            <div><br/></div>
        </div>
      </div>
    )
  }
}

export default ProfileEditLocation
