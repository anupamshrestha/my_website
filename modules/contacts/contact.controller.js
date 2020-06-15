const ContactModel =require("./contact.model");

class ContactController{
constructor(){}
create(payload){
  return ContactModel.create(payload);
}
//read all the contacts
list(){
    return ContactModel.find({});
}
//read specific contact
getById(id){
    return ContactModel.findOne({_id: id});
}
//Update
update(id, payload){
    return ContactModel.findOneAndUpdate({_id: id}, payload);
}
remove(id){
    return ContactModel.deleteOne({_id: id});
}
}

module.exports =  new ContactController();