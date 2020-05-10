var marka = 'Opel';
var model = 'Astra';
var otomatik = 'yes';

/* If/else Statement */

/*
if (otomatik == 'yes') {
    console.log('Araç otomatiktir.');
} else {
    console.log('Araç otomatik değildir.');
}

otomatik = true;

if (otomatik) {
    console.log(marka + ' ' + model + ' otomatik');
}

if (otomatik == 'true') {
    console.log("true");
}

if (10 === '10') {
    console.log('sayılar eşit');
}
*/




/* Switch statement */

// 1 : manuel
// 2 : otomatik
var vites = '2';

if (vites == '1') {
    console.log('Araç manuel.');
} else if (vites == '2') {
    console.log('Araç otomatik.');
} else {
    console.log('Yanlış bir değer.');
}


vites = '2';
switch (vites) {
    case '1':
        console.log('Araç manuel.');
        break;
    case '2':
    case '3':
        console.log('Araç otomatik.');
        break;
    default:
        console.log('Yanlış bir değer.');
}