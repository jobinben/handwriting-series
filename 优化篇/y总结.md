1. 这次性能优化的目标是找到Task中的long task，然后消除它。因为网页的渲染是一个宏任务，和JS的宏任务在同一个Event Loop中，是相互阻塞的。
2. 在Performance分析出了代码中的耗时部分，发现是计算量大导致的，所以我们把计算机逻辑拆分到了worker线程以充分利用多核CPU的并行处理能力，消除了主线程(main)的long task。

以上是代码运行的性能优化。

如果是静态资源的加载优化。
可以用webpack中的treeshaking（按需引入，删除不需要的代码） 或者 code spliting的懒加载等方式。