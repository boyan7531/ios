// DOM Elements
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const searchInput = document.getElementById('recipe-search');
const searchBtn = document.querySelector('.search-btn');
const recipeGrid = document.getElementById('recipe-grid');
const categoryCards = document.querySelectorAll('.category-card');
const toast = document.getElementById('toast');
const pullToRefresh = document.querySelector('.pull-to-refresh');

// Sample recipe data (in a real app, this would come from an API)
const recipes = [
    {
        id: 1,
        title: 'Air Fryer Chicken Breast',
        subtitle: 'Simple & Juicy',
        calories: 250,
        time: '20 min',
        image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'dinner',
        ingredients: [
            '1 skinless, boneless chicken breast (150g)',
            '1 tsp olive oil',
            '1/2 tsp salt',
            '1/2 tsp black pepper',
            '1/2 tsp garlic powder'
        ],
        instructions: [
            'Preheat air fryer to 200°C (400°F)',
            'Pat chicken breast dry with paper towels',
            'Rub chicken breast with olive oil and seasonings evenly',
            'Place in air fryer basket',
            'Air fry for 12-15 minutes, flipping halfway through',
            'Let rest for 5 minutes before slicing',
            'Check internal temperature reaches 74°C (165°F)'
        ],
        protein: '40g',
        carbs: '0g',
        fat: '12g',
        tips: 'Pair with steamed veggies for a complete meal!',
        difficulty: 'Easy',
        servings: 1,
        tags: ['high-protein', 'low-carb', 'air-fryer']
    },
    {
        id: 2,
        title: 'Air Fryer Salmon',
        subtitle: 'Crispy & Healthy',
        calories: 300,
        time: '15 min',
        image: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'dinner',
        ingredients: [
            '1 salmon fillet (120g)',
            '1 tsp olive oil',
            '1/2 tsp garlic powder',
            '1/2 tsp paprika',
            '1/2 tsp salt'
        ],
        instructions: [
            'Preheat air fryer to 200°C (400°F)',
            'Pat salmon dry with paper towels',
            'Rub salmon with olive oil',
            'Mix seasonings and apply evenly to salmon',
            'Air fry for 8-10 minutes until crispy on outside and flaky inside',
            'Check internal temperature reaches 63°C (145°F)'
        ],
        protein: '35g',
        carbs: '0g',
        fat: '18g',
        tips: 'Serve with a side of quinoa or fresh salad!',
        difficulty: 'Easy',
        servings: 1,
        tags: ['high-protein', 'omega-3', 'air-fryer']
    },
    {
        id: 3,
        title: 'Air Fryer Scrambled Eggs',
        subtitle: 'Quick & Fluffy',
        calories: 200,
        time: '10 min',
        image: 'https://images.unsplash.com/photo-1551185618-5d8656fd00b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'breakfast',
        ingredients: [
            '3 large eggs',
            '1 tbsp milk (optional)',
            'Salt to taste',
            'Black pepper to taste'
        ],
        instructions: [
            'Crack eggs into a bowl',
            'Add milk (if using), salt, and pepper',
            'Whisk until well combined',
            'Pour into a small oven-safe dish that fits in your air fryer',
            'Air fry at 180°C (360°F) for 6-8 minutes',
            'Stir halfway through cooking',
            'Remove when eggs are set but still slightly moist'
        ],
        protein: '18g',
        carbs: '1g',
        fat: '14g',
        tips: 'Perfect with whole wheat toast and avocado!',
        difficulty: 'Easy',
        servings: 1,
        tags: ['high-protein', 'breakfast', 'air-fryer']
    },
    {
        id: 4,
        title: 'Air Fryer Sweet Potato Fries',
        subtitle: 'Crispy & Healthy',
        calories: 180,
        time: '20 min',
        image: 'https://images.unsplash.com/photo-1635753510010-7a4d3340a8f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'snacks',
        ingredients: [
            '1 small sweet potato',
            '1 tsp olive oil',
            '1/2 tsp salt',
            '1/2 tsp paprika',
            'Optional: 1/4 tsp garlic powder'
        ],
        instructions: [
            'Wash and peel sweet potato (peeling optional)',
            'Cut into even-sized fries about 1/4 inch thick',
            'Soak in cold water for 30 minutes (optional, for extra crispiness)',
            'Pat completely dry with paper towels',
            'Toss with oil and seasonings',
            'Air fry at 200°C (400°F) for 15 minutes',
            'Shake basket halfway through cooking',
            'Cook until crispy and golden brown'
        ],
        protein: '3g',
        carbs: '30g',
        fat: '5g',
        tips: 'For extra crispiness, dont overcrowd the air fryer basket!',
        difficulty: 'Easy',
        servings: 2,
        tags: ['vegan', 'snack', 'air-fryer']
    },
    {
        id: 5,
        title: 'High-Protein Greek Yogurt Bowl',
        subtitle: 'Quick & Nutritious',
        calories: 250,
        time: '5 min',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'breakfast',
        ingredients: [
            '150g Greek yogurt (0% fat)',
            '1 tsp honey',
            '1 tbsp chopped nuts (almonds/walnuts)',
            '1/4 cup mixed berries',
            'Optional: 1 tbsp chia seeds'
        ],
        instructions: [
            'Add Greek yogurt to a bowl',
            'Drizzle with honey',
            'Top with chopped nuts',
            'Add fresh berries',
            'Sprinkle chia seeds if using',
            'Mix gently before eating'
        ],
        protein: '25g',
        carbs: '20g',
        fat: '8g',
        tips: 'Prep ingredients the night before for a quick breakfast!',
        difficulty: 'Easy',
        servings: 1,
        tags: ['high-protein', 'breakfast', 'no-cook']
    },
    {
        id: 6,
        title: 'Green Power Smoothie',
        subtitle: 'Nutrient-Packed & Refreshing',
        calories: 200,
        time: '5 min',
        image: 'https://images.unsplash.com/photo-1502741126161-b048400d085d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'smoothies',
        ingredients: [
            '2 cups fresh spinach',
            '1 ripe banana',
            '1 cup unsweetened almond milk',
            '1 tbsp chia seeds',
            'Optional: 1 scoop vanilla protein powder',
            'Optional: 1/2 cup mango chunks'
        ],
        instructions: [
            'Add spinach and almond milk to blender',
            'Blend until spinach is completely broken down',
            'Add remaining ingredients',
            'Blend until smooth and creamy',
            'Add more almond milk if needed for desired consistency'
        ],
        protein: '8g',
        carbs: '25g',
        fat: '5g',
        tips: 'Freeze banana chunks for a colder, creamier smoothie!',
        difficulty: 'Easy',
        servings: 1,
        tags: ['vegan', 'smoothie', 'breakfast']
    }
];

// Mobile app-like functionality
let startY;
let pullDistance = 0;

// Pull to refresh functionality
document.addEventListener('touchstart', (e) => {
    startY = e.touches[0].pageY;
});

document.addEventListener('touchmove', (e) => {
    if (window.scrollY === 0) {
        pullDistance = e.touches[0].pageY - startY;
        if (pullDistance > 0 && pullDistance < 200) {
            pullToRefresh.style.transform = `translateY(${pullDistance - 60}px)`;
        }
    }
});

document.addEventListener('touchend', () => {
    if (pullDistance > 100) {
        // Simulate refresh
        pullToRefresh.style.transform = 'translateY(0)';
        showToast('Refreshing recipes...');
        setTimeout(() => {
            location.reload();
        }, 1000);
    } else {
        pullToRefresh.style.transform = 'translateY(-60px)';
    }
    pullDistance = 0;
});

// Create recipe card with enhanced details
function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
        <div class="recipe-content">
            <h3 class="recipe-title">${recipe.title}</h3>
            <p class="recipe-subtitle">${recipe.subtitle}</p>
            <div class="recipe-info">
                <span><i class="fas fa-fire"></i> ${recipe.calories} cal</span>
                <span><i class="fas fa-clock"></i> ${recipe.time}</span>
                <span><i class="fas fa-utensils"></i> ${recipe.servings} serv</span>
            </div>
            <div class="recipe-nutrition">
                <span>🥩 ${recipe.protein}</span>
                <span>🌾 ${recipe.carbs}</span>
                <span>🥑 ${recipe.fat}</span>
            </div>
            <div class="recipe-tags">
                ${recipe.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <button class="favorite-btn" onclick="toggleFavorite(${recipe.id})">
                <i class="far fa-heart"></i>
            </button>
        </div>
    `;

    // Add tap effect for mobile
    card.addEventListener('click', () => {
        showRecipeDetails(recipe);
    });

    return card;
}

// Show recipe details in a modal
function showRecipeDetails(recipe) {
    const modal = document.createElement('div');
    modal.className = 'modal slide-in';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <img src="${recipe.image}" alt="${recipe.title}">
            <h2>${recipe.title}</h2>
            <p class="recipe-subtitle">${recipe.subtitle}</p>
            <div class="recipe-tags">
                ${recipe.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="recipe-stats">
                <span><i class="fas fa-fire"></i> ${recipe.calories} calories</span>
                <span><i class="fas fa-clock"></i> ${recipe.time}</span>
                <span><i class="fas fa-utensils"></i> ${recipe.servings} serving(s)</span>
                <span><i class="fas fa-chart-line"></i> ${recipe.difficulty}</span>
            </div>
            <div class="recipe-nutrition">
                <span>Protein: ${recipe.protein}</span>
                <span>Carbs: ${recipe.carbs}</span>
                <span>Fat: ${recipe.fat}</span>
            </div>
            <h3>Ingredients</h3>
            <ul class="ingredients-list">
                ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
            </ul>
            <h3>Instructions</h3>
            <ol class="instructions-list">
                ${recipe.instructions.map(inst => `<li>${inst}</li>`).join('')}
            </ol>
            <div class="recipe-tips">
                <h3>💡 Tips</h3>
                <p>${recipe.tips}</p>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    
    modal.querySelector('.close-btn').addEventListener('click', () => {
        modal.remove();
    });
}

// Show toast notification
function showToast(message, duration = 3000) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

// Toggle favorite status
function toggleFavorite(recipeId) {
    const favorites = getFavorites();
    if (favorites.includes(recipeId)) {
        removeFromFavorites(recipeId);
        showToast('Removed from favorites');
    } else {
        addToFavorites(recipeId);
        showToast('Added to favorites');
    }
}

// Display recipes with loading state
function displayRecipes(recipesToShow = recipes) {
    recipeGrid.innerHTML = '<div class="loading-spinner"></div>';
    setTimeout(() => {
        recipeGrid.innerHTML = '';
        recipesToShow.forEach(recipe => {
            recipeGrid.appendChild(createRecipeCard(recipe));
        });
    }, 500);
}

// Enhanced search functionality
function searchRecipes(query) {
    const filteredRecipes = recipes.filter(recipe => 
        recipe.title.toLowerCase().includes(query.toLowerCase()) ||
        recipe.ingredients.some(ing => ing.toLowerCase().includes(query.toLowerCase()))
    );
    displayRecipes(filteredRecipes);
}

// Event listeners
searchBtn.addEventListener('click', () => {
    searchRecipes(searchInput.value);
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchRecipes(searchInput.value);
    }
});

categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const category = card.dataset.category;
        const filteredRecipes = recipes.filter(recipe => recipe.category === category);
        displayRecipes(filteredRecipes);
        showToast(`Showing ${category} recipes`);
    });
});

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    displayRecipes();
    navLinks.classList.add('active'); // Show bottom navigation on mobile
});

// Local Storage functions for favorites
function getFavorites() {
    return JSON.parse(localStorage.getItem('favorites')) || [];
}

function addToFavorites(recipeId) {
    const favorites = getFavorites();
    if (!favorites.includes(recipeId)) {
        favorites.push(recipeId);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
}

function removeFromFavorites(recipeId) {
    const favorites = getFavorites();
    const updatedFavorites = favorites.filter(id => id !== recipeId);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
}

// Save user preferences
function saveUserPreferences(preferences) {
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
}

function getUserPreferences() {
    return JSON.parse(localStorage.getItem('userPreferences')) || {
        calorieGoal: 2000,
        dietaryRestrictions: [],
        theme: 'light'
    };
}

// Export functions for use in other modules
export {
    displayRecipes,
    searchRecipes,
    addToFavorites,
    removeFromFavorites,
    saveUserPreferences,
    getUserPreferences
}; 