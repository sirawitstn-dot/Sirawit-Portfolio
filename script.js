* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  background-color: #0b1329;
  color: #e2e8f0;
  line-height: 1.6;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: #070d1e;
}

.logo {
  font-size: 1.25rem;
  font-weight: bold;
  color: #38bdf8;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 1.5rem;
}

.nav-links a {
  color: #94a3b8;
  text-decoration: none;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: #38bdf8;
}

.hero {
  padding: 5rem 2rem;
  text-align: center;
}

.hero h1 {
  font-size: 2.5rem;
  color: #f8fafc;
}

.subtitle {
  color: #38bdf8;
  font-size: 1.25rem;
  margin: 0.5rem 0 1rem;
}

.projects {
  padding: 3rem 2rem;
  max-width: 1000px;
  margin: auto;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.project-card {
  background: #111d3d;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #1e293b;
}

.project-card h3 {
  color: #38bdf8;
  margin-bottom: 0.5rem;
}

button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: #0284c7;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #0369a1;
}

.details {
  margin-top: 1rem;
  padding: 0.75rem;
  background: #0b1329;
  border-radius: 4px;
  font-size: 0.9rem;
}

.hidden {
  display: none;
}

.contact {
  padding: 4rem 2rem;
  text-align: center;
  background: #070d1e;
}
