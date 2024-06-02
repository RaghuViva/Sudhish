import React from 'react';

const SignUp = () => {
  return (
    <div style={{ maxWidth: '28rem', margin: 'auto', padding: '4rem 1rem', textAlign: 'center' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.875rem', fontWeight: '700' }}>Sign Up</h1>
        <p style={{ color: '#718096' }}>Create a new account to get started.</p>
      </div>
      <form style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="first-name">First Name</label>
            <input
              id="first-name"
              type="text"
              placeholder="John"
              style={{ width: '100%', padding: '0.5rem', borderRadius: '0.375rem', border: '1px solid #e2e8f0' }}
              required
              pattern="[a-zA-Z]+"
              title="Please enter a valid first name"
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="last-name">Last Name</label>
            <input
              id="last-name"
              type="text"
              placeholder="Doe"
              style={{ width: '100%', padding: '0.5rem', borderRadius: '0.375rem', border: '1px solid #e2e8f0' }}
              required
              pattern="[a-zA-Z]+"
              title="Please enter a valid last name"
            />
          </div>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="example@email.com"
            style={{ width: '100%', padding: '0.5rem', borderRadius: '0.375rem', border: '1px solid #e2e8f0' }}
            required
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}"
            title="Please enter a valid email address"
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="********"
            style={{ width: '100%', padding: '0.5rem', borderRadius: '0.375rem', border: '1px solid #e2e8f0' }}
            required
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
            title="Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character"
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            placeholder="********"
            style={{ width: '100%', padding: '0.5rem', borderRadius: '0.375rem', border: '1px solid #e2e8f0' }}
            required
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
            title="Passwords must match"
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.375rem', backgroundColor: '#4299e1', color: '#fff', fontWeight: '700', cursor: 'pointer', border: 'none' }}>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp;
