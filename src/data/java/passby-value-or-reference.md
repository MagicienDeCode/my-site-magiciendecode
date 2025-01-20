---
path: "/java/passby-value-or-reference"
title: "值传递or引用传递之java与kotlin传参对比"
---

# 值传递 or 引用传递之 java 与 kotlin 传参对比

## 1. Java

先说结论:

- 对于 8 个基本类型 boolean, char, byte, short, int, long, float, double, 方法传递的是一份复制的**值**，怎么操作都不影响原来的值。
- 对于对象类型或叫类类型(引用类型)，方法传递的是一份复制的**引用地址**(可以理解成创建了一个相同类型的引用，两个引用指向同一个堆里面的对象)，那么在方法里面可以通过这个**引用地址**改变原来对象里面的变量，但无论如何都无法改变原来对象的引用。如果参数没有加**final**关键字，我们可以改变这个复制过的地址，同样无法改变原来对象的引用，看 1.2 了解更多

### 1.1 基本类型 的 值传递

```java
private static void passByValue(int i) {
    i = -1;
}

private static void passByReference(Integer i) {
    i = -1;
}
{
    int a = 10;
    Integer b = 200;
    System.out.println("a= " + a);
    System.out.println("b= " + b);
    passByValue(a);
    System.out.println("after passByValue a= " + a);    // 10
    passByReference(a);
    System.out.println("after passByReference a= " + a);    // 10
    passByValue(b);
    System.out.println("after passByValue b= " + b);    // 200
    passByReference(b);
    System.out.println("after passByReference b= " + b);    // 200
}
```

这里对于**Integer b**来说，即使调用 passByReference(Integer i), b 的值也不会改变，因为方法里改变的是复制过的引用地址所指向的值。

### 1.2 类类型 的 引用传递

```java
private static void changeAndAppend(StringBuilder stringBuilder){
    stringBuilder = new StringBuilder("kotlin");
    stringBuilder.append("xiang");
}

private static void appendStringBuilder(StringBuilder stringBuilder) {
    stringBuilder.append("xiang");
}

private static void changeStringBuilder(StringBuilder stringBuilder) {
    stringBuilder = new StringBuilder("kotlin");
}
{
    StringBuilder stringBuilder = new StringBuilder("java");
    System.out.println(stringBuilder.toString());
    changeStringBuilder(stringBuilder);
    System.out.println("after changeStringBuilder stringBuilder= " + stringBuilder.toString());    // java

    StringBuilder stringBuilder2 = new StringBuilder("java");
    System.out.println(stringBuilder2.toString());
    appendStringBuilder(stringBuilder2);
    System.out.println("after appendStringBuilder stringBuilder2= " + stringBuilder2.toString());    // javaxiang

    StringBuilder stringBuilder3 = new StringBuilder("java");
    System.out.println(stringBuilder3.toString());
    changeAndAppend(stringBuilder3);
    System.out.println("after changeAndAppend stringBuilder3= " + stringBuilder3.toString());    // java
}
```

通过这个例子我们会发现：

- 在方法**changeAndAppend**和**changeStringBuilder**里改变引用并不会改变原先 stringBuilder 和 stringBuilder3,因为传递过去的只是一个副本。
- 但**appendStringBuilder**方法可以通过改变原先对象里的值，因为传递过去的副本和原先的引用指向同一个对象。

## 2. Kotlin 万物皆对象

直接上结论:

- Kotlin 里面均是把原先对象的地址传过去，因为所有 kotlin 的方法都不可以改变参数(相当于 java 的**final XX**),所以方法里面只能通引用来改变对象里的值。
- 如果引用对象没有提供可以修改它的值的方法，那么我们在方法中只能获取对象的值，而无法对其操作。

```java
fun main() {
    val stringBuilder = StringBuilder("kotlin")
    println(stringBuilder.toString())   // kotlin
    changeStringBuilder(stringBuilder)
    println(stringBuilder.toString())   //kotlin111
}

fun changeInt(a: Int) {
    // a = 2 // val cannot be reassigned
}

fun changeStringBuilder(stringBuilder: StringBuilder) {
    // stringBuilder = StringBuilder("dd") // val cannot be reassigned
    stringBuilder.append("111")
}
```
