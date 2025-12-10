// Presentation data for pietisme og protestantiske bevegelser
const themes = {
    intro: {
        title: "Pietismen: En personlig vekkelse",
        subtitle: "Protestantiske bevegelser og organisasjoner fra 1600-tallet til i dag",
        content: `
            <p class="lead">Pietismen var en vekkelsesbevegelse innen protestantismen som la vekt på personlig tro, inderlighet og et hellig liv, i motsetning til dogmatisk teologi og kirkelig formalisme.</p>
            
            <div class="key-points">
                <div class="point">
                    <i class="fas fa-heart"></i>
                    <h3>Personlig omvendelse</h3>
                    <p>Vektlegging av den enkeltes personlige forhold til Gud og omvendelsesopplevelse. Troen skulle være et hjerteanliggende, ikke bare en intellektuell trosbekjennelse.</p>
                </div>
                <div class="point">
                    <i class="fas fa-users"></i>
                    <h3>Samfunnsliv</h3>
                    <p>Dannelse av små fellesskap for bønn, bibelstudium og fellesskap (collegia pietatis). Disse møtene skapte et alternativt fromhetsliv utenom den offisielle kirken.</p>
                </div>
                <div class="point">
                    <i class="fas fa-hands-helping"></i>
                    <h3>Praktisk kristendom</h3>
                    <p>Fokus på kjærlighetsgjerninger, misjon og sosialt ansvar i samfunnet. Troen skulle vise seg i handling, ikke bare i ord og gudstjenester.</p>
                </div>
            </div>
            
            <div class="highlight">
                <h4><i class="fas fa-lightbulb"></i> Historisk kontekst</h4>
                <p>Pietismen oppsto som en reaksjon mot ortodoksi og formalisme i lutherske kirker etter reformasjonen. Bevegelsen blomstret spesielt i Tyskland på 1600- og 1700-tallet.</p>
            </div>
            
            <div class="quote">
                <i class="fas fa-quote-left"></i>
                <p>"Kjærligheten til Gud og næsten må vise seg i handling, ikke bare i ord." – Philipp Spener</p>
                <i class="fas fa-quote-right"></i>
            </div>
        `
    },
    spener: {
        title: "Philipp Spener",
        subtitle: "Herrnhut-pietismens far og reformator",
        content: `
            <p class="lead">Philipp Jakob Spener (1635-1705) regnes som pietismens grunnlegger med sitt programskrift "Pia Desideria" fra 1675.</p>
            
            <div class="reformer-details">
                <div class="detail-card">
                    <h3><i class="fas fa-book"></i> Pia Desideria (1675)</h3>
                    <p>Speners hovedverk som la fram et sekspunkts program for kirkelig fornyelse. Han ønsket større bibelkunnskap blant legfolket og regelmessige bibelstudiegrupper.</p>
                </div>
                
                <div class="detail-card">
                    <h3><i class="fas fa-users"></i> Collegia Pietatis</h3>
                    <p>Spener organiserte private fromhetsmøter (bønne- og bibelselskaper) i sitt hjem. Disse ble modellen for pietistiske fellesskap over hele Europa.</p>
                </div>
                
                <div class="detail-card">
                    <h3><i class="fas fa-graduation-cap"></i> Teologisk utdanning</h3>
                    <p>Som senior i Berlin arbeidet Spener for å reformere prestestanden gjennom utdanning. Han mente prester først og fremst skulle være fromme sjelesørgere.</p>
                </div>
            </div>
            
            <div class="highlight">
                <h4><i class="fas fa-bullseye"></i> Speners reformprogram:</h4>
                <p>1. Økt bibelstudium i menighetene<br>
                2. Gjenopprettelse av allmennprestedømmet<br>
                3. At kristendommen skal praktiseres i kjærlighet<br>
                4. Mildere holdning i religiøse disputter<br>
                5. Reform av teologistudiet<br>
                6. Prekener som fører til from praktikk</p>
            </div>
            
            <div class="quote">
                <i class="fas fa-quote-left"></i>
                <p>"Det er ikke nok å vite hva som er rett – man må også gjøre det." – Philipp Spener</p>
                <i class="fas fa-quote-right"></i>
            </div>
        `
    },
    zinzendorf: {
        title: "Nikolaus Zinzendorf",
        subtitle: "Herrnhut-bevegelsen og den tidlige protestantiske misjon",
        content: `
            <p class="lead">Nikolaus Ludwig von Zinzendorf (1700-1760) ledet herrnhuterne (moravianerne) og ble en pioner i protestantisk misjonsarbeid.</p>
            
            <div class="reformer-details">
                <div class="detail-card">
                    <h3><i class="fas fa-globe"></i> Herrnhut-kolonien</h3>
                    <p>På sitt gods i Sachsen etablerte Zinzendorf en religiøs koloni for protestantiske flyktninger fra Mähren (1722). Dette ble sentrum for herrnhuterbevegelsen.</p>
                </div>
                
                <div class="detail-card">
                    <h3><i class="fas fa-pray"></i> Hjertetro og følelse</h3>
                    <p>Zinzendorf la vekt på følelsesmessig, personlig tro (hjertetro). Han utviklet et eget religiøst språk med mange kjærlighetsuttrykk om Jesus.</p>
                </div>
                
                <div class="detail-card">
                    <h3><i class="fas fa-ship"></i> Misjonspioner</h3>
                    <p>Herrnhuterne ble de første protestantiske misjonærene. De reiste til Grønland, Karibia, Sør-Afrika og Nord-Amerika for å forkynne evangeliet.</p>
                </div>
            </div>
            
            <div class="highlight">
                <h4><i class="fas fa-map-marked-alt"></i> Herrnhut-misjonens rekkevidde:</h4>
                <p>• Grønland (1733)<br>
                • De karibiske øyer (1732)<br>
                • Sør-Afrika (1737)<br>
                • Nord-Amerika (1740)<br>
                • Labrador (1771)<br>
                I løpet av 1700-tallet sendte den lille herrnhut-kolonien ut over 300 misjonærer.</p>
            </div>
            
            <div class="quote">
                <i class="fas fa-quote-left"></i>
                <p>"Jeg har bare én lidenskap: Det er Han, bare Han." – Zinzendorf om Jesus</p>
                <i class="fas fa-quote-right"></i>
            </div>
        `
    },
    hauge: {
        title: "Hans Nielsen Hauge",
        subtitle: "Norsk haugianisme og folkelig vekkelse",
        content: `
            <p class="lead">Hans Nielsen Hauge (1771-1824) ledet den første store norske vekkelsen og la grunnlaget for moderne norsk kristenliv utenfor statskirken.</p>
            
            <div class="reformer-details">
                <div class="detail-card">
                    <h3><i class="fas fa-bolt"></i> Opplevelsen i 1796</h3>
                    <p>Med 25 år hadde Hauge en sterk religiøs opplevelse som fikk ham til å reise rundt og forkynne. Han brøt med tanken om at bare prester kunne forkynne.</p>
                </div>
                
                <div class="detail-card">
                    <h3><i class="fas fa-book"></i> Forfatterskap</h3>
                    <p>Hauge skrev over 30 bøker og småskrifter på folkelig norsk. Hans skrifter nådde ut til vanlige folk og spilte en stor rolle i leseopplæringen.</p>
                </div>
                
                <div class="detail-card">
                    <h3><i class="fas fa-industry"></i> Økonomisk virke</h3>
                    <p>Hauge etablerte flere bedrifter (møller, verksteder, trykkeri) for å skape arbeid og finansiere misjonsarbeidet. Dette var en del av hans praktiske kristendom.</p>
                </div>
            </div>
            
            <div class="highlight">
                <h4><i class="fas fa-gavel"></i> Konflikt med myndighetene:</h4>
                <p>Hauge ble arrestert i 1804 for å ha brutt konventikkelplakaten som forbød legpredikanter. Han satt fengslet til 1814, mye i isolasjon. Likevel fortsatte haugianismen å vokse og ble en sosial og religiøs folkebevegelse.</p>
            </div>
            
            <div class="quote">
                <i class="fas fa-quote-left"></i>
                <p>"Guds Ånd kaller ikke bare prester, men alle troende til å forkynne evangeliet." – Hans Nielsen Hauge</p>
                <i class="fas fa-quote-right"></i>
            </div>
        `
    },
    metodisme: {
        title: "Metodismen",
        subtitle: "John Wesley og den evangeliske vekkelsen i England",
        content: `
            <p class="lead">Metodismen var en evangelisk vekkelsesbevegelse innen den engelske kirke på 1700-tallet, startet av brødrene John og Charles Wesley.</p>
            
            <div class="reformer-details">
                <div class="detail-card">
                    <h3><i class="fas fa-heart-crack"></i> Aldersgate-opplevelsen</h3>
                    <p>John Wesley hadde en omvendelsesopplevelse i 1738 da han følte sitt hjerte "på merkeliig vis varmet". Dette ble starten på hans forkynnelsesvirke.</p>
                </div>
                
                <div class="detail-card">
                    <h3><i class="fas fa-road"></i> Feltpreken og organisasjon</h3>
                    <p>Wesley begynte å holde prekener under åpen himmel for å nå arbeiderklassen. Han organiserte troende i smågrupper ("klasser") for oppfølging og disippeltrening.</p>
                </div>
                
                <div class="detail-card">
                    <h3><i class="fas fa-music"></i> Sang og salmer</h3>
                    <p>Charles Wesley skrev over 6000 salmer som formidlet metodismens budskap. Sangene gjorde teologien tilgjengelig for vanlige folk.</p>
                </div>
            </div>
            
            <div class="highlight">
                <h4><i class="fas fa-chart-line"></i> Metodismens vekst og innflytelse:</h4>
                <p>• Ved Wesleys død (1791): 72 000 medlemmer i Storbritannia, 60 000 i USA<br>
                • Metodismen nådde arbeiderklassen som statskirken ikke nådde<br>
                • Bidro til sosial reform (mot slavehandel, for utdanning)<br>
                • Påvirket senere vekkelsesbevegelser og pinsbevegelsen</p>
            </div>
            
            <div class="quote">
                <i class="fas fa-quote-left"></i>
                <p>"Verden er min menighet." – John Wesleys forkynnelsesmotto</p>
                <i class="fas fa-quote-right"></i>
            </div>
        `
    },
    arv: {
        title: "Pietismens Arv",
        subtitle: "Påvirkning på moderne protestantisme og samfunn",
        content: `
            <p class="lead">Pietismens vekt på personlig tro, vekkelse og praktisk kristendom har hatt varig innflytelse på protestantismen og moderne samfunn.</p>
            
            <div class="reformer-details">
                <div class="detail-card">
                    <h3><i class="fas fa-church"></i> Frimenighetsbevegelsen</h3>
                    <p>Pietismen la grunnlaget for frimenighetsbevegelser og frikirker som vokste frem på 1800- og 1900-tallet. Disse satte personlig tro og omvendelse i sentrum.</p>
                </div>
                
                <div class="detail-card">
                    <h3><i class="fas fa-globe-americas"></i> Evangelikalisme</h3>
                    <p>Moderne evangelikalisme med vekt på personlig omvendelse, bibelens autoritet og misjon har røtter i pietistisk teologi og praksis.</p>
                </div>
                
                <div class="detail-card">
                    <h3><i class="fas fa-hands-helping"></i> Sosialt engasjement</h3>
                    <p>Pietismens fokus på praktisk kristendom førte til diakonalt arbeid, misjon og sosialt engasjement som har påvirket moderne velferdssamfunn.</p>
                </div>
            </div>
            
            <div class="highlight">
                <h4><i class="fas fa-list-check"></i> Pietismens varige bidrag:</h4>
                <p>✓ Personlig tro og omvendelse som sentralt<br>
                ✓ Smågrupper og fellesskap (hjemmemøter)<br>
                ✓ Laitt forkynnelse (legpredikanter)<br>
                ✓ Bibelens sentrale plass i trosopplæring<br>
                ✓ Misjon og evangelisering som kristen plikt<br>
                ✓ Sosialt ansvar og diakoni<br>
                ✓ Kritikk av kirkelig formalisme</p>
            </div>
            
            <div class="quote">
                <i class="fas fa-quote-left"></i>
                <p>"Pietismens arv lever videre i moderne protestantisme som en påminnelse om at tro må leve i hjerte og handling."</p>
                <i class="fas fa-quote-right"></i>
            </div>
        `
    }
};

// Presentation state
let currentTheme = 'intro';
let currentSlide = 1;
let totalSlides = 6;
let isFullscreen = false;
let startTime = Date.now();

// DOM elements
const contentEl = document.getElementById('content');
const currentSlideEl = document.getElementById('current-slide');
const totalSlidesEl = document.getElementById('total-slides');
const progressBarEl = document.getElementById('progress-bar');
const timelineProgressEl = document.getElementById('timeline-progress');
const themeIndicatorEl = document.getElementById('theme-indicator');
const currentTimeEl = document.getElementById('current-time');

// Initialize presentation
function initPresentation() {
    totalSlidesEl.textContent = totalSlides;
    updateSlideCounter();
    updateProgressBar();
    updateTimeline();
    updateTime();
    setInterval(updateTime, 1000);
    
    // Initialize with intro theme
    loadTheme('intro');
}

// Load theme with presentation effects
function loadTheme(theme, direction = 'right') {
    currentTheme = theme;
    
    // Update active nav item
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    const navItem = document.querySelector(`[onclick="loadTheme('${theme}')"]`);
    if (navItem) {
        navItem.classList.add('active');
    }
    
    // Determine slide number
    const slideMap = {
        'intro': 1, 'spener': 2, 'zinzendorf': 3, 
        'hauge': 4, 'metodisme': 5, 'arv': 6
    };
    currentSlide = slideMap[theme];
    
    // Animation classes
    const slideContainer = document.querySelector('.slide');
    if (slideContainer) {
        slideContainer.classList.remove('active');
        
        // Add direction-based animation
        slideContainer.style.animation = direction === 'right' 
            ? 'slideInFromRight 0.8s ease-out' 
            : 'slideInFromLeft 0.8s ease-out';
        
        setTimeout(() => {
            // Update content
            const themeData = themes[theme];
            if (contentEl && themeData) {
                contentEl.innerHTML = `
                    <div class="slide-header">
                        <h1 class="slide-title">${themeData.title}</h1>
                        <div class="slide-subtitle">${themeData.subtitle}</div>
                    </div>
                    <div class="slide-content">
                        ${themeData.content}
                    </div>
                `;
            }
            
            // Update UI
            updateSlideCounter();
            updateProgressBar();
            updateTimeline();
            updateThemeIndicator();
            
            // Re-add active class with animation
            setTimeout(() => {
                if (slideContainer) {
                    slideContainer.classList.add('active');
                    slideContainer.style.animation = 'fadeInUp 0.8s ease-out';
                }
            }, 50);
        }, 400);
    }
}

// Navigation functions
function nextSlide() {
    const themeOrder = ['intro', 'spener', 'zinzendorf', 'hauge', 'metodisme', 'arv'];
    const currentIndex = themeOrder.indexOf(currentTheme);
    if (currentIndex < themeOrder.length - 1) {
        loadTheme(themeOrder[currentIndex + 1], 'right');
    } else {
        loadTheme('intro', 'right');
    }
}

function prevSlide() {
    const themeOrder = ['intro', 'spener', 'zinzendorf', 'hauge', 'metodisme', 'arv'];
    const currentIndex = themeOrder.indexOf(currentTheme);
    if (currentIndex > 0) {
        loadTheme(themeOrder[currentIndex - 1], 'left');
    } else {
        loadTheme('arv', 'left');
    }
}

// UI update functions
function updateSlideCounter() {
    if (currentSlideEl) {
        currentSlideEl.textContent = currentSlide;
    }
}

function updateProgressBar() {
    if (progressBarEl) {
        const progress = (currentSlide / totalSlides) * 100;
        progressBarEl.style.width = `${progress}%`;
    }
}

function updateTimeline() {
    if (timelineProgressEl) {
        const progress = ((currentSlide - 1) / (totalSlides - 1)) * 100;
        timelineProgressEl.style.width = `${progress}%`;
    }
}

function updateThemeIndicator() {
    if (themeIndicatorEl) {
        const colors = {
            'intro': '#339',
            'spener': '#d35400',
            'zinzendorf': '#2980b9',
            'hauge': '#27ae60',
            'metodisme': '#8e44ad',
            'arv': '#34495e'
        };
        themeIndicatorEl.style.background = colors[currentTheme] || '#339';
    }
}

function updateTime() {
    if (currentTimeEl) {
        const elapsed = Date.now() - startTime;
        const minutes = Math.floor(elapsed / 60000);
        const seconds = Math.floor((elapsed % 60000) / 1000);
        currentTimeEl.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}

// Toggle fullscreen
function toggleFullscreen() {
    const elem = document.documentElement;
    
    if (!isFullscreen) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
        document.body.classList.add('fullscreen');
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        document.body.classList.remove('fullscreen');
    }
    
    isFullscreen = !isFullscreen;
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'ArrowRight':
        case ' ':
            e.preventDefault();
            nextSlide();
            break;
        case 'ArrowLeft':
            e.preventDefault();
            prevSlide();
            break;
        case 'f':
        case 'F':
            toggleFullscreen();
            break;
    }
});

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    initPresentation();
    
    // Button events
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (fullscreenBtn) fullscreenBtn.addEventListener('click', toggleFullscreen);
    
    // Also add click events to nav items dynamically
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function() {
            const theme = this.getAttribute('onclick');
            if (theme) {
                const themeName = theme.match(/loadTheme\('(.+)'\)/)[1];
                loadTheme(themeName);
            }
        });
    });
});

// Fullscreen change event
document.addEventListener('fullscreenchange', () => {
    isFullscreen = !!document.fullscreenElement;
});

// Make loadTheme function available globally
window.loadTheme = loadTheme;
