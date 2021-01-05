<<<<<<< HEAD
import React from 'react';
import CardList from './CardList'

const Card=(props)=>{
  return(
    <div className='bg-light-green dib br3 pa3 ma2 grow'>
      <img alt='robots' src={`https://robohash.org/${props.id}?set=set4`} />
      <div>
        {/* <h1>US As Kittens</h1> */}

        <h2>{props.myName}</h2>
        <p>{props.email}</p>
      </div>
    </div>
  )
}
=======
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
>>>>>>> 9dea365b5265f436da9b4548e819e70935224f64
export default Card;