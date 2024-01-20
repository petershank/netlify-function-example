const querystring = require("querystring");

exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  // When the method is POST, the name will no longer be in the event’s
  // queryStringParameters – it’ll be in the event body encoded as a query string
  const params = querystring.parse(event.body);
  const name = params.line_items(0).name || "Super Crazy World";

  console.log(`hello ${name}`);
  return {
    statusCode: 200,
    body: `Hello there, ${name}.  You're awesome.`,
  };
};
