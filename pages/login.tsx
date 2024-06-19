import React, { useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import 'tailwindcss/tailwind.css'; // Ensure TailwindCSS is imported
import Header from '@/app/components/Header';
import Navbar from '@/app/components/Navbar';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError('Invalid Credentials');
        return;
      }

      // Check domain and redirect accordingly
      if (email === 'chandakashmi004@gmail.com') {
        router.replace('/admin'); // Directly go to admin page for specific admin email
      } else if (email.endsWith('@iiti.ac.in')) {
        router.replace('/student_details'); // Directly go to student_details page if from @iiti.ac.in
      } else {
        router.replace('/'); // Redirect to home page for other domains
      }
      
    } catch (error) {
      console.error(error);
      setError('Sign in failed. Please try again.');
    }
  };

  // Redirect to home page if already authenticated
  if (status === 'authenticated') {
    if (session.user.email === 'chandakashmi004@gmail.com') {
      router.replace('/admin'); // Directly go to admin page for specific admin email
    } else if (session.user.email.endsWith('@iiti.ac.in')) {
      router.replace('/student_details'); // Directly go to student_details page if from @iiti.ac.in
    } else {
      router.replace('/'); // Redirect to home page for other domains
    }
    return null; // Render nothing further after redirection
  }

  return (
    <>
      <Header />
      <Navbar />
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("hc1.png")' }}></div>
        <div className="relative flex justify-center items-center min-h-screen bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
            <h1 className="text-xl font-bold mb-4">Login</h1>
            <form onSubmit={handleSubmit}>
              <input
                className="w-full p-2 mb-2 border rounded"
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email"
              />
              <input
                className="w-full p-2 mb-2 border rounded"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
              <button className="w-full bg-blue-500 text-white p-2 rounded mt-2">
                Login
              </button>
              {error && (
                <div className="bg-red-500 text-white p-2 rounded mt-2">
                  {error}
                </div>
              )}
            </form>
            <div className="flex flex-col items-center mt-4">
              <span className="text-sm mb-2">or</span>
              <button
                onClick={() => signIn('google')}
                className="flex items-center gap-4 shadow-xl rounded-lg pl-3"
              >
                <Image
                  src="/google-logo.png"
                  height={30}
                  width={30}
                  alt="Google logo"
                />
                <span className="bg-blue-500 text-black px-4 py-3">
                  Sign in with Google
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
