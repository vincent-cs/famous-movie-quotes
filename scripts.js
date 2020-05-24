"use strict";

const scripts = [
    "You had me at hello.",
    "I volunteer as tribute.",
    "Somebody like you can really make things all right for me.",
    "Say hello to my little friend!",
    "That’s so Fetch.",
    "May the Force be with you.",
    "I’ll be back.",
    "A Martini, shaken, not stirred.",
    "Magic mirror on the wall, who is the fairest one of all?",
    "You talking to me?",
    "Here’s Johnny!",
    "Toto, I’ve a feeling we’re not in Kansas anymore.",
    "To infinity and beyond!",
    "Just keep swimming!",
    "I see dead people.",
    "Houstin, we have a problem.",
    "A boy’s best friend is his mother.",
    "Listen to them. Children of the night. What music they make.",
    "I feel the need - the need for speed!",
    "I'm king of the world!",
    "I am Groot",
    "This is Sparta!",
    "Play with matches, you get burned",
    "Choice. The problem is choice",
    "Wax on. Wax off."
];

const movies = [
    "The Wizard of Oz",
    "Jessica Rabbit",
    "Appollo 13",
    "Toy Story",
    "Scarface",
    "300",
    "The terminator",
    "The matrix reloaded",
    "The shining",
    "Titanic",
    "Goldfinger",
    "Taxi driver",
    "Jerry Maguire",
    "Mean Girls",
    "Dracula",
    "Psycho",
    "Requiem for a dream",
    "Sixth Sense",
    "Top Gun",
    "Guardians of the Galaxy",
    "Snow White and the Seven Dwarfs",
    "Finding Nemo",
    "Start Wars",
    "Pulp Fiction",
    "Karate Kid"
];

const divContainer = document.getElementById("container");
divContainer.innerHTML = scripts.map((quote, index) => {
    return '' +
        '<div class="row" id="r' + index + '">' +
        '<div class="column1">' +
        '<div class="quoteClass" id="q' + index + '">' + quote + '</div>\n' +
        '</div>\n' +
        '<div class="column2">' +
        '<div class="movieClass" id="m' + index + '">' + movies[index] + '</div>' +
        '</div>\n' +
        '</div>\n'
}).join('') + '<div class="row"></div>';

let quote_selected = null;

document.addEventListener('click', function (event) {

        let clickedElem = event.target;
        // Log the clicked element in the console
        // console.log(clickedElem);

        // clicked on quote text
        if (clickedElem.classList.contains('quoteClass')) {
            // toggle if class is solved for clicked element
            if (clickedElem.classList.contains('solved')) {
                // remove class solved for quote and movie
                clickedElem.classList.remove('solved');
                const movie_id = 'm' + clickedElem.id.valueOf().toString().substring(1);
                document.getElementById(movie_id).classList.remove('solved');
            }
            // remove class selected from previous quote
            if (quote_selected) {
                quote_selected.classList.remove('selected');
            }
            // save clicked element in quote_selected and add class selected
            quote_selected = clickedElem;
            quote_selected.classList.add('selected');
        }

        // clicked on movie text
        if (clickedElem.classList.contains('movieClass')) {
            // don't change movies with class is already solved
            if (!clickedElem.classList.contains('solved')) {
                // switch movie text from clicked element to selected quote element
                // first check if a quote is selected and if it's class is not already solved
                if (quote_selected && !quote_selected.classList.contains('solved')) {
                    // saved clicked movie id and text in temp value
                    const temp_id = clickedElem.id.valueOf().toString();
                    const temp_text = document.getElementById(temp_id).innerText;
                    // construct movie_id from quote_id from the quote_selected
                    const quote_id = quote_selected.id.valueOf().toString();
                    const movie_id = 'm' + quote_id.substring(1);
                    // switch the movie text of clicked id with selected quote id
                    document.getElementById(temp_id).innerText = document.getElementById(movie_id).innerText;
                    document.getElementById(movie_id).innerText = temp_text;
                    // mark quote and related movie with class solved
                    document.getElementById(movie_id).classList.add('solved');
                    document.getElementById(quote_id).classList.add('solved');
                }
            }
        }

    },
    false
);
