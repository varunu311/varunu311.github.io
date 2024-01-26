import React from 'react';
import { useEffect } from 'react';
import '../Styling/Media.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Media() {

    useEffect(() => {
        const icons = document.querySelectorAll('.social-media-icons a');
        icons.forEach((icon, index) => {
            const delay = index * 1000;

            setTimeout(() => {
                icon.classList.add('shake');

                setTimeout(() => {
                    icon.classList.remove('shake');
                }, 1000);
            }, delay);
        });

        const interval = setInterval(() => {
            icons.forEach((icon, index) => {
                const delay = index * 1000;

                setTimeout(() => {
                    icon.classList.add('shake');

                    setTimeout(() => {
                        icon.classList.remove('shake');
                    }, 1000);
                }, delay);
            });
        }, 5000 + icons.length * 200); // Adjust the interval to account for the total delay

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="social-media-icons">
            <a href="https://github.com/varunu311" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="your-twitter-link" target="_blank">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com/varunu211/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/in/vupadhy/" target="_blank">
                <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
        </div>
    );
}

export default Media;