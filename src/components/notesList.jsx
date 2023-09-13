import PropTypes from 'prop-types'
import Note from './note';

export default function NotesList(props) {
  const { item, onDelete } = props;

  return (
    <div className='notes-list-wrapper'>
      {item.map(obj => <Note { ...obj } key={ obj.id } onDelete={onDelete }/>)}
    </div>
  );
}

NotesList.propTypes = {
  onDelete: PropTypes.func,
  item: PropTypes.any,
}