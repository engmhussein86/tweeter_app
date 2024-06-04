import styles from "./Tweet.module.css";
import PropTypes from "prop-types";
import {FaHeart} from "react-icons/fa";
import {LiaRetweetSolid} from "react-icons/lia";
import Button from 'react-bootstrap/Button';

function Tweet({tweet, removeTweet}) {
  return (
    <div className={styles.container}>
      <div>{tweet.username}</div>
      <div>{tweet.content}</div>
      <div>
      <div><FaHeart/> {tweet.likes}</div>
      <div><LiaRetweetSolid size={22}/>{tweet.retweets}</div>
      </div>
      <div>
        <Button variant="primary" onClick={() => removeTweet(tweet.id)}>delete</Button>
      </div>
    </div>
  );
}

Tweet.propTypes = {
    tweet: PropTypes.object,
  };

export default Tweet;