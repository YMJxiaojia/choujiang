function GetRandomNum(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    return (Min + Math.round(Rand * Range));
}
$(document).ready(function() {
    var roll = function() {
        $(this).unbind('mouseenter').unbind('mouseleave');
        if (parseInt($(".coud_num").html()) <= 0) {
            alert("您的抽奖机会已用完，您可以完成任务获取更多抽奖机会!");
            var json_error = "error_0";
            return false;
        }
        $(this).unbind("click", roll);
        var angle = 0;
        var Rand_num = GetRandomNum(1, 99);
        //var json_error;
        switch (Rand_num) {
            case "2":
                var json_error = "win_1";
                break;
            case "32":
                var json_error = "win_2";
                break;
            case "62":
                var json_error = "win_3";
                break;
            case "92":
                var json_error = "win_4";
                break;
            default:
                var json_error = "error_2";
        }
        switch (json_error) {
            case "error_0":
                alert("您的抽奖机会已用完，您可以完成任务获取更多抽奖机会.");
                return false;
                break;
            case "win_1":
                var $dushu = 1080;
                break;
            case "win_2":
                var $dushu = 1350;
                break;
            case "win_3":
                var $dushu = 1260;
                break;
            case "win_4":
                var $dushu = 1170;
                break;
            case "error_2":
                var error_num = GetRandomNum(1, 4);
                if (error_num == 1) {
                    var $dushu = 1125;
                } else if (error_num == 2) {
                    var $dushu = 1215;
                } else if (error_num == 3) {
                    var $dushu = 1305;
                } else if (error_num == 4) {
                    var $dushu = 1395;
                }

                break;
            default:
        }
        var zhuan = setInterval(function() {
            angle += 15;
            $("#img").rotate(angle);
            if (angle >= $dushu) {
                clearInterval(zhuan);
                switch (json_error) {
                    case "win_1":
                        alert("恭喜您获得一等奖!");
                        break;
                    case "win_2":
                        alert("恭喜您获得二等奖!");
                        break;
                    case "win_3":
                        alert("恭喜您获得三等奖!");
                        break;
                    case "win_4":
                        alert("恭喜您获得四等奖!");
                        break;
                    case "error_2":
                        if (error_num == 1) {
                            alert("4");
                        } else if (error_num == 2) {
                            alert("3");
                        } else if (error_num == 3) {
                            alert("2");
                        } else if (error_num == 4) {
                            alert("1");
                        }
                        break;
                    default:
                }
                $(".coud_num").html($(".coud_num").html() - 1);
                $("#tip").bind("click", roll);
            }
        }, 50);
    };
    $("#tip").bind("click", roll);
});
document.onselectstart = new Function ("event.returnValue=false;");
document.oncontextmenu = new Function ("event.returnValue=false;");
