class Validation {
    properCase() {
        let input = this.name.toLowerCase();
        console.log("input>>", input);
        let arr = input.split(" ");
        console.log("split>>", arr);
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
             return  " Email : " + this.validEmail + "," + " isValidemail: " +  true;
            
        } else {return " isValidemail: " + false;}
    } 
}
module.exports = Validation;