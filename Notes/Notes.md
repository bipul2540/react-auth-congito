**Three main Authentication Strategy Classes**
->The Knowledge Test
->The ownerShip test
->The biological test

_The knowledge Based Authentication._
if you the real uses then enter the password you have choosen whiile createing the Account.
**_ Main problem _**
-> Reliant on the strength of the password
-> password can be guessable or searchable

_The owner Based Authentication._
verifying the user authenticaion based on the wheather the have something or not
like we send OTP to either phone or email in order to verify.
**_ Main problem _**
->some rely indirectly on knowledge based strategies (that is, someone could guess your email password)
-> Phyical device can be stolen


_The Two-factor Authentication._



_The Biological Based Authentication._
auth using face or fingerprint.

https://github.com/shaunwa/react-auth-starter



**_  Benifits of JWTs _**
-> JWTs are stateless, means they store all the information whith it payload part
-> Use JSON, which is more comapct and secure than using XML


**_  Drawbacks of JWTs _**
-> Token are valid until they expire or until the private key is changed.
-> The user will have to reauthenticate when the token expire