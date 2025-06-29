const languages = [
    { code: 'arabic', flag: '🇸🇦', name: 'Arabic', native: 'العربية' },
    { code: 'bengali', flag: '🇧🇩', name: 'Bengali', native: 'বাংলা' },
    { code: 'chinese', flag: '🇨🇳', name: 'Chinese', native: '中文' },
    { code: 'danish', flag: '🇩🇰', name: 'Danish', native: 'Dansk' },
    { code: 'dutch', flag: '🇳🇱', name: 'Dutch', native: 'Nederlands' },
    { code: 'english', flag: '🇬🇧', name: 'English', native: 'English' },
    { code: 'finnish', flag: '🇫🇮', name: 'Finnish', native: 'Suomi' },
    { code: 'french', flag: '🇫🇷', name: 'French', native: 'Français' },
    { code: 'german', flag: '🇩🇪', name: 'German', native: 'Deutsch' },
    { code: 'hindi', flag: '🇮🇳', name: 'Hindi', native: 'हिन्दी' },
    { code: 'italian', flag: '🇮🇹', name: 'Italian', native: 'Italiano' },
    { code: 'japanese', flag: '🇯🇵', name: 'Japanese', native: '日本語' },
    { code: 'korean', flag: '🇰🇷', name: 'Korean', native: '한국어' },
    { code: 'norwegian', flag: '🇳🇴', name: 'Norwegian', native: 'Norsk' },
    { code: 'portuguese', flag: '🇵🇹', name: 'Portuguese', native: 'Português' },
    { code: 'russian', flag: '🇷🇺', name: 'Russian', native: 'Русский' },
    { code: 'spanish', flag: '🇪🇸', name: 'Spanish', native: 'Español' },
    { code: 'swedish', flag: '🇸🇪', name: 'Swedish', native: 'Svenska' },
    { code: 'thai', flag: '🇹🇭', name: 'Thai', native: 'ไทย' },
    { code: 'urdu', flag: '🇵🇰', name: 'Urdu', native: 'اردو' }
];

// Function to detect if we're in a language page (inside languages directory)
function isInLanguagesDirectory() {
    return window.location.pathname.includes('/languages/');
}

// Function to create the sidebar content
function createSidebar() {
    // Determine the correct path prefix based on current location
    const pathPrefix = isInLanguagesDirectory() ? '' : 'languages/';
    
    const sidebarHTML = `
        <div class="sidebar-overlay" onclick="closeSidebar()"></div>
        <aside class="sidebar" id="languageSidebar">
            <div class="sidebar-header">
                <h3>Languages</h3>
                <button class="close-btn" onclick="closeSidebar()">&times;</button>
            </div>
            <div class="sidebar-content">
                ${languages.map(language => `
                    <a href="${pathPrefix}${language.code}.html" class="sidebar-link">
                        <span class="flag">${language.flag}</span>
                        <span class="language-text">
                            <span class="language-name">${language.name}</span>
                            <span class="language-native">${language.native}</span>
                        </span>
                    </a>
                `).join('')}
            </div>
        </aside>
    `;
    document.body.insertAdjacentHTML('beforeend', sidebarHTML);
}

// Function to create the language grid for home page
function createLanguageGrid() {
    const languageGridContainer = document.getElementById('languageGrid');
    if (languageGridContainer) {
        const gridHTML = languages.map(language => `
            <a href="languages/${language.code}.html" class="language-card">
                <span class="flag">${language.flag}</span>
                <div class="language-text">
                    <span class="language-name">${language.name}</span>
                    <span class="language-native">${language.native}</span>
                </div>
            </a>
        `).join('');
        languageGridContainer.innerHTML = gridHTML;
    }
}

// Sidebar toggle functions
function toggleSidebar() {
    const sidebar = document.getElementById('languageSidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
    document.body.classList.toggle('sidebar-open');
}

function closeSidebar() {
    const sidebar = document.getElementById('languageSidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    document.body.classList.remove('sidebar-open');
}

// Initialize components when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    createSidebar();
    createLanguageGrid(); // This will only work if there's a languageGrid element
});