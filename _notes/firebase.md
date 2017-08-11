## Security
  Database -> "RULES", change
  ```
    {
      "rules": {
        ".read": "auth != null",
        ".write": "auth != null"
      }
    }
  ```
  to 
  ```
    {
      "rules": {
        "users":{
          "$uid":{
            ".read":"$uid === auth.uid",
            ".write":"$uid === auth.uid",
          }
        }
      }
    }
  ```