# Password Strength Checker in React.js

This project involves creating a password strength checker using React.js. It displays the strength of a password (out of 10) alongside a progress bar indicating the strength level. This exercise serves as a beginner-friendly practice task for machine coding rounds.

## Features and Requirements

- **Password Length**: Should be between 6 and 32 characters.
  
- **Strength Criteria**: 
  - The strength of the password is determined by a combination of its length and character types.
  - The maximum possible strength is 10.
  
- **Character Strength Increases**:
  - Increase strength by 1 if the password contains at least one uppercase letter.
  - Increase strength by 1 if the password contains at least one lowercase letter.
  - Increase strength by 1 if the password contains at least one digit.
  - Increase strength by 1 if the password contains at least one special character.

- **Strength Levels**:
  - **Weak**: If `strength > 3 && strength <= 6`.
  - **Moderate**: If `strength > 6 && strength <= 8`.
  - **Strong**: If `strength > 8`.
  
- **Special Case**: If the password length is less than 3, strength should be considered 0.

Utilize this guide to build a functional and efficient password strength checker as part of your front-end development learning or interview preparation.