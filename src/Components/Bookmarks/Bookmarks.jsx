import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {

    // console.log(bookmarks)
    return (
        <div className="md:w-1/3 bg-[#1111110D] p-6 rounded-2xl gap-4 flex flex-col">
            <div className='bg-[#6047EC1A] p-4 rounded-2xl text-[#6047EC] border-2 border-[#6047EC]'>
                <h3 className="text-2xl font-exo font-bold">Spent time on read: {readingTime}</h3>
            </div>
            <h2 className='font-exo font-bold text-2xl'>Bookmarked Blogs: {bookmarks.length}</h2>
            <hr className='border-2 border-blue-800' />
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;