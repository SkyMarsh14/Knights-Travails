function knightMoves(start, end) {
  const moves = [
      [2, 1], [2, -1], [-2, 1], [-2, -1],
      [1, 2], [1, -2], [-1, 2], [-1, -2]
  ];

  function bfs(start, end) {
      const queue = [[start, [start]]];
      const visited = new Set();

      while (queue.length) {
          const [currentPosition, path] = queue.shift();
          const [x, y] = currentPosition;
          if (x === end[0] && y === end[1]) {
              announcePath(path);
              return path;
          }

          visited.add(`${x},${y}`);

          const nextMoves = movePos(currentPosition, moves);

          for (let next of nextMoves) {
              const [nextX, nextY] = next;
              const posKey = `${nextX},${nextY}`;

              if (!visited.has(posKey)) {
                  queue.push([next, [...path, next]]);
              }
          }
      }

      return null; 
  }

  function announcePath(path) {
      console.log("The knight's path is:");
      path.forEach((position, index) => {
          const [x, y] = position;
          console.log(`Step ${index + 1}: [${x}, ${y}]`);
      });
  }

  return bfs(start, end);
}

function movePos(currentPos, moves) {
  const result = [];
  moves.forEach((move) => {
      const x = currentPos[0] + move[0];
      const y = currentPos[1] + move[1];
      if (x >= 0 && x < 8 && y >= 0 && y < 8) {
          result.push([x, y]);
      }
  });
  return result;
}

console.log(knightMoves([1,2],[5,5]))