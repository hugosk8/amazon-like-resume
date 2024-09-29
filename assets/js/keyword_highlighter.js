document.addEventListener('DOMContentLoaded', function () {
    const search_input = document.getElementById('searchInput');
    
    search_input.addEventListener('input', function () {
        removeHighlights();
        const searchText = search_input.value.trim();
        if (searchText === '') return;
        highlightText(searchText);
    });

    function highlightText(searchText) {
        const regex = new RegExp(`(${searchText})`, 'gi');
        traverseAndHighlight(document.body, regex);
    }

    function traverseAndHighlight(node, regex) {
        if (node.nodeType === 3) { 
            const nodeValue = node.nodeValue;
            const match = nodeValue.match(regex);

            if (match) {
                const highlightSpan = document.createElement('span');
                highlightSpan.innerHTML = nodeValue.replace(regex, '<span class="highlight">$1</span>');
                node.parentNode.replaceChild(highlightSpan, node);
            }
        } else if (node.nodeType === 1 && node.nodeName !== 'SCRIPT' && node.nodeName !== 'STYLE') {
            for (let i = 0; i < node.childNodes.length; i++) {
                traverseAndHighlight(node.childNodes[i], regex);
            }
        }
    }

    function removeHighlights() {
        const highlightedElements = document.querySelectorAll('.highlight');
        highlightedElements.forEach(function (element) {
            const parent = element.parentNode;
            parent.replaceChild(document.createTextNode(element.textContent), element);
            parent.normalize(); 
        });
    }
});
