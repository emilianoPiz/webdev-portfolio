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
      "Attualmente iscritto alla facoltà di Informatica presso La Sapienza di Roma, con competenze sviluppate in DSA, JAVA, Algebra Booleana, Python, OOAD, OOP, Progettazione di circuiti  ",
  },
  certifications: [
    {
      name: "Angular Developer Certificate",
      provider: "Udemy",
      course_title: "Maximilian Schwarzmueller 'The Complete Angular Course'",
      skills:
        "ho imparato come utilizzare angular nelle versioni 8-14 e 14+ con un corso da più di 560 ore, imparando con successo la libreria rxjs, la comunicazione tra componenti, l'integrazione di librerie esterne in ambiente angular, l'uso della CLI di angular, l'uso dello state manager NgRx, il lifecycle dei componenti, lo sviluppo di applicazioni SSR e SPA, l'uso di Less e Sass per rendere il sito themizabile, il testing con cypress, il deploy in produzione di un'applicazione angular ",
    },
  ],
  experience: [
    {
      title: "Game Developer Junior",
      company: "Nemesis Games Studio",
      start_date: "01/2024",
      responsibilities: [
        "Supporto allo sviluppo e porting di slot machine web con PixiJS",
        "Progettazione object oriented e strutture dati per game loop e stato di gioco",
        "Gestione memoria, rendering ottimizzato, sprite sheets, transizioni ed effetti particellari",
        "Versioning con Git Flow e sessioni di pair programming",
        "Formazione continua su game development e best practice PixiJS",
        "Organizzazione per obiettivi e call settimanali di allineamento",
      ],
      note: "L’esperienza ha consentito di affrontare problematiche di performance e gestione della memoria, fornendo una solida base sulla programmazione e l'analisi orientata agli oggetti",
    },
    {
      title: "Frontend Developer",
      company: "Sport-Tech S.R.L.",
      start_date: "01/2024",
      responsibilities: [
        "Sviluppo e manutenzione di web app scalabili con Angular-Ionic (v17)",
        "Creazione e gestione di siti modulari con Twig e Symfony",
        "Expertise in CSS moderno, TypeScript e JavaScript per UI reactive e performanti",
        "Integrazione API interne/esterne, gestione stato e architetture component-based",
        "Adozione di librerie esterne, versionamento avanzato con GitFlow e code review",
        "Esperienza con Docker: creazione immagini, gestione container e ambienti isolati",
        "Implementazione di responsive design, unit testing e ottimizzazione delle performance",
        "Focus su CI/CD pipelines, qualità del codice e collaborazione cross-team",
      ],
      note: "L’esperienza ha consentito di affrontare problematiche di performance e UX, fornendo un contributo al refactoring del codice CSS e all’isolamento degli stili cromatici del progetto",
    },
    {
      title: "Help Desk Support",
      company: "Skysoft Provider",
      date_range: "05/2018 - 12/2023",
      responsibilities: [
        "Creazione, gestione e chiusura di ticket in piattaforma Jira (infinity)",
        "Formazione dei nuovi assunti",
        "Assistenza tecnica e amministrativa b2b e b2c",
        "Assistenza via chat in diverse lingue (italiano, inglese, rumeno)",
      ],
    },
    {
      title: "Customer Care",
      company: "Puma Slot srl",
      date_range: "06/2014 - 03/2018",
      responsibilities: [
        "Fornito supporto di primo livello per problemi software, hardware e contabili, migliorando l’efficienza del servizio",
        "Creato e mantenuto documentazione tecnica per favorire la risoluzione autonoma dei problemi da parte degli utenti",
        "Facilitato la comunicazione tra cliente e reparto tecnico, ottimizzando tempi e garantendo trasparenza",
        "Supportato clienti nell’attivazione di infrastrutture di rete e nell’introduzione ai prodotti aziendali.",
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
      "SQL/noSQL",
      "Git",
      "Docker",
    ],
    Tecniche: [
      "SPA/SSR",
      "Recursive Solving",
      "Responsive Design",
      "Lazy Loading",
      "Data Analysis",
      "CRUD",
      "RESTful",
    ],
    Metodologie: [
      "Object Oriented Analysis, Design and Programming",
      "Progettazione mediante diagrammi UML",
      "Agile/Scrum",
      "Utilizzo di Confluence e Infinity per la pianificazione dei task",
      "Allineamenti periodici (call settimanali) per garantire una comunicazione efficace",
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
  ],
};

// ============================================================
// Top Button Functionality
// ============================================================
const toTopBtn = document.getElementById("TopBtn");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
});
toTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ============================================================
// Mobile Menu Toggle
// ============================================================
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
  menuToggle.classList.toggle("active");
});
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    menuToggle.classList.remove("active");
  });
});
const year = document.getElementById("year");
const d = new Date();
year.innerHTML = d.getFullYear();

// ============================================================
// Theme Switcher
// ============================================================
const themeSwitch = document.getElementById("theme-switch");
themeSwitch.addEventListener("change", () => {
    const isDark = themeSwitch.checked;
    document.body.classList.toggle("dark-theme", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  
    // Only run this on iOS devices
    const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isiOS) {
      // Save the current scroll position
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
      // Force a repaint by temporarily toggling the display property
      document.body.style.display = "none";
      setTimeout(() => {
        document.body.style.display = "";
        // Restore the scroll position
        window.scrollTo(0, currentScroll);
      }, 0);
    }
  });
  
  
  
  
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-theme");
  themeSwitch.checked = true;
} else {
  document.body.classList.remove("dark-theme");
}

// ============================================================
// Section Reveal on Scroll (IntersectionObserver)
// ============================================================
const sections = document.querySelectorAll(".content-section");
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

// ============================================================
// Initialize AOS (Animate On Scroll)
// ============================================================
AOS.init({
  duration: 1000,
  once: true,
});

// ============================================================
// GSAP Animations for Cards and Timeline Items
// ============================================================
gsap.utils.toArray(".card-3d, .card-glow, .timeline-item").forEach((el) => {
  gsap.fromTo(
    el,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none play none",
      },
    }
  );
});

// ============================================================
// Dynamic Population of HTML Content
// ============================================================
window.addEventListener("DOMContentLoaded", () => {
  // Professional Profile
  document.getElementById("profile-text").textContent =
    data.professional_profile;

  // Education Section
  const educationContainer = document.getElementById("education-container");
  educationContainer.innerHTML = `
      <div class="card-3d">
        <h3>Università</h3>
        <p>${data.education.universita}</p>
      </div>
      <div class="card-3d">
        <h3>Diploma</h3>
        <p>${data.education.diploma.istituto}</p>
        <p>${data.education.diploma.indirizzo}, ${data.education.diploma.votazione}</p>
      </div>`;

  // Certifications Section
  const certContainer = document.getElementById("certifications-container");
  certContainer.innerHTML = data.certifications
    .map(
      (cert) => `
      <div class="card-glow">
        <h3>${cert.name}</h3>
        <p><strong>${cert.provider}</strong></p>
        <p>${cert.skills}</p>
      </div>`
    )
    .join("");

  // Experience Section (within timeline container)
  const expContainer = document.getElementById("experience-container");
  expContainer.innerHTML =
    `<div>` +
    data.experience
      .map(
        (exp) => `
        <div class="card-glow">
          <h3>${exp.title}</h3>
          <p><strong>${exp.company}</strong> (${
          exp.start_date || exp.date_range
        })</p>
          <ul style="list-style-type: none">${exp.responsibilities
            .map((r) => `<li>${r}</li>`)
            .join("")}</ul>
          ${
            exp.note
              ? `<p><strong>Cosa mi ha lasciato questa esperienza:</strong><em>${exp.note}</em></p>`
              : ""
          }
        </div>`
      )
      .join("") +
    `</div>`;

  // Projects Section
  const projectsContainer = document.getElementById("projects-container");
  projectsContainer.innerHTML = data.projects
    .map(
      (proj) => `
      <div class="card-glow">
        <h3><a href="${proj.url}" target="_blank">${proj.name}</a></h3>
        <p>${proj.description}</p>
      </div>`
    )
    .join("");

  // Skills Section (adding both skill lists)
  const skillsContainer = document.getElementById("skills-container");
  Object.entries(data.skills).forEach(([category, items]) => {
    const div = document.createElement("div");
    div.classList.add("card-3d");
    div.innerHTML = `<h3>${category}</h3><ul style="list-style-type: none">${items
      .map((i) => `<li>${i}</li>`)
      .join("")}</ul>`;
    skillsContainer.appendChild(div);
  });

  // Languages Section
  const langContainer = document.getElementById("languages-container");
  langContainer.innerHTML = Object.entries(data.languages)
    .map(([lang, lvl]) => `<p>${lang}: ${lvl}</p>`)
    .join("");

  // Personal Qualities Section
  const qualitiesContainer = document.getElementById("qualities-container");
  qualitiesContainer.innerHTML = data.personal_qualities
    .map((q) => `<p>${q}</p>`)
    .join("");
});

// ============================================================
// Three.js Starfield Background with Interactive Glow and Enhanced Impact Effects
// ============================================================

// ORIGINAL THREE.JS STARFIELD SETUP (DO NOT MODIFY)
const canvas = document.getElementById("intro-canvas");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 30;

// Create starfield particles
const starGeometry = new THREE.SphereGeometry(0.05, 24, 24);
const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.8 });
function createStar() {
  const star = new THREE.Mesh(starGeometry, starMaterial.clone());
  star.position.set(
    THREE.MathUtils.randFloatSpread(200),
    THREE.MathUtils.randFloatSpread(200),
    THREE.MathUtils.randFloatSpread(200)
  );
  scene.add(star);
  return star;
}
const stars = Array.from({ length: 1200 }, createStar);

// Mouse and Raycaster for interactive glow on stars
const mouse = new THREE.Vector2();
window.addEventListener("mousemove", (e) => {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
});
const raycaster = new THREE.Raycaster();

// ============================================================
// MINI GAME CODE (ADDED WITHOUT CHANGING ORIGINAL PARTICLES)
// ============================================================
let rocket;
const bullets = [];
const fallingObjects = [];
const explosions = []; // Array to hold explosion debris

// Create a rocket that will be controlled by the mouse
function createRocket() {
  const rocketGroup = new THREE.Group();
  // Rocket body
  const bodyGeo = new THREE.CylinderGeometry(0.2, 0.2, 1, 32);
  const bodyMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  const body = new THREE.Mesh(bodyGeo, bodyMat);
  rocketGroup.add(body);
  // Rocket nose
  const noseGeo = new THREE.ConeGeometry(0.2, 0.5, 32);
  const noseMat = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  const nose = new THREE.Mesh(noseGeo, noseMat);
  nose.position.y = 0.75;
  rocketGroup.add(nose);
  // Start at the bottom center of the viewport
  rocketGroup.position.set(0, -10, 10);
  scene.add(rocketGroup);
  return rocketGroup;
}
rocket = createRocket();

// Function to shoot a bullet from the rocket
function shootBullet() {
  const bulletGeo = new THREE.SphereGeometry(0.05, 8, 8);
  const bulletMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const bullet = new THREE.Mesh(bulletGeo, bulletMat);
  bullet.position.set(rocket.position.x, rocket.position.y + 0.75, rocket.position.z);
  scene.add(bullet);
  bullets.push(bullet);
}

// Create a falling geometric shape (cube, tetrahedron, or dodecahedron)
function createFallingObject() {
    const types = ["cube", "tetrahedron", "dodecahedron"];
    const type = types[Math.floor(Math.random() * types.length)];
    let geometry;
    if (type === "cube") {
      geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    } else if (type === "tetrahedron") {
      geometry = new THREE.TetrahedronGeometry(0.4);
    } else {
      geometry = new THREE.DodecahedronGeometry(0.5);
    }
    const material = new THREE.MeshBasicMaterial({ color: Math.random() * 0xffffff });
    const shape = new THREE.Mesh(geometry, material);
    // Fix: Set z to 10 to match the bullet's plane.
    shape.position.set((Math.random() - 0.5) * 20, 10, 10);
    scene.add(shape);
    fallingObjects.push(shape);
  }
  
  

// Spawn initial falling objects
for (let i = 0; i < 10; i++) {
  createFallingObject();
}

// Control the rocket's horizontal movement using mouse position
window.addEventListener("mousemove", (e) => {
  const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
  rocket.position.x = mouseX * 10;
});

// Shoot bullet on mouse click (in addition to any existing click events)
window.addEventListener("click", () => {
  shootBullet();
});

// ============================================================
// EXPLOSION FUNCTION: Create debris pieces that simulate the object breaking apart
// ============================================================
function createExplosion(position, color) {
  const debrisCount = 10; // Number of debris pieces per explosion
  for (let i = 0; i < debrisCount; i++) {
    const debrisGeo = new THREE.BoxGeometry(0.1, 0.1, 0.1);
    const debrisMat = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 1,
    });
    const debris = new THREE.Mesh(debrisGeo, debrisMat);
    debris.position.copy(position);
    // Assign a random velocity vector to simulate an explosive spread
    debris.userData.velocity = new THREE.Vector3(
      (Math.random() - 0.5) * 0.5,
      (Math.random() - 0.5) * 0.5,
      (Math.random() - 0.5) * 0.5
    );
    scene.add(debris);
    explosions.push(debris);
  }
}

// ============================================================
// ANIMATE LOOP: COMBINING ORIGINAL & MINI GAME UPDATES
// ============================================================
function animate() {
  requestAnimationFrame(animate);

  // ----- Original Starfield Animation -----
  stars.forEach((star) => {
    star.rotation.x += 0.001;
    star.rotation.y += 0.001;
    star.position.z += 0.05;
    if (star.position.z > 100) {
      star.position.z = THREE.MathUtils.randFloatSpread(200);
    }
    star.scale.lerp(new THREE.Vector3(1, 1, 1), 0.02);
    star.material.opacity += (0.8 - star.material.opacity) * 0.02;
  });

  // Interactive glow effect on stars
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(stars, false);
  intersects.forEach((intersect) => {
    intersect.object.scale.lerp(new THREE.Vector3(3, 3, 3), 0.1);
    intersect.object.material.opacity += (1 - intersect.object.material.opacity) * 0.1;
  });

  // ----- Mini Game Updates -----
  // Update falling objects: let them fall and reset when off-screen
  fallingObjects.forEach((obj) => {
    obj.position.y -= 0.05; // Falling speed
    if (obj.position.y < -12) {
      obj.position.y = 10;
      obj.position.x = (Math.random() - 0.5) * 20;
      // Fix: Reset z to 10 so it remains in the bullet's plane
      obj.position.z = 10;
    }
  });

  // Update bullets: move them upward and remove if off-screen
  for (let i = bullets.length - 1; i >= 0; i--) {
    bullets[i].position.y += 0.1;
    if (bullets[i].position.y > 12) {
      scene.remove(bullets[i]);
      bullets.splice(i, 1);
    }
  }

  // Collision detection: if a bullet hits a falling object, create explosion and remove both
  for (let i = bullets.length - 1; i >= 0; i--) {
    for (let j = fallingObjects.length - 1; j >= 0; j--) {
        if (bullets[i].position.distanceTo(fallingObjects[j].position) < 0.7) {
            // Create explosion effect and remove objects
            createExplosion(fallingObjects[j].position, fallingObjects[j].material.color.getHex());
            scene.remove(bullets[i]);
            scene.remove(fallingObjects[j]);
            bullets.splice(i, 1);
            fallingObjects.splice(j, 1);
            createFallingObject();
            break;
          }
          
    }
  }

  // Update explosion debris: apply velocity, gravity, fade out, and remove when invisible
  for (let i = explosions.length - 1; i >= 0; i--) {
    const debris = explosions[i];
    debris.userData.velocity.y -= 0.005; // gravity effect
    debris.position.add(debris.userData.velocity);
    debris.material.opacity -= 0.01;
    if (debris.material.opacity <= 0) {
      scene.remove(debris);
      explosions.splice(i, 1);
    }
  }

  renderer.render(scene, camera);
}
animate();

// ============================================================
// Handle Window Resize
// ============================================================
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// ============================================================
// Intro Overlay: Remove overlay on Enter button click
// ============================================================
const enterBtn = document.getElementById("enter-btn");
const introOverlay = document.getElementById("intro-overlay");
const contactBtn = document.getElementById("contact-btn");
const contactInfo = document.getElementById("contact-info");

enterBtn.addEventListener("click", () => {
  introOverlay.style.opacity = "0";
  contactBtn.removeAttribute("style")
  setTimeout(() => {
    introOverlay.style.display = "none";
  }, 1000);
});
contactBtn.addEventListener("click", () => {
    contactInfo.style.display =
      contactInfo.style.display === "flex" ? "none" : "flex";
  });