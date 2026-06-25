import * as THREE from "./assets/three.module.js";

const cases = {
  clinic: {
    label: "Clinic",
    title: "Answer patient demand without adding front-desk load.",
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
    url: "./ai-receptionist-for-clinics.html",
    prompt: "Create a premium Apple-style product demo video for OrangeWeb.io showing an AI receptionist answering a clinic call, extracting appointment details, and moving data into calendar, CRM, and SMS reminder screens. Minimal white background, navy typography, orange highlights, smooth UI transitions, realistic SaaS dashboard motion, no cartoon style."
  },
  realestate: {
    label: "Real estate",
    title: "Respond to property leads before they call another agent.",
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
    url: "./ai-receptionist-for-real-estate.html",
    prompt: "Create a premium Apple-style product demo video for OrangeWeb.io showing an AI receptionist responding to a real estate buyer lead, qualifying budget and timeline, then moving details into a CRM, showing calendar, and agent notification panel. Minimal SaaS UI, navy and orange palette, elegant motion."
  },
  spa: {
    label: "Spa",
    title: "Turn treatment questions into booked visits.",
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
    url: "./ai-receptionist-for-spas.html",
    prompt: "Create a minimal Apple-style product demo video for OrangeWeb.io showing an AI receptionist helping a spa guest choose a treatment, book a provider, and queue SMS reminders. Show data moving between conversation, booking calendar, guest profile, and package recommendation panels."
  },
  home: {
    label: "Home services",
    title: "Qualify urgent jobs without interrupting the crew.",
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
    url: "./ai-receptionist-for-home-services.html",
    prompt: "Create an Apple-inspired SaaS demo video for OrangeWeb.io showing a home service AI receptionist triaging an urgent water heater leak, collecting address and photos, and moving data into dispatch, job priority, and technician notification screens."
  },
  medspa: {
    label: "Medspa",
    title: "Protect high-ticket consults from slow follow-up.",
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
    url: "./ai-receptionist-for-medspas.html",
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
  color: 0xf5f6f8,
  roughness: 0.2,
  metalness: 0.1
});

const darkNavyMaterial = new THREE.MeshStandardMaterial({
  color: 0x07162f,
  roughness: 0.3,
  metalness: 0.2
});

const metalMaterial = new THREE.MeshStandardMaterial({
  color: 0xa0a5ab,
  roughness: 0.2,
  metalness: 0.8
});

const eyeMaterial = new THREE.MeshStandardMaterial({
  color: 0x00f0ff,
  emissive: 0x00f0ff,
  emissiveIntensity: 1.8
});

const glowOrangeMaterial = new THREE.MeshStandardMaterial({
  color: 0xff7a1a,
  emissive: 0xff7a1a,
  emissiveIntensity: 1.8
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
const facePlate = new THREE.Mesh(faceGeo, darkNavyMaterial);
facePlate.position.set(0, 0, 0.44);
headGroup.add(facePlate);

// Eyes (glowing blue)
const eyeGeo = new THREE.SphereGeometry(0.09, 16, 16);
const leftEye = new THREE.Mesh(eyeGeo, eyeMaterial);
leftEye.position.set(-0.25, 0.05, 0.47);
headGroup.add(leftEye);

const rightEye = new THREE.Mesh(eyeGeo, eyeMaterial);
rightEye.position.set(0.25, 0.05, 0.47);
headGroup.add(rightEye);

// Blushes (cute details)
const blushGeo = new THREE.BoxGeometry(0.12, 0.04, 0.01);
const blushMaterial = new THREE.MeshBasicMaterial({ color: 0xff5c5c, transparent: true, opacity: 0.65 });
const leftBlush = new THREE.Mesh(blushGeo, blushMaterial);
leftBlush.position.set(-0.3, -0.12, 0.47);
headGroup.add(leftBlush);

const rightBlush = new THREE.Mesh(blushGeo, blushMaterial);
rightBlush.position.set(0.3, -0.12, 0.47);
headGroup.add(rightBlush);

// Earcups (Headset, directly related to calls and receptionists)
const earCupGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.12, 32);
const leftEarCup = new THREE.Mesh(earCupGeo, darkNavyMaterial);
leftEarCup.rotation.z = Math.PI / 2;
leftEarCup.position.set(-0.62, 0, 0);
headGroup.add(leftEarCup);

const rightEarCup = new THREE.Mesh(earCupGeo, darkNavyMaterial);
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
const headband = new THREE.Mesh(headbandGeo, darkNavyMaterial);
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
const micTip = new THREE.Mesh(micTipGeo, darkNavyMaterial);
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
const bellyPlate = new THREE.Mesh(bellyGeo, whiteMaterial);
bellyPlate.position.set(0, 0, 0.56);
bodyGroup.add(bellyPlate);

// Signal Indicator (Chest Light)
const signalGeo = new THREE.CylinderGeometry(0.1, 0.1, 0.03, 32);
const signalLogo = new THREE.Mesh(signalGeo, glowOrangeMaterial);
signalLogo.rotation.x = Math.PI / 2;
signalLogo.position.set(0, 0, 0.59);
bodyGroup.add(signalLogo);

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
  group.position.set(0, -0.3, 0);
  group.scale.setScalar(1.22);
}

function animate() {
  const elapsed = clock.getElapsedTime();

  // 1. Gently bob the robot up and down (hover effect)
  robot.position.y = 0.2 + Math.sin(elapsed * 2.5) * 0.08;

  // Gentle floating motion for the arms (secondary action)
  leftArmGroup.position.y = -0.3 + Math.sin(elapsed * 3.0) * 0.035;
  leftArmGroup.rotation.z = Math.sin(elapsed * 2.0) * 0.05;

  rightArmGroup.position.y = -0.3 + Math.sin(elapsed * 3.0 + Math.PI) * 0.035;
  rightArmGroup.rotation.z = Math.sin(elapsed * 2.0 + Math.PI) * 0.05;

  // Flicker the jet thruster flame
  flame.scale.y = 0.85 + Math.sin(elapsed * 28.0) * 0.15;
  flame.scale.x = 0.9 + Math.cos(elapsed * 22.0) * 0.08;
  flame.scale.z = 0.9 + Math.cos(elapsed * 22.0) * 0.08;

  // Pulse the antenna tip and logo light
  antennaTip.material.emissiveIntensity = 1.3 + Math.sin(elapsed * 8.0) * 0.3;
  signalLogo.material.emissiveIntensity = 1.3 + Math.cos(elapsed * 8.0) * 0.3;

  // 2. Head & body tracking / dragging
  if (!dragging) {
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

  // 3. Random blinks for the eyes to look alive
  if (Math.random() < 0.008) {
    leftEye.scale.y = 0.1;
    rightEye.scale.y = 0.1;
  } else {
    leftEye.scale.y += (1.0 - leftEye.scale.y) * 0.2;
    rightEye.scale.y += (1.0 - rightEye.scale.y) * 0.2;
  }

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

const caseLabel = document.querySelector("#case-label");
const caseTitle = document.querySelector("#case-title");
const caseCopy = document.querySelector("#case-copy");
const casePoints = document.querySelector("#case-points");
const messageList = document.querySelector("#message-list");
const recordingTitle = document.querySelector("#recording-title");
const transcriptTrack = document.querySelector("#transcript-track");
const systemOne = document.querySelector("#system-one");
const systemTwo = document.querySelector("#system-two");
const systemThree = document.querySelector("#system-three");
const videoPrompt = document.querySelector("#video-prompt");
const caseLink = document.querySelector("#case-link");
const demoAudio = document.querySelector("#demo-audio");
const audioToggle = document.querySelector("#audio-toggle");

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
  const item = cases[key];
  caseLabel.textContent = item.label;
  caseTitle.textContent = item.title;
  caseCopy.textContent = item.copy;
  casePoints.innerHTML = item.points.map((point) => `<li>${point}</li>`).join("");
  messageList.innerHTML = item.messages.map(([speaker, message]) => `<p><b>${speaker}</b>${message}</p>`).join("");
  recordingTitle.textContent = item.recording;
  transcriptTrack.innerHTML = [...item.messages, ...item.messages]
    .map(([speaker, message]) => {
      const type = speaker === "OrangeWeb AI" ? "ai" : "caller";
      return `<p class="transcript-line ${type}"><b>${speaker}</b><span>${message}</span></p>`;
    })
    .join("");
  systemOne.textContent = item.systems[0];
  systemTwo.textContent = item.systems[1];
  systemThree.textContent = item.systems[2];
  videoPrompt.textContent = item.demoNote;
  caseLink.href = item.url;
  caseLink.textContent = "Learn more";
}

document.querySelectorAll(".selector button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".selector button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderCase(button.dataset.case);
  });
});

document.querySelector(".brief-form").addEventListener("submit", (event) => {
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
      document.querySelector("#form-note").textContent = `Thank you, ${name}! Your AI receptionist demo request has been received. We will reach out shortly.`;
      event.target.reset();
    },
    (error) => {
      button.disabled = false;
      button.textContent = originalText;
      document.querySelector("#form-note").textContent = "Oops! Something went wrong. Please try again later.";
      console.error("EmailJS failed...", error);
    }
  );
});

resize();
animate();
