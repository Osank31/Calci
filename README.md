# Calci

Calci is a web-based application that allows users to draw handwritten complex equations on a canvas, upload the drawing to the server, and receive an AI-generated result that solves the equation within seconds. The AI processes the image, extracts the equation, and returns the solution on the page.

## Features

- Draw complex equations on a canvas.
- Upload the drawing as an image (`.png`) to the server.
- Server-side processing using Google Generative AI to solve equations.
- Displays the AI-generated solution on the webpage within seconds.

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (Canvas API)
- **Backend**: Node.js, Express.js
- **AI Integration**: Google Generative AI (Gemini model)
- **File Upload**: Multer (Node.js middleware)

## Setup and Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Osank31/Calci.git
    ```

2. Navigate to the project directory:
    ```bash
    cd Calci
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Set up environment variables by creating a `.env` file in the root directory with the following content:
    ```bash
    GEMINI_API_KEY=your_google_generative_ai_key
    PORT=3000
    ```

5. Run the project:
    ```bash
    npm run dev
    ```

6. Open your browser and go to `http://localhost:3000` to access the app, or visit the live version at [Calci](https://calci-xhu7.onrender.com/).

## Package Dependencies

This project uses the following dependencies:

```json
{
    "@google/generative-ai": "^0.21.0",
    "dotenv": "^16.4.5",
    "express": "^4.21.1",
    "multer": "^1.4.5-lts.1"
}
```

Dev dependencies:

```json
{
    "nodemon": "^3.1.7"
}
```

## Usage

1. Draw a complex equation on the canvas.
2. Click the "Calculate" button.
3. The drawing will be uploaded to the server.
4. The AI will process the drawing and return a solution, which will be displayed on the page within seconds.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
