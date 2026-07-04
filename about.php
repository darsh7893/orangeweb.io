<?php $currentPage = 'about'; ?>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="About OrangeWeb.io: a global custom AI agents and AI solutions company building AI receptionists, workflow automation, lead handling, and business-specific AI systems.">
    <meta name="robots" content="index,follow,max-image-preview:large">
    <meta name="theme-color" content="#ff7a1a">
    <link rel="canonical" href="https://orangeweb.io/about">
    <link rel="icon" href="./assets/favicon.svg" type="image/svg+xml">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="OrangeWeb.io">
    <meta property="og:title" content="About OrangeWeb.io | Custom AI Agents and AI Solutions">
    <meta property="og:description" content="OrangeWeb.io serves businesses globally with custom AI agents, AI receptionists, workflow automation, and business-specific AI solutions.">
    <meta property="og:url" content="https://orangeweb.io/about">
    <meta property="og:image" content="https://orangeweb.io/assets/orangeweb-logo-io.png">
    <meta name="twitter:card" content="summary_large_image">
    <title>About OrangeWeb.io | Custom AI Agents and AI Solutions</title>
    <link rel="stylesheet" href="./styles.css?v=20260704-logo3">
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "AboutPage",
            "@id": "https://orangeweb.io/about#about",
            "url": "https://orangeweb.io/about",
            "name": "About OrangeWeb.io",
            "description": "OrangeWeb.io serves businesses globally with custom AI agents, AI receptionist systems, workflow automation, and AI solutions built around business pain points.",
            "isPartOf": { "@id": "https://orangeweb.io/#website" },
            "about": { "@id": "https://orangeweb.io/#organization" }
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://orangeweb.io/about#breadcrumb",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://orangeweb.io/" },
              { "@type": "ListItem", "position": 2, "name": "About", "item": "https://orangeweb.io/about" }
            ]
          }
        ]
      }
    </script>
  </head>
  <body>
    <?php include 'header.php'; ?>

    <main class="solution-main about-main">
      <section class="solution-hero about-hero">
        <div>
          <p class="breadcrumb"><a href="./">Home</a> / About</p>
          <p class="label">About OrangeWeb.io</p>
          <h1>AI agents for business operations.</h1>
          <p class="subhead">OrangeWeb.io builds AI agents and automation systems for companies globally. AI receptionist is one solution; the larger work is designing practical AI that removes bottlenecks from sales, support, operations, and follow-up.</p>
        </div>
        <aside class="signal-panel">
          <strong>Where AI agents help</strong>
          <ul>
            <li>AI receptionist and lead intake</li>
            <li>Customer support and follow-up agents</li>
            <li>Internal workflow and reporting automation</li>
          </ul>
        </aside>
      </section>

      <section class="solution-section about-section">
        <div class="section-copy">
          <p class="label">What we build</p>
          <h2 class="about-heading">Connected AI solutions.</h2>
        </div>
        <div class="value-strip">
          <article><b>1</b><span>AI agents</span><p>Receptionists, support agents, intake agents, follow-up agents, and internal assistants.</p></article>
          <article><b>2</b><span>Custom workflows</span><p>Business-specific logic for routing, qualification, reminders, summaries, and approvals.</p></article>
          <article><b>3</b><span>System handoffs</span><p>CRM notes, calendars, forms, email, SMS, spreadsheets, dashboards, and staff notifications.</p></article>
        </div>
      </section>

      <section class="solution-section about-section">
        <div class="section-copy">
          <p class="label">Pain to solution</p>
          <h2 class="about-heading">Problem-first AI design.</h2>
        </div>
        <div class="pain-map">
          <article><span>Leads are not handled fast enough</span><p>An AI agent can respond, qualify, summarize, and route the opportunity.</p></article>
          <article><span>Staff repeat the same admin work</span><p>Automation can collect details, draft updates, move records, and trigger next steps.</p></article>
          <article><span>Customers need answers after hours</span><p>AI can handle common requests while escalating sensitive cases to humans.</p></article>
          <article><span>Managers lack clean visibility</span><p>AI workflows can turn calls, forms, and messages into structured operational data.</p></article>
        </div>
      </section>

      <section class="about-contact" id="discovery">
        <div>
          <p class="label">Start here</p>
          <h2 class="about-heading">Test your next call.</h2>
          <p>We will shape a short receptionist demo around your real front-desk flow, so you can judge it in under two minutes.</p>
        </div>
        <form class="discovery-form">
          <label>
            Name
            <input type="text" name="name" required placeholder="Your full name">
          </label>
          <label>
            Email
            <input type="email" name="email" required placeholder="you@company.com">
          </label>
          <label>
            Phone
            <input type="tel" name="phone" required placeholder="(555) 555-5555">
          </label>
          <label>
            Website
            <input type="url" name="website" placeholder="https://yourwebsite.com">
          </label>
          <button type="submit">Schedule discovery call</button>
        </form>
        <p class="form-note" id="discovery-note" role="status"></p>
      </section>
    </main>

    <?php include 'footer.php'; ?>
  </body>
</html>
