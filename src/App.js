import React, { useState } from 'react';
import './App.css';
import ThreeScene from './ThreeScene';
import ScienceSection from './ScienceSection';
import TechnologySection from './TechnologySection';
import EngineeringSection from './EngineeringSection';
import MathematicsSection from './MathematicsSection';
import InstructorPanel from './InstructorPanel';
import MusicPlayer from './MusicPlayer';

const App = () => {
    const [currentSection, setCurrentSection] = useState('science');
    const [userRole, setUserRole] = useState('student'); // or 'instructor'

    const renderSection = () => {
        switch (currentSection) {
            case 'science':
                return <ScienceSection />;
            case 'technology':
                return <TechnologySection />;
            case 'engineering':
                return <EngineeringSection />;
            case 'mathematics':
                return <MathematicsSection />;
            case 'instructor':
                return <InstructorPanel />;
            default:
                return <ScienceSection />;
        }
    };

    return (
        <div>
            <h1>Mixed Reality STEM Lab</h1>
            <nav>
                <button onClick={() => setCurrentSection('science')}>Science</button>
                <button onClick={() => setCurrentSection('technology')}>Technology</button>
                <button onClick={() => setCurrentSection('engineering')}>Engineering</button>
                <button onClick={() => setCurrentSection('mathematics')}>Mathematics</button>
                <button onClick={() => setCurrentSection('instructor')}>Instructor</button>
            </nav>
            {renderSection()}
            <MusicPlayer />
        </div>
    );
};

export default App;