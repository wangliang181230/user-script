// ==UserScript==
// @name         异世界动漫：播放页面 - 播放框放大化
// @namespace    http://tampermonkey.net/
// @version      2025-06-10
// @description  try to take over the world!
// @author       You
// @match        https://www.dmmiku.com/index.php/vod/play/id/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEJCM0NCREYzMUY5MTFFOUEyMkNBN0IxN0YwN0NFNkQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEJCM0NCRTAzMUY5MTFFOUEyMkNBN0IxN0YwN0NFNkQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowQkIzQ0JERDMxRjkxMUU5QTIyQ0E3QjE3RjA3Q0U2RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowQkIzQ0JERTMxRjkxMUU5QTIyQ0E3QjE3RjA3Q0U2RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqLjyRIAABRySURBVHja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
// @grant        none
// @run-at       document-start
// ==/UserScript==
(function() {
    'use strict';

    let head
    let interval = setInterval(() => {
        head = document.getElementsByTagName('head')
        if (!head || head.length === 0) {
            return
        }

        const styleElement = document.createElement('style')
        styleElement.id = "monkey-css";
        styleElement.type = 'text/css'
        const cssContent = `
            #topnav, .extra,
                #topnav .header:last-child
              { display: none; }
            .head_a { width: 28.9rem; height: 0.9rem; }
            .head_menu_a li,
                .head_menu_a a,
                .head_user li
              { line-height: 0.9rem !important; }
            .play_but li { height: 1rem; }
            .play_but a { line-height: 1rem; }
            .head_user { top: 2px; right: 18px; transform: inherit; }
            /*.play_boxbg .play_video { padding: 0.12rem 0 0; }*/
            .play_boxbg .play_video { padding: 0; }
            .play_boxbg .left_row { width: 105.3%; margin: 0 0 0 -2.65%; float: inherit !important; }
            .play_boxbg .left_row .player_video { height: 714px; margin-top: -2px; }
            .right_row .pannel { padding: 0; }
            #bofy.pannel { padding: 0; }
        `;
        if (styleElement.styleSheet) {
            styleElement.styleSheet.cssText = cssContent // 兼容IE
        } else {
            styleElement.appendChild(document.createTextNode(cssContent))
        }
        head[0].appendChild(styleElement)

        clearInterval(interval)
        head = null
        interval = null
        console.log('广告已隐藏，脚本停止！！！')
    }, 10);
})();