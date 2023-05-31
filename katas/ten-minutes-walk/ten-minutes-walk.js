// - Tienes 10 min libres
// - Cada vez que presionas una tecla, manda una array de strings de una letra, 
// representando las direcciones 
// - Solo caminas un bloque por cada letra
// - Sabes que un bloque se tarda 1 min
// - Crea una funcion que devuelva true si el paseo dura exactamente 10 min y te devuelve al punto inicial

// * Mi idea inicial es usar contrarios, N y S se anulan, al mismo tiempo que W y E. Entonces la idea es hacer un balance
// en eje X, sumando y restando y un balance para el eje Y, sumando y restando tambien, según cuantas veces aparece

const REMAINING_TIME = 10;
const MOVEMENT_VALUES = { "n": 1, "e": 1, "w": -1, "s": -1 };

function isAValidWalk(routeTaken) {
  const currentPosition = { x: 0, y: 0 };
  const exceedsTime = routeTaken.length !== REMAINING_TIME;
  if (exceedsTime) return false;

  for(let direction of routeTaken) {
    move(currentPosition, direction, findAxis(direction));
  }

  const isAtSamePosition = (currentPosition.x === 0 && currentPosition.y === 0);
  return isAtSamePosition;
}

function findAxis(direction) {
  const isYAxis = (direction === "n" || direction === "s");
  return isYAxis ? "Y" : "X";
}

function move(currentPosition, direction, axis) {
  if (axis === "X") currentPosition.x += MOVEMENT_VALUES[direction]; 
  if (axis === "Y") currentPosition.y += MOVEMENT_VALUES[direction];
}
