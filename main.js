/* html
var htmlContent = `
    <canvas id="c"></canvas>
`;
$('.topic_line_title_in a').html(htmlContent);  
*/
// 创建 canvas 元素
var canvas = document.createElement('canvas');
canvas.id = 'c';  // 给 canvas 设置一个 id

// 将 canvas 元素添加到 body 中
document.body.appendChild(canvas);

canvas.style.position = 'absolute';  // 确保 canvas 定位为绝对定位
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.width = '100%';  // 填充整个宽度
canvas.style.height = '100%';  // 填充整个高度
canvas.style.zIndex = '-1';  // 将 canvas 放置在页面最底层

//css 
var style = document.createElement('style');
style.innerHTML = `
    /*basic reset*/
    * {
      margin: 0;
      padding: 0;
    }

    /*adding a black bg to the body to make things clearer*/
    body {
      background: black;
    }

    canvas {
      display: block;
    }
`;

document.head.appendChild(style);

var c = document.getElementById("c");
    var ctx = c.getContext("2d");

    //making the canvas full screen | 让画布全屏
    c.height = window.innerHeight;
    c.width = window.innerWidth;

    //chinese characters - taken from the unicode charset | 汉字 - 取自unicode字符集
    var chinese =
      "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑";
    //converting the string into an array of single characters | 将字符串转换为单个字符数组
    chinese = chinese.split("");

    var font_size = 10;
    var columns = c.width / font_size; //number of columns for the rain | 雨水柱数
    //an array of drops - one per column | 雨滴的阵列 - 每列一个
    var drops = [];
    //x below is the x coordinate | 下面的x是x坐标
    //1 = y co-ordinate of the drop(same for every drop initially) | 雨滴的y坐标(最初每一滴相同)
    for (var x = 0; x < columns; x++) drops[x] = 1;

    //drawing the characters | 绘制字符
    function draw() {
      //Black BG for the canvas | 画布黑色背景
      //translucent BG to show trail | 半透明背景显示轨迹
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, c.width, c.height);

      ctx.fillStyle = "#0F0"; //green text
      ctx.font = font_size + "px arial";
      //looping over drops | 在雨滴上循环
      for (var i = 0; i < drops.length; i++) {
        //a random chinese character to print | 要打印的随机汉字
        var text = chinese[Math.floor(Math.random() * chinese.length)];
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        //sending the drop back to the top randomly after it has crossed the screen | 在水滴越过屏幕后，将其随机发送回顶部
        //adding a randomness to the reset to make the drops scattered on the Y axis | 将随机性添加到重置，以使液滴分散在Y轴上
        if (drops[i] * font_size > c.height && Math.random() > 0.975)
          drops[i] = 0;

        //incrementing Y coordinate | 递增Y坐标
        drops[i]++;
      }
    }
    setInterval(draw, 33);

// hide all ads
function auto() { 
    $(".row").hide();
    $(".adsbygoogle").hide();
    $(".ads_right3").hide();
    $(".post_ads").hide();
    $(".weixin_ads_app").hide();
    $("#tbl-next-up").hide();
    $("#_cm-css-reset").hide();
    $("#weixin_ads2").hide();

    // left and right image
    $('div[style*="position:absolute"][style*="top:30px"]').hide();

    // You May Like  ads
    $(".adsBox-taboola").hide();
    $(".deal_discount").hide();
    

    // change avatar
    $('.user_avatar img').attr('src', 'https://findmyaitool-rh.s3.ap-southeast-2.amazonaws.com/images/appImg/white-hat-hacker-1715266745763');
    $('.user_level img').attr('src', 'https://images.credly.com/images/ec81134d-e80b-4eb5-ae07-0eb8e1a60fcd/twitter_thumb_201604_image.png');
    
    // hide
    $(".user_posts").hide();
    setTimeout(auto, 500);
};
setTimeout(auto, 500);
// nullify the scroll ads
$(window).scroll(function() {});