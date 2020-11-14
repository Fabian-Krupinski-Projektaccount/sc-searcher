# Sc-Searcher
## A nodejs package to get soundcloud search results.

### Installing via NPM.

```$ npm i sc-searcher```

**Examples**

    const scSearch = require('sc-searcher');

    var client_id = 'Your Client Id';
    var query = 'The Song To Search';
    var result_limit = 5;

    scSearch.getTracks(client_id, query, result_limit, function callback(tracks){
        for(var i = 0; i < tracks.length; i++){
            console.log(tracks[i]);
        }
    });
