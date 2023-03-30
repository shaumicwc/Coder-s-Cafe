import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './BlogCard.css'

const BlogCard = ({blog}) => {
    const {AuthorName, BlogTitle, Images, ReadTime, PublishDate} = blog;
    console.log(blog);
    return (
        <div className='blog-container card border-0'>
            <img src={Images.BlogCoverImage} alt="" className='blog-cover-image'/>
            <div className='d-flex justify-content-between my-3'>
                <div className='d-flex'>
                <img src={Images.AuthorImage} alt="" className='author-image'/>
                    <div className='ms-3'>
                    <p className='author-name'>{AuthorName}</p>
                    <p>{PublishDate}</p>
                    </div>
                </div>
                <div className='d-flex align-items-center'>
                    <p className='mt-2 mx-2'>{ReadTime}</p>
                    <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon>
                </div>
            </div>
            <p className='blog-title text-start'>{BlogTitle}</p>
            <p className='text-start'>#bigener <span className='ms-3'>#programming</span> </p>
            <p className='read-btn text-start'>Mark as read</p>
        </div>
    );
};

export default BlogCard;