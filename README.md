# Calci

**Calci** is a web-based application that allows users to draw handwritten complex equations on a canvas, upload the drawing to the server, and receive an AI-generated result that solves the equation within seconds. The AI processes the image, extracts the equation, and returns the solution on the page.

## How I Got the Idea

I was inspired by Apple's new calculator app for the iPad, which uses AI to interpret handwritten equations, offering suggestions and solving them. I thought I could replicate something similar on a website.

## Project Execution

1. **User Input**: The user draws their equations by hand on the canvas.
2. **Backend Processing**: When the user clicks the "Calculate" button, the image on the canvas is converted into a Blob and sent to the backend.
3. **AI Integration**: I used Google's generative AI to interpret the image, extract the equation, and provide the result.
4. **Result Display**: The AI's response is then displayed in a separate answer box.

### Limitations

- Unlike Apple's app, which provides the solution immediately when the user writes the equals sign, I haven't figured out how to implement real-time equation solving yet.
- The Apple app displays the answer directly next to the question in the same line, whereas I currently show the result in a separate text box. I’m not sure how to make the display inline.

---

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

## Usage

1. Write a complex equation on the canvas.
2. Click the "Calculate" button.
3. The drawing will be uploaded to the server.
4. The AI will process the drawing and return a solution, which will be displayed on the page within seconds.