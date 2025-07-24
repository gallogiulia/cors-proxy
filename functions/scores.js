export async function handler(event, context) {
  const response = await fetch("https://script.google.com/macros/s/AKfycbzKtthISCwjQMUBWZrfYgPlQ2nqTEfOdJw7VO2YVPUNWbwF6UOTtjIH9n-T74caDBgCBA/exec");
  const data = await response.json();

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    },
    body: data
  };
}

