# Sc-Searcher
## A nodejs package to get soundcloud search results.

### Installing via NPM.

```$ npm i sc-searcher```

**Examples**

    const scSearch = require('sc-searcher');

    var client_id = 'egDzE3xmafwb5ki9VMBsIXdrtAEmZPtq';
    var query = 'Query';
    var result_limit = 5;

    scSearch.init(client_id);

    (async () => {
        var results = await scSearch.getTracks(query, result_limit);

        console.log(results);
    })();



### Get ClientId.

1. Goto **soundcloud.com** and open your **Developer Tools(Strg + Shift + I)**

2. Watch Network Traffic and look for something like **session?client_id=egjDE3xmafwbjD9DkeUyd5PEmrdjGjfh**
