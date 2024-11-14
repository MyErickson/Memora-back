### MCD (MCD)

```mermaid
classDiagram
    class Establishment {
        id
         name
        address
        phoneNumber
        datetime
    }

    class User {
         id
         name
         email
        role
        datetime
    }

    class Child {
         id
        name
        dob
         profileImage
         datetime
    }

    class Activity {
        id
         type
         description
         photoUrl
         datetime
    }

    Establishment "0,n" -- "0,1" User : "has"
    User "0,n" -- "0,n" Child : "manages"
    Child "0,n" -- "0,n" Activity : "has"

```