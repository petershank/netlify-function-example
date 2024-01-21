const querystring = require("querystring");

exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  // When the method is POST,  the name will no longer be in the event’s
  // queryStringParameters – it’ll be in the event body encoded as a query string
  const params = querystring.parse(event.body);
  //const name = params.line_items(0).name || "Super Crazy World";

  console.log(typeof event.body);
  console.log(Object.keys(event.body));
  //console.log(`hello, ${Object.keys(params)[0]}`);
  // console.log(`hello ${name}`);
  return {
    statusCode: 200,
    body: `Hello there, ${params.id}.  You're awesome.`,
  };
};

[
  '{"id":5251479502884,"admin_graphql_api_id":"gid:\\/\\/shopify\\/Order\\/5251479502884","app_id":580111,"browser_ip":"38.100.238.237","buyer_accepts_marketing":false,"cancel_reason":null,"cancelled_at":null,"cart_token":"Z2NwLXVzLWNlbnRyYWwxOjAxSE1NTjJOUThCMVdBNzYySjEwS0NaRVhB","checkout_id":41957167104036,"checkout_token":"d56eb6373e9b9e490b9c049234e608cc","client_details":{"accept_language":"en-US","browser_height":null,"browser_ip":"38.100.238.237","browser_width":null,"session_hash":null,"user_agent":"Mozilla\\/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit\\/537.36 (KHTML, like Gecko) Chrome\\/120.0.0.0 Safari\\/537.36"},"closed_at":null,"company":null,"confirmation_number":"TU0CKCEA8","confirmed":true,"contact_email":"peter@shank.com","created_at":"2024-01-20T19:00:33-05:00","currency":"USD","current_subtotal_price":"22.00","current_subtotal_price_set":{"shop_money":{"amount":"22.00","currency_code":"USD"},"presentment_money":{"amount":"22.00","currency_code":"USD"}},"current_total_additional_fees_set":null,"current_total_discounts":"0.00","current_total_discounts_set":{"shop_money":{"amount":"0.00","currency_code":"USD"},"presentment_money":{"amount":"0.00","currency_code":"USD"}},"current_total_duties_set":null,"current_total_price":"26.21","current_total_price_set":{"shop_money":{"amount":"26.21","currency_code":"USD"},"presentment_money":{"amount":"26.21","currency_code":"USD"}},"current_total_tax":"0.00","current_total_tax_set":{"shop_money":{"amount":"0.00","currency_code":"USD"},"presentment_money":{"amount":"0.00","currency_code":"USD"}},"customer_locale":"en-US","device_id":null,"discount_codes":[],"email":"peter@shank.com","estimated_taxes":false,"financial_status":"authorized","fulfillment_status":null,"landing_site":"\\/","landing_site_ref":null,"location_id":null,"merchant_of_record_app_id":null,"name":"#1017","note":null,"note_attributes":[],"number":17,"order_number":1017,"order_status_url":"https:\\/\\/indi-dev-1.myshopify.com\\/25145670\\/orders\\/abc73ec00d2e1dde51fbc71bd917c6e1\\/authenticate?key',
];
