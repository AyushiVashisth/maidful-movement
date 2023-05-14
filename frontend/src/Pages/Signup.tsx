import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useAppDispatch } from "../Redux/store";
import { userSingupRequest } from "../Redux/AuthSignup/signup.action";
import Swal from "sweetalert2";

export const Signup = () => {
  interface Singleuser {
    name: string;
    email: string;
    password: string;
    gender: string;
  }
  const initial: Singleuser = {
    name: "",
    email: "",
    password: "",
    gender: "male",
  };
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [input, setInput] = useState(initial);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = { ...input };
    dispatch(userSingupRequest(payload)).then((res: any) => {
      if (res === "Registration successful") {
        Swal.fire("Registration successful", "", "success");
        navigate("/login");
      } else if (res === "Account already exists") {
        Swal.fire("Account already exists", "", "error");
        navigate("/login");
      }
    });
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit} method="POST">
            <div>
              <label
                htmlFor="fname"
                className="flex text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  onChange={handleChange}
                  id="fname"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="femail"
                className="flex text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  onChange={handleChange}
                  id="femail"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="fpassword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  onChange={handleChange}
                  id="fpassword"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="gender"
                className="flex text-sm font-medium leading-6 text-gray-900"
              >
                Gender
              </label>
              <div className="mt-2">
                <select
                  onChange={handleSelect}
                  id="gender"
                  name="gender"
                  autoComplete="gender"
                  className="flex w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>

            <div className="flex justify-start">
              <p className="text-sm">
                Already have a account?
                <span
                  className="text-indigo-600 hover:cursor-pointer"
                  onClick={() => navigate("/login")}
                >
                  {" "}
                  Login
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

//signup.tsx
// import { useNavigate } from "react-router";
// import React, { useState } from "react";
// import { useAppDispatch } from "../Redux/store";
// import { userSingupRequest } from "../Redux/AuthSignup/signup.action";
// import Swal from "sweetalert2";

// export const Signup = () => {
//   interface Singleuser {
//     name: string;
//     email: string;
//     password: string;
//     gender: string;
//   }
//   const initial: Singleuser = {
//     name: "",
//     email: "",
//     password: "",
//     gender: "male",
//   };
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();

//   const [input, setInput] = useState(initial);
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setInput({ ...input, [name]: value });
//   };
//   const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setInput({ ...input, [name]: value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     let payload = {};
//     const arr = JSON?.parse(localStorage.getItem("userData") || "null");
//     payload = { ...input, weeklyReports: arr?.[0] };
  
//     const res = await dispatch(userSingupRequest(payload));
//     console.log("res",res,res.payload,res.payload.msg)
//     if (res && res.payload && res.payload.msg === "Registration successful") {
//       Swal.fire("Success!", "You have successfully signed up.", "success");
//       navigate("/login");
//     } else if (res && res.payload && res.payload.msg === 'Account already exists') {
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "This email address is already in use. Please try another one.",
//       });
//       navigate("/login");
//     }
//   };
 
    

//   return (
//     <>
//       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//           <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//             Create your account
//           </h2>
//         </div>
//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//             <form onSubmit={handleSubmit}>
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium leading-5 text-gray-700"
//                 >
//                   Name
//                 </label>
//                 <div className="mt-1 rounded-md shadow-sm">
//                   <input
//                     id="name"
//                     type="text"
//                     name="name"
//                     value={input.name}
//                     onChange={handleChange}
//                     required
//                     className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm sm:leading-5"
//                   />
//                 </div>
//                 </div>

//               <div className="mt-6">
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium leading-5 text-gray-700"
//                 >
//                   Email address
//                 </label>
//                 <div className="mt-1 rounded-md shadow-sm">
//                   <input
//                     id="email"
//                     type="email"
//                     name="email"
//                     required
//                     className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm sm:leading-5"
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>
//               <div className="mt-6">
//                 <label
//                   htmlFor="password"
//                   className="block text-sm font-medium leading-5 text-gray-700"
//                 >
//                   Password
//                 </label>
//                 <div className="mt-1 rounded-md shadow-sm">
//                   <input
//                     id="password"
//                     type="password"
//                     name="password"
//                     required
//                     className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm sm:leading-5"
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>
//               <div className="mt-6">
//                 <label
//                   htmlFor="gender"
//                   className="block text-sm font-medium leading-5 text-gray-700"
//                 >
//                   Gender
//                 </label>
//                 <div className="mt-1 rounded-md shadow-sm">
//                   <select
//                     id="gender"
//                     name="gender"
//                     required
//                     className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm sm:leading-5"
//                     onChange={handleSelect}
//                     defaultValue="male"
//                   >
//                     <option value="male">Male</option>
//                     <option value="female">Female</option>
//                   </select>
//                 </div>
//               </div>
//               <div className="mt-6">
//                 <button
//                   type="submit"
//                   className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                 >
//                   Submit
//                 </button>
//               </div>

//               <div className="flex justify-start">
//                 <p className="text-sm">
//                   Already have a account?
//                   <span
//                     className="text-indigo-600 hover:cursor-pointer"
//                     onClick={() => navigate("/login")}
//                   >
//                     {" "}
//                     Login
//                   </span>
//                 </p>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
