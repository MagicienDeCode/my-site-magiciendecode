---
path: "/kotlin/kotlin-for-java-for"
title: "Kotlin for vs Java for"
---

# Kotlin for vs Java for

First of all, the conclusion, 先说结论

- kotlin, if NOT the enhanced for **for(i in integers)**, the others will NOT verify the condition every time. <br/> kotlin 中除了加强型 for 循环，其他的一旦范围确定，不会每次去验证条件。
- java, for, verify the confition every time. <br/> 每次都去验证条件。

## Java - Talk is cheap, show me your code

- We have a list of integers [1,2,3], we want to add its length times 7 in it. The result is [1,2,3,7,7,7]

```java
final List<Integer> integers = new ArrayList<>(List.of(1, 2, 3));
// Exception in thread "main" java.lang.OutOfMemoryError: Java heap space
for(int index =0;index < integers.size();index++){
    integers.add(7);
}
```

- `integers.size()` change after each add, so the for loop will never end. <br/> 链表的大小在每次 add 之后都会变大，所以当前的 index 永远不会小于链表的大小

```java
final List<Integer> integers = new ArrayList<>(List.of(1, 2, 3));
// Exception in thread "main" java.util.ConcurrentModificationException
for (int integer:integers){
    integers.add(7);
}
```

- enhanced for NOT used for add/remove, if remove use iterator <br/> 加强型 for 循环不能用来添加或删除

```java
final List<Integer> integers = new ArrayList<>(List.of(1, 2, 3));
final Iterator<Integer> iterator = integers.iterator();
// replace with enhanced for
while (iterator.hasNext()){
    iterator.next();
    // Exception in thread "main" java.util.ConcurrentModificationException
    integers.add(7);
}
```

- can NOT add element in orginal list within a iterator loop. But can remove element through iterator <br/> 在迭代器中不能像原来的链表中加东西，但可以通过迭代器删除元素。

```java
final List<Integer> integers = new ArrayList<>(List.of(1, 2, 3));
final int currentSize = integers.size();
for (int index = 0; index < currentSize; index++) {
    integers.add(7);
}
```

- the right way to do it.

**When use Java `for`, think about the end condition!**

## Kotlin - Talk is cheap, show me your code

```java
val mutableList = mutableListOf(1, 2, 3)
// Exception in thread "main" java.util.ConcurrentModificationException
for (i in mutableList) {
    mutableList.add(7)
}
```

- same as Java enhanced for

```java
val mutableList = mutableListOf(1, 2, 3)
// 1 2 3 7 7 7
for (i in 0 until mutableList.size) {
    mutableList.add(7)
}
```

- `mutableList.size` is checked once. For each time, the mutableList size change won't impact the for loop. <br/> for 循环只取了链表的初始大小，然后链表改变不影响 for 循环

```java
val mutableList = mutableListOf(1, 2, 3)
// 1 2 3 7 7 7
for (i in mutableList.indices) {
    mutableList.add(7)
}
```

- `mutableList.indices` is checked once. For each time, the mutableList size change won't impact the for loop. <br/> for 循环只取了链表的所有初始下标，然后链表改变不影响 for 循环

## Kotlin for loop example

```java
val immutableList = listOf(1, 2, 3, 4, 5)
// same as java enhanced for, can not modify original collection
println("for (element in immutableList) 12345")
for (element in immutableList) {
    print(element)
}

println(" for (i in immutableList.indices) 01234")
for (i in immutableList.indices) {
    print(i)
}

// ==================include=======================
println(" for (i in 0..3) ==> 0123")
for (i in 0..3) {
    print(i)
}

println("for (i in IntRange(0,3)) ==> 0123")
for (i in IntRange(0, 3)) {
    print(i)
}

println("for (i in IntRange(0,10) step 2) ==> 0246810")
for (i in IntRange(0, 10) step 2) {
    print(i)
}

println("for(i in 3 downTo 0) ==> 3210")
for (i in 3 downTo 0) {
    print(i)
}

// ==================exclude=======================
println("for (i in 0 until 3) ==> 012")
for (i in 0 until 3) {
    print(i)
}
```
