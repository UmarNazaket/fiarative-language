# Figurative Language Checker

This project is a web application that checks text for instances of figurative language using the OpenAI API. The application is built with HTML, JavaScript, and Node.js.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)

## Features

- Text area input for user text
- Button to trigger figurative language check
- Integration with OpenAI API to analyze text
- Display of analysis results on the same page

## Installation

### Prerequisites

- Node.js installed on your local machine
- npm (Node package manager)

### Steps

1. **Clone the repository:**

   ```sh
   git clone https://github.com/UmarNazaket/figarative-language.git
   cd figarative-language
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Create a `.env` file in the root directory and add your OpenAI API key:**

   ```env
   OPEN_API_KEY=your_openai_api_key
   ```

## Usage

### Running Locally

1. **Run the build script to inject the API key:**

   ```sh
   npm run build
   ```

2. **Open `index.html` in your web browser:**

   ```sh
   open index.html
   ```

### Testing

- Enter your text in the text area.
- Click the "Check" button to analyze the text for figurative language.
- View the results displayed below the text area.

## Environment Variables

The project uses the following environment variables:

- `OPEN_API_KEY`: Your OpenAI API key.

## Contributing

Contributions are welcome! Please fork the repository and use a feature branch. Pull requests are warmly welcome.

---

Replace `your_openai_api_key` with your actual OpenAI API key before using the readme.
