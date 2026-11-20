import { BrowserRouter, Routes, Route, Outlet, NavLink } from "react-router";

// Shared layout component
function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-indigo-600 text-white p-4">
        <nav className="flex gap-4">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Contact
          </NavLink>
        </nav>
      </header>

      {/* Page content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 p-4 text-center">
        &copy; 2026 My Website
      </footer>
    </div>
  );
}

// Individual pages
function Home() {
  return <h1 className="text-3xl font-bold">Home Page</h1>;
}

function About() {
  return <h1 className="text-3xl font-bold">About Page</h1>;
}

function Contact() {
  return <h1 className="text-3xl font-bold">Contact Page</h1>;
}

// 404 Not Found page
function NotFound() {
  return (
    <div className="text-center mt-8">
      <h1 className="text-4xl font-bold text-red-600 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-gray-700 mb-4">
        Sorry, the page you are looking for does not exist.
      </p>
      <NavLink to="/" className="text-indigo-600 hover:underline font-semibold">
        Go back Home
      </NavLink>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
