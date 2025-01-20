---
path: "/kotlin/kotlin-inline"
title: "Kotlin inline 关键字 怎么提高效率"
---

# First of all, let's see some conceptions

- The first-class : Kotlin functions are first-class, which means that they can be stored in variables and data structures, passed as arguments to and returned from other higher-order functions. <br/> 在 kotlin 中，函数是一等公民，这意味着它可以存储在变量和其他数据结构当中，当作参数传递给别的函数，或者作为函数的返回值为了让函数式编程更容易
- Higher-Order Functions : a function that takes functions as parameters, or returns a function.
- Using higher-order functions imposes certain runtime penalties: each function is an object, and it captures a closure, i.e. those variables that are accessed in the body of the function. Memory allocations (both for function objects and classes) and virtual calls introduce runtime overhead.<br/> 每个函数方法都是一个对象，参数也是，创建它们需要时间和空间，调用一个方法是一个压栈和出栈的过程，调用方法时将栈针压入方法栈，然后执行方法体，方法结束时将栈针出栈，这个压栈和出栈的过程会耗费资源，这个过程中传递形参也会耗费资源。

# Talk is cheaper, show me the code

## 1. higher-order function without inline

```java
fun main() {
    val testList = listOf(0, 1, 2, 3, 4, 5)
    println("===========test begin==========")
    val result = testList.xiangMap { it * 2 }
    println("===========test end==========")
}

/**
 * Returns a list containing the results of applying the given [transform] function
 * to each element in the original collection.
 *
 * @sample samples.collections.Collections.Transformations.map
 */
fun <T, R> Iterable<T>.xiangMap(transform: (T) -> R): List<R> {
    val destination = ArrayList<R>(if (this is Collection<*>) this.size else 10)
    for (item in this)
        destination.add(transform(item))
    return destination
}
```

- xiangMap is a extention function, any iteralble collection can invoke it just call .xiangMap() <br/> xiangMap 是一个扩展方法，这里是为了模拟 map 方法
- we create a testList, and we want to each element in list multiple 2

- Let's see after decompile kotlin bytecode

```java
public final class InlineKt {
   public static final void main() {
      List testList = CollectionsKt.listOf(new Integer[]{0, 1, 2, 3, 4, 5});
      String var1 = "===========test begin==========";
      boolean var2 = false;
      System.out.println(var1);
      List result = xiangMap((Iterable)testList, (Function1)null.INSTANCE);
      String var5 = "===========test end==========";
      boolean var3 = false;
      System.out.println(var5);
   }

   // $FF: synthetic method
   public static void main(String[] var0) {
      main();
   }

   @NotNull
   public static final List xiangMap(@NotNull Iterable $this$xiangMap, @NotNull Function1 transform) {
      Intrinsics.checkParameterIsNotNull($this$xiangMap, "$this$xiangMap");
      Intrinsics.checkParameterIsNotNull(transform, "transform");
      ArrayList destination = new ArrayList($this$xiangMap instanceof Collection ? ((Collection)$this$xiangMap).size() : 10);
      Iterator var4 = $this$xiangMap.iterator();

      while(var4.hasNext()) {
         Object item = var4.next();
         destination.add(transform.invoke(item));
      }

      return (List)destination;
   }
}
```

- we see that we call the function just as it a java normal function <br/> 就像叫一个 java 正常的方法一样，在[值传递 or 引用传递之 java 与 kotlin 传参对比](https://magiciendecode.fr/java/passby-value-or-reference) 我们知道，所有的参数都会创建一个副本，开头也提到方法的调用也耗费资源

## 2. inline higher-order function

```java
inline fun <T, R> Iterable<T>.xiangMap(transform: (T) -> R): List<R> {
    val destination = ArrayList<R>(if (this is Collection<*>) this.size else 10)
    for (item in this)
        destination.add(transform(item))
    return destination
}
```

- code after decompile kotlin bytecode

```java
  public static final void main() {
      List testList = CollectionsKt.listOf(new Integer[]{0, 1, 2, 3, 4, 5});
      String var1 = "===========test begin==========";
      boolean var2 = false;
      System.out.println(var1);
      Iterable $this$xiangMap$iv = (Iterable)testList;
      int $i$f$xiangMap = false;
      ArrayList destination$iv = new ArrayList($this$xiangMap$iv instanceof Collection ? ((Collection)$this$xiangMap$iv).size() : 10);
      Iterator var5 = $this$xiangMap$iv.iterator();

      while(var5.hasNext()) {
         Object item$iv = var5.next();
         int it = ((Number)item$iv).intValue();
         int var8 = false;
         Integer var10 = it * 2;
         destination$iv.add(var10);
      }

      List result = (List)destination$iv;
      String var13 = "===========test end==========";
      $i$f$xiangMap = false;
      System.out.println(var13);
   }
```

- the function xiangMap is the same, the difference is in main function, instead of calling a function, it copy the inline function code, in this case, more efficient.
  <br/> **如果一个高阶(higher order)函数是内联(inline)函数，那么这个方法的代码会被复制到调用它的地方**

## 3. normal function with inline key word

if you add inline for normal function, a warning will be raised:

- Expected performance impact from inlining is insignificant. Inlining works best for functions with parameters of functional types
  <br/> 如果一个方法是函数方法，那么 inline 关键字会改善效率。如果只是普通的方法，带来的效率提高不是很明显。
- 我的理解是函数作为参数的话需要创建一个函数对象，把地址传给方法，而 inline 关键字省略了这一过程。那么对于一个普通方法，只是复制一下地址和方法进出栈，不会带来很大的效率提升。
