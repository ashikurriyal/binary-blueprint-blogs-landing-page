import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {

    console.log(bookmarks)
    return (
        <div className="md:w-1/3 bg-gray-100 p-6 rounded-2xl">
            
            <h2 className='font-exo font-bold text-2xl'>Bookmarked Blogs: {bookmarks.length}</h2>
            <hr className='border-2 border-blue-800' />
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}

export default Bookmarks;