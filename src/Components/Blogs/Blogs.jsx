import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddBookMark, handleMarkAsRead}) => {

    const [blogsDataLoad, setBlogsDataLoad] = useState([]);

    useEffect(() => {
        fetch('data.JSON')
            .then(res => res.json())
            .then(data => setBlogsDataLoad(data))
    }, [])
    return (
        <div className="md:w-2/3">
            {/* <h2>Blogs: {blogsDataLoad.length}</h2> */}
            {
                blogsDataLoad.map(blog => <Blog
                    key={blogsDataLoad.id}
                    blog={blog}
                    handleAddBookMark={handleAddBookMark}
                    handleMarkAsRead={handleMarkAsRead}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddBookMark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blogs;