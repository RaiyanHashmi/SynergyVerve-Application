// import React, { useState } from 'react';
// import Button from './button';
// interface EmailBarProps {
//     className?: string; 
// }

// const EmailBar: React.FC<EmailBarProps> = ({ className }) => {
//     const [email, setEmail] = useState('');

//     const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setEmail(event.target.value);
//     };

//     const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         console.log('Email submitted:', email);
//     };

//     return (
//         <form
//             onSubmit={handleSubmit}
//             className={`flex items-center bg-text text-secondary   z-10 rounded-3xl overflow-hidden w-full max-w-md ${className}`}
//         >
//             <input
//                 type="email"
//                 value={email}
//                 onChange={handleChange}
//                 placeholder="Enter your website"
//                 required
//                 className="flex-1 px-4 py-2 border-none outline-none bg-text  text-secondary"
//             />
//             <Button/>
//             </form>
//     );
// };

// export default EmailBar;
"use client";

import React, { useState } from 'react';
import { HoverBorderGradient } from "./ui/HoverBorderGradient";

interface EmailBarProps {
    className?: string;
    buttonText?: string;
    placeholder?: string;
    onSubmit?: (email: string) => void;
}

interface NavButtonProps {
    text: string;
    className?: string;
    type?: "button" | "submit" | "reset";
}

const NavButton: React.FC<NavButtonProps> = ({ 
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

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Email submitted:', email);
        onSubmit?.(email);
        setEmail(''); // Clear the input after submission
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={`flex items-center bg-text text-secondary z-10 rounded-3xl overflow-hidden w-full max-w-md ${className}`}
        >
            <input
                type="email"
                value={email}
                onChange={handleChange}
                placeholder={placeholder}
                required
                className="flex-1 px-4 py-2 border-none outline-none bg-text text-secondary"
            />
            <NavButton text={buttonText} />
        </form>
    );
};

export default EmailBar;