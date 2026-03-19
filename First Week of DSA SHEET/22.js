// Accept an English alphabet from user and check if it is a consonant or a vowel.

function consVowel(alphabet){
   
    if("a" === alphabet || "e" ===alphabet ||"i" === alphabet ||"o" === alphabet ||"u"===alphabet){
        return `This is VOWEL:${alphabet}`
    }else{
        return `This is CONSTANT : ${alphabet}`
    }
}
console.log(consVowel("f"))