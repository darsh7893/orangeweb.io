import * as THREE from "https://unpkg.com/three@0.165.0/build/three.module.js";

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
scene.add(new THREE.AmbientLight(0xffffff, 1.6));

const light = new THREE.PointLight(0xff7a1a, 9, 18);
light.position.set(2.8, 2.4, 4);
scene.add(light);

const softLight = new THREE.PointLight(0xffffff, 6, 14);
softLight.position.set(-3, -1, 4);
scene.add(softLight);

const planet = new THREE.Group();
group.add(planet);

const cubeGeometry = new THREE.BoxGeometry(0.074, 0.074, 0.074);
const voxelMaterial = new THREE.MeshStandardMaterial({
  color: 0xff6a00,
  roughness: 0.34,
  metalness: 0.04,
  emissive: 0xff5a00,
  emissiveIntensity: 0.18
});
const accentMaterial = new THREE.MeshStandardMaterial({
  color: 0x07162f,
  roughness: 0.5,
  metalness: 0.02,
  emissive: 0x07162f,
  emissiveIntensity: 0.04
});
const highlightMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  roughness: 0.36,
  metalness: 0
});

const voxelCount = 23000;
const planetMesh = new THREE.InstancedMesh(cubeGeometry, voxelMaterial, voxelCount);
const accentMesh = new THREE.InstancedMesh(cubeGeometry, accentMaterial, 2400);
const highlightMesh = new THREE.InstancedMesh(cubeGeometry, highlightMaterial, 800);
planet.add(planetMesh, accentMesh, highlightMesh);

const matrix = new THREE.Matrix4();
const position = new THREE.Vector3();
const quaternion = new THREE.Quaternion();
const scale = new THREE.Vector3();
const normal = new THREE.Vector3();

function noise(x, y, z) {
  return (
    Math.sin(x * 3.1 + y * 1.7) +
    Math.sin(y * 4.2 + z * 2.3) +
    Math.sin(z * 3.7 + x * 2.6)
  ) / 3;
}

function placeVoxels(mesh, max, predicate, sizeBase) {
  let index = 0;
  const grid = 37;
  const half = (grid - 1) / 2;

  for (let x = 0; x < grid; x += 1) {
    for (let y = 0; y < grid; y += 1) {
      for (let z = 0; z < grid; z += 1) {
        if (index >= max) break;
        const px = (x - half) / half;
        const py = (y - half) / half;
        const pz = (z - half) / half;
        const radius = Math.sqrt(px * px + py * py + pz * pz);
        if (radius > 0.78 || radius < 0.18) continue;

        const surface = Math.abs(radius - 0.62);
        const terrain = noise(px, py, pz);
        const coreFill = radius < 0.56 && Math.sin((px + py + pz) * 18) > 0.68;
        if (!coreFill && surface > 0.086 + terrain * 0.018) continue;
        if (!predicate(px, py, pz, terrain)) continue;

        normal.set(px, py, pz).normalize();
        position.set(px, py, pz).multiplyScalar(3.18 + terrain * 0.18);
        quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal);
        const s = sizeBase * (0.82 + Math.max(terrain, -0.1) * 0.28);
        scale.setScalar(s);
        matrix.compose(position, quaternion, scale);
        mesh.setMatrixAt(index, matrix);
        index += 1;
      }
    }
  }
  mesh.count = index;
  mesh.instanceMatrix.needsUpdate = true;
}

placeVoxels(planetMesh, voxelCount, (x, y, z, terrain) => {
  const band = Math.sin((x + y * 0.6 + z * 0.25) * 9);
  return terrain > -0.72 && band > -0.92;
}, 1);

placeVoxels(accentMesh, 1650, (x, y, z, terrain) => {
  const continent = Math.sin(x * 9.5 + z * 4.2) + Math.cos(y * 8.2 - x * 2.6);
  return continent > 1.12 && terrain > -0.35;
}, 1.05);

placeVoxels(highlightMesh, 520, (x, y, z, terrain) => {
  const cap = y > 0.42 || y < -0.5;
  return cap && terrain > -0.18 && Math.sin((x + z) * 18) > 0.22;
}, 0.9);

const ringMaterial = new THREE.MeshStandardMaterial({
  color: 0xff7a1a,
  roughness: 0.28,
  metalness: 0.12,
  transparent: true,
  opacity: 0.5
});

const rings = [];
for (let index = 0; index < 3; index += 1) {
  const ring = new THREE.Mesh(new THREE.TorusGeometry(2.42 + index * 0.34, 0.026, 24, 220), ringMaterial);
  ring.rotation.x = Math.PI / 2 + index * 0.28;
  ring.rotation.y = index * 0.42;
  group.add(ring);
  rings.push(ring);
}

const canvas = renderer.domElement;
const clock = new THREE.Clock();
const dragRotation = new THREE.Vector2(-0.18, 0);
const velocity = new THREE.Vector2(0, 0.0035);
let dragging = false;
let lastX = 0;
let lastY = 0;

function resize() {
  const parent = canvas.parentElement;
  const rect = parent.getBoundingClientRect();
  const width = Math.max(1, rect.width);
  const height = Math.max(1, rect.height);
  renderer.setSize(width, height, false);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  group.position.set(0, 0, 0);
  group.scale.setScalar(0.74);
}

function animate() {
  const elapsed = clock.getElapsedTime();
  if (!dragging) {
    dragRotation.y += velocity.y;
    velocity.multiplyScalar(0.985);
    if (Math.abs(velocity.y) < 0.0025) velocity.y = 0.0025;
  }

  planet.rotation.x = dragRotation.x;
  planet.rotation.y = dragRotation.y;
  planet.scale.setScalar(1 + Math.sin(elapsed * 2.1) * 0.012);
  rings.forEach((ring, index) => {
    ring.rotation.z = elapsed * (0.06 + index * 0.024) + dragRotation.y * 0.15;
    ring.rotation.y += 0.0007 * (index + 1);
  });
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
  dragRotation.x = Math.max(-0.9, Math.min(0.55, dragRotation.x));
  velocity.set(dy * 0.0004, dx * 0.00035);
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
  const business = data.get("business");
  const request = data.get("request") || "booking a new customer";
  document.querySelector("#form-note").textContent = `Demo request ready: ${business} receptionist handling "${request}".`;
});

resize();
animate();
