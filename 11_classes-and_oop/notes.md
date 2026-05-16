# javascript and classes

## OOP

Object-Oriented Programming (OOP) in JavaScript is a paradigm that organizes code into objects—bundles of data (properties) and behavior (methods). Unlike languages like Java or C++ that are purely class-based, JavaScript is prototype-based, meaning objects inherit properties and methods directly from other objects. 

## Object
- collection of properties and methods
- toLowerCase

# why use OOP
Object literal

- Constructor function
- Prototypes
- Classes 
- Instances (new, this)

## 4 pillars

### Abstraction

In JavaScript, Abstraction can be defined as the concept of hiding the inner complex workings of an object and exposing only the essential features to the user.

### Encapsulation

Encapsulation is a fundamental concept in object-oriented programming that refers to the practice of hiding the internal details of an object and exposing only the necessary information to the outside world.

Allows controlled access using access modifiers (private, protected, public).
Protects object data from direct external access.
Encapsulation can be achieved using closures and using classes.

### Inheritance

Inheritance in JavaScript is a mechanism that allows one object or class to acquire properties and methods from another. It helps in code reusability and creating hierarchical relationships between classes.

Allows reuse of properties and methods from a parent class.
Implemented using the extends keyword in ES6 classes.
Supports method overriding in child classes.

### Polymorphism

Polymorphism is one of the 4 pillars of object-oriented programming languages where poly means many and morphism means transforming one form into another. Polymorphism means the same function with different signatures is called many times. It allows methods to do different things based on the object it is acting upon.

In JavaScript, polymorphism works in two primary ways:

Method Overriding: A child class overrides a method of its parent class.
Method Overloading (simulated): A function behaves differently based on the number or type of its arguments.