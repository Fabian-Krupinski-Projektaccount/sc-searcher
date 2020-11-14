# Sc-Searcher

#Description:
Gets tracks that match a search term.

#Download:
NPM URL:
Console Command: npm install sc-searcher

#ussage:
Example:
```node
var scSearch = require('soundcloud-search-node');
scSearch.getTracks("Avicii", 10, function callback(tracks){
  for(var i = 0; i < tracks.length; i++){
      console.log(tracks[i].genre);
  }
});
```
