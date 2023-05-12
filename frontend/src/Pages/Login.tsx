
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { useAppDispatch } from "../Redux/store";


export default function Login() {
  interface Singleuserlogin {
    email: string;
    password: string;
  }
  const initial: Singleuserlogin = {
    email: "",
    password: "",
  }
  const dispatch = useAppDispatch();
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


  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

          <form className="space-y-6" method="POST" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">

                Email address
              </label>
              <div className="mt-2">
                <input
                  onChange={handleChange}
                  value={input.email}
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
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  onChange={handleChange}
                  value={input.password}
                  id="fpassword"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"

                className="flex w-full mt-4 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"

              >
                Sign in
              </button>
            </div>
          </form>

          <div className="flex justify-start mt-2">
            <p className="text-sm">
              Don't have a account?
              <span className="text-indigo-600 hover:cursor-pointer" onClick={() => navigate("/signup")}>
                {" "}Sing up
              </span>
            </p>
          </div>
        </div>
      </div>



    </>
  )
}

