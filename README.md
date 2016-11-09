# <img src="https://what3words.com/assets/images/w3w_square_red.png" width="64" height="64" alt="what3words">&nbsp;3words-button

JavaScript for button to show the 3 word address for the user's current location

## Get started
Get your API key at https://map.what3words.com/register?dev=true

Set your API in `3words-button.js`

```javascript
function show3WordAddress(location) {
    data = {
        key: 'YOUR-W3W-API-KEY',
        coords: location.coords.latitude + ',' + location.coords.longitude
    };
```

Then run the sample html file.

Warning:  Modern browsers permits finding current location only over HTTPS.

## Licensing

MIT
