// Language data structure
const languageData = {
    template: {
        code: '',
        flag: '',
        name: '',
        native: '',
        speakers: '',
        countries: '',
        categories: {
            basics: [
                { native: '', translation: 'Hello', audioFile: '.mp3' },
                { native: '', translation: 'Goodbye', audioFile: '.mp3' },
                { native: '', translation: 'Yes', audioFile: '.mp3' },
                { native: '', translation: 'No', audioFile: '.mp3' },
                { native: '', translation: 'Please', audioFile: '.mp3' },
                { native: '', translation: 'Thank you', audioFile: '.mp3' }
            ],
            greetings: [
                { native: '', translation: 'Good morning', audioFile: '.mp3' },
                { native: '', translation: 'Good afternoon', audioFile: '.mp3' },
                { native: '', translation: 'Good evening', audioFile: '.mp3' },
                { native: '', translation: 'How are you?', audioFile: '.mp3' },
                { native: '', translation: 'Very well', audioFile: '.mp3' },
                { native: '', translation: 'And you?', audioFile: '.mp3' }
            ],
            courtesy: [
                { native: '', translation: 'Excuse me', audioFile: '.mp3' },
                { native: '', translation: 'I\'m sorry', audioFile: '.mp3' },
                { native: '', translation: 'You\'re welcome', audioFile: '.mp3' },
                { native: '', translation: 'Excuse me (to pass)', audioFile: '.mp3' }
            ],
            numbers: [
                { native: '', translation: 'One', audioFile: '.mp3' },
                { native: '', translation: 'Two', audioFile: '.mp3' },
                { native: '', translation: 'Three', audioFile: '.mp3' },
                { native: '', translation: 'Four', audioFile: '.mp3' },
                { native: '', translation: 'Five', audioFile: '.mp3' },
                { native: '', translation: 'Six', audioFile: '.mp3' },
                { native: '', translation: 'Seven', audioFile: '.mp3' },
                { native: '', translation: 'Eight', audioFile: '.mp3' },
                { native: '', translation: 'Nine', audioFile: '.mp3' },
                { native: '', translation: 'Ten', audioFile: '.mp3' }
            ],
            time: [
                { native: '', translation: 'What time is it?', audioFile: '.mp3' },
                { native: '', translation: 'It\'s one o\'clock', audioFile: '.mp3' },
                { native: '', translation: 'It\'s two o\'clock', audioFile: '.mp3' },
                { native: '', translation: 'Today', audioFile: '.mp3' },
                { native: '', translation: 'Tomorrow', audioFile: '.mp3' }
            ],
            food: [
                { native: '', translation: 'Water', audioFile: '.mp3' },
                { native: '', translation: 'Bread', audioFile: '.mp3' },
                { native: '', translation: 'Meat', audioFile: '.mp3' },
                { native: '', translation: 'Fish', audioFile: '.mp3' },
                { native: '', translation: 'Fruit', audioFile: '.mp3' }
            ]
        }
    },

    spanish: {
        code: 'spanish',
        flag: '🇪🇸',
        name: 'Spanish',
        native: 'Español',
        speakers: '496M',
        countries: '20',
        categories: {
            basics: [
                { native: 'Hola', translation: 'Hello', audioFile: 'hola.mp3' },
                { native: 'Adiós', translation: 'Goodbye', audioFile: 'adios.mp3' },
                { native: 'Sí', translation: 'Yes', audioFile: 'si.mp3' },
                { native: 'No', translation: 'No', audioFile: 'no.mp3' },
                { native: 'Por favor', translation: 'Please', audioFile: 'por_favor.mp3' },
                { native: 'Gracias', translation: 'Thank you', audioFile: 'gracias.mp3' }
            ],
            greetings: [
                { native: 'Buenos días', translation: 'Good morning', audioFile: 'buenos_dias.mp3' },
                { native: 'Buenas tardes', translation: 'Good afternoon', audioFile: 'buenas_tardes.mp3' },
                { native: 'Buenas noches', translation: 'Good evening', audioFile: 'buenas_noches.mp3' },
                { native: '¿Cómo estás?', translation: 'How are you?', audioFile: 'como_estas.mp3' },
                { native: 'Muy bien', translation: 'Very well', audioFile: 'muy_bien.mp3' },
                { native: '¿Y tú?', translation: 'And you?', audioFile: 'y_tu.mp3' }
            ],
            courtesy: [
                { native: 'Disculpe', translation: 'Excuse me', audioFile: 'disculpe.mp3' },
                { native: 'Lo siento', translation: 'I\'m sorry', audioFile: 'lo_siento.mp3' },
                { native: 'De nada', translation: 'You\'re welcome', audioFile: 'de_nada.mp3' },
                { native: 'Con permiso', translation: 'Excuse me (to pass)', audioFile: 'con_permiso.mp3' }
            ],
            numbers: [
                { native: 'Uno', translation: 'One', audioFile: 'uno.mp3' },
                { native: 'Dos', translation: 'Two', audioFile: 'dos.mp3' },
                { native: 'Tres', translation: 'Three', audioFile: 'tres.mp3' },
                { native: 'Cuatro', translation: 'Four', audioFile: 'cuatro.mp3' },
                { native: 'Cinco', translation: 'Five', audioFile: 'cinco.mp3' },
                { native: 'Seis', translation: 'Six', audioFile: 'seis.mp3' },
                { native: 'Siete', translation: 'Seven', audioFile: 'siete.mp3' },
                { native: 'Ocho', translation: 'Eight', audioFile: 'ocho.mp3' },
                { native: 'Nueve', translation: 'Nine', audioFile: 'nueve.mp3' },
                { native: 'Diez ', translation: 'Ten', audioFile: 'diez.mp3' }
            ],
            time: [
                { native: '¿Qué hora es?', translation: 'What time is it?', audioFile: 'que_hora_es.mp3' },
                { native: 'Es la una', translation: 'It\'s one o\'clock', audioFile: 'es_la_una.mp3' },
                { native: 'Son las dos', translation: 'It\'s two o\'clock', audioFile: 'son_las_dos.mp3' },
                { native: 'Hoy', translation: 'Today', audioFile: 'hoy.mp3' },
                { native: 'Mañana', translation: 'Tomorrow', audioFile: 'manana.mp3' }
            ],
            food: [
                { native: 'Agua', translation: 'Water', audioFile: 'agua.mp3' },
                { native: 'Pan', translation: 'Bread', audioFile: 'pan.mp3' },
                { native: 'Carne', translation: 'Meat', audioFile: 'carne.mp3' },
                { native: 'Pescado', translation: 'Fish', audioFile: 'pescado.mp3' },
                { native: 'Fruta', translation: 'Fruit', audioFile: 'fruta.mp3' }
            ]
        }
    }
};

// Audio system
let currentLanguageCode = '';

function playAudio(languageCode, audioFile) {
    const audioPath = `../../assets/audio/${languageCode}/${audioFile}`;
    const audio = new Audio(audioPath);
    
    // Add error handling for missing audio files
    audio.onerror = function() {
        console.warn(`Audio file not found: ${audioPath}`);
    };
    
    audio.onloadstart = function() {
        // Show loading state if needed
        console.log(`Loading audio: ${audioFile}`);
    };
    
    audio.play().catch(error => {
        console.warn(`Could not play audio: ${error.message}`);
        showAudioNotification('Audio file not found');
    });
}

function showAudioNotification(message) {
    // Create a subtle notification for audio issues
    const notification = document.createElement('div');
    notification.className = 'audio-notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Remove notification after 2 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.parentElement.removeChild(notification);
        }
    }, 2000);
}

// Function to generate language page content
function initLanguagePage(languageCode) {
    const data = languageData[languageCode];
    if (!data) return;
    
    // Store current language code for audio playback
    currentLanguageCode = languageCode;
    
    // Update page title
    document.title = `helloworld - ${data.name}`;
    
    // Generate header
    const header = document.querySelector('.language-header');
    if (header) {
        header.innerHTML = `
            <div class="language-title">
                <span class="language-flag-large">${data.flag}</span>
                <div class="language-info">
                    <h1>${data.name}</h1>
                    <h2 class="native-name">${data.native}</h2>
                </div>
            </div>
            <div class="language-stats">
                <div class="stat-item">
                    <span class="stat-number">${data.speakers}</span>
                    <span class="stat-label">Native Speakers</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">${data.countries}</span>
                    <span class="stat-label">Countries</span>
                </div>
            </div>
        `;
    }
    
    // Generate categories sidebar
    const categoryList = document.querySelector('.category-list ul');
    if (categoryList) {
        const categoryNames = Object.keys(data.categories);
        categoryList.innerHTML = categoryNames.map(category => `
            <li><a href="#${category}" onclick="showCategory('${category}')">${capitalizeFirst(category)}</a></li>
        `).join('');
    }
    
    // Generate phrase sections
    const phraseSection = document.querySelector('.phrase-section');
    if (phraseSection) {
        const categoryNames = Object.keys(data.categories);
        phraseSection.innerHTML = categoryNames.map((category, index) => `
            <div class="category-content" id="${category}" ${index > 0 ? 'style="display: none;"' : ''}>
                <h2>${capitalizeFirst(category)}</h2>
                <div class="phrase-grid">
                    ${data.categories[category].map(phrase => `
                        <div class="phrase-card" onclick="playAudio('${languageCode}', '${phrase.audioFile}')" title="Click to hear pronunciation">
                            <div class="native">
                                ${phrase.native}
                            </div>
                            <div class="translation">${phrase.translation}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }
}

// Helper function to capitalize first letter
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function to show different categories
function showCategory(categoryId) {
    // Hide all categories
    const categories = document.querySelectorAll('.category-content');
    categories.forEach(category => {
        category.style.display = 'none';
    });
    
    // Show selected category
    const selectedCategory = document.getElementById(categoryId);
    if (selectedCategory) {
        selectedCategory.style.display = 'block';
    }
    
    // Update active state in sidebar
    const links = document.querySelectorAll('.category-list a');
    links.forEach(link => {
        link.classList.remove('active');
    });
    const activeLink = document.querySelector(`a[href="#${categoryId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}