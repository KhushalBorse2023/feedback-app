import React from 'react'
import propTypes from 'prop-types'
function Header({text,bgColor,textColor}) {
  const headerConst={
    backgroundColor:bgColor,
    color:textColor
  }
  return (
    <header style={headerConst}>
    <div className='container'>
    <h2>{text}</h2>
    </div>
    </header>
  )
}
Header.defaultProps={
  text:'Feedback UI',
  bgColor:'#155263',
  textColor:' #ffc93c',
}
Header.propTypes={
  text:propTypes.string,  bgColor:propTypes.string, textColor:propTypes.string,
}

export default Header
