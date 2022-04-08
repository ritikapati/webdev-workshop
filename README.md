# Part 1 - HTML 

*Before starting this section make sure you have a development environment setup like Gitpod. Once you switch to this branch, a good practice is to create 
a new working branch from it using your GitHub username. For example I would create a new branch **renzil/part1-html** from this branch before I begin.*

*You can find instructions for the above steps in the **main** branch.*

HTML is the most fundamental document that gets fetched and rendered by a browser when you visit a website. You can learn more about HTML by reading the [MDN docs on HTML](https://developer.mozilla.org/en-US/docs/Web/HTML).

In this part of the workshop, the goal is to implement only the HTML of the landing page of [our game](https://hollywood-quiz.renzil.com). This means that we will add the content of our landing page to an html file, but we will not style (colors, layout, etc.) or implement the functionality (game logic).

To get started, there is a file called index.html which contains a basic HTML document without any of the page content. You should be adding tags to the <body> of this document to bring in the content of the landing page.

*NOTE: The above landing page has an audio button and difficulty slider. We will not be implementing these features as part of this workshop. I leave these features for you to explore on your own.*
  
To live test the code in Gitpod run the following command in a terminal:

```npx browser-sync -w```

Once it starts running, open port 3000 in a new browser window through the *Remote Explorer* view in Gitpod.

Here is a video on how to do that:

<a href="https://www.loom.com/share/7fc854ac6ec645d5a740e3a2986d9dd1">
  <img style="width:300px;max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/7fc854ac6ec645d5a740e3a2986d9dd1-with-play.gif">
</a>

## Workshop steps

1. Add an h1 tag for the heading "Hollywood Quiz"
2. Add a play icon for the play button (use [Remix Icon](https://remixicon.com) to find the play icon)
3. Add an h2 tag for the "PLAY" that appears below the button

## Next steps

You can play around with other HTML elements to understand how they display by default. You can find the full list of HTML elements in the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).
  
Some elements like \<h1> are **block** elements, which means multiple \<h1> elements always appear on a new line (by default, this can be changed). But some elements like \<a> are **inline** and multiple \<a> elements display on the same line after the previous element.
  
Some elements like \<br> are also known as empty elements as they do not support any inner content, and hence do not have a closing tag.
  
Once you are done with this part of the workshop, commit your changes to your working branch and switch to **workshop/part2-css** branch where we will learn how to add colors, fix the layout and add animations to the document.
