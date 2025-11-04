# Portfolio Website

A modern, interactive portfolio website built with React, Three.js, and Framer Motion. This project showcases my skills as a software developer, featuring 3D visualizations, smooth animations, and a responsive design.

## 🚀 Features

- **3D Earth Scene**: Interactive 3D Earth with orbiting planets using React Three Fiber
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Responsive Design**: Optimized for all devices with Tailwind CSS
- **Navigation**: Scroll-based navigation with smooth transitions
- **Skills Showcase**: Animated skill icons and role cards
- **Project Profiles**: Links to coding profiles (LeetCode, GeeksforGeeks, GitHub)
- **Contact Form**: Functional contact form with email integration
- **Space Theme**: Dark space-themed background with stars and gradients

## 🛠️ Technologies Used

- **Frontend Framework**: React 18
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Language**: JavaScript (ES6+)

## 📁 Project Structure

```
portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Scene.jsx          # 3D scene with Earth and planets
│   │   ├── Slide1.jsx         # Hero section with Earth scene
│   │   ├── Skills3D.jsx       # 3D skills visualization
│   │   └── UI.jsx             # Main UI layout and sections
│   ├── index.css              # Global styles and animations
│   ├── main.jsx               # App entry point
│   └── App.jsx                # Main app component
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎨 Components Overview

### Scene.jsx
- Renders the 3D Earth with orbiting planets
- Includes hover effects and orbital animations
- Uses texture mapping for realistic Earth appearance

### Slide1.jsx
- Hero section featuring the 3D Earth scene
- Animated introduction text
- Scroll indicator

### UI.jsx
- Main layout component
- Contains all portfolio sections (About, Work, Contact)
- Handles navigation and scroll-based interactions

### Skills3D.jsx
- 3D visualization of technical skills
- Interactive skill cubes with hover effects

## 🎯 Key Features Explained

### 3D Earth Scene
The Earth scene uses React Three Fiber to create an interactive 3D environment. The Earth rotates automatically and has orbiting planets that respond to user interactions. Texture mapping gives the Earth a realistic appearance.

### Navigation System
The navigation menu hides when scrolling past the first section and reappears when scrolling back up, providing a clean, distraction-free experience.

### Responsive Design
The website adapts to different screen sizes using Tailwind CSS responsive utilities, ensuring a great experience on desktop, tablet, and mobile devices.

### Animation System
Framer Motion handles all animations, from fade-ins and slide-ups to bounce effects on interactive elements.

## 📧 Contact

Feel free to reach out if you have any questions or suggestions!

- **Email**: rakshada.tawade@example.com
- **GitHub**: [ADHIRAHA2208](https://github.com/ADHIRAHA2208)
- **LeetCode**: [rakshada_425](https://leetcode.com/u/rakshada_425/)
- **GeeksforGeeks**: [3098raksqlv9](https://www.geeksforgeeks.org/user/3098raksqlv9/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

*Built with ❤️ using React and Three.js*
