document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const authButtons = document.querySelector('.auth-buttons');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        authButtons.classList.toggle('active');
    });

    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentTestimonial = 0;
    let testimonialInterval;

    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
        currentTestimonial = index;
    }

    function startTestimonialRotation() {
        testimonialInterval = setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }, 5000);
    }

    function stopTestimonialRotation() {
        clearInterval(testimonialInterval);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopTestimonialRotation();
            showTestimonial(index);
            startTestimonialRotation();
        });
    });

    prevBtn.addEventListener('click', () => {
        stopTestimonialRotation();
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonial);
        startTestimonialRotation();
    });

    nextBtn.addEventListener('click', () => {
        stopTestimonialRotation();
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
        startTestimonialRotation();
    });

    // Start auto-rotation
    startTestimonialRotation();

    // Wardrobe Tab System
    const tabButtons = document.querySelectorAll('.tab-btn');
    const wardrobeItems = document.querySelector('.wardrobe-items');

    // Enhanced Wardrobe Data with season and more attributes
    const wardrobeData = {
        shirts: [
            { id: 1, name: 'White T-Shirt', color: 'white', type: 'casual', season: 'all', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
            { id: 2, name: 'Blue Button-Up', color: 'blue', type: 'business', season: 'all', image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
            { id: 3, name: 'Black Polo', color: 'black', type: 'casual', season: 'all', image: 'https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
            { id: 4, name: 'Striped Shirt', color: 'multicolor', type: 'casual', season: 'summer', image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
            { id: 5, name: 'Denim Shirt', color: 'blue', type: 'casual', season: 'fall', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
            { id: 6, name: 'Formal White Shirt', color: 'white', type: 'business', season: 'all', image: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' }
        ],
        pants: [
            { id: 7, name: 'Blue Jeans', color: 'blue', type: 'casual', season: 'all', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
            { id: 8, name: 'Black Chinos', color: 'black', type: 'business', season: 'all', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
            { id: 9, name: 'Gray Dress Pants', color: 'gray', type: 'business', season: 'all', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
            { id: 10, name: 'Beige Khakis', color: 'beige', type: 'casual', season: 'summer', image: 'https://via.placeholder.com/200?text=Beige+Khakis' }
        ],
        shoes: [
            { id: 11, name: 'White Sneakers', color: 'white', type: 'casual', season: 'all', image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
            { id: 12, name: 'Black Dress Shoes', color: 'black', type: 'business', season: 'all', image: 'https://via.placeholder.com/200?text=Black+Dress' },
            { id: 13, name: 'Brown Loafers', color: 'brown', type: 'business', season: 'all', image: 'https://via.placeholder.com/200?text=Brown+Loafers' }
        ],
        accessories: [
            { id: 14, name: 'Leather Belt', color: 'brown', type: 'business', season: 'all', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
            { id: 15, name: 'Baseball Cap', color: 'blue', type: 'casual', season: 'summer', image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
            { id: 16, name: 'Silk Tie', color: 'red', type: 'business', season: 'all', image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
            { id: 17, name: 'Silver Watch', color: 'silver', type: 'accessory', season: 'all', image: 'https://via.placeholder.com/200?text=Silver+Watch' }
        ]
    };

    // Enhanced render function with item details overlay
    function renderWardrobeItems(category) {
        wardrobeItems.innerHTML = '';
        const items = wardrobeData[category] || [];
        
        items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'wardrobe-item';
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="item-overlay">
                    <h4>${item.name}</h4>
                    <p>Color: ${item.color}</p>
                    <p>Type: ${item.type}</p>
                    <p>Season: ${item.season}</p>
                    <div class="item-actions">
                        <button class="btn small edit-btn" data-id="${item.id}">Edit</button>
                        <button class="btn small delete-btn" data-id="${item.id}">Delete</button>
                    </div>
                </div>
            `;
            wardrobeItems.appendChild(itemElement);
        });

        // Add event listeners for the new buttons
        document.querySelectorAll('.edit-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const itemId = parseInt(e.target.dataset.id);
                editItem(itemId);
            });
        });

        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const itemId = parseInt(e.target.dataset.id);
                deleteItem(itemId, category);
            });
        });
    }

    function editItem(itemId) {
        // Find the item in any category
        let itemToEdit = null;
        let category = '';
        
        for (const cat in wardrobeData) {
            const foundItem = wardrobeData[cat].find(item => item.id === itemId);
            if (foundItem) {
                itemToEdit = foundItem;
                category = cat;
                break;
            }
        }
        
        if (!itemToEdit) return;

        // In a real app, you would show a modal with a form to edit the item
        const newName = prompt('Edit item name:', itemToEdit.name);
        if (newName !== null) {
            itemToEdit.name = newName;
            renderWardrobeItems(category);
        }
    }

    function deleteItem(itemId, category) {
        if (confirm('Are you sure you want to delete this item?')) {
            wardrobeData[category] = wardrobeData[category].filter(item => item.id !== itemId);
            renderWardrobeItems(category);
        }
    }

    // Set default tab
    tabButtons[0].classList.add('active');
    renderWardrobeItems('shirts');

    // Tab switching
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            renderWardrobeItems(button.dataset.category);
        });
    });

    // Upload functionality
    const uploadBtn = document.querySelector('.upload-btn');
    const fileInput = document.getElementById('clothing-upload');

    uploadBtn.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', function(e) {
        if (this.files && this.files.length > 0) {
            const file = this.files[0];
            
            // Validate image type
            if (!file.type.match('image.*')) {
                alert('Please select an image file (JPEG, PNG, etc.)');
                return;
            }
            
            // Create object URL for preview
            const imageUrl = URL.createObjectURL(file);
            
            // For demo purposes, we'll add the uploaded image to the wardrobe
            const activeTab = document.querySelector('.tab-btn.active');
            const category = activeTab.dataset.category;
            
            const newItem = {
                id: Date.now(),
                name: `Uploaded ${category.slice(0, -1)}`,
                color: 'unknown',
                type: 'casual',
                season: 'all',
                image: imageUrl
            };
            
            if (!wardrobeData[category]) {
                wardrobeData[category] = [];
            }
            
            wardrobeData[category].push(newItem);
            renderWardrobeItems(category);
            
            // Reset the file input
            this.value = '';
        }
    });

    // Form submission for adding new items
    const addItemForm = document.querySelector('#add-item-form');
    if (addItemForm) {
        addItemForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const newItem = {
                id: Date.now(),
                name: formData.get('name'),
                color: formData.get('color'),
                type: formData.get('type'),
                season: formData.get('season') || 'all',
                image: formData.get('image-url') || 'https://via.placeholder.com/200'
            };
            
            const category = formData.get('category');
            if (!wardrobeData[category]) {
                wardrobeData[category] = [];
            }
            wardrobeData[category].push(newItem);
            
            // Update the display
            const activeTab = document.querySelector('.tab-btn.active');
            renderWardrobeItems(activeTab.dataset.category);
            
            // Reset form
            this.reset();
            
            // Show success message
            const successMsg = document.createElement('div');
            successMsg.className = 'success-message';
            successMsg.textContent = 'Item added successfully!';
            this.appendChild(successMsg);
            
            setTimeout(() => {
                successMsg.remove();
            }, 3000);
        });
    }

    // ======================================================================
    // IMPROVED OUTFIT GENERATION CODE STARTS HERE
    // ======================================================================

    // Outfit Generation with Improved Matching Logic
    const generateBtn = document.querySelector('.generate-btn');
    const occasionSelect = document.getElementById('occasion-select');
    const seasonSelect = document.getElementById('season-select') || { value: 'all' }; // Fallback
    const outfitGrid = document.querySelector('.outfit-grid');
    const loadingSpinner = document.querySelector('.loading-spinner');

    // More flexible color compatibility rules
    const colorCompatibility = {
        white: ['black', 'blue', 'gray', 'beige', 'brown', 'navy', 'khaki', 'denim'],
        black: ['white', 'gray', 'red', 'blue', 'pink', 'silver'],
        blue: ['white', 'black', 'gray', 'beige', 'brown', 'khaki', 'navy'],
        gray: ['white', 'black', 'blue', 'pink', 'red', 'navy'],
        beige: ['white', 'blue', 'brown', 'black', 'navy', 'olive'],
        brown: ['white', 'blue', 'beige', 'green', 'cream'],
        red: ['white', 'black', 'gray', 'navy', 'khaki'],
        multicolor: ['white', 'black', 'denim'],
        silver: ['black', 'white', 'blue', 'gray'],
        unknown: ['white', 'black', 'gray', 'blue', 'beige']
    };

    // More flexible style compatibility
    const styleCompatibility = {
        business: ['business', 'formal', 'smart casual'],
        casual: ['casual', 'sport', 'smart casual'],
        formal: ['business', 'formal'],
        'smart casual': ['business', 'casual']
    };

    function getCompatibleItems(category, occasion, season, colorToMatch = null, styleToMatch = null, attempt = 0) {
        let items = [];
        
        if (wardrobeData[category]) {
            items = wardrobeData[category];
        }
        
        // First attempt - strict matching
        let filteredItems = items.filter(item => {
            const styleMatch = !styleToMatch || 
                             (styleCompatibility[item.type] && 
                              styleCompatibility[item.type].includes(styleToMatch));
            
            const colorMatch = !colorToMatch || 
                              (colorCompatibility[colorToMatch]?.includes(item.color) || 
                              colorCompatibility[item.color]?.includes(colorToMatch) ||
                              item.color === 'unknown' || 
                              colorToMatch === 'unknown');
            
            return (item.type === occasion || 
                   (styleCompatibility[item.type] && 
                    styleCompatibility[item.type].includes(occasion))) &&
                   (item.season === season || item.season === 'all') &&
                   styleMatch &&
                   colorMatch;
        });
        
        // If no results and we're on first attempt, try relaxing color matching
        if (filteredItems.length === 0 && attempt === 0) {
            return getCompatibleItems(category, occasion, season, colorToMatch, styleToMatch, 1);
        }
        
        // If still no results, try relaxing style matching
        if (filteredItems.length === 0 && attempt === 1) {
            filteredItems = items.filter(item => {
                return (item.type === occasion || 
                       (styleCompatibility[item.type] && 
                        styleCompatibility[item.type].includes(occasion))) &&
                       (item.season === season || item.season === 'all');
            });
        }
        
        return filteredItems;
    }

    function generateOutfit(occasion, season) {
        // Try strict matching first
        let shirt = findBestItem('shirts', occasion, season);
        if (!shirt) return null;
        
        let pant = findBestItem('pants', occasion, season, shirt.color, shirt.type);
        if (!pant) {
            // If pants don't match shirt exactly, try without color matching
            pant = findBestItem('pants', occasion, season, null, shirt.type);
            if (!pant) return null;
        }
        
        let shoe = findBestItem('shoes', occasion, season, pant.color, pant.type);
        if (!shoe) {
            shoe = findBestItem('shoes', occasion, season, null, pant.type);
            if (!shoe) return null;
        }
        
        // Accessories are optional
        let accessory = findBestItem('accessories', occasion, season, shirt.color, shirt.type);
        
        return {
            name: `${occasion.charAt(0).toUpperCase() + occasion.slice(1)} Outfit`,
            description: `Perfect for ${occasion} occasions in ${season}`,
            items: [shirt, pant, shoe, accessory].filter(Boolean)
        };
    }

    function findBestItem(category, occasion, season, colorToMatch = null, styleToMatch = null) {
        const items = getCompatibleItems(category, occasion, season, colorToMatch, styleToMatch);
        if (items.length === 0) return null;
        return items[Math.floor(Math.random() * items.length)];
    }

    generateBtn.addEventListener('click', function() {
        const occasion = occasionSelect.value;
        const season = seasonSelect.value || 'all'; // Default to 'all' if no season select
        
        loadingSpinner.style.display = 'block';
        outfitGrid.innerHTML = '';
        
        setTimeout(() => {
            loadingSpinner.style.display = 'none';
            
            // Generate 3 outfits
            const outfits = [];
            let attempts = 0;
            const maxAttempts = 10;
            
            while (outfits.length < 3 && attempts < maxAttempts) {
                attempts++;
                const outfit = generateOutfit(occasion, season);
                if (outfit) {
                    // Basic uniqueness check
                    const outfitKey = outfit.items.map(i => i.id).join('-');
                    const isUnique = !outfits.some(o => o.items.map(i => i.id).join('-') === outfitKey);
                    
                    if (isUnique) {
                        outfits.push(outfit);
                    }
                }
            }
            
            if (outfits.length === 0) {
                outfitGrid.innerHTML = `
                    <div class="no-outfits">
                        <p>No complete outfits found for ${occasion} in ${season}.</p>
                        <p>Try adding more clothes or selecting a different occasion/season.</p>
                    </div>
                `;
                return;
            }
            
            // Display the generated outfits
            outfits.forEach(outfit => {
                const outfitCard = createOutfitCard(outfit);
                outfitGrid.appendChild(outfitCard);
            });
        }, 1000);
    });

    function createOutfitCard(outfit) {
        const outfitCard = document.createElement('div');
        outfitCard.className = 'outfit-card';
        
        const mainImage = outfit.items[0].image;
        const thumbnails = outfit.items.map(item => 
            `<img src="${item.image}" alt="${item.name}" title="${item.name}" class="outfit-thumbnail">`
        ).join('');
        
        const itemList = outfit.items.map(item => 
            `<li>${item.name} (${item.color}, ${item.type})</li>`
        ).join('');
        
        outfitCard.innerHTML = `
            <img src="${mainImage}" alt="${outfit.name}" class="outfit-main-image">
            <div class="outfit-details">
                <h4>${outfit.name}</h4>
                <p class="outfit-description">${outfit.description}</p>
                <div class="outfit-items">
                    <p><strong>Includes:</strong></p>
                    <ul>${itemList}</ul>
                    <div class="outfit-thumbnails">${thumbnails}</div>
                </div>
                <div class="outfit-actions">
                    <button class="btn secondary save-outfit">Save</button>
                    <button class="btn primary view-details">View Details</button>
                </div>
            </div>
        `;
        
        outfitCard.querySelector('.save-outfit').addEventListener('click', () => {
            alert(`Outfit "${outfit.name}" saved to your favorites!`);
        });
        
        outfitCard.querySelector('.view-details').addEventListener('click', () => {
            const details = outfit.items.map(item => 
                `${item.name} - Color: ${item.color}, Type: ${item.type}, Season: ${item.season}`
            ).join('\n\n');
            
            alert(`Outfit Details:\n\n${outfit.description}\n\nItems:\n\n${details}`);
        });
        
        return outfitCard;
    }

    // ======================================================================
    // IMPROVED OUTFIT GENERATION CODE ENDS HERE
    // ======================================================================

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                navLinks.classList.remove('active');
                authButtons.classList.remove('active');
            }
        });
    });

    // Get Started button
    document.querySelector('.get-started').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.outfit-generator').scrollIntoView({
            behavior: 'smooth'
        });
    });
});