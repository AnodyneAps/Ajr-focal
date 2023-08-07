(function (window, k) {
    if (!window.AppstleIncluded && (!urlIsProductPage() || 'V1' === 'V2')) {
      window.AppstleIncluded = true;
      appstleLoadScript = function (src, callback) {
        var script = document.createElement("script");
        script.charset = "utf-8";
            script.defer = true;
        script.src = src;
        script.onload = script.onreadystatechange = function () {
          if (!script.readyState || /loaded|complete/.test(script.readyState)) {
            script.onload = script.onreadystatechange = null;
            script = k;
            callback && callback();
          }
        };
            document.getElementsByTagName("body")[0].appendChild(script)
      };


      appstleLoadScript("https://cdn.shopify.com/s/files/1/0627/1234/8917/t/18/assets/appstle-subscription.js?v=1684477819");


      window.RS = Window.RS || {};
      RS.Config = {
        "selectors": {
            "payment_button_selectors": "form[action$='/cart/add'] .shopify-payment-button",
            "subscriptionLinkSelector": "",
            "atcButtonPlacement": "BEFORE",
            "subscriptionLinkPlacement": "BEFORE",
            "cartRowSelector": "",
            "cartLineItemSelector": "",
            "cartLineItemPerQuantityPriceSelector": "",
            "cartLineItemTotalPriceSelector": "",
            "cartLineItemSellingPlanNameSelector": "",
            "cartSubTotalSelector" : "",
            "cartLineItemPriceSelector": "",
        },
        "enableCartWidgetFeature": "false",
        "useUrlWithCustomerId": "true",
        "atcButtonSelector": "#AddToCart",
        "moneyFormat": "{% raw %}{{amount_no_decimals}} kr{% endraw %}",
        "oneTimePurchaseText": "K\u00F8b en alm. 3-pak",
        "shop": "ajrcollection.myshopify.com",
        "deliveryText": "delivery",
        "purchaseOptionsText": "",
        "manageSubscriptionButtonText": "Manage Subscription",
        "subscriptionOptionText": "Abonn\u00E9r og spar 25%",
        "sellingPlanSelectTitle": "",
        "subscriptionPriceDisplayText": "",
        "tooltipTitle": "Oplysninger om abonnementet ",
        "showTooltipOnClick": "false",
        "tooltipDesctiption": "<SPAN STYLE=\"color:#FFFFFF\"><strong>F\u00E5 fuld kontrol over dine abonnementer<\/strong><br\/><br\/>Du kan springe over, redigere eller annullere leverancer n\u00E5r som helst, alt efter dine behov. Som standard modtager du 3 par underbukser hver 2. mdr. Men du har ogs\u00E5 mulighed for at \u00E6ndre hyppigheden, s\u00E5 du i stedet modtager dem hver m\u00E5ned eller hver 3. mdr. Du skal blot sende en mail til info@ajrcollection.com.<\/SPAN> ",
        "tooltipDescriptionOnPrepaidPlan": "<span style=\"display:none;\"><b>Prepaid Plan Details<\/b><\/br> Total price: {{totalPrice}} ( Price for every delivery: {{pricePerDelivery}})<\/span>",
        "tooltipDescriptionOnMultipleDiscount": "<span style=\"display:none;\"><b>Discount Details<\/b><\/br> Initial discount is {{discountOne}} and then {{discountTwo}}<\/span>",
        "tooltipDescriptionCustomization": "{{{defaultTooltipDescription}}} <\/br>  {{{prepaidDetails}}} <\/br> {{{discountDetails}}}",
        "orderStatusManageSubscriptionTitle": "Subscription",
        "orderStatusManageSubscriptionDescription": "Continue to your account to view and manage your subscriptions. Please use the same email address that you used to buy the subscription.",
        "orderStatusManageSubscriptionButtonText": "Manage your subscription",
        "subscriptionOptionSelectedByDefault" : true,
        "totalPricePerDeliveryText" : "{{prepaidPerDeliveryPrice}}\/delivery",
        "memberOnlySellingPlansJson": {},
        "nonMemberOnlySellingPlansJson": {},
        "sellingPlansJson": [{"frequencyCount":3,"frequencyInterval":"MONTH","billingFrequencyCount":3,"billingFrequencyInterval":"MONTH","frequencyName":"Du modtager et par gratis underbukser (betal kun fragten). Herefter er du tilmeldt vores abonnementsløsning. Vi sender 3 par underbukser om 7 dage og igen hver 3. måned. Du betaler 299,- pr. 3-pak (ingen binding - du kan til enhver tid afmelde dig) ","frequencyDescription":"Få ét par gratis underbukser nu (betal kun fragten). Herefter er du tilmeldt vores abonnementsløsning. Vi sender 3 par underbukser om 7 dage og igen hver 3. måned. Du betaler kun 299,- pr. 3-pak (ingen binding - du kan til enhver tid afmelde dig)","discountOffer":100.0,"discountOffer2":100.0,"afterCycle1":0,"afterCycle2":1,"discountType":"PERCENTAGE","discountType2":"FIXED","discountEnabled":true,"discountEnabled2":true,"discountEnabledMasked":true,"discountEnabled2Masked":true,"id":"gid://shopify/SellingPlan/3376742645","frequencyType":"ON_PURCHASE_DAY","specificDayEnabled":false,"cutOff":0,"prepaidFlag":"false","idNew":"gid://shopify/SellingPlan/3376742645","planType":"PAY_AS_YOU_GO","deliveryPolicyPreAnchorBehavior":"ASAP","freeTrialEnabled":true,"freeTrialCount":7,"freeTrialInterval":"DAY","memberOnly":false,"nonMemberOnly":false,"formFieldJson":"null","appstleCycles":[]},{"frequencyCount":2,"frequencyInterval":"MONTH","billingFrequencyCount":2,"billingFrequencyInterval":"MONTH","frequencyName":"Du tilmelder dig vores abonnementsløsning. Vi sender 3 par underbukser hver 2. måned. Du betaler kun 299,- pr. 3-pak (ingen binding - du kan til enhver tid afmelde dig)","frequencyDescription":"Få underbukser på abonnement og spar 25% . Vi sender 3 par underbukser hver 2. måned. Du betaler kun 299,- pr. 3-pak (ingen binding - du kan til enhver tid afmelde dig)","discountOffer":100.0,"discountOffer2":100.0,"afterCycle1":0,"afterCycle2":1,"discountType":"FIXED","discountType2":"FIXED","discountEnabled":true,"discountEnabled2":true,"discountEnabledMasked":true,"discountEnabled2Masked":true,"id":"gid://shopify/SellingPlan/3453518069","frequencyType":"ON_PURCHASE_DAY","specificDayEnabled":false,"cutOff":0,"prepaidFlag":"false","idNew":"gid://shopify/SellingPlan/3453518069","planType":"PAY_AS_YOU_GO","deliveryPolicyPreAnchorBehavior":"ASAP","freeTrialEnabled":false,"memberOnly":false,"nonMemberOnly":false,"formFieldJson":"null","appstleCycles":[]}],
        "widgetEnabled": true,
        "showTooltip" : true,
        "sortByDefaultSequence": false,
        "showSubOptionBeforeOneTime": true,
        "showStaticTooltip": false,
        "showAppstleLink": true,
        "sellingPlanTitleText" : "",
        "oneTimePriceText" : "{{price}}",
        "selectedPayAsYouGoSellingPlanPriceText" : "{{price}}",
        "selectedPrepaidSellingPlanPriceText" : "{{totalPrice}}",
        "selectedDiscountFormat" : "SAVE {{selectedDiscountPercentage}}",
        "manageSubscriptionBtnFormat" : "<a href='apps\/subscriptions' class='appstle_manageSubBtn' ><button class='btn' style='padding: 2px 20px'>Manage Subscription<\/button><a><br><br>",
        "manageSubscriptionUrl" : "apps\/subscriptions",
        "appstlePlanId": 163,
        "showCheckoutSubscriptionBtn": true,
        "disableLoadingJquery": false,
        "widgetEnabledOnSoldVariant": "false",
        "switchRadioButtonWidget": true,
        "appstlePlanName": "BUSINESS",
        "appstlePlanFeatures": {
	"subscriptionOrderAmount": 30000.0,
	"analytics": true,
	"enableSubscriptionManagement": true,
	"enableDunningManagement": true,
	"enableCustomerPortalSettings": true,
	"enableShippingProfiles": true,
	"enableProductSwapAutomation": true,
	"enableAdvancedSellingPlans": true,
	"enableSummaryReports": true,
	"enableCustomEmailDomain": true,
	"enableWidgetPlacement": true,
	"enableIntegrations": true,
	"enableSmsAlert": false,
	"enableCustomEmailHtml": true,
	"enableCancellationManagement": true,
	"enableBundling": true,
	"enableAutomation": true,
	"enableQuickActions": false,
	"enableExternalApi": false,
	"enableCartWidget": true,
	"enableAutoSync": true,
	"webhookAccess": false,
	"accessWidgetDesignOptions": true,
	"accessSubscriptionActivityLogs": true,
	"accessBuildABox": true,
	"accessResendEmail": true,
	"accessKlaviyoContactSync": true,
	"accessOneTimeProductUpsells": true,
	"accessAdvanceSubscriptionPlanOptions": true,
	"accessSplitContract": true,
	"accessDiscountOnCancellationAttempt": true,
	"accessQuickCheckout": false,
	"accessSubscriberLoyaltyFeatures": true,
	"accessBundling": true,
	"accessManualSubscriptionCreation": true,
	"accessAppstleMenu": false
},
        "formMappingAttributeName": "",
        "formMappingAttributeSelector": "",
        "quickViewModalPollingSelector": "",
        "scriptLoadDelay": "0",
        "formatMoneyOverride": "false",
        "appstle_app_proxy_path_prefix": "apps\/subscriptions",
        "updatePriceOnQuantityChange": "",
        "widgetParentSelector": "",
        "quantitySelector": "",
        "enableAddJSInterceptor": "false",
        "reBuyEnabled": "false",
        "loyaltyDetailsLabelText": "",
        "loyaltyPerkDescriptionText": "",
        "widgetTemplateHtml": `{% raw %}{% endraw %}`,
        "bundle": {},
        "labels": "{\"appstle.subscription.wg.yearsFrequencyTextV2\":\"\u00C5r\",\"appstle.subscription.wg.weekFrequencyTextV2\":\"Uge\",\"appstle.subscription.wg.oneTimePurchaseTextV2\":\"One Time Purchase\",\"appstle.subscription.wg.loyaltyPerkDescriptionTextV2\":\"{{#isDiscountTypeFreeProduct}}<div style='display: flex;'><div style='height: 60px; width: 60px; flex-shrink: 0; margin-right: 10px;'><img style='width: 100%' src={{{featured_image}}}><\/img><\/div><div>After {{{billingCycleBlock}}} orders,<span style='color: #ffc000;font-weight: 700;';> get a FREE {{freeProductName}} <\/span><\/div><div>{{\/isDiscountTypeFreeProduct}}{{#isDiscountTypePercentage}}After <span class='appstle-loyalty-billing-cycle'><span class='appstle-loyalty-billing-cycle-count'>{{{billingCycleBlock}}}<\/span> order<\/span>, <span class='appstle-loyalty-discount'>get <span style='color: #ffc000;font-weight: 700;';>{{{discount}}}% OFF your entire order<\/span><\/span>.{{\/isDiscountTypePercentage}}{{#isDiscountTypeShipping}}After <span class='appstle-loyalty-billing-cycle'><span class='appstle-loyalty-billing-cycle-count'>{{{billingCycleBlock}}}<\/span> order<\/span>, <span class='appstle-loyalty-discount'>get <span style='color: #ffc000;font-weight: 700;';>shipping at {{{formatDiscountedPrice}}}<\/span><\/span>.{{\/isDiscountTypeShipping}}{{#isDiscountTypeFixed}}After <span class='appstle-loyalty-billing-cycle'><span class='appstle-loyalty-billing-cycle-count'>{{{billingCycleBlock}}}<\/span> order<\/span>, <span class='appstle-loyalty-discount'>get <span style='color: #ffc000;font-weight: 700;';>{{{formatDiscountedPrice}}} OFF your entire order<\/span><\/span>.{{\/isDiscountTypeFixed}}\",\"appstle.subscription.wg.unsubscribeFrequencyTextV2\":\"unsubscribe\",\"appstle.subscription.wg.weeksFrequencyTextV2\":\"Uger\",\"appstle.subscription.wg.weeklyLabelTextV2\":\"Weekly\",\"appstle.subscription.wg.oneTimeFrequencyTextV2\":\"One Time\",\"appstle.subscription.wg.dayFrequencyTextV2\":\"dag\",\"appstle.subscription.wg.allowFulfilmentCountViaPropertiesV2\":\"false\",\"appstle.subscription.wg.monthsFrequencyTextV2\":\"Months\",\"appstle.subscription.wg.deliveryEveryFrequencyTextV2\":\"Delivery Every\",\"appstle.subscription.wg.subscribeAndSaveInitalV2\":\"Subscribe & save\",\"appstle.subscription.wg.offFrequencyTextV2\":\"Off\",\"appstle.subscription.wg.yearFrequencyTextV2\":\"\u00C5r\",\"appstle.subscription.wg.daysFrequencyTextV2\":\"Dage\",\"appstle.subscription.wg.monthlyLabelTextV2\":\"Monthly\",\"appstle.subscription.wg.prepayLabelTextV2\":\"Prepay\",\"appstle.subscription.wg.subscribeAndSaveSuccessV2\":\"Subscribe success\",\"appstle.subscription.wg.monthFrequencyTextV2\":\"Month\",\"appstle.subscription.wg.selectDeliverOptionV2\":\"select deliver option\",\"appstle.subscription.wg.yearlyLabelTextV2\":\"Yearly\"}",
        "css": {
            "appstle_subscription_widget": {
                "margin-top": "" ,
                "margin-bottom": "",
            },

            "appstle_subscription_wrapper": {
                "border-width": "",
                "border-color": "",
            },

            "appstle_circle": {
                "border-color": "",
            },

            "appstle_dot": {
                "background-color": "",
            },

            "appstle_select": {
                "padding-top": "",
                "padding-bottom": "",
                "padding-left": "",
                "padding-right": "",
                "border-width": "",
                "border-style": "",
                "border-color": "",
                "border-radius": "",
            },

            "tooltip_subscription_svg": {
                "fill": "",
            },

            "appstle_tooltip": {
                "color": "#000000",
                "background-color": "",
            },

            "appstle_tooltip_border_top_color": {
                "border-top-color": "",
            },

            "appstle_subscription_final_price": {
                "color": "#000000",
            },
            "appstle_widget_text_color": {
                "color": "",
            },
            "appstle_selected_background": {
                "background": "transparent",
            },
            "customCSS": ".appstleLoyaltyTable{\ndisplay: none !important;\n}\n\nbody #appstle_subscription_widget0 .appstle_tooltip_wrapper .appstle_tooltip .appstle_tooltip_appstle {\ndisplay: none !important;\n}\n\n\n#appstle_subscription_widget0 .appstle_subscription_wrapper {\nborder: none!important;\n}\n#appstle_subscription_widget0 .appstle_subscription_wrapper_option:not(.appstle_include_dropdown) {\n    border: 1px solid black !important;\nmargin-top: 20px!important;\n}\n#appstle_subscription_widget0 .appstle_subscription_wrapper_option.appstle_include_dropdown {\nmargin-top: 20px!important;\n    border: 1px solid black !important;\n}\n.appstle_subscribe_save_text{font-weight:900;font-size:16px; color:rgb(241, 102, 34);line-hight:1 !important}",
            "elementCSS": "[]",
            "customerPortalCss": "",
            "priceSelector": "",
            "landingPagePriceSelector": "",
            "quickViewClickSelector": "",
            "badgeTop": "",
            "pricePlacement": "BEFORE"
        }
      };

    }

    function urlIsProductPage() {
    // return null != decodeURIComponent(window.location.pathname).match(/\/products\/(([a-zA-Z0-9]|[\-\.\_\~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[\ud83c\ud83d\ud83e][\ud000-\udfff]){1,})\/?/)
    return decodeURIComponent(window.location.pathname).includes('/products/');
    }
  }
)(window);

