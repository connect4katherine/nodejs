# Advanced Node.js

For help, ask in #questions at [slack.jscomplete.com](http://slack.jscomplete.com/)

https://edgecoders.com/how-well-do-you-know-node-js-36b1473c01c8

1. How come when you declare a global variable in any Node.js file it’s not really global to all modules?

2. When exporting the API of a Node module, why can we sometimes use exports and other times we have to use module.exports?

3. Can we require local files without using relative paths?

4. What is the Event Loop? Is it part of V8?

5. What is the Call Stack? Is it part of V8?

6. What is the difference between setImmediate and process.nextTick?

7. How do you make an asynchronous function return a value?

8. Can callbacks be used with promises or is it one way or the other?

9. What are the major differences between spawn, exec, and fork?

10. How does the cluster module work? How is it different than using a load balancer?

11. What are the --harmony-* flags?

12. How can you read and inspect the memory usage of a Node.js process?

13. Can reverse-search in commands history be used inside Node’s REPL?

14. What are V8 object and function templates?

15. What is libuv and how does Node.js use it?

16. How can you make Node’s REPL always use JavaScript strict mode?

17. How can we do one final operation before a Node process exits? Can that operation be done asynchronously?

18. Besides V8 and libuv, what other external dependencies does Node have?

19. What’s the problem with the process uncaughtException event? How is it different than the exit event?

20. Do Node buffers use V8 memory? Can they be resized?

21. What’s the difference between Buffer.alloc and Buffer.allocUnsafe?

22. How is the slice method on buffers different from that on arrays?

23. What is the string_decoder module useful for? How is it different than casting buffers to strings?

24. What are the 5 major steps that the require function does?

25. What is the require.resolve function and what is it useful for?

26. What is the main property in package.json useful for?

27. What are circular modular dependencies in Node and how can they be avoided?

28. What are the 3 file extensions that will be automatically tried by the require function?

29. When creating an http server and writing a response for a request, why is the end() function required?

30. When is it ok to use the file system *Sync methods?

31. How can you print only one level of a deeply nested object?

32. What is the node-gyp package used for?
+ node-gyp is the recommended tool by Node.js to build native (i.e. C++) addons.

33. The objects exports, require, and module are all globally available in every module but they are different in every module. How?

34. How can a module be both requirable by other modules and executable directly using the node command?

35. What’s an example of a built-in stream in Node that is both readable and writable?

36. What’s the difference between using event emitters and using simple callback functions to allow for asynchronous handling of code?

37. The require function always caches the module it requires. What can you do if you need to execute the code in a required module many times?

38. What’s the difference between the Paused and the Flowing modes of readable streams?

39. What does the --inspect argument do for the node command?

40. When working with streams, when do you use the pipe function and when do you use events? Can those two methods be combined?


