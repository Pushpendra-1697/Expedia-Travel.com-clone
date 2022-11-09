import React, { useRef, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const SuccessPage = () => {
    const [count, setCount] = useState(5);
    const ref = useRef(null);
    const navigate = useNavigate();
    // console.log(ref);

    useEffect(() => {
        ref.current = setInterval(() => {
            setCount((prev) => {
                if (prev === 1) {
                    clearInterval(ref.current);
                    navigate("/");
                }
                return prev - 1;
            });
        }, 1000)
        return () => {
            clearInterval(ref.current);
        };
    }, []);

    
    //Component
    // console.log(count);
    // if (count === 0) {
    //     return <Navigate to="/" />
    // }

    return (
        <div>
            <h1>Successfully made the purchases</h1>
            <h3>Redirected in {count} seconds</h3>
        </div>
    )
}

export default SuccessPage;