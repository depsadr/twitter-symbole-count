var text = document.querySelector('#text');
// var counterOutput = document.querySelector('.counter-output');
// var maxLength = 20;
/**
 * First Approach
 * - This approach uses too many eventListeners
 * - This isn't a good approach because it's not DRY (Don't Repeat Yourself)
 */

// text.addEventListener('keyup', () => {
//     if(text.value.length < 280) {
//         counterOutput.textContent = `Your text includes ${text.value.length} of 280 characters. You have ${(280 - text.value.length)} characters left`;
//     } 
// });
// text.addEventListener('keydown', () => {
//     if(text.value.length < 280) {
//         counterOutput.textContent = `Your text includes ${text.value.length} of 280 characters. You have ${(280 - text.value.length)} characters left`;
//     } 
// });
// text.addEventListener('change', () => {
//     if(text.value.length < 280) {
//         counterOutput.textContent = `Your text includes ${text.value.length} of 280 characters. You have ${(280 - text.value.length)} characters left`;
//     } 
// });
    

/**
 * Second Approach
 * + This approach is DRY 
 * + It use only one eventListener with a forEach array methode
 * + Addidtional it changes the color of the text by adding or removing the classList - the class is defined in the style.css file
 */

// text.addEventListener('keyup', textCounter);
// text.addEventListener('keydown', textCounter);
// text.addEventListener('change', textCounter);

['keyup', 'keydown', 'change'].forEach(e => {
    text.addEventListener(e, textCounter);
});

// function textCounter(){
//     var count = text.value.length;
//     if(count > maxLength){
//         // counterOutput.style.color = 'red';
//         counterOutput.classList.add('text-color-red');
//     } else {
//         // counterOutput.style.color = 'black';
//         counterOutput.classList.remove('text-color-red');
//     }
//     counterOutput.textContent = `Your text includes ${count} of ${maxLength} characters. You have ${(maxLength - count)} characters left`;
// }


/**
 * Third Approach
 * + uses tow functions
 * @param {text.value.length} count 
 * @param {20} maxLength 
 */
// function textCounter(count, maxLength){
//     count = text.value.length;
//     maxLength = 20;
//     function message(counterOutput){
//         // textCounter();
//         counterOutput = document.querySelector('.counter-output');
        // if(count > maxLength){
        //     counterOutput.classList.add('text-color-red');
        // } else {
        //     counterOutput.classList.remove('text-color-red');
        // }
//         return counterOutput.textContent = `Your text includes ${count} of ${maxLength} characters. You have ${(maxLength - count)} characters left`;
//     }
//     message();
// }

/**
 * Fourth Approach
 */

// var count = text.value.length;
// var maxLength = 20;

// function letterCounting() {
//     var counting = maxLength - count;
//     return counting;
// }

// function message() {
//     letterCounting();
//     var counterOutput = document.querySelector('.counter-output');
//     messageOutput = `Your text includes ${count} of ${maxLength} characters. You have ${letterCounting()} characters left`;
//     counterOutput.textContent = messageOutput;
//     return counterOutput;
// }

// function textCounter() {
//     return messsage();
// }

/** 
 * Fifth Approach
*/

function textCounter() {
    // text = text.value.slice(0, 20);
    const count = text.value.length;
    // const count = text.value.slice(0, 20);
    const textOutput = document.querySelector('#textoutput');
    // const textMessage = text.value.slice(0, 20);
    const textMessage = text.value.substring(0, 20);
    const maxLength = 20;
    const counting = maxLength - count;

    const counterOutput = document.querySelector('.counter-output');
    if(count > maxLength){
        counterOutput.classList.add('text-color-red');
    } else {
        counterOutput.classList.remove('text-color-red');
    }
    // const messageOutput = `Your text includes ${count} of ${maxLength} characters. You have ${counting} characters`;
    const messageOutput = `
    Your text includes ${count} of ${maxLength} characters. You have ${counting} characters`;
    textOutput.textContent = 'Your text: ' + textMessage;
    counterOutput.textContent = messageOutput;
}