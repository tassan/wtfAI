var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];
        if (node.nodeType === 3) {
            var funnyExpressions = ['a bunch of if statements', 'some Ifs and elses', 'many switch cases'];
            var funny = funnyExpressions[Math.floor(Math.random()*funnyExpressions.length)];
            var text = node.nodeValue;
            var replacedText = text.replace(/AI|Artificial intelligence|Artificial Intelligence|artificial intelligence/g,
                 funny);

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}