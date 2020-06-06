import React, {Component} from 'react';
import ShowStudents from './ShowStudents';
import AddStudents from './AddStudents'

class App extends Component {
	state = {
		students: [
			{name: 'Captain Marvel', id: 1, age: 21, course: 'Atomic Engineering', school: 'Havard University'},
			{name: 'Tony Stark', id: 2, age: 20, course: 'Computer Science', school: 'MIT'},
			{name: 'Bruce Banner', id: 3, age: 22, course: 'Biophysics', school: 'Yildiz University'},
			{name: 'Black Widow', id: 4, age: 25, course: 'Public Relations', school: 'Columbia University'}
		]
	}

	addStudent = (newStudent) => {
		newStudent.id = Math.random() * 100;
		let newList = [...this.state.students, newStudent];
		this.setState({
			students: newList
		})
	}

	deleteStudent = (id) => {
		let newList = this.state.students.filter(student => student.id !== id);
		this.setState({
			students: newList
		})
	}

	render(){
		return(
			<>
				<ShowStudents deleteStudent={this.deleteStudent} students={this.state.students}/>
				<AddStudents addStudent={this.addStudent}/>
			</>
		)
	}
}


export default App;