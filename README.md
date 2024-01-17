# Tic Tac Toe
### Abstract:
I designed a web application in which two users with preset characters can play a game of tic-tac-toe. In this case, tic-tac-boo (the application is Halloween themed). Features of the web application include:
- Keeping track of whose turn it is (jack-o-lantern or zombie) above the gameboard
- Placing the designated current players' emoji in a square on the gameboard by clicking the desired block
- The application does not allow a player to place their emoji in a spot which is already occupied, and it remains their turn if they attempt to do so
- The application detects a win from either player or a draw
- In the event of a win, the message at the top of the screen which keeps track of whose turn it is, will change to announce the winner, and that player's win count on the sections flanking the gameboard will increase by one to reflect their win
- In the event of a draw, the message at the top of the screen will announce a draw and both players' win counts will remain the same
- In the event of a win OR a draw, the board will completely reset, but this reset will come after a 7 second pause. Delay is to ensure the players have enough time to read the announced winner/draw.
- Also, in the event of a win or draw, the board becomes 'inactive' and neither player can make a move while waiting for the board to reset
- Once the new game begins, the current player is also switched/announced at the top of the game board. 

### Installation Instructions:
1. Fork this repo and copy the SSH Key
2. Navigate to terminal and run `git clone SSH key`
3. Type `cd ticTacToe` in local terminal to navigate to root directory
4. Type `code .` to open the directory in text editor, or simply type `open index.html` to open the web application


### Preview of App:
 ![screen shot of Idea Box Web App](./assets2/Screenshot-IdeaBox.png)

### Context:
I have been learning javascript for about 5 weeks, and HTML/CSS for about 4 weeks. I spent about 2-3 hours creating the HTML/styling of this web application, and another 5 hours a day for 3 days on the functionality (javascript) of the application, for a total of just under 20 hours of worktime. 

### Contributors:
[Pareesa Kamgar-Dayhoff's GitHub](https://github.com/pareesakd1118)

### Learning Goals:
The designated learning goals are as follows:
- Solidify and demonstrate your understanding of:
- DRY JavaScript
- Event delegation to handle similar event listeners
- Understand the difference between the data model and how the data is displayed on the DOM
- Iterate through/filter DOM elements using for loops
- Use your problem solving process to break down large problems, solve things step by step, and trust yourself to not rely on an outside “answer” to a logical challenge

### Wins + Challenges:
My biggest challenge was getting started on functionality. I had a surprisingly easy time with building/designing the website, but when it came to building out all the functionality the task initially seemed insurmountable, especially because we were not delegated iterations, or steps, for how to proceed through the project. However, I was able to puesdocode the entire project into much smaller and more digestible pieces, and soon found there wasn't really any part to this project that I hadn't seen before (aside from detecting a win or setting a 'timeout'). Once I started coding, the steps for building out functionality came naturally. For each feature, I first wrote a function to update the data model, and then a second function to use the updated data model to update the DOM. Once I figured out this cadence it went surprisingly smoothly. I had a lot of self doubt beginning this project, because although I have completely understood the code written for all previous group projects, I wondered in the back of my head if I would have been able to complete the project completely solo, and this web application is proof that I can. 
