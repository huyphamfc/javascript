const word = 'bottles';
let count = 10;
while (count > 0) {
    console.log(count + ' ' + word + ' ' + 'of beer on the wall');
    console.log('Take one down, pass it around');
    count = count - 1;
    if (count == 0) {
        console.log('No more' + ' ' + word + ' of beer on the wall');
    }
}