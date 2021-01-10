---
title: Using LocalHost for Mobile Development
date: "2021-01-09T23:46:37.121Z"
description: Testing your web app on mobile before deploying using localhost on your phone and tablet
tags: ["#webdev", "#tutorial", "#mobile", "#deploying"]
---

#### <em>This short tutorial is for Mac users</em>
 
You may have known Chrome DevTools enables you to test the look and feel of your web application on differently-sized devices, but did you know that you can <em>also</em> use run localhost on any device that can connect to the internet?  As you run localhost:3000 (or whichever port) on your local machine, your phone and tablets can run your program in real time for developing and testing on mobile.

### <b>Why is this important?</b>
 
The Chrome DevTools Device Toolbar is a great tool that saves a lot of time, but it’s not perfect.  After deploying my personal website for example, I was surprised to find that the version of my site I saw in my iPhone’s browser looked quite different from the local DevTools version I’d spent hours with, tweaking media query after media query.  When I later pulled up my site on my monitor’s wide screen, I discovered that I’d never <em>actually</em> accounted for screens wider than the 13” laptop that I’d been programming on, either.

To avoid these types of glitches and UI/UX bugs <em>before</em> deploying for the whole world to see (ideal, right?), it’s essential to test your app on physical devices of different sizes.  One cool thing about running localhost from your mobile device is that, just like with localhost on your computer, you can see realtime changes to your app <b><em>as you code</em></b>.


### <b>The How-To <em>(for Mac users)</em>:</b>

<b>(1) Run your program on your Mac’s localhost</b>
Make sure your program is running on localhost.  When you go to the localhost port you’re running (ex. localhost:3000), the current version of your app in development should be visible.

Take note of the port you are using.  Common port numbers are <em>3000, 3001, 8000</em>, or <em>8080</em>.  You can find the port number in your URL bar after “localhost:”  In this instance, my localhost port is <b><em>port 3000</em></b>.

<b>(2) Find the IP address of your Mac</b>
Here, we want to find the IP address of the Mac running localhost.  To find the IP address, start by clicking the apple logo in the top left corner of your Mac to open the dropdown menu.

![Apple menu dropdown](https://dev-to-uploads.s3.amazonaws.com/i/0vfoaj9p6jd19ve8mwf3.png)

Choose <b>System Preferences</b> from the menu to open up your System Preferences.

Next, choose <b>Network</b> from the list of options in <b>System Preferences</b>.  Your Network App should open up.

![System Preferences menu with Network App highlighted](https://dev-to-uploads.s3.amazonaws.com/i/l31erwdck5pt6dwmxzo6.png)

Your IP address will be in the middle box on the right, under <b>Status</b>.  Underneath your network's status, find the sentence telling you the wi-fi network you're connected to and your IP address.  In my case, the IP address is <b><em>123.45.6.08</em></b> .  Take note of the IP address because we will need it for the final step.

![Network page in mac shows IP address under status section](https://dev-to-uploads.s3.amazonaws.com/i/fbp2d0k1n84yxsxy2is7.png)

<b>(3) Connect your mobile device to the same wi-fi network as your Mac</b>

<em>If this isn’t already the case.</em>

<b>(4) Open localhost on your mobile device</b>
In the URL bar in your phone, go to

```
http://{your-IP-address}:{your-port-number}
```

In my case, I’d put this into the URL bar:

```
http://123.45.6.08:3000
```

Now you should see your app locally on your mobile device.  Now go build something great!

 
Connect with me on [Twitter](https://www.twitter.com/shaundai) and on [LinkedIn](https://www.linkedin.com/in/shaundai).
