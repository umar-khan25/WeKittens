import React,{Component} from 'react'
import CardList from './CardList'
import {Kittens} from './Kittens'
import AddKitten from './AddKitten'
import Scroll from './Scroll'
 export class App extends Component{
    constructor(props){
        super(props);
        this.state={
            myName:'',
            email:'',
            Kittens:Kittens   
        }
    }
    componentDidMount(){
        this.setState({Kittens:Kittens});
    }
    handleName=(event)=>{
        this.setState({myName:event.target.value})  
    }
    handleEmail=(event)=>{
        this.setState({email:event.target.value})
    }
    handleOnClick=(event)=>{
        // event.preventDefault();
        const myName = this.state.myName;
        const email =this.state.email;
        const id=this.state.Kittens.length+1;
        let newKittens =this.state.Kittens.concat({id,myName,email})
        this.setState({Kittens:newKittens});
        console.log(Kittens)   
    }
    render(){    
    return(
        <div className='tc'>
             <a className='dt fs-normal light-purple fw9' href='https://nifty-snyder-9e51e0.netlify.app/'>About_Me</a>
            <h1 className='fs-normal light-purple link dim black 
            mw5 dt hide-child ba b--black-20 pa4 br2 pointer ba bw4'>WeKittens</h1>
            <div  className='pa'>
            <input className='fa3 pa2 ba b--green' placeholder="Name" onChange={this.handleName}/>
            <input className='fa3 ba pa2 b--green' placeholder="Emial" onChange={this.handleEmail}/>
            <button onClick={this.handleOnClick} className='f6 link dim ph3 pv2 mb2 dib white bg-purple'>Submit</button></div>
            {/* <AddKitten OnClick={this.handleOnClick}/> */}
            <Scroll><CardList Kittens={this.state.Kittens}/> </Scroll>
            
        </div>
      );
    }
}  
export default App;
