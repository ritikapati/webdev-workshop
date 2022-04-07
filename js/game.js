const TRIVIA_API_URL = "https://opentdb.com/api.php?amount=1&category=11&difficulty=easy&type=multiple"; // see https://opentdb.com/api_config.php
const TENOR_API_KEY = ""; // you need to replace this with your own API key from Tenor (see https://tenor.com/gifapi)
const TENOR_API_URL = "https://g.tenor.com/v1/search?q=QUERY&key=API_KEY&limit=10".replace("API_KEY", TENOR_API_KEY);

let correct_answer = ""; // the current correct answer
let level = 1; // the current level
let lives = 3; // the number of lives remaining

function on_page_load() {
    fetch_new_question();
}

function on_question_load(question, answer_options, answer) {
    update_question_text(question);
    update_answer_buttons_text(answer_options);
    store_correct_answer(answer);
    fetch_clue_image_gif(answer);
}

function on_clue_image_gif_load(gif_data) {
    update_clue_image(gif_data);
}

function on_answer_button_click() {
    check_answer(clicked_button, on_correct_answer, on_wrong_answer);
}

function on_correct_answer() {
    highlight_answer_button(clicked_button, "green");
    after_n_seconds(function() {
        increment_level();
        update_level_heading();
        fetch_new_question();
    }, 1);
}

function on_wrong_answer() {
    highlight_answer_button(clicked_button, "red");
    after_n_seconds(function() {
        decrement_lives();
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
function fetch_new_question() {
    // TBD fetch question data from Trivia DB API then call on_question_load(question, answer_options, answer)
}

function update_question_text(question) {
    // TBD update the text of the question
}

function update_answer_buttons_text(answer_options) {
    // TBD update the text of the 4 answer buttons
}

function store_correct_answer(answer) {

}

function fetch_clue_image_gif(answer) {
    // TBD fetch clue image gif from Tenor API then call on_clue_image_gif_load(gif_data)
}

function update_clue_image(gif_data) {
    // TBD update the clue image with the gif data
}

function check_answer(clicked_button, on_correct_answer, on_wrong_answer) {
    // TBD get the text of the clicked_button and check if it matches with the correct answer then call on_correct_answer or on_wrong_answer
}

function highlight_answer_button(clicked_button, color) {
    // TBD change the color of clicked_button to the arg color and create a 1 second timer to reset the color back
}

function after_n_seconds(function_to_execute, n) {
    // TBD create a single burst timer for n seconds then call function_to_execute
}

function increment_level() {
    // TBD increment level by 1
}

function update_level_heading() {
    // TBD update the level_heading to "Level X" where X is the current level
}

function decrement_lives() {
    // TBD decrement lives by 1
}

function check_lives(on_game_over, fetch_new_question) {
    // TBD check if lives are 0 then call game_over() else fetch_new_question()
}

function hide_answer_buttons() {
    // TBD hide the 4 answer buttons
}

function go_to_homepage() {
    // TBD navigate to homepage ("index.html")
}

// TBD call on_page_load when the page loads