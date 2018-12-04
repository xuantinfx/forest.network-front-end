import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ProfileEditBio extends Component {
  static propTypes = {

  }

  render() {
    return (
        <div className="ProfileHeaderCardEditing-bioRich ProfileHeaderCardEditing-item">
            <div className="RichEditor RichEditor--emojiPicker u-borderUserColorLight">
            
            <div className="RichEditor-mozillaCursorWorkaround">&nbsp;</div>
            <div className="RichEditor-container u-borderRadiusInherit">
                
                <div className="RichEditor-scrollContainer u-borderRadiusInherit">
                        <div name="user[description]" id="user_description" 
                        className="ProfileHeaderCardEditing-editableField rich-editor u-borderUserColorLight is-showPlaceholder"
                         contentEditable="true" spellCheck="true" aria-multiline="true" data-placeholder="Bio" role="textbox" 
                         tabIndex="2"></div>
            
                <div className="RichEditor-pictographs" aria-hidden="true"></div>
                </div>
                
                    <div className="RichEditor-rightItems RichEditor-bottomItems">
                    <div className="EmojiPicker dropdown is-loading">
                        <button type="button" className="EmojiPicker-trigger js-dropdown-toggle js-tooltip u-textUserColorHover" data-delay="150" data-original-title="Add emoji" tabIndex="-1">
                            <span className="Icon Icon--smiley"></span>
                            <span className="text u-hiddenVisually">
                            Add emoji
                            </span>
                        </button>
                        <div className="EmojiPicker-dropdownMenu dropdown-menu" tabIndex="-1">
                            <div className="EmojiPicker-content Caret Caret--stroked"></div>
                        </div>
                    </div>
            
                </div>
            
            </div>
            <div className="RichEditor-mozillaCursorWorkaround">&nbsp;</div>
            </div>
        </div>
    )
  }
}

export default ProfileEditBio
