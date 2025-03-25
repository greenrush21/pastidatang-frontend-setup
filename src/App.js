import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

// Import placeholder components for demonstration
const Dashboard = () => (
  <div className="dashboard-container">
    <h1>Pastidatang Dashboard</h1>
    <p>Welcome to your dashboard!</p>
  </div>
);

const Login = () => (
  <div className="auth-container">
    <div className="auth-card">
      <h1>Login to Pastidatang</h1>
      <form className="auth-form">
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="your.email@example.com" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="••••••••" />
        </div>
        <button type="submit" className="btn-primary">Login</button>
      </form>
      <div className="auth-footer">
        <p>Don't have an account? <a href="/register">Register</a></p>
      </div>
    </div>
  </div>
);

const Register = () => (
  <div className="auth-container">
    <div className="auth-card">
      <h1>Register for Pastidatang</h1>
      <form className="auth-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Your Name" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="your.email@example.com" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="••••••••" />
        </div>
        <button type="submit" className="btn-primary">Register</button>
      </form>
      <div className="auth-footer">
        <p>Already have an account? <a href="/login">Login</a></p>
      </div>
    </div>
  </div>
);

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  
  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
}

export default App;