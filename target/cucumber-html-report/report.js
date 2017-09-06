$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/GiftCard.feature");
formatter.feature({
  "line": 3,
  "name": "Home Page Login",
  "description": "User should login to forever new",
  "id": "home-page-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Login",
  "description": "",
  "id": "home-page-login;login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am registered user",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I open Forever login page and enter login details \u0027\u003cUserName\u003e\u0027 and \u0027\u003cPasswd\u003e\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should login to the forever new",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "home-page-login;login;",
  "rows": [
    {
      "cells": [
        "UserName",
        "Passwd"
      ],
      "line": 10,
      "id": "home-page-login;login;;1"
    },
    {
      "cells": [
        "k.keerthipriya@gmail.com",
        "kiran143"
      ],
      "line": 11,
      "id": "home-page-login;login;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5505286925,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Login",
  "description": "",
  "id": "home-page-login;login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am registered user",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I open Forever login page and enter login details \u0027k.keerthipriya@gmail.com\u0027 and \u0027kiran143\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should login to the forever new",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginDefinition.i_am_registered_user()"
});
formatter.result({
  "duration": 3686978518,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "k.keerthipriya@gmail.com",
      "offset": 51
    },
    {
      "val": "kiran143",
      "offset": 82
    }
  ],
  "location": "LoginDefinition.i_enter_the_login_details_as_k_keerthipriya_gmail_com_and_kiran(String,String)"
});
formatter.result({
  "duration": 2574172866,
  "status": "passed"
});
formatter.match({
  "location": "LoginDefinition.i_should_login_to_the_forever_new_website()"
});
formatter.result({
  "duration": 23847,
  "status": "passed"
});
formatter.after({
  "duration": 38940,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "GiftCard",
  "description": "",
  "id": "home-page-login;giftcard",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I open the Forever New home page \u0027\u003cUname\u003e\u0027 and \u0027\u003cPwd\u003e\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I open buy gift cards page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "give all the details \u0027\u003cGiftCardValue\u003e\u0027 and \u0027\u003cQTY\u003e\u0027 and \u0027\u003cSenName\u003e\u0027 and \u0027\u003cSenEmail\u003e\u0027 and \u0027\u003cRcvName\u003e\u0027 and \u0027\u003cRcvEmail\u003e\u0027 and \u0027\u003cMsg\u003e\u0027 and \u0027\u003cCreditCardNo\u003e\u0027 and \u0027\u003cExpMonth\u003e\u0027 and \u0027\u003cExpYear\u003e\u0027 and \u0027\u003cCVV\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should login to the forever new website",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "home-page-login;giftcard;",
  "rows": [
    {
      "cells": [
        "Uname",
        "Pwd",
        "GiftCardValue",
        "QTY",
        "SenName",
        "SenEmail",
        "RcvName",
        "RcvEmail",
        "Msg",
        "CreditCardNo",
        "ExpMonth",
        "ExpYear",
        "CVV"
      ],
      "line": 18,
      "id": "home-page-login;giftcard;;1"
    },
    {
      "cells": [
        "k.keerthipriya@gmail.com",
        "kiran143",
        "Gift Card CA +$50.00",
        "1",
        "Keerthi",
        "k.keerthipriya@gmail.com",
        "Kiran",
        "kiroooos@gmail.com",
        "Happy weekend",
        "4444333322221111",
        "11",
        "20",
        "123"
      ],
      "line": 19,
      "id": "home-page-login;giftcard;;2"
    },
    {
      "cells": [
        "k.keerthipriya@gmail.com",
        "kiran143",
        "Gift Card CA +$75.00",
        "1",
        "Keerthi",
        "k.keerthipriya@gmail.com",
        "Kiran",
        "kiroooos@gmail.com",
        "Happy birthday",
        "4444333322221111",
        "11",
        "20",
        "123"
      ],
      "line": 20,
      "id": "home-page-login;giftcard;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4625617644,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "GiftCard",
  "description": "",
  "id": "home-page-login;giftcard;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I open the Forever New home page \u0027k.keerthipriya@gmail.com\u0027 and \u0027kiran143\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I open buy gift cards page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "give all the details \u0027Gift Card CA +$50.00\u0027 and \u00271\u0027 and \u0027Keerthi\u0027 and \u0027k.keerthipriya@gmail.com\u0027 and \u0027Kiran\u0027 and \u0027kiroooos@gmail.com\u0027 and \u0027Happy weekend\u0027 and \u00274444333322221111\u0027 and \u002711\u0027 and \u002720\u0027 and \u0027123\u0027",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should login to the forever new website",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "k.keerthipriya@gmail.com",
      "offset": 34
    },
    {
      "val": "kiran143",
      "offset": 65
    }
  ],
  "location": "GiftCardDefn.i_open_the_Forever_Page(String,String)"
});
formatter.result({
  "duration": 4602535925,
  "status": "passed"
});
formatter.match({
  "location": "GiftCardDefn.i_open_gift_card_Page()"
});
formatter.result({
  "duration": 4208814309,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift Card CA +$50.00",
      "offset": 22
    },
    {
      "val": "1",
      "offset": 49
    },
    {
      "val": "Keerthi",
      "offset": 57
    },
    {
      "val": "k.keerthipriya@gmail.com",
      "offset": 71
    },
    {
      "val": "Kiran",
      "offset": 102
    },
    {
      "val": "kiroooos@gmail.com",
      "offset": 114
    },
    {
      "val": "Happy weekend",
      "offset": 139
    },
    {
      "val": "4444333322221111",
      "offset": 159
    },
    {
      "val": "11",
      "offset": 182
    },
    {
      "val": "20",
      "offset": 191
    },
    {
      "val": "123",
      "offset": 200
    }
  ],
  "location": "GiftCardDefn.i_give_all_giftCard_details(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 27701794105,
  "status": "passed"
});
formatter.match({
  "location": "GiftCardDefn.i_should_not_be_able_to_go_to_next_page()"
});
formatter.result({
  "duration": 23545,
  "status": "passed"
});
formatter.after({
  "duration": 56145,
  "status": "passed"
});
formatter.before({
  "duration": 3859746528,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "GiftCard",
  "description": "",
  "id": "home-page-login;giftcard;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I open the Forever New home page \u0027k.keerthipriya@gmail.com\u0027 and \u0027kiran143\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I open buy gift cards page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "give all the details \u0027Gift Card CA +$75.00\u0027 and \u00271\u0027 and \u0027Keerthi\u0027 and \u0027k.keerthipriya@gmail.com\u0027 and \u0027Kiran\u0027 and \u0027kiroooos@gmail.com\u0027 and \u0027Happy birthday\u0027 and \u00274444333322221111\u0027 and \u002711\u0027 and \u002720\u0027 and \u0027123\u0027",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should login to the forever new website",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "k.keerthipriya@gmail.com",
      "offset": 34
    },
    {
      "val": "kiran143",
      "offset": 65
    }
  ],
  "location": "GiftCardDefn.i_open_the_Forever_Page(String,String)"
});
formatter.result({
  "duration": 6711255903,
  "status": "passed"
});
formatter.match({
  "location": "GiftCardDefn.i_open_gift_card_Page()"
});
formatter.result({
  "duration": 3329068959,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift Card CA +$75.00",
      "offset": 22
    },
    {
      "val": "1",
      "offset": 49
    },
    {
      "val": "Keerthi",
      "offset": 57
    },
    {
      "val": "k.keerthipriya@gmail.com",
      "offset": 71
    },
    {
      "val": "Kiran",
      "offset": 102
    },
    {
      "val": "kiroooos@gmail.com",
      "offset": 114
    },
    {
      "val": "Happy birthday",
      "offset": 139
    },
    {
      "val": "4444333322221111",
      "offset": 160
    },
    {
      "val": "11",
      "offset": 183
    },
    {
      "val": "20",
      "offset": 192
    },
    {
      "val": "123",
      "offset": 201
    }
  ],
  "location": "GiftCardDefn.i_give_all_giftCard_details(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 26667623563,
  "status": "passed"
});
formatter.match({
  "location": "GiftCardDefn.i_should_not_be_able_to_go_to_next_page()"
});
formatter.result({
  "duration": 20828,
  "status": "passed"
});
formatter.after({
  "duration": 52523,
  "status": "passed"
});
});