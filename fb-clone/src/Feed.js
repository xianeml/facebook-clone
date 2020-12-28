import React from 'react';
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';

const Feed = () => {
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />

      <Post
        profilePic='https://dispatch.cdnser.be/wp-content/uploads/2018/08/20180826214731_745ab6ce176fa4b59d1af29bc91fa409.png'
        message='wowwowow'
        timestamp='this is a timestamp'
        username='dog'
        image='https://pds.joins.com/news/component/htmlphoto_mmdata/201808/27/45fd8575-193f-4318-9511-de59dcf16679.jpg'
      />
      <Post
        profilePic='https://images.unsplash.com/photo-1531842477197-54acf89bff98?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1301&q=80'
        message='wowwowow'
        timestamp='this is a timestamp'
        username='doggg'
        image='https://images.unsplash.com/photo-1521673461164-de300ebcfb17?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80'
      />
      <Post
        profilePic='https://images.unsplash.com/photo-1570726666782-cd45b17c4d37?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        message='wowwowow'
        timestamp='this is a timestamp'
        username='doggg'
        image='https://images.unsplash.com/photo-1583705183126-8c365f6b835a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
      />
    </div>
  );
};

export default Feed;
