# Namaste React 🚀

fetch("https://www.swiggy.com/dapi/restaurants/list/update", {
  "headers": {
    "__fetch_req__": "true",
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9,hi;q=0.8",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Chromium\";v=\"130\", \"Google Chrome\";v=\"130\", \"Not?A_Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  },
  "referrer": "https://www.swiggy.com/restaurants",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"lat\":23.3440997,\"lng\":85.309562,\"nextOffset\":\"CJhlELQ4KICAuLP7qaqcGDCnEw==\",\"widgetOffset\":{\"NewListingView_category_bar_chicletranking_TwoRows\":\"\",\"NewListingView_category_bar_chicletranking_TwoRows_Rendition\":\"\",\"Restaurant_Group_WebView_PB_Theme\":\"\",\"Restaurant_Group_WebView_SEO_PB_Theme\":\"\",\"collectionV5RestaurantListWidget_SimRestoRelevance_food_seo\":\"24\",\"inlineFacetFilter\":\"\",\"restaurantCountWidget\":\"\"},\"filters\":{},\"seoParams\":{\"seoUrl\":\"https://www.swiggy.com/restaurants\",\"pageType\":\"FOOD_HOMEPAGE\",\"apiName\":\"FoodHomePage\"},\"page_type\":\"DESKTOP_WEB_LISTING\",\"_csrf\":\"m0QhbHPclsWv-X6aK-EKI0kukIiADYelM40eHG38\"}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
