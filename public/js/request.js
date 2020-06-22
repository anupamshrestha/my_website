// const Validation = require("./validation");
// let validation = require("./controller/validation");

class Request {
  getFormData() {
    var values = {};
    $.each($('#contactForm').serializeArray(), function(i, field) {
        values[field.name] = field.value;
      });
      // values.full_name = validation.properCase(values.full_name);
      // console.log("Full Name>>", values);
      return values;
    }
      

    sendEmail() {
    let data = this.getFormData(this);
    // console.log("data>>", data);


    $.ajax({url: `/api/mail`, method:"POST", data}).done(()=>{
        swal({
            title: "Thank you!!",
            text: "I will reach out to you shortly.",
            type: "success",
          }, function () {
            setTimeout(function () {
              window.location.reload()
            }, 1000);});
    }).fail()
 }

}




