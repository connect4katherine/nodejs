const fs = require('fs');

// ============================================================
// Write to file using writable stream

/*
const file = fs.createWriteStream('plain.txt');

for(let i = 0; i < 4; i++){
file.write(`Delectus mollit consectetur lomo assumenda keytar, aliquip leggings vegan etsy non. Nostrud quis velit, consectetur seitan locavore anim mixtape officia viral fugiat stumptown. Officia lomo commodo sed. Yr elit scenester, blog VHS twee aliqua fanny pack jean shorts officia sustainable. Dolor ullamco nesciunt laboris fap wes anderson aute pitchfork. Vero ut mollit DIY, viral seitan excepteur sunt mcsweeney's cliche cosby sweater before they sold out. Excepteur carles letterpress cupidatat non banh mi nisi, salvia food truck.

Keytar accusamus iphone viral, sed raw denim officia brunch mcsweeney's keffiyeh incididunt. Assumenda sed magna, brunch hoodie fanny pack delectus wolf laborum photo booth readymade veniam. Vinyl elit locavore, non dolor excepteur brooklyn hoodie lomo. Consequat enim ethical, retro commodo non craft beer mollit. Portland do high life, labore fixie non stumptown laborum messenger bag lo-fi PBR beard ut pariatur. Hoodie placeat synth cliche, tempor delectus tofu aute eiusmod keytar non mixtape wayfarers. Nesciunt terry richardson quis scenester, tempor laboris enim portland trust fund american apparel.

American apparel fap cliche, put a bird on it elit trust fund master cleanse dolore Austin helvetica. Art party anim wolf, mcsweeney's yr voluptate farm-to-table tumblr wayfarers tofu. Nulla placeat butcher, eu accusamus whatever non lomo before they sold out pitchfork you probably haven't heard of them thundercats quinoa. Tempor fixie jean shorts, hoodie excepteur yr salvia terry richardson keytar biodiesel master cleanse wes anderson. Terry richardson skateboard four loko 8-bit, ullamco twee lomo ut. Squid butcher ea velit vero, fugiat keffiyeh aute. Exercitation eu salvia, bicycle rights duis irony sustainable ex et next level williamsburg.

Sustainable mlkshk 3 wolf moon id, cliche sunt aute iphone mixtape scenester. Single-origin coffee biodiesel marfa, you probably haven't heard of them raw denim locavore exercitation. Organic thundercats adipisicing echo park, consectetur raw denim marfa tattooed. Reprehenderit put a bird on it fap williamsburg banh mi incididunt. Velit echo park high life trust fund vegan aute. Mixtape mollit jean shorts assumenda, nulla ad DIY locavore deserunt helvetica. Irony portland dreamcatcher letterpress sint, brunch terry richardson nulla trust fund banh mi.

Do you need some text for your website or whatever? *sigh* Okay…

`);
}

file.end();
*/

// ============================================================
// Read from file using a stream

const server = require('http').createServer();
server.on('request', (req, res)=>{
	const file = fs.createReadStream('plain.txt');
	file.pipe(res);
});
server.listen(3000);

