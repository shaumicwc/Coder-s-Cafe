import React from 'react';
import './Bookmark.css'
const Bookmark = ({bm}) => {
    return (
        <div className='bookmark'>
            <p className='bookmark-text'>{bm}</p>
        </div>
    );
};

export default Bookmark;