const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample PDF</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .container {
            width: 80%;
            margin: 0 auto;
            padding: 20px;
        }
        h1 {
            color: #333;
            text-align: center;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Users List</h1>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Shyam</td>
                    <td>26</td>
                </tr>
                <tr>
                    <td>Navjot</td>
                    <td>26</td>
                </tr>
                <tr>
                    <td>Vitthal</td>
                    <td>26</td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>
`;

// Now you can use this HTML content with puppeteer to generate a PDF
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Set content and generate PDF
    await page.setContent(htmlContent);
    await page.pdf({ path: './output.pdf', format: 'A4' });

    await browser.close();
    console.log('PDF generated successfully');
})();
