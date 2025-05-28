// ——————————————————————————————————————————
// ES Module Imports
// ——————————————————————————————————————————
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import gsap from 'https://unpkg.com/gsap@3.12.2/index.js'; // GSAP Core (ES module)
import { ScrollTrigger } from 'https://unpkg.com/gsap@3.12.2/ScrollTrigger.js'; // ScrollTrigger plugin (ES module)
import AOS from 'https://esm.sh/aos@2.3.4'; // AOS library (ES module from esm.sh)

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// ============================================================
// CV Data & Configuration
// ============================================================
const data = {
    name: "Emiliano Pizzuti",
    title: "Web Developer",
    contacts: {
        linkedin: "https://www.linkedin.com/in/emiliano-pizzuti-879715247",
        phone_number: "+39 366 973 90 30",
        Github: "https://github.com/emilianoPiz",
        email: "emilianopizzuti95@gmail.com",
    },
    professional_profile:
        "Sviluppatore con solida esperienza nell’ambito web, con un orientamento verso lo sviluppo front-end e un forte interesse per l’innovazione tecnologica. Attualmente studente di Informatica presso La Sapienza di Roma, possiedo una visione completa del ciclo di vita del software, dalla progettazione iniziale fino alla manutenzione e all’ottimizzazione continua. Desidero contribuire a progetti nati da zero, lavorando all’interno di un team coeso e strutturato, per migliorare costantemente le mie competenze e generare valore tangibile per l’azienda.",
    education: {
        diploma: {
            istituto: "Istituto tecnico professionale G. Falcone, Colleferro (RM)",
            indirizzo: "Indirizzo Informatico",
            votazione: "83/100",
        },
        universita:
            "Attualmente iscritto alla facoltà di Informatica presso La Sapienza di Roma, con competenze sviluppate in DSA, JAVA, Algebra Booleana, Python, OOAD, OOP, Progettazione di circuiti.",
    },
    certifications: [
        {
            name: "Angular Developer Certificate",
            provider: "Udemy",
            course_title: "Maximilian Schwarzmueller 'The Complete Angular Course'",
            skills:
                "Ho imparato come utilizzare Angular nelle versioni 8-14 e 14+ con un corso da più di 560 ore, imparando con successo la libreria RxJS, la comunicazione tra componenti, l'integrazione di librerie esterne in ambiente Angular, l'uso della CLI di Angular, l'uso dello state manager NgRx, il lifecycle dei componenti, lo sviluppo di applicazioni SSR e SPA, l'uso di Less e Sass per rendere il sito themizabile, il testing con Cypress, il deploy in produzione di un'applicazione Angular.",
        },
    ],
    experience: [
        {
            title: "Game Developer Junior",
            company: "Nemesis Games Studio",
            start_date: "11/2024",
            responsibilities: [
                "Sviluppo e porting di slot-machine web con PixiJS: implementando logiche di game loop e gestione avanzata dello stato di gioco tramite OOP.",
                "Ottimizzazione performance: gestione della memoria, rendering efficiente con sprite sheet, transizioni ed effetti particellari per realizzare grafiche interattive e garantire performance stabili su browser.",
                "Versioning & pair programming: adozione di Git Flow per controllo di versione e sessioni collaborative, favorendo condivisione delle conoscenze e qualita' del codice.",
                "Formazione continua: approfondimento di best practice su PixiJS, design pattern OOP e strumenti di profiling, per migliorare continuamente l’efficienza e la scalabilità dei giochi.",
                "Object Oriented Analysis and Design: studio preventivo dell’architettura software, definizione di classi, pattern e diagrammi UML per garantire un’implementazione scalabile e manutenibile.",
            ],
            note: "L’esperienza ha consentito di affrontare problematiche di performance e gestione della memoria, fornendo una solida base sulla programmazione e l'analisi orientata agli oggetti.",
        },
        {
            title: "Frontend Developer",
            company: "Sport-Tech S.R.L.",
            start_date: "01/2024",
            responsibilities: [
                "TypeScript avanzato: progettazione di componenti riutilizzabili e moduli organizzati in Angular, con tipizzazione approfondita tramite interfacce per garantire robustezza e manutenibilita'.",
                "Sviluppo client-side: realizzazione di interfacce con Symfony e Twig, focalizzate su performance, accessibilita' e UX, incluse pagine moderne con pagination e lazy loading.",
                "Sviluppo di API RESTful e integrazione con backend Spring.",
                "Componenti dinamici & filtri interattivi: creazione di tabelle dinamiche, card animate e filtri di ricerca con animazioni fluide, aumentando l’engagement e semplificando la navigazione.",
                "Esperienza con Docker: creazione immagini, gestione container e ambienti isolati.",
                "Implementazione di responsive design, unit testing e ottimizzazione delle performance.",
                "Workflow & project management: utilizzo di Git per branch strategici, sessioni di code review e call settimanali di allineamento (lunedì per definire obiettivi, venerdì per verificare risultati), assicurando consegne puntuali e comunicazione costante.",
            ],
            note: "L’esperienza ha consentito di affrontare problematiche di performance e UX, fornendo un contributo al refactoring del codice CSS e all’isolamento degli stili cromatici del progetto.",
        },
        {
            title: "Help Desk Support",
            company: "Skysoft Provider",
            date_range: "05/2018 - 12/2023",
            responsibilities: [
                "Gestione di oltre 75 ticket mensili.",
                "Formazione dei nuovi assunti.",
                "Assistenza tecnica e amministrativa B2B e B2C.",
                "Operato in un contesto internazionale e multilingue"
            ],
        },
        {
            title: "Customer Care",
            company: "Puma Slot srl",
            date_range: "06/2014 - 03/2018",
            responsibilities: [
                "Assistenza software di primo livello.",
                "Documentazione tecnica.",
                "Fromazione Utenti e Commerciali.",
                "Comunicazione con il cliente ",
            ],
        },
    ],
    projects: [
        {
            name: "Betagioco.it",
            description:
                "Sito di scommesse sviluppato e manutenuto in Symfony, con flussi di lavoro basati su Git Flow. È il progetto migliore al quale ho contribuito attivamente per un anno, fornendomi un’importante esperienza nello sviluppo web di siti complessi e dinamici, oltre a una grande conoscenza dei flussi di lavoro in team.",
            url: "https://betagioco.it",
            imageUrl: "images/betagioco_placeholder.jpg", // Sostituisci con la tua immagine
            details: "Ho contribuito attivamente per un anno allo sviluppo frontend di Betagioco.it, focalizzandomi sull'implementazione di interfacce utente responsive e performanti con Twig e TypeScript. Ho lavorato sull'integrazione API, l'ottimizzazione CSS e la gestione del versioning con Git Flow, acquisendo esperienza in team strutturati."
        },
        {
            name: "SocialGaming.com",
            description:
                "Piattaforma social gaming con un sistema di amicizie e messaggistica istantanea (basato su WebSocket), interazioni dirette tramite commenti e post sui videogiochi, personalizzazione completa del sito con temi multipli, possibilità di modificare password e avatar, sistema di guard per limitare l’accesso a determinate sezioni, oltre all’integrazione con le API di Free-to-Game per offrire un’ampia lista di titoli free-to-play da giocare e commentare.",
            url: "https://socialgamingfrontend.onrender.com/",
            imageUrl: "images/socialgaming_placeholder.jpg", // Sostituisci con la tua immagine
            details: "Questo è un progetto personale full-stack costruito con Angular per il frontend e Node.js/Express per il backend. Include autenticazione JWT, chat in tempo reale con WebSocket, integrazione con API di terze parti (Free-to-Game), un sistema di temi e gestione utenti completa."
        },
    ],
    skills: {
        Linguaggi: [
            "JavaScript/TypeScript", "jQuery", "Node.js", "Express", "Angular", "Python",
            "PHP", "Java", "SQL/NoSQL", "Git", "Docker",
        ],
        Tecniche: [
            "SPA/SSR", "Recursive Solving", "Responsive Design", "Lazy Loading",
            "Data Analysis", "CRUD Operations", "RESTful APIs",
        ],
        Metodologie: [
            "Object Oriented Analysis, Design and Programming (OOAD/OOP)",
            "Progettazione mediante diagrammi UML", "Agile/Scrum",
            "Utilizzo di Confluence e Jira ", "Allineamenti periodici",
        ],
    },
    languages: {
        italiano: "Madrelingua",
        inglese: "B2",
        spagnolo: "Conoscenza colloquiale",
        rumeno: "Conoscenza colloquiale",
    },
    personal_qualities: [
        "Puntualità", "Precisione", "Affidabilità", "Capacità di iniziativa",
        "Problem Solving", "Teamwork",
    ],
};

// ============================================================
// DOM Element Selections
// ============================================================
const toTopBtn = document.getElementById("TopBtn");
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const yearEl = document.getElementById("year");
const sections = document.querySelectorAll(".content-section");
const introCanvas = document.getElementById("intro-canvas");
const introOverlay = document.getElementById("intro-overlay");
const enterBtn = document.getElementById("enter-btn");
const contactBtn = document.getElementById("contact-btn");
const contactInfoPopup = document.getElementById("contact-info");
const transitionOverlay = document.getElementById("transition-overlay");
const hexRainContainer = document.getElementById("hex-rain-container");
const terminalTextOutput = document.getElementById("terminal-text-output");
const mainContentElement = document.querySelector('main');
const initialTerminalTextElement = document.getElementById("initial-terminal-text");
const footerTerminalInput = document.getElementById("terminal-input");
const footerTerminalOutput = document.getElementById("terminal-output-area");
const projectModal = document.getElementById("project-modal");
const modalBody = document.getElementById("modal-body");
const modalCloseBtn = document.getElementById("modal-close-btn");
const projectsSection = document.getElementById("projects"); // Aggiunto selettore per la sezione progetti
const projectsContainer = document.getElementById("projects-container"); // Già presente, ma riferimento utile
// NUOVI SELETTORI PER MODALE TERMINALE
const terminalSuggestionModal = document.getElementById("terminal-suggestion-modal");
const terminalModalCloseBtn = document.getElementById("terminal-modal-close-btn");
const terminalModalOkBtn = document.getElementById("terminal-modal-ok-btn");

// ============================================================
// Utility Functions
// ============================================================
const delay = ms => new Promise(res => setTimeout(res, ms));

// ============================================================
// UI Enhancements: Buttons, Menu
// ============================================================
if (toTopBtn) {
    window.addEventListener("scroll", () => {
        toTopBtn.style.display = window.pageYOffset > 300 ? "flex" : "none";
    });
    toTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("open");
        menuToggle.classList.toggle("active");
        menuToggle.setAttribute("aria-expanded", mobileMenu.classList.contains("open").toString());
    });

    mobileMenu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    }));
}

if (yearEl) yearEl.innerHTML = new Date().getFullYear().toString();

// ============================================================
// Animations: AOS, GSAP, Observers
// ============================================================
if (sections.length > 0) {
    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                sectionObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    sections.forEach(section => sectionObserver.observe(section));
}

if (typeof AOS !== 'undefined' && AOS) {
    AOS.init({ duration: 1000, once: true });
}

if (typeof gsap !== 'undefined' && gsap) {
    gsap.utils.toArray(".card-3d, .card-glow, .timeline-item").forEach(el => {
        gsap.fromTo(el,
            { opacity: 0, y: 50 },
            {
                opacity: 1, y: 0, duration: 1, ease: "power3.out",
                scrollTrigger: {
                    trigger: el, start: "top 85%", toggleActions: "play none none none"
                },
            }
        );
    });
}

// ============================================================
// Dynamic Population of HTML Content
// ============================================================
window.addEventListener("DOMContentLoaded", () => {
    const populateElement = (id, content) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = content;
    };

    populateElement("profile-text", `<div class="card-3d">${data.professional_profile}</div>`);
    populateElement("education-container", `
        <div class="card-3d"><h3>Università</h3><p>${data.education.universita}</p></div>
        <div class="card-3d"><h3>Diploma</h3><p><strong>Istituto:</strong> ${data.education.diploma.istituto}</p><p><strong>Indirizzo:</strong> ${data.education.diploma.indirizzo}</p><p><strong>Votazione:</strong> ${data.education.diploma.votazione}</p></div>`);
    populateElement("certifications-container", data.certifications.map(cert => `
        <div class="card-3d"><h3>${cert.name}</h3><p><strong>Provider:</strong> ${cert.provider}</p><p><strong>Corso:</strong> ${cert.course_title}</p><p>${cert.skills}</p></div>`).join(""));
    populateElement("experience-container", data.experience.map(exp => `
        <div class="card-3d experience-item"><h3>${exp.title}</h3><p class="company-info"><strong>${exp.company}</strong> | ${exp.start_date && exp.date_range ? `${exp.start_date} (parte di ${exp.date_range})` : exp.start_date || exp.date_range || 'Date N/A'}</p><h4>Responsabilità:</h4><ul>${exp.responsibilities.map(r => `<li>${r}</li>`).join("")}</ul>${exp.note ? `<p class="note"><strong>Note:</strong> <em>${exp.note}</em></p>` : ""}</div>`).join(""));

    const projectsContainer = document.getElementById("projects-container");
    if (projectsContainer) {
        projectsContainer.innerHTML = data.projects.map((proj, index) => `
            <div class="card-3d project-item">
                <h3><a href="${proj.url}" target="_blank" rel="noopener noreferrer">${proj.name}</a></h3>
                <p>${proj.description}</p>
                <button class="view-details-btn" data-index="${index}">Vedi Dettagli</button>
            </div>`).join("");
        document.querySelectorAll('.view-details-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-index');
                openProjectModal(data.projects[index]);
            });
        });
    }

    const skillsContainer = document.getElementById("skills-container");
    if (skillsContainer) {
        skillsContainer.innerHTML = "";
        Object.entries(data.skills).forEach(([category, items]) => {
            const div = document.createElement("div");
            div.classList.add("card-3d", "skill-category");
            div.innerHTML = `<h3>${category}</h3><ul>${items.map(i => `<li>${i.name || i}</li>`).join("")}</ul>`;
            skillsContainer.appendChild(div);
        });
    }

    populateElement("languages-container", `<div class="card-3d"><h3>Lingue</h3>${Object.entries(data.languages).map(([lang, lvl]) => `<p>${lang.charAt(0).toUpperCase() + lang.slice(1)}: ${lvl}</p>`).join("")}</div>`);
    populateElement("qualities-container", `<div class="card-3d"><h3>Qualità Personali</h3><ul>${data.personal_qualities.map(q => `<li>${q}</li>`).join("")}</ul></div>`);
    populateElement("contact-info-details", `
        <p><strong>Email:</strong> <a href="mailto:${data.contacts.email}">${data.contacts.email}</a></p>
        <p><strong>Telefono:</strong> <a href="tel:${data.contacts.phone_number.replace(/\s/g, '')}">${data.contacts.phone_number}</a></p>
        <p><strong>LinkedIn:</strong> <a href="${data.contacts.linkedin}" target="_blank" rel="noopener noreferrer">Profilo LinkedIn</a></p>
        <p><strong>GitHub:</strong> <a href="${data.contacts.Github}" target="_blank" rel="noopener noreferrer">Profilo GitHub</a></p>`);
});

// ============================================================
// Project Modal Logic
// ============================================================
function openProjectModal(project) {
    if (!projectModal || !modalBody) return;
    modalBody.innerHTML = `
        <h3>${project.name}</h3>
        ${project.imageUrl && project.imageUrl.indexOf('placeholder') === -1 ? `<img src="${project.imageUrl}" alt="${project.name}" class="project-image">` : ''}
        <p>${project.details || project.description}</p>
        <p><a href="${project.url}" target="_blank" rel="noopener noreferrer">Visita il progetto &rarr;</a></p>
    `;
    projectModal.style.display = "flex";
    setTimeout(() => projectModal.classList.add("visible"), 10);
}

function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove("visible");
    setTimeout(() => projectModal.style.display = "none", 400);
}

if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
if (projectModal) projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) closeProjectModal();
});

// ============================================================
// Terminal Suggestion Modal Logic (AGGIUNTO)
// ============================================================
function openTerminalSuggestionModal() {
    if (!terminalSuggestionModal) return;
    terminalSuggestionModal.style.display = "flex";
    setTimeout(() => terminalSuggestionModal.classList.add("visible"), 10);
}

function closeTerminalSuggestionModal() {
    if (!terminalSuggestionModal) return;
    terminalSuggestionModal.classList.remove("visible");
    setTimeout(() => terminalSuggestionModal.style.display = "none", 400);
}

// Add Event Listeners
if (terminalModalCloseBtn) terminalModalCloseBtn.addEventListener('click', closeTerminalSuggestionModal);
if (terminalModalOkBtn) terminalModalOkBtn.addEventListener('click', closeTerminalSuggestionModal);
if (terminalSuggestionModal) terminalSuggestionModal.addEventListener('click', (e) => {
    if (e.target === terminalSuggestionModal) closeTerminalSuggestionModal();
});


// ============================================================
// Theme Management
// ============================================================
function setTheme(themeName) {
    const body = document.body;
    const digitalRainInstance = window.mainDigitalRain; // Accesso all'istanza globale
    const digitalRainCanvas = digitalRainInstance ? digitalRainInstance.canvas : null;

    // Rimuovi tutte le classi tema specifiche e 'dark-theme' (che è il default matrix)
    body.classList.remove('theme-punk', 'theme-shell', 'dark-theme');

    let newThemeClass = '';

    // Gestisci sempre lo stato della pioggia digitale PRIMA di aggiungere la nuova classe
    // Così digitalRain.js può leggere la classe corretta quando viene triggerato refreshTheme
    if (digitalRainInstance) {
        if (!digitalRainInstance.animationId) { // Se la pioggia è ferma, riavviala
            digitalRainInstance.start();
        }
    }
    if (digitalRainCanvas) {
        digitalRainCanvas.style.display = 'block'; // Assicura che il canvas sia visibile
    }


    switch (themeName) {
        case 'punk':
            newThemeClass = 'theme-punk';
            // La pioggia digitale per 'punk' ora è gestita da digitalRain.js per cambiare stile
            break;
        case 'shell':
            newThemeClass = 'theme-shell';
            // Anche per 'shell', digitalRain.js cambierà stile
            break;
        case 'default':
        default:
            newThemeClass = 'dark-theme'; // Tema Matrix originale
            break;
    }

    if (newThemeClass) {
        body.classList.add(newThemeClass);
    }
    appendToTerminalOutput(`Tema impostato su: ${themeName}`);

    // Aggiorna lo stile della pioggia digitale in base alla nuova classe del corpo
    if (digitalRainInstance && typeof digitalRainInstance.refreshTheme === 'function') {
        digitalRainInstance.refreshTheme();
    }
}


// ============================================================
// Easter Egg Logic
// ============================================================
function triggerMatrixEffect() {
    const body = document.body;
    body.classList.add('matrix-easter-egg');
    setTimeout(() => {
        body.classList.remove('matrix-easter-egg');
    }, 2500);
}

// ============================================================
// Footer Terminal Logic (CON NUOVI COMANDI)
// ============================================================
function appendToTerminalOutput(text, type = 'info') {
    if (!footerTerminalOutput) return;
    const line = document.createElement('div');
    line.textContent = text;
    line.className = `terminal-line terminal-${type}`;
    footerTerminalOutput.appendChild(line);
    footerTerminalOutput.scrollTop = footerTerminalOutput.scrollHeight;
}

function processTerminalCommand(command) {
    command = command.trim().toLowerCase();
    if (!command) return;

    appendToTerminalOutput(`> ${command}`, 'user');

    switch (command) {
        case 'help':
            appendToTerminalOutput("Comandi: help, profile, experience, projects, skills, contact, clear, matrix (easter_egg), punk, shell, default, cv, exit");
            break;
        case 'profile':
        case 'experience':
        case 'projects':
        case 'skills':
            const targetId = `#${command}`;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                appendToTerminalOutput(`Navigazione verso: ${command}...`);
                targetElement.scrollIntoView({ behavior: 'smooth' });
            } else {
                appendToTerminalOutput(`Errore: Sezione '${command}' non trovata.`);
            }
            break;
        case 'contact':
             appendToTerminalOutput(`Apertura contatti...`);
             if(contactBtn) contactBtn.click();
            break;
        case 'clear':
            if(footerTerminalOutput) footerTerminalOutput.innerHTML = '';
            appendToTerminalOutput('> Schermo pulito.');
            break;
        case 'matrix':
            appendToTerminalOutput(">>> Wake up, Neo... <<<");
            appendToTerminalOutput(">>> The Matrix has you... <<<");
            triggerMatrixEffect();
            break;
        case 'punk':
            setTheme('punk');
            break;
        case 'shell':
            setTheme('shell');
            break;
        case 'default':
            setTheme('default');
            break;
             case 'cv': // <-- NUOVO COMANDO
            if (window.confirm("Stai per scaricare il CV in formato PDF. Confermi?")) {
                appendToTerminalOutput("Download del CV in corso...");
                const link = document.createElement('a');
                link.href = 'cv/CV_PIZZUTI_2025.pdf';
                link.download = 'CV_PIZZUTI_2025.pdf'; 
                document.body.appendChild(link); 
                link.click();
                document.body.removeChild(link);
                appendToTerminalOutput("Download avviato.");
            } else {
                appendToTerminalOutput("Download annullato.");
            }
            break;
        case 'exit':
            appendToTerminalOutput("Disconnessione... Addio.");
            break;
        default:
            appendToTerminalOutput(`Comando '${command}' non riconosciuto. Digita 'help'.`);
            break;
    }
}

if (footerTerminalInput) {
    footerTerminalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            processTerminalCommand(footerTerminalInput.value);
            footerTerminalInput.value = '';
        }
    });
}

// ============================================================
// Three.js: Intro Starfield Background & Mini-Game
// ============================================================
let scene, camera, renderer, dataBits = [], rocket, bullets = [], fallingObjects = [], explosions = [];
let composer, bloomPass;
let matrixBulletTexture;

function createMatrixBulletTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 32; canvas.height = 64;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = 'bold 48px monospace'; ctx.fillStyle = '#00FF00';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('01', canvas.width / 2, canvas.height / 2);
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
}

if (introCanvas && typeof THREE !== 'undefined' && THREE) {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({ canvas: introCanvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  camera.position.z = 35;

  composer = new EffectComposer(renderer);
  const renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);
  bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.7, 0.3, 0.85);
  composer.addPass(bloomPass);

  matrixBulletTexture = createMatrixBulletTexture();

  const bitGeometry = new THREE.PlaneGeometry(0.1, 0.5);
  function createDataBit() {
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: Math.random() * 0.3 + 0.03 });
    const bit = new THREE.Mesh(bitGeometry, material);
    bit.position.set(THREE.MathUtils.randFloatSpread(150), THREE.MathUtils.randFloat(50, 80), THREE.MathUtils.randFloatSpread(80));
    bit.userData.velocity = new THREE.Vector3(0, THREE.MathUtils.randFloat(-0.1, -0.4), 0);
    scene.add(bit);
    dataBits.push(bit);
    return bit;
  }
  Array.from({ length: 2000 }, createDataBit);

  function createRocket() {
    const rocketGroup = new THREE.Group();
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x339933, metalness: 0.8, roughness: 0.3, emissive: 0x001500 });
    const bodyGeo = new THREE.CylinderGeometry(0.25, 0.45, 1.6, 12);
    const body = new THREE.Mesh(bodyGeo, bodyMat); body.position.y = 0.1; body.castShadow = true; body.receiveShadow = true; rocketGroup.add(body);
    const cockpitMat = new THREE.MeshStandardMaterial({ color: 0x00CC00, metalness: 0.5, roughness: 0.4, emissive: 0x003300 });
    const cockpitGeo = new THREE.SphereGeometry(0.3, 12, 10);
    const cockpit = new THREE.Mesh(cockpitGeo, cockpitMat); cockpit.position.y = body.position.y + 0.8; cockpit.castShadow = true; rocketGroup.add(cockpit);
    const finMat = new THREE.MeshStandardMaterial({ color: 0x227722, metalness: 0.7, roughness: 0.5 });
    const finGeo = new THREE.BoxGeometry(0.12, 0.8, 0.6);
    for (let i = 0; i < 4; i++) {
        const fin = new THREE.Mesh(finGeo, finMat);
        const angle = (i / 4) * Math.PI * 2 + Math.PI / 4; const radius = 0.35;
        fin.position.set(Math.cos(angle) * radius, body.position.y - 0.55, Math.sin(angle) * radius);
        fin.rotation.y = -angle + Math.PI / 2; fin.rotation.z = Math.PI / 6; fin.castShadow = true; rocketGroup.add(fin);
    }
    const engineHousingMat = new THREE.MeshStandardMaterial({ color: 0x606060, metalness: 0.9, roughness: 0.2 });
    const engineHousingGeo = new THREE.CylinderGeometry(0.22, 0.28, 0.4, 16);
    const engineHousing = new THREE.Mesh(engineHousingGeo, engineHousingMat); engineHousing.position.y = body.position.y - 0.9; engineHousing.castShadow = true; rocketGroup.add(engineHousing);
    const flameMat = new THREE.MeshBasicMaterial({ color: 0x66FF66, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending });
    const flameGeo = new THREE.ConeGeometry(0.2, 0.9, 16);
    const flame = new THREE.Mesh(flameGeo, flameMat); flame.position.y = engineHousing.position.y - 0.55; flame.rotation.x = Math.PI;
    flame.userData.baseScaleY = 1.0 + Math.random() * 0.3; rocketGroup.add(flame); rocketGroup.flame = flame;
    const rocketLight = new THREE.PointLight(0x66FF66, 3, 15); rocketLight.position.y = engineHousing.position.y - 0.3; rocketGroup.add(rocketLight);
    rocketGroup.firePoint = new THREE.Object3D(); rocketGroup.firePoint.position.set(0, cockpit.position.y + cockpit.geometry.parameters.radius * 0.9, 0); rocketGroup.add(rocketGroup.firePoint);
    rocketGroup.position.set(0, -camera.position.z / 2 + 4, 10); rocketGroup.rotation.x = Math.PI / 10; rocketGroup.scale.set(1.6, 1.6, 1.6);
    scene.add(rocketGroup);
    return rocketGroup;
  }
  rocket = createRocket();

  const ambientLight = new THREE.HemisphereLight(0x00BB00, 0x002200, 0.5); scene.add(ambientLight);
  const mainDirectionalLight = new THREE.DirectionalLight(0xEEFFEE, 1.2); mainDirectionalLight.position.set(8, 15, 20); mainDirectionalLight.castShadow = true;
  mainDirectionalLight.shadow.mapSize.width = 1024; mainDirectionalLight.shadow.mapSize.height = 1024;
  mainDirectionalLight.shadow.camera.near = 1; mainDirectionalLight.shadow.camera.far = 60;
  mainDirectionalLight.shadow.camera.left = -25; mainDirectionalLight.shadow.camera.right = 25;
  mainDirectionalLight.shadow.camera.top = 25; mainDirectionalLight.shadow.camera.bottom = -25;
  scene.add(mainDirectionalLight);
  const rimLight = new THREE.DirectionalLight(0x33AA33, 1.0); rimLight.position.set(-10, 5, -15); scene.add(rimLight);

  function shootBullet() {
    if (introOverlay && introOverlay.style.opacity !== "0" && rocket) {
      const bulletMat = new THREE.SpriteMaterial({ map: matrixBulletTexture, color: 0x00FF00, blending: THREE.AdditiveBlending, transparent: true, depthTest: false, sizeAttenuation: true, });
      const bullet = new THREE.Sprite(bulletMat); bullet.scale.set(0.3, 0.6, 1);
      const bulletLight = new THREE.PointLight(0x33FF33, 1.5, 5); bullet.add(bulletLight);
      const firePointWorld = new THREE.Vector3(); rocket.firePoint.getWorldPosition(firePointWorld); bullet.position.copy(firePointWorld);
      bullet.userData.velocity = new THREE.Vector3(0, 0.95, 0);
      scene.add(bullet); bullets.push(bullet);
    }
  }

  function createFallingObject() {
    const types = ["cube", "tetrahedron", "icosahedron", "octahedron", "dodecahedron"]; const type = types[Math.floor(Math.random() * types.length)];
    let geometry; const baseSize = THREE.MathUtils.randFloat(0.7, 1.3);
    if (type === "cube") geometry = new THREE.BoxGeometry(baseSize, baseSize, baseSize);
    else if (type === "tetrahedron") geometry = new THREE.TetrahedronGeometry(baseSize * 1.1); else if (type === "octahedron") geometry = new THREE.OctahedronGeometry(baseSize * 1.1, 0);
    else if (type === "dodecahedron") geometry = new THREE.DodecahedronGeometry(baseSize, 0); else geometry = new THREE.IcosahedronGeometry(baseSize, 0);
    const objectColors = [0x00FF41, 0x03A062, 0x0D4B2B, 0x2ECC71, 0x1F6357, 0x50C878]; const randomColor = objectColors[Math.floor(Math.random() * objectColors.length)];
    const material = new THREE.MeshStandardMaterial({ color: randomColor, wireframe: Math.random() > 0.4, emissive: randomColor, emissiveIntensity: 0.8, metalness: 0.2, roughness: 0.4 });
    const shape = new THREE.Mesh(geometry, material); shape.castShadow = true; shape.receiveShadow = true;
    const spawnWidth = camera.position.z * 0.7 * camera.aspect;
    shape.position.set(THREE.MathUtils.randFloatSpread(spawnWidth), camera.position.z / 2 + 8, 10);
    shape.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
    shape.userData.velocity = new THREE.Vector3(0, THREE.MathUtils.randFloat(-0.045, -0.085), 0);
    shape.userData.rotationSpeed = new THREE.Vector3(THREE.MathUtils.randFloat(-0.02, 0.02), THREE.MathUtils.randFloat(-0.02, 0.02), THREE.MathUtils.randFloat(-0.02, 0.02));
    scene.add(shape); fallingObjects.push(shape);
  }
  for (let i = 0; i < 12; i++) createFallingObject();
  setInterval(() => { if (introOverlay && introOverlay.style.opacity !== "0" && fallingObjects.length < 22) { createFallingObject(); } }, 1600);

  window.addEventListener("mousemove", (e) => {
    if (!rocket || !introOverlay || introOverlay.style.opacity === "0") return;
    const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    const frustumHeight = 2 * Math.tan(camera.fov * Math.PI / 360) * (camera.position.z - rocket.position.z);
    const frustumWidth = frustumHeight * camera.aspect; const maxX = frustumWidth / 2 * 0.92;
    const targetX = THREE.MathUtils.clamp(mouseX * maxX, -maxX, maxX);
    if (gsap) gsap.to(rocket.position, { x: targetX, duration: 0.25, ease: "power3.out" });
  });
  window.addEventListener("click", shootBullet);

  function createExplosion(position, colorHex) {
    const debrisCount = THREE.MathUtils.randInt(40, 60);
    if (typeof gsap !== 'undefined' && gsap) {
        const explosionLight = new THREE.PointLight(colorHex, 5, 20); explosionLight.position.copy(position); scene.add(explosionLight);
        gsap.to(explosionLight, { intensity: 0, duration: 0.8, ease: "power2.out", onComplete: () => { scene.remove(explosionLight); if (explosionLight.dispose) explosionLight.dispose(); }});
    }
    for (let i = 0; i < debrisCount; i++) {
      const debrisSize = THREE.MathUtils.randFloat(0.08, 0.2);
      const debrisGeo = new THREE.BoxGeometry(debrisSize, debrisSize * THREE.MathUtils.randFloat(1.5, 2.5), debrisSize);
      const debrisMat = new THREE.MeshStandardMaterial({ color: colorHex, emissive: colorHex, emissiveIntensity: 0.7, metalness: 0.1, roughness: 0.6, transparent: true, opacity: 1 });
      const debris = new THREE.Mesh(debrisGeo, debrisMat); debris.castShadow = true; debris.position.copy(position);
      const spreadFactor = 0.85;
      debris.userData.velocity = new THREE.Vector3( THREE.MathUtils.randFloatSpread(spreadFactor), THREE.MathUtils.randFloatSpread(spreadFactor) + THREE.MathUtils.randFloat(0.1, 0.25), THREE.MathUtils.randFloatSpread(spreadFactor * 0.8) );
      debris.userData.life = THREE.MathUtils.randFloat(1.5, 2.8);
      debris.userData.rotationSpeed = new THREE.Vector3(THREE.MathUtils.randFloatSpread(0.25), THREE.MathUtils.randFloatSpread(0.25), THREE.MathUtils.randFloatSpread(0.25));
      scene.add(debris); explosions.push(debris);
    }
  }
  const clock = new THREE.Clock();

  function animateIntro() {
    if (!introCanvas || !renderer) return;
    requestAnimationFrame(animateIntro);
    const delta = clock.getDelta(); const elapsedTime = clock.getElapsedTime();

    dataBits.forEach(bit => {
      bit.position.addScaledVector(bit.userData.velocity, delta * 60);
      const opacityDecrease = (introOverlay && introOverlay.style.opacity !== "0") ? 0.004 : 0.0025;
      bit.material.opacity -= opacityDecrease;
      if (bit.position.y < -camera.position.z / 2 - 15 || bit.material.opacity <= 0) {
        bit.position.y = camera.position.z / 2 + Math.random() * 20;
        bit.position.x = THREE.MathUtils.randFloatSpread(150);
        bit.material.opacity = Math.random() * 0.3 + 0.03;
      }
    });

    if (introOverlay && introOverlay.style.opacity !== "0") {
        if (rocket && rocket.flame) {
            rocket.flame.scale.y = rocket.flame.userData.baseScaleY * (1 + Math.sin(elapsedTime * 40 + Math.random() * 0.6) * 0.45);
            rocket.flame.material.opacity = 0.6 + Math.sin(elapsedTime * 35 + Math.random() * 0.6) * 0.4;
        }
        if (rocket) rocket.position.y = (-camera.position.z / 2 + 4) + (Math.sin(elapsedTime * 3.0) * 0.04);

        fallingObjects.forEach((obj, index) => {
            obj.position.addScaledVector(obj.userData.velocity, delta * 60);
            obj.rotation.x += obj.userData.rotationSpeed.x * delta * 60; obj.rotation.y += obj.userData.rotationSpeed.y * delta * 60; obj.rotation.z += obj.userData.rotationSpeed.z * delta * 60;
            if (obj.position.y < -camera.position.z / 2 - 10) { scene.remove(obj); if (obj.geometry?.dispose) obj.geometry.dispose(); if (obj.material?.dispose) obj.material.dispose(); fallingObjects.splice(index, 1); }
        });

        bullets.forEach((bullet, index) => {
            bullet.position.addScaledVector(bullet.userData.velocity, delta * 60);
            if (bullet.position.y > camera.position.z / 2 + 10) { scene.remove(bullet); bullets.splice(index, 1); }
        });

        for (let i = bullets.length - 1; i >= 0; i--) {
            const bullet = bullets[i]; if (!bullet) continue;
            for (let j = fallingObjects.length - 1; j >= 0; j--) {
                const obj = fallingObjects[j]; if (!obj) continue;
                const bulletRadius = 0.3; let objectEffectiveRadius;
                if (obj.geometry.type === "BoxGeometry") { const p = obj.geometry.parameters; objectEffectiveRadius = Math.sqrt(p.width**2 + p.height**2 + p.depth**2) / 2; }
                else if (obj.geometry.parameters?.radius !== undefined) { objectEffectiveRadius = obj.geometry.parameters.radius; }
                else if (obj.geometry.boundingSphere) { objectEffectiveRadius = obj.geometry.boundingSphere.radius; } else { objectEffectiveRadius = 0.5; }
                const collisionThreshold = objectEffectiveRadius + bulletRadius;
                const distance = bullet.position.distanceTo(obj.position);
                if (distance < collisionThreshold) {
                    createExplosion(obj.position.clone(), obj.material.emissive.getHex());
                    scene.remove(bullet); bullets.splice(i, 1);
                    scene.remove(obj); if (obj.geometry?.dispose) obj.geometry.dispose(); if (obj.material?.dispose) obj.material.dispose(); fallingObjects.splice(j, 1);
                    break;
                }
            }
        }
    }

    explosions.forEach((debris, index) => {
      if (debris.userData.bullet) { scene.remove(debris); if (debris.geometry?.dispose) debris.geometry.dispose(); if (debris.material?.dispose) debris.material.dispose(); explosions.splice(index, 1); return; }
      debris.userData.velocity.y -= 0.015 * delta * 60;
      debris.position.addScaledVector(debris.userData.velocity, delta * 60);
      debris.rotation.x += debris.userData.rotationSpeed.x * delta * 60; debris.rotation.y += debris.userData.rotationSpeed.y * delta * 60; debris.rotation.z += debris.userData.rotationSpeed.z * delta * 60;
      debris.userData.life -= delta;
      debris.material.opacity = THREE.MathUtils.clamp(debris.userData.life / 2.0, 0, 1);
      if (debris.userData.life <= 0) { scene.remove(debris); if (debris.geometry?.dispose) debris.geometry.dispose(); if (debris.material?.dispose) debris.material.dispose(); explosions.splice(index, 1); }
    });

    if (composer) composer.render();
  }
  if (introCanvas && renderer) animateIntro();
}

// ============================================================
// Event Handlers & Transition Logic
// ============================================================
window.addEventListener("resize", () => {
  if (camera && renderer) {
    const width = window.innerWidth; const height = window.innerHeight;
    camera.aspect = width / height; camera.updateProjectionMatrix();
    renderer.setSize(width, height); renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    if (composer) composer.setSize(width, height);
    if (bloomPass) bloomPass.resolution.set(width, height);
  }
});

let hexRainInterval = null;
const IS_MOBILE = window.innerWidth < 768;
const HEX_FONT_SIZE_PX = 14;
const HEX_CHAR_WIDTH_RATIO = 0.6;

function generateHexLine() {
    const hexChars = "0123456789ABCDEF"; let line = "";
    const lineLength = Math.max(10, Math.floor(window.innerWidth / (HEX_FONT_SIZE_PX * HEX_CHAR_WIDTH_RATIO)));
    for (let i = 0; i < lineLength; i++) { line += hexChars[Math.floor(Math.random() * hexChars.length)]; }
    return line;
}

function startHexRainEffect() {
    if (!hexRainContainer) return;
    hexRainContainer.innerHTML = ''; const lines = [];
    const maxLines = Math.floor(window.innerHeight / 16);
    for (let i = 0; i < maxLines; i++) { lines.push(generateHexLine()); }
    hexRainContainer.textContent = lines.join('\n');
    hexRainInterval = setInterval(() => {
        if (lines.length > 0) lines.shift(); lines.push(generateHexLine());
        hexRainContainer.textContent = lines.join('\n');
    }, IS_MOBILE ? 150 : 100);
}

function stopHexRainEffect() {
    if (hexRainInterval) clearInterval(hexRainInterval);
    hexRainInterval = null;
    if (hexRainContainer) hexRainContainer.textContent = '';
}

async function typeTerminalMessage(message, speed = 80, clear = false) {
    if (!terminalTextOutput) return;
    if (clear) terminalTextOutput.innerHTML = '';
    else if (terminalTextOutput.innerHTML !== '') terminalTextOutput.innerHTML += '\n';

    terminalTextOutput.classList.remove('cursor-active');
    let currentText = terminalTextOutput.innerHTML;

    for (let i = 0; i < message.length; i++) {
        currentText += message[i];
        terminalTextOutput.innerHTML = currentText;
        await delay(speed);
    }
    terminalTextOutput.classList.add('cursor-active');
}

async function runIntermediateTransition() {
    if (!transitionOverlay || !mainContentElement) {
        if (mainContentElement) mainContentElement.classList.add('visible');
        if (contactBtn) contactBtn.style.display = "flex";
        document.body.style.overflow = '';
        return;
    }

    transitionOverlay.style.display = "flex";
    await delay(50);
    transitionOverlay.style.opacity = "1";

    startHexRainEffect();
    if (terminalTextOutput) { terminalTextOutput.innerHTML = ''; terminalTextOutput.classList.add('cursor-active'); }

    const msg1 = "SYSTEM_CHECK::INITIATED";
    const msg2 = "ACCESSING_MAINFRAME@0xF200";
    const msg3 = "DECRYPTION_STATUS::SUCCESS";
    const msg4 = "LOADING_USER_INTERFACE";
    const typeSpeeds = [50, 10, 30, 10];
    const animationDelays = [200, 200, 200, 100, 200, 150];

    await delay(animationDelays[0]);
    transitionOverlay.classList.add('glitching');
    await typeTerminalMessage(msg1, typeSpeeds[0], true);
    await delay(animationDelays[1]);
    await typeTerminalMessage(msg2, typeSpeeds[1]);
    await delay(animationDelays[2]);
    transitionOverlay.classList.remove('glitching');
    await typeTerminalMessage(msg3, typeSpeeds[2]);
    await typeTerminalMessage(msg4, typeSpeeds[3]);

    await delay(animationDelays[3]);
    stopHexRainEffect();
    if (terminalTextOutput) terminalTextOutput.classList.remove('cursor-active');

    await delay(animationDelays[4]);
    transitionOverlay.classList.add('disappearing');

    setTimeout(() => {
        transitionOverlay.style.display = "none";
        transitionOverlay.classList.remove('disappearing');
        transitionOverlay.style.opacity = "0";

        mainContentElement.classList.add('visible');
        if (contactBtn) contactBtn.style.display = "flex";
        if (toTopBtn) toTopBtn.style.display = (window.pageYOffset > 300) ? "flex" : "none";

        if (mainContentElement) {
            mainContentElement.setAttribute('tabindex', '-1');
            mainContentElement.focus({ preventScroll: true });
        }
        if (typeof AOS !== 'undefined' && AOS) AOS.refreshHard();
        document.body.style.overflow = '';

        // *** MOSTRA IL MODALE DEL TERMINALE ***
        openTerminalSuggestionModal(); 

    }, animationDelays[5]);
}

if (enterBtn && introOverlay) {
    enterBtn.addEventListener("click", () => {
        document.body.style.overflow = 'hidden';
        if (introOverlay) introOverlay.style.opacity = "0";

        setTimeout(() => {
            if (introOverlay) introOverlay.style.display = "none";
            runIntermediateTransition();
        }, 1200);
    });
}

if (contactBtn && contactInfoPopup) {
    contactBtn.addEventListener("click", () => {
        const isVisible = contactInfoPopup.style.display === "flex";
        contactInfoPopup.style.display = isVisible ? "none" : "flex";
        contactBtn.setAttribute('aria-expanded', String(!isVisible));
    });

    document.addEventListener('click', (event) => {
        if (contactInfoPopup.style.display === 'flex' &&
            !contactBtn.contains(event.target) &&
            !contactInfoPopup.contains(event.target)) {
            contactInfoPopup.style.display = 'none';
            contactBtn.setAttribute('aria-expanded', 'false');
        }
    });
}

// Initial states for buttons
if (contactBtn) contactBtn.style.display = "none";
if (toTopBtn) toTopBtn.style.display = "none";