let test = require('tape');
let fs = require('fs');

test('GeoJSON format of data file', function (t) {
    let data = fs.readFileSync('data/water-atms.geojson');
    t.doesNotThrow(function () {
        JSON.parse(data);
    });
    t.end();
});