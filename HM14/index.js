hero = ['Ivan'];
native = ['York','Of'];
destination = ['Poltava','In'];

rainbow = hero.concat(native, destination);
rainbow.reverse();


rainbow.splice(0, 2);
rainbow.pop()
rainbow.push('Gave','Battle', destination[1], 'Vain');
rainbow.unshift('Richard')

console.log(rainbow);

colors = ['red', 'orange', 'yellow', 'green', 'blue', 'darkBlue' ,'violet', ];

divColors = [];

for (let i = 0; i < rainbow.length; i++) {
    divColors.push(`<div class="card">
    <div class="circle ${colors[i]}"></div>
    <div>${rainbow[i]}</div>
  </div>`)
}

document.write(`
    <div class="wrap">
    ${divColors.join('')}
    </div>
`);
