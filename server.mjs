// server.js
import express from 'express';
import path from 'path';

import LlamaAI from 'llamaai';


const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = import.meta.dirname;

const key = 'LA-83698af375b64ce8b3819ce2ac01532dca807cbeaac941a0bdfc912fb187b82b';

const llamaAPI = new LlamaAI(key);

// Build the Request
const apiRequestJson = {
    "messages": [
        {"role": "user", "content": "What is the weather like in Boston?"},
    ],
    "functions": [
        {
            "name": "get_current_weather",
            "description": "Get the current weather in a given location",
            "parameters": {
                "type": "object",
                "properties": {
                    "location": {
                        "type": "string",
                        "description": "The city and state, e.g. San Francisco, CA",
                    },
                    "days": {
                        "type": "number",
                        "description": "for how many days ahead you wants the forecast",
                    },
                    "unit": {"type": "string", "enum": ["celsius", "fahrenheit"]},
                },
            },
            "required": ["location", "days"],
        }
    ],
    "stream": false,
    "function_call": "get_current_weather",
   };
 
   // Execute the Request
    llamaAPI.run(apiRequestJson)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
 

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'clientApp/build')));

// API endpoint example
app.get('/api/hello', (req, res) => {
    console.log(req);
    res.json({ message: 'Hello from Express!' });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'clientApp/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
