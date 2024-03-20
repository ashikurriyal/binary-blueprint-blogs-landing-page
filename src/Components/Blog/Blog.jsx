import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    const { title, cover, reading_time, author, author_img, posted_date, hashtags } = blog;
    return (
        <div className='space-y-3 flex flex-col mb-5'>

            {/* coverImage */}
            <img className='rounded-2xl' src={cover} alt="" />

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
    blog: PropTypes.object.isRequired
}

export default Blog;