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
let quote_id = null;
let movie_id = null;
let row_id = null;

document.addEventListener('click', function (event) {

        let clickedElem = event.target;
        // Log the clicked element in the console
        // console.log(clickedElem);

        if (clickedElem.classList.contains('quoteClass')) {
            if (clickedElem.classList.contains('y')) {
                clickedElem.classList.remove('y');
                if (quote_selected) {
                    quote_selected.classList.remove('x');
                }
                quote_selected = null;
                movie_id = 'm' + clickedElem.id.valueOf().toString().substring(1);
                document.getElementById(movie_id).classList.remove('y');
            }

            clickedElem.classList.add('x');
            if (quote_selected) {
                quote_selected.classList.remove('x');
            }
            quote_selected = clickedElem;
            quote_id = quote_selected.id.valueOf().toString();
            console.log(quote_id);
        }

        if (clickedElem.classList.contains('movieClass')) {
            if (quote_selected) {
                movie_id = 'm' + quote_id.substring(1);
                let temp_id = clickedElem.id.valueOf().toString();
                let temp_text = document.getElementById(temp_id).innerText;
                document.getElementById(temp_id).innerText = document.getElementById(movie_id).innerText;
                document.getElementById(movie_id).innerText = temp_text;
                document.getElementById(movie_id).classList.add('y');
                document.getElementById(quote_id).classList.add('y');
            }
        }

    },
    false
);
