import Card from "./shared/Card";
import PropTypes from 'prop-types'
import{FaTimes} from 'react-icons/fa'
function FeedbackItems({item,handleDelete}) {


  return (
    <Card reverse={true}>
    <div className='num-display'>{item.rating}</div>
    <button onClick={()=>handleDelete(item.id)}  className="close"><FaTimes color="purple"/></button>
      <div className="Text-display">{item.text}</div>
      </Card>  )
}
FeedbackItems.propTypes={
  item:PropTypes.object.isRequired,
}

export default FeedbackItems







