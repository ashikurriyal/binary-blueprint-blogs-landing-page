import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {

    const [blogsDataLoad, setBlogsDataLoad] = useState([]);

    useEffect(() => {
        fetch('data.JSON')
            .then(res => res.json())
            .then(data => setBlogsDataLoad(data))
    }, [])
    return (
        <div className="md:w-2/3">
            <h2>Blogs: {blogsDataLoad.length}</h2>
            {
                blogsDataLoad.map(blog => <Blog
                    key={blogsDataLoad.id}
                    blog={blog}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;