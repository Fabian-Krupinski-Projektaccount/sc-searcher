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


### Get ClientId.

######1. Goto soundcloud.com and open your Developer Tools(Strg + Shift + I)

######2. Watch Network Traffic and look for something like session?client_id=__egjDE3xmafwbjD9DkeUyd5PEmrdjGjfh__
