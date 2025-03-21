const ToolOutput = ({ output, type }) => {
  switch (type) {
    case 'weather':
      return (
        <div>
          <h3>Weather Information</h3>
          <p>Location: {output.location}</p>
          <p>Temperature: {output.temperature}°C</p>
        </div>
      );
    case 'dealership':
      return (
        <div>
          <h3>Dealership Address</h3>
          <p>{output.address}</p>
        </div>
      );
    case 'appointment':
      return (
        <div>
          <h3>Available Appointment Slots</h3>
          <ul>
            {output.slots.map((slot, index) => (
              <li key={index}>{slot}</li>
            ))}
          </ul>
        </div>
      );
    default:
      // In case of an unrecognized type, display the output directly
      return (
        <div>
          <h3>Response from the Backend:</h3>
          <pre>{JSON.stringify(output, null, 2)}</pre>
        </div>
      );
  }
};

export default ToolOutput;
