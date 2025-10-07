#!/bin/bash

# README path
README_FILE="README.md"

# Escribir el contenido en README.md
cat <<EOL > $README_FILE
# 🍝 Italian Takeaway Restaurant Website

A modern web application for an Italian takeaway restaurant, built with React, Emotion, and Material UI.
It features a clean, responsive design that allows users to browse dishes, customize orders, and manage their cart easily.

---

## 🚀 Getting Started

### 📦 Installation

\`\`\`bash
git clone https://github.com/your-username/italian-takeaway.git
cd italian-takeaway
npm install
\`\`\`

### ▶️ Run the project

\`\`\`bash
npm start
\`\`\`

Open your browser at http://localhost:3000

---

## 🧰 Tech Stack

- React
- Emotion
- Material UI
- TypeScript (optional)

---

## 🌍 Features

- Browse Italian dishes like pizzas and pasta
- Add and remove items from the cart
- View live price updates
- Responsive design for mobile and desktop

---

## 📜 License

MIT License
EOL

echo "README.md has been generated!"
