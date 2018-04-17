var request = require('request');

var oauth = {
        consumer_key: 'xxxxxxxx',
        consumer_secret: 'XXXXXX',
        token: 'XXXXXX',
        token_secret: 'XXXXXX'
    };

var url = 'https://XXXXX/api/account/xxxxx/configuration/le-users/skills?v=1';
request.get({
    url: url,
    oauth: oauth,
    json: true,
    headers: {
        'Content-Type': 'application/json'
    }
}, function (e, r, b) {
    if (!e && r.statusCode == 200) {
        console.log(JSON.stringify(b));
    }
    else {
        console.log(JSON.stringify(b));
    }
});