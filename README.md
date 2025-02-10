# HealthyBites - Weight Loss Recipe App

A mobile-friendly web application that helps users find and track healthy, low-calorie recipes for their weight loss journey.

## Features

- 🍳 Browse low-calorie recipes
- 🔍 Search functionality
- 📱 Mobile-first responsive design
- 📊 Recipe categories
- ⭐ Save favorite recipes
- 📅 Weekly meal planner
- 🎯 Calorie tracking

## Getting Started

### Prerequisites

- A modern web browser
- A web server (for local development, you can use tools like Live Server in VS Code)

### Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/healthybites.git
```

2. Navigate to the project directory:
```bash
cd healthybites
```

3. If you're using VS Code, install the "Live Server" extension and right-click on `index.html` to open with Live Server.

Alternatively, you can use any other local server of your choice.

### Deployment on GitHub Pages

1. Create a new repository on GitHub
2. Push your code to the repository:
```bash
git remote add origin https://github.com/yourusername/healthybites.git
git branch -M main
git push -u origin main
```

3. Go to your repository settings on GitHub
4. Scroll down to "GitHub Pages" section
5. Select the main branch as source
6. Your site will be published at `https://yourusername.github.io/healthybites`

## Project Structure

```
healthybites/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # Styles
├── js/
│   └── app.js         # JavaScript functionality
└── assets/            # Images and other assets
```

## Customization

### Adding New Recipes

Edit the `recipes` array in `js/app.js` to add new recipes:

```javascript
const recipes = [
    {
        id: 4,
        title: 'Your New Recipe',
        calories: 300,
        time: '15 min',
        image: 'path/to/image.jpg',
        category: 'breakfast'
    },
    // ... more recipes
];
```

### Modifying Categories

Edit the category cards in `index.html` to modify recipe categories.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Font Awesome for icons
- Unsplash for sample images
- Google Fonts for the Poppins font family 