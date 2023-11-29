import styles from './Signup.module.css';

import React ,{useState} from 'react'
import { useSignup } from '../../hooks/useSignup';


export default function Signup() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username,setUsername] = useState('');
  const {signup, isPending, error} = useSignup();

  const handleSubmit = (e) =>{
      e.preventDefault();
      signup(email, password, username);
  }

  return (
    <form  onSubmit={handleSubmit} className={styles['signup-form']}>

     <h2>Signup</h2>

    <label>
       <span>username:</span>
       <input 
         type="text" 
         onChange={(e) => setUsername(e.target.value)}
         value={username}
       />
    </label>


    <label>
      <span>email:</span>
      <input type="email" 
      onChange={(e) => setEmail(e.target.value)}
      value={email}
      />
    </label>

    <label>
      <span>password:</span>
      <input type="password" 
      onChange={(e) => setPassword(e.target.value)}
      value={password}
      />
    </label>

    {!isPending && <button className='btn'>Signup</button>}
    {isPending && <button className='btn' disabled>Loading...</button>}
    {error && <p>{error}</p>}
    </form>
  )
}