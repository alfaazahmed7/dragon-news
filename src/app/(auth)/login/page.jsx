'use client'
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const handleLoginFunc = (data) => {
        console.log(data, "data");
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-md w-full max-w-md px-10 py-10">
                <h1 className="text-3xl font-bold text-gray-800 text-center mb-1">
                    Login your account
                </h1>

                <hr className="border-gray-200 mb-8 mt-4" />

                <form
                    className="space-y-5"
                    onSubmit={handleSubmit(handleLoginFunc)}
                >
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Email address
                        </label>
                        <input
                            type="email"
                            {...register("email", {
                                required: "Email field is required"
                            })}
                            placeholder="Enter your email address"
                            className="w-full bg-gray-100 text-gray-500 text-sm rounded px-4 py-3 outline-none placeholder-gray-400"
                        />
                        {errors.email && (
                            <p className="text-red-500">{errors.email.message}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            {...register("password", {
                                required: "Password field is required"
                            })}
                            placeholder="Enter your password"
                            className="w-full bg-gray-100 text-gray-500 text-sm rounded px-4 py-3 outline-none placeholder-gray-400"
                        />
                        {errors.password && (
                            <p className="text-red-500">{errors.password.message}</p>
                        )}
                    </div>

                    <button className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold text-sm py-3 rounded transition-colors duration-200">
                        Login
                    </button>
                </form>

                <p className="text-center text-sm text-gray-500 mt-5">
                    Dont Have An Account?{" "}
                    <Link href={"/register"} className="text-red-500 font-medium hover:underline">
                        Register
                    </Link>
                </p>
            </div>
        </div >
    );
};

export default LoginPage;