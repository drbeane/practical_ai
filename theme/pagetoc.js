// Builds a right-side "On this page" table of contents from the current
// page's headings (h2-h6), independent of mdBook's left navigation sidebar.
(function () {
    function buildPageToc() {
        var main = document.querySelector('#mdbook-content main');
        if (!main) return;

        var headers = Array.prototype.slice
            .call(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(function (h) { return h.id; });

        if (headers.length === 0) return;

        var nav = document.createElement('nav');
        nav.id = 'page-toc';
        nav.className = 'sidetoc';
        nav.setAttribute('aria-label', 'On this page');

        var title = document.createElement('p');
        title.className = 'sidetoc-title';
        title.textContent = 'On this page';
        nav.appendChild(title);

        var list = document.createElement('ol');
        var baseLevel = parseInt(headers[0].tagName.charAt(1), 10);

        headers.forEach(function (h) {
            var level = parseInt(h.tagName.charAt(1), 10);
            var li = document.createElement('li');
            li.className = 'pagetoc-level-' + (level - baseLevel + 1);
            var a = document.createElement('a');
            a.href = '#' + h.id;
            a.textContent = h.textContent;
            li.appendChild(a);
            list.appendChild(li);
        });

        nav.appendChild(list);
        document.body.appendChild(nav);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', buildPageToc);
    } else {
        buildPageToc();
    }
})();
