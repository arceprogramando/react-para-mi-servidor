import PropTypes from 'prop-types';

const FrontPage = ({ front }) => {
  const { thumbnail, title } = front;

  return <img src={thumbnail} alt={title} />;
};

FrontPage.propTypes = {
  front: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default FrontPage;
