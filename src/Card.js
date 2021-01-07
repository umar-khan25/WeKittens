<<<<<<< HEAD
import React from 'react';
import CardList from './CardList'
import React from 'react';
const Card=(props)=>{
  return(
    <div className='bg-light-green dib br3 pa3 ma2 grow'>
      <img alt='robots' src={`https://robohash.org/${props.id}?set=set4`} />
      <div>
        <h2>{props.myName}</h2>
        <p>{props.email}</p>
      </div>
    </div>
  )
}
export default Card;
