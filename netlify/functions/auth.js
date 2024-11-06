exports.handler = async (event) => {
  const authorized =
    event.headers.authorization ===
    "Basic " + Buffer.from("teamedge:hr2024").toString("base64");

  if (!authorized) {
    return {
      statusCode: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Enter your credentials"',
      },
      body: "Unauthorized",
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ authorized: true }),
  };
};
