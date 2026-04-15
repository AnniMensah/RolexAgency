'use client'

import { useState } from 'react';

export default function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'talent' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('Registration successful! Token: ' + data.token);
      } else {
        setMessage(data.message || 'Error');
      }
    } catch (error) {
      setMessage('Network error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 max-w-md w-full border border-white/20 shadow-2xl">
        <h2 className="text-4xl font-bold text-white text-center mb-8 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
          Join Rollex
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full p-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
              placeholder="Your full name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full p-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
              placeholder="email@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full p-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
              placeholder="At least 6 characters"
              required
              minLength={6}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">Role</label>
            <select
              value={formData.role}
              onChange={(e) => setFormData({...formData, role: e.target.value})}
              className="w-full p-4 rounded-xl bg-white/20 border border-white/30 text-white focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
            >
              <option value="talent">Talent</option>
              <option value="admin">Admin (test)</option>
            </select>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-primary-500 to-purple-600 text-white p-4 rounded-2xl font-semibold text-lg hover:from-primary-600 hover:to-purple-700 disabled:opacity-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            {loading ? 'Creating...' : 'Register'}
          </button>
        </form>
        {message && (
          <p className={`mt-6 p-4 rounded-xl ${message.includes('successful') ? 'bg-green-500/20 border-green-500/50' : 'bg-red-500/20 border-red-500/50'} border text-sm text-white text-center`}>
            {message}
          </p>
        )}
        <p className="mt-8 text-center text-gray-300 text-sm">
          <a href="/login" className="text-white hover:text-primary-200 transition">Already have account? Login</a>
        </p>
      </div>
    </div>
  );
}
