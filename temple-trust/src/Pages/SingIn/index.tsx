import React from 'react';

const SignIn = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f3f4f6' }}>
      <div style={{ width: '100%', maxWidth: '28rem', padding: '1.5rem', backgroundColor: '#fff', borderRadius: '0.75rem', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)' }}>
        <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#4b5563' }}>Sign In</h2>
          <p style={{ color: '#6b7280' }}>Enter your email and password to access your account.</p>
        </div>
        <form style={{ marginBottom: '1.5rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500', color: '#4b5563' }}>Email</label>
            <input
              type="email"
              id="email"
              placeholder="example@email.com"
              style={{ width: '100%', padding: '0.75rem', border: '1px solid #e2e8f0', borderRadius: '0.375rem', backgroundColor: '#fff', color: '#1f2937', outline: 'none', transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out' }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500', color: '#4b5563' }}>Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              style={{ width: '100%', padding: '0.75rem', border: '1px solid #e2e8f0', borderRadius: '0.375rem', backgroundColor: '#fff', color: '#1f2937', outline: 'none', transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out' }}
            />
          </div>
          <button
            type="submit"
            style={{ width: '100%', padding: '0.5rem', fontSize: '1rem', fontWeight: '500', color: '#fff', backgroundColor: '#3b82f6', borderRadius: '0.375rem', border: 'none', outline: 'none', cursor: 'pointer', transition: 'background-color 0.15s ease-in-out' }}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignIn;
