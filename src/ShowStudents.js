import React from 'react';

const ShowStudents = ({students, deleteStudent}) => {
	// students.length > 0 ? 

	const studList = students.length > 0 ? (
		students.map(student => {
			return(
				<div key={student.id}>
						<p>{student.name}</p>
						<p>{student.age}</p>
						<p>{student.course}</p>
						<p>{student.school}</p>
						<button onClick={(e) => {
								e.target.closest('div').className = 'fadeOut';
								// deleteStudent(student.id);
								setTimeout(() => deleteStudent(student.id),1000)
						} }><i className="fas fa-trash"></i></button>
				</div>
			)
		
		})
	) : (
		<div>There are no items left</div>
	);

	
		
	return(
		<div className="studentList">
				{studList}
		</div>
	)
}

export default ShowStudents;