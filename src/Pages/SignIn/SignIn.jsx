import { FaEye, FaEyeSlash,  } from 'react-icons/fa';
// import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import login from '../../assets/images/login/login.svg'




const SignIn = () => {

    const [showPasswordIcon, setShowPasswordIcon] = useState(false);

const handleLogin = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const newUser = {email, password}
    console.log({newUser});

    // const handleGithubLogin = () => {

    // }
    // const handleGoogleLogin = () => {

    // }
}
    return (
        <div>
            <div className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center mt-8 bg-base-200 rounded-xl p-4 mb-2 border">
                <div className="lg:ml-10"><img src={login} alt="" className="" /></div>
        <div className="relative mx-auto lg:flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-xl p-5 " data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
        
          <div className=" flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center ">
          <h4 className="flex justify-center items-center  font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased  text-orange-500 ">
            Sign In
          </h4>
          <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            Enter your Email and Password for log in or SignIN.
          </p>
          </div>
          <form onSubmit={handleLogin} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
              
              <div className="relative h-11 w-full min-w-[200px]">
                <input name="email" type="email" required 
                  className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-violet-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  
                  
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-violet-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-violet-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-violet-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Email
                </label>
              </div>
              <div className="relative flex h-11 w-full min-w-[200px] ">
                <input
                  type={showPasswordIcon ? "text" : "password"} name="password" required
                  className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-violet-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  
                />
                <span onClick={()=> setShowPasswordIcon(!showPasswordIcon)} className="absolute flex right-2 top-4 ">{showPasswordIcon ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-violet-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-violet-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-violet-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Password
                </label>
              </div>
            </div>
           
            <button
              className="mt-6 block w-full select-none rounded-lg bg-gradient-to-r from-orange-700 to-orange-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-fuchsia-500/20 transition-all hover:shadow-lg hover:shadow-fuchsia-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="submit"
              data-ripple-light="true"
            >
              Sign in
            </button>
            <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              New Here ?
              <Link to="/signUp">
                <button
                  className=" btn-link font-medium text-orange-500 transition-colors hover:text-blue-700"
                  
                >
                  SignUp
                </button>
              </Link>
            </p>
            <hr className="mt-4 bg-gradient-to-r from-orange-700  to-orange-500 h-1" />
            
            {/* <div className="p-4">
              
                <button onClick={handleGoogleLogin} className='btn btn-outline flex text-sky-500 w-full m-2 mx-auto'><FaGoogle></FaGoogle> Google LogIn</button>
                <button onClick={handleGithubLogin} className='btn btn-outline flex text-black-500 w-full m-2 mx-auto'><FaGithub></FaGithub> Github LogIn</button>
            </div> */}
          </form>
          </div>
        </div>
      </div>
        </div>
    );
};

export default SignIn;