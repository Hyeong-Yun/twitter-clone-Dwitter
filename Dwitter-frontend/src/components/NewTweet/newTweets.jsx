import React, {useState} from 'react';
import './NewTweets.scss'

const NewTweets =  ({tweetService, onCreated}) => {
  const [tweet, setTweet] = useState('');

  const onSubmit = async(e) =>{
    e.preventDefault();
    tweetService
    .postTweet(tweet)
    .then(created => {
      setTweet('');
      console.log(created);
      onCreated(created);
    })
  }

  const onChange = ((e) =>{
    console.log(e.target.value)
    setTweet(e.target.value)
  })

  return (
    <form>
      <input 
        type="text" 
        placeholder='Edit your tweet'
        value = {tweet}
        required
        autoFocus
        onChange = {onChange}
      />
      <button type = "sbmit">
        Post
      </button>
    </form>
  );
};

export default NewTweets;