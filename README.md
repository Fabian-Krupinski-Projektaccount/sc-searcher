# Sc-Searcher
## A nodejs package to get soundcloud search results.

### Installing via NPM.

```$ npm i sc-searcher```

**Examples**

    const ScSearcher = require('sc-searcher');
    const scSearch = new ScSearcher();


    var client_id = process.env.CLIENT_ID;
    var query = 'Avicii';
    var result_limit = 5;

    scSearch.init(client_id);

    scSearch.getTracks(query, result_limit)
        .then((res) => {
            console.log(res);
        });



### Get ClientId.

1. Goto **soundcloud.com** and open your **Developer Tools(Strg + Shift + I)**

2. Watch Network Traffic and look for something like **session?client_id=egjDE3xmafwbjD9DkeUyd5PEmrdjGjfh**
