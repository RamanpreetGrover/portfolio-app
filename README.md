# 🎨 Portfolio Showcase App – Lab 10

A React Native mobile app built with **Expo** for showcasing creative projects, contact information, and a dynamic dark/light theme toggle. This project was developed as part of **CPAN213 Lab 10 – Deployment & CI/CD**.

---

## 📱 Features

- 🖼️ Project Gallery with image carousel
- 📬 Contact Form with email integration using MailComposer
- 👤 About section with personal information
- 🌗 Dark/Light theme toggle
- 📴 Offline-ready assets (local images)
- 🚀 CI/CD pipeline using GitHub Actions

---

## 📂 Folder Structure

portfolio-app/
├── assets/ # Icons, splash, project images
├── components/ # (Optional shared UI components)
├── context/ # ThemeContext
├── navigation/ # AppNavigator with screens
├── screens/ # About, Gallery, Contact screens
├── .github/workflows/ # GitHub Actions for Android & iOS
├── App.js
├── app.json
├── README.md

## 🛠️ Installation & Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/RamanpreetGrover/portfolio-app.git
   cd portfolio-app

   npm install
   npx expo start
