let express = require('express');
let app = express();
// Your Express application logic goes here
app.get('/addTwoNumbers', (req, res) => {
    // Extracting parameters from the query string
    const num1 = parseInt(req.query.n1);
    const num2 = parseInt(req.query.n2);

    // Checking if both parameters are provided
    if (isNaN(num1) || isNaN(num2)) {
        res.status(400).json({ error: 'Please provide both numbers.' });
        return;
    }

    const result = add(num1, num2);

    // JSON response
    res.json({ message: 'The sum is ' + result, status: 200 });
});

function add(a, b) {
    return a + b;
}
let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});