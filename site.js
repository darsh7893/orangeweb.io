document.querySelectorAll(".mobile-menu").forEach((menu) => {
  const trigger = menu.querySelector(".mobile-menu-trigger");

  trigger?.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    trigger.setAttribute("aria-expanded", String(isOpen));
  });
});

document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = link.closest(".mobile-menu");
    const trigger = menu?.querySelector(".mobile-menu-trigger");
    menu?.classList.remove("is-open");
    trigger?.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("click", (event) => {
  document.querySelectorAll(".mobile-menu.is-open").forEach((menu) => {
    if (menu.contains(event.target)) return;
    menu.classList.remove("is-open");
    menu.querySelector(".mobile-menu-trigger")?.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  document.querySelectorAll(".mobile-menu.is-open").forEach((menu) => {
    menu.classList.remove("is-open");
    menu.querySelector(".mobile-menu-trigger")?.setAttribute("aria-expanded", "false");
  });
});

const caseLink = document.querySelector("#case-link");

document.querySelectorAll(".selector button[data-detail-url]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!caseLink) return;
    caseLink.setAttribute("href", button.dataset.detailUrl);
  });
});

document.querySelector(".discovery-form")?.addEventListener("submit", (event) => {
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
    source: "About Page Discovery"
  }).then(
    () => {
      button.disabled = false;
      button.textContent = originalText;
      const note = document.querySelector("#discovery-note");
      if (note) note.textContent = `Thank you, ${name}! Your AI receptionist demo request has been received. We will reach out shortly.`;
      event.target.reset();
    },
    (error) => {
      button.disabled = false;
      button.textContent = originalText;
      const note = document.querySelector("#discovery-note");
      if (note) note.textContent = "Oops! Something went wrong. Please try again later.";
      console.error("EmailJS failed...", error);
    }
  );
});
