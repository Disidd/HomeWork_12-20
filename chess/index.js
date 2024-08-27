TRs = [];
alphabet = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h'];

for (tr = 10; tr >= 1; tr--) {
  TDs = [];
  for (td = 1; td <= 10; td++){
    data = '';

    if ((td === 1|| td ===10) && tr !== 1 && tr !== 10) {
      data = tr - 1;
    }

    if ((tr === 1 || tr === 10) && td !== 1 && td !== 10) {
      data = alphabet[td - 2];
    }

    TDs.push(`<td>${data}</td>`);
  }

  TRs.push(`<tr>${TDs.join('')}</tr>`);
}

document.write(`<table class='chess'>${TRs.join('')}</table>`);