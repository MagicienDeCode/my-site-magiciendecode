---
path: '/kotlin/kafka'
---

# Kafka vs RabbitMQ

## Kafka
- Distributed Streaming Platform: Kafka is designed as a distributed streaming platform. It allows for high-throughput, fault-tolerant, and real-time data streams.
- Log-based Storage: Kafka uses a log-based storage system, where messages are stored in partitions within topics. Each partition is an ordered, immutable sequence of messages that is continually appended to.
- Producers and Consumers: Kafka separates producers and consumers. Producers write data to Kafka topics, and consumers read data from topics.
- Scalability: Kafka is highly scalable due to its distributed nature. It can handle large volumes of data by distributing the load across multiple brokers.

## RabbitMQ:
- Message Broker: RabbitMQ is a traditional message broker. It uses a broker-based architecture where messages are routed through an intermediary (the broker) before reaching consumers.
- Queue-based Storage: RabbitMQ stores messages in queues. Producers send messages to exchanges, which route them to the appropriate queues based on binding rules.
- Exchanges and Queues: RabbitMQ uses exchanges to route messages to queues. It supports various types of exchanges like direct, topic, fanout, and headers.
- Reliability: RabbitMQ emphasizes reliability and provides robust support for message acknowledgment, persistence, and requeueing.

|  #  |   Kafka  |  RabbitMQ   |     |     |
| :-: | :-: | :-: | :-: | :-: |
|  Priority Queue   |  NO   |  YES, x-max-priority   |     |     |
|  Delay Queue   |  NO   |  YES   |     |     |
|  Dead Letter Queue   |  NO   |  YES   |     |     |
|  Message Mode   |   PULL   |  PUSH + PULL   |     |     |
|  Message Tracing   |  YES   |  NO   |     |     |
|  Language  |  Java & Scalar   |  Erlang    |     |     |
|   Message Order |  partition level   |  NO   |     |     |
|     |     |     |     |     |
|     |     |     |     |     |

## Message Order RabbitMQ

- In the case of RabbitMQ sending a message and broadcasting it to multiple consumers, it will create a queue for each consumer. If there are 10 consumers, there will be 10 queues. When a message is sent, it will be copied to 10 queues.
- In case of multiple threads, it cannot guarantee that messages from the same queue will be consumed in order.
- When a thread encounters an error, RabbitMQ will requeue the message.

- 为实现发布订阅功能，从而使用消息复制，会降低性能并消耗更多资源。To achieve publish-subscribe functionality using message replication can potentially reduce performance and consume more resources.
- 多消费者无法保证消息顺序。Multiple consumers cannot guarantee message order.
- 吞吐量限制。Throughput limitations

## Message Order Kafka

- 发布订阅就是消费者直接去获取被kafka保存在日志中的消息就好。Publish-subscribe means consumers directly retrieve messages stored in Kafka logs.
- 不会出现消费者出错，消息重新入队的情况。Consumers encountering errors will not result in messages being requeued.
- 可以对订单进行分区，对不同订单分到多个分区中保存，吞吐量更好。You can partition orders, saving different orders to multiple partitions to improve throughput.

## Message Matching
- RabbitMQ 允许在消息中添加 routing_key, 然后通过一些特定的Exchange，很简单就实现了消息的匹配发送。 
- Kafka 开发成本很高。

## Message timeout
- 比如用户在15分钟未支付，则自动取消订单。 如果是单一服务，搞个定时任务。
- RabbitMQ消息中有个TTL字段，可以设置消息在其中存放的时间，超时会被移动到Dead Letter Queue. 3.5.8后有Rabbit Delayed Message Exchange
- Kafka 要自己搞，很难。

## Kafka

- Messages are saved in log system.
- 单个分区中的消息一旦出现问题，就只能停止，不允许消息空洞。

## RabbitMQ

- 消息被取出后删除
- 处理失败的消息会重新入队或到DLQ中，继续消费后面的

## Throughput
- Kafka > RabbitMQ, 但同样配置也复杂。
