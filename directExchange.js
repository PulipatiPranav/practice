const channel = await connect();
const exchange = 'direct_logs';
const msg = 'Hello direct';
const routingKey = 'admin';

await channel.assertExchange(exchange, 'direct' , {durable: false});
channel.publish(exchange, routingKey, Buffer.from(msg));
console.log("Message Sent");