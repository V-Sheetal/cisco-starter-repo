import React, { useState, useEffect } from 'react';

const IPAddress = ({ ipType }) => {
    const [ipAddress, setIPAddress] = useState('');

    useEffect(() => {
        const fetchIPAddress = async () => {
            const apiURL = ipType === "ipv6" ? 'https://api64.ipify.org?format=json' : 'https://api.ipify.org?format=json';
            try {
                const response = await fetch(apiURL);
                const data = await response.json();
                setIPAddress(data.ip);
            } catch (error) {
                console.error('Error fetching IP address:', error);
                setIPAddress('Error fetching IP');
            }
        };
        fetchIPAddress();
    }, [ipType]);

    return (
        <div>
            <h2>{ipType.toUpperCase()} Address:</h2>
            <p>{ipAddress}</p>
        </div>
    );
};

export default IPAddress;
