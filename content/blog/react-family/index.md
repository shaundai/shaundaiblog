---
title: State and setState Explained with Emotion
date: "2021-05-03T23:46:37.121Z"
description: The analogies that will help you finally understand React state
tags: ["#react", "#codenewbie", "#javascript"]
---

<em>This article is part of a React Family series inspired by my conversation with Jason Lengstorf on [this episode of Learn with Jason](https://www.learnwithjason.dev/functional-react-with-styled-components).</em>

In this example, we have three React components.  One, `<Mom />` is, of course, the parent component.  The others are children of `<Mom />`:
* `<Toddler />` and
* `<Teen />`.

```react
1 const Mom = () => {
2 
3   return (
4     <div>
5       <Toddler />
6       <Teen />
7     </div>
8   )
9 }
```

These components don't do or show anything just yet, but using this small React family, we'll see how `state` can be set and passed between ~~family members~~ components.

## State at a High Level
`State`, like `props`,  is an object containing information used to determine what's rendered by your React app.  This could be anything, from colors to a tally to whether a modal should currently be displayed on the page or hidden from view.  React `state`, in this example, is going to be the <em>emotional state</em> of our components.

Unlike `props`, `state` is managed within the component it lives on.  By contrast, `props` is set and managed <em>outside</em> of the component, then passed <em>into</em> the component using it.

State should always live on the highest-order component that’s involved in its use.  There are two reasons for this:

* State-setting functions can only be used to set `state` for either (1) the component that holds the function or for (2) one of its parents.  A parent, or higher-order component, cannot have a set `state` that lives on a child component.
* `State` can be passed from parent to child (via props), information about state can be passed from child to parent (via state-setting functions), but information can only be passed from sibling-to-sibling by going through the parent (via a combination of state-setting functions and props).

We’ll explore these in further detail, but for now just understand that in our case state will need to live on `<Mom />` because she is the highest-order component involved in using our `state`.

When a React component is rendered, it uses `state`'s initial value.  This value could be any Javascript data type or structural type including null, undefined, 0, or just a blank value (like an empty string).  In our example, our parent component `<Mom />` has an initial state of string ‘happy’.  We set the initial state to `happy` using the `useState` hook and render it in the DOM using JSX on line 9 below.

```react
1 const Mom = () => {
2 
3 const [emotion, setEmotion] = useState('happy')
4 
5   return (
6     <div>
7       <Toddler />
8       <Teen />
9        {emotion} //happy
10    </div>
11   )
12 }
```

## Setting State
#### <b><em>Components setting their own state</em></b>
Just like your emotional state, React `state` can be changed and maintained by a trigger (a function).  In class components, these functions would be called setState functions.  We’ll be using React Hooks, so our function can be called whatever we want to call it.  Common convention is to call it `set + WhateverTheFunctionDoes`.   Anytime `state` is changed, the component is re-rendered.

`<Mom />` can hold these functions to update her own state, as below. `handleMeditation()` changes `<Mom />`’s `state` to `‘calm’`.  When a user clicks the button we've added to lines 13-15, `setEmotion` is triggered and our `state` of `emotion` is changed to `calm.`

```react
1 const Mom = () => {
2 
3 const [emotion, setEmotion] = useState('happy')
4 
5 const handleMeditation = () => {
6   setEmotion('calm')
7 }
8 
9  return (
10    <div>
11      <Toddler />
12      <Teen />
13       <button onClick={handleMeditation}>
14         {emotion}  //changes to 'calm' once button is clicked
15       </button>
16    </div>
17   )
18 }
```

#### <b><em>Passing information from parent to child</em></b>
From here, `<Mom />` can pass her <em>emotional state</em> on to her children :smiley: as props.  `<Toddler />` and `<Teen />` will both get passed the initial props of `happy`.  Any time `<Mom />`’s state changes, the <em>emotional state</em> of the children will be updated to match `<Mom />`’s.

```react
1 const Mom = () => {
2 
3 const [emotion, setEmotion] = useState('happy')
4 
5 const handleMeditation = () => {
6   setEmotion('calm')
7 }
8 
9  return (
10    <div>
//initial props value of 'happy' changes to 'calm' in Toddler and Teen once button is clicked
11      <Toddler emotion={emotion} />
12      <Teen emotion={emotion} />
13       <button onClick={handleMeditation}>
14         {emotion}  //changes to 'calm' once button is clicked
15       </button>
16    </div>
17   )
18 }
```

#### <b><em>Passing information from child to parent</em></b>
State-setting functions can also be passed down to children as `props`.  If a child has access to any trigger - or function - that is paired with `<Mom />`’s state, the child thus has the ability to manipulate `<Mom />`’s - or the parent component’s - `state`.

Let’s say that `<Mom />` has a different handler function called `handleTemperTantrum()`.  `<Mom />` passes this function to child `<Toddler />` as a prop:

```react
1 const Mom = () => {
2 
3 const [emotion, setEmotion] = useState('happy')
4 
5 const handleTemperTantrum = () => {
6   setEmotion('annoyed')
7 }
8 
9  return (
10    <div>
11      <Toddler handleTemperTantrum={handleTemperTantrum} />
12      <Teen />
13    </div>
14   )
15 }
```

Now, `<Toddler />` has the ability to ~~manipulate~~ update and manage `<Mom />`’s state on its own!  `<Toddler />` uses this function to change `<Mom />`’s state to 'annoyed' any time the button on lines 4-6 is clicked.

<b>Toddler Component</b>:

```react
1 const Toddler = ({handleTemperTantrum}) => {
2 
3  return (
4    <button onClick={handleTemperTantrum}>
5      
6    </button>
7   )
8 }
```

This button does not actually display anything except an empty button, though.  Since the actual `state` of `emotion` still lives on `<Mom />`, we'll need to pass `emotion` down to her child.  In fact, since parents can pass state down to any children as `props`, we can pass `annoyed` to both `<Toddler />` <em>and</em> `<Teen />` as props for them to use.

<b>Mom Component:</b>

```react
1 const Mom = () => {
2 
3 const [emotion, setEmotion] = useState('happy')
4 
5 const handleTemperTantrum = () => {
6   setEmotion('annoyed')
7 }
8 
9  return (
10    <div>
11      <Toddler handleTemperTantrum={handleTemperTantrum} emotion={emotion} />
12      <Teen emotion={emotion} />
13    </div>
14   )
15 }
```


<b>Toddler Component:</b>

```react
1 const Toddler = ({handleTemperTantrum, emotion}) => {
2 
3  return (
4    <button onClick={handleTemperTantrum}>
5      {emotion} //now this will say 'calm', or will change to 'annoyed' once this button is clicked
6    </button>
7   )
8 }
```

Any time `<Mom />`’s state is updated, `<Toddler />`s and `<Teen />`s emotional states are updated accordingly.

State-setting functions can either live on the component that the state lives on, or on one of its children.

#### <b><em>Passing information from sibling to sibling</em></b>
Siblings can pass state between one another, but they have to do it through their common parent.  Just as we did in the last example, `<Toddler />` can pass state to `<Teen />` using this workflow:

1. `<Toddler />` has the `setTemperTantrum()` function, which manages and updates the `state` that lives on `<Mom />`
2. `<Toddler />` sets `<Mom />`’s state to `annoyed`
3. `<Mom />` passes `annoyed` as a prop to `<Teen />`
4. `<Teen />` accepts emotion as a prop.


Find me on [Twitter](https://twitter.com/shaundai) or [LinkedIn](https://www.linkedin.com/in/shaundai/).