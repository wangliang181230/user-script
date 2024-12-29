// ==UserScript==
// @name         百度翻译：移除广告
// @namespace    http://tampermonkey.net/
// @version      1.1.1
// @since        2024/12/16
// @description  百度翻译页面顶部总是出现广告，很烦，移除掉它。
// @author       王良
// @match        https://fanyi.baidu.com/*
// @icon         data:image/x-icon;base64,AAABAAEAICAAAAEAIACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPzbt074plC+9Y0e9PWIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1jR70+KZQvvzbuEwAAAAAAAAAAAAAAAD6wYWE9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//rBhYQAAAAA/Nu4TPWIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//zbuEz4plC+9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/+KZQvvaOIPL1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1jh/y9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/2kyr//vDh//vRpP/3okf/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//aRJv////////////7w4f/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/3oET//u/g//7v4P/2lCz/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9o8i/////////////vDh//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//ekS/////////////aWMP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/2jyL////////////96tb/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/96RL////////////9pYw//WIFP/1iBT/96NJ//ecO//2mDP/9pIn//WNHv////////////3q1v/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/3pEv////////////2ljD/9YgU//m5df////////////////////////////////////////v3//3n0P/948j//N/A//zdvf/817H//Nex//ixZP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//ekS/////////////aWMP/1iBT/9o8i//aYM//3n0L/96BD//elTf/4qFT////////////+8ub/+bt4//rAhP/7zJr//Ny5//3r2P/94sb/9Y0d//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/96RL////////////9pYw//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP////////////3s2f/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/3pEv////////////2ljD/9YgU//WIFP/2kCX/+saO//m9ff/5tWz/+Kxc/////////////vLl//aOIP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//ekS/////////////aWMP/1iBT/9YgU//rGjv/+7+D//vfu//748P////////////////////////////////////////////rHkP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/96RL////////////9pYw//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFf////////////727f/3okf/+KtZ//mzav/5tGv/9YgV//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/3pEv////////////2ljD/9po3//rGjv/4qlb/9Y4f//WIFP/1iBT/9YgU/////////////vjx//WIFP/1iBT/9pg0//m3cP/6x5D/9Y0d//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//ekS/////////////aWMP/1iBT/+KdS//3kyv///Pn//N6+//m1bf/2jyP//eXM//rEiv/2mjf/+bl0//3o0v/////////////////82rb/9Y0d//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/817H//Nex//zXsf/817H//OHD////////////9pYw//WIFP/1iBT/9YgU//irWv/969j///////758//6xYz/+bJn//7x5P/////////////////////////////////+7dz/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU///////////////////////////////////////2ljD/9YgU//WIFP/1iBT/9YgU//WKGP/5vHv///r1////////////////////////+fT//N28//rCh//4rFz/9po3//WLGv/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9pgz//aYM//2mDP/9pgz//aYM//2mDP/9pgz//WKGP/1iBT/9YgU//WIFP/1iBT/9YgU//WJF//83r7//////////////////eLF//WMHP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/+8uY///////+7t7//efP////////////+9Km//WJF//1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//irWv//////+9Wr//aOIP/2jiD//eXM////////////+86e//WIFf/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//rDiP/+9+///vfv//m2bv/1iBT/9YgU//WIFP/1jh///vLm//rJlf/1iBX/9YgU//WIFP/2kyn//vPn////////////+sWN//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/+seQ////////////+bl1//WIFP/2kCX//vLm//758////fv//efQ//zhxP/82bP/+9Gk//rJlP/82bT///////////////7//eLF//aXMv/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/6x5D////////////5uXX/9YgU//aYM//4sGL/+LBj//m4cv/5vHr/+sOJ//vLmP/70qb//Nm0//zfwP/+9Or////////////6xo//9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WMHP/2kCT/9pAk//WLGv/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WNHv/837//+r+B//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/2jiDy9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9o4g8vimUL71iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/4plC+/Ny5TPWIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//zbuEwAAAAA+sGFhPWIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/6wYWEAAAAAAAAAAAAAAAA/Nu4TPimUL71jh/y9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WIFP/1iBT/9YgU//WOH/L4plC+/Ny5TAAAAAAAAAAA4AAAB4AAAAGAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAABgAAAAeAAAAc=
// @grant        none
// ==/UserScript==

(function() {
    'use strict'

    let head
    let interval = setInterval(() => {
        head = document.getElementsByTagName('head')
        if (!head || head.length === 0) {
            return
        }

        const selector = [
            '.KxVKmLZM', // 顶部：广告
            '._m6jE1Mj', // 翻译下方：广告
            '.URCZyDIb', // 头部：开通会员
            '.LsBEmsAO::after', // 头部：充值返赚
            '.nhcoTCy6', // 全屏：广告
        ]

        const styleElement = document.createElement('style')
        styleElement.type = 'text/css'
        const cssContent = `${selector.join(', ')}{display:none}`
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
})()
