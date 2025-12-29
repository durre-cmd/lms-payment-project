// backend/controllers/paymentController.js

// Mock payment creation
exports.createPayment = (req, res) => {
    const { courseName, price } = req.body;

    // Simulate an approval URL
    const approvalUrl = `http://localhost:3000/payment/mock-success?course=${encodeURIComponent(courseName)}&price=${price}`;

    res.json({
        approvalUrl,
        message: `Mock payment created for ${courseName} ($${price})`
    });
};

// Mock payment execution
exports.executePayment = (req, res) => {
    const { courseName, price } = req.body;

    // Simulate a successful payment response
    res.json({
        success: true,
        payment: {
            id: "MOCK12345",
            status: "COMPLETED",
            courseName,
            amount: price,
            payer: {
                email: "testuser@example.com",
                name: "Test User"
            }
        },
        message: `Payment for ${courseName} completed successfully (mock).`
    });
};
