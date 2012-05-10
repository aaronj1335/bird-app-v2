require([
    'bluejay'
], function(bluejay) {

    test('put an effin bluejay on it', function() {
        var body = document.getElementsByTagName('body')[0], childNodes;
        bluejay(body);
        childNodes = body.childNodes;
        equal(childNodes[childNodes.length-1].style.backgroundColor, 'blue');
    });

    start();
});
