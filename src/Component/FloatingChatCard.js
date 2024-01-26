import React, { useState } from 'react';
import '../Styling/FloatingChatCard.css';

function FloatingChatCard() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const toggleCard = () => {
        setIsExpanded(!isExpanded);
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <div 
            className={`chat-card ${isExpanded ? 'expanded' : 'collapsed'}`} 
            onClick={!isExpanded ? toggleCard : undefined}
        >
            {isExpanded && (
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Your Name" 
                        value={formData.name} 
                        onChange={handleInputChange}
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Your Email" 
                        value={formData.email} 
                        onChange={handleInputChange}
                    />
                    <textarea 
                        name="message" 
                        placeholder="Your Message" 
                        value={formData.message} 
                        onChange={handleInputChange}
                    ></textarea>
                    <button type="submit">Send</button>
                    <button type="button" onClick={toggleCard}>Close</button>
                </form>
            )}
        </div>
    );
}

export default FloatingChatCard;