# Knight's Shortest Path on a Chessboard

## Project Summary
Developed a command-line algorithm to solve the shortest-path problem for a knight’s movements on a chessboard using JavaScript. This project leverages core algorithmic principles, particularly graph traversal, and applies Depth-First Search (DFS) and Breadth-First Search (BFS) to find optimal paths.

## How to Play
- **Setup**: The game runs in the command line (no graphical interface required).
  - The board is represented by an 8x8 grid with coordinates ranging from `[0,0]` to `[7,7]` (inclusive).
  - Input two positions on the chessboard: the start and end positions. The knight will calculate the shortest path using BFS.
- **Knight’s Moves**: The knight can move in an "L" shape:
  - Two squares in one direction and one square perpendicular to it, or
  - One square in one direction and two squares perpendicular.
  - Input the start and end coordinates, and the program will output the shortest path the knight will take to reach the end position.

## Project Details
- **Graph-Based Problem Representation**: The chessboard is modeled as a graph where each position is a node, connected by edges representing valid knight moves. Each move calculates the shortest path from a start square to a target square.
- **Algorithm Implementation**: Created a `knightMoves` function to return the most efficient path by exploring all potential moves using BFS. The function outputs each square the knight lands on, with minimal moves from start to end positions.
- **Edge Cases and Constraints**: Ensures moves stay within board boundaries and accounts for all shortest-path possibilities, supporting multiple valid paths when more than one shortest route exists.
- **Efficient Path Calculation**: BFS is used to find the shortest paths in an unweighted graph, ensuring optimal path-finding without redundant moves.

## Prerequisites
Before running the game, ensure that Node.js is installed on your system.

### 1. Installing Node.js
- **Download Node.js**:
  - Visit the official Node.js website: [https://nodejs.org/](https://nodejs.org/)
  - Download the appropriate version for your operating system (LTS version recommended).
- **Install Node.js**:
  - Follow the installation instructions for your operating system to install both `node` (the runtime) and `npm` (the Node package manager).

### 2. Verify Installation
- Open a terminal/command prompt and run the following commands to verify that Node.js is installed correctly:
  ```bash
  node -v
  npm -v
