"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

type AuthMode = "login" | "signup";

function Brand() {
  return (
    <Link className="auth-brand" href="/" aria-label="Make My Marriage home">
      <span className="auth-brand-mark" aria-hidden="true">m</span>
      <span>Make My <strong>Marriage</strong></span>
    </Link>
  );
}

function WeddingPreview({ mode }: { mode: AuthMode }) {
  return (
    <div className="auth-workspace" aria-label="Sample wedding workspace">
      <div className="auth-workspace-top">
        <span className="auth-workspace-dots"><i /><i /><i /></span>
        <span>YOUR WEDDING WORKSPACE</span>
        <span className="auth-workspace-menu">···</span>
      </div>
      <div className="auth-wedding-summary">
        <span className="auth-avatar">A<span>M</span></span>
        <div>
          <p>AARAV &amp; MEERA</p>
          <h2>{mode === "login" ? "Welcome back to your plans." : "Your wedding, your way."}</h2>
          <span>Udaipur celebration <i>·</i> December 14, 2026</span>
        </div>
      </div>
      <div className="auth-preview-divider" />
      <div className="auth-event-row">
        <div className="auth-event-icon" aria-hidden="true">✳</div>
        <div className="auth-event-copy">
          <span>UP NEXT · DEC 13</span>
          <strong>Sangeet &amp; Dinner Gala</strong>
          <small>Royal Courtyard · 7:00 PM</small>
        </div>
        <span className="auth-event-arrow" aria-hidden="true">↗</span>
      </div>
      <div className="auth-preview-stats">
        <div><span>GUEST LIST</span><strong>186 <small>/ 240</small></strong><small>confirmed guests</small></div>
        <div><span>PLANNING TOGETHER</span><strong className="auth-member-stack"><i>A</i><i>M</i><i>P</i><b>+2</b></strong><small>with your people</small></div>
      </div>
      <div className="auth-preview-bottom"><span>YOUR PLANS, ALL IN ONE PLACE</span><span>01 / 03</span></div>
    </div>
  );
}

export default function AuthScreen({ mode }: { mode: AuthMode }) {
  const isSignup = mode === "signup";
  const [showPassword, setShowPassword] = useState(false);
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice("Account access isn’t connected yet. Your details weren’t sent.");
  }

  return (
    <main className={`auth-page ${isSignup ? "auth-page-signup" : "auth-page-login"}`}>
      <section className="auth-story" aria-label="Make My Marriage">
        <div className="auth-story-inner">
          <Brand />
          <div className="auth-story-copy">
            <p className="auth-eyebrow">YOUR WEDDING. YOUR WAY.</p>
            <h1>{isSignup ? <>A lovely place<br />to begin.</> : <>Welcome back<br />to your plans.</>}</h1>
            <p className="auth-story-description">
              {isSignup
                ? "Bring your celebrations, guests, and next steps together in one thoughtful workspace."
                : "Your wedding details, your people, and your next steps are right where you left them."}
            </p>
          </div>
          <WeddingPreview mode={mode} />
          <p className="auth-story-footer">A calmer way to plan, together.</p>
        </div>
      </section>

      <section className="auth-panel" aria-labelledby="auth-title">
        <div className="auth-panel-top"><span>{isSignup ? "START YOUR WORKSPACE" : "YOUR WORKSPACE AWAITS"}</span><Link href="/">Back to home <span aria-hidden="true">↗</span></Link></div>
        <div className="auth-form-card">
          <Brand />
          <p className="auth-eyebrow auth-form-eyebrow">{isSignup ? "A NEW CHAPTER" : "PICK UP WHERE YOU LEFT OFF"}</p>
          <h2 id="auth-title">{isSignup ? "Create your account" : "Sign in"}</h2>
          <p className="auth-form-intro">{isSignup ? "Start bringing your wedding plans together." : "Sign in to continue planning your wedding."}</p>

          <form className="auth-form" onSubmit={handleSubmit}>
            {isSignup && (
              <label className="auth-field">
                <span>Your name</span>
                <input autoComplete="name" name="name" placeholder="e.g. Meera Patel" required />
              </label>
            )}
            <label className="auth-field">
              <span>Email address</span>
              <input autoComplete="email" name="email" placeholder="you@example.com" required type="email" />
            </label>
            <label className="auth-field">
              <span>Password</span>
              <span className="auth-password-wrap">
                <input autoComplete={isSignup ? "new-password" : "current-password"} name="password" placeholder="Enter your password" required type={showPassword ? "text" : "password"} />
                <button aria-label={showPassword ? "Hide password" : "Show password"} className="auth-password-toggle" onClick={() => setShowPassword(!showPassword)} type="button">{showPassword ? "Hide" : "Show"}</button>
              </span>
            </label>

            {!isSignup && <label className="auth-remember"><input name="remember" type="checkbox" /> <span>Remember this device for 30 days</span></label>}
            {notice && <p className="auth-notice" role="status">{notice}</p>}
            <button className="auth-submit" type="submit">{isSignup ? "Create account" : "Sign in"}<span aria-hidden="true">→</span></button>
          </form>

          <p className="auth-switch">
            {isSignup ? "Already have an account?" : "New to Make My Marriage?"}{" "}
            <Link href={isSignup ? "/login" : "/signup"}>{isSignup ? "Sign in" : "Create an account"}</Link>
          </p>
          <p className="auth-form-foot">Make My Marriage <span>·</span> Made for the moments that matter</p>
        </div>
      </section>
    </main>
  );
}
