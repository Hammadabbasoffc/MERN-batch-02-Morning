# JavaScript OOP -- Questions (Classes, Constructor Functions & Prototype)

## 📌 Conceptual & Advanced Questions

1.  What is the difference between an ES6 class and a constructor
    function in JavaScript? Explain how both work internally.

2.  What does `typeof User` return in the case of:

    -   ES6 class?
    -   Constructor function? Explain why.

3.  What happens internally when we use the `new` keyword with a
    constructor function? Explain step by step.

4.  What is `User.prototype`? Why does it exist even when we define a
    class?

5.  What is the difference between:

    -   Defining a method inside the constructor\
    -   Defining a method on `User.prototype`\
        in terms of memory management?

6.  If we create 1000 objects using:

    ``` javascript
    this.greet = function() {}
    ```

    inside the constructor, what memory problem can occur? Why?

7.  Why does:

    ``` javascript
    user1.greet === user2.greet
    ```

    return:

    -   `false` when the method is inside the constructor?
    -   `true` when the method is on the prototype?

8.  How does JavaScript connect an instance object to its prototype?
    Which hidden property is used?

9.  What will be logged if we print:

    ``` javascript
    console.log(User.prototype);
    ```

    Explain the structure of the returned object.

10. How are ES6 classes internally implemented in JavaScript? Are they
    truly different from constructor functions or just syntactic sugar?
