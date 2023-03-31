import React, { useEffect, useState } from 'react';
import BlogCard from '../BlogCard/BlogCard';
import SideCard from '../SideCard/SideCard';
import './Blogs.css'


const Blogs = ({ handleReadTime, readTimes }) => {
    const [blogs, setBlog] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])
    return (
        <div className='blog-container row'>
            <div className='blog-card-container col-md-8'>
                {
                    blogs.map(blog => <BlogCard
                        blog={blog}
                        key={blog.id}
                        handleReadTime={handleReadTime}
                    ></BlogCard>)
                }
            </div>
            <div className='bookmark-cart col-md-4 card border-0'>
             
                <SideCard
                   readTimes={readTimes}
                   handleReadTime={handleReadTime}
                ></SideCard>
            </div>
        </div>
    );
};

export default Blogs;

