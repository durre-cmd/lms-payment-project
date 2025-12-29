// frontend/src/components/PremiumContent.js
import React from 'react';

const PremiumContent = ({ course }) => {
    return (
        <div style={{ padding: '1rem', margin: '0.5rem 0', background: '#e0ffe0', borderRadius: '8px' }}>
            <h3>Premium Content: {course.name}</h3>
            <ul>
                <li>Lesson 1: Advanced Concepts</li>
                <li>Lesson 2: Best Practices</li>
                <li>Lesson 3: Deployment Tips</li>
            </ul>
        </div>
    );
};

export default PremiumContent;
