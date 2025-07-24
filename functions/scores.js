const fetch = require("node-fetch");
exports.handler = async function(event, context) {
  try {
    const fetch = (await import('node-fetch')).default;

    const response = await fetch("https://script.google.com/macros/s/AKfycbzKtthISCwjQMUBWZrfYgPlQ2nqTEfOdJw7VO2YVPUNWbwF6UOTtjIH9n-T74caDBgCBA/exec");
    const contentType = response.headers.get("content-type");

    const data = contentType.includes("application/json")
      ? await response.json()
      : await response.text(); // fallback for debugging

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": contentType
      },
      body: typeof data === "string" ? data : JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: `Function error: ${error.message}`
    };
  }
};
