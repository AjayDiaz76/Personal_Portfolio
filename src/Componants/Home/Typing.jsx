import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Typing = () => {
    // Create a reference to store the DOM element containing the animation
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Hello World!"],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true,
        });

        // Destroy Typed instance during cleanup to stop animation
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="skills">
            <span ref={el}></span>
        </div>
    );
};

export default Typing;
