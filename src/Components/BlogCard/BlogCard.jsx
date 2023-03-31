import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './BlogCard.css'

const BlogCard = ({blog, handleReadTime, handleBookmark}) => {
    const {AuthorName, BlogTitle, Images, ReadTime, PublishDate} = blog;
    return (
        <div className='blog-container card border-0'>
            <img src={Images.BlogCoverImage} alt="" className='blog-cover-image'/>
            <div className='d-flex justify-content-between my-3'>
                <div className='d-flex'>
                <img src={Images.AuthorImage} alt="" className='author-image'/>
                    <div className='ms-3'>
                    <p className='author-name'>{AuthorName}</p>
                    <p className='publish-date'>{PublishDate}</p>
                    </div>
                </div>
                <div className='d-flex align-items-center'>
                    <p className=' read-time mt-3 mx-2'>{ReadTime} min read</p>
                    <FontAwesomeIcon onClick={() => handleBookmark(BlogTitle)} icon={faBookmark}></FontAwesomeIcon>
                </div>
            </div>
            <p className='blog-title text-start'>{BlogTitle}</p>
            <p className='text-start'>#bigener <span className='ms-3'>#programming</span> </p>
            <button onClick={() => handleReadTime(ReadTime)} className='read-btn'>Mark as read</button>
        </div>
    );
};

export default BlogCard;