import { Fragment, useRef, useState } from "react"
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import bmiImage from "../Images/BMI.jpg"
import { useNavigate } from "react-router"

const obj: { height: string; weight: string } = {
    height: "",
    weight: "",
}
export default function BMI() {
    const [open, setOpen] = useState(false)
    const [data, setData] = useState(obj);
    const [bmi,setBmi]=useState('');
    const cancelButtonRef = useRef(null);
    const navigate=useNavigate();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }
    const generateStatement=(val:number)=>{
        if(val<=18.5){
            return ` You fall in under-weight category we suggest you to increase your weight`
        }else if(val>18.5&&val<=24.9){
            return ` You fall in noraml category we suggest you to work on musscle gain`
        }else if(val>24.9&&val<=29.9){
            return ` You fall in overweight category we suggest you to lower down your BMI`
        }else if(val>29.9&&val<=34.9){
            return ` You fall in obase category we suggest you to lower down your BMI, higher body fat increase the chance of heart-attch and type-2 diabities`
        }else if(val>34.9){
            return ` You fall in extremely obase category we suggest you to lower down your BMI, higher body fat increase the chance of heart-attch and type-2 diabities, please start following diet and strength training plan from today own words`
        }
    }
    const calculateBMI = (weight: number, height: number): void => {
        const arr=[];
        let obj={}
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);
        const x=Math.round(bmi * 100) / 100
        obj={weight,height,bmi:x};
        arr.push(obj);
        setBmi(String(x))
        localStorage.setItem('userData',JSON.stringify(arr))
        setOpen(true)
    }
    const handleClick = (): void => {
        calculateBMI(+data.weight, +data.height)
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Check your BMI
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6">
                        <div className="flex items-center justify-between">
                            <label htmlFor="height" className="block text-sm font-medium leading-6 text-gray-900">
                                Height
                            </label>
                            <div className="text-sm">

                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                name="height"
                                value={data.height}
                                onChange={handleChange}
                                type="number"
                                required
                                placeholder="height in cm"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Weight
                                </label>
                                <div className="text-sm">

                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="weight"
                                    name="weight"
                                    value={data.weight}
                                    onChange={handleChange}
                                    type="number"
                                    required
                                    placeholder="weigt in kg"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                    </form>
                    <div>
                        <button
                            type="submit"
                            onClick={handleClick}
                            disabled={!data.height||!data.weight}
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3  py-1.5 mt-10 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Check Your BMI
                        </button>
                    </div>

                </div>
            </div>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full max-w-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-3/4 sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            {/* <div className="mx-auto flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                                <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" /> 
                                            </div>*/}
                                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                    Your BMI is {bmi}
                                                </Dialog.Title>
                                                <p>
                                                {generateStatement(+bmi)}
                                                </p>
                                                <div className="mt-2">
                                                    <img src={bmiImage} alt="bmi  h ye" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:green-500 sm:ml-3 sm:w-auto"
                                            onClick={() => {
                                                setOpen(false)
                                                navigate("/login")
                                            }}
                                        >
                                            Sign-up
                                        </button>
                            
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}
