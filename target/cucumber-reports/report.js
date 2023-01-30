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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027summary_total_label\u0027]\"}\n  (Session info: chrome\u003d109.0.5414.120)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.4.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [9987ce9ebf66d85e5da5c1c2b0bfce7d, findElement {using\u003dxpath, value\u003d//div[@class\u003d\u0027summary_total_label\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 109.0.5414.120, chrome: {chromedriverVersion: 109.0.5414.74 (e7c5703604da..., userDataDir: C:\\Users\\DINHLE~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:61650}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:61650/devtoo..., se:cdpVersion: 109.0.5414.120, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9987ce9ebf66d85e5da5c1c2b0bfce7d\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat pages.BasePage.isElementPresent(BasePage.java:33)\r\n\tat pages.PaymentPage.verifyTotalAmountIsCorrect(PaymentPage.java:39)\r\n\tat com.bdd.test.scenarios.loginStepsDefinations.verifySuccessMessage(loginStepsDefinations.java:112)\r\n\tat ✽.The user should direct to confirmation page and should see the message following(file:src/test/java/FeatureFiles/checkout.feature:41)\r\n",
  "status": "failed"
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