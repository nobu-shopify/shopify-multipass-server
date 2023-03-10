# shopify-multipass-server
Testing environment of Shopify Multipass

## Quickstart
1. Clone / download this repo into your local folder.
2. Create `.env` file in the root of this application, and write up the following. Multipass secret can be found in Shopify Admin > Settings > Checkout and accounts > Customer account URLs
```
STORE_URL="your_store.myshopify.com"
MULTIPASS_SECRET="your_stores_multipass_secret"
```
3. Run `yarn` then `yarn dev`. The app should listen to localhost:5000
4. In your browser, open `localhost:5000?email=myfirstmultipass@yahoo.youmadeit` and see it works!

## How to use it
- Multipass parameters are given as the URL query.
    - Example: `localhost:5000?email=xxxxx&first_name=yyyyy&last_name=zzzzz&return_to=https://www.google.com/`
    - email is the only mandatory field. 
    - The app generates created_at (another Multipass mandatory field) automatically.
- This app supports most Multipass params described in https://shopify.dev/docs/api/multipass#2-encode-your-customer-information-using-json
    - Modify `multipass_params` function in `index.js` file to customize.

### Enjoy Multipass!!
