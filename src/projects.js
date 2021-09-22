import guessingGame from "./Number-guessing-game.webm";
import calculator from "./Calculator.webm";
import scans from "./3D-scans.webm";
import movieGenerator from "./Random-movie-generator.webm";
import reactionTest from "./Reaction-test.webm";
import ticTacToe from "./Tic-tac-toe.webm";

const projects = [
  {
    name: "3D scans website",
    description:
      "I have created this website for my side gig. It's a single page application that answers all the possible questions that the potential customer could have. I utilized firebase database to store the messages and I hosted it using Forpsi FTP.",
    emoji: "&#128247;",
    video: scans,
    github: "https://github.com/tomaseke/3Dsken",
    githubPages: "https://www.3dskeny.cz/",
  },
  {
    name: "Random movie generator",
    description:
      "I had enough of scrolling through recommended movie lists and not being able to choose a movie to watch. So I created a very minimalistic app that generates a random movie for you and you watch that. I used TMDB (The Movie Database) API to fetch the random movie. In the future I plan to create filters to customize the randomly generated movie.",
    emoji: "🎥",
    video: movieGenerator,
    github: "https://github.com/tomaseke/Random-movie-generator",
    githubPages: "https://tomaseke.github.io/Random-movie-generator/",
  },
  {
    name: "Reaction test",
    description:
      "This project is exactly what it sounds like. It tests your reaction time by changing the background color of the screen after a random time in range between 1-5 seconds and once the screen color changes, you should click the screen as fast as possible. After you click the screen, you will be shown your time. I plan to adjust your time for the refresh rate of your monitor and make a leaderboard to display results.",
    emoji: `&#9201;`,
    video: reactionTest,
    github: "https://github.com/tomaseke/Reaction-test",
    githubPages: "https://tomaseke.github.io/Reaction-test/",
  },
  {
    name: "Number guessing game",
    description:
      "This is a simple game where you try to guess the number that your device will randomly generate. You can also select the range in which the number will be generated. The game will calculate what is the chance of guessing the number correctly. To activate wife mode, press w. To deactivate it press w again.",
    emoji: "&#x1f522;",
    video: guessingGame,
    github: "https://github.com/tomaseke/number-guessing-game",
    githubPages: "https://tomaseke.github.io/number-guessing-game/",
  },
  {
    name: "Tic tac toe",
    description:
      "Pretty self explanatory right. It was a great mental exercise to come up with the game logic on my own, not googling the solution. I used svgs for the X,O symbols to improve performance. If this portfolio is live, I am probably working on multiplayer version you can play with your friends on the other side of the world using Sockets.io.",
    emoji: "⁣⭕❌",
    video: ticTacToe,
    github: "https://github.com/tomaseke/Tic-tac-toe",
    githubPages: "https://tomaseke.github.io/Tic-tac-toe/",
  },
  {
    name: "Iphone calculator replica",
    description:
      "I was annoyed that iphone has such a good looking calculator but it doesn't have a delete button just for the last digit you typed. Instead it has clear all. So i stole the design and implemented the feature.",
    emoji: "&#128425;",
    video: calculator,
    github: "https://github.com/tomaseke/Calculator",
    githubPages: "https://tomaseke.github.io/Calculator/",
  },
];

export default projects;
