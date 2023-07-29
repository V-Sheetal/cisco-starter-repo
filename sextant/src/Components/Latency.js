import React, { useState, useEffect } from 'react';
import Exhibit from './Exhibit';
import { w3cwebsocket as WebSocket } from 'websocket';

const Latency = () => {
  const [latency, setLatency] = useState(null);

  useEffect(() => {
    const serverUrl = 'ws://localhost:55455'; // Change this URL if needed
    const client = new WebSocket(serverUrl);

    client.onmessage = (message) => {
      const packetTimestamp = parseInt(message.data, 10);
      const currentTimestamp = new Date().getTime();
      setLatency(currentTimestamp - packetTimestamp);
    };

    return () => {
      client.close();
    };
  }, []);

  return (
    <Exhibit heading="Packet Latency">
      {latency !== null ? (
        <p>Packet Latency: {latency} ms</p>
      ) : (
        <p>Waiting for data...</p>
      )}
    </Exhibit>
  );
};

export default Latency;
