class Request{

getFormData(){
    var values = {};
    $.each($('#contactForm').serializeArray(), function(i, field) {
        values[field.name] = field.value;
    });
    return values;
}

sendEmail(){
    let data = this.getFormData(this);
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