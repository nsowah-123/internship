// ==========================================================================
// 1. Three.js 3D University Campus & Student Simulation
// ==========================================================================

const canvas = document.getElementById('webgl-canvas');

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x080d1a);
scene.fog = new THREE.FogExp2(0x080d1a, 0.018);

const camera = new THREE.PerspectiveCamera(
  42,
  window.innerWidth / window.innerHeight,
  0.1,
  150
);
camera.position.set(0, 5.2, 28);

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
  alpha: false
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// Lighting
const ambientLight = new THREE.AmbientLight(0x8899b7, 0.85);
scene.add(ambientLight);

const moonLight = new THREE.DirectionalLight(0xcfd8dc, 1.4);
moonLight.position.set(16, 28, 20);
moonLight.castShadow = true;
scene.add(moonLight);

const entranceLight = new THREE.PointLight(0xffb703, 3.2, 14);
entranceLight.position.set(0, 2.2, 5.2);
scene.add(entranceLight);

// Ground & Pathway
const groundGeo = new THREE.PlaneGeometry(100, 100);
const groundMat = new THREE.MeshStandardMaterial({
  color: 0x111726,
  roughness: 0.85
});
const ground = new THREE.Mesh(groundGeo, groundMat);
ground.rotation.x = -Math.PI / 2;
ground.receiveShadow = true;
scene.add(ground);

const pathGeo = new THREE.PlaneGeometry(6, 24);
const pathMat = new THREE.MeshStandardMaterial({
  color: 0x1a233a,
  roughness: 0.75
});
const path = new THREE.Mesh(pathGeo, pathMat);
path.rotation.x = -Math.PI / 2;
path.position.set(0, 0.02, 12);
path.receiveShadow = true;
scene.add(path);

// 5-Story 3D University Building
const buildingGroup = new THREE.Group();
scene.add(buildingGroup);

const bWidth = 22;
const bHeight = 16;
const bDepth = 10;
const floorHeight = 3.0;

const facadeGeo = new THREE.BoxGeometry(bWidth, bHeight, bDepth);
const facadeMat = new THREE.MeshStandardMaterial({
  color: 0x1e2738,
  roughness: 0.9
});
const facade = new THREE.Mesh(facadeGeo, facadeMat);
facade.position.set(0, bHeight / 2, 0);
facade.castShadow = true;
facade.receiveShadow = true;
buildingGroup.add(facade);

// 5 Story Horizontal Cornices
const corniceMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.8 });
for (let floor = 0; floor <= 5; floor++) {
  const cGeo = new THREE.BoxGeometry(bWidth + 0.6, 0.28, bDepth + 0.6);
  const cornice = new THREE.Mesh(cGeo, corniceMat);
  cornice.position.set(0, floor * floorHeight, 0);
  cornice.castShadow = true;
  buildingGroup.add(cornice);
}

// Rooftop Pediment & Clock
const roofPedimentGeo = new THREE.CylinderGeometry(0, bWidth * 0.55, 3.2, 4);
const roofMat = new THREE.MeshStandardMaterial({ color: 0x161f30, roughness: 0.85 });
const roofPediment = new THREE.Mesh(roofPedimentGeo, roofMat);
roofPediment.rotation.y = Math.PI / 4;
roofPediment.position.set(0, bHeight + 1.6, 0);
buildingGroup.add(roofPediment);

const clockGeo = new THREE.CylinderGeometry(1.1, 1.1, 0.2, 24);
const clockMat = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  emissive: 0xffffff,
  emissiveIntensity: 0.4
});
const clock = new THREE.Mesh(clockGeo, clockMat);
clock.rotation.x = Math.PI / 2;
clock.position.set(0, bHeight + 1.2, bDepth / 2 + 0.1);
buildingGroup.add(clock);

// Windows on Floors 2 through 5
const windowGeo = new THREE.BoxGeometry(1.4, 1.8, 0.1);
const warmWindowMat = new THREE.MeshStandardMaterial({
  color: 0xffe082,
  emissive: 0xffc107,
  emissiveIntensity: 1.2
});
const coolWindowMat = new THREE.MeshStandardMaterial({
  color: 0xb3e5fc,
  emissive: 0x81d4fa,
  emissiveIntensity: 0.8
});
const darkWindowMat = new THREE.MeshStandardMaterial({ color: 0x090e17 });

const winCols = 7;
const colSpacing = (bWidth - 3) / (winCols - 1);

for (let floor = 1; floor < 5; floor++) {
  const winY = floor * floorHeight + floorHeight / 2;
  for (let c = 0; c < winCols; c++) {
    const winX = -((bWidth - 3) / 2) + c * colSpacing;
    const isLit = Math.random() > 0.25;
    const mat = isLit ? (Math.random() > 0.4 ? warmWindowMat : coolWindowMat) : darkWindowMat;
    const winMesh = new THREE.Mesh(windowGeo, mat);
    winMesh.position.set(winX, winY, bDepth / 2 + 0.05);
    buildingGroup.add(winMesh);
  }
}

// Ground Floor Entrance & Steps
const doorGeo = new THREE.BoxGeometry(3.6, 2.8, 0.2);
const doorMat = new THREE.MeshStandardMaterial({
  color: 0xffd54f,
  emissive: 0xffb300,
  emissiveIntensity: 1.4
});
const doors = new THREE.Mesh(doorGeo, doorMat);
doors.position.set(0, 1.4, bDepth / 2 + 0.15);
buildingGroup.add(doors);

for (let step = 0; step < 3; step++) {
  const stepGeo = new THREE.BoxGeometry(6.5 + (2 - step) * 0.8, 0.22, 1.0);
  const stepMat = new THREE.MeshStandardMaterial({ color: 0x1a2336 });
  const stepMesh = new THREE.Mesh(stepGeo, stepMat);
  stepMesh.position.set(0, 0.11 + step * 0.22, bDepth / 2 + 0.8 + (2 - step) * 0.5);
  stepMesh.receiveShadow = true;
  buildingGroup.add(stepMesh);
}

// 3D Students Simulation
const studentColors = [0xef4444, 0xf97316, 0x10b981, 0x06b6d4, 0x6366f1, 0x8b5cf6, 0xec4899, 0x3b82f6];

class Student3D {
  constructor(initialRole) {
    this.group = new THREE.Group();
    this.speed = Math.random() * 0.035 + 0.045;
    this.walkCycle = Math.random() * 10;
    this.color = studentColors[Math.floor(Math.random() * studentColors.length)];

    // Torso
    const torso = new THREE.Mesh(
      new THREE.BoxGeometry(0.48, 0.65, 0.32),
      new THREE.MeshStandardMaterial({ color: this.color })
    );
    torso.position.y = 0.95;
    this.torso = torso;
    this.group.add(torso);

    // Head
    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.2, 12, 12),
      new THREE.MeshStandardMaterial({ color: 0xfde047 })
    );
    head.position.y = 1.45;
    this.group.add(head);

    // Backpack
    const backpack = new THREE.Mesh(
      new THREE.BoxGeometry(0.35, 0.42, 0.22),
      new THREE.MeshStandardMaterial({ color: 0x1e293b })
    );
    backpack.position.set(0, 1.0, -0.22);
    this.group.add(backpack);

    // Legs
    const legMat = new THREE.MeshStandardMaterial({ color: 0x0f172a });
    this.legL = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.58, 0.16), legMat);
    this.legL.position.set(-0.13, 0.3, 0);
    this.group.add(this.legL);

    this.legR = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.58, 0.16), legMat);
    this.legR.position.set(0.13, 0.3, 0);
    this.group.add(this.legR);

    scene.add(this.group);
    this.reset(initialRole);
  }

  reset(role) {
    const roles = ['ENTER', 'EXIT', 'CROSS'];
    this.role = role || roles[Math.floor(Math.random() * roles.length)];
    this.group.scale.set(1, 1, 1);

    if (this.role === 'ENTER') {
      const startLeft = Math.random() > 0.5;
      this.group.position.set(startLeft ? -16 : 16, 0, Math.random() * 4 + 10);
      this.state = 'WALKING_TO_PATH';
    } else if (this.role === 'EXIT') {
      this.group.position.set(Math.random() * 1.2 - 0.6, 0.65, 5.8);
      this.group.rotation.y = 0;
      this.exitDir = Math.random() > 0.5 ? 1 : -1;
      this.state = 'EXITING_DOOR';
    } else {
      const fromLeft = Math.random() > 0.5;
      this.group.position.set(fromLeft ? -20 : 20, 0, Math.random() * 8 + 8);
      this.group.rotation.y = fromLeft ? Math.PI / 2 : -Math.PI / 2;
      this.dir = fromLeft ? 1 : -1;
      this.state = 'CROSSING';
    }
  }

  update() {
    this.walkCycle += 0.18;
    const swing = Math.sin(this.walkCycle) * 0.55;
    this.legL.rotation.x = swing;
    this.legR.rotation.x = -swing;
    this.torso.position.y = 0.95 + Math.abs(Math.sin(this.walkCycle * 2)) * 0.04;

    if (this.role === 'ENTER') {
      if (this.state === 'WALKING_TO_PATH') {
        const dx = 0 - this.group.position.x;
        const dz = 12 - this.group.position.z;
        this.group.rotation.y = Math.atan2(dx, dz);
        this.group.position.x += Math.sin(this.group.rotation.y) * this.speed;
        this.group.position.z += Math.cos(this.group.rotation.y) * this.speed;

        if (Math.abs(this.group.position.x) < 0.8) {
          this.state = 'WALKING_UP_STEPS';
          this.group.rotation.y = Math.PI;
        }
      } else if (this.state === 'WALKING_UP_STEPS') {
        this.group.position.z -= this.speed * 0.9;
        if (this.group.position.z < 8.0 && this.group.position.y < 0.65) {
          this.group.position.y += 0.015;
        }
        if (this.group.position.z <= 5.8) {
          this.group.scale.subScalar(0.04);
          if (this.group.scale.x <= 0.1) this.reset();
        }
      }
    } else if (this.role === 'EXIT') {
      if (this.state === 'EXITING_DOOR') {
        this.group.position.z += this.speed * 0.9;
        if (this.group.position.z > 8.0 && this.group.position.y > 0) {
          this.group.position.y -= 0.015;
        }
        if (this.group.position.z >= 11) {
          this.group.rotation.y = this.exitDir === 1 ? Math.PI / 2 : -Math.PI / 2;
          this.state = 'WALKING_AWAY';
        }
      } else if (this.state === 'WALKING_AWAY') {
        this.group.position.x += this.speed * this.exitDir;
        if (Math.abs(this.group.position.x) > 22) this.reset();
      }
    } else if (this.role === 'CROSS') {
      this.group.position.x += this.speed * this.dir;
      if (Math.abs(this.group.position.x) > 22) this.reset();
    }
  }
}

const students = [];
for (let i = 0; i < 16; i++) {
  students.push(new Student3D());
}

// 3D Camera Mouse Parallax
const mouse = { x: 0, y: 0 };
window.addEventListener('mousemove', (e) => {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

function animate3D() {
  requestAnimationFrame(animate3D);
  camera.position.x += (mouse.x * 3.5 - camera.position.x) * 0.04;
  camera.position.y += (5.2 + mouse.y * 1.5 - camera.position.y) * 0.04;
  camera.lookAt(0, 4.2, 0);

  students.forEach((s) => s.update());
  renderer.render(scene, camera);
}
animate3D();

// ==========================================================================
// 2. 3D Card Tilt Interaction
// ==========================================================================
const cards = document.querySelectorAll('[data-tilt]');
cards.forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotX = -(y / (rect.height / 2)) * 14;
    const rotY = (x / (rect.width / 2)) * 14;
    card.style.transform = `perspective(600px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateZ(16px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
  });
});

// ==========================================================================
// 3. Launch Countdown Timer Logic
// ==========================================================================
const STORAGE_KEY = 'launch_target_date';
let targetDate = localStorage.getItem(STORAGE_KEY);

if (!targetDate || new Date(targetDate) <= new Date()) {
  const newDate = new Date();
  newDate.setDate(newDate.getDate() + 14);
  newDate.setHours(newDate.getHours() + 9);
  targetDate = newDate.toISOString();
  localStorage.setItem(STORAGE_KEY, targetDate);
}

const targetTime = new Date(targetDate).getTime();
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function pad(num) {
  return String(num).padStart(2, '0');
}

function updateCountdown() {
  const now = new Date().getTime();
  const diff = targetTime - now;

  if (diff <= 0) {
    daysEl.textContent = '00';
    hoursEl.textContent = '00';
    minutesEl.textContent = '00';
    secondsEl.textContent = '00';
    clearInterval(timer);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  daysEl.textContent = pad(days);
  hoursEl.textContent = pad(hours);
  minutesEl.textContent = pad(minutes);
  secondsEl.textContent = pad(seconds);
}

updateCountdown();
const timer = setInterval(updateCountdown, 1000);

// ==========================================================================
// 4. Email Notification Form Handling
// ==========================================================================
const form = document.getElementById('notify-form');
const emailInput = document.getElementById('email');
const submitBtn = document.getElementById('submit-btn');
const feedback = document.getElementById('feedback');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !emailRegex.test(email)) {
    feedback.textContent = 'Please enter a valid email address.';
    feedback.className = 'feedback error';
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = 'Submitting...';

  setTimeout(() => {
    feedback.textContent = '🎉 Welcome aboard! We will notify you when the 3D campus portal goes live.';
    feedback.className = 'feedback success';
    emailInput.value = '';
    submitBtn.textContent = 'Subscribed ✓';
  }, 600);
});
