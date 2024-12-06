// ==UserScript==
// @name         船舶交通组织服务管理平台：自动抢锚位（基于 `dev-sidecar` + `百度OCR`）
// @namespace    http://tampermonkey.net/
// @version      2.0.0
// @since        2024-09-12
// @description  给朋友编写的一个脚本，自动化抢锚位的工作。
// @author       王良
// @match        https://zkpt.zj.msa.gov.cn/
// @icon         data:image/x-icon;base64,AAABAAEAMDAAAAEAIACoJQAAFgAAACgAAAAwAAAAYAAAAAEAIAAAAAAAACQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACvYAAgsmAAYLFhAKGyYQDBsmEAwbFgAN+xYADfsmEAwbJhAMGxYQChsmAAYK9gACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACvYAAgsWAAkbJh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
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';

    // 验证码图片识别的执行间隔
    // 说明：按需手动调整此配置值，如果觉得识别过快，可以将间隔调大点
    let interval = 0; // 单位：毫秒


    let img;
    let count = 0;
    let startTime = null;
    let endTime = null;
    let enable = false;
    let minBase64Length = 6000; // 当前站点的验证码图片base64最小长度，避免无效的识别请求
    let lastText;

    // 获取验证码图片
    function getCaptchaImage () {
        return document.querySelector('img[alt="验证码"]');
    }

    // 获取输入框
    function getInput () {
        return document.querySelector('input[placeholder="图片验证码"]');
    }

    // 获取提交按钮
    function getBtn () {
        return document.querySelector('.ant-modal-content button.ant-btn.ant-btn-primary')
    }

    // 解析图片为base64
    function parseImageBase64 (img) {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, img.width, img.height);
        return canvas.toDataURL('image/png').replace('data:image/png;base64,', '');
    }

    // 刷新图片验证码
    function flushImg () {
        if (img) {
            img.base64 = null;
            img.click();
        }
    }

    // 运行相关方法
    function checkDoParse () {
        if (!enable) {
            return;
        }

        img = getCaptchaImage();
        if (!img) {
            // 图片不存在时，检查执行结果
            checkResult();
            return;
        }

        // 绑定验证码刷新事件
        if (!img.onload) {
            img.onload = function () {
                if (!enable || !img) return;
                img.base64 = null;

                setTimeout(function () {
                    if (!enable || !img) return;
                    console.info('------------------------------------------------------------------------');
                    debug('验证码图片刷新完成了');
                    doParse();
                }, interval);
            };
        }
        if (!img.onerror) {
            img.onerror = function () {
                if (!img) return;
                console.info('------------------------------------------------------------------------');
                warn('❌ 验证码图片加载失败了，重新加载验证码');
                flushImg(img);
            };
        }

        // 发现图片，首次执行
        if (startTime === null) {
            setTimeout(function () {
                if (startTime === null) doParse();
            }, 2000);
        }
    }

    function doParse () {
        if (!enable || !img) return;

        if (startTime === null) {
            startTime = Date.now();
        }

        try {
            let imageBase64 = parseImageBase64(img);
            //info('imageBase64.length:', imageBase64.length);
            if (!imageBase64 || imageBase64.length < minBase64Length) {
                return debug('图片未加载完成，暂不识别！');
            }
            if (img.base64) return debug('正在识别图片，不重复发起识别');
            imageBase64 = encodeURIComponent(imageBase64);
            img.base64 = imageBase64;
            count++;
            fetchParse(imageBase64);
        } catch (e) {
            warn('❌ 验证码识别出现异常：', e);
            return flushImg();
        }
    }

    function fetchParse (imageBase64) {
        fetch('/baiduOcr?' + imageBase64, { method: 'POST' }).then(response => {
            debug('<-- 调用图片识别接口完成，请求响应码：', response.status);

            if (img && img.base64 !== imageBase64) {
                return warn('图片已变更，丢弃此次识别结果');
            }
            if (!enable || !img) {
                img.base64 = null;
                return;
            }

            if (!response.ok) {
                warn('❌ 图片识别接口报错：', response);
                return flushImg();
            }
            response.json().then(data => {
                if (data.error_code) {
                    warn(`❌ 调用了图片识别接口，但接口报错了：code: ${data.error_code}, msg: ${data.error_msg}`);

                    if (data.error_code === 99917) {
                        stop();
                        showMsg('❌ ' + data.error_msg + '现已停止识别验证码！');

                        return;
                    } else if (data.error_code === 17) {
                        return fetchParse(imageBase64); // 所使用的百度云账号已达到每日请求限制，重新发起识别请求
                    } else {
                        return flushImg();
                    }
                }

                if (!data.words_result || data.words_result.length === 0) {
                    debug('❌ 图片识别失败了，未识别出任何内容：图片base64长度 =', decodeURIComponent(imageBase64).length);
                    return flushImg();
                }

                // data 格式如：{"words_result":[{"words":"652"}],"words_result_num":1,"log_id":1818914384408222200}
                const originText = data.words_result[0].words;
                if (!originText) {
                    debug('❌ 识别结果为空：', originText);
                    return flushImg();
                }

                // 替换部分字符（注：当前站点的验证码，没有0、1、9，碰到这几个数字需要替换掉）
                let text = originText.replaceAll(/[.,\s]/g, '');

                if (text.length <= 3) {
                    text = text
                        .replaceAll(/[为没]/g, '23')
                        .replaceAll('苦', '26')
                        .replaceAll(/[元开文动]/g, '27')
                        .replaceAll('吃', '32')
                        .replaceAll('品', '33')
                        .replaceAll(/[香晴]/g, '35')
                        .replaceAll('所', '37')
                        .replaceAll(/[观好]/g, '42')
                        .replaceAll('奶', '43')
                        .replaceAll(/[对双]/g, '44')
                        .replaceAll(/[多名号万鸡然巧]/g, '45')
                        .replaceAll('龙', '46')
                        .replaceAll(/[刘哈斤]/g, '47')
                        .replaceAll('风', '52')
                        .replaceAll(/[么年]/g, '72')
                        .replaceAll(/[字变]/g, '73')
                        .replaceAll('如', '74')
                        .replaceAll(/[方亏高]/g, '75')
                        .replaceAll(/[首书飞]/g, '76')
                        .replaceAll(/[入何市可子]/g, '77')
                        .replaceAll('的', '83')
                        .replaceAll('g夕', '84')
                        .replaceAll('我', '85')
                        .replaceAll('两', '324')
                        .replaceAll('妈', '436')
                    ;

                    if (text.length <= 3) {
                        text = text
                            .replaceAll('M', '43')
                            .replaceAll('gè', '52')
                            .replaceAll('á', '62')
                            .replaceAll('⑥', '76')
                        ;
                    }
                }

                // CDEFHJKLPQRUVWZ cfhjkmpvwz
                text = text
                    .replaceAll(/[oO°。]/g, '0')
                    .replaceAll(/[eq9%÷<=\-—+元]/g, '2')
                    .replaceAll('多', '3')
                    .replaceAll(/[aAMNtuxXyY#≠$*×:了又双观我年文夕]/g, '4')
                    .replaceAll(/[sSgGó分台白的号]/g, '5')
                    .replaceAll(/[bá⑥]/g, '6')
                    .replaceAll(/[1iIlnrT|>~/\\ī]/g, '7')
                    .replaceAll(/[dB①小]/g, '8')
                ;
                while (text.includes('0')) {
                    const idx = text.indexOf('0');
                    if (idx <= 2) {
                        text = text.replace('0', '8');
                    } else {
                        text = text.replace('0', '5');
                    }
                }
                const len = text.length;
                text = text.replaceAll(/\D/g, ''); // 移除非数字字符
                if (text.length !== 4 && text.length !== len) {
                    const warnMsg = `重要：当前识别结果，存在未转换字符：【${originText}】    请将此日志复制并发送给研发人员，以提高识别率！！！当前图片Base64：data:image/png;base64,${decodeURIComponent(imageBase64)}`;
                    warn(warnMsg);
                    //showMsg(`重要：当前识别结果，存在未转换字符：【${originText}】，请查看浏览器控制台日志！`, false, false);
                }
                if (!text) {
                    debug('❌ 识别结果不是数字：', originText);
                    return flushImg();
                }

                while (text.length < 4) {
                    text += '7'; // 7经常识别漏，所以补7
                }
                if (!text.match('^\\d{4}$')) {
                    debug('❌ 识别结果不是4位数字：', originText);
                    return flushImg();
                }

                if (text !== originText) {
                    warn(`识别结果不正确：${originText}，转换后尝试提交：${text}`);
                } else {
                    info(`识别结果为4位数字：${text}，尝试提交验证`); // 输出验证码识别结果
                }

                // 自动填入验证码
                const input = getInput();
                if (!input) {
                    warn('❌ 未找到验证码输入框，无法自动填入验证码：', text);
                    stop();
                    alert('❌ 程序未找到验证码输入框，无法自动填入验证码；现已停止自动识别，请刷新页面后再试！');
                    return;
                }
                input.value = text;
                input.dispatchEvent(new Event('input'));

                // 自动点击按钮
                let btn = getBtn();
                if (!btn) {
                    btn = document.querySelector('button.btn-login.ant-btn.ant-btn-primary');
                }
                if (!btn) {
                    warn('❌ 未找到“确定”按钮，无法提交验证码：', text);
                    stop();
                    alert('❌ 程序未找到“确定”按钮，无法提交验证码；现已停止自动识别，请刷新页面后再试！');
                    return;
                }

                lastText = text;
                img.base64 = null;
                endTime = Date.now();

                btn.click();

                setTimeout(function () {
                    checkBtnClick(text);
                }, 1000);
            });
        }).catch(error => {
            warn('❌ 验证码识别过程中出错：', error);
            return flushImg();
        });
    }

    function checkBtnClick (text) {
        if (document.querySelector('p.after-title') || location.hash === '#/home') {
            checkResult(text);
            return;
        }

        const errorMsgElement = document.querySelector('.ant-message .ant-message-error');
        if (errorMsgElement) {
            const errorMsg = errorMsgElement.innerText;
            if (!errorMsg) return;

            if (errorMsg.indexOf('验证码错误') >= 0) {
                //warn('❌ 提交了验证码，但验证码错误，识别结果不正确：', text);
            } else if (window.location.hash.indexOf('#/login') >= 0) {
                if (enable === false) return;

                warn(`❌ 提交了验证码 ${text}，但登录失败了，且不是验证码错误：${errorMsg}`);
                // 停止识别验证码
                stop();
                // 提示已被抢走
                showMsg(`❌ 登录失败且不是验证码错误，所以停止识别验证码，有需要时再按F2开启！`);

                count = 0;
                startTime = null;
                endTime = null;
            } else if (errorMsg.indexOf('该锚位已在') === 0 || errorMsg.indexOf('如要申请请联系') > 0) {
                if (enable === false) return;

                warn(`❌ 提交了验证码 ${text}，但该锚位已被其他人抢走了！！！  提示信息：${errorMsg}`);
                // 停止识别验证码
                stop();
                // 提示已被抢走
                showMsg(`❌ 很遗憾，该锚位已被其他人抢走了，现已停止识别验证码，有需要时再按F2开启！！！！！！此次尝试识别验证码图片次数：${count} 次，总计耗时：${(endTime - startTime) / 1000} 秒`);

                count = 0;
                startTime = null;
                endTime = null;
            } else {
                //warn(`❌ 提交了验证码 ${text}，但失败了，错误信息：${errorMsg}`);
            }
        } else {
            //warn(`提交了验证码 ${text}，但未找到执行结果信息，不知道是成功还是失败！（这可能是由于提交请求响应时间超过 500 ms，或者页面卡住了导致错误信息未及时弹出，大部分情况属于正常现象！）`);
        }
    }

    function start () {
        if (window.qmwInterval || enable) return;

        img = getCaptchaImage();
        if (img) img.click();
        enable = true;
        lastText = null;
        info('>>> 开始抢锚位！！！');
        window.qmwInterval = setInterval(checkDoParse, 100);
    }

    function stop () {
        if (!window.qmwInterval || !enable) return;

        enable = false;
        lastText = null;
        clearInterval(window.qmwInterval);
        window.qmwInterval = null;
        count = 0;
        startTime = null;
        endTime = null;
        lastText = null;
        info('--- 停止抢锚位！！！');
        if (img) img.base64 = null;
    }


    function logTime () {
        const time = new Date();
        const hours = String(time.getHours()).padStart(2, '0');
        const minutes = String(time.getMinutes()).padStart(2, '0');
        const seconds = String(time.getSeconds()).padStart(2, '0');
        const milliseconds = String(time.getMilliseconds()).padStart(3, '0');

        return `${hours}:${minutes}:${seconds}.${milliseconds}   `;
    }

    function log (args) {
        let str = logTime();
        for (let i = 0; i < args.length; i++) {
            try {
                str += ' ' + (typeof args[i] === 'object' ? JSON.stringify(args[i], null, 2) : args[i]);
            } catch (e) {
                str += ' ' + args[i];
            }
        }
        return str;
    }

    function debug () {
        console.debug(log(arguments));
    }

    function info () {
        console.info(log(arguments));
    }

    function warn () {
        console.warn(log(arguments));
    }

    function showMsg (msg, logWarn, needAlert) {
        if (logWarn !== false) {
            warn(msg);
        }

        try {
            if (window.Notification) {
                // 检查通知权限
                if (Notification.permission === 'granted') {
                    // 如果权限已经被授予
                    new Notification(msg);
                } else if (Notification.permission !== 'denied') {
                    // 如果权限没有被拒绝，向用户请求权限
                    Notification.requestPermission().then(function (permission) {
                        if (permission === 'granted') {
                            new Notification(msg);
                        }
                    });
                }
            }
        } catch (e) {
        }

        if (needAlert !== false) {
            setTimeout(function () {
                alert(msg);
            }, 1000);
        }
    }

    function checkResult (text) {
        if (count === 0 || endTime === null) return false;

        let title;
        let logFun;

        const successElement = document.querySelector('p.after-title');
        if (successElement && successElement.innerText && successElement.innerText.indexOf('成功') > 0) {
            title = '✅ 抢锚位成功啦！！！';
            logFun = showMsg;
        } else if (location.hash === '#/home') {
            title = '✅ 登录成功啦！！！';
            logFun = showMsg;
        } else {
            title = `❌ 很遗憾，${location.hash === '#/login' ? '登录' : '抢锚位'}未能成功。`;
            logFun = warn;
        }

        text = text || lastText;
        logFun(`${title}\n总计识别验证码：${count} 次，总计耗时：${(endTime - startTime) / 1000} 秒${text ? `，验证码为：${text}` : ''}`);

        count = 0;
        startTime = null;
        endTime = null;
        lastText = null;
        return true;
    }

    // 绑定键盘事件，用于启停程序
    window.addEventListener('keyup', function (event) {
        if (event.key === 'F2') {
            if (enable) {
                stop();
                alert('停止识别图片验证码');
            } else {
                alert('开始识别图片验证码');
                start();
            }
        }
    });

    if (window.Notification) {
        if (Notification.permission !== 'denied' && Notification.permission !== 'granted') {
            Notification.requestPermission().then(r => info('“消息通知” 功能授权结果：' + r));
        }
    }

    start();


    let curCount;

    function checkIsDown () {
        if (!enable || !img) return;

        if (curCount >= 0 && count === curCount) {
            curCount = null;
            img.click();
        } else {
            curCount = count;
        }
    }

    setInterval(checkIsDown, 5 * 1000); // 5秒检查一次程序是否宕了
})();
