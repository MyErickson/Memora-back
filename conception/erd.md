### Diagramme ERD en Mermaid

```mermaid
erDiagram
    ESTABLISHMENT ||--o{ USER : employs
    ESTABLISHMENT {
        int id
        string name
        string address
        string phoneNumber
        datetime created_at
    }
    
    USER ||--o{ CHILD : manages
    USER {
        int id
        string name
        string email
        string passwordHash
        string role
        datetime created_at
    }
    
    CHILD ||--o{ ACTIVITY : has
    CHILD {
        int id
        string name
        date dob
        string profileImage
        int establishment_id
    }
    
    ACTIVITY {
        int id
        int child_id
        int educator_id
        string type
        string description
        string photoUrl
        datetime created_at
    }
    
    ```