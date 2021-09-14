//loade the module from the model file
let ticketModel = require("../model/ticket.model");

//raise a ticket
let createTicket = (request,response)=>{
    let ticket = new ticketModel({
        _id:request.body._id,
        description:request.body.description
    });

    ticket.save((err,result)=>{
        if(!err){
            response.send("Ticket created successfully");
        }else{
            response.send(err);
        }
    })
       
}

module.exports={createTicket}