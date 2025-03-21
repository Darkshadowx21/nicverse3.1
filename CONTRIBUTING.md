# Contribution Guidelines

Welcome! This guide provides all the details you need to contribute effectively to the project. Thank you for helping us make **NicVerse** a better. 💡

---

## 📋 Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [How Can I Contribute?](#how-can-i-contribute)
3. [Pull Request Guidelines](#pull-request-guidelines)
4. [Coding Standards](#coding-standards)
5. [Development Setup](#development-setup)
6. [Testing](#testing)
7. [Deployment](#deployment)
8. [VS Code Dev Containers Integration](#vs-code-dev-containers-integration)

---

## 🛡️ Code of Conduct

This project is governed by our **Code of Conduct**. By participating, you agree to uphold this code. Report unacceptable behavior to the project maintainers.

---

## 🛠️ How Can I Contribute?

### 1️⃣ Reporting Bugs or Feature Requests

- Check the [issue tracker](#) to avoid duplicates.
- Use issue templates (if available).
- Provide detailed, relevant information and steps to reproduce bugs.

### 2️⃣ Code Contributions

1. Fork the repository.
2. Create a feature or fix branch.
3. Write and test your code.
4. Submit a pull request (PR).

### 3️⃣ Join as a Core Contributor

Interested in maintaining and growing the project? Fill out our [Contributor Application Form](https://forms.gle/).

---

## ✅ Pull Request Guidelines

### PR Checklist

- Branch from the **main** branch.
- Update documentation, if needed.
- Test all functionality manually.
- Focus on one feature/bug per PR.

### Review Process

1. Manual testing by reviewers.
2. At least one maintainer review required.
3. Address review comments.
4. Maintain a clean commit history.

---

## 📏 Coding Standards

### General Guidelines

- Follow existing code style.
- Comment complex logic.
- Keep functions small and focused.
- Use meaningful variable names.

---

## 🖥️ Development Setup

### 1️⃣ Initial Setup

- Clone the repository:
  ```bash
  git clone https://github.com/Darkshadowx21/nicverse3.1.git
  ```
- Install dependencies:
  ```bash
  pnpm install
  ```
- Set up environment variables:
  1. Rename `.env.example` to `.env.local`.

**Note**: Never commit your `.env.local` file to version control. It’s already in `.gitignore`.

### 2️⃣ Run Development Server

```bash
pnpm run dev
```

**Tip**: Use **Google Chrome Canary** for local testing.

---

## 🧪 Testing

Run the test suite with:

```bash
pnpm test
```

---

## 🚀 Deployment

### Deploy to Cloudflare Pages

```bash
pnpm run deploy
```

Ensure you have required permissions and that Wrangler is configured.

---





## 🛠️ VS Code Dev Containers Integration

The `docker-compose.yaml` configuration is compatible with **VS Code Dev Containers**, making it easy to set up a development environment directly in Visual Studio Code.

### Steps to Use Dev Containers

1. Open the command palette in VS Code (`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS).
2. Select **Dev Containers: Reopen in Container**.
3. Choose the **development** profile when prompted.
4. VS Code will rebuild the container and open it with the pre-configured environment.

---
