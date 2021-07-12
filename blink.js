// this script may or may not still be demoed here:
// https://portfolio.penryu.dev/blink/

function kickoff(f, timerf) {
  setTimeout(() => {
    f();
    kickoff(f, timerf);
  }, timerf());
}

function mapOverClass(cls, f) {
  for (const e of document.getElementsByClassName(cls)) f(e);
}

function toggleVisibility(e) {
  e.style.visibility = (e.style.visibility === 'hidden')
    ? 'visible' : 'hidden';
}

function init() {
  kickoff(
    () => mapOverClass('blink', toggleVisibility),
    () => 500);
  kickoff(
    () => mapOverClass('seize', toggleVisibility),
    () => Math.random() * 100 + (Math.random() < 0.1 ? 200 : 10));
}
