# Renzil's Web Development Workshop

This repository contains source code for a web development workshop where we learn Git, HTML, CSS and Javascript while building a Hollywood-themed quiz game [like this](https://hollywood-quiz.renzil.com).

Before you begin, please fork this repository into your GitHub account by clicking the Fork button in GitHub (usually on the top right).

You must then choose an editor for coding. There are many choices that will work, but if you're new I highly recommend using the cloud-based IDE [Gitpod](https://gitpod.io). It is basically a web version of the popular Visual Studio Code with a generous free tier. It also has GitHub integration automatically setup, and you can use it on any computer.

Once you signup for Gitpod with your GitHub credentials, make sure you have checked the permissions "user:email" and "public_repo" in https://gitpod.io/integrations -> Git Providers -> GitHub -> Edit Permissions.

<a href="https://www.loom.com/share/1249c77745654b0ba46e83cfb8481eff">
  <img style="width:300px;max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/1249c77745654b0ba46e83cfb8481eff-with-play.gif">
</a>

Then you can open this workshop in a Gitpod workspace by clicking the New Workspace button. Delete the default '.gitpod.yml' file that gets created as it is not necessary.

<a href="https://www.loom.com/share/42a3c3b2e66146bba8fd3499cc440cf5">
  <img style="width:300px;max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/42a3c3b2e66146bba8fd3499cc440cf5-with-play.gif">
</a>

The web development workshop is broken down into 3 parts with instructions and starter code contained in a git branch. For each part you need to,
- switch to the branch in Gitpod
- create a new branch for your work (a good convention for naming your working branch is to use your GitHub username followed by the part you are working on, for example renzil/part1-html)
- read and follow the instructions in the README of that branch

At any point of time if you want to return back to this document, switch to the "main" branch.

The below video shows you how to switch a branch and create a new branch from it using Gitpod. Selecting a branch with the prefix "origin/" will automatically select the local branch without "origin/" for you.

<a href="https://www.loom.com/share/19b7d5dbe9ff423ab5d8a3362ddd20af">
  <img style="width:300px;max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/19b7d5dbe9ff423ab5d8a3362ddd20af-with-play.gif">
</a>

## Part 1 - HTML
Learn the basics of HTML in this part. This is where you need to start once you have Gitpod setup. Switch to the branch **workshop/part1-html** and follow the instructions in the README.

## Part 2 - CSS
Learn the basics of adding CSS styles to your HTML document in this part. Switch to the branch **workshop/part2-css** and follow the instructions in the README.

## Part 3 - Javascript
Learn how to react to events and write custom logic using Javascript in this part. Switch to the branch **workshop/part3-javascript** and follow the instructions in the README.

## Completed project
The completed project is available under the branch **workshop/completed**.

Make sure you replace the TENOR_API_KEY in js/game.js with your own free [API key from Tenor](https://tenor.com/developer/keyregistration) otherwise the gif images won't update.

## Build

To preview the web site in a browser using Gitpod, you need to run the following command in the Gitpod terminal,

```npx browser-sync -w```

Then click on Remote Explorer button, and click on the globe icon for port 3000.

<a href="https://www.loom.com/share/7fc854ac6ec645d5a740e3a2986d9dd1">
  <img style="width:300px;max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/7fc854ac6ec645d5a740e3a2986d9dd1-with-play.gif">
</a>

## Deployment

There are many easy ways to deploy a simple static website like this that doesn't require any server. The easiest would be to use GitHub Pages.

To enable GitHub pages deployments for this repository,
- Go to Settings
- Click on the Pages button
- Select the branch you want to deploy and click Save
- Check the 'Enforce HTTPS' checkbox to prevent browsers from showing a security warning while visiting your site
<a href="https://www.loom.com/share/f0bd94777a6c4171860f975054379c4f">
  <img style="width: 300px; max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/f0bd94777a6c4171860f975054379c4f-with-play.gif">
</a>

## My favourite resources

[Google Search](https://google.com) for most questions which have already been answered. Prefer results from Stackoverflow.

[MDN Docs](https://developer.mozilla.org/en-US/) for HTML, CSS & JS reference.

[Google Fonts](https://fonts.google.com) for fonts hosted on CDN.

[Remixicon](https://remixicon.com/) for icons hosted on CDN.

[Pixabay](https://pixabay.com/) for free photos, music & sound effects.

[Unsplash](https://unsplash.com), [Pexels](https://pexels.com) for free stock photos.

[Namecheap](https://namecheap.com) to buy domains.

[Flexbox Froggy](https://flexboxfroggy.com/) to learn CSS flex in a fun way.

[Stackoverflow](https://stackoverflow.com) to ask new questions.
