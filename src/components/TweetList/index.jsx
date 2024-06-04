import './TweetList.module.css';
import {data} from '../../data/data';
import { useState } from 'react';
import Tweet from '../Tweet';
import CreateTweetForm from '../CreateTweetForm';
import { v4 as uuidv4 } from 'uuid';


function TweetList(){
    const [tweets, setTweets] = useState(data);

const addTweet=(newTweet)=>{
const tweetDoc = {
    id: uuidv4(),
    content: newTweet,
    username: 'mariam',
    likes: 0,
    retweets: 0,
    timestamp: new Date()
}
setTweets([tweetDoc, ...tweets]);
}

const removeTweet = (tweetId) => {
    setTweets(tweets.filter(t => t.id !== tweetId));
  }

    return(

        <div>
            <h2>Tweet List</h2>

            <CreateTweetForm addTweet={addTweet}/>

            <section>
                {
                            tweets.map((item,index)=>(
                                <Tweet tweet={item} key={item.id} removeTweet={removeTweet}/>
            
                            ))
                }
            </section>
        </div>
    )
}

export default TweetList;