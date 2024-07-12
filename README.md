# Basketball Player Cards

This is a simple React application that displays information about basketball players in a card format. Each card shows the player's name, image, position, and stats such as points per game, assists per game, and rebounds per game.

## Features

- Displays player cards with name, image, position, and stats.
- Cards are arranged horizontally and centered on the page.
- Dynamic generation of player cards based on data.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/) (Node package manager)

### Installation

1. Clone the repository:

```sh
git clone https://github.com/your-username/basketball-player.git
```

2. Start the Project

cd basketball-player
npm install
npm start

3. Project Structure

src/: Contains the source code for the React application.
App.js: Main component that renders the player cards.
BasketballPlayerCard.js: Component that defines the structure of a player card.
BasketballPlayerCard.css: CSS file for styling the player cards and the container.

4. Component Overview

BasketballPlayerCard Component
The BasketballPlayerCard component accepts the following props:

name (string): The player's name.
image (string): URL to the player's image.
position (string): The player's position.
stats (object): An object containing the player's stats (e.g., { pointsPerGame: 25.4, assistsPerGame: 7.1, reboundsPerGame: 10.5 }).

5. Contributing
   Feel free to submit issues and pull requests. Any contributions are welcome!

6. License
   This project is licensed under the MIT License. See the LICENSE file for more information.
