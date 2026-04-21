await channel.assertExchange('topic_logs' , 'topic', {durable: false});
channel.publish('topic_logs' , 'student.create' , Buffer.from("Topic Message"));
