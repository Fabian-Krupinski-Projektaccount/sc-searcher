const request = require('request');

var client_id;

exports.init = (clientId) => {
    if (!clientId) return;
    client_id = clientId;
}

exports.getTracks = function(search, limit) {
    return new Promise((res, rej) => {
        if(typeof search != 'string') throw 'Seach term is not type of string';
        if(isNaN(limit)) throw 'Not a number';
        if(limit > 100 || limit < 1) throw 'Limit must be between 1 and 100';
        if(!client_id) throw 'Must set client id with init() first';

        var searchURL = 'https://api-v2.soundcloud.com/search/tracks?q=SEARCH_TERM&client_id=CLIENT_ID_TERM&limit=LIMIT_TERM';;

        var spaces = search.split(' ');
        for(var i=0; i < spaces.length; i++) {
            search = search.replace(' ', '%20');
        }

        searchURL = searchURL.replace('CLIENT_ID_TERM', client_id).replace('SEARCH_TERM', search).replace('LIMIT_TERM', limit);

        const promise = new Promise((_res, _rej) =>
            request({url: searchURL}, function (error, response, body) {
                if(error) return _rej(new Error(error));

                if (!error && response.statusCode === 200){
                    return _res({
                        body: JSON.parse(body)
                    });
                }
            })
        );

        promise.then(response => {
            const body = response.body;
            const track_list = body.collection;

            return res(track_list);
        });
    });
}
