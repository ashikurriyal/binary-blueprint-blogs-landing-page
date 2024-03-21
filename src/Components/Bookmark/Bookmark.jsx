import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const{title} = bookmark;
    // console.log(bookmark)
    return (
        <div className=''>
            <h3 className='font-exo font-semibold text-lg bg-white p-2 text-left rounded-2xl text-black '>{title}</h3>
        </div>
    );
};

Bookmark.propTypes ={
    bookmark: PropTypes.object
}

export default Bookmark;