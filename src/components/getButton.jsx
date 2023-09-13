import PropTypes from 'prop-types'

export default function GetButton(props) {
  const { onGet } = props;

  return (
    <div className='button-wrapper'>
      <span className='notes-header'>Notes</span>
      <button className='refresh-button' onClick={onGet}>&#8635;</button>
    </div>
  );
}

GetButton.propTypes = {
  onGet: PropTypes.func,
}