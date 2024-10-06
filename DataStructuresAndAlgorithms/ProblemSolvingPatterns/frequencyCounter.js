"use strict";
// given two strings, write a function to determine if the second string is an anagram of the first. 
function anagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let counter1 = {};
    let counter2 = {};
    for (let char of str1) {
        counter1[char] = (counter1[char] || 0) + 1;
    }
    for (let char of str2) {
        counter2[char] = (counter2[char] || 0) + 1;
    }
    for (let key in counter1) {
        if (!(key in counter2) || counter1[key] !== counter2[key]) {
            return false;
        }
    }
    return true;
}
console.log(anagram("abc", "cba"));
