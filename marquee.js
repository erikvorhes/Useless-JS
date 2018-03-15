/**
 * This marquee stuff is deliberately low-tech. Use at your own risk.
 *
 * Usage: `marquee();`
 * Optional params follow <marquee /> attribute names & values.
 */

function marquee(behavior, direction) {
  var behaviors = ['scroll', 'slide', 'alternate'];
  var directions = ['left', 'right', 'up', 'down'];

  var marquee = document.createElement('marquee');
  if (behavior && behaviors.includes(behavior)) {
    marquee.behavior = behavior;
  }
  if (direction && directions.includes(direction)) {
    marquee.direction = direction;
  }
  marquee.innerHTML = document.body.innerHTML;

  document.body.innerHTML = '';
  document.body.appendChild(marquee);
  console && console.log('Enjoy.');
}
