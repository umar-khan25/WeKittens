import React from 'react';
    const AddKitten=({handleOnClick,myName,email})=>{
     return(
        <div className='pa2'>
        
            <input className='fa3 pa2 ba b--green' placeholder="Name" value={myName} />
            <input className='fa3 ba pa2 b--green' placeholder="Emial" value={email}  />
            <button onClick={handleOnClick} className='f6 link dim ph3 pv2 mb2 dib white bg-purple'>Submit</button>
        
        </div>  
    )
}
export default AddKitten;