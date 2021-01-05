import React from 'react'
import Card from './Card'
import GetReact from './AddKitten'
const CardList=({Kittens})=>{
return(
    <div>
        {
            Kittens.map((user,i)=>{
                return(
                  <Card
                    key={i}
                    id={Kittens[i].id}
                    myName={Kittens[i].myName}
                    email={Kittens[i].email}
                    />
                )
            })
        }
    </div>
)
}
export default CardList;