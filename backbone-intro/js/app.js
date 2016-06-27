let VolumeModel = require('./models/volume');
let VolumeView = require('./views/volume');

window.addEventListener('load', function () {
    // Models roll on their own.
    let vmodel = new VolumeModel();

    // Views like company. They need to know two things:
    //    1. What data do I care about?
    //    2. What DOM elements should I be updating when things change?
    let volume = new VolumeView({
        model: vmodel,
        el: document.getElementById('vol-knobs'),
    });

    // let npv = new NowPlayingView({
    //     model: vmodel,
    //     el: document.getElementById('vol-knobs'),
    // });
});