# Contributing to Pustak Ghar – Preserving Hindi & Regional Literature

Thank you for your interest in contributing! 🌸  
Pustak Ghar is an open-source initiative to **preserve Hindi and regional literature** by building a digital library of books, poems, stories, and educational resources.  
Your contributions can help us keep India’s literary heritage alive for future generations.

---

## 📜 Code of Conduct
We aim to maintain a warm, inclusive, and respectful environment.  
Please ensure your interactions are polite, collaborative, and constructive.

---

## 🛠 How You Can Contribute

We welcome contributions in multiple areas:

### 📚 Content Contributions
- Add **books, poems, stories, or educational resources** (in Hindi or other regional languages)
- Ensure content is **public domain** or has explicit permission for free distribution
- Provide metadata such as **title, author, category, and language**

### 🎨 Design & UI/UX
- Help redesign the platform into a **digital library-style interface**
- Improve typography, color palette, and responsiveness
- Make accessibility improvements (ARIA roles, color contrast, keyboard navigation)

### 💻 Development
- Implement search and filter functionality
- Add new sections (Books, Poems, Stories, Educational Resources)
- Work on backend/API integration for content storage
- Fix bugs or optimize performance

---

## 🖋 Content Submission Guidelines

- Use **UTF-8** encoding for Hindi and regional language text
- Store content in `.json` or `.md` format (depending on category)
- Keep filenames lowercase and use hyphens for spaces (e.g., `premchand-godan.md`)
- Include attribution and license information in the file header

Example metadata for a poem (`.md` file):

```markdown
---
title: "गोदान"
author: "मुंशी प्रेमचंद"
language: "Hindi"
category: "Book"
license: "Public Domain"
---

(Your text content here)
```
## 📂 Project Setup
1. **Fork & Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/pustak-ghar-literature.git
   cd pustak-ghar-literature
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Start development server**
   ```bash
   npm run dev
   ```
## 🌱 Branching & Commit Rules
    
  - Branch naming convention:

  - feature/<short-description> → for new features

  - fix/<short-description> → for bug fixes

  - content/<title-or-author> → for adding literature content

## 📤 Submitting a Pull Request
1. **Push your branch to your fork:**
      ```bash
      git push origin feature/search-filter
      ```
2. **Open a Pull Request (PR) to the main branch of this repository.**

3. **Clearly describe:**
- What changes you made
- Why they are needed
- Any relevant screenshots (for UI changes)
