<?php
if (!isset($currentPage)) {
    $currentPage = basename($_SERVER['SCRIPT_NAME'], '.php');
}
$isHome = $currentPage === 'index';
$homePrefix = $isHome ? '' : './';
?>
    <header class="nav">
      <a class="logo" href="<?php echo $isHome ? '#top' : './'; ?>" aria-label="OrangeWeb home">
        <img src="./assets/orangeweb-logo-io.png?v=20260710-3" alt="OrangeWeb" width="225" height="51">
      </a>
      <nav aria-label="Main navigation">
        <a href="<?php echo $homePrefix; ?>#how-it-works">How it works</a>
        <a href="<?php echo $homePrefix; ?>#solutions">Solutions</a>
        <a href="<?php echo $homePrefix; ?>#pricing">Pricing</a>
        <a href="<?php echo $homePrefix; ?>#faq">FAQ</a>
        <a href="about" class="<?php echo $currentPage === 'about' ? 'active' : ''; ?>">About</a>
      </nav>
      <a class="nav-button" href="<?php echo $homePrefix; ?>#brief">Book Free Demo</a>
      <div class="mobile-menu">
        <button class="mobile-menu-trigger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-nav-menu">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path class="line-1" d="M4 7h16"></path>
            <path class="line-2" d="M4 12h16"></path>
            <path class="line-3" d="M4 17h16"></path>
          </svg>
        </button>
        <nav id="mobile-nav-menu" aria-label="Mobile navigation">
          <a href="<?php echo $homePrefix; ?>#how-it-works">How it works</a>
          <a href="<?php echo $homePrefix; ?>#solutions">Solutions</a>
          <a href="<?php echo $homePrefix; ?>#pricing">Pricing</a>
          <a href="<?php echo $homePrefix; ?>#faq">FAQ</a>
          <a href="about" class="<?php echo $currentPage === 'about' ? 'active' : ''; ?>">About</a>
          <a href="<?php echo $homePrefix; ?>#brief">Book Free Demo</a>
        </nav>
      </div>
    </header>
