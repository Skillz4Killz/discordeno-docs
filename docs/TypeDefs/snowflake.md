# Snowflake
A Twitter Snowflake, expect the epoche is 2015-01-01T00:00:00.000Z:
```typescript
If we have a snowflake '266241948824764416' we can represent it as binary:

64                                          22     17     12          0
 000000111011000111100001101001000101000000  00001  00000  000000000000
      number of ms since Discord epoch       worker  pid    increment
```
> **Type:** *[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string)* 