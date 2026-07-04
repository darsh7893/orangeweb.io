<?php
if (!isset($currentPage)) {
    $currentPage = basename($_SERVER['SCRIPT_NAME'], '.php');
}
$isHome = $currentPage === 'index';
$homePrefix = $isHome ? '' : './';
?>
    <header class="nav">
      <a class="logo" href="<?php echo $isHome ? '#top' : './'; ?>" aria-label="OrangeWeb home">
        <img src="./assets/orangeweb-logo-io.png?v=20260626-logo3" alt="OrangeWeb" width="225" height="65">
      </a>
      <nav aria-label="Main navigation">
        <a href="<?php echo $homePrefix; ?>#how-it-works">How it works</a>
        <a href="<?php echo $homePrefix; ?>#solutions">Solutions</a>
        <a href="<?php echo $homePrefix; ?>#pricing">Pricing</a>
        <a href="<?php echo $homePrefix; ?>#faq">FAQ</a>
        <a href="about">About</a>
      </nav>
      <a class="nav-button" href="<?php echo $homePrefix; ?>#brief">Book Free Demo</a>
      <div class="mobile-menu">
        <button class="mobile-menu-trigger" type="button" aria-label="Open menu" aria-expanded="false">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16"></path>
          </svg>
        </button>
        <nav aria-label="Mobile navigation">
          <a href="<?php echo $homePrefix; ?>#how-it-works">How it works</a>
          <a href="<?php echo $homePrefix; ?>#solutions">Solutions</a>
          <a href="<?php echo $homePrefix; ?>#pricing">Pricing</a>
          <a href="<?php echo $homePrefix; ?>#faq">FAQ</a>
          <a href="about">About</a>
          <a href="<?php echo $homePrefix; ?>#brief">Book Free Demo</a>
        </nav>
      </div>
    </header>
