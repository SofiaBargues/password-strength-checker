In this question, you need to build a password strength checker in React.js that shows the strength of the password (out of 10) and a progress bar where the progress is determined by the strength. It is a good beginner-friendly question to practice for Machine Coding Round. Some points to remember

Password's length should be between 6 and 32 characters.
Strength of the password is a combination of its length and the type of characters in the password.
The max strength possible is 10.
The length of the password adds 1 point for every 3 characters, with a maximum of 6 points.
If the password has at least one uppercase letter then strength increases by 1.
If the password has at least one lowercase letter then strength increases by 1.
If the password has at least one digit then strength increases by 1.
If the password has at least one special character then strength increases by 1.
If strength > 3 && strength <= 6 then password is considered to be weak.
If strength > 6 && strength <= 8 then password is considered to be moderate.
If strength > 8 then the password is considered to be strong.
If the password length is less than 3 then strength should be considered as 0.
