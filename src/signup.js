import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/high-res.css';

const PhoneField = ({ label, value, onChange, className, ...props }) => {
    return (
        <div className={`${className}`}>
            {label && (
                <label className="mb-2 block text-sm font-medium leading-6 text-gray-900">
                    {label}
                </label>
            )}

            <PhoneInput
                containerClass=""
                inputStyle={{
                    display: 'block',
                    width: '100%',
                    border: '1px solid #E5E7EB',
                    borderRadius: '0.25rem',
                    height: '40px',
                    padding: 'calc(theme(spacing.2) - 1px) calc(theme(spacing.3) - 1px)',
                }}
                buttonClass="..."
                dropdownClass="..."
                searchClass="..."
                country={'qa'}
                value={value}
                onChange={onChange}
                {...props}
            />
        </div>
    )
};

export default function Signup() {
    const [phone, setPhone] = useState();

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 font-sans">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-32 w-auto"
                        src="/images/logo.png"
                        alt="My Diary"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Create your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div className="grid grid-cols-2 gap-6">
                            {/* First Name Field */}
                            <div>
                                <label htmlFor="first_name" className="block text-sm font-medium leading-6 text-gray-900">
                                    First name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="first_name"
                                        name="first_name"
                                        type="text"
                                        autoComplete="given-name"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            {/* Last Name Field */}
                            <div>
                                <label htmlFor="last_name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Last name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="last_name"
                                        name="last_name"
                                        type="text"
                                        autoComplete="family-name"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            {/* Email Address Field */}
                            <div className="col-span-full">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            {/* Phone Number Field */}
                            <PhoneField
                                label="Phone Number"
                                className="col-span-full"
                                value={phone}
                                onChange={setPhone}
                            />
                            {/* Password Field */}
                            <div className="col-span-full">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="new-password"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            {/* Role Selection Field */}
                            <div className="col-span-full">
                                <label htmlFor="role" className="block text-sm font-medium leading-6 text-gray-900">
                                    What is your role?
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="role"
                                        name="role"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    >
                                        <option value="">Select your role</option>
                                        <option value="player">Player</option>
                                        <option value="player">Manager</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <p className="mt-5 text-center text-sm text-secondary">
                        Already have an account?{' '}
                        <a href="/" className="font-semibold leading-6 text-primary hover:text-secondary"> Sign in            </a>
                    </p>
                </div>
            </div>
        </>
    )
}