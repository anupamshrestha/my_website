const ContactModel =require("./contact.model");

class ContactController{
constructor(){}
create(payload){
  return ContactModel.create(payload);
}
//read all the contacts
list(){
    //TODO PAGINATION HANDLING (DATATABLES)
    return ContactModel.find({});
}
//read specific contact
async getById(id){
    return await ContactModel.findOne({_id: id});
}
//Update
update(id, payload){
    return ContactModel.updateOne({_id: id}, {$set: {full_name: payload.full_name, email: payload.email, subject: payload.subject, message: payload.message}});
}
remove(id){
    return ContactModel.deleteOne({_id: id});
}
}

module.exports =  new ContactController();