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
    email: "emilianopizzuti95@gmail.com", // Added email for contact info
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
        "Versioning con Git Flow e sessioni di pair programming.",
        "Formazione continua: approfondimento di best practice su PixiJS, design pattern OOP e strumenti di profiling, per migliorare continuamente l’efficienza e la scalabilità dei giochi.",
        "Object Oriented Analysis and Design: studio preventivo dell’architettura software, definizione di classi, pattern e diagrammi UML per garantire un’implementazione scalabile e manutenibile.",
      ],
      note: "L’esperienza ha consentito di affrontare problematiche di performance e gestione della memoria, fornendo una solida base sulla programmazione e l'analisi orientata agli oggetti.",
    },
    {
      title: "Frontend Developer",
      company: "Sport-Tech S.R.L.",
      start_date: "01/2024", // Assuming current or you might want an end_date or "Present"
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
    },
    {
      name: "SocialGaming.com",
      description:
        "Piattaforma social gaming con un sistema di amicizie e messaggistica istantanea (basato su WebSocket), interazioni dirette tramite commenti e post sui videogiochi, personalizzazione completa del sito con temi multipli, possibilità di modificare password e avatar, sistema di guard per limitare l’accesso a determinate sezioni, oltre all’integrazione con le API di Free-to-Game per offrire un’ampia lista di titoli free-to-play da giocare e commentare.",
      url: "https://socialgamingfrontend.onrender.com/",
    },
  ],
  skills: {
    Linguaggi: [
      "JavaScript/TypeScript",
      "jQuery",
      "Node.js",
      "Express",
      "Angular",
      "Python",
      "PHP",
      "Java",
      "SQL/NoSQL",
      "Git",
      "Docker",
    ],
    Tecniche: [
      "SPA/SSR",
      "Recursive Solving",
      "Responsive Design",
      "Lazy Loading",
      "Data Analysis",
      "CRUD Operations",
      "RESTful APIs",
    ],
    Metodologie: [
      "Object Oriented Analysis, Design and Programming (OOAD/OOP)",
      "Progettazione mediante diagrammi UML",
      "Agile/Scrum",
      "Utilizzo di Confluence e Jira ",
      "Allineamenti periodici",
    ],
  },
  languages: {
    italiano: "Madrelingua",
    inglese: "B2",
    spagnolo: "Conoscenza colloquiale",
    rumeno: "Conoscenza colloquiale",
  },
  personal_qualities: [
    "Puntualità",
    "Precisione",
    "Affidabilità",
    "Capacità di iniziativa",
    "Problem Solving",
    "Teamwork",
  ],
};
// ============================================================
// DOM Element Selections (Grouped for clarity and early access)
// ============================================================
const toTopBtn = document.getElementById("TopBtn");
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const yearEl = document.getElementById("year");
// const themeSwitch = document.getElementById("theme-switch"); // Removed
const sections = document.querySelectorAll(".content-section");

// Elements for Intro, Game, and Post-Intro UI
const introCanvas = document.getElementById("intro-canvas");
const introOverlay = document.getElementById("intro-overlay"); 
const enterBtn = document.getElementById("enter-btn");         
const contactBtn = document.getElementById("contact-btn");       
const contactInfoPopup = document.getElementById("contact-info"); 

// Elements for Transition Animation
const transitionOverlay = document.getElementById("transition-overlay");
const hexRainContainer = document.getElementById("hex-rain-container");
const terminalTextOutput = document.getElementById("terminal-text-output");
const mainContentElement = document.querySelector('main');

// ============================================================
// Top Button Functionality
// ============================================================
if (toTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      toTopBtn.style.display = "flex"; 
    } else {
      toTopBtn.style.display = "none";
    }
  });
  toTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ============================================================
// Mobile Menu Toggle
// ============================================================
if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
    menuToggle.classList.toggle("active");
    const isExpanded = mobileMenu.classList.contains("open");
    menuToggle.setAttribute("aria-expanded", isExpanded);
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      menuToggle.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (yearEl) {
  const d = new Date();
  yearEl.innerHTML = d.getFullYear();
}

// ============================================================
// Theme Switcher Logic REMOVED
// ============================================================
// Site will default to dark-theme via class on <body> in HTML


// ============================================================
// Section Reveal on Scroll (IntersectionObserver)
// ============================================================
if (sections.length > 0) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          sectionObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  sections.forEach((section) => sectionObserver.observe(section));
}

// ============================================================
// Initialize AOS (Animate On Scroll)
// ============================================================
if (typeof AOS !== 'undefined') {
  AOS.init({
    duration: 1000,
    once: true,
  });
}

// ============================================================
// GSAP Animations for Cards and Timeline Items
// ============================================================
if (typeof gsap !== 'undefined') {
  gsap.utils.toArray(".card-3d, .card-glow, .timeline-item").forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none", 
        },
      }
    );
  });
}

// ============================================================
// Dynamic Population of HTML Content
// ============================================================
window.addEventListener("DOMContentLoaded", () => {
  const profileTextEl = document.getElementById("profile-text");
  if (profileTextEl) {
    profileTextEl.innerHTML =`
      <div class="card-3d">${ data.professional_profile}  </div>`;
  }

  const educationContainer = document.getElementById("education-container");
  if (educationContainer) {
    educationContainer.innerHTML = `
      <div class="card-3d">
        <h3>Università</h3>
        <p>${data.education.universita}</p>
      </div>
      <div class="card-3d">
        <h3>Diploma</h3>
        <p><strong>Istituto:</strong> ${data.education.diploma.istituto}</p>
        <p><strong>Indirizzo:</strong> ${data.education.diploma.indirizzo}</p>
        <p><strong>Votazione:</strong> ${data.education.diploma.votazione}</p>
      </div>`;
  }

  const certContainer = document.getElementById("certifications-container");
  if (certContainer) {
    certContainer.innerHTML = data.certifications
      .map(
        (cert) => `
      <div class="card-3d">
        <h3>${cert.name}</h3>
        <p><strong>Provider:</strong> ${cert.provider}</p>
        <p><strong>Corso:</strong> ${cert.course_title}</p>
        <p>${cert.skills}</p>
      </div>`
      )
      .join("");
  }

  const expContainer = document.getElementById("experience-container");
  if (expContainer) {
    expContainer.innerHTML = data.experience
      .map(
        (exp) => `
      <div class="card-3d experience-item">
        <h3>${exp.title}</h3>
        <p class="company-info"><strong>${exp.company}</strong> | ${
          exp.start_date && exp.date_range ? `${exp.start_date} (parte di ${exp.date_range})` : exp.start_date || exp.date_range || 'Date N/A'
        }</p>
        <h4>Responsabilità:</h4>
        <ul>${exp.responsibilities
          .map((r) => `<li>${r}</li>`)
          .join("")}</ul>
        ${
          exp.note
            ? `<p class="note"><strong>Note:</strong> <em>${exp.note}</em></p>`
            : ""
        }
      </div>`
      )
      .join("");
  }

  const projectsContainer = document.getElementById("projects-container");
  if (projectsContainer) {
    projectsContainer.innerHTML = data.projects
      .map(
        (proj) => `
      <div class="card-3d project-item">
        <h3><a href="${proj.url}" target="_blank" rel="noopener noreferrer">${
          proj.name
        }</a></h3>
        <p>${proj.description}</p>
      </div>`
      )
      .join("");
  }

  const skillsContainer = document.getElementById("skills-container");
  if (skillsContainer) {
    skillsContainer.innerHTML = ""; // Clear it first
    Object.entries(data.skills).forEach(([category, items]) => {
      const div = document.createElement("div");
      div.classList.add("card-3d", "skill-category");
      div.innerHTML = `
        <h3>${category}</h3>
        <ul>${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;
      skillsContainer.appendChild(div);
    });
  }

  const langContainer = document.getElementById("languages-container");
  if (langContainer) {
    langContainer.innerHTML = `
      <div class="card-3d">
        <h3>Lingue</h3>
        ${Object.entries(data.languages)
          .map(
            ([lang, lvl]) =>
              `<p>${lang.charAt(0).toUpperCase() + lang.slice(1)}: ${lvl}</p>`
          )
          .join("")}
      </div>`;
  }

  const qualitiesContainer = document.getElementById("qualities-container");
  if (qualitiesContainer) {
    qualitiesContainer.innerHTML = `
      <div class="card-3d">
        <h3>Qualità Personali</h3>
        <ul>${data.personal_qualities
          .map((q) => `<li>${q}</li>`)
          .join("")}</ul>
      </div>`;
  }

    // Populate Contact Info in the popup
    const contactInfoDetails = document.getElementById("contact-info-details"); // Renamed variable for clarity
    if (contactInfoDetails) { // Changed from contactInfoPopup to contactInfoDetails
        contactInfoDetails.innerHTML = `
            <p><strong>Email:</strong> <a href="mailto:${data.contacts.email}">${data.contacts.email}</a></p>
            <p><strong>Telefono:</strong> <a href="tel:${data.contacts.phone_number.replace(/\s/g, '')}">${data.contacts.phone_number}</a></p>
            <p><strong>LinkedIn:</strong> <a href="${data.contacts.linkedin}" target="_blank" rel="noopener noreferrer">Profilo LinkedIn</a></p>
            <p><strong>GitHub:</strong> <a href="${data.contacts.Github}" target="_blank" rel="noopener noreferrer">Profilo GitHub</a></p>
        `;
    }
});

// ============================================================
// Three.js Starfield Background becoming Matrix Data Stream & Game
// ============================================================

let scene, camera, renderer, dataBits = [], rocket, bullets = [], fallingObjects = [], explosions = [];

if (introCanvas && typeof THREE !== 'undefined') {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  renderer = new THREE.WebGLRenderer({
    canvas: introCanvas,
    alpha: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.position.z = 30;

  const bitGeometry = new THREE.PlaneGeometry(0.1, 0.5);

  function createDataBit() {
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      transparent: true,
      opacity: Math.random() * 0.5 + 0.1, 
    });
    const bit = new THREE.Mesh(bitGeometry, material);

    bit.position.set(
      THREE.MathUtils.randFloatSpread(120), 
      THREE.MathUtils.randFloat(40, 70),   
      THREE.MathUtils.randFloatSpread(60)
    );
    bit.userData.velocity = new THREE.Vector3(
      0,
      THREE.MathUtils.randFloat(-0.08, -0.3), 
      0
    );
    scene.add(bit);
    dataBits.push(bit);
    return bit;
  }
  Array.from({ length: 1500 }, createDataBit);


  function createRocket() {
    const rocketGroup = new THREE.Group();
    const bodyGeo = new THREE.BoxGeometry(0.35, 1.3, 0.35);
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x003300, wireframe: false, emissive: 0x001100, metalness: 0.3, roughness: 0.7 });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    rocketGroup.add(body);

    const engineGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.25, 16);
    const engineMat = new THREE.MeshBasicMaterial({
      color: 0x39ff14,
      transparent: true,
      opacity: 0.8,
    });
    const engine = new THREE.Mesh(engineGeo, engineMat);
    engine.position.y = -0.7;
    rocketGroup.add(engine);
    
    const rocketLight = new THREE.PointLight(0x39FF14, 0.7, 5);
    rocketLight.position.y = -0.7;
    rocketGroup.add(rocketLight);


    rocketGroup.position.set(0, -camera.position.z / 2 + 3, 10); 
    rocketGroup.rotation.x = Math.PI / 16; 
    scene.add(rocketGroup);
    return rocketGroup;
  }
  rocket = createRocket();
  
  const ambientLight = new THREE.AmbientLight(0x001800); 
  scene.add(ambientLight);
  const directionalLight = new THREE.DirectionalLight(0x00ff00, 0.2);
  directionalLight.position.set(5, 10, 7);
  scene.add(directionalLight);


  function shootBullet() {
    if (introOverlay && introOverlay.style.opacity !== "0" && rocket) { 
      const bulletGeo = new THREE.SphereGeometry(0.12, 10, 10);
      const bulletMat = new THREE.MeshBasicMaterial({ color: 0x66ff66 }); 
      const bullet = new THREE.Mesh(bulletGeo, bulletMat);

      const bulletLight = new THREE.PointLight(0x66ff66, 1, 3);
      bullet.add(bulletLight);

      bullet.position.set(
        rocket.position.x,
        rocket.position.y + 0.8,
        rocket.position.z
      );
      bullet.userData.velocity = new THREE.Vector3(0, 0.4, 0); 
      scene.add(bullet);
      bullets.push(bullet);
    }
  }

  function createFallingObject() {
    const types = ["cube", "tetrahedron", "icosahedron"]; 
    const type = types[Math.floor(Math.random() * types.length)];
    let geometry;
    const size = THREE.MathUtils.randFloat(0.4, 0.8);

    if (type === "cube") {
      geometry = new THREE.BoxGeometry(size, size, size);
    } else if (type === "tetrahedron") {
      geometry = new THREE.TetrahedronGeometry(size);
    } else { 
      geometry = new THREE.IcosahedronGeometry(size, 0);
    }
    
    const material = new THREE.MeshStandardMaterial({ 
        color: Math.random() > 0.5 ? 0x00AA00 : 0x00CC00, 
        wireframe: Math.random() > 0.3, 
        emissive: 0x001000,
        metalness: 0.2,
        roughness: 0.8
    });
    
    const shape = new THREE.Mesh(geometry, material);
    shape.position.set(
      THREE.MathUtils.randFloatSpread(camera.position.z * 0.7 * camera.aspect), 
      camera.position.z / 2 + 5, 
      10 
    );
    shape.rotation.set(
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI
    );
    shape.userData.velocity = new THREE.Vector3(
        0, 
        THREE.MathUtils.randFloat(-0.03, -0.06), 
        0
    );
    shape.userData.rotationSpeed = new THREE.Vector3(
        THREE.MathUtils.randFloat(-0.01, 0.01),
        THREE.MathUtils.randFloat(-0.01, 0.01),
        THREE.MathUtils.randFloat(-0.01, 0.01)
    );
    scene.add(shape);
    fallingObjects.push(shape);
  }

  for (let i = 0; i < 8; i++) {
    createFallingObject();
  }
  
  setInterval(() => {
    if (introOverlay && introOverlay.style.opacity !== "0" && fallingObjects.length < 15) { 
        createFallingObject();
    }
  }, 2000); 


  window.addEventListener("mousemove", (e) => {
    if (!rocket || !introOverlay || introOverlay.style.opacity === "0") return; 
    const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    const frustumWidthAtRocketZ = 2 * Math.tan(camera.fov * Math.PI / 360) * (camera.position.z - rocket.position.z);
    const maxX = frustumWidthAtRocketZ * camera.aspect / 2 * 0.85; 
    const targetX = THREE.MathUtils.clamp(mouseX * maxX, -maxX, maxX);
    rocket.position.x = THREE.MathUtils.lerp(rocket.position.x, targetX, 0.1);
  });

  window.addEventListener("click", shootBullet);

  function createExplosion(position, colorHex) {
    const debrisCount = THREE.MathUtils.randInt(15, 25);
    for (let i = 0; i < debrisCount; i++) {
      const debrisGeo = new THREE.BoxGeometry(
        THREE.MathUtils.randFloat(0.03, 0.08), 
        THREE.MathUtils.randFloat(0.1, 0.3),
        THREE.MathUtils.randFloat(0.03, 0.08)
      );
      const debrisMat = new THREE.MeshBasicMaterial({
        color: colorHex,
        transparent: true,
        opacity: 1,
      });
      const debris = new THREE.Mesh(debrisGeo, debrisMat);
      debris.position.copy(position);
      debris.userData.velocity = new THREE.Vector3(
        THREE.MathUtils.randFloatSpread(0.35),
        THREE.MathUtils.randFloatSpread(0.35),
        THREE.MathUtils.randFloatSpread(0.35)
      );
      debris.userData.life = THREE.MathUtils.randFloat(0.8, 1.5); 
      debris.userData.rotationSpeed = new THREE.Vector3(
        THREE.MathUtils.randFloatSpread(0.1),
        THREE.MathUtils.randFloatSpread(0.1),
        THREE.MathUtils.randFloatSpread(0.1)
       );
      scene.add(debris);
      explosions.push(debris);
    }
  }
  const clock = new THREE.Clock();

  function animateIntro() {
    if (!introCanvas || !renderer) return; 
    
    if (introOverlay && introOverlay.style.opacity < 0.1 && introOverlay.style.display === 'none') {
        // Animation continues for background effect even if game elements are not updated
    }
    requestAnimationFrame(animateIntro);
    const delta = clock.getDelta();


    dataBits.forEach((bit) => {
      bit.position.addScaledVector(bit.userData.velocity, delta * 60); 
      bit.material.opacity -= 0.0015;

      if (bit.position.y < -camera.position.z / 2 - 10 || bit.material.opacity <= 0) {
        bit.position.y = camera.position.z / 2 + Math.random() * 15;
        bit.position.x = THREE.MathUtils.randFloatSpread(120);
        bit.material.opacity = Math.random() * 0.5 + 0.1;
      }
    });

    if (introOverlay && introOverlay.style.opacity !== "0") {
        fallingObjects.forEach((obj, index) => {
            obj.position.addScaledVector(obj.userData.velocity, delta * 60);
            obj.rotation.x += obj.userData.rotationSpeed.x * delta * 60;
            obj.rotation.y += obj.userData.rotationSpeed.y * delta * 60;
            obj.rotation.z += obj.userData.rotationSpeed.z * delta * 60;

            if (obj.position.y < -camera.position.z / 2 - 5) {
                scene.remove(obj);
                obj.geometry.dispose();
                obj.material.dispose();
                fallingObjects.splice(index, 1);
            }
        });

        bullets.forEach((bullet, index) => {
            bullet.position.addScaledVector(bullet.userData.velocity, delta * 60);
            if (bullet.position.y > camera.position.z / 2 + 5) {
                scene.remove(bullet);
                bullet.geometry.dispose();
                bullet.material.dispose();
                if (bullet.children.length > 0) bullet.children[0].dispose(); 
                bullets.splice(index, 1);
            }
        });

        for (let i = bullets.length - 1; i >= 0; i--) {
            const bullet = bullets[i];
            if (!bullet) continue;
            for (let j = fallingObjects.length - 1; j >= 0; j--) {
                const obj = fallingObjects[j];
                if (!obj) continue;
                if (bullet.position.distanceTo(obj.position) < 1.0) { 
                    createExplosion(obj.position.clone(), obj.material.color.getHex());
                    
                    scene.remove(bullet);
                    bullet.geometry.dispose();
                    bullet.material.dispose();
                    if (bullet.children.length > 0) bullet.children[0].dispose(); 
                    bullets.splice(i, 1);

                    scene.remove(obj);
                    obj.geometry.dispose();
                    obj.material.dispose();
                    fallingObjects.splice(j, 1);
                    break; 
                }
            }
        }
    }


    explosions.forEach((debris, index) => {
      debris.userData.velocity.y -= 0.01 * delta * 60; 
      debris.position.addScaledVector(debris.userData.velocity, delta * 60);
      debris.rotation.x += debris.userData.rotationSpeed.x * delta * 60;
      debris.rotation.y += debris.userData.rotationSpeed.y * delta * 60;
      debris.rotation.z += debris.userData.rotationSpeed.z * delta * 60;

      debris.userData.life -= delta;
      debris.material.opacity = THREE.MathUtils.clamp(debris.userData.life / 1.0, 0, 1); 

      if (debris.userData.life <= 0) {
        scene.remove(debris);
        debris.geometry.dispose();
        debris.material.dispose();
        explosions.splice(index, 1);
      }
    });
    
    renderer.render(scene, camera);
  }
  
  if (introCanvas && renderer) { 
    animateIntro();
  }
}


// ============================================================
// Handle Window Resize
// ============================================================
window.addEventListener("resize", () => {
  if (camera && renderer) {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
});
// ============================================================
// Transition Animation Logic
// ============================================================
const delay = ms => new Promise(res => setTimeout(res, ms));
let hexRainInterval = null;

function generateHexLine() {
    const chars = "0123456789ABCDEF";
    let line = "";
    // Approximate based on common screen widths; adjust if needed
    const lineLength = Math.floor(window.innerWidth / (14 * 0.6)); // 14px font, ~0.6 char width
    for (let i = 0; i < lineLength; i++) {
        line += chars[Math.floor(Math.random() * chars.length)];
    }
    return line;
}

function startHexRainEffect() {
    if (!hexRainContainer) return;
    hexRainContainer.innerHTML = ''; // Clear previous
    const lines = [];
    const maxLines = Math.floor(window.innerHeight / 16); // ~16px line height

    for(let i = 0; i < maxLines; i++) {
        lines.push(generateHexLine());
    }
    hexRainContainer.textContent = lines.join('\n');

    hexRainInterval = setInterval(() => {
        lines.shift();
        lines.push(generateHexLine());
        hexRainContainer.textContent = lines.join('\n');
    }, 100); // Speed of rain
}

function stopHexRainEffect() {
    if (hexRainInterval) clearInterval(hexRainInterval);
    hexRainInterval = null;
    if (hexRainContainer) hexRainContainer.textContent = '';
}

async function typeTerminalMessage(message, speed = 75, clear = false) {
    if (!terminalTextOutput) return;
    if (clear) {
        terminalTextOutput.innerHTML = ''; // Use innerHTML to clear cursor if it was part of text
    } else if (terminalTextOutput.innerHTML !== '') {
        terminalTextOutput.innerHTML += '\n'; // Add newline before new message
    }

    // Temporarily remove cursor for typing, then re-add
    terminalTextOutput.classList.remove('cursor-active');


    let currentText = terminalTextOutput.innerHTML; // Get existing content
    for (let i = 0; i < message.length; i++) {
        currentText += message[i];
        terminalTextOutput.innerHTML = currentText;
        await delay(speed);
    }
     terminalTextOutput.innerHTML = currentText; // Ensure full message is set
}


async function runIntermediateTransition() {
    if (!transitionOverlay || !mainContentElement) {
        console.error("Transition or main content elements not found!");
        // Fallback: directly show main content
        if (mainContentElement) mainContentElement.classList.add('visible');
        if (contactBtn) contactBtn.style.display = "flex";
        document.body.style.overflow = ''; // Restore scroll
        return;
    }

    transitionOverlay.style.display = "flex";
    await delay(50); // Allow display to apply before opacity transition
    transitionOverlay.style.opacity = "1";

    startHexRainEffect();
    if (terminalTextOutput) terminalTextOutput.innerHTML = ''; // Clear terminal

    await delay(1000);
    transitionOverlay.classList.add('glitching');
    await typeTerminalMessage("SYSTEM_CHECK::INITIATED", 50, true);
    await delay(1500);
    await typeTerminalMessage("HEX_STREAM::ACTIVE", 50);
    await delay(1500);
    transitionOverlay.classList.remove('glitching');
    await typeTerminalMessage("ACCESSING_MAINFRAME::ENCRYPTED_LAYER_7", 60);
    await delay(2000);
    await typeTerminalMessage("DECRYPTION_SUCCESSFUL...", 40);
    await delay(1000);
    await typeTerminalMessage("LOADING_CV_INTERFACE_V3.0...", 70);
    
    stopHexRainEffect();
    await delay(1500);

    transitionOverlay.classList.add('disappearing');

    // Wait for disappearing animation to complete
    setTimeout(() => {
        transitionOverlay.style.display = "none";
        transitionOverlay.classList.remove('disappearing');
        transitionOverlay.style.opacity = "0"; // Reset opacity

        // Reveal main content
        mainContentElement.classList.add('visible');
        
        if (contactBtn) contactBtn.style.display = "flex";
        // Show ToTopBtn only if already scrolled down (unlikely right after intro)
        if (toTopBtn && window.pageYOffset > 300) {
            toTopBtn.style.display = "flex";
        } else if (toTopBtn) {
            toTopBtn.style.display = "none"; // Explicitly hide if not scrolled
        }
        
        if (mainContentElement) {
             mainContentElement.setAttribute('tabindex', '-1');
             mainContentElement.focus({ preventScroll: true }); // Prevent scroll on focus
        }

        if (typeof AOS !== 'undefined') {
            AOS.refreshHard(); // Crucial for AOS to pick up newly visible elements
        }
        document.body.style.overflow = ''; // Restore scrolling
    }, 700); // Matches digital-dissolve animation duration
}
// ============================================================
// Intro Overlay: Remove overlay on Enter button click
// ============================================================
if (enterBtn && introOverlay) {
  enterBtn.addEventListener("click", () => {
    document.body.style.overflow = 'hidden'; // Prevent scrolling during transitions
    
    // Optionally, stop or fade out the Three.js game elements more gracefully
    // For example, you could make the rocket and falling objects fade or shrink.
    // This example just hides the overlay.
    if (introOverlay) introOverlay.style.opacity = "0";

    // Stop game logic if it's still running aggressively
    // (e.g., clear intervals for creating new falling objects if any are still active)
    // This depends on how your Three.js game loop is structured.
    // For this example, we assume the visual fade out of introOverlay is enough.

    setTimeout(() => {
      if (introOverlay) introOverlay.style.display = "none";
      
      // Clean up Three.js resources if possible to free memory,
      // though if the canvas is just hidden, it might not be strictly necessary
      // unless it's resource-intensive.
      // scene.remove(rocket); rocket.geometry.dispose(); rocket.material.dispose(); etc. for all objects.
      // renderer.dispose(); // If you're completely done with it.

      runIntermediateTransition(); // Start the new transition

    }, 1200); // Time for intro overlay to fade out
  });
}
// ============================================================

if (contactBtn && contactInfoPopup) {
  contactBtn.addEventListener("click", () => {
    const isVisible = contactInfoPopup.style.display === "flex";
    contactInfoPopup.style.display = isVisible ? "none" : "flex";
    contactBtn.setAttribute('aria-expanded', String(!isVisible));
  });
  document.addEventListener('click', function(event) {
    if (contactInfoPopup.style.display === 'flex' && 
        !contactBtn.contains(event.target) && 
        !contactInfoPopup.contains(event.target)) {
        contactInfoPopup.style.display = 'none';
        contactBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

// Initial state for buttons that appear after intro
if (contactBtn) contactBtn.style.display = "none";
if (toTopBtn) toTopBtn.style.display = "none";