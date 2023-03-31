import React, { useEffect, useState } from 'react';
import Bookmark from '../Bookmark/Bookmark';
import './SideCard.css';

const SideCard = ({readTimes, bookmarks}) => {      

  return (
    <div>
      <div className='spent-time-container'>
        <p className='spent-time'>Spent time on read: {readTimes} min</p>
      </div>
      <div className="bookmarked mt-3 py-2">
        <p className='bookmarked-text py-3'>Bookmarked blogs: {bookmarks.length}</p>
        {
            bookmarks.map(bm => <Bookmark bm={bm}></Bookmark>)
        }
      </div>
    </div>
  );
};

export default SideCard;

