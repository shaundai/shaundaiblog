---
title: "TypeScript: What’s the Point?"
date: "2021-05-05T23:46:37.121Z"
description: TypeScript is annoying.  Why not just use JavaScript?
tags: ["#react", "#codenewbie", "#javascript", "#typescript"]
---

TypeScript is just a superset of JavaScript, meaning it's <em>just</em> JavaScript - but with enhanced functionality.  When you run an application built in TypeScript, the code is compiled into the same JavaScript you know and love before being run in your browser.  <em>(btw - for this reason, you can use TypeScript anywhere you’d normally use JavaScript – on the frontend **and** on the backend!)</em>

The only issue is that TypeScript - to someone who has never used a statically-typed language - is annoying af.  When you’re used to the carefree life of declaring variables without having to worry about their future, what they’ll eventually become, and the functions they’ll have to interact with, adding types to your code just seems like a bunch of extra work for little reward.

## So, Why Not Just Use JavaScript?

The short answer is: TypeScript makes code **less error prone** and **more readable** than JavaScript.  It was designed especially for projects that meet the following criteria:

* Large or complex (enterprise-level applications)
* Maintained by multiple people
* Will evolve or be updated over time

#### Less Error Prone
The big difference between TypeScript and JavaScript is **when typechecking happens**.

First, what is <em>**typechecking**</em>?  **Typecheckers** are type police built into JavaScript to enforce the type laws (for example, it’s against the rules to multiply a string with an array).  Typechecking is the process where typecheckers verify that your code follows all of the rules of the language.

In **dynamically-typed languages** like JavaScript, typechecking occurs during <em>runtime</em>.  This means you’ll find out about your mistakes when you run your program.  This may happen locally as you’re testing, during your unit tests or smoke tests, or even in production after you’ve shipped it to your customers.

By contrast, **statically-typed languages** like TypeScript check types during <em>compile time</em> - right in your text editor!  This means that you’ll instantaneously see mistakes that could potentially break your code <em>as you make them</em>.  Not only does this prevent you from shipping a buggy app, it also closes the gap between when you **make** the mistake and when you **find out** you’ve made a mistake, getting you to a fix, faster.

#### More Readable
With explicitly typed code, others can look at your code and easily understand what it’s meant to do.  If you’re working in a huge code base with other engineers, this added level of readability is crucial for preventing new type errors.

Once you’ve got a solid understanding of how to use TypeScript, you’ll also notice that the way you think about code will start to change.  Because static typing forces you to think about types before you’ve even declared any values, you'll get great at mapping out the relationships between your components and their functions in your head before you even declare any variables!  You'll be able to identify and account for new edge cases before deploying to production.  Overall, you can expect that your code will be sturdier and much easier to maintain.


## JavaScript vs TypeScript

Now let's look at some examples.

### Example 1: 
##### Adding two numbers to calculate padding on a button.

```react
  const a = icon ? 0 : 4
  const buttonPadding = `${(a + 6) + px}`
```

You wrote the above code earlier today to calculate the amount of padding for buttons in your app.  If the button does not have an icon, we want 6px of extra padding.  `const a` is the potential amount of padding we’ll have, and we’ll concatenate `a` and ‘px’ before plugging it into our CSS.

As long as `a` and `b` are both numbers, `buttonPadding` will work fine!  But let’s say that you’re coding along and accidentally change `a` to this:

```react
  const a = icon ? '0px' : '4px'
  const buttonPadding = `${(a + 6) + px}`
```

It's a small mistake, but now `a` will return a string.  If you’re using JavaScript, this may still <em>run</em> just fine, but you’ll wonder why you're not getting <em>any</em> of that extra padding on that button.  It's because buttonPadding is now `undefined`.  **And let’s be honest - it’s always silly little code errors like that these take up <em>so</em> much of our debugging time and patience to try to resolve!**

If you instead used TypeScript, though, you would’ve gotten one of those ~~annoying~~ super helpful red squigglies under `buttonPadding` <b>as you were coding</b>, letting you know that we expected `a` to be a number, but it’s a string.  When you hover over the squiggly, you will see this error message:

```typescript
    const a = icon ? '0px' : '4px'
    const buttonPadding: number = `${(a + 6) + px}`
  // error: Type 'string' is not assignable to type 'number'.
```

TypeScript gives you the context you need to easily find out what’s wrong and where the mistake happened, saving you a huge headache.


### Example 2:
##### Calling an array method

```react
  const southernBreakfastItems = ['biscuits', 'gravy', 'sausage', 'grits']
  const breakfastList = southernBreakfast.map(food => food)
```

You wrote this block of code 6 months ago.  `breakfastList` maps over this array (`southernBreakfastItems`) of food items you’ve gotten back from a menu API (let's just imagine that this is what your Promise is returning) and just returns the name of each item.

Your colleague opens the codebase today and starts working with this old component.  They unknowingly change the Promise returned in `southernBreakfast` to a single string:

```react
  const southernBreakfast = 'biscuits'
  const breakfastList = southernBreakfast.map(food => food)
```

A type error like this has the potential to break your app.  Without static types, it can be really difficult to track down where the source of the issue is coming from.

If you use explicit types instead, you get a helpful error line under the `.map` in the text editor letting you know that you're trying to run a `.map` on a string instead of an array.  TypeScript once again saves you from 3 hours of `console.log`-ing. :raised_hands:

```typescript
// Property 'map' does not exist on type 'string'
```

### Example 3:
##### Accessing the properties on an object 

```react
const musician = {
  firstName: “Duke”,
  lastName: “Ellington”,
  genre: “jazz”,
  birthplace: “Washington, D.C.”,
}

const placeOfBirth = musician.brthplace //typo
const yearsActive = musician.years // years does not exist on this object
```

Neither `placeOfBirth` or `yearsActive` will actually work, but if you’re using JavaScript you won’t <em>find out</em> that they don’t work until you run your app locally (or worse - after you ship it to the customer).  By contrast, TypeScript gives you helpful and specific feedback within your text editor <em>as you type</em>!

```react
const placeOfBirth = musician.brthplace
// Property 'brthplace' does not exist on type `'{ firstName: string; lastName: string; genre: string; birthplace: string; }'`. Did you mean 'birthplace'?
```

Above, TypeScript sees that you made a small spelling typo and tries to gently guide you toward the error as you’re coding.

```react
const yearsActive = musician.years
// Property 'years' does not exist on type '{ firstName: string; lastName: string; genre: string; birthplace: string; }'.
```

Here, TypeScript tells you that this won’t work because you said `musician` would have 4 key-value pairs, none of which have `years` as a key.




I hope this post has convinced you that TypeScript is a worthwhile tool for scaling and managing large apps.  Now go add some static :zap: to your app!

Connect with me on [Twitter](https://www.twitter.com/shaundai) and on [LinkedIn](https://www.linkedin.com/in/shaundai).
