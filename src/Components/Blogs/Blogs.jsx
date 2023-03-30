import React, { useEffect, useState } from 'react';
import BlogCard from '../BlogCard/BlogCard';
import './Blogs.css'

const Blogs = () => {
    const [blogs, setBlog] = useState([]);

    useEffect(() =>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data => setBlog(data))
    },[])
    return (
        <div className='blog-container row'>
            <div className='blog-card-container col-md-8'>
                {
                    blogs.map(blog => <BlogCard
                    blog={blog}
                    key={blog.id}
                    ></BlogCard>)
                }
            </div>
            <div className='bookmark-cart col-md-4 card border-0'>

            </div>
        </div>
    );
};

export default Blogs;

