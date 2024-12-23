import React, { useState } from 'react';

const InstructorPanel = () => {
    const [students, setStudents] = useState([
        { id: 1, name: 'Student A', activity: 'Conducting Experiment 1', feedback: '' },
        { id: 2, name: 'Student B', activity: 'Conducting Experiment 2', feedback: '' },
    ]);

    const [assignments, setAssignments] = useState([]);
    const [newAssignment, setNewAssignment] = useState('');

    const handleFeedbackChange = (id, value) => {
        setStudents(students.map(student => 
            student.id === id ? { ...student, feedback: value } : student
        ));
    };

    const handleSendFeedback = (id) => {
        const student = students.find(s => s.id === id);
        alert(`Feedback sent to ${student.name}: ${student.feedback}`);
        // Here you can implement actual sending logic (e.g., via WebSocket or API)
    };

    const addAssignment = () => {
        if (newAssignment) {
            setAssignments([...assignments, newAssignment]);
            setNewAssignment('');
        }
    };

    const deleteAssignment = (index) => {
        setAssignments(assignments.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h2>Instructor Panel</h2>
            {students.map(student => (
                <div key={student.id}>
                    <h3>{student.name}</h3>
                    <p>Current Activity: {student.activity}</p>
                    <textarea
                        placeholder="Provide feedback..."
                        value={student.feedback}
                        onChange={(e) => handleFeedbackChange(student.id, e.target.value)}
                    />
                    <button onClick={() => handleSendFeedback(student.id)}>Send Feedback</button>
                </div>
            ))}
            <h3>Assignments</h3>
            <input
                type="text"
                value={newAssignment}
                onChange={(e) => setNewAssignment(e.target.value)}
                placeholder="New Assignment"
            />
            <button onClick={addAssignment}>Add Assignment</button>
            <ul>
                {assignments.map((assignment, index) => (
                    <li key={index}>
                        {assignment}
                        <button onClick={() => deleteAssignment(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InstructorPanel;
