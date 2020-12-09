---
path: hitchhikers-guide-to-typescript-blog
date: 2020-09-28T05:38:47.418Z
title: Hitchhikers' Guide to Typescript
description: Ready to learn Typescript? Here's everything you need to know to get started
tags: ["#typescript", "#101"]
---

#### **What is TypeScript?**

TypeScript is a programming language developed and released by Microsoft in 2012.

TypeScript is just a superset of JavaScript, meaning that you can use TypeScript to do everything you’re used to doing in JavaScript *and more*.  Microsoft aimed to fill in certain gaps JavaScript leaves in enterprise-level applications (we’ll talk about these differences in just a bit) and TypeScript is meant to close those gaps.

When you run an application built in TypeScript in a local or production environment, the code is compiled into JavaScript.  For this reason, you can use TypeScript anywhere you’d normally use JavaScript – the frontend or the backend!  Replacing JavaScript code with TypeScript is easy to do

##### Kinda like PropTypes.  But better.

So… why not just use JavaScript?  The short answer - TypeScript makes code **less error prone** and **more readable**.  TypeScript is also better for projects that fit any of the following criteria:

    * Are large or complex
    * Need to be maintained by multiple people
    * Will evolve and be maintained over time

###### Cons:

Some might argue that TypeScript is more trouble than it’s worth because it takes longer to develop.  Essentially, you’re adding static types to a dynamically-written language so 


#### The Basics

Start your file - needs to be .ts (or .tsx if you're testing)

##### Implied Types vs Explicit Types

TypeScript is a static language.  You may already be familiar with static languages such as C or Java.  “Static” refers to the data types you give to TypeScript and means that TypeScript will want you to declare these types in your functions and variable declarations.

Explicitly calling out types is optional, but types are what makes TypeScript so powerful.  If you don't include a type, TypeScript will infer

##### Data Types: Examples

###### Number

TypeScript supports both floating point numbers (decimals, binary, etc) and BigIntegers (ex. 100n).  Declare a number like this:

```
const decimal: number = 6;
```

or a BigInteger like this:

```
const bigInteger: bigint = 100n
```

###### String
Just like with JavaScript, TypeScript accepts single quotes (‘) or double quotes (“) for strings

```
const food: string = “pizza”;
```

or

```
const food: string = ‘pizza’;
```

###### Boolean
Are you starting to see a pattern? TypeScript supports all of the same data types that JavaScript does.  Again, TypeScript is just a superset of JavaScript that makes error handling a lot easier by converting JavaScript into a static programming language.

```
const isOpen: boolean = true;
```

###### Objects

###### Array
Arrays can be 

###### Any


###### What happens when I don't know what data type I'll have?
Let's say that we have a questionnaire on our website that asks the user:


#### Generic Types