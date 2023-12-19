"use client";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function Register() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const submitHandle = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    let data = {"uname": username, "pass": password};

    // Send Login Request to API
    axios
      .post("http://shserver.top:8080/test/users/login", data)
      .then((result) => {
        let token = `Bearer ${result?.data?.ticket}`
        localStorage.setItem("token", token)
        toast.success("Logged In")
        router.push('/home')
      })
      .catch(() => toast.error("Invalid Username or Password!"))
      .finally(() => setIsLoading(false));

  }


  return (
    <main className='w-full min-h-screen bg-slate-50 flex items-center justify-center p-3'>
      <section className='flex flex-col items-center rounded-lg bg-white shadow-md p-4 w-full md:w-3/5 lg:w-1/5'>
        <h3 className='text-2xl font-bold'>Login</h3>

        {/* Register Form */}
        <form className='flex flex-col gap-5 items-center w-full mt-8'>
          <TextField disabled={isLoading} color="info" label="Username" variant="outlined" className='w-full' value={username} onChange={(e) => setUserName(e.target.value)} />
          <TextField disabled={isLoading} color="info" label="Password" type="password" className='w-full' value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button disabled={isLoading} variant="outlined" color="info" size="large" onClick={submitHandle}>Login</Button>
        </form>
        
      </section>
    </main>
  )
}
