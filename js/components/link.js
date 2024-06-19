export class LinkFuncoes {
    constructor() {
        // Constructor can be used to initialize any properties or perform setup.
    }

    clickLink() {
        var currentPath = window.location.pathname; // Get current path
        var a = document.querySelectorAll('a');

        a.forEach(function(link) {
            link.style.textDecoration = 'none';

            // Get path from href and compare with currentPath
            var linkPath = new URL(link.href).pathname;
            if (currentPath === linkPath) {
                link.style.color = 'red';
            }
        });
    }

    addEvento() {
        document.addEventListener("DOMContentLoaded", () => {
            this.clickLink();
        });

        // Listen for hash changes to re-evaluate link styles
        window.addEventListener("hashchange", () => {
            this.clickLink();
        });
    }
}
