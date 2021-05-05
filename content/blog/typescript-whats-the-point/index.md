---
title: "TypeScript: What’s the Point?"
date: "2021-05-03T23:46:37.121Z"
description: The analogies that will help you finally understand React state
tags: ["#react", "#codenewbie", "#javascript"]
---

TypeScript is just a superset of JavaScript, meaning it <em>is</em> still JavaScript - just with enhanced functionality.  When you run an application built in TypeScript, the code is compiled into the same JavaScript you know and love before being run in your browser.  (Btw - for this reason, you can use TypeScript anywhere you’d normally use JavaScript – on the frontend <b>and</b> on the backend!)

The only issue with using it is that TypeScript - to someone who has never used a statically-typed language - is annoying af.  When you’re used to the carefree life of declaring variables without having to worry about their future, what they’ll eventually become, and the functions they’ll have to interact with, adding types to your code just seems like a bunch of extra work for little reward.

## So, Why Not Just Use JavaScript?

The short answer is: TypeScript makes code **less error prone** and **more readable** than JavaScript.  It was designed especially for projects that meet the following criteria:

    * Large or complex (enterprise-level applications)
    * Maintained by multiple people
    * Will evolve or be updated over time

#### Less Error Prone
The big difference between TypeScript and JavaScript is **when typechecking happens**.  First, what is typechecking?  Typecheckers are type police built into JavaScript to enforce the type laws (for example, it’s against the rules to multiply a string with an array).  Typechecking is the process where typecheckers verify that your code follows all of the rules of the language.

In **dynamically-typed languages** like JavaScript, typechecking occurs during <em>runtime</em>.  This means you’ll find out about your mistakes when you run your program.  This may happen locally as you’re testing, during your unit tests or smoke tests, or even in production after you’ve shipped it to your customers.

By contrast, **statically-typed languages** like TypeScript check types during <em>compile time</em> - right in your text editor!  This means that you’ll instantaneously see mistakes that could potentially break your code <em>as you make them</em>.  Not only does this prevent you from shipping a buggy app, it also closes the gap between when you **make** the mistake and when you **find out** you’ve made a mistake, getting you to a fix, faster.

#### More Readable
With explicitly typed code, others can look at your code and easily understand what it’s meant to do.  If you’re working with a huge code base with other engineers who will be modifying and adding to your code daily, this added level of readability is crucial for preventing new type errors.

Once you’ve got a solid understanding of how to use TypeScript, you’ll also notice that the way you think about code will start to change.  Because static typing forces you to think about types even before you’ve declared any values, you will get great at mapping out the relationships between your components and their functions in your head before you even declare any variables!  You will be able to identify and account for new edge cases before deploying to production.  Overall, you can expect that your code will be sturdier and much easier to maintain.


## Examples: JavaScript vs TypeScript

### Example 1: 
#### Adding two numbers to calculate padding on a button.

```react
  const a = icon ? 0 : 4
  const buttonPadding = `(a + 6) + px`
```

You wrote the above code earlier today to calculate the amount of padding for buttons in our component library.  If the button does not have an icon, we want to add 6px of extra padding.  `const a` is the potential amount of padding we’ll have, and then we’ll use concatenation to add the letters ‘px’ to the end of the number before plugging it into our CSS.

As long as `a` and `b` are both numbers, `buttonPadding` will work fine!  But let’s say that you’re coding along and accidentally change `a` to this:

```react
  const a = icon ? 0px : 4px
  const buttonPadding = `(a + 6) + px`
```

Now, `a` will return a string.  If you’re using JavaScript, this may still <em>run</em> just fine, but you’ll wonder why you're not getting <em>any</em> of that extra padding on that button.  And let’s be honest - it’s always silly little code errors like that these take up <b>so</b> much of our debugging time and patience to try to resolve!

If you instead used TypeScript, though, you would’ve gotten one of those ~~annoying~~ super helpful red squigglies <b>as you were coding</b>, letting you know that we expected `a` to be a number, but it’s a string.  TypeScript gives you the ability to easily figure out what’s wrong and resolve the error before running your application by giving you a helpful little error message pointing you to exactly what and where the issue is.


### Example 2:
#### Calling an array method

```react
  const southernBreakfastItems = [‘biscuits’, ‘gravy’, ‘sausage’, ‘grits’]
  const breakfastList = southernBreakfast.map(food => food)
```

You wrote this block of code 6 months ago.  `breakfastList` maps over this array (`southernBreakfastItems`) of food items you’ve gotten back from a menu API and just returns the name of each item.

Your colleague comes along today and starts working with your old code, and unknowingly changes the result of `southernBreakfast` to a string:

```react
  const southernBreakfast = 'biscuits'
  const breakfastList = southernBreakfast.map(food => food)
```

Typescript will give you an error under the `.map` to tell you that this method can't be used on a string

// Property 'map' does not exist on type 'string'


### Example 3:
#### Accessing the properties off of an object 



```react
const musician = {
  firstName: “Duke”,
  lastName: “Ellington”,
  genre: “jazz”,
  birthplace: “Washington, D.C.”,
}

const placeOfBirth = musician.brthplace
const yearsActive = musician.years
```

Neither `placeOfBirth` or `yearsActive` will actually work, but if you’re using JavaScript you won’t find out that they don’t work until you run your app locally (or worse - after you ship it to the customer).  By contrast, TypeScript gives you helpful and specific feedback within your text editor <em>as you type</em>!

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
