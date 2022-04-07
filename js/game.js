const TRIVIA_API_URL = "https://opentdb.com/api.php?amount=1&category=11&difficulty=easy&type=multiple"; // see https://opentdb.com/api_config.php
const TENOR_API_KEY = ""; // you need to replace this with your own API key from Tenor (see https://tenor.com/gifapi)
const TENOR_API_URL = "https://g.tenor.com/v1/search?q=QUERY&key=API_KEY&limit=10".replace("API_KEY", TENOR_API_KEY);

let correct_answer = ""; // the current correct answer
let level = 1; // the current level
let lives = 3; // the number of lives remaining

function on_page_load() {
    register_answer_button_clicks();
    fetch_new_question();
}

function on_question_load(question, answer_options, answer) {
    update_question_text(question);
    update_answer_buttons_text(answer_options);
    store_correct_answer(answer);
    fetch_clue_image_gif(answer);
}

function on_clue_image_gif_load(gif_url) {
    update_clue_image(gif_url);
}

function on_answer_button_click(clicked_button) {
    check_answer(clicked_button, on_correct_answer, on_wrong_answer);
}

function on_correct_answer(clicked_button) {
    highlight_answer_button(clicked_button, "answer_button_correct");
    after_n_seconds(function() {
        increment_level();
        update_level_heading();
        fetch_new_question();
    }, 1);
}

function on_wrong_answer(clicked_button) {
    decrement_lives();
    update_hearts();
    highlight_answer_button(clicked_button, "answer_button_wrong");
    after_n_seconds(function() {
        check_lives(on_game_over, fetch_new_question);
    }, 1);
}

function on_game_over() {
    update_question_text("GAME OVER!");
    fetch_clue_image_gif("game over");
    hide_answer_buttons();
    after_n_seconds(go_to_homepage, 3);
}

// Event functions
function register_answer_button_clicks() {
    // TBD register event handlers to call on_answer_button_click with the clicked_button when a button is clicked
    // HINT: "javascript register button click handler"
}

function fetch_new_question() {
    // TBD fetch question data from Trivia DB API then call on_question_load(question, answer_options, answer)
    // HINT: "javascript fetch api"
}

function update_question_text(question) {
    // TBD update the text of the question
    // HINT: "javascript find element by id", "javascript update element text"
}

function update_answer_buttons_text(answer_options) {
    // TBD update the text of the 4 answer buttons
    // HINT: "javascript find elements by class", "javascript update element text"
}

function store_correct_answer(answer) {
    // TBD update correct_answer with answer
    // HINT: "javascript assignment operator"
}

function fetch_clue_image_gif(answer) {
    // TBD fetch clue image gif from Tenor API then call on_clue_image_gif_load(gif_url)
    // HINT: "javascript fetch api"
}

function update_clue_image(gif_url) {
    // TBD update the clue image with the gif url
    // HINT: "javascript find element by id", "javascript update image url"
}

function check_answer(clicked_button, on_correct_answer, on_wrong_answer) {
    // TBD get the text of the clicked_button and check if it matches with the correct answer then call on_correct_answer or on_wrong_answer
    // HINT: "javascript get button element text", "javascript if else statement"
}

function highlight_answer_button(clicked_button, highlight_class) {
    // TBD add the highlight_class to clicked_button and create a 1 second timer to remove the class
    // HINT: "javascript add a class to element", "javascript timers", "javascript remove class from element"
}

function after_n_seconds(function_to_execute, n) {
    // TBD create a single burst timer for n seconds then call function_to_execute
    // HINT: "javascript timers"
}

function increment_level() {
    // TBD increment level by 1
    // HINT: "javascript arithmetic operators", "javascript increment by 1"
}

function update_level_heading() {
    // TBD update the level_heading to "Level X" where X is the current level
    // HINT: "javascript string concatenation", "javascript find element by id", "javascript update element text"
}

function decrement_lives() {
    // TBD decrement lives by 1
    // HINT: "javascript arithmetic operators", "javascript decrement by 1"
}

function update_hearts() {
    // TBD update the hearts to show remaining lives (use ri-heart-3-line class for empty heart)
    // HINT: "javascript replace element class"
}

function check_lives(on_game_over, fetch_new_question) {
    // TBD check if lives are 0 then call game_over() else fetch_new_question()
    // HINT: "javascript if else statement"
}

function hide_answer_buttons() {
    // TBD hide the 4 answer buttons
    // HINT: "javascript get html elements by class", "javascript hide elements"
}

function go_to_homepage() {
    // TBD navigate to homepage ("index.html")
    // HINT: "javascript navigate to a different page"
}

// TBD call on_page_load when the page loads
// HINT: "javascript run code after page load"