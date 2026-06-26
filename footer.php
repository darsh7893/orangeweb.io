<?php
if (!isset($currentPage)) {
    $currentPage = basename($_SERVER['SCRIPT_NAME'], '.php');
}
?>
    <footer>
      <div class="footer-brand">
        <img src="./assets/orangeweb-logo-io.png?v=20260625-logo2" alt="OrangeWeb" width="180" height="52">
        <div class="footer-contact">
          <a href="mailto:info@orangeweb.io">info@orangeweb.io</a>
          <span class="separator">&bull;</span>
          <a href="tel:5069950411">(506) 995-0411</a>
        </div>
        <span>Copyright 2026 OrangeWeb.io. All rights reserved.</span>
      </div>
      <div class="footer-stack">
        <nav class="footer-links" aria-label="Footer navigation">
          <?php if ($currentPage !== 'about'): ?><a href="about">About</a><?php endif; ?>
          <?php if ($currentPage !== 'ai-receptionist-for-clinics'): ?><a href="ai-receptionist-for-clinics">Clinics</a><?php endif; ?>
          <?php if ($currentPage !== 'ai-receptionist-for-real-estate'): ?><a href="ai-receptionist-for-real-estate">Real estate</a><?php endif; ?>
          <?php if ($currentPage !== 'ai-receptionist-for-spas'): ?><a href="ai-receptionist-for-spas">Spas</a><?php endif; ?>
          <?php if ($currentPage !== 'ai-receptionist-for-home-services'): ?><a href="ai-receptionist-for-home-services">Home services</a><?php endif; ?>
          <?php if ($currentPage !== 'ai-receptionist-for-medspas'): ?><a href="ai-receptionist-for-medspas">Medspas</a><?php endif; ?>
        </nav>
        <nav class="social-links" aria-label="Social media">
          <a href="https://www.linkedin.com/company/orangeweb-io" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 9.5V20M6.5 6.5v.1M11 20v-6.2c0-2.6 1.5-4.2 3.7-4.2 2.1 0 3.3 1.4 3.3 4.1V20M11 10h.1"></path></svg>
          </a>
          <a href="https://x.com/orangeweb_io" aria-label="X">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 4 11.7 16H20L8.3 4H4Zm16 0-7.2 8.1M11.2 14.3 4 20"></path></svg>
          </a>
          <a href="https://www.instagram.com/orangeweb.io" aria-label="Instagram">
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="5"></rect><circle cx="12" cy="12" r="3.4"></circle><path d="M17.5 6.8v.1"></path></svg>
          </a>
        </nav>
      </div>
    </footer>

    <!-- EmailJS loaded on Home and About pages -->
    <?php if ($currentPage === 'index' || $currentPage === 'about'): ?>
    <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
    <script>
      (function() {
        emailjs.init({
          publicKey: "qVHcOWivNwBlkMtli",
        });
      })();
    </script>
    <?php endif; ?>

    <script src="./site.js?v=20260625-form2"></script>
    <!-- 3D Robot script loaded only on Homepage -->
    <?php if ($currentPage === 'index'): ?>
    <script src="https://unpkg.com/three@0.128.0/build/three.min.js"></script>
    <script src="./app.js?v=20260625-robot-cdn1"></script>
    <?php endif; ?>
