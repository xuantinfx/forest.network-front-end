import React, { Component } from 'react'
import TimelineTweet from './TimelineTweet';
import TweetDetail from '../../containers/TweetDetail';
import PostTweet from '../../containers/PostTweet';
import { Keypair } from 'stellar-base';
import InfiniteScroll from 'react-infinite-scroller';
import * as encodeDecodeSecretKey from '../../utilities/encodeDecodeSecretKey';

export default class ProfileTimeline extends Component {

  //Danh sach cac reaction khi hover
  images = [
    {id: 'like', img: 'http://i.imgur.com/LwCYmcM.gif'},
    {id: 'love', img: 'http://i.imgur.com/k5jMsaH.gif'},
    {id: 'haha', img: 'http://i.imgur.com/f93vCxM.gif'},
    {id: 'wow', img: 'http://i.imgur.com/9xTkN93.gif'},
    {id: 'sad', img: 'http://i.imgur.com/tFOrN5d.gif'},
    {id: 'angry', img: 'http://i.imgur.com/1MgcQg0.gif'}
  ]

  //danh sach reaction da thuc hien
  reactionShown = [
    {id: 'like', img: 'https://i.imgur.com/wVAJS8T.png'},
    {id: 'love', img: 'https://i.imgur.com/y7qZQS3.png'},
    {id: 'haha', img: 'https://i.imgur.com/eq69HEz.png'},
    {id: 'wow', img: 'https://i.imgur.com/XQSbgpw.png'},
    {id: 'sad', img: 'https://i.imgur.com/JlQiyAu.png'},
    {id: 'angry', img: 'https://i.imgur.com/P4Xm6Ds.png'}
  ]

  componentDidMount() {
    let secretKey = encodeDecodeSecretKey.decode(sessionStorage.getItem('SECRET_KEY'));
    this.props.loadTweets(this.props.address, 1, this.props.size,
      secretKey ? Keypair.fromSecret(secretKey).publicKey()
      :undefined);
  }

  onClickName(address) {
    this.props.history.push(`/profile/${address}`)
  }

  loadMoreTweets = ()=>{
    let secretKey = encodeDecodeSecretKey.decode(sessionStorage.getItem('SECRET_KEY'));
    this.props.loadMoreTweets(this.props.address, this.props.page+1, this.props.size,
      secretKey ? Keypair.fromSecret(secretKey).publicKey()
      :undefined);
  }

  reloadTweets = ()=>{
    let secretKey = encodeDecodeSecretKey.decode(sessionStorage.getItem('SECRET_KEY'));
    this.props.loadTweets(this.props.address, 1, this.props.size,
      secretKey ? Keypair.fromSecret(secretKey).publicKey()
      :undefined);
  }

  render() {
    //console.log('reaction', this.props.tweets)
    if(this.props.isLoading) {
      return <div>Loading...</div>
    }

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
      <div className="Grid-cell u-lg-size3of3" data-test-selector="ProfileTimeline">
        <div className="ProfileHeading">
          <div className="ProfileHeading-spacer" />
          <div className="ProfileHeading-content">
            <h2 className="ProfileHeading-title u-hiddenVisually " id="content-main-heading">Tweet</h2>
            <ul className="ProfileHeading-toggle">
              <li className="ProfileHeading-toggleItem  is-active" data-element-term="tweets_toggle">
                <span aria-hidden="true">Tweet</span>
                <span className="u-hiddenVisually">Tweet, trang hiện tại.</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="ProfileTimeline" id="timeline">
          <div className="stream-container" data-min-position={1064977208970747908} data-max-position={1067919395173908480}>
            <div className="stream">
              <ol className="stream-items js-navigable-stream" id="stream-items-id">
                {canEditProfile && <PostTweet/>}

                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadMoreTweets}
                    hasMore={(this.props.total>(this.props.page*this.props.size))?true: false}
                    loader={<div className="loader" key={0}>Loading ...</div>}
                    threshold={300}
                >
                  {this.props.tweets.map((item, index) => {
                    return <TimelineTweet onClickName={this.onClickName.bind(this)} key={item._id} seeDetails={() => this.props.seeDetails(index)} {...item}
                      reactTweet={this.props.reactTweet} alreadyLogin={this.props.alreadyLogin}
                      images={this.images} reactionShown={this.reactionShown}/>
                  })}
                </InfiniteScroll>
              </ol>
            </div>
          </div>
        </div>
        {this.props.currentTweet && <TweetDetail isOpen={this.props.modalIsOpen} tweet={this.props.currentTweet} closeModal={this.props.closeModal} 
                    reactTweet={this.props.reactTweet} alreadyLogin={this.props.alreadyLogin}
                    images={this.images} reactionShown={this.reactionShown}
                    reaction={this.props.currentTweet.reaction||0}/>}
                    
        <button className="EdgeButton EdgeButton--primary EdgeButton--medium"
          style={{position:"fixed", bottom: 30,right:30}}
          onClick={this.reloadTweets}>
          <i className="fas fa-redo" style={{fontSize:'2rem', margin:'0.5rem'}}></i>
        </button>
      </div>
    )
  }
}
