# Assignment 2: Test Tooling

# The approach: 

I did 11 test cases about log-in, register and application navigation, since I considered these the most important app functions.

# Login Test Cases: 
In the Login Test Cases, I covered the most common log-in situations, including: log-in attempts with empty fields, incorrect credentials and also correct credentials. 

# Register Test Cases:

In the Register test cases, I tested the scenario when all the fields were correct, except for the email field which was empty. The other scenario was a successful registration with all information correct. 

# Product Filtering Test Cases: 

In these test cases, after a successful log in, I open the catalogue screen, then filter black colored products, and it successfully filters the products.

# Product Buying Test Case: 

In this test case, I log-in correctly, I select a product, and I proceed to payment. I try to buy the product, but it's unsuccessful. 


# *Bug Report 
Test Case 1
"Login with empty fields"- BUG

Steps to reproduce

1.Visit the Page www.weavesocks.com
2.Click on the "Log-in" button on the Header;
3.On the Log-in screen click on the "Log in" button

Actual Behavior
We log in successfully, although the fields username and password are empty

Expected behavior
We shouldn't be able to log in with empty credentials field, and if we try, the following message should appear: "Invalid login credentials".





