import Link from "next/link";

const proofPoints = [
  { value: "4,200+", label: "couples planning together" },
  { value: "4.9 / 5", label: "from happy families" },
  { value: "99.9%", label: "platform uptime" },
];

const events = [
  { day: "12", month: "DEC", name: "Mehendi & Sundowner", detail: "Sunset Lawns · 4:00 PM", tone: "sage" },
  { day: "13", month: "DEC", name: "Sangeet & Celebrations", detail: "Royal Courtyard · 7:00 PM", tone: "rose" },
  { day: "14", month: "DEC", name: "Pheras & Reception", detail: "Lake Promenade · 4:30 PM", tone: "gold" },
];

const tasks = [
  { label: "Finalize floral arrangements", status: "Done", done: true },
  { label: "Confirm the final tasting menu", status: "Due in 2 days", done: false },
  { label: "Review the ceremony timeline", status: "Due Friday", done: false },
];

const features = [
  { number: "01", icon: "✳", title: "Multi-day schedules", detail: "Plan every ceremony with its own time, venue, and details." },
  { number: "02", icon: "✓", title: "Shared checklists", detail: "Create tasks, assign them to family, and keep next steps clear." },
  { number: "03", icon: "♡", title: "Guest list & RSVPs", detail: "Keep invitations, guest details, and replies together." },
  { number: "04", icon: "₹", title: "Expense tracking", detail: "Record wedding spending and the details behind each expense." },
  { number: "05", icon: "◇", title: "Vendor details", detail: "Keep the contacts and notes for your chosen vendors close." },
  { number: "06", icon: "⌁", title: "Website & memories", detail: "Share your wedding details, photos, and YouTube livestream." },
];

function BrandMark() {
  return <span className="brand-mark" aria-hidden="true">m</span>;
}

export default function HomePage() {
  return (
    <main className="home-page" id="overview">
      <header className="site-header">
        <a className="brand" href="#overview" aria-label="Make My Marriage home">
          <BrandMark />
          <span>Make My <strong>Marriage</strong></span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#overview">Overview</a>
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
        </nav>
        <div className="header-actions">
          <Link className="sign-in-link" href="/login">Sign In</Link>
          <Link className="header-button" href="/signup">Get Started</Link>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">THE MODERN WEDDING WORKSPACE</p>
          <h1>Everything for your wedding.<br /><em>All in one place.</em></h1>
          <p className="hero-description">Harmonize ceremonies, guests, and tasks into a quiet, collaborative workspace built for calm precision.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/signup">Start Planning Free <span aria-hidden="true">→</span></Link>
            <a className="button button-secondary" href="#interactive-preview"><span className="play-icon" aria-hidden="true">▷</span> View Live Demo</a>
          </div>
          <div className="hero-benefits"><span><b>✓</b> Free for couples</span><i>·</i><span><b>✓</b> No credit card</span><i>·</i><span><b>✓</b> Invite collaborators</span></div>
        </div>

        <div className="hero-preview" id="interactive-preview" aria-label="Sample wedding workspace">
          <div className="preview-browser-bar"><div className="browser-dots"><i /><i /><i /></div><div className="preview-url"><span aria-hidden="true">⌑</span> app.makemymarriage.com/aarav-meera/overview</div><span className="preview-lock" aria-hidden="true">⌑</span></div>
          <div className="workspace-preview">
            <div className="preview-sidebar">
              <div className="preview-brand"><BrandMark /><span>MAKE MY<br /><strong>MARRIAGE</strong></span></div>
              <p className="sidebar-label">YOUR WORKSPACE</p>
              <a className="side-link side-link-active" href="#interactive-preview"><span>▦</span> Overview</a>
              <a className="side-link" href="#features"><span>▤</span> Events &amp; Timeline</a>
              <a className="side-link" href="#features"><span>♧</span> Guests &amp; RSVPs</a>
              <a className="side-link" href="#features"><span>☷</span> Tasks &amp; Checklist</a>
              <div className="sidebar-profile"><span className="profile-avatar">AM</span><span><b>Aarav &amp; Meera</b><small>Wedding workspace</small></span><span className="profile-dots">···</span></div>
            </div>
            <div className="preview-main">
              <div className="preview-topline"><span>YOUR WEDDING SPACE <b>/</b> OVERVIEW</span><span className="preview-date">✧ &nbsp; DECEMBER 2026</span></div>
              <div className="wedding-heading"><div><p>UDAIPUR CELEBRATION</p><h2>Aarav &amp; Meera&apos;s Wedding</h2><span>December 14, 2026 <i>·</i> Udaipur, Rajasthan</span></div><span className="days-card"><b>43</b><small>DAYS TO GO</small></span></div>
              <div className="summary-cards">
                <div className="summary-card"><span className="summary-icon guests">♡</span><span className="summary-label">GUEST RSVPS</span><strong>186 <small>/ 240</small></strong><span className="summary-note">guests confirmed</span></div>
                <div className="summary-card"><span className="summary-icon tasks">✓</span><span className="summary-label">TASKS COMPLETED</span><strong>38 <small>/ 64</small></strong><span className="summary-note">milestones checked off</span></div>
                <div className="summary-card"><span className="summary-icon events-icon">◷</span><span className="summary-label">CELEBRATIONS</span><strong>4</strong><span className="summary-note">on your calendar</span></div>
              </div>
              <div className="preview-columns">
                <section className="preview-panel event-panel">
                  <div className="panel-heading"><div><span>YOUR WEDDING WEEKEND</span><h3>Upcoming celebrations</h3></div><a href="#features">View all <b>→</b></a></div>
                  <div className="preview-event-list">{events.map((event) => <div className="preview-event" key={event.name}><span className={`event-date ${event.tone}`}><b>{event.day}</b><small>{event.month}</small></span><span className="event-copy"><b>{event.name}</b><small>{event.detail}</small></span><span className="event-chevron">›</span></div>)}</div>
                </section>
                <section className="preview-panel task-panel">
                  <div className="panel-heading"><div><span>A FEW NEXT STEPS</span><h3>Tasks to keep in view</h3></div><span className="task-count">3</span></div>
                  <div className="preview-task-list">{tasks.map((task) => <div className="preview-task" key={task.label}><span className={`task-check ${task.done ? "checked" : ""}`}>{task.done ? "✓" : ""}</span><span className="task-copy"><b>{task.label}</b><small>{task.status}</small></span></div>)}</div>
                </section>
              </div>
              <div className="preview-members"><span className="member-stack"><i>A</i><i>M</i><i>P</i><b>+2</b></span><span>Planning together with <strong>5 family members</strong></span><span className="members-right">Your people, in the loop</span></div>
            </div>
          </div>
          <div className="sample-ribbon">SAMPLE WEDDING SPACE <span>·</span> YOUR PLANS WILL BE YOUR OWN</div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Sample social proof">
        {proofPoints.map((point) => <div className="proof-point" key={point.value}><strong>{point.value}</strong><span>{point.label}</span></div>)}
      </section>

      <section className="features-section" id="features">
        <div className="section-heading"><p className="eyebrow">DESIGNED FOR NUANCE &amp; COMPLEXITY</p><h2>Everything you need to plan,<br /><em>in one place.</em></h2><p>Bring your events, guests, tasks, and RSVPs together in one thoughtfully designed workspace. Plan together, stay organized, and spend more time enjoying the journey.</p></div>
        <div className="feature-grid">{features.map((feature) => <article className="feature-card" key={feature.number}><span className="feature-icon">{feature.icon}</span><span className="feature-number">{feature.number}</span><h3>{feature.title}</h3><p>{feature.detail}</p><span className="feature-rule" /></article>)}</div>
      </section>

      <section className="guest-section" id="how-it-works">
        <div className="guest-intro"><p className="eyebrow">FRICTIONLESS FOR GUESTS</p><h2>Make it easy for everyone to be part of <em>the day.</em></h2><p>No app downloads. No account creation. Just a refined mobile link delivered straight to their phone.</p></div>
        <div className="guest-showcase">
          <div className="guest-illustration" aria-hidden="true"><div className="invite-card"><div className="invite-flower">✳</div><span>WITH JOY IN OUR HEARTS</span><h3>Aarav<br /><i>&amp;</i> Meera</h3><p>INVITE YOU TO CELEBRATE</p><div className="invite-line" /><b>DECEMBER 14, 2026</b><small>UDAIPUR, RAJASTHAN</small><div className="invite-bottom">You&apos;re on the list <span>♡</span></div></div><span className="guest-spark guest-spark-one">✳</span><span className="guest-spark guest-spark-two">✧</span></div>
          <div className="rsvp-preview"><div className="rsvp-top"><span>WEDDING INVITATION</span><span className="rsvp-link-label">PERSONAL LINK</span></div><h3>Aarav <i>&amp;</i> Meera</h3><p className="rsvp-date">December 14 · Udaipur</p><div className="rsvp-divider" /><p className="rsvp-question">Will you be attending?</p><div className="rsvp-options"><span>Joyfully Accept <b>✓</b></span><span>Regretfully Decline</span></div><div className="rsvp-meal"><span>Meal preference</span><b>Vegetarian <i>⌄</i></b></div><div className="rsvp-foot">A simple reply, no account needed <span>♡</span></div></div>
        </div>
      </section>

      <section className="value-section" aria-label="A calmer way to plan">
        <article><span className="value-icon">▧</span><p className="eyebrow">ONE SHARED SPACE</p><h3>One place for every detail</h3><p>Keep your plans, guest details, and important notes together in clear, shared lists.</p></article>
        <article><span className="value-icon">◉</span><p className="eyebrow">A CLEAR NEXT STEP</p><h3>Know what needs attention</h3><p>See your upcoming events and open tasks, so it is easier to focus on what comes next.</p></article>
        <article><span className="value-icon">⌂</span><p className="eyebrow">PLAN TOGETHER</p><h3>A shared plan for helpers</h3><p>Bring family and friends into the planning and keep everyone moving in the same direction.</p></article>
      </section>

      <section className="closing-section" id="get-started"><p className="eyebrow">CALM · COHESIVE · MADE FOR YOU</p><h2>Your wedding deserves<br /><em>a better plan.</em></h2><p>Replace scattered lists with a shared space for all the people, plans, and moments that matter.</p><Link className="button button-light" href="/signup">Get Started for Free <span aria-hidden="true">→</span></Link></section>

      <footer className="site-footer"><a className="brand" href="#overview"><BrandMark /><span>Make My <strong>Marriage</strong></span></a><p>Your wedding. Your way.</p><div className="footer-links"><a href="#features">Features</a><a href="#how-it-works">How it works</a><a href="#overview">Back to top ↑</a></div></footer>
    </main>
  );
}
