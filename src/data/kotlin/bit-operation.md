---
path: "/kotlin/bit-operation"
title: "Bit operation Kotlin/Java 位运算"
---

# Bit operation Kotlin/Java 位运算

|        #         | Java | Kotlin |         口诀         |
| :--------------: | :--: | :----: | :------------------: |
|      按位与      |  &   | and()  |  1&1 得 1，其他全 0  |
|      按位或      | `|`  |  or()  | 0`|`0 得 0，其他全 1 |
|      按位非      |  ~   | inv()  |   0 变 1 啊,1 变 0   |
|     按位异或     |  ^   | xor()  |  相同为 0 不同为 1   |
|    左移运算符    |  <<  | shl()  |       左移乘 2       |
|    右移运算符    |  >>  | shr()  |       右移除 2       |
| 无符号右移运算符 | >>>  | ushr() |                      |

# Kotlin source code

```java
    /** Shifts this value left by the [bitCount] number of bits. */
    public infix fun shl(bitCount: Int): Int
    /** Shifts this value right by the [bitCount] number of bits, filling the leftmost bits with copies of the sign bit. */
    public infix fun shr(bitCount: Int): Int
    /** Shifts this value right by the [bitCount] number of bits, filling the leftmost bits with zeros. */
    public infix fun ushr(bitCount: Int): Int
    /** Performs a bitwise AND operation between the two values. */
    public infix fun and(other: Int): Int
    /** Performs a bitwise OR operation between the two values. */
    public infix fun or(other: Int): Int
    /** Performs a bitwise XOR operation between the two values. */
    public infix fun xor(other: Int): Int
    /** Inverts the bits in this value. */
    public fun inv(): Int
```

# LeetCode 476 Number Complement

Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

- 用一个具体的例子讲一下这题的思路。比如说十进制的 5，用二进制表示是 0(28 个) + 0101<br/>有效的二进制是 101 取其补码是 010，有效二进制 0(30 个) + 10 表示十进制二
- 第一步计算出二进制的 5 前边有几个 0，用 Integer 类的**numberOfLeadingZeros**方法，结果是 29 个
- 第二步把二进制的按位做非运算得到 1(29 个) + 010
- 第三步把它左移 29 位得到 010 + 0(29 个)
- 第四部把它再右移 29 位得到 0(29 个) + 010 也是就十进制的 2

```java
/*
0000 ... 0101 ==> 5 (leadingZero = 32-3 = 29) inv
1111 ... 1010
*/
fun findComplement(num: Int): Int {
    val leadingZero = Integer.numberOfLeadingZeros(num)
    return num.inv().shl(leadingZero).shr(leadingZero)
}
```

```java
/*
0000 ... 0101 ==> 5
1111 ... 1111 ==> Int.MAX_VALUE

1111 ... 1000 and
0000 ... 0101
0000 ... 0000 ==> 0

1111 ... 1000 inv
0000 ... 0111

0000 ... 0101 inv
1111 ... 1010

0000 ... 0111 and
1111 ... 1010
==
0000 ... 0010 ==> 2
*/
fun findComplement(num: Int): Int {
    var flag = Int.MAX_VALUE
    while (flag.and(num) != 0) {
        flag = flag.shl(1)
    }
    return (flag.inv()).and(num.inv())
}
```
