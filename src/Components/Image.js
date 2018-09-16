import React from 'react';

const Image = (props) => (
    <img className='clickable' src={props.src} onClick={() => {props.clicked(props.id)}} />
)

export default Image;