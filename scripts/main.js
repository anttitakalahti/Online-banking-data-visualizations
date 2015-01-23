requirejs.config({

    baseUrl: 'scripts/lib',

    paths: {
        app: '../app'
    }

});

requirejs(['jquery', 'app/input'],
function   ($,        input) {

	input.draw('#container')

});