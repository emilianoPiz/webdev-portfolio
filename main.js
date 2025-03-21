// === main.js ===
// Dati del CV
const data = {
    name: "Emiliano Pizzuti",
    title: "Web Developer",
    contacts: {
      linkedin: "https://www.linkedin.com/in/emiliano-pizzuti-879715247",
      phone_number: "+39 366 973 90 30",
      Github: "https://github.com/emilianoPiz"
    },
    professional_profile:
      "Sviluppatore con solida esperienza nell’ambito web, con un orientamento verso lo sviluppo front-end e un forte interesse per l’innovazione tecnologica. Attualmente studente di Informatica presso La Sapienza di Roma, possiedo una visione completa del ciclo di vita del software, dalla progettazione iniziale fino alla manutenzione e all’ottimizzazione continua. Desidero contribuire a progetti nati da zero, lavorando all’interno di un team coeso e strutturato, per migliorare costantemente le mie competenze e generare valore tangibile per l’azienda.",
    education: {
      diploma: {
        istituto: "Istituto tecnico professionale G. Falcone, Colleferro (RM)",
        indirizzo: "Indirizzo Informatico",
        votazione: "83/100"
      },
      universita:
        "Attualmente iscritto alla facoltà di Informatica presso La Sapienza di Roma, con competenze sviluppate in DSA, JAVA, Algebra Booleana, Python, OOAD, OOP, Progettazione di circuiti  "
    },
    certifications: [
      {
        name: "Angular Developer Certificate",
        provider: "Udemy",
        course_title: "Maximilian Schwarzmueller 'The Complete Angular Course'",
        skills:
          "ho imparato come utilizzare angular nelle versioni 8-14 e 14+ con un corso da più di 560 ore, imparando con successo la libreria rxjs, la comunicazione tra componenti, l'integrazione di librerie esterne in ambiente angular, l'uso della CLI di angular, l'uso dello state manager NgRx, il lifecycle dei componenti, lo sviluppo di applicazioni SSR e SPA, l'uso di Less e Sass per rendere il sito themizabile, il testing con cypress, il deploy in produzione di un'applicazione angular "
      }
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
          "Organizzazione per obiettivi e call settimanali di allineamento"
        ],
        note:
          "L’esperienza ha consentito di affrontare problematiche di performance e gestione della memoria, fornendo una solida base sulla programmazione e l'analisi orientata agli oggetti"
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
          "Focus su CI/CD pipelines, qualità del codice e collaborazione cross-team"
        ],
        note:
          "L’esperienza ha consentito di affrontare problematiche di performance e UX, fornendo un contributo al refactoring del codice CSS e all’isolamento degli stili cromatici del progetto"
      },
      {
        title: "Help Desk Support",
        company: "Skysoft Provider",
        date_range: "05/2018 - 12/2023",
        responsibilities: [
          "Creazione, gestione e chiusura di ticket in piattaforma Jira (infinity)",
          "Formazione dei nuovi assunti",
          "Assistenza tecnica e amministrativa b2b e b2c",
          "Assistenza via chat in diverse lingue (italiano, inglese, rumeno)"
        ]
      },
      {
        title: "Customer Care",
        company: "Puma Slot srl",
        date_range: "06/2014 - 03/2018",
        responsibilities: [
          "Fornito supporto di primo livello per problemi software, hardware e contabili, migliorando l’efficienza del servizio",
          "Creato e mantenuto documentazione tecnica per favorire la risoluzione autonoma dei problemi da parte degli utenti",
          "Facilitato la comunicazione tra cliente e reparto tecnico, ottimizzando tempi e garantendo trasparenza",
          "Supportato clienti nell’attivazione di infrastrutture di rete e nell’introduzione ai prodotti aziendali."
        ]
      }
    ],
    projects: [
      {
        name: "Betagioco.it",
        description:
          "Sito di scommesse sviluppato e manutenuto in Symfony, con flussi di lavoro basati su Git Flow. È il progetto migliore al quale ho contribuito attivamente per un anno, fornendomi un’importante esperienza nello sviluppo web di siti complessi e dinamici, oltre a una grande conoscenza dei flussi di lavoro in team.",
        url: "https://betagioco.it"
      },
      {
        name: "SocialGaming.com",
        description:
          "Piattaforma social gaming con un sistema di amicizie e messaggistica istantanea (basato su WebSocket), interazioni dirette tramite commenti e post sui videogiochi, personalizzazione completa del sito con temi multipli, possibilità di modificare password e avatar, sistema di guard per limitare l’accesso a determinate sezioni, oltre all’integrazione con le API di Free-to-Game per offrire un’ampia lista di titoli free-to-play da giocare e commentare.",
        url: "https://socialgamingfrontend.onrender.com/"
      }
    ],
    skills: {
      technical: [
        "JavaScript/TypeScript",
        "Angular",
        "Node.js",
        "Express",
        "PHP",
        "Symfony",
        "Git Flow Workflow",
        "Single Page Applications",
        "SQL/noSQL DB",
        "jQuery",
        "Docker per lo sviluppo e debugging in ambienti containerizzati",
        "Conoscenze di base in Python (acquisite all’università)"
      ],
      methodologies: [
        "Agile/Scrum",
        "Utilizzo di Confluence e Infinity per la pianificazione dei task",
        "Allineamenti periodici (call settimanali) per garantire una comunicazione efficace"
      ]
    },
    languages: {
      italiano: "Madrelingua",
      inglese: "B2",
      spagnolo: "Conoscenza colloquiale",
      rumeno: "Conoscenza colloquiale"
    },
    personal_qualities: [
      "Puntualità",
      "Precisione",
      "Affidabilità",
      "Capacità di iniziativa",
      "Esperienza decennale in help desk e customer care, utile per comprendere a 360° le esigenze del cliente e le dinamiche interne ai team di sviluppo"
    ]
  };

  //TOP BUTTON
  // Gestione del to-top-button
  const toTopBtn = document.getElementById('TopBtn');
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      toTopBtn.style.display = 'block';
    } else {
      toTopBtn.style.display = 'none';
    }
  });
  toTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  
  // Configurazione di Particles.js
  //particlesJS('particles-js', {
//     particles: {
//       number: { value: 80, density: { enable: true, value_area: 800 } },
//       color: { value: "#2a7ae2" },
//       shape: { type: "circle" },
//       opacity: { value: 0.5 },
//       size: { value: 3, random: true },
//       line_linked: { enable: true, distance: 150, color: "#2a7ae2", opacity: 0.4, width: 1 },
//       move: { enable: true, speed: 3 }
//     },
//     interactivity: {
//       events: {
//         onhover: { enable: true, mode: "grab" },
//         onclick: { enable: true, mode: "push" },
//         resize: true
//       },
//       modes: {
//         grab: { distance: 140, line_linked: { opacity: 1 } },
//         push: { particles_nb: 4 }
//       }
//     },
//     retina_detect: true
//   });
  
  // Gestione del menu mobile
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    menuToggle.classList.toggle('active');
  });
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      menuToggle.classList.remove('active');
    });
  });
  
  // Gestione dello switch del tema
  const themeSwitch = document.getElementById('theme-switch');
  themeSwitch.addEventListener('change', () => {
    const isDark = themeSwitch.checked;
    document.body.classList.toggle('dark-theme', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeSwitch.checked = true;
  }
  
  // Reveal delle sezioni al scroll
  const sections = document.querySelectorAll('.content-section');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  sections.forEach(section => observer.observe(section));
  
  // Inizializzazione di AOS per animazioni al scroll
  AOS.init({
    duration: 1000,
    once: true
  });
  
  // Animazione delle skill bar quando visibili
  const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBars = entry.target.querySelectorAll('.skill-progress');
        progressBars.forEach(bar => {
          const percentage = bar.getAttribute('data-progress');
          bar.style.width = percentage;
        });
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('#skills-container').forEach(container => skillObserver.observe(container));
  
  // Animazioni di ingresso con GSAP per card 3D, card glow e timeline items
  gsap.utils.toArray('.card-3d, .card-glow, .timeline-item').forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );
  });
  

  
  // Popolamento dinamico dell'HTML con i dati del CV
  window.addEventListener("DOMContentLoaded", () => {
    // Profilo professionale
    document.getElementById("profile-text").textContent = data.professional_profile;
  
    // Sezione Educazione
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
  
    // Sezione Certificazioni
    const certContainer = document.getElementById("certifications-container");
    certContainer.innerHTML = data.certifications.map(cert => `
      <div class="card-glow">
        <h3>${cert.name}</h3>
        <p><strong>${cert.provider}</strong></p>
        <p>${cert.skills}</p>
      </div>
    `).join("");
  
    // Sezione Esperienza (involta in un container timeline per applicare lo stile corretto)
    const expContainer = document.getElementById("experience-container");
    expContainer.innerHTML = `<div>` +
      data.experience.map(exp => `
      <div class="card-glow">

            <h3>${exp.title}</h3>
            <p><strong>${exp.company}</strong> (${exp.start_date || exp.date_range})</p>
            <ul>${exp.responsibilities.map(r => `<li>${r}</li>`).join('')}</ul> 
            ${exp.note ? `<p>Cosa mi ha lasciato questa esperienza: <em>${exp.note}</em></p>` : ''}
            </div>
      `).join("") +
    `</div>`;
  
    // Sezione Progetti
    const projectsContainer = document.getElementById("projects-container");
    projectsContainer.innerHTML = data.projects.map(proj => `
      <div class="card-glow">
        <h3><a href="${proj.url}" target="_blank">${proj.name}</a></h3>
        <p>${proj.description}</p>
      </div>
    `).join("");
  
    // Sezione Competenze (oltre alle skill bar, aggiungiamo le card 3D già presenti)
    const skillsContainer = document.getElementById("skills-container");
    Object.entries(data.skills).forEach(([category, items]) => {
      const div = document.createElement('div');
      div.classList.add('card-3d');
      div.innerHTML = `<h3>${category}</h3><ul>${items.map(i => `<li>${i}</li>`).join('')}</ul>`;
      skillsContainer.appendChild(div);
    });
  
    // Sezione Lingue
    const langContainer = document.getElementById("languages-container");
    langContainer.innerHTML = Object.entries(data.languages).map(([lang, lvl]) => `
      <p>${lang}: ${lvl}</p>
    `).join("");
  
    // Sezione Qualità Personali
    const qualitiesContainer = document.getElementById("qualities-container");
    qualitiesContainer.innerHTML = data.personal_qualities.map(q => `<p>${q}</p>`).join("");
  
    // Inizializzazione del grafico (Chart.js) per le skill tecniche
    const chartCanvas = document.getElementById('skillsChart');
    if (chartCanvas) {
      const ctx = chartCanvas.getContext('2d');
      const technicalSkills = data.skills.technical;
      // Assegniamo un valore fittizio (8 su 10) per ogni skill per demo
      const ratings = technicalSkills.map(() => 8);
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: technicalSkills,
          datasets: [{
            label: 'Skill Rating',
            data: ratings,
            backgroundColor: 'rgba(42, 122, 226, 0.5)',
            borderColor: 'rgba(42, 122, 226, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: { beginAtZero: true, max: 10 }
          }
        }
      });
    }
  });
 // === Improved Three.js Starfield Background with Interactive Glow ===

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, window.innerWidth / window.innerHeight, 0.1, 1000
);
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('intro-canvas'),
  alpha: true
});
renderer.setSize(window.innerWidth, window.innerHeight);

// Star Geometry & Material (glow effect)
const starGeometry = new THREE.SphereGeometry(0.05, 24, 24);
const starMaterial = new THREE.MeshBasicMaterial({ 
  color: 0xffffff, 
  transparent: true,
  opacity: 0.8 
});

// Star creation function
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

// Generate stars array
const stars = Array.from({ length: 1200 }, createStar);
camera.position.z = 30;

// Track mouse movement for interaction
const mouse = new THREE.Vector2();
window.addEventListener('mousemove', (e) => {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
});

// Raycaster for particle interaction
const raycaster = new THREE.Raycaster();

function animate() {
  requestAnimationFrame(animate);

  // Particle animation (movement)
  stars.forEach(star => {
    star.rotation.x += 0.001;
    star.rotation.y += 0.001;
    star.position.z += 0.05;
    if (star.position.z > 100) {
      star.position.z = THREE.MathUtils.randFloatSpread(200);
    }
    // Gradually return to original size and opacity
    star.scale.lerp(new THREE.Vector3(1, 1, 1), 0.02);
    star.material.opacity += (0.8 - star.material.opacity) * 0.02;
  });

  // Interactive glow and grow
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(stars, false);
  intersects.forEach(intersect => {
    intersect.object.scale.lerp(new THREE.Vector3(3, 3, 3), 0.1);
    intersect.object.material.opacity += (1 - intersect.object.material.opacity) * 0.1;
  });

  renderer.render(scene, camera);
}

animate();

// Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
document.getElementById('contact-btn').addEventListener('click', () => {
    const info = document.getElementById('contact-info');
    if (info.style.display === 'flex') {
      info.style.display = 'none';
    } else {
      info.style.display = 'flex';
    }
  });


  document.getElementById('contact-btn').addEventListener('click', () => {
    const info = document.getElementById('contact-info');
    if (info.style.display === 'flex') {
      info.style.display = 'none';
    } else {
      info.style.display = 'flex';
    }
  });
  

// Intro Overlay Animation (keeping existing functionality)
document.getElementById('enter-btn').addEventListener('click', () => {
  const introOverlay = document.getElementById('intro-overlay');
  introOverlay.style.opacity = '0';
  setTimeout(() => introOverlay.style.display = 'none', 1200);
});
document.getElementById('contact-btn').addEventListener('click', () => {
    const info = document.getElementById('contact-info');
    info.style.display = info.style.display === 'flex' ? 'none' : 'flex';
  });
  
  // Mostra il pulsante contatti dopo la intro
  document.getElementById('enter-btn').addEventListener('click', () => {
    setTimeout(() => {
      document.getElementById('contact-btn').style.display = 'flex';
    }, 1200);
  });
  