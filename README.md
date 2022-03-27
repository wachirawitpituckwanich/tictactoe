<h1 align="center"> ❌ Tic Tac Toe ⭕ </h1>
<h3 align="center">🎮 Scalable Tic Tac Toe 🕹️</h3>

# About 📝
- [Click here to play](https://wachirawitpituckwanich.github.io/tictactoe/)
- Simple Tic Tac Toe game with scalable board
- Project duration : 4 days


# Tools & Resources used 💻

Website icon - [PNGREPO](https://www.pngrepo.com/svg/395329/tic-tac-toe)
<br/>

Code snippet - [Stackoverflow](https://stackoverflow.com/)
<br/>

Developed using ReactJS with CSS3 and HTML5

# Features 🌌

Upon entering the website, the website will display as follows.

![Home](/readme_img/home.PNG?raw=true)

Once input the scale for the board and pressing ENTER key or Play button the board will show up.

![Type](/readme_img/start.gif?raw=true)

Now you can start playing the game!

![Start](/readme_img/play.gif?raw=true)

Once any player get their marks in a row in any direction, the game will end. the website will then determine and annouce the winner

![Winner](/readme_img/win.gif?raw=true)

If all squares are full and there is no winner, the game will ends in a tie. the website will then display 'Tied' 

![Tied](/readme_img/draw.PNG?raw=true)

Move history can be checked in the history section below the board. Pressing the 'Go to Move #' will revert the board back to move #.

![History](/readme_img/history.gif?raw=true)

# Design & Algorithm 🧮

<h2>Figma Design</h2>

[Figma](https://www.figma.com/file/7puAByfGR6QnF0ZdzsXYie/Untitled?node-id=3%3A165)

<h2>Algorithm</h2>

In order to determine the winner, we must check that all symbols in any of the rows, columns, diagonal or counterdiagonal are identical.

firstly, we check the row by using for-loop with the condition when i is equal to width of the board, we iterate and add all element in the rows into an array and check the array using function allElementSame which will return the first element in the array if all elements in the array are identical.

secondly, we will check the row by iterating through the entire board and push all elements in the rows into an array and checking it using function allElementSame.

thirdly, we check diagonal by iterating through the entire board with the condition when i mod width + 1 equals 0, we will push the elements in to the array and checking it.

lastly, we will check counterdiagonal by we check diagonal by iterating through the entire board with the condition when i mod width - 1 equals 0, we will push the elements in to the array and checking it.

once we get the winner we will display the winner's symbol. otherwise the website will display the next player
# Local installation 📁

Use Node.js package manager [npm](https://nodejs.org/en/) to install modules needed for the project.

```bash
npm install
```
Run the project locally via npm or [yarn](https://yarnpkg.com/)
```bash
npm start
// or
yarn start
```