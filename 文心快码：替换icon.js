// ==UserScript==
// @name         文心快码：替换icon
// @namespace    http://tampermonkey.net/
// @version      2025-03-20
// @description  try to take over the world!
// @author       You
// @match        https://yr7ywq.smartapps.baidu.com/
// @icon         https://lingjing-online.cdn.bcebos.com/v1/lingjing-online/appavatar/2024-07-18/666487c5-5006-472d-b2be-59beee11b05b.png?x-bce-process=image/resize,m_fill,w_360,h_360
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    let head
    let interval = setInterval(() => {
        head = document.getElementsByTagName("head")
        if (!head || head.length === 0) {
            return
        }

        // <link rel="icon" href="favicon.ico" type="image/x-icon">
        const linkElement = document.createElement("link")
        linkElement.rel = "icon"
        linkElement.type = "text/css"
        linkElement.href = "https://lingjing-online.cdn.bcebos.com/v1/lingjing-online/appavatar/2024-07-18/666487c5-5006-472d-b2be-59beee11b05b.png?x-bce-process=image/resize,m_fill,w_360,h_360"

        head[0].appendChild(linkElement)

        clearInterval(interval)
        head = null
        interval = null
        console.log("icon已替换")
    }, 30)
})();