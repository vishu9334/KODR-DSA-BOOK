// Question 22 using Switch (Check Consonant or Vowel using Switch)
function vowelCons(alpha){
    switch (alpha.toLowerCase().toString()) {
        case 'a':
        case 'e':   
        case 'i':
        case 'o':
        case 'u':
            console.log("Vowel")
            break;

        case 'b':
        case 'c':        
        case 'f':
        case 'g':
        case 'h':
        case 'i':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
        case 'n':
        case 'o':
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 't':
        case 'u':
        case 'v':
        case 'w':
        case 'x':
        case 'y':
        case 'z':
            console.log("Constant")
            break;
    
        default:
            break;
    }
}
vowelCons('a')