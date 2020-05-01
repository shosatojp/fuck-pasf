// ==UserScript==
// @name         Fuck PASF
// @description  remove people also search for
// @namespace    https://github.com/shosatojp/fuck-pasf
// @homepage     https://github.com/shosatojp/fuck-pasf
// @version      0.1
// @author       Sho Sato
// @match        *://google.com/*
// @match        *://google.co.jp/*
// @require      file:///home/sho/repos/fuck-pasf/main.user.js
// @updateURL    https://github.com/shosatojp/fuck-pasf/raw/master/main.user.js?
// @downloadURL  https://github.com/shosatojp/fuck-pasf/raw/master/main.user.js?
// @run-at       document-start
// @noframes
// ==/UserScript==

(() => {
    const e = document.createElement('style');
    e.textContent = `
    [id^=ed_]{
        display: none;
    }
    `;
    window.addEventListener('DOMContentLoaded', () => {
        window.document.body.appendChild(e);
    });
})();
