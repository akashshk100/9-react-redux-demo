import './App.css';
import React, { Component } from 'react';
import Display from './components/Display/Display'
import DecrementButton from './container/DecrementButton/DecrementButton';
import IncrementButton from './container/IncrementButton/IncrementButton';
import AddButton from './container/Add/Add';
import SubstractButton from './container/Substract/Substract';


class App extends Component{
	render(){
		return(
			<div style={{width: '70%', margin: 'auto'}}>
				<Display />
				<div style={{display: "flex", flexDirection: 'row', justifyContent: 'center'}}>
					<div style={{margin: '0px 10px'}} >
						<DecrementButton />
					</div>
					<div style={{margin: '0px 10px'}} >
						<IncrementButton />
					</div>
					<div style={{margin: '0px 10px'}} >
						<AddButton />
					</div>
					<div style={{margin: '0px 10px'}} >
						<SubstractButton />
					</div>
				</div>
			</div>
		)
	}
}

export default App;
