$(document).ready(function () {
    // 切換卡片右上角愛心
    $('.favorite').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('fa-heart-o').toggleClass('fa-heart');
    });
});