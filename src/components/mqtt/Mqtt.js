import React, { useState } from 'react';
import { useMqtt } from 'react-mqtt';

const MQTTComponent = () => {
  const [messages, setMessages] = useState([]);

  // MQTT configuration
  const mqttProps = {
    url: 'mqtt://13.51.201.221:1883', // Replace with your MQTT broker URL
    options: {
      clientId: '1', // Replace with your unique client ID
      username: '', // Replace with your MQTT username if required
      password: '', // Replace with your MQTT password if required
    },
    subscriptions: [
      {
        topic: 'junction0/info/way1', // Replace with the topic you want to subscribe to
        qos: 0, // QoS level, can be 0, 1, or 2
      },
    ],
  };

  const { status, client } = useMqtt(mqttProps);

  // Subscribe to MQTT topic
  React.useEffect(() => {
    if (client && status === 'Connected') {
      client.on('message', (topic, message) => {
        // Handle received message
        setMessages((prevMessages) => [
          ...prevMessages,
          { topic, message: message.toString() },
        ]);
      });

      mqttProps.subscriptions.forEach((subscription) => {
        client.subscribe(subscription.topic, { qos: subscription.qos });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [client, status]);

  return (
    <div>
      <h1>MQTT Messages</h1>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>
            <strong>Topic:</strong> {msg.topic}, <strong>Message:</strong>{' '}
            {msg.message}
          </li>
        ))}
      </ul>
      {status !== 'Connected' && <p>MQTT Connection Status: {status}</p>}
    </div>
  );
};

export default MQTTComponent;