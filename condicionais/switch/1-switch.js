const fruta = 'jaca';

switch (fruta){
    case 'banana':
        console.log('R$ 3,00 / kg');
        break;
    case 'mamão':
        console.log('R$ 5,00 / kg');
        break;
    case 'pera':
        console.log('R$ 6,00 / kg');
        break;
    default:
        console.log('Produto não exsite no estoque');
        break;
}