class Ticket {
    constructor({from, to, departDate, returnDate, price}) {
        this.from = from;
        this.to = to;
        this.depart = departDate;
        this.return = returnDate;
        this.price = price;
    }
}

export default Ticket;