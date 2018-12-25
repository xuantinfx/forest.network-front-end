import React, { Component } from 'react';
import moment from 'moment';
import { Modal, ModalHeader, ModalBody, Row, Col, Input } from 'reactstrap';
import ImgFromArrayBuffer from '../ImgFromArrayBuffer';
import defaultName from '../../constants/defaultName'

export default class TweetDetail extends Component {
  constructor(props){
    super(props)
    this.state={
      isReactionHovering:false,
      //Đang hover lên react nào, like hay love hay...
      reactHoverIndex: -1,
    }
  }
  
  onClickReaction=()=>{
    this.props.reactTweet(this.props.tweet.hash, this.state.reactHoverIndex+1)
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
      this.props.reactTweet(this.props.tweet.hash, 0)
  }

  render() {
    console.log('detail',this.props)
    const tweet = this.props.tweet;
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.closeModal} className={this.props.className} size="lg">
        <ModalHeader toggle={this.props.closeModal}>Tweet</ModalHeader>
        <ModalBody>
          <div className="container-fluid">
            <Row className="align-items-center">
              <Col xs="1" className="pr-0">
                <ImgFromArrayBuffer className="avatar" alt="" arrayBufferData={tweet.picture} />
              </Col>
              <Col className="account-group">
                <Row>
                  <Col>
                    <strong className="fullname show-popup-with-id u-textTruncate ">{tweet.name || defaultName}</strong>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <span className="username u-dir u-textTruncate" dir="ltr" data-aria-label-part="">@<b>{tweet.name || defaultName}</b></span>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col xs="11">
                <p className="TweetTextSize TweetTextSize--jumbo js-tweet-text tweet-text" lang="en" data-aria-label-part="0">{tweet.content}</p>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col xs="11">
                {/* <img alt="" src={tweet.imgUrl} className="img-fluid" /> */}
              </Col>
              <Col xs="11">
                <span className="metadata">{moment(tweet.time).format("MMM Do YY")}</span>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col>
                <div className="stream-item-footer">
                  <div className="ProfileTweet-actionList js-actions" role="group" aria-label="Thao tác Tweet">
                    <div className="ProfileTweet-action ProfileTweet-action--reply">
                      <button className="ProfileTweet-actionButton js-actionButton js-actionReply" aria-describedby="profile-tweet-action-reply-count-aria-1064310108413460480" type="button" data-modal="ProfileTweet-reply">
                        <div title="Trả lời" className="IconContainer js-tooltip">
                          <span className="Icon Icon--medium Icon--reply" />
                          <span className="u-hiddenVisually">Trả lời</span>
                        </div>
                        <span className="ProfileTweet-actionCount">
                          <span className="ProfileTweet-actionCountForPresentation" aria-hidden="true">{tweet.totalReplies}</span>
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
                          <span className="ProfileTweet-actionCountForPresentation" aria-hidden="true">{tweet.totalRetweets}</span>
                        </span>
                      </button>
                    </div>
                    <div className="ProfileTweet-action ProfileTweet-action--favorite js-toggleState"
                  onMouseOver={this.onReactionHover}
                  onMouseLeave={this.onReactionMouseLeave}>
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
                          <span className="ProfileTweet-actionCountForPresentation" aria-hidden="true">
                            {tweet.likes?tweet.likes.length:tweet.totalLikes}
                          </span>
                        </span>
                      </button>
                    {
                      //<img src={this.images.like} style={{maxWidth: '2rem'}} alt="/"></img>
                      (this.state.isReactionHovering)?this.renderReactImg():(<div></div>)
                    }
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="mt-4 align-items-center">
              <Col xs="1" className="pr-0">
                <ImgFromArrayBuffer arrayBufferData={tweet.picture} alt="" className="avatar" />
              </Col>
              <Col xs="10">
                <Input type="text" name="reply" placeholder="Tweet your reply" />
              </Col>
            </Row>
            {tweet.loadedReplies.map((reply, index) => {
              return (
                <Row key={index} className="mt-3">
                  <Col xs="1" className="pr-0">
                    <ImgFromArrayBuffer arrayBufferData={reply.picture} alt="" className="avatar" />
                  </Col>
                  <Col xs="10">
                    <Row>
                      <Col className="d-flex account-group">
                        <strong className="fullname show-popup-with-id u-textTruncate ">{reply.name || defaultName}</strong>
                        <span className="username u-dir u-textTruncate" dir="ltr" data-aria-label-part="">@<b>{reply.username}</b></span>
                        <span>&nbsp;</span>
                        <small className="time">
                          <span className="_timestamp js-short-timestamp js-relative-timestamp">{moment(reply.time).startOf('hour').fromNow()}</span>
                        </small>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p className="TweetTextSize  js-tweet-text tweet-text" lang="en" data-aria-label-part="0">{reply.content}</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              )
            })}
          </div>
        </ModalBody>
      </Modal>
    )
  }
}
