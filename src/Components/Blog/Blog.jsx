import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddBookMark }) => {
    const { title, cover, reading_time, author, author_img, posted_date, hashtags } = blog;
    return (
        <div className='space-y-5 flex flex-col mb-10'>

            {/* coverImage */}
            <img className='rounded-2xl' src={cover} alt={`cover picture of title ${title}`} />

            {/* author and name div */}
            <div className='flex justify-between items-center'>
                <div className='flex gap-6'>
                    <img className='w-16 rounded-full' src={author_img} alt="" />
                    <div className='flex flex-col items-start'>
                        <h4 className='font-exo font-bold text-black text-2xl'>{author}</h4>
                        <p>{posted_date}</p>
                    </div>
                </div>
                {/* mins read div */}
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() =>handleAddBookMark(blog)} className='ml-2 text-blue-700 text-2xl items-center'><FaBookmark></FaBookmark></button>
                </div>
            </div>

            {/* Title */}

            <div className="font-exo text-4xl font-bold text-left">{title}</div>

            {/* hashtags */}
            <div className='text-left flex gap-4'>
                {
                    hashtags.map((hash,idx) => <span key={idx} ><a  href="">#{hash}</a></span>)
                }
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookMark: PropTypes.func
}

export default Blog;