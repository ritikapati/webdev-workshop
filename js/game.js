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

function on_clue_image_gif_load(gif_url) {
    update_clue_image(gif_url);
}

function on_answer_button_click() {
    check_answer(clicked_button, on_correct_answer, on_wrong_answer);
}

function on_correct_answer() {
    highlight_answer_button(clicked_button, "answer_button_correct");
    after_n_seconds(function() {
        increment_level();
        update_level_heading();
        fetch_new_question();
    }, 1);
}

function on_wrong_answer() {
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
    if (clicked_button.textContent === correct_answer) {
        on_correct_answer(clicked_button);
    } else {
        on_wrong_answer(clicked_button);
    }
}

function highlight_answer_button(clicked_button, highlight_class) {
    clicked_button.classList.add(highlight_class);
    setTimeout(function() {
        clicked_button.classList.remove(highlight_class);
    }, 1000);
}

function after_n_seconds(function_to_execute, n) {
    setTimeout(function_to_execute, n * 1000);
}

function increment_level() {
    level = level + 1;
}

function update_level_heading() {
    document.getElementById("level_heading").textContent = "Level " + level;
}

function decrement_lives() {
    lives = lives - 1;
}

function update_hearts() {
    let hearts = document.getElementsByClassName("ri-heart-3-fill");
    hearts[hearts.length-1].className = "ri-heart-3-line";
}

function check_lives(on_game_over, fetch_new_question) {
    if (lives === 0) {
        on_game_over();
    } else {
        fetch_new_question();
    }
}

function hide_answer_buttons() {
    let answer_buttons = document.getElementsByClassName("answer_button");
    for (let i = 0; i < answer_buttons.length; ++i) {
        answer_buttons[i].style.visibility = 'hidden';
    }
}

function go_to_homepage() {
    window.location.href = "index.html";
}

window.onload = on_page_load;