---
title: How to Deploy Create-React-App on Surge
date: "2020-07-01T23:46:37.121Z"
description: Have a React app you're ready for the world to see? Check out these 5 easy steps to deploy that bad boy!
tags: ["#react", "#surge", "#deploying"]
---

First things first - let's make sure you have surge installed.

Install Surge globally ("globally" means that all of your projects will have access to Surge, not just this one) by typing this into your terminal:

>npm install --global surge

In the terminal, get to the root directory of your completed React app ("root directory" is the highest-level folder for your app).  If you used create-react-app to get your app running in the first place, type npm run build in the command line and press enter. 

>npm run build

Npm will create a build folder, which is basically a deployable version of all of the React files you've worked so hard on, minus the junk and the secret information you wanted to keep hidden.

Now navigate to your build folder by typing the following into the command line.

>cd build

We're going to deploy to surge at this point, which is as easy as typing one word in the command window to activate the program: surge.  Type surge into the command line and press enter.

>surge

Surge will prompt you to either create an account or log in.  If this is your first time using Surge, use your email address and create a password to create a Surge account through the command line.  If you've used surge before, your most recently used credentials will appear and you can press enter to keep it moving or create a new account/enter a different login from there.

Surge will make up a domain name for you.  You can keep the domain they give you, change the surge sub-domain to your own available name (for example: 'my-customname.surge.sh'), or use a custom domain by following the [instructions here](https://surge.sh/help/adding-a-custom-domain)

Press enter.

You're done!  Enter the link in your browser to see your app live in action.