// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import CourseCard from './components/CourseCard';
import CheckoutPage from './pages/CheckoutPage';
import './styles/main.css';

function App() {
    const [courses] = useState([
        { name: 'Premium React Course', price: '10.00' },
        { name: 'Advanced JS Course', price: '15.00' },
    ]);

    const [paidCourses, setPaidCourses] = useState([]);

    // Load paid courses from localStorage on app load
    useEffect(() => {
        const savedCourses = JSON.parse(localStorage.getItem('paidCourses')) || [];
        setPaidCourses(savedCourses);
    }, []);

    const handleBuy = (course) => {
        const exists = paidCourses.find(c => c.courseName === course.name);
        if (!exists) {
            const newCourse = { courseName: course.name, price: course.price, id: Date.now(), status: 'COMPLETED' };
            const updatedPaid = [...paidCourses, newCourse];
            setPaidCourses(updatedPaid);
            localStorage.setItem('paidCourses', JSON.stringify(updatedPaid));
        }
    };

    const handleReset = () => {
        localStorage.removeItem('paidCourses'); // Clear purchased courses
        setPaidCourses([]); // Reset state
    };

    return (
        <div>
            <header>
                <h1>LMS Premium Courses</h1>
            </header>

            {/* Reset Button */}
            <div style={{ textAlign: 'center', margin: '1rem' }}>
                <button
                    style={{ padding: '0.5rem 1rem', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                    onClick={handleReset}
                >
                    Reset Purchases
                </button>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {courses.map((course, index) => {
                    const isPaid = paidCourses.find(c => c.courseName === course.name);
                    return (
                        <CourseCard
                            key={index}
                            course={course}
                            onBuy={handleBuy}
                            isPaid={!!isPaid}
                        />
                    );
                })}
            </div>

            {/* Pass paidCourses as prop to CheckoutPage */}
            <CheckoutPage paidCourses={paidCourses} />
        </div>
    );
}

export default App;
