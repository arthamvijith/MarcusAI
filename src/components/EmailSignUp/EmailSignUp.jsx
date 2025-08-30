import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../SignIn/SignIn.css';

const EyeIcon = ({ open }) => (
  open ? (
    // Feather Icons "eye" (open)
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  ) : (
    // Feather Icons "eye-off" (closed)
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M17.94 17.94A10.61 10.61 0 0 1 12 19c-7 0-11-7-11-7a17.15 17.15 0 0 1 2.76-4.28"></path>
      <path d="M1 1l22 22"></path>
      <path d="M14.12 14.12a3 3 0 0 1-4.24-4.24"></path>
    </svg>
  )
);

const EmailSignUp = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [success, setSuccess] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = (data) => {
    setSuccess(`Account created successfully for ${data.username}!`);
  };

  const password = watch('password', '');

  return (
    <div className="auth-content">
      <div className="heart">{/* Logo here if needed */}</div>
      <h2>Create your account</h2>
      {success && <p style={{ color: 'green' }}>{success}</p>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          {...register('username', { required: 'Username is required' })}
        />
        {errors.username && <p style={{ color: 'red' }}>{errors.username.message}</p>}

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          {...register('email', {
            required: 'Email is required',
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address' },
          })}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}

        <label>Password</label>
        <div style={{ position: 'relative' }}>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 6, message: 'Password must be at least 6 characters' },
            })}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: 'absolute',
              right: 10,
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              color: '#c4bdff',
            }}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            <EyeIcon open={showPassword} />
          </button>
        </div>
        {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}

        <label>Confirm Password</label>
        <div style={{ position: 'relative' }}>
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm your password"
            {...register('confirmPassword', {
              required: 'Please confirm your password',
              validate: value =>
                value === password || 'Passwords do not match',
            })}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            style={{
              position: 'absolute',
              right: 10,
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              color: '#c4bdff',
            }}
            aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
          >
            <EyeIcon open={showConfirmPassword} />
          </button>
        </div>
        {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword.message}</p>}

        <button type="submit" className="white-btn">Continue</button>
      </form>
    </div>
  );
};

export default EmailSignUp;
