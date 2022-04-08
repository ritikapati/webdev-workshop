# Part 2 - CSS


> Before starting this section make sure you have completed Part 1 - HTML (see branch **workshop/part-html**). This branch contains the complete HTML implementation of index.html and game.html.

> Once you switch to this branch, a good practice is to create a new working branch from it using your GitHub username. For example I would create a new branch **renzil/part2-css** from this branch before I begin.

> You can find instructions for the above steps in the **main** branch.

HTML by itself does not look great. To improve the appearance of your HTML elements, you need to style them using CSS. You can learn more about CSS by reading the [MDN docs on CSS](https://developer.mozilla.org/en-US/docs/Web/CSS).

In this part of the workshop, the goal is to implement the CSS of the landing page of [our game](https://hollywood-quiz.renzil.com). This means that we will add all the relevant CSS rules to get the look and feel we want to our index.html.

To get started, inside index.html there is a tag called \<style> where you need to start adding styles. You will also find this tag inside game.html.

> *NOTE: The above game link has a couple of features we will not be implementing in this workshop (music & difficulty slider).I leave these features for you to explore on your own.*
  
To live test the code in Gitpod run the following command in a terminal:

```npx browser-sync -w```

Once it starts running, open port 3000 in a new browser window through the *Remote Explorer* view in Gitpod.

## Workshop steps

1. Change colour of headings and button using **color** property.
2. Change font family of headings using **font-family** property.
3. Change font size of headings using **font-size** property.
4. Center all text and buttons using **text-align** property.
5. Vertically align the content using **flex** properties.
6. Set a background image using **background** property.
7. Animate background image using **animation** property.
8. Make background larger for large screens using **media queries**.

## Next steps

You can play around with other CSS properties and selectors to understand how they affect the output. You can find the full CSS reference in the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference).

Mastering CSS can make your websites look great.

Play around with [typography](https://css-tricks.com/typography-for-developers/), [gradients](https://cssgradient.io/), [filters](https://alligator.io/css/css-filter-examples/) and [animations](https://css-tricks.com/almanac/properties/a/animation/) to make unique stunning designs.

Learn to create pixel-perfect layouts by understanding these concepts:
- [CSS box model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model) which determines how elements are rendered using margins, borders, padding and width / height
- different values of [CSS position property](https://developer.mozilla.org/en-US/docs/Web/CSS/position) which determines how elements are positioned in the page
- CSS *flex* and *grid* to create common layouts; [Flexbox Froggy](https://flexboxfroggy.com/) is a great way to learn flex

  
You can also try implementing the rest of the styles for game.html on your own. You will need to:
- put the home button, level heading and hearts on the same line and position them correctly (we call this top line a navbar)
- center the text of the question and answer buttons
- set the size and look of the answer buttons
- set the fonts and colors of all text
- set the vertical flex layout of the entire document to span the height
  
Once you are done with this part of the workshop,
- commit your changes to your working branch
- push your working branch and its changes to GitHub
- switch to **workshop/part3-javascript** branch where we will learn how to load the question and answers from an API, and handle user button clicks using Javascript
