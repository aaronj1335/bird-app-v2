define([
    'bird/bird'
], function(birdifyIt) {
    return function(node) {
        var childNodes = birdifyIt(node).childNodes;
        childNodes[childNodes.length-1].style.backgroundColor = 'blue';
    };
});
