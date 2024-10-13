import React from 'react'
import { motion } from 'framer-motion';

function Button ({title, color}) {
    const style = {
        width: "110px",
        background: color,
        color: 'black',
        margin: "20px",
        borderRadius: "5px",
        border: "none",
        padding: "8px",
        fontSize: "14px",
        fontFamily: "karla",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Add shadow effect
    }

    return (
        <motion.button 
        style={style}
        whileHover={{
            scale: 1.1,
            transition: {
                duration: 0.2,
            },
        }}
        >
            <strong>{title}</strong>
        </motion.button>
    );
};

export default Button;