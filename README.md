# Part 3 - Javascript

> Before starting this section make sure you have completed Part 2 - CSS (see branch **workshop/part2-css**).
> 
> This branch contains the complete CSS implementation of index.html and game.html.
> 
> The CSS has been put into separate files index.css and game.css located in the styles directory, along with a common.css file that is shared between index.html and game.html. This is a good practice once you have multiple pages with common styles.
> 
> Once you switch to this branch, a good practice is to create a new working branch from it using your GitHub username. For example I would create a new branch **renzil/part3-javascript** from this branch before I begin.

Check out our website in the browser preview - it looks pretty good now! But the buttons don't do anything. To implement the webpage logic, you need to use the programming language of the web - Javascript. You can learn the basics of Javascript by reading this [MDN tutorial](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript).

In this part of the workshop, the goal is to implement the logic of the game.html page of [our game](https://hollywood-quiz.renzil.com).

I usually start coding from scratch by writing down pseudocode. Pseudocode basically captures what (logic) we are planning to implement, without worrying about the how (language).

You can use any language you are comfortable with to write pseudocode (I prefer plain English).

You can view my pseudocode in js/game.pseudo.yml. I like to write it in the form of "when event X happens, do steps A, B, C ...".

> Check out the file js/game.pseudo.yml in the branch **workshop/part3-javascript-step1-pseudocode** to see how I first wrote the pseudocode without any javascript.
> 
> Please note that I did not come up with the perfect pseudocode in one shot, but a rough sketch initially. Then I kept updating the pseudocode as I implemented the Javascript.

This makes it very easy to translate pseudocode into high-level code using only functions (functional programming). It also creates a natural event-driven approach to programming that is very easy to implement later.

> Check out the file js/game.js in the branch **workshop/part3-javascript-step2-functional** to see how the pseudocode is directly converted into high-level javascript functions.
> 
> Notice how the pseudocode is relatively easier to read and understand what's going on, whereas Javascript code is not.

Once you have the high-level functional code, you can identify the data you will need across functions and create global variables to store them. See the globals at the top of js/game.js in the current branch.

Let's implement the functions with TBD comments in js/game.js! To help you out, I have put some hints in the JS file which you can directly Google.

> *NOTE: The above game link has a couple of features we will not be implementing in this workshop (music & difficulty slider). I leave these features for you to explore on your own.*
  
To live test the code in Gitpod run the following command in a terminal:

```npx browser-sync -w```

Once it starts running, open port 3000 in a new browser window through the *Remote Explorer* view in Gitpod.

## Workshop steps

1. Call on_page_load when the web page finishes loading
2. [Get an API key from tenor](https://tenor.com/developer/keyregistration) and set it as the global variable TENOR_API_KEY
3. Implement fetch_new_question
4. Implement update_question_text
5. Implement update_answer_buttons_text
6. Implement store_correct_answer
7. Implement fetch_clue_image_gif
8. Implement update_clue_image

> At this point check your website. Everytime you reload, a new question, image and answer button options should appear. Next we need to handle the answer button click handler.

10. Implement register_answer_button_clicks
11. Implement check_answer
13. Implement highlight_answer_button
14. Implement after_n_seconds
15. Implement increment_level
16. Implement update_level_heading
18. Implement decrement_lives
19. Implement update_hearts
20. Implement check_lives
21. Implement on_game_over
22. Implement hide_answer_buttons
23. Implement go_to_homepage

## Next steps

Always start by writing down what you are planning to implement in some form of pseudocode. This does not require you to learn any language - just use whatever you know to express how you think the game should behave.

Once you do this, how you are planning to implement the pseudocode is just a language / syntax problem. This is true whether you are coding Javascript, C++, Python, Basic or anything else.

Your first programming language will take some more time to learn. But most languages have a lot in common, so learning one really well automatically skills you up in most of the other languages.

In this workshop you would have learned a lot of the fundamentals of Javascript. What you didn't do is write the pseudocode on your own.

Practice writing pseudocode for other program ideas you have, and then writing the high-level functional code of the same pseudocode in a real programming language like Javascript.

To master Javascript, you should get familiar with advanced concepts like:
- [closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [promises and async/await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)
- [classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [inheritance and prototype-chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
  
Every new concept takes time to learn, so be realistic about your learning expectations.

Once you are done with this part of the workshop:
- commit your changes to your working branch
- push your working branch and its changes to GitHub
- switch to **workshop/completed** branch to view the complete implementation of the game
