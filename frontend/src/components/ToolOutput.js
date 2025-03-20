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
      return null;
  }
};

export default ToolOutput;
