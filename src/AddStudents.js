import React, {Component} from 'react';

class AddStudents extends Component {
	state = {
		name: '',
		age: '',
		course: '',
			// school: ''
		school: ''
	}

	update = e => {
		this.setState({
			[e.target.id]: e.target.value

		})
	}

	handleForm = e => {
		e.preventDefault();
		this.props.addStudent(this.state);
		this.setState({
			name: '',
			age: '',
			course: '',
			// school: ''
			school: ''
		})
	}


	render(){
		return(
			<>
				{/* <span>{this.state.name} _ {this.state.age} years _ {this.state.course} _ {this.state.school}</span> */}
				<form onSubmit={this.handleForm} autoComplete="off">
					<input type="text" id="name" onChange={this.update} placeholder="name" value={this.state.name}/>
					<input type="text" id="age" onChange={this.update} placeholder="age" value={this.state.age}/>
					<input type="text" id="course" onChange={this.update} placeholder="course" value={this.state.course}/>
					<input type="text" id="school" onChange={this.update} placeholder="school" value={this.state.school}/>
					<button>Submit</button>
				</form>
			</>
		)
	}
}


export default AddStudents;