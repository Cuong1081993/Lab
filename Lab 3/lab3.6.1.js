

const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 96) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Kaolas win the trophy');
} else if (scoreDolphins == scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('Both win the trophy');
} else {
    console.log('No one win the trophy');
}