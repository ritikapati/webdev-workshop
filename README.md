# Completed

> This branch contains the complete HTML, CSS and JS implementation of our workshop.
> 
> You can use it as a reference whenever you want to learn how something was finally implemented.
> 
> Once you switch to this branch, a good practice is to create a new working branch from it using your GitHub username. For example I would create a new branch **renzil/completed** from this branch before I begin.

## Congratulations 🎉

Congratulations on completing the workshop!

I hope you go on to build amazing websites in the future 🚀

Do complete any steps that you might have missed during the live workshop.

For those who attended the live workshop, you have my WhatsApp and email and can reach me directly if you have any questions.

Do follow me on [Twitter](https://twitter.com/renzil) for tweets on how to become a better coder and [LinkedIn](https://linkedin.com/in/renzil) for career and industry advice.

I also write a [weekly newsletter on substack](https://renzil.substack.com) where I share powerful personal stories that have shaped the way I think and approach my career.

If you would like to help others learn to code, do join and help me build a community on [Discord](https://discord.gg/Th4Fg8vPSs).

If you would like to tweet about learning new skills through this workshop, [here's a tweet template you can use](https://twitter.com/intent/tweet?text=I%20just%20learned%20the%20basics%20of%20GitHub%2C%20HTML%2C%20CSS%20and%20Javascript%20by%20building%20a%20game%20from%20scratch%20in%20Renzil%27s%20web%20development%20workshop%21%20hollywood-quiz.renzil.com%20@renzil&in_reply_to=1511568215758893058).

## Build

To preview the web site in a browser using Gitpod, you need to run the following command in the Gitpod terminal,

```npx browser-sync -w```

Then click on Remote Explorer button, and click on the globe icon for port 3000 to open the website preview in a new browser window.

<a href="https://www.loom.com/share/7fc854ac6ec645d5a740e3a2986d9dd1">
  <img style="width:300px;max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/7fc854ac6ec645d5a740e3a2986d9dd1-with-play.gif">
</a>

## Deployment

There are many easy ways to deploy a simple static website like this that doesn't require any server. The easiest would be to use GitHub Pages.

To enable GitHub pages deployments for this repository:
- Click on the Settings button for this repository
- Click on the Pages button
- Select the branch you want to deploy and click Save
- Check the 'Enforce HTTPS' checkbox to prevent browsers from showing a security warning while visiting your site
<a href="https://www.loom.com/share/f0bd94777a6c4171860f975054379c4f">
  <img style="width: 300px; max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/f0bd94777a6c4171860f975054379c4f-with-play.gif">
</a>

## Next steps

Even though we implemented most of the core functionality of our game, a lot more goes into making a game (or any product) highly polished.

If you see the [original version of the game](https://hollywood-quiz.renzil.com):
- it has a slightly buggy, but really cool, music and sound-effects
- it shows the low-resolution gif while the high-resolution gif loads in the background, and then switches to high-res gif
- it has a confetti explosion effect every time you answer correctly
- it has a difficulty slider on the home page, so the player can play quizzes of varying difficulties
- audio and difficulty settings are passed from index.html to game.html and vice versa, to give a consistent experience to the user
- it shows a loading icon when the question is loading, and the UI is disabled to prevent bugs

These features were skipped in this workshop due to time but you can try to implement them on your own.
