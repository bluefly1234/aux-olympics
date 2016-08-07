/**
  Author: Kale Chao | FakeCityMan
  Blog: http://kalechao87.github.io/
**/
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
        }
    });
    ruleHide.to('#rule', 0.6, {autoAlpha: 0, y: -1000, ease: Back.easeIn.config(1.2)})
        .to('#rule-container', 0.4, {autoAlpha: 0}, '-=0.2')
        .set('#rule-container', {display: 'none'})
}

// 点击规则页开始按钮
$('#rule-start').on('touchstart', hideRule);


(function($) {
    $(document).ready(function() {
        console.log('Ready');
    });  //Document ready
})(jQuery);
