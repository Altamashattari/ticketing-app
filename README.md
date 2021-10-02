# ticketing-app

App Overview:

- Users can list a ticket for an event (concert, sports) for sale.
- Other users can purchase this ticket
- Any user can list tickets for sale and purchase tickets
- When a user attempts to purchase a ticket, the ticket is locked for 15 minutes. The user has 15 minutes to enter their payment info.
- While locked, no other user can purchase the  ticket. After 15 minutes, the ticket should 'unlock'.
- Ticket prices can be edited if they are not locked.

# Different Services to be used -

- auth : Handles user signin/signup/signout

- tickets: Handles ticket creation/editing. Knows whether a ticket can be updated.

- orders: Order creation/ editing

- expiration: Watches for orders to be created, cancels them after 15 minutes

- payments: Handles credit card payments.Cancels orders if payment fails, completed if payment succeeds.
# Notes
We are creating a separate services to manage each type of resource. Should we do this for every microservices app? Nope! It depends on your usecase, number of resources, business logic tied to each resource etc. but but featue-based design would be better !