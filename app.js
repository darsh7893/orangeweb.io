(function() {
const cases = {
  clinic: {
    label: "Clinic",
    title: "Patient intake & booking.",
    copy: "Collect reason for visit, urgency, insurance or payment notes, preferred time, and route into booking or a staff callback.",
    points: ["Appointment booking", "Intake collection", "Reminder automation"],
    messages: [
      ["Caller", "Do you have anything today?"],
      ["OrangeWeb AI", "Yes. I can offer 3:15 or 4:40. Should I book the earlier time?"],
      ["Caller", "3:15 works."],
      ["OrangeWeb AI", "Confirmed. I sent the details and intake link by SMS."]
    ],
    recording: "Clinic appointment intake",
    demoLines: ["Patient asks for the earliest available appointment this week.", "OrangeWeb AI confirms urgency, preferred time, and contact details."],
    systems: ["3:15 PM slot reserved", "New intake note created", "Reminder queued"],
    demoNote: "OrangeWeb AI captures visit intent, confirms urgency and preferred time, then prepares the appointment record and patient follow-up.",
    url: "ai-receptionist-for-clinics",
    prompt: "Create a premium Apple-style product demo video for OrangeWeb.io showing an AI receptionist answering a clinic call, extracting appointment details, and moving data into calendar, CRM, and SMS reminder screens. Minimal white background, navy typography, orange highlights, smooth UI transitions, realistic SaaS dashboard motion, no cartoon style."
  },
  realestate: {
    label: "Real estate",
    title: "Respond to leads instantly.",
    copy: "Qualify budget, timeline, location, financing status, and preferred showing windows while the agent is busy.",
    points: ["Speed-to-lead", "Showing requests", "CRM handoff"],
    messages: [
      ["Lead", "Is the Oak Street listing available?"],
      ["OrangeWeb AI", "Yes. Are you looking to tour today, tomorrow, or this weekend?"],
      ["Lead", "Tomorrow after 5."],
      ["OrangeWeb AI", "I held two showing windows and sent your agent the notes."]
    ],
    recording: "Real estate showing request",
    demoLines: ["Buyer asks whether a listing is still available.", "OrangeWeb AI qualifies location, budget, financing status, and showing window."],
    systems: ["Showing window held", "Lead profile updated", "Agent summary sent"],
    demoNote: "OrangeWeb AI qualifies the buyer, captures timing and financing context, then sends the agent a clean lead summary.",
    url: "ai-receptionist-for-real-estate",
    prompt: "Create a premium Apple-style product demo video for OrangeWeb.io showing an AI receptionist responding to a real estate buyer lead, qualifying budget and timeline, then moving details into a CRM, showing calendar, and agent notification panel. Minimal SaaS UI, navy and orange palette, elegant motion."
  },
  spa: {
    label: "Spa",
    title: "Convert inquiries to bookings.",
    copy: "Explain services, match guests to treatments, handle package questions, book providers, and rebook after the visit.",
    points: ["Service matching", "Package questions", "Rebooking"],
    messages: [
      ["Guest", "Which facial should I book for dry skin?"],
      ["OrangeWeb AI", "A hydrating facial fits. Do you prefer 60 or 90 minutes?"],
      ["Guest", "60 minutes."],
      ["OrangeWeb AI", "Maya has 2:30 open. I can reserve it now."]
    ],
    recording: "Spa treatment booking",
    demoLines: ["Guest asks which treatment fits dry skin.", "OrangeWeb AI recommends a service, confirms duration, and checks provider availability."],
    systems: ["Treatment selected", "Provider booked", "Rebooking reminder set"],
    demoNote: "OrangeWeb AI answers the treatment question, matches the guest to a service, checks provider fit, and queues follow-up.",
    url: "ai-receptionist-for-spas",
    prompt: "Create a minimal Apple-style product demo video for OrangeWeb.io showing an AI receptionist helping a spa guest choose a treatment, book a provider, and queue SMS reminders. Show data moving between conversation, booking calendar, guest profile, and package recommendation panels."
  },
  home: {
    label: "Home services",
    title: "Triage and dispatch instantly.",
    copy: "Ask location, issue type, urgency, photos, access details, and route emergencies or estimates to the right person.",
    points: ["Urgency triage", "Estimate requests", "Dispatch notes"],
    messages: [
      ["Homeowner", "My water heater is leaking."],
      ["OrangeWeb AI", "Is water actively spreading, and can you shut off the valve?"],
      ["Homeowner", "Yes, it is spreading."],
      ["OrangeWeb AI", "I marked this urgent and sent dispatch your address."]
    ],
    recording: "Home service dispatch",
    demoLines: ["Homeowner reports an active water heater leak.", "OrangeWeb AI checks urgency, location, valve status, and photo upload."],
    systems: ["Urgent job created", "Dispatcher alerted", "Photo link requested"],
    demoNote: "OrangeWeb AI checks urgency, captures address and issue details, then routes the job to dispatch with context.",
    url: "ai-receptionist-for-home-services",
    prompt: "Create an Apple-inspired SaaS demo video for OrangeWeb.io showing a home service AI receptionist triaging an urgent water heater leak, collecting address and photos, and moving data into dispatch, job priority, and technician notification screens."
  },
  medspa: {
    label: "Medspa",
    title: "Book consultations instantly.",
    copy: "Qualify treatment goals, timing, budget readiness, provider preference, and book consults with prep instructions.",
    points: ["Consult booking", "Lead qualification", "Prep reminders"],
    messages: [
      ["Lead", "I want to ask about injectables."],
      ["OrangeWeb AI", "Is your goal smoothing lines, volume, or a first consultation?"],
      ["Lead", "First consultation."],
      ["OrangeWeb AI", "There is a consult slot tomorrow at 11:20. I can send prep notes."]
    ],
    recording: "Medspa consult capture",
    demoLines: ["Lead asks about injectables and first consultation options.", "OrangeWeb AI qualifies treatment goal, timing, and provider preference."],
    systems: ["Consult booked", "Lead score updated", "Prep instructions sent"],
    demoNote: "OrangeWeb AI qualifies treatment goals, consult timing, and provider preference before preparing the next step.",
    url: "ai-receptionist-for-medspas",
    prompt: "Create a sleek product demo video for OrangeWeb.io showing a medspa AI receptionist qualifying an injectable consultation lead, booking a consult, updating CRM lead score, and sending prep instructions. Minimal premium healthcare aesthetic, navy/orange brand palette."
  }
};

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#scene"),
  antialias: true,
  alpha: true
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(36, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 0, 8);

const group = new THREE.Group();
scene.add(group);

// Lights setup to make glossy materials pop
scene.add(new THREE.AmbientLight(0xffffff, 0.9));

const dirLight = new THREE.DirectionalLight(0xffffff, 1.4);
dirLight.position.set(5, 10, 7);
scene.add(dirLight);

const pointLight = new THREE.PointLight(0xff7a1a, 2.5, 15);
pointLight.position.set(-3, 3, 5);
scene.add(pointLight);

// Build the cute Orange Robot
const robot = new THREE.Group();
group.add(robot);

// Materials definitions
const orangeMaterial = new THREE.MeshStandardMaterial({
  color: 0xff7a1a,
  roughness: 0.18,
  metalness: 0.2
});

const whiteMaterial = new THREE.MeshStandardMaterial({
  color: 0xf5f6f8, // Clean premium white
  roughness: 0.22,
  metalness: 0.05
});

const softGrayMaterial = new THREE.MeshStandardMaterial({
  color: 0xe8eaee, // Soft warm gray
  roughness: 0.3,
  metalness: 0.05
});

const metalMaterial = new THREE.MeshStandardMaterial({
  color: 0x3e4046, // Dark gunmetal steel
  roughness: 0.2,
  metalness: 0.8
});

const glowOrangeMaterial = new THREE.MeshStandardMaterial({
  color: 0xff7a1a,
  emissive: 0xff7a1a,
  emissiveIntensity: 1.8
});

// 2D Off-screen Canvases for Dynamic Screens
const faceCanvas = document.createElement('canvas');
faceCanvas.width = 490;
faceCanvas.height = 340;
const faceCtx = faceCanvas.getContext('2d');

const bellyCanvas = document.createElement('canvas');
bellyCanvas.width = 500;
bellyCanvas.height = 450;
const bellyCtx = bellyCanvas.getContext('2d');

const faceTexture = new THREE.CanvasTexture(faceCanvas);
faceTexture.minFilter = THREE.LinearFilter;
const faceMaterial = new THREE.MeshBasicMaterial({
  map: faceTexture,
  transparent: true
});

const bellyTexture = new THREE.CanvasTexture(bellyCanvas);
bellyTexture.minFilter = THREE.LinearFilter;
const bellyMaterial = new THREE.MeshBasicMaterial({
  map: bellyTexture,
  transparent: true
});

// Neck
const neckGeo = new THREE.CylinderGeometry(0.16, 0.16, 0.22, 16);
const neck = new THREE.Mesh(neckGeo, metalMaterial);
neck.position.y = 0.08;
robot.add(neck);

// Head Group
const headGroup = new THREE.Group();
headGroup.position.y = 0.65;
robot.add(headGroup);

// Head Mesh
const headGeo = new THREE.BoxGeometry(1.2, 0.9, 0.9);
const headMesh = new THREE.Mesh(headGeo, orangeMaterial);
headGroup.add(headMesh);

// Face Screen
const faceGeo = new THREE.BoxGeometry(0.98, 0.68, 0.05);
const faceMaterials = [
  softGrayMaterial, // px
  softGrayMaterial, // nx
  softGrayMaterial, // py
  softGrayMaterial, // ny
  faceMaterial,     // pz (front) - dynamic canvas texture!
  softGrayMaterial  // nz
];
const facePlate = new THREE.Mesh(faceGeo, faceMaterials);
facePlate.position.set(0, 0, 0.44);
headGroup.add(facePlate);

// Earcups (Headset, directly related to calls and receptionists)
const earCupGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.12, 32);
const leftEarCup = new THREE.Mesh(earCupGeo, whiteMaterial);
leftEarCup.rotation.z = Math.PI / 2;
leftEarCup.position.set(-0.62, 0, 0);
headGroup.add(leftEarCup);

const rightEarCup = new THREE.Mesh(earCupGeo, whiteMaterial);
rightEarCup.rotation.z = Math.PI / 2;
rightEarCup.position.set(0.62, 0, 0);
headGroup.add(rightEarCup);

const earAccentGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.04, 16);
const leftEarAccent = new THREE.Mesh(earAccentGeo, orangeMaterial);
leftEarAccent.rotation.z = Math.PI / 2;
leftEarAccent.position.set(-0.69, 0, 0);
headGroup.add(leftEarAccent);

const rightEarAccent = new THREE.Mesh(earAccentGeo, orangeMaterial);
rightEarAccent.rotation.z = Math.PI / 2;
rightEarAccent.position.set(0.69, 0, 0);
headGroup.add(rightEarAccent);

// Headband
const headbandGeo = new THREE.TorusGeometry(0.6, 0.04, 8, 32, Math.PI);
const headband = new THREE.Mesh(headbandGeo, whiteMaterial);
headband.position.set(0, 0.05, 0);
headGroup.add(headband);

// Mic Arm
const micArmGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.38, 8);
const micArm = new THREE.Mesh(micArmGeo, metalMaterial);
micArm.rotation.z = -Math.PI / 4;
micArm.rotation.x = Math.PI / 4;
micArm.position.set(-0.55, -0.18, 0.2);
headGroup.add(micArm);

const micTipGeo = new THREE.SphereGeometry(0.045, 16, 16);
const micTip = new THREE.Mesh(micTipGeo, whiteMaterial);
micTip.position.set(-0.68, -0.32, 0.35);
headGroup.add(micTip);

// Antenna
const antennaPoleGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.3, 8);
const antennaPole = new THREE.Mesh(antennaPoleGeo, metalMaterial);
antennaPole.position.set(0, 0.58, 0);
headGroup.add(antennaPole);

const antennaTipGeo = new THREE.SphereGeometry(0.06, 16, 16);
const antennaTip = new THREE.Mesh(antennaTipGeo, glowOrangeMaterial);
antennaTip.position.set(0, 0.72, 0);
headGroup.add(antennaTip);

// Body Group
const bodyGroup = new THREE.Group();
bodyGroup.position.y = -0.55;
robot.add(bodyGroup);

// Main Body Cylinder
const bodyGeo = new THREE.CylinderGeometry(0.55, 0.6, 0.8, 32);
const bodyMesh = new THREE.Mesh(bodyGeo, orangeMaterial);
bodyGroup.add(bodyMesh);

// Top/Bottom Body Rounding
const bodyTopGeo = new THREE.SphereGeometry(0.55, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2);
const bodyTop = new THREE.Mesh(bodyTopGeo, orangeMaterial);
bodyTop.rotation.x = -Math.PI / 2;
bodyTop.position.y = 0.4;
bodyGroup.add(bodyTop);

const bodyBottomGeo = new THREE.SphereGeometry(0.6, 32, 16, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2);
const bodyBottom = new THREE.Mesh(bodyBottomGeo, orangeMaterial);
bodyBottom.rotation.x = -Math.PI / 2;
bodyBottom.position.y = -0.4;
bodyGroup.add(bodyBottom);

// Belly Plate
const bellyGeo = new THREE.BoxGeometry(0.5, 0.45, 0.05);
const bellyMaterials = [
  softGrayMaterial, // px
  softGrayMaterial, // nx
  softGrayMaterial, // py
  softGrayMaterial, // ny
  bellyMaterial,    // pz (front) - dynamic belly screen!
  softGrayMaterial  // nz
];
const bellyPlate = new THREE.Mesh(bellyGeo, bellyMaterials);
bellyPlate.position.set(0, 0, 0.56);
bodyGroup.add(bellyPlate);


// Jet/Thruster
const jetGeo = new THREE.ConeGeometry(0.25, 0.25, 32);
const jet = new THREE.Mesh(jetGeo, metalMaterial);
jet.rotation.x = Math.PI;
jet.position.set(0, -1.05, 0);
bodyGroup.add(jet);

const flameGeo = new THREE.ConeGeometry(0.18, 0.35, 16);
const flame = new THREE.Mesh(flameGeo, glowOrangeMaterial);
flame.rotation.x = Math.PI;
flame.position.set(0, -1.25, 0);
bodyGroup.add(flame);

// Floating Left Arm
const leftArmGroup = new THREE.Group();
leftArmGroup.position.set(-0.78, -0.3, 0);
robot.add(leftArmGroup);

const leftShoulderGeo = new THREE.SphereGeometry(0.07, 16, 16);
const leftShoulder = new THREE.Mesh(leftShoulderGeo, metalMaterial);
leftArmGroup.add(leftShoulder);

const leftForearmGeo = new THREE.CylinderGeometry(0.05, 0.045, 0.3, 16);
const leftForearm = new THREE.Mesh(leftForearmGeo, orangeMaterial);
leftForearm.position.y = -0.15;
leftArmGroup.add(leftForearm);

const leftHandGeo = new THREE.SphereGeometry(0.065, 16, 16);
const leftHand = new THREE.Mesh(leftHandGeo, whiteMaterial);
leftHand.position.y = -0.3;
leftArmGroup.add(leftHand);

// Floating Right Arm
const rightArmGroup = new THREE.Group();
rightArmGroup.position.set(0.78, -0.3, 0);
robot.add(rightArmGroup);

const rightShould = new THREE.Mesh(leftShoulderGeo, metalMaterial);
rightArmGroup.add(rightShould);

const rightForearm = new THREE.Mesh(leftForearmGeo, orangeMaterial);
rightForearm.position.y = -0.15;
rightArmGroup.add(rightForearm);

const rightHand = new THREE.Mesh(leftHandGeo, whiteMaterial);
rightHand.position.y = -0.3;
rightArmGroup.add(rightHand);

// Animation / Drag Configuration
const canvas = renderer.domElement;
const clock = new THREE.Clock();
const dragRotation = new THREE.Vector2(0, 0);
const velocity = new THREE.Vector2(0, 0);
let dragging = false;
let lastX = 0;
let lastY = 0;

// Mouse coordinates and target rotations for head tracking
const mouse = new THREE.Vector2();
const targetHeadRotation = new THREE.Vector2();
const targetBodyRotation = new THREE.Vector2();

window.addEventListener("pointermove", (event) => {
  if (dragging) return;
  // Calculate normalized device coordinates (-1 to 1) relative to screen
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // Set rotation targets (head moves more than body)
  targetHeadRotation.y = mouse.x * 0.55;
  targetHeadRotation.x = mouse.y * 0.35;

  targetBodyRotation.y = mouse.x * 0.2;
  targetBodyRotation.x = mouse.y * 0.12;
});

function resize() {
  const parent = canvas.parentElement;
  const rect = parent.getBoundingClientRect();
  const width = Math.max(1, rect.width);
  const height = Math.max(1, rect.height);
  renderer.setSize(width, height, false);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  group.position.set(0, 0.05, 0); // Position robot slightly higher to remove top blank space
  group.scale.setScalar(1.68);    // Scale robot up so it's bigger and more prominent
}

// Conversation and Face Emotion configuration
const bookingConversation = [
  { sender: 'customer', text: "Can I book an appointment today?", emotion: 'listening' },
  { sender: 'ai', text: "Yes! I have 3:15 PM open. Book it?", emotion: 'thinking', finalEmotion: 'happy' },
  { sender: 'customer', text: "Yes please!", emotion: 'listening' },
  { sender: 'ai', text: "Done! You're booked for 3:15 PM.", emotion: 'thinking', finalEmotion: 'happy' }
];

let currentMessageIndex = -1; // -1 represents initial idle/ready state
let currentTypingState = false;
let stateTime = 3.0; // Idle duration before starting
let conversationTimer = 0;
let lastFrameTime = performance.now();
let bellyFadeAlpha = 0; // smooth fade-in for belly text (0→1)
let spinActive = false; // flag to trigger spin after conversation
let spinTime = 0;       // track spin duration

let currentFaceEmotion = 'neutral';
let blinkTimer = 0;
let isBlinking = false;

function drawFace(emotion, isBlinkingActive) {
  faceCtx.fillStyle = '#0a0b0d';
  faceCtx.fillRect(0, 0, faceCanvas.width, faceCanvas.height);

  const centerY = 155;
  const leftX = 155;
  const rightX = 335;

  faceCtx.shadowColor = '#ff7a1a';
  faceCtx.shadowBlur = 18;
  faceCtx.fillStyle = '#ff7a1a';
  faceCtx.strokeStyle = '#ff7a1a';
  faceCtx.lineWidth = 14;
  faceCtx.lineCap = 'round';

  if (isBlinkingActive) {
    faceCtx.beginPath();
    faceCtx.moveTo(leftX - 22, centerY);
    faceCtx.lineTo(leftX + 22, centerY);
    faceCtx.stroke();

    faceCtx.beginPath();
    faceCtx.moveTo(rightX - 22, centerY);
    faceCtx.lineTo(rightX + 22, centerY);
    faceCtx.stroke();
  } else if (emotion === 'happy') {
    faceCtx.beginPath();
    faceCtx.arc(leftX, centerY + 8, 22, Math.PI, 0, false);
    faceCtx.stroke();

    faceCtx.beginPath();
    faceCtx.arc(rightX, centerY + 8, 22, Math.PI, 0, false);
    faceCtx.stroke();

    // Cute smile
    faceCtx.lineWidth = 6;
    faceCtx.shadowBlur = 8;
    faceCtx.beginPath();
    faceCtx.arc(245, centerY + 50, 36, 0.15, Math.PI - 0.15, false);
    faceCtx.stroke();
  } else if (emotion === 'thinking') {
    faceCtx.beginPath();
    faceCtx.moveTo(leftX - 20, centerY);
    faceCtx.lineTo(leftX + 20, centerY);
    faceCtx.stroke();

    faceCtx.beginPath();
    faceCtx.moveTo(rightX - 20, centerY);
    faceCtx.lineTo(rightX + 20, centerY);
    faceCtx.stroke();
  } else if (emotion === 'listening') {
    faceCtx.beginPath();
    faceCtx.arc(leftX, centerY, 20, 0, Math.PI * 2);
    faceCtx.fill();

    faceCtx.beginPath();
    faceCtx.arc(rightX, centerY, 20, 0, Math.PI * 2);
    faceCtx.fill();

    // Audio wave pattern below eyes
    faceCtx.lineWidth = 3;
    faceCtx.shadowBlur = 4;
    faceCtx.beginPath();
    for (let i = 0; i < 5; i++) {
      const waveHeight = 8 + Math.sin(Date.now() * 0.015 + i) * 12;
      const x = 245 - 24 + i * 12;
      faceCtx.moveTo(x, centerY + 55 - waveHeight / 2);
      faceCtx.lineTo(x, centerY + 55 + waveHeight / 2);
    }
    faceCtx.stroke();
  } else {
    faceCtx.beginPath();
    faceCtx.arc(leftX, centerY, 22, 0, Math.PI * 2);
    faceCtx.fill();

    faceCtx.beginPath();
    faceCtx.arc(rightX, centerY, 22, 0, Math.PI * 2);
    faceCtx.fill();
  }

  // Blushes
  faceCtx.shadowColor = 'rgba(255, 92, 92, 0.9)';
  faceCtx.shadowBlur = 10;
  faceCtx.fillStyle = 'rgba(255, 92, 92, 0.5)';
  faceCtx.beginPath();
  faceCtx.ellipse(leftX - 12, centerY + 45, 14, 5, 0, 0, Math.PI * 2);
  faceCtx.fill();
  faceCtx.beginPath();
  faceCtx.ellipse(rightX + 12, centerY + 45, 14, 5, 0, 0, Math.PI * 2);
  faceCtx.fill();

  faceTexture.needsUpdate = true;
}

function wrapText(ctx, text, maxWidth) {
  const words = text.split(" ");
  const lines = [];
  let currentLine = words[0];

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const width = ctx.measureText(currentLine + " " + word).width;
    if (width < maxWidth) {
      currentLine += " " + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  lines.push(currentLine);
  return lines;
}

function drawBellyChat() {
  // Dark screen background
  bellyCtx.fillStyle = '#0c0e12';
  bellyCtx.fillRect(0, 0, bellyCanvas.width, bellyCanvas.height);

  // Subtle border glow
  bellyCtx.strokeStyle = 'rgba(255, 122, 26, 0.25)';
  bellyCtx.lineWidth = 2;
  bellyCtx.beginPath();
  bellyCtx.roundRect(4, 4, 492, 442, 14);
  bellyCtx.stroke();

  const cw = bellyCanvas.width;
  const ch = bellyCanvas.height;

  // Resolve message index safely to prevent out-of-bounds error during spin
  let msgIndex = currentMessageIndex;
  if (spinActive) {
    msgIndex = bookingConversation.length - 1;
  }

  if (msgIndex === -1) {
    // Idle state — show a subtle pulsing "ready" indicator
    const pulse = 0.5 + Math.sin(Date.now() * 0.004) * 0.3;
    bellyCtx.globalAlpha = pulse;
    bellyCtx.fillStyle = '#ff7a1a';
    bellyCtx.beginPath();
    bellyCtx.arc(cw / 2, ch / 2, 8, 0, Math.PI * 2);
    bellyCtx.fill();
    bellyCtx.globalAlpha = 1;
    bellyTexture.needsUpdate = true;
    return;
  }

  const msg = bookingConversation[msgIndex];
  const isAi = msg.sender === 'ai';

  if (currentTypingState && !spinActive) {
    // Pulsing dots (clean UI without label text)
    bellyCtx.fillStyle = '#ff7a1a';
    const dotTime = Date.now() * 0.007;
    for (let i = 0; i < 3; i++) {
      const dotY = ch / 2 + Math.sin(dotTime + i * 1.8) * 8;
      const dotAlpha = 0.5 + Math.sin(dotTime + i * 1.8) * 0.4;
      bellyCtx.globalAlpha = dotAlpha;
      bellyCtx.beginPath();
      bellyCtx.arc(cw / 2 - 32 + i * 32, dotY, 9, 0, Math.PI * 2);
      bellyCtx.fill();
    }
    bellyCtx.globalAlpha = 1;
  } else {
    // Show the single message with fade-in
    const alpha = spinActive ? 1 : Math.min(bellyFadeAlpha, 1);
    bellyCtx.globalAlpha = alpha;
    bellyCtx.textAlign = 'center';

    // AI message has "OrangeDesk" label, Customer has no label
    if (isAi) {
      bellyCtx.font = 'bold 30px Inter, sans-serif';
      bellyCtx.fillStyle = '#ff7a1a';
      bellyCtx.textAlign = 'center';
      bellyCtx.fillText('OrangeDesk', cw / 2, ch / 2 - 80);
    }

    // Message text — extra large, centered, wrapped
    bellyCtx.font = 'bold 44px Inter, sans-serif';
    bellyCtx.fillStyle = '#ffffff';
    const lines = wrapText(bellyCtx, msg.text, cw - 60);
    const lineHeight = 56;
    
    // Shift slightly down if there is a header label, otherwise center vertically
    const startY = isAi 
      ? ch / 2 - ((lines.length - 1) * lineHeight) / 2 + 20
      : ch / 2 - ((lines.length - 1) * lineHeight) / 2;

    lines.forEach((line, i) => {
      bellyCtx.fillText(line, cw / 2, startY + i * lineHeight);
    });

    bellyCtx.globalAlpha = 1;
  }

  bellyTexture.needsUpdate = true;
}

function animate() {
  const elapsed = clock.getElapsedTime();
  const now = performance.now();
  const deltaTime = (now - lastFrameTime) / 1000;
  lastFrameTime = now;

  // 1. Gently bob the robot up and down (hover effect)
  robot.position.y = 0.2 + Math.sin(elapsed * 2.5) * 0.08;

  // Gentle floating motion for the arms
  leftArmGroup.position.y = -0.3 + Math.sin(elapsed * 3.0) * 0.035;
  leftArmGroup.rotation.z = Math.sin(elapsed * 2.0) * 0.05;

  rightArmGroup.position.y = -0.3 + Math.sin(elapsed * 3.0 + Math.PI) * 0.035;
  rightArmGroup.rotation.z = Math.sin(elapsed * 2.0 + Math.PI) * 0.05;

  // Flicker the jet thruster flame
  flame.scale.y = 0.85 + Math.sin(elapsed * 28.0) * 0.15;
  flame.scale.x = 0.9 + Math.cos(elapsed * 22.0) * 0.08;
  flame.scale.z = 0.9 + Math.cos(elapsed * 22.0) * 0.08;

  // Pulse the antenna tip
  antennaTip.material.emissiveIntensity = 1.3 + Math.sin(elapsed * 8.0) * 0.3;

  // 2. Head & body tracking / dragging / spinning
  if (spinActive) {
    spinTime += deltaTime;
    const spinDuration = 0.9; // duration of the spin
    if (spinTime >= spinDuration) {
      spinActive = false;
      spinTime = 0;
      robot.rotation.y = 0;
      // Transition to idle state
      currentMessageIndex = -1;
      currentTypingState = false;
      stateTime = 3.5;
      conversationTimer = 0;
      bellyFadeAlpha = 0;
    } else {
      const progress = spinTime / spinDuration;
      // Fast horizontal spin: 2 full rotations (4 * PI)
      robot.rotation.y = progress * Math.PI * 4;
      
      // Face straight forward during the spin
      headGroup.rotation.set(0, 0, 0);
      bodyGroup.rotation.set(0, 0, 0);
    }
  } else if (!dragging) {
    // Lerp smoothly towards mouse target rotation
    headGroup.rotation.y += (targetHeadRotation.y - headGroup.rotation.y) * 0.08;
    headGroup.rotation.x += (targetHeadRotation.x - headGroup.rotation.x) * 0.08;

    bodyGroup.rotation.y += (targetBodyRotation.y - bodyGroup.rotation.y) * 0.08;
    bodyGroup.rotation.x += (targetBodyRotation.x - bodyGroup.rotation.x) * 0.08;

    // Decay the drag rotation back to origin
    robot.rotation.y += (0 - robot.rotation.y) * 0.05;
    robot.rotation.x += (0 - robot.rotation.x) * 0.05;
  } else {
    // Apply manual drag rotation directly to the robot group
    robot.rotation.y = dragRotation.y;
    robot.rotation.x = dragRotation.x;

    // Center the head and body inside the rotated robot
    headGroup.rotation.y += (0 - headGroup.rotation.y) * 0.1;
    headGroup.rotation.x += (0 - headGroup.rotation.x) * 0.1;
    bodyGroup.rotation.y += (0 - bodyGroup.rotation.y) * 0.1;
    bodyGroup.rotation.x += (0 - bodyGroup.rotation.x) * 0.1;
  }

  // Update booking conversation state machine
  if (!spinActive) {
    conversationTimer += deltaTime;
    if (!currentTypingState && currentMessageIndex >= 0) {
      bellyFadeAlpha += deltaTime * 2.5; // smooth fade in
    }
    if (conversationTimer > stateTime) {
      conversationTimer = 0;
      if (currentMessageIndex === -1) {
        currentMessageIndex = 0;
        currentTypingState = true;
        stateTime = 1.4;
      } else {
        if (currentTypingState) {
          currentTypingState = false;
          bellyFadeAlpha = 0; // reset fade for new message reveal
          stateTime = 2.8;
        } else {
          currentMessageIndex++;
          if (currentMessageIndex >= bookingConversation.length) {
            spinActive = true;
            spinTime = 0;
          } else {
            currentTypingState = true;
            stateTime = 1.4;
          }
        }
      }
    }
  }

  // Update facial expression emotion based on state
  if (spinActive) {
    currentFaceEmotion = 'happy'; // smiling/glowing face during spin!
  } else if (currentMessageIndex === -1) {
    currentFaceEmotion = 'neutral';
  } else {
    const currentMsg = bookingConversation[currentMessageIndex];
    if (currentTypingState) {
      currentFaceEmotion = currentMsg.sender === 'ai' ? 'thinking' : 'listening';
    } else {
      currentFaceEmotion = currentMsg.sender === 'ai' ? (currentMsg.finalEmotion || 'happy') : 'listening';
    }
  }

  // Blinking animation
  blinkTimer += 1;
  if (isBlinking) {
    if (blinkTimer > 8) {
      isBlinking = false;
      blinkTimer = 0;
    }
  } else {
    if (Math.random() < 0.008 && blinkTimer > 80) {
      isBlinking = true;
      blinkTimer = 0;
    }
  }

  // Redraw both canvas textures
  drawFace(currentFaceEmotion, isBlinking);
  drawBellyChat();

  camera.lookAt(0, 0, 0);
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

function startDrag(event) {
  if (window.innerWidth <= 960) return;
  dragging = true;
  lastX = event.clientX;
  lastY = event.clientY;
  velocity.set(0, 0);
  canvas.classList.add("is-dragging");
  canvas.setPointerCapture(event.pointerId);
}

function drag(event) {
  if (!dragging) return;
  const dx = event.clientX - lastX;
  const dy = event.clientY - lastY;
  dragRotation.y += dx * 0.006;
  dragRotation.x += dy * 0.004;
  dragRotation.x = Math.max(-0.6, Math.min(0.6, dragRotation.x));
  lastX = event.clientX;
  lastY = event.clientY;
}

function stopDrag(event) {
  dragging = false;
  canvas.classList.remove("is-dragging");
  if (event.pointerId !== undefined) canvas.releasePointerCapture(event.pointerId);
}

window.addEventListener("resize", resize);
canvas.addEventListener("pointerdown", startDrag);
canvas.addEventListener("pointermove", drag);
canvas.addEventListener("pointerup", stopDrag);
canvas.addEventListener("pointercancel", stopDrag);

let caseLabel, caseTitle, caseCopy, casePoints, messageList, recordingTitle, transcriptTrack, systemOne, systemTwo, systemThree, videoPrompt, caseLink, demoAudio, audioToggle;

try {
  caseLabel = document.querySelector("#case-label");
  caseTitle = document.querySelector("#case-title");
  caseCopy = document.querySelector("#case-copy");
  casePoints = document.querySelector("#case-points");
  messageList = document.querySelector("#message-list");
  recordingTitle = document.querySelector("#recording-title");
  transcriptTrack = document.querySelector("#transcript-track");
  systemOne = document.querySelector("#system-one");
  systemTwo = document.querySelector("#system-two");
  systemThree = document.querySelector("#system-three");
  videoPrompt = document.querySelector("#video-prompt");
  caseLink = document.querySelector("#case-link");
  demoAudio = document.querySelector("#demo-audio");
  audioToggle = document.querySelector("#audio-toggle");
} catch (e) {
  console.error("DOM selection failed:", e);
}

if (demoAudio && audioToggle) {
  let audioAllowed = false;

  const syncAudioButton = () => {
    audioToggle.classList.toggle("is-muted", demoAudio.muted);
    audioToggle.setAttribute("aria-pressed", String(!demoAudio.muted));
    audioToggle.setAttribute("aria-label", demoAudio.muted ? "Enable demo audio" : "Mute demo audio");
    audioToggle.setAttribute("title", demoAudio.muted ? "Enable demo audio" : "Mute demo audio");
  };

  audioToggle.addEventListener("click", async () => {
    if (!audioAllowed) {
      audioAllowed = window.confirm("Play the OrangeWeb demo audio?");
      if (!audioAllowed) {
        demoAudio.muted = true;
        syncAudioButton();
        return;
      }
    }

    if (demoAudio.muted) {
      demoAudio.muted = false;
      if (demoAudio.ended) {
        demoAudio.currentTime = 0;
      }
      await demoAudio.play().catch(() => {
        demoAudio.muted = true;
      });
    } else {
      demoAudio.muted = true;
      demoAudio.pause();
    }

    syncAudioButton();
  });

  demoAudio.addEventListener("ended", () => {
    demoAudio.currentTime = 0;
  });

  syncAudioButton();
}

function renderCase(key) {
  try {
    const item = cases[key];
    if (caseLabel) caseLabel.textContent = item.label;
    if (caseTitle) caseTitle.textContent = item.title;
    if (caseCopy) caseCopy.textContent = item.copy;
    if (casePoints) casePoints.innerHTML = item.points.map((point) => `<li>${point}</li>`).join("");
    if (messageList) messageList.innerHTML = item.messages.map(([speaker, message]) => `<p><b>${speaker}</b>${message}</p>`).join("");
    if (recordingTitle) recordingTitle.textContent = item.recording;
    if (transcriptTrack) {
      transcriptTrack.innerHTML = [...item.messages, ...item.messages]
        .map(([speaker, message]) => {
          const type = speaker === "OrangeWeb AI" ? "ai" : "caller";
          return `<p class="transcript-line ${type}"><b>${speaker}</b><span>${message}</span></p>`;
        })
        .join("");
    }
    if (systemOne) systemOne.textContent = item.systems[0];
    if (systemTwo) systemTwo.textContent = item.systems[1];
    if (systemThree) systemThree.textContent = item.systems[2];
    if (videoPrompt) videoPrompt.textContent = item.demoNote;
    if (caseLink) {
      caseLink.href = item.url;
      caseLink.textContent = "Learn more";
    }
  } catch (e) {
    console.error("renderCase failed:", e);
  }
}

document.querySelectorAll(".selector button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".selector button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderCase(button.dataset.case);
  });
});

const briefForm = document.querySelector(".brief-form");
if (briefForm) {
  briefForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name") || "there";
    const email = data.get("email");
    const phone = data.get("phone");
    const website = data.get("website") || "none";

    const button = event.currentTarget.querySelector("button[type='submit']");
    const originalText = button.textContent;
    button.disabled = true;
    button.textContent = "Sending...";

    emailjs.send("service_2h2vzd4", "template_wlizxxk", {
      name: name,
      email: email,
      phone: phone,
      website: website,
      source: "Homepage Book Demo"
    }).then(
      () => {
        button.disabled = false;
        button.textContent = originalText;
        const formNote = document.querySelector("#form-note");
        if (formNote) formNote.textContent = `Thank you, ${name}! Your AI receptionist demo request has been received. We will reach out shortly.`;
        event.target.reset();
      },
      (error) => {
        button.disabled = false;
        button.textContent = originalText;
        const formNote = document.querySelector("#form-note");
        if (formNote) formNote.textContent = "Oops! Something went wrong. Please try again later.";
        console.error("EmailJS failed...", error);
      }
    );
  });
}

resize();
animate();
})();
