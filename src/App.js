import React,{Component} from 'react'
import CardList from './CardList'
import {Kittens} from './Kittens'
import AddKitten from './AddKitten'
import Scroll from './Scroll'
 export class App extends Component{
    constructor(){
        super();
        this.state={
            inputs:{addName:'',email:''},
            Kittens:Kittens,
            
        }
    }
    componentDidMount(){
        this.setState({Kittens:Kittens});
    }
    handleOnClick=(event)=>{
        event.preventDefault();
        this.setState({inputs:event.target.value})
        const addName = this.state.inputs.addName;
        const email =this.state.inputs.email;
        const id=this.state.Kittens.length+1;
        this.state.Kittens.push({id,addName,email})
        console.log(Kittens)   
    }
    render(){
         
    return(
        <div className='tc'>
            <h1 className='fs-normal light-purple link dim black 
            mw5 dt hide-child ba b--black-20 pa4 br2 pointer ba bw4'>WeKittens</h1>
            <AddKitten handleOnClick={this.handleOnClick}/>
            <Scroll><CardList Kittens={this.state.Kittens}/> </Scroll>
            
        </div>
      );
    }
}  
export default App;