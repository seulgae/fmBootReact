import React, { useEffect, useState } from "react";

const Hello = () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("/api/hello")
            .then(res => res.text())
            .then(data => setMessage(data));
    }, []);

    return <div>{message}</div>;
};

export default Hello;