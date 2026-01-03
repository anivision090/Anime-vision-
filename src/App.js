import React, { useState } from "react";
import videos from "../videos.json";

function App() {
  const [category, setCategory] = useState("basic");

  const categories = [
    { id: "basic", label: "Basic Edits" },
    { id: "standard", label: "Standard Edits" },
    { id: "high", label: "High Quality" },
    { id: "best", label: "Best of Ani Vision" }
  ];

  const filteredVideos = videos.filter(
    (video) => video.category === category
  );

  return (
    <div style={styles.app}>
      <h1 style={styles.title}>🚀 Delwa – Ani Vision</h1>

      {/* Categories */}
      <div style={styles.categories}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setCategory(cat.id)}
            style={{
              ...styles.button,
              background:
                category === cat.id ? "#6c63ff" : "#1c1c3a"
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Videos */}
      <div style={styles.grid}>
        {filteredVideos.length === 0 && (
          <p>No videos in this category yet.</p>
        )}

        {filteredVideos.map((video, index) => (
          <div key={index} style={styles.card}>
            <p>{video.title}</p>
            <a
              href={video.url}
              target="_blank"
              rel="noreferrer"
              style={styles.link}
            >
              ▶ Play
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  app: {
    padding: "20px",
    minHeight: "100vh",
    background: "#0b0b2b",
    color: "white"
  },
  title: {
    textAlign: "center"
  },
  categories: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "20px"
  },
  button: {
    border: "none",
    padding: "10px 15px",
    color: "white",
    borderRadius: "20px",
    cursor: "pointer"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "15px"
  },
  card: {
    background: "#151540",
    padding: "15px",
    borderRadius: "10px",
    textAlign: "center"
  },
  link: {
    display: "inline-block",
    marginTop: "10px",
    color: "#6c63ff",
    textDecoration: "none"
  }
};

export default App;
