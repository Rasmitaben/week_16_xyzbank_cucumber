$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("bank.feature");
formatter.feature({
  "line": 1,
  "name": "Bank Test",
  "description": "As a user I want to login into xyz bank website",
  "id": "bank-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6192730400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "BankSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 262668700,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "bankManager Should Open Account Successfully",
  "description": "",
  "id": "bank-test;bankmanager-should-open-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@smoke"
    },
    {
      "line": 17,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I click On \"Bank Manager Login\" Tab",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I click On the \"Open Account\" Button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Search customer that created in first test",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Select currency \"Pound\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on \"process\" button1",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I see popup displayed",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I verify the message \"Account created successfully\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I click on \"ok\" button on popup",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Bank Manager Login",
      "offset": 12
    }
  ],
  "location": "BankSteps.iClickOnTab(String)"
});
formatter.result({
  "duration": 296976900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Open Account",
      "offset": 16
    }
  ],
  "location": "BankSteps.iClickOnTheButton(String)"
});
formatter.result({
  "duration": 350518100,
  "status": "passed"
});
formatter.match({
  "location": "BankSteps.iSearchCustomerThatCreatedInFirstTest()"
});
formatter.result({
  "duration": 713560000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pound",
      "offset": 19
    }
  ],
  "location": "BankSteps.iSelectCurrency(String)"
});
formatter.result({
  "duration": 225242700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "process",
      "offset": 12
    },
    {
      "val": "1",
      "offset": 27
    }
  ],
  "location": "BankSteps.iClickOnButton(String,int)"
});
formatter.result({
  "duration": 144545500,
  "status": "passed"
});
formatter.match({
  "location": "BankSteps.iSeePopupDisplayed()"
});
formatter.result({
  "duration": 33000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account created successfully",
      "offset": 22
    }
  ],
  "location": "BankSteps.iVerifyTheMessage(String)"
});
formatter.result({
  "duration": 31975000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ok",
      "offset": 12
    }
  ],
  "location": "BankSteps.iClickOnButtonOnPopup(String)"
});
formatter.result({
  "duration": 16484200,
  "status": "passed"
});
formatter.after({
  "duration": 709516600,
  "status": "passed"
});
formatter.before({
  "duration": 4525080600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "BankSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 33200,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "customer Should Login And Logout Successfully",
  "description": "",
  "id": "bank-test;customer-should-login-and-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I click on \"Customer Login\" customer login Tab",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I search customer that I created",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on \"Login\" login Button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I verify \"Logout\" Tab displayed",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on \"Logout\" logout Button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I verify \"Your Name\" text displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Customer Login",
      "offset": 12
    }
  ],
  "location": "BankSteps.iClickOnCustomerLoginTab(String)"
});
formatter.result({
  "duration": 650080500,
  "status": "passed"
});
formatter.match({
  "location": "BankSteps.iSearchCustomerThatICreated()"
});
formatter.result({
  "duration": 2223595000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 12
    }
  ],
  "location": "BankSteps.iClickOnLoginButton(String)"
});
formatter.result({
  "duration": 100556700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 10
    }
  ],
  "location": "BankSteps.iVerifyTabDisplayed(String)"
});
formatter.result({
  "duration": 393200600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 12
    }
  ],
  "location": "BankSteps.iClickOnLogoutButton(String)"
});
formatter.result({
  "duration": 110642600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your Name",
      "offset": 10
    }
  ],
  "location": "BankSteps.iVerifyTextDisplayed(String)"
});
formatter.result({
  "duration": 58897500,
  "status": "passed"
});
formatter.after({
  "duration": 721246800,
  "status": "passed"
});
formatter.before({
  "duration": 4102104300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "BankSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 34100,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "customer Should Deposit Money Successfully",
  "description": "",
  "id": "bank-test;customer-should-deposit-money-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "I click on \"Customer Login\" customer login Tab",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I search customer that I created",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on \"Login\" login Button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on \"Deposit\" Tab on page",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I Enter amount 100",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click on \"Deposit\" Button on the page",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I verify message \"\"Deposit Successful\"\" on the page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Customer Login",
      "offset": 12
    }
  ],
  "location": "BankSteps.iClickOnCustomerLoginTab(String)"
});
formatter.result({
  "duration": 683924600,
  "status": "passed"
});
formatter.match({
  "location": "BankSteps.iSearchCustomerThatICreated()"
});
formatter.result({
  "duration": 2234441400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 12
    }
  ],
  "location": "BankSteps.iClickOnLoginButton(String)"
});
formatter.result({
  "duration": 110470400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deposit",
      "offset": 12
    }
  ],
  "location": "BankSteps.iClickOnTabOnPage(String)"
});
formatter.result({
  "duration": 352396600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 15
    }
  ],
  "location": "BankSteps.iEnterAmount(int)"
});
formatter.result({
  "duration": 411969400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deposit",
      "offset": 12
    }
  ],
  "location": "BankSteps.iClickOnButtonOnThePage(String)"
});
formatter.result({
  "duration": 2083854700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    },
    {
      "val": "",
      "offset": 38
    }
  ],
  "location": "BankSteps.iVerifyMessageDepositSuccessfulOnThePage(String,String)"
});
formatter.result({
  "duration": 2060501700,
  "status": "passed"
});
formatter.after({
  "duration": 703970800,
  "status": "passed"
});
formatter.before({
  "duration": 3870508700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "BankSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 36000,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Customer should withdraw money successfully",
  "description": "",
  "id": "bank-test;customer-should-withdraw-money-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 47,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "I click on \"Customer Login\" customer login Tab",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "I search customer that I created",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click on \"Login\" login Button",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I click on \"Deposit\" Tab on page",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I Enter amount 100",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I click on \"Deposit\" Button on the page",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I click on the \"Withdrawl\" Tab on page",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I Enter amount 50 on the page",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I click next on \"Withdraw\" Button",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I verify that message \"Transaction Successful\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Customer Login",
      "offset": 12
    }
  ],
  "location": "BankSteps.iClickOnCustomerLoginTab(String)"
});
formatter.result({
  "duration": 585282600,
  "status": "passed"
});
formatter.match({
  "location": "BankSteps.iSearchCustomerThatICreated()"
});
formatter.result({
  "duration": 2203669100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 12
    }
  ],
  "location": "BankSteps.iClickOnLoginButton(String)"
});
formatter.result({
  "duration": 93892600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deposit",
      "offset": 12
    }
  ],
  "location": "BankSteps.iClickOnTabOnPage(String)"
});
formatter.result({
  "duration": 384895600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 15
    }
  ],
  "location": "BankSteps.iEnterAmount(int)"
});
formatter.result({
  "duration": 421922600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deposit",
      "offset": 12
    }
  ],
  "location": "BankSteps.iClickOnButtonOnThePage(String)"
});
formatter.result({
  "duration": 2083967700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Withdrawl",
      "offset": 16
    }
  ],
  "location": "BankSteps.iClickOnTheTabOnPage(String)"
});
formatter.result({
  "duration": 2080027200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 15
    }
  ],
  "location": "BankSteps.iEnterAmountOnThePage(int)"
});
formatter.result({
  "duration": 2096862800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Withdraw",
      "offset": 17
    }
  ],
  "location": "BankSteps.iClickNextOnButton(String)"
});
formatter.result({
  "duration": 2108004800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Transaction Successful",
      "offset": 23
    }
  ],
  "location": "BankSteps.iVerifyThatMessage(String)"
});
formatter.result({
  "duration": 4070500700,
  "status": "passed"
});
formatter.after({
  "duration": 701070700,
  "status": "passed"
});
});