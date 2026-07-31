"use client";

import { useState } from "react";

type Tab = "overview" | "demo" | "team";

const team = [
  {
    name: "Harold Soh",
    handle: "haroldsoh",
    title: "Associate Professor, NUS Computing",
    image: "team/harold-soh.png",
    bio: "Directs the CLeAR group, where his work explores machine learning and decision-making for trustworthy collaborative robots.",
    areas: ["Robotics", "Human–AI trust", "Machine learning"],
    github: "https://github.com/haroldsoh",
    profile: "https://www.comp.nus.edu.sg/cs/people/hsoh/",
  },
  {
    name: "Min-Yen Kan",
    handle: "knmnyn",
    title: "Associate Professor & Vice-Dean, NUS Computing",
    image: "team/min-yen-kan.jpg",
    bio: "Leads WING.NUS and works across natural language processing, information retrieval, digital libraries, and large language models.",
    areas: ["NLP", "Information retrieval", "LLMs"],
    github: "https://github.com/knmnyn",
    profile: "https://www.comp.nus.edu.sg/cs/people/kanmy/",
  },
  {
    name: "Anji Liu",
    handle: "liuanji",
    title: "NUS Presidential Young Professor",
    image: "team/anji-liu.png",
    bio: "Builds reliable, mathematically grounded generative AI, with a focus on tractable reasoning, controllable generation, and constraints.",
    areas: ["Generative AI", "Reasoning", "Reliability"],
    github: "https://github.com/liuanji",
    profile: "https://www.comp.nus.edu.sg/cs/people/liuaj/",
  },
  {
    name: "Wenqi Jiang",
    handle: "WenqiJiang",
    title: "Assistant Professor, NUS Computing",
    image: "team/wenqi-jiang.jpg",
    bio: "Works across data management, computer systems, and architecture to build faster, more capable systems for machine learning.",
    areas: ["ML systems", "Data systems", "RAG"],
    github: "https://github.com/WenqiJiang",
    profile: "https://www.comp.nus.edu.sg/cs/people/jiangwq/",
  },
  {
    name: "Xiaokui Xiao",
    handle: "xkxiao",
    title: "Professor & Deputy Head, NUS Computing",
    image: "team/xiaokui-xiao.png",
    bio: "Researches data management and analytics, especially scalable algorithms, data privacy, and data mining.",
    areas: ["Data privacy", "Analytics", "Data mining"],
    github: "https://github.com/xkxiao",
    profile: "https://www.comp.nus.edu.sg/cs/people/xiaoxk/",
  },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <span aria-hidden="true" className="arrow">
      {diagonal ? "↗" : "→"}
    </span>
  );
}

function ProductPreview() {
  return (
    <div className="product-preview" aria-label="Video feedback interface preview">
      <div className="preview-topbar">
        <div className="window-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span className="preview-title">Presentation review · Week 04</span>
        <span className="review-status">Review ready</span>
      </div>

      <div className="preview-body">
        <div className="video-stage">
          <div className="video-subject">
            <span className="subject-head" />
            <span className="subject-body" />
          </div>
          <div className="play-button" aria-hidden="true">
            <span>▶</span>
          </div>
          <div className="video-caption">
            <span>04:18</span>
            <strong>Explaining the core argument</strong>
          </div>
        </div>

        <aside className="feedback-panel">
          <div className="panel-heading">
            <span>Coaching notes</span>
            <span>3 moments</span>
          </div>
          <div className="feedback-note active">
            <span className="timestamp">04:18</span>
            <div>
              <strong>Strong framing</strong>
              <p>Your central claim is clear. Pause here to let it land.</p>
            </div>
          </div>
          <div className="feedback-note">
            <span className="timestamp">06:42</span>
            <div>
              <strong>Add one example</strong>
              <p>Ground this idea in a concrete audience scenario.</p>
            </div>
          </div>
          <div className="feedback-note">
            <span className="timestamp">08:05</span>
            <div>
              <strong>Close the loop</strong>
              <p>Reconnect the evidence to your opening question.</p>
            </div>
          </div>
        </aside>
      </div>

      <div className="timeline">
        <span className="timeline-progress" />
        <span className="marker marker-one" />
        <span className="marker marker-two" />
        <span className="marker marker-three" />
      </div>
    </div>
  );
}

function Overview({
  onDemo,
  onTeam,
}: {
  onDemo: () => void;
  onTeam: () => void;
}) {
  return (
    <main id="overview-panel" role="tabpanel" aria-labelledby="overview-tab">
      <section className="hero">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Video feedback, made actionable
          </div>
          <h1>
            See the moment.
            <br />
            <em>Shape what’s next.</em>
          </h1>
          <p className="hero-intro">
            Video Assessment Coach turns recorded performances into focused,
            evidence-linked feedback—so learners know exactly what worked,
            where to improve, and what to try next.
          </p>
          <div className="hero-actions">
            <button className="button button-primary" type="button" onClick={onDemo}>
              Try the live demo <Arrow />
            </button>
            <button className="button button-quiet" type="button" onClick={onTeam}>
              Meet the team
            </button>
          </div>
          <div className="hero-note">
            <span className="note-line" />
            Designed for thoughtful review, not black-box scoring.
          </div>
        </div>

        <div className="hero-visual">
          <ProductPreview />
          <div className="floating-card score-card">
            <span className="floating-label">Clarity</span>
            <strong>8.4</strong>
            <span className="trend">↑ focused</span>
          </div>
          <div className="floating-card moment-card">
            <span className="moment-icon">✦</span>
            <span>
              <strong>Key moment found</strong>
              <small>04:18 · Strong framing</small>
            </span>
          </div>
        </div>
      </section>

      <section className="principles" aria-label="Product principles">
        <span>Evidence-linked</span>
        <i />
        <span>Rubric-aware</span>
        <i />
        <span>Human-centered</span>
        <i />
        <span>Ready for reflection</span>
      </section>

      <section className="workflow" id="workflow">
        <div className="section-heading">
          <div>
            <span className="section-kicker">A better feedback loop</span>
            <h2>From recording to<br />focused action.</h2>
          </div>
          <p>
            Keep the evidence, interpretation, and next step together. Every
            observation points back to a real moment in the learner’s work.
          </p>
        </div>

        <div className="workflow-grid">
          <article className="workflow-card workflow-card-dark">
            <span className="step-number">01</span>
            <div className="mini-video">
              <div className="mini-person" />
              <span className="mini-play">▶</span>
              <div className="mini-track">
                <span />
              </div>
            </div>
            <h3>Capture the performance</h3>
            <p>
              Bring the presentation, lesson, interview, or demonstration into
              one calm review space.
            </p>
          </article>

          <article className="workflow-card workflow-card-orange">
            <span className="step-number">02</span>
            <div className="quote-mark">“</div>
            <blockquote>
              Your explanation gets sharper here. Keep this structure for the
              next section.
            </blockquote>
            <div className="quote-meta">
              <span>04:18</span>
              <span>Clarity · Evidence</span>
            </div>
            <h3>Connect feedback to moments</h3>
            <p>
              Anchor comments to the exact place they matter, with language a
              learner can act on.
            </p>
          </article>

          <article className="workflow-card workflow-card-light">
            <span className="step-number">03</span>
            <div className="progress-list">
              <div>
                <span>Structure</span>
                <i><b style={{ width: "86%" }} /></i>
              </div>
              <div>
                <span>Clarity</span>
                <i><b style={{ width: "74%" }} /></i>
              </div>
              <div>
                <span>Delivery</span>
                <i><b style={{ width: "63%" }} /></i>
              </div>
            </div>
            <h3>Make the next attempt better</h3>
            <p>
              Turn review into a short, prioritized practice plan—not another
              page of comments.
            </p>
          </article>
        </div>
      </section>

      <section className="closing">
        <span className="section-kicker">Built for growth</span>
        <h2>Feedback should open a door,<br />not end a conversation.</h2>
        <button className="button button-light" type="button" onClick={onTeam}>
          Meet the researchers behind it <Arrow />
        </button>
      </section>
    </main>
  );
}

function LiveDemo() {
  return (
    <main
      className="demo-page"
      id="demo-panel"
      role="tabpanel"
      aria-labelledby="demo-tab"
    >
      <section className="demo-intro">
        <div>
          <span className="section-kicker">Interactive prototype</span>
          <h1>
            Try the coach.
            <br />
            <em>Right here.</em>
          </h1>
        </div>
        <div className="demo-intro-copy">
          <p>
            Step into the working Presentation Coach prototype without leaving
            this page. Upload a presentation video and explore the current
            assessment experience.
          </p>
          <a
            className="demo-external-link"
            href="https://jiafei1224.github.io/presentation-coach/"
            target="_blank"
            rel="noreferrer"
          >
            Open demo in a new window <Arrow diagonal />
          </a>
        </div>
      </section>

      <section className="demo-stage" aria-label="Embedded live demo">
        <div className="demo-browser">
          <div className="demo-browser-bar">
            <div className="window-dots demo-window-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="demo-address">
              <span className="secure-dot" aria-hidden="true" />
              jiafei1224.github.io/presentation-coach
            </div>
            <span className="live-pill">
              <i />
              Live
            </span>
          </div>
          <iframe
            className="demo-frame"
            src="https://jiafei1224.github.io/presentation-coach/"
            title="Presentation Coach live demo"
            allow="camera; microphone; fullscreen; clipboard-read; clipboard-write"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <div className="demo-note">
          <span aria-hidden="true">✦</span>
          <p>
            This is the live prototype hosted on GitHub Pages. If your browser
            blocks an embedded capability, use the new-window link above.
          </p>
        </div>
      </section>
    </main>
  );
}

function Team() {
  return (
    <main
      className="team-page"
      id="team-panel"
      role="tabpanel"
      aria-labelledby="team-tab"
    >
      <section className="team-hero">
        <span className="section-kicker">The people behind the work</span>
        <h1>
          Research depth.
          <br />
          <em>Human purpose.</em>
        </h1>
        <p>
          Video Assessment Coach is stewarded by five owners of the project’s
          GitHub organization—researchers spanning learning, language, reliable
          AI, intelligent systems, robotics, and data.
        </p>
        <div className="team-count">
          <strong>05</strong>
          <span>GitHub organization owners<br />at NUS Computing</span>
        </div>
      </section>

      <section className="team-grid" aria-label="Project owners">
        {team.map((person, index) => (
          <article className="person-card" key={person.handle}>
            <div className="person-photo-wrap">
              <img
                className="person-photo"
                src={person.image}
                alt={`Portrait of ${person.name}`}
              />
              <span className="person-index">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="person-content">
              <div className="person-heading">
                <div>
                  <h2>{person.name}</h2>
                  <span className="github-handle">@{person.handle}</span>
                </div>
                <a
                  className="profile-arrow"
                  href={person.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${person.name} on GitHub`}
                >
                  ↗
                </a>
              </div>
              <p className="person-title">{person.title}</p>
              <p className="person-bio">{person.bio}</p>
              <div className="person-areas">
                {person.areas.map((area) => (
                  <span key={area}>{area}</span>
                ))}
              </div>
              <div className="person-links">
                <a href={person.github} target="_blank" rel="noreferrer">
                  GitHub <Arrow diagonal />
                </a>
                <a href={person.profile} target="_blank" rel="noreferrer">
                  NUS profile <Arrow diagonal />
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="team-footnote">
        <span className="footnote-mark">✦</span>
        <p>
          Team roles and biographies are based on public GitHub organization
          membership and official NUS Computing profiles.
        </p>
      </section>
    </main>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  const selectTab = (tab: Tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <button
          className="brand"
          type="button"
          onClick={() => selectTab("overview")}
          aria-label="Video Assessment Coach home"
        >
          <span className="brand-mark">
            <i />
            <i />
            <i />
          </span>
          <span>
            Video Assessment
            <br />
            Coach
          </span>
        </button>

        <nav className="tabs" role="tablist" aria-label="Site sections">
          <button
            id="overview-tab"
            type="button"
            role="tab"
            aria-selected={activeTab === "overview"}
            aria-controls="overview-panel"
            className={activeTab === "overview" ? "active" : ""}
            onClick={() => selectTab("overview")}
          >
            Overview
          </button>
          <button
            id="demo-tab"
            type="button"
            role="tab"
            aria-selected={activeTab === "demo"}
            aria-controls="demo-panel"
            className={activeTab === "demo" ? "active" : ""}
            onClick={() => selectTab("demo")}
          >
            Live Demo
          </button>
          <button
            id="team-tab"
            type="button"
            role="tab"
            aria-selected={activeTab === "team"}
            aria-controls="team-panel"
            className={activeTab === "team" ? "active" : ""}
            onClick={() => selectTab("team")}
          >
            Team
          </button>
        </nav>

        <a
          className="github-link"
          href="https://github.com/SoC-Team-13/VideoAssessmentCoach"
          target="_blank"
          rel="noreferrer"
        >
          View on GitHub <Arrow diagonal />
        </a>
      </header>

      {activeTab === "overview" && (
        <Overview
          onDemo={() => selectTab("demo")}
          onTeam={() => selectTab("team")}
        />
      )}
      {activeTab === "demo" && <LiveDemo />}
      {activeTab === "team" && <Team />}

      <footer className="site-footer">
        <button className="footer-brand" type="button" onClick={() => selectTab("overview")}>
          <span className="brand-mark brand-mark-small">
            <i />
            <i />
            <i />
          </span>
          Video Assessment Coach
        </button>
        <p>Thoughtful tools for better learning conversations.</p>
        <a
          href="https://github.com/SoC-Team-13/VideoAssessmentCoach"
          target="_blank"
          rel="noreferrer"
        >
          Open source on GitHub <Arrow diagonal />
        </a>
      </footer>
    </div>
  );
}
