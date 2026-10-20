// ==========================================================================
// 1. Core UI Utility Functions (100% Reliable & Always Active)
// ==========================================================================
const toast = document.getElementById('toast');
const modalOverlay = document.getElementById('modal-overlay');
const cardExploreModal = document.getElementById('card-explore-modal');
const nexusCard = document.getElementById('nexus-demo-card');
const btnStatus = document.getElementById('btn-status');
let toastTimer = null;

function triggerToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

function updateButtonStatus(text, color = '#ffffff') {
  if (!btnStatus) return;
  btnStatus.textContent = text;
  btnStatus.style.color = color;
  btnStatus.style.transform = 'scale(1.06)';
  setTimeout(() => {
    btnStatus.style.transform = 'scale(1)';
  }, 150);
}

// Standard Demo Modal Handlers
function openModal() {
  if (!modalOverlay) return;
  modalOverlay.classList.add('active');
  modalOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!modalOverlay) return;
  modalOverlay.classList.remove('active');
  modalOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function confirmModal() {
  closeModal();
  triggerToast('Modal action confirmed! ✨');
}

// Component 02: Card Explore Modal Handlers
function openCardExplore() {
  if (!cardExploreModal) return;
  if (nexusCard) nexusCard.classList.add('active-highlight');
  cardExploreModal.classList.add('active');
  cardExploreModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  triggerToast('Exploring Spatial Audio Engine Telemetry! 🎧');
  updateButtonStatus('Component 02: Exploring Card Engine (Active)', '#38bdf8');
}

function closeCardExplore() {
  if (!cardExploreModal) return;
  cardExploreModal.classList.remove('active');
  cardExploreModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// ==========================================================================
// 2. Component Event Listeners
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {

  // ------------------------------------------------------------------------
  // Component 01: Buttons (Initially none highlighted, click to highlight one)
  // ------------------------------------------------------------------------
  const comp1Buttons = document.querySelectorAll('#comp1-buttons .btn');

  comp1Buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Remove highlight from all buttons in Component 1
      comp1Buttons.forEach((b) => b.classList.remove('active-highlight'));

      // Highlight only the clicked button
      btn.classList.add('active-highlight');

      const btnName = btn.innerText.trim();
      updateButtonStatus(`Active: ${btnName} ✓`, '#38bdf8');
      triggerToast(`${btnName} is now active & highlighted! ✨`);
    });
  });

  // ------------------------------------------------------------------------
  // Component 02: Card & Explore Action
  // ------------------------------------------------------------------------
  const cardActionBtn = document.getElementById('card-action-btn');
  const btnCloseExploreX = document.getElementById('btn-close-explore-x');
  const btnCloseExplore = document.getElementById('btn-close-explore');
  const btnToggleAudio = document.getElementById('btn-toggle-audio');
  const soundwaveBars = document.querySelectorAll('.soundwave-bar');

  // Clicking "Explore Engine" opens the telemetry modal
  if (cardActionBtn) {
    cardActionBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openCardExplore();
    });
  }

  // Clicking on the card itself also highlights it and provides feedback
  if (nexusCard) {
    nexusCard.addEventListener('click', () => {
      nexusCard.classList.add('active-highlight');
      updateButtonStatus('Card selected: Spatial Audio Engine', '#38bdf8');
    });
  }

  // Close Explore Modal buttons
  if (btnCloseExploreX) btnCloseExploreX.addEventListener('click', closeCardExplore);
  if (btnCloseExplore) btnCloseExplore.addEventListener('click', closeCardExplore);

  // Toggle soundwave animation inside Explore Modal
  let isSoundwaveActive = true;
  if (btnToggleAudio) {
    btnToggleAudio.addEventListener('click', () => {
      isSoundwaveActive = !isSoundwaveActive;
      soundwaveBars.forEach((bar) => {
        bar.style.animationPlayState = isSoundwaveActive ? 'running' : 'paused';
      });
      btnToggleAudio.textContent = isSoundwaveActive ? 'Pause Soundscape' : 'Resume Soundscape';
      triggerToast(isSoundwaveActive ? 'Soundscape resumed! 🎵' : 'Soundscape paused! ⏸️');
    });
  }

  // ------------------------------------------------------------------------
  // Navbar Buttons
  // ------------------------------------------------------------------------
  const btnDocs = document.getElementById('btn-docs');
  const btnOpenModalNav = document.getElementById('btn-open-modal-nav');
  if (btnDocs) {
    btnDocs.addEventListener('click', () => {
      triggerToast('Nexus UI Docs downloaded! 📄');
    });
  }
  if (btnOpenModalNav) {
    btnOpenModalNav.addEventListener('click', openModal);
  }

  // ------------------------------------------------------------------------
  // Component 04 & 05: Standard Modal Triggers
  // ------------------------------------------------------------------------
  const btnLaunchModal = document.getElementById('btn-launch-modal');
  const btnCloseModalX = document.getElementById('btn-close-modal-x');
  const btnDismissModal = document.getElementById('btn-dismiss-modal');
  const btnConfirmModal = document.getElementById('btn-confirm-modal');

  if (btnLaunchModal) btnLaunchModal.addEventListener('click', openModal);
  if (btnCloseModalX) btnCloseModalX.addEventListener('click', closeModal);
  if (btnDismissModal) btnDismissModal.addEventListener('click', closeModal);
  if (btnConfirmModal) btnConfirmModal.addEventListener('click', confirmModal);

  // Close modals on backdrop click
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }
  if (cardExploreModal) {
    cardExploreModal.addEventListener('click', (e) => {
      if (e.target === cardExploreModal) closeCardExplore();
    });
  }

  // Close modals on ESC key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (modalOverlay && modalOverlay.classList.contains('active')) closeModal();
      if (cardExploreModal && cardExploreModal.classList.contains('active')) closeCardExplore();
    }
  });

  // ------------------------------------------------------------------------
  // Component 03: Form Input Validation
  // ------------------------------------------------------------------------
  const demoEmail = document.getElementById('demo-email');
  const statusIcon = document.getElementById('input-status-icon');
  const inputHint = document.getElementById('input-hint');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (demoEmail && statusIcon && inputHint) {
    demoEmail.addEventListener('input', (e) => {
      const value = e.target.value.trim();

      if (value.length === 0) {
        statusIcon.classList.remove('active');
        inputHint.textContent = 'Type your email to see live validation';
        inputHint.className = 'input-hint';
      } else if (emailRegex.test(value)) {
        statusIcon.classList.add('active');
        inputHint.textContent = '✓ Valid email address entered';
        inputHint.className = 'input-hint success';
      } else {
        statusIcon.classList.remove('active');
        inputHint.textContent = 'Please enter a valid format (e.g. name@domain.com)';
        inputHint.className = 'input-hint';
      }
    });
  }

  // ------------------------------------------------------------------------
  // 3D Card Perspective Tilt
  // ------------------------------------------------------------------------
  const tiltElements = document.querySelectorAll('[data-tilt]');
  tiltElements.forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const rotX = -(y / (rect.height / 2)) * 10;
      const rotY = (x / (rect.width / 2)) * 10;

      el.style.transform = `perspective(800px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateZ(10px)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    });
  });
});

// ==========================================================================
// 3. Three.js 3D Geometric Design System Background (Protected Fallback)
// ==========================================================================
if (typeof THREE !== 'undefined') {
  const canvas = document.getElementById('webgl-canvas');
  if (canvas) {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x060913);
    scene.fog = new THREE.FogExp2(0x060913, 0.02);

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 24);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: false
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const ambientLight = new THREE.AmbientLight(0x6366f1, 0.6);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x38bdf8, 1.2);
    dirLight1.position.set(12, 16, 10);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x8b5cf6, 1.0);
    dirLight2.position.set(-12, -10, 10);
    scene.add(dirLight2);

    const cursorLight = new THREE.PointLight(0xa5b4fc, 2.5, 18);
    cursorLight.position.set(0, 0, 6);
    scene.add(cursorLight);

    const floatingGroup = new THREE.Group();
    scene.add(floatingGroup);

    const shapes = [];
    const geometries = [
      new THREE.TorusGeometry(1.6, 0.45, 16, 32),
      new THREE.IcosahedronGeometry(1.5, 0),
      new THREE.OctahedronGeometry(1.4, 0),
      new THREE.BoxGeometry(1.8, 1.8, 1.8),
      new THREE.DodecahedronGeometry(1.3, 0)
    ];

    const materials = [
      new THREE.MeshStandardMaterial({ color: 0x6366f1, metalness: 0.8, roughness: 0.2 }),
      new THREE.MeshStandardMaterial({ color: 0x8b5cf6, metalness: 0.85, roughness: 0.15, wireframe: true }),
      new THREE.MeshStandardMaterial({ color: 0x38bdf8, metalness: 0.9, roughness: 0.2 })
    ];

    for (let i = 0; i < 14; i++) {
      const geo = geometries[Math.floor(Math.random() * geometries.length)];
      const mat = materials[Math.floor(Math.random() * materials.length)];
      const mesh = new THREE.Mesh(geo, mat);

      mesh.position.set(
        (Math.random() - 0.5) * 32,
        (Math.random() - 0.5) * 22,
        (Math.random() - 0.5) * 12 - 2
      );

      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      const scale = Math.random() * 0.5 + 0.6;
      mesh.scale.set(scale, scale, scale);

      shapes.push({
        mesh: mesh,
        rotSpeedX: (Math.random() - 0.5) * 0.015,
        rotSpeedY: (Math.random() - 0.5) * 0.015,
        floatSpeed: Math.random() * 0.008 + 0.004,
        floatOffset: Math.random() * Math.PI * 2,
        initialY: mesh.position.y
      });

      floatingGroup.add(mesh);
    }

    const gridHelper = new THREE.GridHelper(60, 40, 0x6366f1, 0x1e293b);
    gridHelper.position.y = -12;
    gridHelper.rotation.x = 0.2;
    scene.add(gridHelper);

    const mouse = { x: 0, y: 0 };
    window.addEventListener('mousemove', (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      cursorLight.position.x = mouse.x * 12;
      cursorLight.position.y = mouse.y * 8;
    });

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    let clock = 0;
    function animate3D() {
      requestAnimationFrame(animate3D);
      clock += 0.02;

      camera.position.x += (mouse.x * 2.5 - camera.position.x) * 0.04;
      camera.position.y += (mouse.y * 1.8 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);

      shapes.forEach((item) => {
        item.mesh.rotation.x += item.rotSpeedX;
        item.mesh.rotation.y += item.rotSpeedY;
        item.mesh.position.y = item.initialY + Math.sin(clock + item.floatOffset) * 0.8;
      });

      gridHelper.rotation.y += 0.001;
      renderer.render(scene, camera);
    }
    animate3D();
  }
}
