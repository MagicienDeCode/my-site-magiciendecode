---
path: "/kotlin/kotlin-java"
title: "Kotlin 易与Java混淆的地方"
---

# Kotlin 易与 Java 混淆的地方

## split 函数

- Kotlin split 函数会多分割一个

```java
// 9
fun main() {
    val str = "2001:0db8:85a3:0:0:8A2E:0370:7334:"
    println(str.split(":").size)
}
```

- Java split 会忽略最后一个空字符串

```java
// 8
public static void main(String[] args) {
    final String str = "2001:0db8:85a3:0:0:8A2E:0370:7334:";
    System.out.println(str.split(":").length);
}
```

|  #  |     |     |     |     |
| :-: | :-: | :-: | :-: | :-: |
|     |     |     |     |     |
|     |     |     |     |     |
