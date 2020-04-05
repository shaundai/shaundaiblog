---
path: gatsby-blog
date: 2020-04-05T05:38:47.418Z
title: Creating a Gatsby Blog
description: Use Gatsby Personal Starter Blog to get up and running in 10 min.
---
The biggest advantage of using Netlify as your headless CMS is that its just SO EASY to use.  If you are thinking of hosting a blog with Netlify as well, let me reassure you that the Gatsby + Netlify CMS is the way you can not only get this blog up and running in 10 minutes, but it makes adding new blog articles a breeze.  Netlify provides an admin dashboard ADD PIC FROM SCREENSHOT so that you only have to set things up once, and then you can add future blog posts without having to spend a lot of time duplicate code over and over.

Quick and easy instructions for adding a Gatsby blog to your existing Netlify site with a custom domain.  Here’s what you’ll need:

* Netlify site with custom domain (I purchased my domain from Netlify)
* Gatsby CLI Installed
* A GitHub account

Let’s start out with a simple Gatsby blog.  Gatsby makes it easy to get started with a starter blog that you can use to get up and running quickly.

Create your Gatsby blog:

1. In your terminal, type the following command to create a new Gatsby blog site using gatsby-personal-starter-blog.  \[your-project-title] should be the name of your blog (so, whatever you want).  The GitHub.com link needs to be exactly as typed below.  

   > gatsby new \[your-project-title] https://github.com/thomaswangio/gatsby-personal-starter-blog

Wait until all of the Gatsby packages and dependencies have been installed.

2. cd into your project and run your project locally to see the updates in real time before sending to production.  To do this, type into your terminal:

   ```
   cd [your-project-title]
   gatsby develop
   ```

 You officially have a Gatsby site!  How easy was that?! To see the local site, go to http://localhost:8000

Now, let’s do a couple of customizations before deploying to GitHub.

Customize your blog site:

Now it’s time to update your site to fit you. 

3. One more quick change so that you can manage your Gatsby site using the admin dashboard.  Open this project in your favorite code editor and open static/admin/config.yml.  On line two, change the name from name: test-repo to name: github.  Press enter to add another line for line 3 and type

> repo: username/repo-name

username should be your GitHub username.  repo-name should be the name of the GitHub repo where this project lives.

You can also get to the admin dashboard now as well: http://localhost:8000/admin.

Connect your blog to GitHub repo: In GitHub, create a new repo (make sure to give it the same name as your project).  You’ll push your code to GitHub by typing the below into your terminal:

```
> git init
> git add .
> git commit -m “initial commit”
> git remote add origin https://github.com/[username]/[repo-name]
> git push -u origin master
```