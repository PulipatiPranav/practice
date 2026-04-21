await channel.assertExchange('logs', 'fanout', {durable: false});
channel.publish('logs', '', Buffer.from("Broadcast Message"));
