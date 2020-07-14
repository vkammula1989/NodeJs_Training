class ReverseString {
    constructor(str) {
        this.val = str
    }
    getReverseString() {
        var splitString = this.val.split("");
        var reverseArray = splitString.reverse(); 
        var joinArray = reverseArray.join(""); 
        return joinArray; 
    }
}

module.exports= ReverseString