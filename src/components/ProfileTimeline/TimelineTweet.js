import React, { Component } from 'react';
import moment from 'moment';
import ImgFromArrayBuffer from '../ImgFromArrayBuffer';
import defaultName from '../../constants/defaultName'

export default class TimelineTweet extends Component {
  constructor(props){
    super(props)
    this.state={
      isReactionHovering:false,
      //Đang hover lên react nào, like hay love hay...
      reactHoverIndex: -1,
    }
  }

  onClickName(e) {
    e.preventDefault();
    this.props.onClickName(this.props.address);
  }

  onClickReaction=()=>{
    this.props.reactTweet(this.props.hash, this.state.reactHoverIndex+1)
  }

  renderReactImg = ()=>{
    let reactImg = this.props.images.map((image,index)=>{
      let imageRet = <img src={image.img} alt={image.id} key={index}
        style={{maxWidth: (index === this.state.reactHoverIndex)?'1.8rem':'1.3rem', margin:'0 3px'}}
        onMouseEnter={()=>{this.setState({reactHoverIndex: index})}}
        onMouseLeave={()=>{this.setState({reactHoverIndex: -1})}}
        onClick={this.onClickReaction}></img>
      return imageRet
    })

    return <div className='EdgeButton js-current-color js-dropdown-toggle'
          style={{display:'inline'}}>
            {reactImg} 
          </div>
  }

  onReactionHover = ()=>{
    this.setState({
      isReactionHovering: true
    })
  }

  onReactionMouseLeave = ()=>{
    this.setState({
      isReactionHovering: false
    })
  }

  onClickUnReaction = ()=>{
    if(this.props.reaction !== 0)
      this.props.reactTweet(this.props.hash, 0)
  }

  render() {
    //console.log('tweet', this.props)
    return (
      <li className="js-stream-item stream-item stream-item js-pinned" id="stream-item-tweet-1064310108413460480" >
        <div className="tweet js-stream-tweet js-actionable-tweet js-profile-popup-actionable dismissible-content original-tweet js-original-tweet tweet-has-context has-cards  user-pinned has-content" >
          <div className="content">
            <div className="stream-item-header">
              <a className="account-group js-account-group js-action-profile js-user-profile-link js-nav" href="#/" onClick={this.onClickName.bind(this)} data-user-id={10228272}>
                <ImgFromArrayBuffer className="avatar js-action-profile-avatar" alt={""}
                 arrayBufferData={this.props.picture?this.props.picture.data:undefined} />
                <span className="FullNameGroup">
                  <strong className="fullname show-popup-with-id u-textTruncate" data-aria-label-part>{this.props.name || defaultName}</strong>
                  <span></span>
                  <span className="UserBadges">
                    <span className="Icon Icon--verified">
                      <span className="u-hiddenVisually">Tài khoản được xác nhận</span>
                    </span>
                  </span>
                  <span className="UserNameBreak">&nbsp;</span>
                </span>
                <span className="username u-dir u-textTruncate" data-aria-label-part>@<b>{this.props.name || defaultName}</b></span>
              </a>
              <small className="time">
                <a title={moment(this.props.time).format('MMMM Do YYYY, h:mm:ss a')} 
                  className="tweet-timestamp js-permalink js-nav js-tooltip" 
                  href={this.props.tweetUrl} >
                  <span className="_timestamp js-short-timestamp " data-aria-label-part="last" data-long-form="true">{moment(this.props.time).format('MMM Do YY')}
                  </span>
                </a>
              </small>
            </div>
            <div onClick={this.props.seeDetails} className="js-tweet-text-container">
              <pre className="TweetTextSize TweetTextSize--normal js-tweet-text tweet-text" lang="en" data-aria-label-part={0}>{this.props.content}</pre>
            </div>
            <div onClick={this.props.seeDetails} className="AdaptiveMediaOuterContainer">
              <div className="AdaptiveMedia">
                <div className="AdaptiveMedia-container">
                  {/* <img alt="" src={""} style={{ height: 'auto', maxWidth: '100%' }} /> */}
                </div>
              </div>
            </div>
            <div className="stream-item-footer">
              <div className="ProfileTweet-actionList js-actions" role="group" aria-label="Thao tác Tweet">
                <div className="ProfileTweet-action ProfileTweet-action--reply">
                  <button className="ProfileTweet-actionButton js-actionButton js-actionReply" aria-describedby="profile-tweet-action-reply-count-aria-1064310108413460480" type="button" data-modal="ProfileTweet-reply">
                    <div title="Trả lời" className="IconContainer js-tooltip">
                      <span className="Icon Icon--medium Icon--reply" />
                      <span className="u-hiddenVisually">Trả lời</span>
                    </div>
                    <span className="ProfileTweet-actionCount">
                      <span className="ProfileTweet-actionCountForPresentation" aria-hidden="true">{this.props.totalReplies}</span>
                    </span>
                  </button>
                </div>
                <div className="ProfileTweet-action ProfileTweet-action--retweet js-toggleState js-toggleRt">
                  <button className="ProfileTweet-actionButton  js-actionButton js-actionRetweet" aria-describedby="profile-tweet-action-retweet-count-aria-1064310108413460480" type="button" data-modal="ProfileTweet-retweet">
                    <div title="Tweet lại" className="IconContainer js-tooltip">
                      <span className="Icon Icon--medium Icon--retweet" />
                      <span className="u-hiddenVisually">Tweet lại</span>
                    </div>
                    <span className="ProfileTweet-actionCount">
                      <span className="ProfileTweet-actionCountForPresentation" aria-hidden="true">{this.props.totalRetweets}</span>
                    </span>
                  </button>
                </div>
                <div className="ProfileTweet-action ProfileTweet-action--favorite js-toggleState"
                  onMouseOver={this.onReactionHover}
                  onMouseLeave={this.onReactionMouseLeave}>
                  <div >
                  <button className="ProfileTweet-actionButton js-actionButton js-actionFavorite" aria-describedby="profile-tweet-action-favorite-count-aria-1064310108413460480"
                   type="button" onClick={this.onClickUnReaction}>
                    <div title="Thích" className="IconContainer js-tooltip">
                    {
                      (!this.props.reaction)?(
                        <span className="Icon Icon--heart Icon--medium" role="presentation" />
                      ):
                      (
                        (this.props.reaction === 0 || !this.props.alreadyLogin)?
                        <span className="Icon Icon--heart Icon--medium" role="presentation" />
                          :
                          <img src={this.props.reactionShown[this.props.reaction-1].img} alt={this.props.reactionShown[this.props.reaction-1].id}
                          style={{maxWidth: '1.3rem', margin:'0 3px'}}></img>
                      )
                    }
                      <div className="HeartAnimation" />
                      <span className="u-hiddenVisually">Thích</span>
                    </div>
                    <span className="ProfileTweet-actionCount">
                      <span className="ProfileTweet-actionCountForPresentation" aria-hidden="true">{this.props.likes?this.props.likes.length:this.props.totalLikes}</span>
                    </span>
                  </button>
                    {
                      //<img src={this.images.like} style={{maxWidth: '2rem'}} alt="/"></img>
                      (this.state.isReactionHovering)?this.renderReactImg():(<div></div>)
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    )
  }
}
