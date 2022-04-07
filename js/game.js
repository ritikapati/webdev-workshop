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
    highlight_answer_button(clicked_button, "answer_button_wrong");
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
    // TBD update correct_answer with answer
}

function fetch_clue_image_gif(answer) {
    // TBD fetch clue image gif from Tenor API then call on_clue_image_gif_load(gif_url)
}

function update_clue_image(gif_url) {
    // TBD update the clue image with the gif url
}

function check_answer(clicked_button, on_correct_answer, on_wrong_answer) {
    // TBD get the text of the clicked_button and check if it matches with the correct answer then call on_correct_answer or on_wrong_answer
}

function highlight_answer_button(clicked_button, highlight_class) {
    // TBD add the highlight_class to clicked_button and create a 1 second timer to remove the class
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