# CyberSphere: Phishing Website Detector

CyberSphere is a browser extension and website designed to detect phishing attacks using machine learning techniques. The system is built using React.js, Three.js, Tailwind CSS for the frontend, and vanilla JavaScript for the extension. The machine learning models are trained using XGBoost, Random Forest, Decision Tree, and SVM algorithms.

![CyberSphere](https://i.ibb.co/DC2bxkG/Screecyber.png)

## Features

- Browser extension for real-time phishing detection while browsing.
- Web application for comprehensive phishing analysis.
- Integration of machine learning models for accurate detection.
- Local API for seamless communication between the extension and the web app.

## Technologies Used

- React.js
- Three.js
- Tailwind CSS
- Vanilla JavaScript
- XGBoost
- Random Forest
- Decision Tree
- SVM

## Dataset

The machine learning models are trained on a dataset consisting of over 30,000 samples, including various features to identify phishing websites.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/MihirJaiswal/minorproject.git
    ```

2. Navigate to the project directory:

    ```bash
    cd CyberSphere
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Run the local API:

    ```bash
    python api2.py
    ```

5. Start the web application:

    ```bash
    npm run dev
    ```

6. Load the extension:

    - Open your browser and go to `chrome://extensions/` (for Chrome) or `about:addons` (for Firefox).
    - Enable Developer mode.
    - Click on "Load unpacked" and select the `extension` directory in the cloned repository.

## Usage

- **Browser Extension**: The extension will automatically analyze websites for phishing threats while you browse. If a phishing attempt is detected, it will alert the user.
- **Web Application**: Visit the CyberSphere website to perform in-depth analysis of URLs for potential phishing activities.

## Contributing

Contributions are welcome! Please feel free to open issues or pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
