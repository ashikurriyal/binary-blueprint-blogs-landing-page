import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {

    const [blogsDataLoad, setBlogsDataLoad] = useState([]);

    useEffect( () =>{
        fetch('data.JSON')
        .then(res => res.json())
        .then(data => setBlogsDataLoad(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h2>Blogs: {blogsDataLoad.length}</h2>
        </div>
    );
};

export default Blogs;