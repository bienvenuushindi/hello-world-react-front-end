import PropTypes from 'prop-types';

const Greeting = (props) => {
  const { message } = props;
  return (
    <>
      <h1>Get a random greeting </h1>
      <h3>
        {message || 'Fetching ...'}
      </h3>
    </>
  );
};
Greeting.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Greeting;
