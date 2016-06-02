"use strict";

class Ticket {
    constructor(_from, _to, _depart, _return, _price) {
        this.from = _from;
        this.to = _to;
        this.departDate = _depart;
        this.returnDate = _return;
        this.price = _price;
    }
}

module.exports = Ticket;