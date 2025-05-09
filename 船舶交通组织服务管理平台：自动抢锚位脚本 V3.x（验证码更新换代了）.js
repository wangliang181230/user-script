// ==UserScript==
// @name         抢锚位⚓️
// @namespace    http://tampermonkey.net/
// @version      3.0.2
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
    let countConcat = 0;
    let countSlider = 0;
    let countRotate = 0;
    let countWord = 0;

    let hitCount = 0;
    let missCount = 0;

    let startTime = null;

    // 用于防止图片加载失败导致程序停止的问题
    let lastCount = 0;
    let lastCheckAntiJammingTime = null;

    function resetValues () {
        count = 0;
        countConcat = 0;
        countSlider = 0;
        countRotate = 0;
        countWord = 0;

        hitCount = 0;
        missCount = 0;

        startTime = null;

        lastCount = 0;
        lastCheckAntiJammingTime = null;
    }

    const random = 1;
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
            return true;
        } catch (e) {
            if (!e.message.includes(" is null")) {
                warn("❌ clickSubmit 失败：", e);
            }
            return false;
        }
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // 执行中状态
    window.doing = false;
    window.stopping = false;

    // 检测需要执行
    async function checkDoParse () {
        const validateCode = document.querySelector(".validate-code");
        if (window.doing || window.stopping) {
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
                    if (document.querySelector(".validate-code") || !window.doing || window.stopping) {
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
        } else if (document.querySelector('p.after-title')) {
            checkResult();
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
        if (!captchaBox || captchaBox.innerHTML.trim() === "") {
            return false;
        }

        let moveBtn0 = document.getElementById('tianai-captcha-slider-move-btn');
        if (!moveBtn0) {
            return false;
        }

        // 起始坐标
        let startX = moveBtn0.getBoundingClientRect().left;
        let startY = moveBtn0.getBoundingClientRect().top;

        // 触发按下
        info("----------> 按下滑块");
        triggerMouseEvent(moveBtn0, 'mousedown', startX - random * (Math.random() * -10).toFixed(), startY - random * (Math.random() * -10).toFixed());

        // 分段移动
        info("----------- 开始移动滑块");
        let currentX = startX;
        const steps = 50 - random * (Math.random() * 20 - 10).toFixed();
        const lastStep = steps + random * Math.random() * 10;
        for (let i = 0; i <= lastStep; i++) { // 加随机次数是为了模拟终点漂浮不定的效果，避免被判定为破解程序
            if (!window.doing || captchaBox.innerHTML.trim() === "") {
                warn("❌ <---------- 因状态异常，停止移动滑块");
                return false;
            }

            currentX = startX + (targetX * (i > steps ? steps : i) / steps) + (i >= steps - 20 ? random * (Math.random() * 4 - 2) : 0);
            try {
                //debug(`移动滑块: i = ${i}, currentX = ${currentX.toFixed()}`);
                triggerMouseEvent(document, 'mousemove', currentX, startY - random * (Math.random() * 20 - 10).toFixed()); // 添加随机上下浮动，避免被发现为破解程序
            } catch (e) {
                const moveBtnNew = document.getElementById('tianai-captcha-slider-move-btn');
                if (moveBtnNew == null) {
                    return false;
                }

                warn("❌ 移动滑块出现异常，重置滑块moveBtn、startX、startY");
                moveBtn0 = moveBtnNew;
                startX = moveBtn0.getBoundingClientRect().left;
                startY = moveBtn0.getBoundingClientRect().top;
            }
            // 添加延迟
            await new Promise(resolve => setTimeout(resolve, 15 - random * (Math.random() * 10 - 5).toFixed()));
        }

        // 释放滑块
        const cost = (Date.now() - startTime) / 1000;
        info(`<---------- 释放滑块    --------    已刷新 ${count} 次（上下图 ${countConcat}、滑块 ${countSlider}、转圈 ${countRotate}、文字 ${countWord}），可识别率：${((hitCount + missCount) / count * 100).toFixed(1)} %；   识别成功 ${hitCount} 次，失败 ${missCount} 次，识别成功率：${(hitCount / (hitCount + missCount) * 100).toFixed(1)} %；   总计耗时：${cost.toFixed(1)} 秒，提交速度：${(cost / hitCount).toFixed(1)} 秒/次`);
        triggerMouseEvent(moveBtn0, 'mouseup', currentX - random * (Math.random() * 4 - 2).toFixed(), startY - random * (Math.random() * 20 - 10).toFixed());

        setTimeout(function () {
            checkMoveBtn();
        }, 2000);

        return true;
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const ratio = 0.5;
    const concatEnabled = true; // 是否识别上下图验证码，true：需要识别 | false：不需要识别，跳过它
    const sliderEnabled = true; // 是否识别抠图滑块验证码，true：需要识别 | false：不需要识别，跳过它

    // 解析：拼图验证码（上下图 / Concat）
    async function doParseSlider_1_concat () {
        countConcat++;
        count++;
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
            missCount++;
            warn("❌ ========> 警告：解析 拼图验证码（上下图 / Concat）未能成功，脚本代码需优化");
            refresh();
            return false; // 未解析成功
        }

        info(`切割点：${cutX}`);

        const slideX = concatImgData.width - cutX;

        const moveX = (slideX * ratio).toFixed();
        info(`需移动滑块按钮 ${moveX} 像素（${slideX}）`);

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
    function isSimilarColors (y, x0, r0, g0, b0, x1, r1, g1, b1, diff) {
        const d = Math.abs(r0 - r1) + Math.abs(g0 - g1) + Math.abs(b0 - b1);
        if (d <= diff) {
            //debug(`y=${y}(${(y*0.6).toFixed()}), ${x0 + 1}(${((x0 + 1)*0.5).toFixed()})（${r0}, ${g0}, ${b0}） 与 ${x1 + 1}(${((x1 + 1)*0.5).toFixed()})（${r1}, ${g1}, ${b1}） 区别较小, d(${d}) <= diff(${diff})`);
            return true;
        } else {
            //debug(`y=${y}(${(y*0.6).toFixed()}), ${x0 + 1}(${((x0 + 1)*0.5).toFixed()})（${r0}, ${g0}, ${b0}） 与 ${x1 + 1}(${((x1 + 1)*0.5).toFixed()})（${r1}, ${g1}, ${b1}） 区别较大, d(${d}) > diff(${diff})`);
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
            if (isSimilarColors(startY, x0, r0, g0, b0, x1, r1, g1, b1, diff)) {
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
                if (isSimilarColors(startY, x0, r0, g0, b0, x0-n, r00, g00, b00, diff)) {
                    lCount++;
                }
            }
            for (let n = 1; n <= span; n++) {
                const r11 = data[i + n*4 + 4];
                const g11 = data[i + n*4 + 4 + 1];
                const b11 = data[i + n*4 + 4 + 2];
                if (isSimilarColors(startY, x1, r1, g1, b1, x1+n, r11, g11, b11, diff)) {
                    rCount++;
                }
            }
            if (lCount >= 5 && rCount >= 5) {
                return i / 4 + 1 - startY * width;
            }
        }
        return null;
    }

    ////////////---------------------------------------//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // 解析：拼图验证码（滑块）
    async function doParseSlider_2_slider () {
        countSlider++;
        count++;
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
        for (let x = 60; x < bgData.width; x++) {
            const n = (slideY * bgData.width + x) * 4

            const r0 = bgData.data[n]; // 红
            const g0 = bgData.data[n + 1]; // 绿
            const b0 = bgData.data[n + 2]; // 蓝
            //const a0 = bgData.data[n + 3]; // 透明度

            let diff = 30;
            if (r0 < 30) diff += 35;
            else if (r0 < 60) diff += 25;
            else if (r0 < 90) diff += 15;
            else if (r0 < 120) diff += 5;

            if (isGray(x, slideY, r0, g0, b0)) {
                //debug(`x=${x}(${(x*0.5).toFixed()}), y=${slideY}(${(slideY*0.6).toFixed()}))（${r0}, ${g0}, ${b0}）是灰色点`);

                let unmatch = 0;
                for (let i = 1; i <= 60; i++) {
                    const r = bgData.data[n + i * 4]; // 红
                    const g = bgData.data[n + i * 4 + 1]; // 绿
                    const b = bgData.data[n + i * 4 + 2]; // 蓝
                    //const a = bgData.data[n + 3]; // 透明度

                    if (!isGray(x + i, slideY, r, g, b) || !isSimilarColors(slideY, x, r0, g0, b0, x + i, r, g, b, diff)) {
                        unmatch++;
                        if (unmatch === 13) {
                            break;
                        }
                    }
                }
                if (unmatch < 13) {
                    slideX = x - 7;
                    break;
                } else {
                    //warn(`不是滑块坐标：x=${x}(${(x*0.5).toFixed()}), y=${slideY}(${(slideY*0.6).toFixed()})`); //  debug
                }
            }
        }

        if (!slideX) {
            missCount++;
            warn(`❌ 未找到滑块坐标`);
            refresh();
            return false;
        }

        info(`目标坐标：${slideX}, ${slideY}`);

        const moveX = (slideX * ratio).toFixed();
        info(`需移动滑块按钮 ${moveX} 像素（${slideX}）`);

        return moveX;
    }

    function isGray (x, y, r, g, b) {
        return r > 5 && r < 125 && g > 5 && g < 135 && b > 5 && b < 135;
    }

    ////////////---------------------------------------//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // 解析：拼图验证码（旋转）
    async function doParseSlider_3_rotate () {
        countRotate++;
        count++;
        warn("暂不支持 拼图验证码（旋转 / Rotate）");
        refresh();
        return false;
    }

    ////////////=======================================//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // 解析：点击文字验证码
    function doParseWordImageClick () {
        countWord++;
        count++;
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

                // 上下图
                imgDiv = document.getElementById("tianai-captcha-slider-concat-img-div");
                if (imgDiv) {
                    return await doParseSlider_1_concat();
                }

                // 滑块 和 旋转
                imgDiv = document.getElementById("tianai-captcha-slider-img-div");
                if (imgDiv) {
                    if (imgDiv.classList.contains("slider-img-div")) {
                        return await doParseSlider_2_slider();
                    } else if (imgDiv.classList.contains("rotate-img-div")) {
                        return await doParseSlider_3_rotate();
                    }
                }

                warn("❌ <--- 未识别到 已知的 拼图验证码");
                refresh();
                return false;
            } else {
                warn("❌ <--- 未识别到 拼图验证码");
                refresh();
                return false;
            }
        } catch (e) {
            warn("❌ <--- 异常：拼图验证码，error:", e);
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
                warn("❌ <--- 未识别到 点击文字验证码");
                return false;
            }
        } catch (e) {
            warn("❌ <--- 异常：点击文字验证码，error:", e);
            return false;
        }
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function refresh () {
        if (window.stopping) {
            return false;
        }

        try {
            window.stopping = true;
            document.querySelector(".slider-bottom .refresh-btn").click();

            let intervalB
            intervalB = setInterval(() => {
                if (document.getElementById("tianai-captcha-loading") == null || document.getElementById("tianai-captcha-loading").style.display === 'none') {
                    clearInterval(intervalB);
                    window.stopping = false;
                }
            }, 10);

            return true;
        } catch (e) {
            warn("❌ 刷新出现异常：", e);
            window.stopping = false;
            return false;
        }
    }

    function close () {
        try {
            document.querySelector(".ant-modal-close-x").click();
            return true;
        } catch (e) {
            warn("❌ 关闭验证码失败：", e);
            return false;
        }
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function start () {
        if (window.qmwInterval) return false;

        window.qmwInterval = setInterval(checkDoParse, 100);
        info('---> 开始抢锚位！！！');
        window.doing = false;
        window.stopping = false;
        return true;
    }

    function stop () {
        if (!window.qmwInterval) return false;

        clearInterval(window.qmwInterval);
        window.qmwInterval = null;
        info('<--- 停止抢锚位！！！');
        window.doing = false;
        window.stopping = false;
        return true;
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // 防卡顿
    function startAntiJamming () {
        if (window.ajInterval) return false;

        window.ajInterval = setInterval(() => {
            if (lastCount === count && document.querySelector(".slider-bottom .refresh-btn")) {
                if (lastCheckAntiJammingTime == null) {
                    lastCheckAntiJammingTime = Date.now();
                } else if (Date.now() - lastCheckAntiJammingTime > 5000) { // 超过5秒count没有变更，视为卡死，刷新图片
                    warn("❌ 检测到程序卡死，现自动刷新图片，并初始化 doing 和 stopping 两个参数");
                    window.doing = false;
                    window.stopping = false;
                    lastCheckAntiJammingTime = null;
                    refresh();
                }
            } else {
                lastCount = count;
                lastCheckAntiJammingTime = null;
            }
        }, 100);

        return window.ajInterval;
    }

    function stopAntiJamming () {
        if (!window.ajInterval) return false;

        clearInterval(window.ajInterval);
        window.ajInterval = null;
        return true;
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function checkMoveBtn () {
        if (document.querySelector('p.after-title')) {
            return checkResult();
        }

        const errorMsgElement = document.querySelector('.ant-message .ant-message-error');
        if (errorMsgElement) {
            return false; // 未找到成功或失败的提示信息
        }

        const errorMsg = errorMsgElement.innerText;
        if (!errorMsg) {
            return false;
        }

        if (errorMsg.includes('该锚位已在') || errorMsg.includes('如要申请请联系')) {
            if (window.stopping === false) {
                return false;
            }

            warn(`❌ 提交了验证码，但该锚位已被其他人抢走了！！！  提示信息：${errorMsg}`);
            // 停止识别验证码
            stop();
            stopAntiJamming();
            // 提示已被抢走
            showMsg(`❌ 很遗憾，该锚位已被其他人抢走了，现已停止识别验证码，有需要时再按F2开启！！！！！！总计刷新了验证码图片：${count} 次，提交了 ${hitCount} 次，总计耗时：${(Date.now() - startTime) / 1000} 秒`);

            resetValues();
        } else {
            warn(`❌ 提交了验证码，但失败了，错误信息：${errorMsg}`);
        }

        return true;
    }

    function checkResult () {
        if (count === 0 || hitCount === 0) return false;

        let title;
        let logFun;

        const successElement = document.querySelector('p.after-title');
        if (successElement && successElement.innerText && successElement.innerText.includes('成功')) {
            title = '✅ 抢锚位成功啦！！！';
            logFun = showMsg;
        } else {
            title = `❌ 很遗憾，抢锚位未能成功。`;
            logFun = warn;
        }

        logFun(`${title}\n总计刷新了验证码图片：${count} 次，提交了 ${hitCount} 次，总计耗时：${(Date.now() - startTime) / 1000} 秒`);

        resetValues();
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
                    stopAntiJamming();
                    showMsg('停止识别验证码', false, false, 1500);
                } else {
                    showMsg('开始识别验证码', false, false, 1500);
                    start();
                    startAntiJamming();
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
            warn("❌ 显示通知失败：", e);
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
    // setTimeout(() => {
    //     start();
    //     startAntiJamming();
    // }, 1000);
})();
