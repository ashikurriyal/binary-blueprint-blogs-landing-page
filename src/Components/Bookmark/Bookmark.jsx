import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const{title} = bookmark;
    // console.log(bookmark)
    return (
        <div>
            <h3 className='font-exo font-semibold text-lg bg-slate-900 p-4 m-3 rounded-2xl text-white'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes ={
    bookmark: PropTypes.object
}

export default Bookmark;