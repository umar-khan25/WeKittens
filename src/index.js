import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import './App.css';
import 'tachyons';
import App from './App'

ReactDOM.render(<App />,document.getElementById('root')
=======
import {Robot} from './Robot'

ReactDOM.render(<div>
  <Card id={Robot[0].id} myName={Robot[0].myName} email={Robot[0].email}/>
  <Card id={Robot[1].id} myName={Robot[1].myName} email={Robot[1].email}/>
  <Card id={Robot[2].id} myName={Robot[2].myName} email={Robot[2].email}/>
  <Card id={Robot[3].id} myName={Robot[3].myName} email={Robot[3].email}/>
  <Card id={Robot[4].id} myName={Robot[4].myName} email={Robot[4].email}/>
  <Card id={Robot[5].id} myName={Robot[5].myName} email={Robot[5].email}/>
</div>,document.getElementById('root')
>>>>>>> 9dea365b5265f436da9b4548e819e70935224f64
);



