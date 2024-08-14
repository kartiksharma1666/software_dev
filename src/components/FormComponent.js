// FormComponent.jsx
import React, { useState } from 'react';
import { PillButton } from './ButtonsLibrary';

const FormComponent = ({ onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData.name, formData.email, [formData.phone, formData.city, formData.message]);
        onClose();
    };

    return (
        <div id="ContactUs" className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <form onSubmit={handleSubmit} className="bg-tertiary w-full h-auto lg:w-1/2 rounded-lg p-8">
                <h2 className="text-4xl font-semibold mb-4 text-primary">Connect with Us!</h2>
                <div className="mb-4 w-full flex flex-wrap">
                    <PillButton label="Gyms" />
                    <PillButton label="Classes" />
                    <PillButton label="User" />
                    <PillButton label="Collaborator" />
                </div>
                <div className="flex flex-row gap-x-4">
                    <input type="text" id="name" name="name" placeholder="✈️ Full Name" value={formData.name} onChange={handleChange} className="h-12 px-4 rounded-xl bg-tertiary text-primary mb-4 w-1/2 border-4 rounded-2xl border-secondary placeholder-color custom-input"/>
                    <input type="text" id="email" name="email" placeholder="✉️ Email Address" value={formData.email} onChange={handleChange} className="h-12 px-4 rounded-xl bg-tertiary text-primary mb-4 w-1/2 border-4 rounded-2xl border-secondary placeholder-color custom-input"/>
                </div>
                <div className="flex flex-row gap-x-4">
                    <input type="text" id="phone" name="phone" placeholder="☎️ Phone Number" value={formData.phone} onChange={handleChange} className="h-12 px-4 rounded-xl bg-tertiary text-primary mb-4 w-1/2 border-4 rounded-2xl border-secondary placeholder-color custom-input"/>
                    <input type="text" id="city" name="city" placeholder="🗺️ City" value={formData.city} onChange={handleChange} className="h-12 px-4 rounded-xl bg-tertiary text-primary mb-4 w-1/2 border-4 rounded-2xl border-secondary placeholder-color custom-input"/>
                </div>
                <div className="flex flex-row gap-x-4">
                    <textarea id="message" name="message" placeholder="Write a message" value={formData.message} onChange={handleChange} className="h-20 lg:h-40 px-4 pt-2 rounded-xl bg-tertiary text-primary mb-4 w-full border-4 rounded-2xl border-secondary placeholder-color custom-input"></textarea>
                </div>
                <button type="button" onClick={handleSubmit} className="bg-secondary text-tertiary py-2 px-4 rounded-2xl">
                    Submit
                </button>
                <button type="button" onClick={onClose} className="ml-4 bg-secondary text-white py-2 px-4 rounded-2xl">
                    Close
                </button>
            </form>
        </div>
    );
};

export default FormComponent;
