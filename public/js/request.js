
// src = "/js/validation.js";
class Request{

getFormData(){
    var values = {};
    $.each($('#contactForm').serializeArray(), function(i, field) {
        values[field.name] = field.value;
    });
    if (document.forms["form-control"]["full_name"].value) {
      values[field.name] = document.forms["form-control"]["full_name"].value.userValid.properCase();
    }

    if (document.forms["form-control"]["email"].value) {
      values[field.name] = document.forms["form-control"]["email"].value.userValid.emailValidator();
    }
    return values;
}

sendEmail(){
    let data = this.getFormData();
    $.ajax({url: `/mail`, method:"POST", data}).done(()=>{
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
// let request = new Request("Anupam aksjdbas");
// console.log(request.getFormData());
// let userValid = new Validation ();
