/**
  Author: Kale Chao | FakeCityMan
  Blog: http://kalechao87.github.io/
**/
var todayCollectNum; // 当日收集金牌数量
var sumCollectNum; // 累计收集金牌数量
// 预加载
var sourceArr = [
    'images/basketball.png',
    'images/bomb-s9ff2090ab4.png',
    'images/cheerl.png',
    'images/cheerr.png',
    'images/close-btn.png',
    'images/cloud-s3586662290.png',
    'images/collection.png',
    'images/confirm.png',
    'images/cover-bg.jpg',
    'images/cover-start.png',
    'images/dialouge-bg.png',
    'images/flash.png',
    'images/football.png',
    'images/game-bg.jpg',
    'images/gift-box.png',
    'images/gift-confirm.png',
    'images/gift-info.png',
    'images/glass.png',
    'images/gold.png',
    'images/go-lottery.png',
    'images/hand.png',
    'images/light.png',
    'images/main-theme.png',
    'images/mic1.png',
    'images/mic2.png',
    'images/mic3.png',
    'images/mic4.png',
    'images/mic5.png',
    'images/mics.png',
    'images/neck-gold.png',
    'images/no-face.png',
    'images/ok-btn.png',
    'images/photo-mask.png',
    'images/rank-bg.png',
    'images/rank-btn.png',
    'images/rule.png',
    'images/rule-start.png',
    'images/smile.png'
]; //需要加载的资源列表

new mo.Loader(sourceArr,{
	onLoading : function(count,total){
		console.log('onloading:single loaded:',arguments);
        console.log('加载中...（'+count/total*100+'%）');
        var loadPercent = Math.floor(count/total*100);
        $('#loading-num').html(loadPercent+'%');
	},
	onComplete : function(time){
		console.log('oncomplete:all source loaded:',arguments);

        var hideLoading = new TimelineMax({
            onStart: setBgImages,
            delay: 2,
            onComplete: function () {
                showCover();
            }
        });
        hideLoading.to(['#loading-num'], 0.6, {autoAlpha: 0})
        .set(['#loading-num'], {display: 'none'});
	}
});

// 设置css背景图片
function setBgImages() {
    // cover
    $('#cover-bg').css('background-image', 'url(images/cover-bg.jpg)');
    $('#main-theme').css('background-image', 'url(images/main-theme.png)');
    $('#woman').css('background-image', 'url(images/woman.png)');
    $('#flash').css('background-image', 'url(images/flash.png)');
    $('#xiaoao').css('background-image', 'url(images/xiaoao.png)');
    $('#cover-start').css('background-image', 'url(images/cover-start.png)');
    $('#rank-btn').css('background-image', 'url(images/rank-btn.png)');

    // 排行榜
    $('#rank').css('background-image', 'url(images/rank-bg.png)');
    $('#top-one').css('background-image', 'url(images/top-one.png)');
    $('.close-btn').css('background-image', 'url(images/close-btn.png)');

    // 规则页
    $('#rule-container').css('background-image', 'url(images/universal-bg.jpg)');
    $('#rule').css('background-image', 'url(images/rule.png)');
    $('#rule-start').css('background-image', 'url(images/rule-start.png)');

    // 未检测到人脸界面
    $('#no-face').css('background-image', 'url(images/no-face.png)');
    $('#no-face-confirm').css('background-image', 'url(images/confirm.png)');

    // game页
    $('#photo-mask').css('background-image', 'url(images/photo-mask.png)');
    $('#collection').css('background-image', 'url(images/collection.png)');
    $('.collection-gold').css('background-image', 'url(images/gold.png)');
    $('#collection-sum').css('background-image', 'url(images/sum.png)');
    $('.dialouge').css('background-image', 'url(images/dialouge-bg.png)');
    $('.ok-btn').css('background-image', 'url(images/ok-btn.png)');
    $('#gift-box').css('background-image', 'url(images/gift-box.png)');
    $('.light').css('background-image', 'url(images/light.png)');

    // gift 提交表单页
    $('#gift-info').css('background-image', 'url(images/gift-info.png)');
    $('#gift-confirm').css('background-image', 'url(images/gift-confirm.png)');

    // 去抽奖界面
    $('#go-lottery').css('background-image', 'url(images/go-lottery.png)');
    $('#smile').css('background-image', 'url(images/smile.png)');

    // 哑铃
    $('#yaling').css('background-image', 'url(images/yaling.png)');

    // 金牌
    $('#neck-gold').css('background-image', 'url(images/neck-gold.png)');

    // bomb
    $('#glass').css('background-image', 'url(images/glass.png)');

    // 双球
    $('#hand').css('background-image', 'url(images/hand.png)');
    $('#basketball').css('background-image', 'url(images/basketball.png)');
    $('#football').css('background-image', 'url(images/football.png)');

    // 欢呼
    $('#cheerl').css('background-image', 'url(images/cheerl.png)');
    $('#cheerr').css('background-image', 'url(images/cheerr.png)');

    // 麦克风
    $('#mic1').css('background-image', 'url(images/mic1.png)');
    $('#mic2').css('background-image', 'url(images/mic2.png)');
    $('#mic3').css('background-image', 'url(images/mic3.png)');
    $('#mic4').css('background-image', 'url(images/mic4.png)');
    $('#mic5').css('background-image', 'url(images/mic5.png)');



}

// 封面首页动画
function showCover() {
    var coverShow = new TimelineMax({
        onComplete: function () {
            coverStartBounce.play(0);
        }
    });
    coverShow.set('#cover', {display: 'block', autoAlpha: 1})
            .fromTo('#cover-bg', 0.3, {autoAlpha: 0}, {autoAlpha: 1, ease: Power1.easeIn})
            .fromTo('#main-theme', 0.8, {autoAlpha: 0, y: -500}, {autoAlpha: 1, y: 0, ease: Back.easeOut.config(1.2)})
            .fromTo('#xiaoao', 0.8, {autoAlpha: 0, x: -640}, {autoAlpha: 1, x: 0, ease: Back.easeOut.config(1.1)}, '-=0.7')
            .fromTo('#woman', 0.8, {autoAlpha: 0, x: 640}, {autoAlpha: 1, x: 0, ease: Back.easeOut.config(1.1)}, '-=0.8')
            .fromTo('#flash', 0.8, {autoAlpha: 0, scale: 0}, {autoAlpha: 1, scale: 1, ease: Elastic.easeOut.config(1.5, 0.2), force3D: true}, '-=0.3')
            .fromTo('#cover-start', 0.8, {autoAlpha: 0, y: 300}, {autoAlpha: 1, y: 0, ease: Back.easeOut.config(1.6)}, '-=0.4')
            .fromTo('#rank-btn', 0.6, {autoAlpha: 0, x: -200}, {autoAlpha: 1, x: 0}, '-=0.8')
}

// 隐藏封面功能
function hideCover() {
    TweenMax.set('#cover', {display: 'none', autoAlpha: 0});
    coverStartBounce.pause(0); // 停止首页开始按钮弹跳动画

}

// 开始游戏按钮弹跳
var coverStartBounce = new TimelineMax({
    paused: true,
    repeat: -1,
    yoyo: true
});
coverStartBounce.to('#cover-start', 0.6, {scale: 1.2, ease: Power2.easeInOut});

// 显示排行榜
function showRank() {
    var rankShow = new TimelineMax();
    rankShow.set('#rank-container', {display: 'block', autoAlpha: 1})
        .fromTo('#rank-container', 0.4, {autoAlpha: 0}, {autoAlpha: 1})
        .fromTo('#rank', 0.6, {autoAlpha: 0, y: -1000}, {autoAlpha: 1, y: 0, ease: Back.easeOut.config(1.2)}, '-=0.2')
}

// 隐藏排行榜界面
function hideRank() {
    var rankHide = new TimelineMax();
    rankHide.to('#rank', 0.6, {autoAlpha: 0, y: -1000, ease: Back.easeIn.config(1.2)})
            .to('#rank-container', 0.3, {autoAlpha: 0}, '-=0.1')
            .set('#rank-container', {display: 'none'})
}

// 点击排行榜按钮
$('#rank-btn').on('touchstart', showRank);

// 点击关闭排行榜按钮
$('#close-rank').on('touchstart', hideRank);

// 点击封面开始按钮
$('#cover-start').on('touchstart', showRule);

// 显示规则页面/上传照片功能界面
function showRule() {
    var ruleShow = new TimelineMax({
        onComplete: function () {
            hideCover(); // 隐藏封面
            ruleStartBounce.play(0); // 规则页按钮弹跳
        }
    });
    ruleShow.set('#rule-container', {display: 'block', autoAlpha: 1})
    .fromTo('#rule-container', 0.4, {autoAlpha: 0}, {autoAlpha: 1})
    .fromTo('#rule', 0.8, {autoAlpha: 0, y: 1000}, {autoAlpha: 1, y: 0, ease: Back.easeOut.config(1.2)}, '-=0.2')
}

// rule start 按钮弹跳动画
var ruleStartBounce = new TimelineMax({
    paused: true,
    repeat: -1,
    yoyo: true
});
ruleStartBounce.to('#rule-start', 0.6, {scale: 1.1, ease: Power2.easeInOut});

// 隐藏规则页面
function hideRule() {
    var ruleHide = new TimelineMax({
        onComplete: function () {
            ruleStartBounce.pause(0); // 暂停规则开始按钮弹跳动画
            goGamePage(); // 去生成Game照片页
        }
    });
    ruleHide.to('#rule', 0.6, {autoAlpha: 0, y: -1000, ease: Back.easeIn.config(1.2)})
        .to('#rule-container', 0.4, {autoAlpha: 0}, '-=0.2')
        .set('#rule-container', {display: 'none'})
}

// 显示未检测到人脸界面
function noFaceAlert() {
    var noFaceShow = new TimelineMax();
    noFaceShow.set('#no-face-container', {display: 'block', autoAlpha: 1})
            .fromTo('#no-face-container', 0.2, {autoAlpha: 0}, {autoAlpha: 1})
            .fromTo('#no-face', 0.5, {autoAlpha: 0, scale: 0}, {autoAlpha: 1, scale: 1, ease: Back.easeOut.config(1.6)}, '-=0.1')
}

// 隐藏未检测到人脸界面
function hideNoFace() {
    var noFaceHide = new TimelineMax();
    noFaceHide.to('#no-face', 0.4, {autoAlpha: 0, scale: 0, ease: Back.easeIn.config(1.6)})
            .to('#no-face-container', 0.2, {autoAlpha: 0}, '-=0.1')
            .set('#no-face-container', {display: 'none'})
}

// 点击no-face-confirm按钮隐藏未检测到人脸界面
$('#no-face-confirm').on('touchstart', hideNoFace);

// 点击规则页开始按钮， 调用上传照片功能
// $('#rule-start').on('touchstart', uploadPic);
$('#rule-start').on('touchstart', hideRule); // 测试用,直接去game页
// $('#rule-start').on('touchstart', noFaceAlert); // 测试用,显示未检测到人脸提示

// 上传照片功能
// TO DO
// 调用上传照片并校验是否上传成功，上传照片失败/未检测到人脸
// 要调用noFaceAlert() function后return
// 上传照片成功后，调用hideRule() function
function uploadPic() {
    // TO DO
    // 失败

    // TO DO
    // 成功
}

// 去生成照片game页
function goGamePage() {
    var gameShow = new TimelineMax({
        onComplete: showIntroAn // 显示配饰前导动画
    });
    gameShow.set('#game-container', {autoAlpha: 1, display: 'block'})
    .fromTo('#game-container', 0.4, {autoAlpha: 0}, {autoAlpha: 1})
}

// 隐藏照片Game界面
function hideGame() {
    var gameHide = new TimelineMax({
        onComplete: restartGame // 重来上传
    });
    gameHide.to('#game-container', 0.5, {autoAlpha: 0})
            .set('#game-container', {display: 'none'});
}

// 达到限制提示功能
function showLimitAlert() {
    var limitAlertShow = new TimelineMax();
    limitAlertShow.set('#limit-container', {display: 'block', autoAlpha: 1})
    .fromTo('#limit-container', 0.2, {autoAlpha: 0}, {autoAlpha: 1})
    .fromTo('#limit-alert', 0.5, {autoAlpha: 0, scale: 0}, {autoAlpha: 1, scale: 1, ease: Back.easeOut.config(1.6)}, '-=0.1')
}

// 隐藏达到限制提示界面
function hideLimitAlert() {
    var limitAlertHide = new TimelineMax();
    limitAlertHide.to('#limit-alert', 0.4, {autoAlpha: 0, scale: 0, ease: Back.easeIn.config(1.6)})
            .to('#limit-container', 0.2, {autoAlpha: 0}, '-=0.1')
            .set('#limit-container', {display: 'none'})
}

// 点击关闭达到限制界面按钮
$('#close-limit-alert').on('touchstart', hideLimitAlert);

// 显示配饰前的前导动画
function showIntroAn() {
    var introAnShow = new TimelineMax({
        onComplete: determineShowWhich
    });
    introAnShow.set('#clouds', {display: 'block', autoAlpha: 1})
    .add('cloudStart')
    .set('.cloud', {autoAlpha: 0}, 'cloudStart')
    .set('#cloud1', {autoAlpha: 1}, 'cloudStart')
    .set('.cloud', {autoAlpha: 0}, 'cloudStart+=0.1')
    .set('#cloud2', {autoAlpha: 1}, 'cloudStart+=0.1')
    .set('.cloud', {autoAlpha: 0}, 'cloudStart+=0.2')
    .set('#cloud3', {autoAlpha: 1}, 'cloudStart+=0.2')
    .set('.cloud', {autoAlpha: 0}, 'cloudStart+=0.3')
    .set('#cloud4', {autoAlpha: 1}, 'cloudStart+=0.3')
    .set('.cloud', {autoAlpha: 0}, 'cloudStart+=0.4')
    .set('#cloud5', {autoAlpha: 1}, 'cloudStart+=0.4')
    .set('.cloud', {autoAlpha: 0}, 'cloudStart+=0.5')
    .set('#cloud6', {autoAlpha: 1}, 'cloudStart+=0.5')
    .set('.cloud', {autoAlpha: 0}, 'cloudStart+=0.6')
    .set('#cloud7', {autoAlpha: 1}, 'cloudStart+=0.6')
    .set('.cloud', {autoAlpha: 0}, 'cloudStart+=0.7')
    .set('#cloud8', {autoAlpha: 1}, 'cloudStart+=0.7')
    .set('.cloud', {autoAlpha: 0}, 'cloudStart+=0.8')
    .set('#clouds', {display: 'none', autoAlpha: 0})

}

// 显示拆礼物动画界面
function showOpenGift() {
    var giftShow = new TimelineMax({
        onComplete: function () {
            giftLightBreath.play(0); // 播放礼物光闪烁
        }
    });
    giftShow.set('#gift-container', {display: 'block', autoAlpha: 1})
    .fromTo('#gift-box', 0.8, {autoAlpha: 0, y: 600}, {autoAlpha: 1, y: 0, ease: Back.easeOut.config(1.2)})
    .fromTo('.gift-dialouge-container', 0.8, {autoAlpha: 0, y: 600}, {autoAlpha: 1, y: 0, ease: Back.easeOut.config(1.2)}, '-=0.6')
    .fromTo('#gift-light', 0.6, {autoAlpha: 0}, {autoAlpha: 1}, '-=0.8')
}

// 礼物光呼吸
var giftLightBreath = new TimelineMax({
    paused: true,
    repeat: -1,
    yoyo: true
});
giftLightBreath.to('#gift-light', 0.8, {autoAlpha: 0.2, ease: Power2.easeInOut});

// 隐藏拆礼物界面
function hideOpenGift() {
    var giftHide = new TimelineMax({
        onComplete: function () {
            giftLightBreath.pause(0); // 暂停礼物光闪烁
            showGiftResult(); // 显示拆礼物结果
        }
    });
    giftHide.to('#gift-container', 0.5, {autoAlpha: 0})
            .set('#gift-container', {display: 'none'});
}

// 点击拆礼物ok
$('#gift-ok').on('touchstart', hideOpenGift);

// 显示拆礼物结果
function showGiftResult() {
    // TODO
    // 决定拆开的礼物是什么东西
    // 修改id为gift-item-content的html内容
    // 如$('#gift-item-content').html('恭喜您获得奥运LED胸章一个');
    $('#gift-item-content').html('恭喜您获得奥运LED胸章一个');
    var giftInfoShow = new TimelineMax();
    giftInfoShow.set('#gift-info-container', {display: 'block', autoAlpha: 1})
    .fromTo('#gift-info-container', 0.2, {autoAlpha: 0}, {autoAlpha: 1})
    .fromTo('#gift-info', 0.5, {autoAlpha: 0, scale: 0}, {autoAlpha: 1, scale: 1, ease: Back.easeOut.config(1.6)}, '-=0.1')
}

// 隐藏拆礼物结果页
function hideGiftResult() {
    var giftResultHide = new TimelineMax();
    giftResultHide.to('#gift-info', 0.4, {autoAlpha: 0, scale: 0, ease: Back.easeIn.config(1.6)})
            .to('#gift-info-container', 0.2, {autoAlpha: 0}, '-=0.1')
            .set('#gift-info-container', {display: 'none'});
}

// 拆礼物后,填写表单验证
$('#gift-confirm').on('touchstart', submitGiftInfo);

// 提交用户表单
function submitGiftInfo() {
    // TODO
    // 做信息校验，不通过return，信息校验通过，alert('提交成功');
    // alert确定后，执行如下代码，然后执行再次玩
    hideGiftResult(); // 关闭领取礼物界面
}

function showLotteryAlert() {
    var goLotteryShow = new TimelineMax();
    goLotteryShow.set('#go-lottery-container', {display: 'block', autoAlpha: 1})
    .fromTo('#go-lottery-container', 0.2, {autoAlpha: 0}, {autoAlpha: 1})
    .fromTo('#go-lottery-alert', 0.5, {autoAlpha: 0, scale: 0}, {autoAlpha: 1, scale: 1, ease: Back.easeOut.config(1.6)}, '-=0.1')
}

function hideLotteryAlert() {
    var goLotteryHide = new TimelineMax({
        onStart: goLottery
    });
    goLotteryHide.to('#go-lottery-alert', 0.4, {autoAlpha: 0, scale: 0, ease: Back.easeIn.config(1.6)})
            .to('#go-lottery-container', 0.2, {autoAlpha: 0}, '-=0.1')
            .set('#go-lottery-container', {display: 'none'})
}

// 去抽奖
function goLottery() {
    location.href = '#'; // 抽奖界面链接
}

// 点击去抽奖按钮
$('#go-lottery').on('touchstart', hideLotteryAlert);

// 显示哑铃
function showYL() {
    var ylShow = new TimelineMax({
        onComplete: function () {
            ylUpDown.play(0); // 哑铃往复运动
        }
    });
    ylShow.set('#yaling-container', {display: 'block', autoAlpha: 1})
    .staggerFromTo(['#yaling', '#yaling-dialouge'], 0.8, {autoAlpha: 0, y: 600}, {autoAlpha: 1, y: 0, ease: Back.easeOut.config(1.2)}, 0.2)
}

// 隐藏哑铃界面
function hideYL() {
    var ylHide = new TimelineMax({
        onStart: hideGame, // 关闭Game界面，之后重新开始
        onComplete: function () {
            ylUpDown.pause(0); // 暂停哑铃往复运动
        }
    });
    ylHide.to('#yaling-container', 0.5, {autoAlpha: 0})
            .set('#yaling-container', {display: 'none'});
}

// 哑铃往复运动
var ylUpDown = new TimelineMax({
    paused: true,
    repeat: -1,
    yoyo: true
});
ylUpDown.to('#yaling', 0.6, {y: 200, ease: Power2.easeInOut});

// 点击哑铃ok，关闭哑铃然后再次开始
$('#yaling-ok').on('touchstart', hideYL);

// 显示金牌界面
function showJP() {
    var jpShow = new TimelineMax({
        onComplete: function () {
            goldLightBreath.play(0); // 金牌光呼吸
            addGoldNum(); // 执行添加金牌数量功能
        }
    });
    jpShow.set('#get-gold-container', {display: 'block', autoAlpha: 1})
    .fromTo('#neck-gold', 0.5, {autoAlpha: 0}, {autoAlpha: 1})
    .fromTo('.gold-dialouge-container', 0.6, {autoAlpha: 0, y: 600}, {autoAlpha: 1, y: 0, ease: Back.easeOut.config(1.6)}, '-=0.2')
    .fromTo('#gold-light', 0.5, {autoAlpha: 0}, {autoAlpha: 1}, '-=0.6')
}

// 隐藏哑铃界面
function hideJP() {
    var goldHide = new TimelineMax({
        onStart: hideGame, // 关闭Game界面，之后重新开始
        onComplete: function () {
            goldLightBreath.pause(0); // 暂停金牌光呼吸动画
        }
    });
    goldHide.to('#get-gold-container', 0.5, {autoAlpha: 0})
            .set('#get-gold-container', {display: 'none'});
}

// 金牌光呼吸
var goldLightBreath = new TimelineMax({
    paused: true,
    repeat: -1,
    yoyo: true
});
goldLightBreath.to('#gold-light', 0.8, {autoAlpha: 0.2, ease: Power2.easeInOut});

// TODO
// 增加奖牌数量功能,出现金牌界面或分享时执行
// 注意，当日金币，总金币都需做增加功能
// 当日金币达到5时不再增加

function addGoldNum() {
    // todayCollectNum; // 当日收集金牌数量
    // sumCollectNum; // 累计收集金牌数量
    // TODO 显示顶部左侧今日奖牌，id为#gold1……#gold5
    // TODO 修改累计总数量id#collection-num的值

    // 显示左上角金牌数量
    // 语法如下, id分别为#gold1……#gold5
    //TweenMax.to('#gold1', 0.5, {autoAlpha: 1});

}

// 金牌界面ok判断功能，达到3时，去弹抽奖页面
// 达到5时提示上限
// 其他情况继续玩
function checkGoldOk() {
    // TODO
    // 先判断获得金牌是否达到上限，达到上限显示上限提示showLimitAlert();
    // showLimitAlert(); // 今日收集达到上限提示

    // TODO
    // 当日金牌收集数量为3时, todayCollectNum==3
    // 这个一天只处理一次，注意第一次为3跳至抽奖界面，再返回玩时当前仍未3，
    // 这时不要再次执行这个
    // showLotteryAlert(); // 显示去抽奖界面

    // 未达到金牌数量3或5时继续玩
    hideJP(); // 隐藏金牌界面

}

// 点击金牌界面ok按钮
$('#gold-ok').on('touchstart', checkGoldOk);

// 显示炸弹界面
function showBomb() {
    var bombShow = new TimelineMax();
    bombShow.set('#bomb-container', {display: 'block', autoAlpha: 1})
    .fromTo('#bomb', 0.6, {autoAlpha: 0, x: -400, y: 600}, {autoAlpha: 1, x: 0, y: 0, ease: Power3.easeOut})
    .add('bombStart')
    .set('.bomb-blow', {autoAlpha: 0}, 'bombStart')
    .set('#bomb-blow1', {autoAlpha: 1}, 'bombStart')
    .set('.bomb-blow', {autoAlpha: 0}, 'bombStart+=0.1')
    .set('#bomb-blow2', {autoAlpha: 1}, 'bombStart+=0.1')
    .set('.bomb-blow', {autoAlpha: 0}, 'bombStart+=0.2')
    .set('#bomb-blow3', {autoAlpha: 1}, 'bombStart+=0.2')
    .set('.bomb-blow', {autoAlpha: 0}, 'bombStart+=0.3')
    .set('#bomb-blow4', {autoAlpha: 1}, 'bombStart+=0.3')
    .set('.bomb-blow', {autoAlpha: 0}, 'bombStart+=0.4')
    .set('#bomb-blow5', {autoAlpha: 1}, 'bombStart+=0.4')
    .set('.bomb-blow', {autoAlpha: 0}, 'bombStart+=0.5')
    .set('#bomb-blow6', {autoAlpha: 1}, 'bombStart+=0.5')
    .set('.bomb-blow', {autoAlpha: 0}, 'bombStart+=0.6')
    .set('#bomb-blow7', {autoAlpha: 1}, 'bombStart+=0.6')
    .set('.bomb-blow', {autoAlpha: 0}, 'bombStart+=0.7')
    .set('#bomb-blow8', {autoAlpha: 1}, 'bombStart+=0.7')
    .set('.bomb-blow', {autoAlpha: 0}, 'bombStart+=0.8')
    .fromTo('#glass', 0.4, {autoAlpha: 0}, {autoAlpha: 1}, '-=0.2')
    .fromTo('.bomb-dialouge-container', 0.8, {autoAlpha: 0, y: 600}, {autoAlpha: 1, y: 0, ease: Back.easeOut.config(1.6)}, '-=0.2');

}

// 隐藏炸弹界面
function hideBomb() {
    var bombHide = new TimelineMax({
        onStart: hideGame // 关闭Game界面，之后重新开始
    });
    bombHide.to('#bomb-container', 0.5, {autoAlpha: 0})
            .set('#bomb-container', {display: 'none'});
}

// 点击炸弹ok，关闭炸弹然后再次开始
$('#bomb-ok').on('touchstart', hideBomb);

// 显示双球界面动画
function showBalls() {
    var ballShow = new TimelineMax({
        onStart: function () {
            ballsRotation.play(0); // 双球旋转
        }
    });
    ballShow.set('#balls-all-container', {display: 'block', autoAlpha: 1})
    .staggerFromTo(['#balls-container', '#balls-dialouge'], 0.8, {autoAlpha: 0, y: 600}, {autoAlpha: 1, y: 0, ease: Back.easeOut.config(1.2)}, 0.2)
}

// 隐藏双球界面
function hideBalls() {
    var ballsHide = new TimelineMax({
        onStart: hideGame, // 关闭Game界面，之后重新开始
        onComplete: function () {
            ballsRotation.pause(0); // 双球旋转停止
        }
    });
    ballsHide.to('#balls-all-container', 0.5, {autoAlpha: 0})
            .set('#balls-all-container', {display: 'none'});
}

// 点击双球ok，关闭双球界面然后再次开始
$('#balls-ok').on('touchstart', hideBalls);

// 双球转动
var ballsRotation = new TimelineMax({
    paused: true,
    repeat: -1
});
ballsRotation.add('ballsRotationStart')
            .to('#basketball', 0.6, {rotation: -360, ease: Power0.easeNone}, 'ballsRotationStart')
            .to('#football', 0.6, {rotation: 360, ease: Power0.easeNone}, 'ballsRotationStart');


// 拉拉队欢呼界面
function showCheer() {
    var cheerShow = new TimelineMax({
        onStart: function () {
            handShake.play(0);
        }
    });
    cheerShow.set('#cheer-container', {display: 'block', autoAlpha: 1})
    .fromTo(['#cheerl', '#cheerr'], 0.6, {autoAlpha: 0, y: 600}, {autoAlpha: 1, y: 0})
    .fromTo('#cheer-dialouge', 0.8, {autoAlpha: 0, y: 600}, {autoAlpha: 1, y: 0, ease: Back.easeOut.config(1.6)}, '-=0.4');
}

// 隐藏欢呼界面
function hideCheer() {
    var cheerHide = new TimelineMax({
        onStart: hideGame, // 关闭Game界面，之后重新开始
        onComplete: function () {
            handShake.pause(0); // 双手抖动停止
        }
    });
    cheerHide.to('#cheer-container', 0.5, {autoAlpha: 0})
            .set('#cheer-container', {display: 'none'});
}

// 双手抖动动画
var handShake = new TimelineMax({
    paused: true,
    repeat: -1,
    yoyo: true
});
handShake.add('shakeStart')
        .to('#cheerl', 0.2, {rotation: 10, transformOrigin: '203px 652px', ease: Power2.easeInOut}, 'shakeStart')
        .to('#cheerr', 0.2, {rotation: -10, transformOrigin: '108px 652px', ease: Power2.easeInOut}, 'shakeStart');

// 点击欢呼ok，关闭欢呼界面然后再次开始
$('#cheer-ok').on('touchstart', hideCheer);

// 显示麦克界面
function showMics() {
    var micShow = new TimelineMax({
        onComplete: function () {
            micShake.play(0);
        }
    });
    micShow.set('#mic-container', {autoAlpha: 1, display: 'block'})
            .staggerFromTo(['#mics', '#mic-dialouge'], 0.8, {autoAlpha: 0, y: 600}, {autoAlpha: 1, y: 0, ease: Back.easeOut.config(1.2)}, 0.2);
}

// 麦克风晃动
var micShake = new TimelineMax({
    paused: true
});
micShake.add('micShakeStart')
        .to('#mic1', 0.5, {rotation: -5, transformOrigin: '0 415px', ease: Power2.easeInOut, repeat: -1, yoyo: true}, 'shakeStart')
        .to('#mic2', 0.6, {rotation: -6, transformOrigin: '99px bottom', ease: Power2.easeInOut, repeat: -1, yoyo: true}, 'shakeStart')
        .to('#mic3', 0.7, {y: 20, ease: Power2.easeInOut, repeat: -1, yoyo: true}, 'shakeStart')
        .to('#mic4', 0.6, {y: 20, ease: Power2.easeInOut, repeat: -1, yoyo: true}, 'shakeStart')
        .to('#mic5', 0.7, {rotation: 6, transformOrigin: 'right 267px', ease: Power2.easeInOut, repeat: -1, yoyo: true}, 'shakeStart');

// 隐藏麦克风界面
function hideMics() {
    var micHide = new TimelineMax({
        onStart: hideGame, // 关闭Game界面，之后重新开始
        onComplete: function () {
            micShake.pause(0); // 麦克风抖动停止
        }
    });
    micHide.to('#mic-container', 0.5, {autoAlpha: 0})
            .set('#mic-container', {display: 'none'});
}

// 点击麦克风ok，关闭麦克风界面然后再次开始
$('#mic-ok').on('touchstart', hideMics);


// 显示哪个配饰或礼物界面或获得一枚金牌界面
function determineShowWhich() {



    // showOpenGift(); // 显示拆礼物
    showYL(); // 显示哑铃界面
    // showJP(); // 显示金牌界面
    // showBomb(); // 显示炸弹界面
    // showBalls(); // 显示双球界面
    // showCheer(); // 显示拉拉队欢呼界面
    // showMics(); // 显示麦克风界面
}

function restartGame() {
    // TODO
    // 清除之前上传的照片，然后跳至规则上传界面

    showRule(); // 显示规则界面
}


(function($) {
    $(document).ready(function() {
        console.log('Ready');
    });  //Document ready
})(jQuery);
