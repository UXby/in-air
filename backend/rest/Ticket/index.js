"use strict";

let Ticket = require("./Ticket.js");

class TicketController {
    search(req, res) {
        console.log(req.query);
        let from = new Date(+req.query.from);
        let to = new Date(+req.query.to);;
        let tickets = [];
        let count = Math.floor(Math.random() * 100 + 1);

        for (let i = 0; i < count; i++) {
            tickets.push(new Ticket(from, to, Math.floor(Math.random() * 3000 + 100)));
        }

        res.status(201);
        res.header('X-Total-Count', count);
        res.json(tickets);
    }
}

module.exports = (app) => {
    let controller = new TicketController();
    app.get('/', controller.search);
};
