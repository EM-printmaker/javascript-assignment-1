$(document).ready(function(){
  //ボタンのdisabledを指定
  let buttonFlag1 = false;
  let buttonFlag2 = true;
  let buttonFlag3 = true;
  buttonFlag();

  //時間の初期値
  let millisecond = 0;
  let second = 0;
  let minute = 0;
  let hour = 0;

  //時間を挿入
  function time() {
    $(".stopwatch-millisecond").text(millisecond);  
    $(".stopwatch-second").text(second);
    $(".stopwatch-minute").text(minute);
    $(".stopwatch-hour").text(hour);
  }
  time();

  // スタート
  $(".stopwatch-btn-start").click(function() {
    timer = setInterval(countUp, 100);
    
    buttonFlag1 = true;
    buttonFlag2 = false;
    buttonFlag3 = false;
    buttonFlag();
  });

  //ストップ
  $(".stopwatch-btn-stop").click(function() {
    clearInterval(timer);

    buttonFlag1 = false;
    buttonFlag2 = true;
    buttonFlag3 = false;
    buttonFlag();
  });

  //リセット
  $(".stopwatch-btn-reset").click(function() {
    clearInterval(timer);
    millisecond = 0;
    second = 0;
    minute = 0;
    hour = 0;

    time();

    buttonFlag1 = false;
    buttonFlag2 = true;
    buttonFlag3 = true;
    buttonFlag();
  });

  // カウント
  function countUp(){
    millisecond ++;

    if (millisecond > 9) {
      millisecond = 0;
      second ++;
    }

    if (second > 59) {
      second = 0;
      minute ++;
    }

    if (minute > 59) {
      minute = 0;
      hour ++;
    }

    if (hour > 100) {
      millisecond = 0;
      second = 0;
      minute = 0;
      hour = 0;
    }

    time();
  }

  //フラグ管理
  function buttonFlag() {
    if (buttonFlag1) {
      $(".stopwatch-btn-start").prop("disabled", true);
    } else {
      $(".stopwatch-btn-start").prop("disabled", false);
    }

    if (buttonFlag2) {
      $(".stopwatch-btn-stop").prop("disabled", true);
    } else {
      $(".stopwatch-btn-stop").prop("disabled", false);
    }

    if (buttonFlag3) {
      $(".stopwatch-btn-reset").prop("disabled", true);
    } else {
      $(".stopwatch-btn-reset").prop("disabled", false);
    }
  }
});