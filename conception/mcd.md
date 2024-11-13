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
         passwordHash
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

    Establishment "0,1" -- "0,n" User : "has"
    User "0,1" -- "0,n" Child : "manages"
    Child "0,1" -- "0,n" Activity : "has"

```