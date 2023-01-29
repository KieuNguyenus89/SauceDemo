$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/FeatureFiles/checkout.feature");
formatter.feature({
  "name": "Checkout Module",
  "description": "",
  "keyword": "Feature"
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
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.openqa.selenium.WebDriver.manage()\" because the return value of \"java.lang.ThreadLocal.get()\" is null\r\n\tat testcases.BaseTest.setUp(BaseTest.java:34)\r\n\tat com.bdd.test.scenarios.loginStepsDefinations.setUpDriverAndPageObjects(loginStepsDefinations.java:28)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:42)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:79)\r\n\tat io.cucumber.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:24)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:132)\r\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:599)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:174)\r\n\tat org.testng.internal.TestMethodWithDataProviderMethodWorker.call(TestMethodWithDataProviderMethodWorker.java:77)\r\n\tat org.testng.internal.TestMethodWithDataProviderMethodWorker.call(TestMethodWithDataProviderMethodWorker.java:15)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:539)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)\r\n\tat java.base/java.lang.Thread.run(Thread.java:833)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStepsDefinations.login(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user enter the \"\u003cusername\u003e\" in username field and \"\u003cpassword\u003e\" in password field and clicks login button",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Click on add to cart button of first item",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Click on view cart items",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Click on checkout button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "clicks continue button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "The user click on  finish button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "The user should direct to confirmation page and should see the message \"MESSAGE: THANK YOU FOR YOUR ORDER\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.openqa.selenium.WebDriver.quit()\" because the return value of \"java.lang.ThreadLocal.get()\" is null\r\n\tat testcases.BaseTest.cleanUpActivities(BaseTest.java:53)\r\n\tat com.bdd.test.scenarios.loginStepsDefinations.performCleanUp(loginStepsDefinations.java:34)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:79)\r\n\tat io.cucumber.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:24)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:132)\r\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:599)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:174)\r\n\tat org.testng.internal.TestMethodWithDataProviderMethodWorker.call(TestMethodWithDataProviderMethodWorker.java:77)\r\n\tat org.testng.internal.TestMethodWithDataProviderMethodWorker.call(TestMethodWithDataProviderMethodWorker.java:15)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:539)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)\r\n\tat java.base/java.lang.Thread.run(Thread.java:833)\r\n",
  "status": "failed"
});
formatter.uri("file:src/test/java/FeatureFiles/loginModule.feature");
formatter.feature({
  "name": "Login Module",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify that login functionality",
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
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.openqa.selenium.WebDriver.manage()\" because the return value of \"java.lang.ThreadLocal.get()\" is null\r\n\tat testcases.BaseTest.setUp(BaseTest.java:34)\r\n\tat com.bdd.test.scenarios.loginStepsDefinations.setUpDriverAndPageObjects(loginStepsDefinations.java:28)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:42)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:79)\r\n\tat io.cucumber.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:24)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:132)\r\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:599)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:174)\r\n\tat org.testng.internal.TestMethodWithDataProviderMethodWorker.call(TestMethodWithDataProviderMethodWorker.java:77)\r\n\tat org.testng.internal.TestMethodWithDataProviderMethodWorker.call(TestMethodWithDataProviderMethodWorker.java:15)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:539)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)\r\n\tat java.base/java.lang.Thread.run(Thread.java:833)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStepsDefinations.login(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user fills login form with folowing information",
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
  "keyword": "When "
});
formatter.match({
  "location": "loginStepsDefinations.login(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "loginStepsDefinations.clickLoginBtn()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Login should be successful and user is on profile page",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepsDefinations.verifyLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.openqa.selenium.WebDriver.quit()\" because the return value of \"java.lang.ThreadLocal.get()\" is null\r\n\tat testcases.BaseTest.cleanUpActivities(BaseTest.java:53)\r\n\tat com.bdd.test.scenarios.loginStepsDefinations.performCleanUp(loginStepsDefinations.java:34)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:79)\r\n\tat io.cucumber.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:24)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:132)\r\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:599)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:174)\r\n\tat org.testng.internal.TestMethodWithDataProviderMethodWorker.call(TestMethodWithDataProviderMethodWorker.java:77)\r\n\tat org.testng.internal.TestMethodWithDataProviderMethodWorker.call(TestMethodWithDataProviderMethodWorker.java:15)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:539)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)\r\n\tat java.base/java.lang.Thread.run(Thread.java:833)\r\n",
  "status": "failed"
});
});