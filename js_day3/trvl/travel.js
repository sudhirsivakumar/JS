let distance = +prompt("Enter the travel distance in km (e.g., 50):");
let type = prompt("Enter the transport type (Train, Bus, or Taxi):").toLowerCase();
let farePerKm;


switch (type) 
{
    case 'train':
        farePerKm = 5; 
        break;
    case 'bus':
        farePerKm = 3; 
        break;
    case 'taxi':
        farePerKm = 10;
        break;
    default:
        farePerKm = 0;
        alert(`Error: Transport type "${type}" is unknown. Cannot calculate fare.`);
}
let totalFare = 0;
if (farePerKm > 0 && distance > 0) 
{
    totalFare = distance * farePerKm;
}
if (totalFare > 0) 
{
    alert(`
        --- Total Fare ---
        Distance: ${distance} km
        Transport Type: ${type.toUpperCase()}
        Total Fare: $${totalFare.toFixed(2)}
    `);
}