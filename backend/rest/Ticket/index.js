"use strict";

const Ticket = require("./Ticket.js");

class TicketController {
    search(req, res) {
        console.log(req.query);

        //new Date(+req.query.date_from),
        let from = 25;
        let to = 30;
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
