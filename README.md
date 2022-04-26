# Part 1 - HTML 

HTML is the most fundamental document that gets fetched and rendered by a browser when you visit a website. You can learn more about HTML by reading the [MDN tutorial on HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML).

In this part of the workshop, the goal is to implement only the HTML of the landing page of [our game](https://hollywood-quiz.renzil.com). This means that we will add the content of our landing page to an html file, but we will not style (colors, layout, etc.) or implement the functionality (game logic).

To get started, there is a file called index.html which contains a basic HTML document without any of the page content. You should be adding tags to the <body> of this document to bring in the content of the landing page.

*NOTE: The above landing page has an audio button and difficulty slider. We will not be implementing these features as part of this workshop. I leave these features for you to explore on your own.*

## Workshop steps

0. Create a new branch from origin/workshop/part1-html
1. Add an \<h1> tag for the heading "Hollywood Quiz"
2. Add a play icon for the play button (use [Remix Icon](https://remixicon.com) to find the play icon)
3. Add an \<h2> tag for the "PLAY" that appears below the button
4. Create a file called game.html for the game page
5. Add a home icon for the home button in game.html
6. Wrap the \<h2> PLAY button in index.html inside an anchor \<a> element and link it to game.html
7. Wrap the home button in game.html inside an \<a> element and link it to index.html

## Next steps

You can play around with other HTML elements to understand how they display by default. You can find the full list of HTML elements in the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).
  
Some elements like \<h1> are **block** elements, which means multiple \<h1> elements always appear on a new line (by default, this can be changed). But some elements like \<a> are **inline** and multiple \<a> elements display on the same line after the previous element.
  
Some elements like \<br> are also known as empty elements as they do not support any inner content, and hence do not have a closing tag.
  
You can also try implementing the rest of the content of game.html on your own. It contains:
- a heading "Level 1" for the current level
- 3 heart icons for the remaining lives
- a paragraph for the question
- an image for the meme clue
- 4 text buttons for the answer options
  
Once you are done with this part of the workshop,
- commit your changes to your working branch
- push your working branch and its changes to GitHub
- deploy your branch to GitHub pages to view it live

Then switch to **workshop/part2-css** branch where we will learn how to add colors, fix the layout and add animations to the document
