function knightMoves(start, target) {
    const knightMoves = [
      [2, 1], [2, -1], [-2, 1], [-2, -1],
      [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];
  
    // If start equals target, return the start position
    if (start[0] === target[0] && start[1] === target[1]) return [start];
  
    // Validate coordinates are within the 8x8 board
    const isValidCoordinate = (arr) => arr.every(item => item >= 0 && item <= 7);
  
    if (!isValidCoordinate(start) || !isValidCoordinate(target)) {
      throw new Error("Invalid coordinate");
    }
  
    // Recursive function to make moves
    function makeMove(current, path = [], visited = new Set()) {
      path.push(current);
  
      // If the target is reached, return the path
      if (current[0] === target[0] && current[1] === target[1]) {
        return path;
      }
  
      let nextMoves = [];
  
      // Loop through all possible knight moves
      knightMoves.forEach((move) => {
        let x = move[0] + current[0];
        let y = move[1] + current[1];
  
        if (x <= 7 && x >= 0 && y <= 7 && y >= 0) {
          let newPos = [x, y];
          let posString = `${x},${y}`;
  
          // Only add the position if it hasn't been visited
          if (!visited.has(posString)) {
            nextMoves.push(newPos);
            visited.add(posString);  // Mark the position as visited
          }
        }
      });
  
      // Explore each valid next move recursively
      for (let i = 0; i < nextMoves.length; i++) {
        let result = makeMove(nextMoves[i], [...path], visited);
        if (result) return result;  // Return the successful path if found
      }
  
      return null;  // Return null if no path found
    }
  
    // Call the makeMove function and return the result
    return makeMove(start);
  }
  

let start=[0,0];
let end=[7,7];
console.log(knightMoves(start,end));
