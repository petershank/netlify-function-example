exports.handler = async (event) => {
  const subject = event.queryStringParameters.name || "World";
  const params = querystring.parse(event.body);
  return {
    statusCode: 200,
    body: `I received a ${event.httpMethod} request.
Hello ${subject}!
${params}`,
  };
};
