"use client";

export default function GlobalError({ reset }) {
  return (
    <html>
      <body>
        <div style={{ textAlign: "center", padding: "6rem 1.5rem", fontFamily: "sans-serif" }}>
          <h2>Something went wrong</h2>
          <p>An unexpected error occurred. Please try again.</p>
          <button type="button" onClick={reset}>
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
