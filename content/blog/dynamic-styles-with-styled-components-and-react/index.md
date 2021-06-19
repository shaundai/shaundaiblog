---
path: dynamic-styles-with-styled-components-and-react
date: 2021-06-18T05:38:47.418Z
title: Making Styles Repeatable: Dynamic Styling in React using Styled Components
description: How to make your styles dynamic and DRY in React
tags: ["#react", "#styledcomponents", "#styling", "#tutorial"]
---

The [styled-components library](https://styled-components.com/) makes it easy to create dynamic styles.  At the most fundamental level, Styled Components are just React components with CSS styles attached.  Thus, they can be used the same way we'd use any React component.  Styled Components also come with out-of-the-box constructors that allow you to pass props and functions into your styles, which is what gives them their dynamic abilities.

Before we get into the <em>how</em> though, let’s talk about the <em>why</em>.  Why would we want to use dynamic styles in our React apps?

- **DRY and Maintainable:** Instead of declaring the same styles again and again each time you need them, dynamic styles are declared once and exported as needed.  This means that any future changes to styles only need to be made in one place.  When you Don’t Repeat Yourself (DRY), maintaining and updating your codebase is simpler.

- **Less Error Prone:** Now that we only need to make our changes in one place, it's also less likely we’ll accidentally miss a change somewhere.  For this reason, DRY code (via dynamic styling) is more trustworthy.

- **Clean and Easy to Read:** Dynamic styling allows us to change up our styles without injecting or removing class names, making our stylesheets shorter and cleaner.  Styles can even be declared <em>within</em> the `.js` file using the styles, making them really easy to find later!

### Starting with a Basic Button

Start by declaring a variable with a descriptive name (like `PrimaryButton` below) and setting it equal to `styled.[HTML-element-we-want-to-use]`.  The styles are declared between two backticks at the end of the Styled Component declaration.

```javascript
import styled from 'styled-components'

export const PrimaryButton = styled.button`
  background-color: darkcyan;
  color: white;

  border-radius: 8px;
  border-color: transparent;
  width: 250px;
  padding: 14px;
  font: 20px Georgia;
  &&:hover {
    background-color: rgb(0,139,139,0.5);
  } 
`
```

`PrimaryButton` contains a lot of styles that we'll be using frequently in our app.  Luckily - since `PrimaryButton` is fundamentally a React Component - we don't need to retype these styles each time we need to use them.  We also don't need to worry about adding class names to link our styles to a separate stylesheet.  To use `PrimaryButton` styles, all we do is swap the old HTML element `<button>`...

**Before**

```javascript
<button> I am a button <button>
```

...with our new `PrimaryButton` Styled Component.

**After**

```javascript
<PrimaryButton> I am a button </PrimaryButton>
```

If our marketing team later decides to change our app’s theme colors from `darkcyan` to `green`, all we need to do is make a one-line change to `PrimaryButton` to change _all_ instances of `PrimaryButton` to `green` at once.

### Extending Custom Styles

What if we want two different-but-fairly-similar types of buttons in our app?  For instance, what if our primary buttons are `darkcyan`, but we also want some buttons with a `red` background to indicate to users that an action is permanent?  Other than the color, these red “destructive buttons” will be identical to the `PrimaryButtons` we built in the previous example.

Rather than creating a new class for our destructive style, we <em>extend</em> the `PrimaryButton` styles that we want to use and override the styles we don’t need.  This is all the code we need to tell Styled Components “`PrimaryButton`, but red.”:

```javascript
const DestructiveButton = styled(PrimaryButton)`
  color: ‘red’;
`
```

We can use our new `DestructiveButton` in place of `PrimaryButton` wherever we'd like the `red` buttons to appear. Our code is much cleaner and easier to maintain.  If our marketing team comes back and wants to change the padding for all buttons to `12px` instead of `14px`, we only need to change the single padding declaration in `PrimaryButton` to update the padding for _all_ buttons, Primary and Destructive alike.

### Making Styles Dynamic

Now let’s get into the dynamic styling.  In this example, we want a button to be `darkcyan` some of the time and `red` some of the time (for example, the submit button on a form that only turns red when the user has entered invalid information).

How can we make our styles change based on the current status of elements in our UI?  If we were using just CSS, we'd need to add or remove a class when the input is empty.  If we were using React, we might use a function that accepts props.  Based on the value in those props, our function could set the color equal to either `red` or `darkcyan`.  Since Styled Components is just React, we have an easy way of doing the latter.

Styled Components comes with an Attributes constructor (`attrs`) that accepts static props or dynamic props.  We're going to use dynamic props for this example.

We start from scratch with a styled button component - `MainButton` - which can dynamically render three variants: `primary`, `destructive`, and `line` (inverted `primary` colors).  We'll use the `attrs` constructor to make the `background-color`, `border-color` colors, and `hover` colors change dynamically.

Below, we start with three objects each defining the colors by variant.

```javascript
const ButtonBackgroundColors = {
  primary: 'darkcyan',
  destructive: 'red',
  line: 'white'
}

const ButtonBorderColors = {
  primary: 'transparent',
  destructive: 'transparent',
  line: 'darkcyan'
}

const ButtonHoverColors = {
  primary: 'rgb(0,139,139,0.5)',
  destructive: 'rgb(255,0,0,0.5)',
  line: 'rgb(0,139,139,0.5)'
}

```

To use `attrs`, we add it onto the end of the template literal declaration.  `attrs` accepts a function that takes in the `props` from our instance of `<MainButton>`. The `attrs` function returns an object, and we've set those `props` equal to the object's keys.  In other words, to use `colorVariant` in an instance of `MainButton`, all we need to do is add colorVariant as a prop like this: `<MainButton colorVariant="primary">`.

It is good practice to also include a fallback or default option in case the developer does not add any `colorVariant` props to `MainButton`.  Setting `colorVariant` equal to either `props.colorVariant` or `'primary'` means that if `colorVariant` is not present, we will always use `primary` as our variant.

In this example we're only changing colors using a `colorVariant` prop, but the variant possibilities are endless!  In the future, if we wanted to add, say, a `sizeVariant` that manipulates the height, width, and padding of the button based on variants of `small`, `medium`, and `large`, we could add that to our object as well.


```javascript
export const MainButton = styled.button.attrs((props) => ({
  colorVariant: props.colorVariant || 'primary',
}))`
  background-color: darkcyan;
  color: white;

  border-radius: 8px;
  border-color: transparent;
  width: 250px;
  padding: 14px;
  font: 20px Georgia;
  &&:hover {
    background-color: rgb(0,139,139,0.5);
    }
`
```

So far, we've told `MainButton` to look out for the `colorVariant` prop, but we haven't yet provided it our colors.  Let's start with `background-color`.  Below, we set it equal to a function that accepts the `props` from `attrs`.  We return the property in `ButtonBackgroundColors` that has the color variant we used (in this case, `primary`) as a key.

```javascript
export const PrimaryButton = styled.button.attrs((props) => ({
  colorVariant: props.colorVariant,
}))`
  background-color: ${(props) => ButtonBackgroundColors[props.colorVariant]};
  color: white;

  border-radius: 8px;
  border-color: transparent;
  width: 250px;
  padding: 14px;
  font: 20px Georgia;
  &&:hover {
    background-color: rgb(0,139,139,0.5);
    }
`
```

Alternatively, we can make our color function a bit cleaner using object destructuring.  Below, we destructure `props` in our declaration function for `background-color`.  (Note, the code in `background-color` below does exactly the same thing as the `background-color` above.  Destructuring as we've done below is a matter of personal preference).

We also use our `ButtonBorderColors` and `ButtonHoverColors` objects to give dynamic styling to `border-color` and `hover` `background-color`.  `props` has been destructured in their declaration as well.

```javascript
export const PrimaryButton = styled.button.attrs((props) => ({
  colorVariant: props.colorVariant,
}))`
  background-color: ${({colorVariant}) => ButtonBackgroundColors[colorVariant]};
  color: ${({colorVariant}) => ButtonTextColors[colorVariant]};

  border-radius: 8px;
  border-color: transparent;
  width: 250px;
  padding: 14px;
  font: 20px Georgia;
  &&:hover {
    background-color: ${({colorVariant}) => ButtonHoverColors[colorVariant]};
    }
`
```

Now we're ready to use our dynamic styles!  We can provide props to our button like this:

```javascript
<MainButton colorVariant="destructive">Press Me</MainButton>
```

or we have the option of using a function that passes in the correct color based on props or events:

```javascript
<MainButton colorVariant={getColorVariantFunction}>Press Me</MainButton>
```

### Conclusion

Dynamic styling gives us clean, DRY code that can be easily reused.  Our codebase is more trustworthy and easier to maintain; any future changes only need to be made in one place.  Best of all, we have a way to change styles without the messiness of adding class names, eliminating the chances of making silly errors that cause bugs in production.

----

<em>I'm building a TypeScript course - TypeScript for JavaScript Developers</em>!  <b>Sign up for updates [here](https://www.tsforjs.com)</b>

...or find me on [Twitter](https://twitter.com/shaundai)