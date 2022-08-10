exports.handler = async (event) => {
  const subject = event.queryStringParameters.name || "World";
  return {
    statusCode: 200,
    body: `I got a request.
    Hello ${subject}!`,
  };
};
