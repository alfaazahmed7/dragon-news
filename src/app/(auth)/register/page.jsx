'use client'
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const handleRegisterFunc = (data) => {
        const { name, email, photo, password } = data;
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-md w-full max-w-md px-10 py-10">
                <h1 className="text-3xl font-bold text-gray-800 text-center mb-1">
                    Register your account
                </h1>

                <hr className="border-gray-200 mb-8 mt-4" />

                <form
                    className="space-y-5"
                    onSubmit={handleSubmit(handleRegisterFunc)}
                >
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Your Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            {...register("name", {
                                required: "Name field is required"
                            })}
                            className="w-full bg-gray-100 text-gray-500 text-sm rounded px-4 py-3 outline-none placeholder-gray-400"
                        />
                        {errors.name && (
                            <p className="text-red-500">{errors.name.message}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your password"
                            {...register("photo", {
                                required: "Photo URL field is required"
                            })}
                            className="w-full bg-gray-100 text-gray-500 text-sm rounded px-4 py-3 outline-none placeholder-gray-400"
                        />
                        {errors.photo && (
                            <p className="text-red-500">{errors.photo.message}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            {...register("email", {
                                required: "Email field is required"
                            })}
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
                            placeholder="Enter your password"
                            {...register("password", {
                                required: "Password field is required"
                            })}
                            className="w-full bg-gray-100 text-gray-500 text-sm rounded px-4 py-3 outline-none placeholder-gray-400"
                        />
                        {errors.password && (
                            <p className="text-red-500">{errors.password.message}</p>
                        )}
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="terms"
                            className="w-4 h-4 accent-gray-700"
                        />
                        <label htmlFor="terms" className="text-sm text-gray-500">
                            Accept <span className="font-bold text-gray-700">Term & Conditions</span>
                        </label>
                    </div>

                    <button className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold text-sm py-3 rounded transition-colors duration-200">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;