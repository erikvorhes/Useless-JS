function color_from_hue(hue) {
  var h = hue / 60;
  var c = 255;
  var x = (1 - Math.abs(h % 2 - 1)) * 255;
  var color;

  var i = Math.floor(h);
  if (i == 0) color = rgb_to_hex(c, x, 0);
  else if (i == 1) color = rgb_to_hex(x, c, 0);
  else if (i == 2) color = rgb_to_hex(0, c, x);
  else if (i == 3) color = rgb_to_hex(0, x, c);
  else if (i == 4) color = rgb_to_hex(x, 0, c);
  else color = rgb_to_hex(c, 0, x);

  return color;
}

function rgb_to_hex(red, green, blue) {
  var h = ((red << 16) | (green << 8) | (blue)).toString(16);
  while (h.length < 6) h = '0' + h;
  return '#' + h;
}

function rainbowize(text) {
  let hue = 0;
  let step = 0;

  if (text.length > 0) {
    step = 360 / (text.length);
  }

  let rainbowtext = document.createElement('span');
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) === '\n') {
      continue;
    }
    const child = document.createElement('span');
    child.setAttribute('style', `color: ${color_from_hue(hue)}`);
    child.innerText = text.charAt(i);
    rainbowtext.appendChild(child);
    hue += step;
  }

  return rainbowtext;
}

function makeRainbow() {
  let n = null;
  const nodes = [];
  let walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  while (n = walk.nextNode()) {
    nodes.push(n);
  }

  for (let j = 0; j < nodes.length; j++) {
    const parent = nodes[j].parentNode
    parent.removeChild(nodes[j])
    parent.appendChild(rainbowize(nodes[j].textContent));
  }
}
