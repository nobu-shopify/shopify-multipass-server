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
    - `email` is the only mandatory field. 
    - The app generates `created_at` automatically (another mandatory field of Multipass).
- This app supports most Multipass params described in https://shopify.dev/docs/api/multipass#2-encode-your-customer-information-using-json
    - Modify `multipass_params` function in `index.js` file to customize.

## Troubleshooting
### Where .env file should be located?
Once you've downloaded / unzipped the github files, the folder should contain something like this:
```
$ ls -la

-rw-r--r--  1 nobu staff  1069 3 10 07:40 LICENSE
-rw-r--r--  1 nobu staff  1141 3 10 09:47 README.md
-rw-r--r--  1 nobu staff  2582 3 10 09:06 index.js
-rw-r--r--  1 nobu staff  535 3 10 08:32 package.json
```
In this folder, create .env file and write in store URL and Multipass secret as indicated in the README.md.  
Once you have .env file, ls -la output should look like:
```
$ ls -la

-rw-r--r--  1 nobu staff   87 3 10 09:02 .env
-rw-r--r--  1 nobu staff  1069 3 10 07:40 LICENSE
-rw-r--r--  1 nobu staff  1141 3 10 09:47 README.md
-rw-r--r--  1 nobu staff  2582 3 10 09:06 index.js
-rw-r--r--  1 nobu staff  535 3 10 08:32 package.json
```
### I do not have yarn installed. What to do?
Install homebrew - https://brew.sh/index_ja  
then run 
```
brew install yarn
```
# Enjoy Multipass!!
