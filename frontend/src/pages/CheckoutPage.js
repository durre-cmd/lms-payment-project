// frontend/src/pages/CheckoutPage.js
import React from 'react';
import PremiumContent from '../components/PremiumContent';

const CheckoutPage = ({ paidCourses }) => {
    return (
        <div className="checkout-container">
            <h2>My Paid Courses</h2>
            {paidCourses.length === 0 && <p>No courses purchased yet.</p>}

            {paidCourses.map((course) => (
                <div key={course.id} style={{ marginBottom: '1rem' }}>
                    <p>
                        {course.courseName} - ${course.price} - <strong>{course.status}</strong>
                    </p>
                    <PremiumContent course={{ name: course.courseName }} />
                </div>
            ))}
        </div>
    );
};

export default CheckoutPage;
