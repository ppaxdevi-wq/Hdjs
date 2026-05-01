// Detect chess pieces from DOM
function getPieces() {
  const pieces = document.querySelectorAll('[class*="piece"]');
  const data = [];

  pieces.forEach(p => {
    const classes = p.className;
    const rect = p.getBoundingClientRect();

    data.push({
      piece: classes,
      x: rect.x,
      y: rect.y
    });
  });

  return data;
}

// Highlight pieces
function highlightPieces() {
  const pieces = document.querySelectorAll('[class*="piece"]');

  pieces.forEach(p => {
    p.style.boxShadow = "0 0 10px red";
  });
}

// Run continuously
setInterval(() => {
  const board = getPieces();
  console.log("Pieces:", board);

  highlightPieces();
}, 2000);
