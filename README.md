# KPI Monster Express Middleware

Automatically capture Express request data from your API or application into KPI Monster.
The middleware is extremely simple to set up and only requires your KPI Monster key.

## Installation

```bash
npm install kpi-monster-express --save

or

yarn add kpi-monster-express
```

## Usage

To use, simply require the package and initialize it with your API key. Then add it to express.

```javascript
const express = require('express');
const app = express();

//Require the middleware and enter your API key
const kpi = require('kpi-monster-express')(YOUR_API_KEY);

//Use the middleware in your express application
app.use(kpi);
app.listen(3000, () => {});
```