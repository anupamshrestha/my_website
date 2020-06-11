class Validation {
    constructor (name, validEmail) {
        this.name = name;
        this.validEmail = validEmail;
    }
    properCase() {
        let input = this.name.toLowerCase();
        let arr = input.split(" ");
        let final = "";
        for(let d of arr) {
           let firstLetter =  d.slice(0,1);
           final += d.replace(firstLetter, firstLetter.toUpperCase()) + " ";
    
        }
        return final
    }
    
    emailvalidator() {
        let checkEmail = /\S+@\S+\.\S+/;
        console.log(checkEmail.test(this.validEmail));
        if (checkEmail.test(this.validEmail)) {
        
    } 
   
}
}
module.exports = new Validation();



