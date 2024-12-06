// ==UserScript==
// @name         民生证券-自动学习脚本
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @since        2024-11-04
// @description  民生证券：自动学习脚本
// @author       王良
// @match        http*://mszq.21tb.com/*
// @icon         data:image/png;base64,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
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    // 配置
    const config = {
        interval: 30000 // 检查当前课程是否完成的时间间隔，单位：秒
    };

    // 最近一次播放的视频ID
    let lastAutoPlayVideoId;

    // 自动开始播放
    function check() {
        const img = document.querySelector('.track-note-link');
        if (!img) {
            return false;
        }
        img.click();

        setTimeout(function(){
            const nextVideo = document.querySelector('a.innercan');
            if (!nextVideo) {
                clearInterval(autoPlayInterval);
                showMsg('已完成所有视频的学习，请自行打开其他培训页面，此培训的脚本现停止运行！');
                return;
            }
            if (lastAutoPlayVideoId) {
                if (lastAutoPlayVideoId === nextVideo.id) {
                    console.log('当前视频还未学习完成，视频id:', lastAutoPlayVideoId);
                    return;
                } else {
                    console.info(`视频（id: ${lastAutoPlayVideoId}）已学习完成，现自动开始下一个视频的学习，视频id: ${nextVideo.id}`);
                }
            } else {
                showMsg(`自动开始视频的学习，请勿关闭当前页面！！！`, false);
                console.info(`自动开始视频的学习，视频id：${nextVideo.id}`);
            }
            lastAutoPlayVideoId = nextVideo.id
            nextVideo.click();
        }, 1000);
    }

    function showMsg (msg, needAlert) {
        try {
            console.info('系统通知：', msg);
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

    let checkStartInterval;
    let autoPlayInterval;
    checkStartInterval = setInterval(function() {
        const video = document.querySelector('video');
        if (video) {
            video.play();
        }

        if (check() === false) {
            return;
        }
        clearInterval(checkStartInterval);
        autoPlayInterval = setInterval(check, config.interval * 1000);
    }, 100);

    if (window.Notification) {
        if (Notification.permission !== 'denied' && Notification.permission !== 'granted') {
            Notification.requestPermission().then(r => console.info('“消息通知” 功能授权结果：', r));
        }
    }
})();
