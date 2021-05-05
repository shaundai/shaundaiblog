---
title: "TypeScript: What’s the Point?"
date: "2021-05-03T23:46:37.121Z"
description: The analogies that will help you finally understand React state
tags: ["#react", "#codenewbie", "#javascript"]
---

TypeScript is just a superset of JavaScript, meaning it <em>is</em> JavaScript, with enhanced functionality.  When you run an application built in TypeScript, the code is actually just compiled into the same JavaScript you know and love.  (Btw - for this reason, you can use TypeScript anywhere you’d normally use JavaScript – on the frontend <b>and</b> on the backend!)

The only issue with using it is that TypeScript - to someone who has never used a statically-typed language - is annoying af.  When you’re used to the carefree life of declaring variables without having to worry about their future, what they’ll eventually become, and the functions they’ll have to interact with, adding types to your code just seems like a bunch of extra work for little reward.

## So, Why Not Just Use JavaScript?

The short answer is: TypeScript makes code **less error prone** and **more readable** than JavaScript.

The difference between the two is **when type checking happens**.

**Dynamically-typed languages** like JavaScript check types during <em>runtime</em>.  This means you’ll find out about your mistakes when you run your program.  This might be locally as you’re testing, during your unit tests or smoke tests, or even after you’ve shipped it to your customers.

**Statically-typed languages** like TypeScript instead check types during <em>compile time</em>.  This means that you’ll find the mistakes that could potentially break your code <em>as you make them</em>.  Not only does this prevent you from shipping a buggy app, it also closes the gap between when you **make** the mistake and when you **find out** you’ve made a mistake, getting you to the fix faster.





Typescript was designed with the following types of projects in mind:

    * Large or complex (enterprise-level applications)
    * Maintained by multiple people
    * Will evolve or be updated over time

Something something instantaneous feedback
TypeScript is meant to close certain gaps JavaScript leaves in.





This will help to eliminate headaches before they happen.  

Now for some examples.  Picture the following scenario in JavaScript:

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
