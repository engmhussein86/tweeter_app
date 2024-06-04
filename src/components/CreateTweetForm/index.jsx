import styles from './CreateTweetForm.module.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';


function CreateTweetForm({addTweet}){
const [content, setContent]= useState('');

    const handleSubmit =(e)=>{
        e.preventDefault();
        addTweet(e.target['content'].value);
        setContent('');
    }
    return(
        <form onSubmit={handleSubmit} className={styles.container}>
            <label htmlFor="content" >What is in your mind</label>
            <input type="text" name="content" id="content" value={content} onChange={(e)=>setContent(e.target.value)}/>

            <Button  type="submit" value="post">Post</Button>
        </form>
    );
}

export default CreateTweetForm;