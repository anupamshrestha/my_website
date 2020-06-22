
   exports.properCase = (name) => {
        let input = name.toLowerCase();
        let arr = input.split(" ");
        let final = "";
        for(let d of arr) {
           let firstLetter =  d.slice(0,1);
           final += d.replace(firstLetter, firstLetter.toUpperCase()) + " ";
    
        }
        return final;
    }
    
    
    // exports.module = emailvalidator() {
    //     let checkEmail = /\S+@\S+\.\S+/;
    //     console.log(checkEmail.test(this.validEmail));
    //     if (checkEmail.test(this.validEmail)) {
    //          return  " Email : " + this.validEmail + "," + " isValidemail: " +  true;
            
    //     } else {return " isValidemail: " + false;}
    // } 

