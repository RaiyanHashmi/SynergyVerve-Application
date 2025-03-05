"use client";

import React, { useState } from 'react';
import { HoverBorderGradient } from "./ui/HoverBorderGradient";

interface EmailBarProps {
    className?: string;
    buttonText?: string;
    placeholder?: string;
    onSubmit?: (email: string) => void;
}

interface ButtonProps {
    text: string;
    className?: string;
    type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ 
    text = "Submit", 
    className = "",
    type = "submit"
}) => (
    <button
        type={type}
        className={`px-4 py-2 bg-primary text-text rounded-lg font-medium text-lg transition-colors hover:bg-primary/90 ${className}`}
    >
        <div className="flex justify-center text-center">
            <HoverBorderGradient>
                <span>{text}</span>
            </HoverBorderGradient>
        </div>
    </button>
);

const EmailBar: React.FC<EmailBarProps> = ({ 
    className = "", 
    buttonText = "Submit",
    placeholder = "Enter your website",
    onSubmit 
}) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (onSubmit) {
            onSubmit(email);
        }
        setEmail('');
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={`flex items-center bg-text text-secondary z-10 rounded-3xl overflow-hidden w-full max-w-md ${className}`}
        >
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={placeholder}
                required
                className="flex-1 px-4 py-2 border-none outline-none bg-text text-secondary"
            />
            <Button text={buttonText} />
        </form>
    );
};

export default EmailBar;