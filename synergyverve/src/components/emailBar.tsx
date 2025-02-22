import React, { useState } from 'react';
import Button from './button';
interface EmailBarProps {
    className?: string; 
}

const EmailBar: React.FC<EmailBarProps> = ({ className }) => {
    const [email, setEmail] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Email submitted:', email);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={`flex items-center bg-text text-secondary   z-10 rounded-3xl overflow-hidden w-full max-w-md ${className}`}
        >
            <input
                type="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter your website"
                required
                className="flex-1 px-4 py-2 border-none outline-none bg-text  text-secondary"
            />
            <Button/>
            </form>
    );
};

export default EmailBar;
