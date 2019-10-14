
    var num1 = 0;
    var result = 0; //结果
    var chongfu = 0; //输入的重复数字
    var thisnum = "0"; //获取输入框当前显示值


    var shuru = 0; //输入状态 
    var jisuan = 0; //计算结果状态1，2，3，4，5


    function clicka(num1) {
        var num = String(document.getElementById("lin").value); //获得当前显示数据 
        num = (num != "0") ? ((shuru == 0) ? num : "") : ""; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回空值; 
        num = num + String(num1); //给当前值追加字符 
        document.getElementById("lin").value = num; //刷新显示 
        shuru = 0; //重置输入状态 
        chongfu = 0; //重置防止重复按键的标志 
    }

    function clearscreen() { //清除数据 
        num1 = 0;
        result = 0;
        thisnum = "0";
        document.getElementById("lin").value = "0";
    }

    function del() { //退格
        var num = String(document.getElementById("lin").value); //获取当前显示值
        num = (num != "0" ? num : "")
        num = num.substr(0, num.length - 1);
        num = (num != "") ? num : "0";
        document.getElementById("lin").value = num;
    }


    function dian() { // 为小数点做判断
        var num = String(document.getElementById("lin").value);
        num = (num != "0") ? ((shuru == 0) ? num : "0") : "0"; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回"0"; 
        for (i = 0; i <= num.length; i++) { //判断是否已经有一个点号 
            if (num.substr(i, 1) == ".") return false; //如果有则不再插入 
        }
        num = num + ".";
        document.getElementById("lin").value = num;
        shuru = 0;
    }



    //计算方法
    function computer() {
        thisnum = Number(document.getElementById("lin").value);
        if (num1 != 0 && chongfu != 1) {
            switch (jisuan) {
                case 1:
                    result = num1 + thisnum;
                    break;
                case 2:
                    result = num1 - thisnum;
                    break;
                case 3:
                    result = num1 * thisnum;
                    break;
                case 4:
                    if (thisnum != 0) {
                        result = num1 / thisnum;
                    }
                    break;
                case 5:
                    result = num1 % thisnum;
                    break;
            }
            chongfu = 1; //避免重复输入
        } else {
            result = thisnum;
        }
        thisnum = String(result);
        document.getElementById("lin").value = thisnum;
        num1 = result; //存储当前值 

    }



    function plus() { //加法 
        computer(); //调用计算函数 
        shuru = 1; //更改输入状态 
        jisuan = 1; //更改计算状态为加 
    }

    function minus() { //减法 
        computer();
        shuru = 1;
        jisuan = 2;

        
    }

    function times() { //乘法 
        computer();
        shuru = 1;
        jisuan = 3;
    }

    function divide() { //除法 
        computer();
        shuru = 1;
        jisuan = 4;
    }

  
    function equal() {
        computer(); //等于 
        shuru = 1;
        num1 = 0;
        result = 0;
        thisnum = "0";
    }

    function persent() { //求余 
        computer();
        shuru = 1;
        jisuan = 5;
    }





