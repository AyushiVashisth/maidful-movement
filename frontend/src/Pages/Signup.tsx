import { useLocation, useNavigate } from "react-router";
import React, { useState } from "react";

import { useDispatch } from "react-redux";

export const Signup = () => {
    interface Singleuser {
        name: string;
        email: string;
        password: string;
        phone_number: string;
    }
    const initial: Singleuser = {
        name: "",
        email: "",
        password: "",
        phone_number: ""
    }
    const dispatch = useDispatch();
    const location = useLocation();

    const navigate = useNavigate()

    const [input, setInput] = useState(initial);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value })
    }
    console.log(input)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // dispatch(usersignupaction(input))

    }
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

                            <label htmlFor="fname" className="flex text-sm font-medium leading-6 text-gray-900">


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

                            <label htmlFor="femail" className="flex text-sm font-medium leading-6 text-gray-900">
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
                                <label htmlFor="fpassword" className="block text-sm font-medium leading-6 text-gray-900">
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
                        {/* <div>

                            <label htmlFor="fphone_number" className="flex text-sm font-medium leading-6 text-gray-900">

                                Gender
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={handleChange}
                                    id="fphone_number"
                                    name="phone_number"
                                    type="text"
                                    autoComplete="phone_number"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div> */}
                        <div className="sm:col-span-3">
                            <label htmlFor="gender" className="flex text-sm font-medium leading-6 text-gray-900">
                                Gender
                            </label>
                            <div className="mt-2">
                                <select
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
                                <span className="text-indigo-600 hover:cursor-pointer" onClick={() => navigate("/login")}>
                                    {" "}Sing in
                                </span>
                            </p>
                        </div>


            <div className="flex justify-start">
              <p className="text-sm">
                Already have a account?
                <span
                  className="text-indigo-600 hover:cursor-pointer"
                  onClick={() => navigate("/login")}
                >
                  {" "}
                  Sing in
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
