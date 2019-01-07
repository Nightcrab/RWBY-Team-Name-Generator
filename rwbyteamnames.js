var initials = ["R","B","Y","U"];
var colours = require('./colours.json').colours;

colours = colours.map(c => c.toLowerCase());
initials = initials.map(i => i.toLowerCase());

var c1 = colours.filter(c => c.indexOf(initials[0]) !== -1);
var c2 = c1.filter(c => c.indexOf(initials[1]) !== -1);
var c3 = c2.filter(c => c.indexOf(initials[2]) !== -1);
var c4 = c3.filter(c => c.indexOf(initials[3]) !== -1);

function locations (string, substring) {
  let a = [], i = -1;
  while((i = string.indexOf(substring,i+1)) >= 0) a.push(i);
  return a;
}
for (i=0;i<c4.length;i++) {
	let teamname = c4[i] + " : "; //harvest gold
	let _initials = initials.slice(0);
	indxs = [
			c4[i].indexOf(initials[0]), //s 6
			c4[i].indexOf(initials[1]), //r 2
			c4[i].indexOf(initials[2]), //l 10
			c4[i].indexOf(initials[3])  //v 3
		];
		indxs.sort((a, b) => a - b); // 2, 3, 6, 10
		teamname += (c4[i].charAt(indxs[0])
				   + c4[i].charAt(indxs[1])
				   + c4[i].charAt(indxs[2])
				   + c4[i].charAt(indxs[3]) + ", ").toUpperCase();
	console.log(teamname);
}