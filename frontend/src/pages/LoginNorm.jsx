import { Link } from "react-router-dom";
import { useState } from "react";

const LoginNorm = () => {
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const [isRunning, setIsRunning] = useState(false);
    
    const moveButton = () => {
        if (!isRunning) return;
        
        const maxX = window.innerWidth - 220; // Ограничение по ширине (кнопка 200px + отступ)
        const maxY = window.innerHeight - 70; // Ограничение по высоте (кнопка 50px + отступ)
        
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
        
        setPosition({ top: randomY, left: randomX });
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
            <p style={{ color: "white" }} className="demo__text_h3">
                Чтобы оформить подписку, Вам необходимо <Link to="/loginForm" style={{ color: "white" }}>войти</Link>
            </p>
            <button
                style={{
                    position: "absolute", 
                    top: `${position.top}px`, 
                    left: `${position.left}px`,
                    width: "200px",
                    height: "50px",
                    backgroundColor: "white",
                    borderRadius: "8px",
                    transition: "top 0.2s, left 0.2s"
                }}
                onMouseEnter={() => setIsRunning(true)}
                onMouseMove={moveButton}
            >
                <h3 className="demo__text_h3">Войти</h3>
            </button>
        </div>
    );
};

export default LoginNorm;