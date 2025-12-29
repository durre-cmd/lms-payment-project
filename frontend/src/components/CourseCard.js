// frontend/src/components/CourseCard.js
import React from 'react';

const CourseCard = ({ course, onBuy, isPaid }) => {
    return (
        <div className="course-card">
            <h3>{course.name}</h3>
            <p>Price: ${course.price}</p>
            {!isPaid ? (
                <button onClick={() => onBuy(course)}>Buy Now</button>
            ) : (
                <button disabled style={{ backgroundColor: 'gray', cursor: 'default' }}>Paid</button>
            )}
        </div>
    );
};

export default CourseCard;
