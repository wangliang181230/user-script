// ==UserScript==
// @name         抢锚位⚓️
// @namespace    http://tampermonkey.net/
// @version      3.0.0
// @description  给朋友编写的一个脚本，自动化抢锚位的工作。
// @author       王良
// @match        https://zkpt.zj.msa.gov.cn/*
// @icon         data:image/x-icon;base64,AAABAAEAMDAAAAEAIACoJQAAFgAAACgAAAAwAAAAYAAAAAEAIAAAAAAAACQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACvYAAgsmAAYLFhAKGyYQDBsmEAwbFgAN+xYADfsmEAwbJhAMGxYQChsmAAYK9gACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACvYAAgsWAAkbJh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
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';

    let count = 0;
    let hitCount = 0;
    let startTime = null;

    const clickSaveBtnForTest = false; // true：点击保存按钮测试 | false：点击提交按钮正式执行
    function clickSubmit () {
        try {
            if (clickSaveBtnForTest) {
                // 测试：点击保存按钮
                document.querySelector(".btn-save").click();
            } else {
                // 正式提交：点击提交按钮
                document.querySelector(".btn-submit").click();
            }
            count++;
            return true;
        } catch (e) {
            if (!e.message.includes(" is null")) {
                warn("clickSubmit 失败：", e);
            }
            return false;
        }
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // 执行中状态
    window.doing = false;
    window.stoping = false;

    // 检测需要执行
    async function checkDoParse () {
        const validateCode = document.querySelector(".validate-code");
        if (window.doing || window.stoping) {
            return;
        }
        window.doing = true;

        if (validateCode) {
            if (document.getElementById("captchaBox").innerHTML.trim() === "") {
                window.doing = false;
                close();
                return;
            }

            if (await autoFindType()) {
                return;
            }

            if (document.getElementById("captchaBox").innerHTML.trim() === "") {
                close();
            }
        } else if (document.querySelector(".btn-submit")) {
            info("点击提交按钮");
            if (clickSubmit()) {
                let submitTime = Date.now();
                let intervalA;
                intervalA = setInterval(() => {
                    if (document.querySelector(".validate-code")) {
                        clearInterval(intervalA);
                        window.doing = false;
                    } else {
                        if (Date.now() - submitTime > 1000) {
                            submitTime = Date.now();
                            info("重新点击提交按钮");
                            clickSubmit();
                        }
                    }
                }, 100);
                return;
            }
        }

        window.doing = false;
    }

    async function autoFindType () {
        if (startTime === null) {
            startTime = Date.now();
        }

        // 拖动滑块完成拼图的验证码
        const moveX = await parseSlider();
        if (moveX > 0) {
            // 移动滑块
            await moveBtn(moveX);
            setTimeout(() => { window.doing = false; }, 1500);
            return true;
        }

        // 点击文字验证码
        if (parseClick()) {
            return true;
        }

        return false;
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // 加载图像到Canvas
    function loadImage (img, imgName) {
        const canvas = new OffscreenCanvas(img.naturalWidth, img.naturalHeight);
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, img.naturalWidth, img.naturalHeight);

        //debug("图片名称：" + imgName);
        //debug("图片元素：", img);
        //debug(`图片尺寸：${imageData.width} * ${imageData.height}`);
        //debug(`图片数据：\n${dataTitle(imageData.width)}\n${dataToString(imageData.data, imageData.width)}`);

        return imageData;
    }

    function dataTitle (width) {
        let title = "  ";
        for (let i = 1; i <= width; i++) {
            title += i;

            let spaceLength = 22 - (i + "").length;
            while (spaceLength-- > 0) {
                title += " ";
            }
        }
        return title;
    }

    function dataToString (data, width) {
        let dataStr = "[\n  "
        let oneLength = 0;
        for (let i = 0; i < data.length; i++) {
            if (i > 0) {
                dataStr += ", ";
                if (i % 4 === 0) {
                    dataStr += "  ";
                    oneLength = 12 - oneLength;
                    while (oneLength > 0) {
                        dataStr += " ";
                        oneLength--;
                    }
                    oneLength = 0;
                    if (i / 4 % width === 0) {
                        dataStr += "\n  "
                    }
                }
            }
            dataStr += data[i];
            oneLength += (data[i] + "").length
        }
        dataStr += "\n]";

        return dataStr;
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function triggerMouseEvent (element, eventType, x, y) {
        const event = new MouseEvent(eventType, {
            view: window,
            bubbles: true,
            cancelable: true,
            clientX: x,
            clientY: y
        });
        element.dispatchEvent(event);
    }

    async function moveBtn (targetX) {
        hitCount++;

        const captchaBox = document.getElementById("captchaBox");
        if (captchaBox && captchaBox.innerHTML.trim() === "") {
            return;
        }

        let moveBtn0 = document.getElementById('tianai-captcha-slider-move-btn');
        if (!moveBtn0) {
            return;
        }

        // 起始坐标
        let startX = moveBtn0.getBoundingClientRect().left;
        let startY = moveBtn0.getBoundingClientRect().top;

        // 触发按下
        info("----------> 按下滑块");
        triggerMouseEvent(moveBtn0, 'mousedown', startX - (Math.random() * -10).toFixed(), startY - (Math.random() * -10).toFixed());

        // 分段移动
        info("----------- 开始移动滑块");
        let currentX = startX;
        const steps = 50 - (Math.random() * 20 - 10).toFixed();
        const lastStep = steps + Math.random() * 10;
        for (let i = 0; i <= lastStep; i++) { // 加随机次数是为了模拟终点漂浮不定的效果，避免被判定为破解程序
            if (!window.doing || captchaBox.innerHTML.trim() === "") {
                warn("<---------- 因状态异常，停止移动滑块");
                return;
            }

            currentX = startX + (targetX * (i > steps ? steps : i) / steps) + (i >= steps - 20 ? (Math.random() * 4 - 2) : 0);
            try {
                //debug(`移动滑块: i = ${i}, currentX = ${currentX.toFixed()}`);
                triggerMouseEvent(document, 'mousemove', currentX, startY - (Math.random() * 20 - 10).toFixed()); // 添加随机上下浮动，避免被发现为破解程序
            } catch (e) {
                const moveBtnNew = document.getElementById('tianai-captcha-slider-move-btn');
                if (moveBtnNew == null) {
                    return;
                }

                warn("移动滑块出现异常，重置滑块moveBtn、startX、startY");
                moveBtn0 = moveBtnNew;
                startX = moveBtn0.getBoundingClientRect().left;
                startY = moveBtn0.getBoundingClientRect().top;
            }
            // 添加延迟
            await new Promise(resolve => setTimeout(resolve, 15 - (Math.random() * 10 - 5).toFixed()));
        }

        // 释放滑块
        info(`<---------- 释放滑块（已刷新 ${count} 次，提交 ${hitCount} 次，总计耗时：${(Date.now() - startTime) / 1000} 秒）`);
        triggerMouseEvent(moveBtn0, 'mouseup', currentX - (Math.random() * 4 - 2).toFixed(), startY - (Math.random() * 20 - 10).toFixed());

        setTimeout(function () {
            checkMoveBtn();
        }, 2000);
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const ratio = 0.5;
    const sliderEnabled = true; // 是否识别抠图滑块验证码，true：需要识别 | false：不需要识别，跳过它
    const concatEnabled = true; // 是否识别上下图验证码，true：需要识别 | false：不需要识别，跳过它

    // 解析：拼图验证码（滑块）
    async function doParseSlider_1_slider () {
        if (!sliderEnabled) {
            warn("已禁用 拼图验证码（抠图滑块 / Slider）");
            refresh();
            return false;
        }

        info("---> 解析：拼图验证码（抠图滑块 / Slider）");
        // 加载图像到Canvas
        const bgData = loadImage(document.getElementById("tianai-captcha-slider-bg-img"), "背景");
        const slideData = loadImage(document.getElementById("tianai-captcha-slider-move-img"), "滑块");

        const isImage2 = bgData.data[0] < 100;
        if (isImage2) {
            warn("暂不支持当前深色背景图片的 拼图验证码（抠图滑块 / Slider）");
            refresh();
            return false;
        }

        let slideY, slideX; // 滑块位置坐标

        // 寻找滑块的Y坐标位置
        for (let x = 0; x < slideData.width; x++) {
            for (let y = 0; y < slideData.height; y++) {
                const n = (y * slideData.width + x) * 4

                const r = slideData.data[n]; // 红
                const g = slideData.data[n + 1]; // 绿
                const b = slideData.data[n + 2]; // 蓝
                //const a = slideData.data[n + 3]; // 透明度

                if (r !== 0 || g !== 0 || b !== 0) {
                    slideY = y + 12;
                    break;
                }
            }

            if (slideY) {
                break;
            }
        }

        // 寻找滑块该移到的位置
        for (let x = 50; x < bgData.width; x++) {
            const n = (slideY * bgData.width + x) * 4

            const r0 = bgData.data[n]; // 红
            const g0 = bgData.data[n + 1]; // 绿
            const b0 = bgData.data[n + 2]; // 蓝
            //const a0 = bgData.data[n + 3]; // 透明度

            if (isGray(r0, g0, b0)) {
                let match = true;
                for (let i = 1; i <= 40; i++) {
                    const r = bgData.data[n + i * 4]; // 红
                    const g = bgData.data[n + i * 4 + 1]; // 绿
                    const b = bgData.data[n + i * 4 + 2]; // 蓝
                    //const a = bgData.data[n + 3]; // 透明度

                    if (!isSimilarColors(x, r0, g0, b0, x + i, r, g, b, 30)) {
                        match = false;
                    }
                }
                if (match) {
                    slideX = x - 15;
                    break;
                }
            }
        }

        if (!slideX) {
            warn(`未找到滑块坐标`);
            refresh();
            return false;
        }

        info(`目标坐标：${slideX}, ${slideY}`);

        const moveX = (slideX * ratio).toFixed();
        info(`需移动滑块按钮 ${moveX} 像素（${slideX}）`);

        return moveX;
    }

    function isGray (r, g, b) {
        return r > 20 && r < 105 && g > 20 && g < 130 && b > 20 && b < 135;
    }

    ////////////---------------------------------------//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // 解析：拼图验证码（旋转）
    async function doParseSlider_2_rotate () {
        warn("暂不支持 拼图验证码（旋转 / Rotate）");
        refresh();
        return false;
    }

    ////////////---------------------------------------//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // 解析：拼图验证码（上下图 / Concat）
    async function doParseSlider_3_concat () {
        if (!concatEnabled) {
            warn("已禁用 拼图验证码（上下图 / Concat）");
            refresh();
            return false;
        }

        info("---> 解析：拼图验证码（上下图 / Concat）");

        const concatImgData = await getConcatImageData();
        const isImage2 = concatImgData.data[0] < 100;
        //debug(`查找切割点：findCutPoint([...], ${concatImgData.width}, ${isImage2 ? 0 : 47}, ${isImage2 ? 150 : 17});`);
        const cutX = window.findCutPoint(concatImgData.data, concatImgData.width, isImage2 ? 0 : 47, isImage2 ? 150 : 20);
        if (!cutX) {
            warn("========> 警告：解析 拼图验证码（上下图 / Concat）未能成功，脚本代码需优化");
            refresh();
            return false; // 未解析成功
        }

        info(`切割点：${cutX}`);

        const moveX = ((concatImgData.width - cutX) * ratio).toFixed();
        info(`需移动滑块按钮 ${moveX} 像素（${concatImgData.width - cutX}）`);

        return moveX;
    }

    function getConcatImageData () {
        return new Promise((resolve) => {
            const concatImageDiv = document.getElementById("tianai-captcha-slider-concat-img-div");
            if (!concatImageDiv) {
                return null;
            }

            const base64 = concatImageDiv.style.backgroundImage.replace("url(\"", "").replace("\")", "");

            const img = document.createElement("img");
            img.onload = () => {
                const data = loadImage(img, "concat类型图片");
                img.remove();
                resolve(data);
            };
            img.src = base64;
            document.getElementsByTagName("body")[0].append(img);
        });
    }

    // 判断两个点是否为颜色相似
    function isSimilarColors (x0, r0, g0, b0, x1, r1, g1, b1, diff) {
        if (Math.abs(r0 - r1) + Math.abs(g0 - g1) + Math.abs(b0 - b1) <= diff) {
            //debug(`${x0 + 1}（${r0}, ${g0}, ${b0}） 与 ${x1 + 1}（${r1}, ${g1}, ${b1}） 区别较小, diff = ${diff}`);
            return true;
        } else {
            //debug(`${x0 + 1}（${r0}, ${g0}, ${b0}） 与 ${x1 + 1}（${r1}, ${g1}, ${b1}） 区别较大, diff = ${diff}`);
            return false;
        }
    }

    // 寻找切割点
    window.findCutPoint = function (data, width = 600, startY = 0, diff = 20) {
        const span = 10;

        for (let i = (10 + startY * width) * 4; i < (width * (startY + 1) - span) * 4; i += 4) {
            const x0 = i / 4 - startY * width;
            const r0 = data[i];
            const g0 = data[i + 1];
            const b0 = data[i + 2];

            const x1 = x0 + 1;
            const r1 = data[i + 4];
            const g1 = data[i + 4 + 1];
            const b1 = data[i + 4 + 2];

            // 判断与下一个点的颜色是否区别较大
            if (isSimilarColors(x0, r0, g0, b0, x1, r1, g1, b1, diff)) {
                //debug("下一个点");
                continue;
            }

            //debug(`判断前10个像素与当前像素颜色差不多，后10个像素与后1个像素颜色差不多（超过5个即为差不多）`);
            let lCount = 0;
            let rCount = 0;
            for (let n = 1; n <= span; n++) {
                const r00 = data[i - n*4];
                const g00 = data[i - n*4 + 1];
                const b00 = data[i - n*4 + 2];
                if (isSimilarColors(x0, r0, g0, b0, x0-n, r00, g00, b00, diff)) {
                    lCount++;
                }
            }
            for (let n = 1; n <= span; n++) {
                const r11 = data[i + n*4 + 4];
                const g11 = data[i + n*4 + 4 + 1];
                const b11 = data[i + n*4 + 4 + 2];
                if (isSimilarColors(x1, r1, g1, b1, x1+n, r11, g11, b11, diff)) {
                    rCount++;
                }
            }
            if (lCount >= 5 && rCount >= 5) {
                return i / 4 + 1 - startY * width;
            }
        }
        return null;
    }

    ////////////=======================================//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // 解析：点击文字验证码
    function doParseWordImageClick () {
        warn("暂不支持 点击文字验证码");
        refresh();
        return false;
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // 判断是否解析：拼图验证码
    async function parseSlider () {
        const tipDiv = document.getElementById("tianai-captcha-slider-move-track-font");
        if (!tipDiv) {
            return false;
        }

        try {
            if (tipDiv.innerText === "拖动滑块完成拼图") {
                let imgDiv

                // 滑块 和 旋转
                imgDiv = document.getElementById("tianai-captcha-slider-img-div");
                if (imgDiv) {
                    if (imgDiv.classList.contains("slider-img-div")) {
                        return await doParseSlider_1_slider();
                    } else if (imgDiv.classList.contains("rotate-img-div")) {
                        return await doParseSlider_2_rotate();
                    }
                }

                // 上下图
                imgDiv = document.getElementById("tianai-captcha-slider-concat-img-div");
                if (imgDiv) {
                    return await doParseSlider_3_concat();
                } else {
                    warn("<--- 未识别到 已知的 拼图验证码");
                    refresh();
                    return false;
                }
            } else {
                warn("<--- 未识别到 拼图验证码");
                refresh();
                return false;
            }
        } catch (e) {
            warn("<--- 异常：拼图验证码，error:", e);
            refresh();
            return false;
        }
    }

    // 判断是否解析：点击文字验证码
    function parseClick () {
        const tipDiv = document.getElementById("tianai-captcha-click-track-font");
        if (!tipDiv) {
            return false;
        }

        try {
            if (document.getElementById("tianai-captcha-click-track-font").innerText === "请依次点击:") {
                return doParseWordImageClick();
            } else {
                warn("<--- 未识别到 点击文字验证码");
                return false;
            }
        } catch (e) {
            warn("<--- 异常：点击文字验证码，error:", e);
            return false;
        }
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function refresh () {
        if (window.stoping) {
            return false;
        }

        try {
            window.stoping = true;
            document.querySelector(".slider-bottom .refresh-btn").click();

            let intervalB
            intervalB = setInterval(() => {
                if (document.getElementById("tianai-captcha-loading") == null || document.getElementById("tianai-captcha-loading").style.display === 'none') {
                    clearInterval(intervalB);
                    window.stoping = false;
                }
            }, 10);

            count++;
            return true;
        } catch (e) {
            warn("刷新出现异常：", e);
            window.stoping = false;
            return false;
        }
    }

    function close () {
        try {
            document.querySelector(".ant-modal-close-x").click();
            return true;
        } catch (e) {
            warn("关闭验证码失败：", e);
            return false;
        }
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function start () {
        if (window.qmwInterval) return false;

        window.qmwInterval = setInterval(checkDoParse, 100);
        info('---> 开始抢锚位！！！');
        window.doing = false;
        window.stoping = false;
        return true;
    }

    function stop () {
        if (!window.qmwInterval) return false;

        clearInterval(window.qmwInterval);
        window.qmwInterval = null;
        info('<--- 停止抢锚位！！！');
        window.doing = false;
        window.stoping = false;
        return true;
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function startCheckResult () {
        if (window.crInterval) return false;

        window.crInterval = setInterval(() =>{
            //
        }, 100);

        return window.crInterval;
    }

    function stopCheckResult () {
        if (!window.crInterval) return false;

        clearInterval(window.crInterval);
        window.crInterval = null;
        return true;
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function checkMoveBtn () {
        if (document.querySelector('p.after-title')) {
            checkResult();
            return true;
        }

        const errorMsgElement = document.querySelector('.ant-message .ant-message-error');
        if (errorMsgElement) {
            const errorMsg = errorMsgElement.innerText;
            if (!errorMsg) {
                return false;
            }

            if (errorMsg.indexOf('验证码错误') >= 0) {
                warn('❌ 提交了验证码，但验证码错误，识别结果不正确：');
            } else if (errorMsg.indexOf('该锚位已在') === 0 || errorMsg.indexOf('如要申请请联系') > 0) {
                if (window.stoping === false) {
                    return;
                }

                warn(`❌ 提交了验证码，但该锚位已被其他人抢走了！！！  提示信息：${errorMsg}`);
                // 停止识别验证码
                stop();
                // 提示已被抢走
                showMsg(`❌ 很遗憾，该锚位已被其他人抢走了，现已停止识别验证码，有需要时再按F2开启！！！！！！此次总计刷新了验证码图片次数：${count} 次，提交了 ${hitCount} 次，总计耗时：${(Date.now() - startTime) / 1000} 秒`);

                count = 0;
                hitCount = 0;
                startTime = null;
            } else {
                warn(`❌ 提交了验证码，但失败了，错误信息：${errorMsg}`);
            }

            return true;
        } else {
            return false; // 未找到成功或失败的提示信息
        }
    }

    function checkResult () {
        if (count === 0 || hitCount === 0) return false;

        let title;
        let logFun;

        const successElement = document.querySelector('p.after-title');
        if (successElement && successElement.innerText && successElement.innerText.indexOf('成功') > 0) {
            title = '✅ 抢锚位成功啦！！！';
            logFun = showMsg;
        } else {
            title = `❌ 很遗憾，抢锚位未能成功。`;
            logFun = warn;
        }

        logFun(`${title}\n总计刷新了验证码图片：${count} 次，提交了 ${hitCount} 次，总计耗时：${(Date.now() - startTime) / 1000} 秒`);

        count = 0;
        hitCount = 0;
        startTime = null;
        return true;
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // 初始化
    function init () {
        if (window.Notification) {
            if (Notification.permission !== 'denied' && Notification.permission !== 'granted') {
                Notification.requestPermission().then(r => info('“消息通知” 功能授权结果：' + r));
            }
        }

        // 绑定键盘事件，用于启停程序
        window.addEventListener('keyup', function (event) {
            if (event.key === 'F2') {
                if (window.qmwInterval) {
                    stop();
                    stopCheckResult();
                    showMsg('停止识别验证码', false, false, 1500);
                } else {
                    showMsg('开始识别验证码', false, false, 1500);
                    start();
                    startCheckResult();
                }
            }
        });
    }

    // 提示系统消息
    function showMsg (msg, logWarn, needAlert, autoCloseTime) {
        if (logWarn !== false) {
            warn(msg);
        }

        try {
            function show () {
                const notice = new Notification(msg);
                if (autoCloseTime) {
                    setTimeout(() => notice.close(), autoCloseTime);
                }
            }

            // 检查通知权限
            if (Notification.permission === 'granted') {
                // 如果权限已经被授予
                show();
            } else if (Notification.permission !== 'denied') {
                // 如果权限没有被拒绝，向用户请求权限
                Notification.requestPermission().then(function (permission) {
                    if (permission === 'granted') {
                        show();
                    }
                });
            }
        } catch (e) {
            warn("显示通知失败：", e);
        }

        if (needAlert !== false) {
            setTimeout(function () {
                alert(msg);
            }, 1000);
        }
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function logTime () {
        const time = new Date();
        const hours = String(time.getHours()).padStart(2, '0');
        const minutes = String(time.getMinutes()).padStart(2, '0');
        const seconds = String(time.getSeconds()).padStart(2, '0');
        const milliseconds = String(time.getMilliseconds()).padStart(3, '0');

        return `${hours}:${minutes}:${seconds}.${milliseconds} - `;
    }

    function log (args) {
        return [logTime(), ...args];
    }

    function debug () {
        console.debug(...log(arguments));
    }

    function info () {
        console.info(...log(arguments));
    }

    function warn () {
        console.warn(...log(arguments));
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // 初始化
    init();

    // 自动开始脚本，方便测试
    //setTimeout(start, 1000);
})();
