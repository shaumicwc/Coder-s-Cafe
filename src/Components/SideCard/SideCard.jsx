import React from 'react';
import './SideCard.css';

const SideCard = ({readTimes}) => {

    return (
        <div>
            <div className='spent-time-container'>
            <p className='spent-time'>Spent time on read: {readTimes} min</p>

            </div>
            <div className="bookmarked mt-3">
                <p className='bookmarked-text py-3'>Bookmarked Blogs: </p>
            </div>
        </div>
    );
};

export default SideCard;
