const request = require('request');

var searchURL = 'https://api-v2.soundcloud.com/search/tracks?q=SEARCH_TERM&client_id=CLIENT_ID&limit=LIMIT_TERM';

exports.getTracks = function (client_id, search, limit, callback) {
    if(typeof search != 'string') throw "Seach term is not type of string";
    if(isNaN(limit)) throw "Not a number";
    if(limit > 100 || limit < 1) throw "Limit must be between 1 and 100";
    if(!client_id) throw "Must have a client id";

    var searchURL = 'https://api-v2.soundcloud.com/search/tracks?q=SEARCH_TERM&client_id=' + client_id + '&limit=LIMIT_TERM';

    var spaces = search.split(" ");
    for(var i=0; i < spaces.length; i++){
        search = search.replace(" ", "%20");
    }

    searchURL = searchURL.replace("CLIENT_ID", client_id).replace("SEARCH_TERM", search).replace("LIMIT_TERM", limit);

    request({
        url: searchURL
    }, function (error, response, body) {
        if(error) throw new Error(error);

        if (!error && response.statusCode === 200){
            body = JSON.parse(body);
            var tracks  = [];

            for (const track of body.collection) {
                tracks.push(track);
            }

            callback(tracks);
        }
    })
}
