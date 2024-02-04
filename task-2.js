// You are given an array of numbers. Count how many times the a number is repeated in the array. 

// sample-input: 
// numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2


// function repeated(numbers){
//     const unique = [];
//     for(const item of numbers){
//         if(unique.includes(item)===false){
//             unique.push(item);
//         }
//     }
//     return unique;
// }

// const uniqueArray = repeated([5,6,11,12,98, 5]);
// console.log(uniqueArray);




function repeated(numbers){
    let count = 0;
    for(const num of numbers){
        if(num ===target){
            count++;
        }
    }
    return count;
}

const numbers = [5,6,11,12,98, 5];
const target = 5;
const output = repeated(numbers, target)
console.log('repeated', output)
