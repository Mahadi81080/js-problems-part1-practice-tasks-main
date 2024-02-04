// ### Task-3: 
// Write a function to count the number of vowels in a string.

function countVowels(str){
    const vowels = ['a', 'e','i','o','u']
    let count = 0;
    for(const num of str){
        if(vowels.includes(num.toLowerCase())){
            count++;
        }
    }
    return count;
}

const bookName ='microwave radar and navigation';
const output = countVowels(bookName);
console.log('count vowels',output)