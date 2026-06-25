<?php
// Local router for built-in PHP development server
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// If the file exists directly as-is, serve it (e.g., stylesheets, images, js)
if (file_exists(__DIR__ . $uri) && !is_dir(__DIR__ . $uri)) {
    return false;
}

// Route clean URLs to PHP files (e.g., /about -> about.php)
$phpFile = __DIR__ . $uri . '.php';
if (file_exists($phpFile)) {
    include $phpFile;
    exit;
}

// Route base path to index.php
if ($uri === '/' || $uri === '') {
    include __DIR__ . '/index.php';
    exit;
}

// Fallback to let PHP dev server handle it (usually 404)
return false;
