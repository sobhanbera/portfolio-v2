<h1 align="center">
  sobhanbera - v2
</h1>

<p align="center">
  This is the 2nd version of my portfolio build with <a href="https://nextjs.org" target="_blank">Next.JS</a> and hosted in <a href='https://vercel.com' target="_blank">Vercel</a>.
</p>

<p align="center">
  <a href="https://sobhabera.github.io" target="_blank">
    <img src="./.github/src/ss_dark.jpg" alt="Netlify Status" />
  </a>
  <a href="https://sobhabera.github.io" target="_blank">
    <img src="./.github/src/ss_light.jpg" alt="Netlify Status" />
  </a>
</p>

## Overview

Hi There!

This is the second instance of my Portfolio website (The 2nd version of my portfolio). This website is assembled successfully by grabbing inspiration from multiple elegant portfolio websites. Many components and animations of this website are built from inspired websites all around the internet.

If you find the project useful just give it a star ⭐️.

## Features

The major features of this portfolio website are:

1. Elegant color selection.
2. Smooth animations and transitions.
3. Over 10+ Themes! Which are selected randomly whenever website is loaded.
4. 6 Light + 6 Dark Themes.
5. Blogging page 📝 in portfolio website itself.
6. Integration with 📈 Google Analytics & Vercel Analytics 📊.
7. Responsive for small-sized devices 📱.
8. Contact form implemented using Firebase.
9. Automated Email 📤 sending service that sends emails who contacts using this form ✉️.
10. Many more hidden features.
11. And many more to be implemented soon.

## Environment Setup

1.  Install packages!
    NOTE: This is auto generate configs for husky.

```bash
yarn install
```

2.  **Prepare the development environment**

    1.  Create a new project in firebase and then create a new App.

    2.  Install the SDK and initialize Firebase. The exact steps could be found [here](https://firebase.google.com/docs/web/setup?authuser=0).

    3.  Copy the firebase SDK configuration from the firebase console. Paste the JSON data into the constant named `firebaseConfig` in `firebase/template.ts` file.

    4.  Lastly, if you want to enable Google Analytics, Just follow along:

        -   Go to the Google Analytics console and select the same project.

        -   Copy the Google Analytics Tracking ID from the console (This is the same as the `measurementId` in firebase SDK).

        -   Paste the string in this file - `lib/gtag.js`

3.  Now it's time to spin up the live server.

```bash
yarn start
```

4. If you want to use this code as your portfolio website. Go on! But remember you have to change details in many places including files in `constants`, `firebase`, `libs`, `configs`, and more folders.

The live server is up and running at port `3000`. Here - [http://localhost:3000](http://localhost:3000)

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
