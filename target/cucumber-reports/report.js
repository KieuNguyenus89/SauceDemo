$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/FeatureFiles/checkout.feature");
formatter.feature({
  "name": "Checkout Module",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Login and go to product page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on login page and then fills login form with folowing information",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "loginStepsDefinations.login(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks on login button",
  "keyword": "When "
});
formatter.match({
  "location": "loginStepsDefinations.clickLoginBtn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login should be successful and user is on profile page",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepsDefinations.verifyLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that Checkout is working with correct credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@checkout"
    },
    {
      "name": "@positive"
    },
    {
      "name": "@critical"
    }
  ]
});
formatter.step({
  "name": "The user click on add to cart button of first item",
  "keyword": "When "
});
formatter.match({
  "location": "loginStepsDefinations.clickAddToCartFirstItem()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on view cart items",
  "keyword": "And "
});
formatter.match({
  "location": "loginStepsDefinations.clickViewCartItem()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on checkout button",
  "keyword": "And "
});
formatter.match({
  "location": "loginStepsDefinations.clickCheckOutBtn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user fills personal information form with following information",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "zipcode"
      ]
    },
    {
      "cells": [
        "Kieu",
        "Nguyen",
        "30274"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "loginStepsDefinations.fillPersonalInfoForm(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks continue button",
  "keyword": "And "
});
formatter.match({
  "location": "loginStepsDefinations.clickContinueBtn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should direct to the checkout overview page and should see following information",
  "rows": [
    {
      "cells": [
        "itemname",
        "itemprice",
        "tax",
        "totalAmount"
      ]
    },
    {
      "cells": [
        "Sauce Labs Backpack",
        "$29.99",
        "$2.40",
        "$32.39"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepsDefinations.VerifyItemInformation(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click on  finish button",
  "keyword": "And "
});
formatter.match({
  "location": "loginStepsDefinations.clickFinishBtn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should direct to confirmation page and should see the message following",
  "rows": [
    {
      "cells": [
        "Message"
      ]
    },
    {
      "cells": [
        "THANK YOU FOR YOUR ORDER"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepsDefinations.verifySuccessMessage(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/FeatureFiles/loginModule.feature");
formatter.feature({
  "name": "Login Module",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify login functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@login"
    },
    {
      "name": "@positive"
    },
    {
      "name": "@critical"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on login page and then fills login form with folowing information",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "loginStepsDefinations.login(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks on login button",
  "keyword": "When "
});
formatter.match({
  "location": "loginStepsDefinations.clickLoginBtn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login should be successful and user is on profile page",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepsDefinations.verifyLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});