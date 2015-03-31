module.exports = {
    build: {
        files: {
            'data/ACT/geo/ACT-SUBURBS.geo.json':         ['data/ACT/geo/*.geo.json',     '!data/ACT/geo/ACT-SUBURBS.geo.json'],
            'data/NSW/geo/NSW-SUBURBS.geo.json':         ['data/NSW/geo/*.geo.json',     '!data/NSW/geo/NSW-SUBURBS.geo.json'],
            'data/NT/geo/NT-SUBURBS.geo.json':           ['data/NT/geo/*.geo.json',      '!data/NT/geo/NT-SUBURBS.geo.json'],
            'data/QLD/geo/QLD-SUBURBS.geo.json':         ['data/QLD/geo/*.geo.json',     '!data/QLD/geo/QLD-SUBURBS.geo.json'],
            'data/SA/geo/SA-SUBURBS.geo.json':           ['data/SA/geo/*.geo.json',      '!data/SA/geo/SA-SUBURBS.geo.json'],
            'data/TAS/geo/TAS-SUBURBS.geo.json':         ['data/TAS/geo/*.geo.json',     '!data/TAS/geo/TAS-SUBURBS.geo.json'],
            'data/Unknown/geo/Unknown-SUBURBS.geo.json': ['data/Unknown/geo/*.geo.json', '!data/Unknown/geo/Unknown-SUBURBS.geo.json'],
            'data/VIC/geo/VIC-SUBURBS.geo.json':         ['data/VIC/geo/*.geo.json',     '!data/VIC/geo/VIC-SUBURBS.geo.json'],
            'data/WA/geo/WA-SUBURBS.geo.json':           ['data/WA/geo/*.geo.json',      '!data/WA/geo/WA-SUBURBS.geo.json']
        }
    }
};
