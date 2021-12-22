"use strict";
function countdown(due) {
  // ↓countdown(due)を実行した時の現在時刻を取得
  const now = new Date();
  // ↓引数dueから取得した時間(ミリ秒) - 今の時間から取得した時間(ミリ秒)
  const rest = due.getTime() - now.getTime();
  // ↓秒にする 1秒は1000ミリ秒 分にした時に整数になるものを除外 例:70秒は1分10秒 = 欲しいものは10秒
  const sec = Math.floor(rest / 1000) % 60;
  // ↓分にする 1秒は六十分の一分　時間にした時に整数になるものを除外 例:70分は1時間10分
  const min = Math.floor(rest / 1000 / 60) % 60;
  // ↓時間にする 1分は六十分の一時間　1日にした時に整数になるものを除外 例:25時間は1日と1時間
  const hour = Math.floor(rest / 1000 / 60 / 60) % 24;
  // ↓日数にする 1時間は24時間分の1時間 月は月によって日数が変わるため計算しない
  const day = Math.floor(rest / 1000 / 60 / 60 / 24);
  // ↓配列にして自由にデータを取り出せるようにする
  const send = [day, hour, min, sec];
  //↓戻り値を設定　returnでfunction countdown(due)内でしか使い回せない変数を外でも使えるようにしている。
  return send;
}

// ↓時間を取得
let goal = new Date();
// ↓goalの年を指定
const year = 2021;
goal.setFullYear(year);

/* ↓goalの月を調整している
setMonthは月が一月ズレる　月が0から始まる(0〜11)仕様になっているため。
countdown内のものはgetTimeでunix元期からの経過ミリ秒数を取得しているためズレがない。
だから、goalをunix元期からのミリ秒数に変換する前に調整しなければならない(-1しなければならない)。*/
function set_month(mon) {
  return mon - 1;
}

/* ↓で月を変えることで月を指定できる*/
const month = 12;
goal.setMonth(set_month(month));
// ↓goalの日を指定
const date = 25;
goal.setDate(date);
// ↓goalの時を指定
const hours = 0;
goal.setHours(hours);
// ↓goalの分を指定
const minute = 0;
goal.setMinutes(minute);
// ↓goalの秒を指定
const seconds = 0;
goal.setSeconds(seconds);

// 以下は順番関係なく動く

function answer() {
  //↓countdown(goal)の戻り値を使いまわせるようにしている 変数sendを受け取っている
  const reply = countdown(goal);
  // ↓*５要素を取得し、書き換えている
  document.getElementById("year").textContent = year;
  document.getElementById("day").textContent = reply[0];
  document.getElementById("hour").textContent = reply[1];
  document.getElementById("min").textContent = reply[2];
  document.getElementById("sec").textContent = reply[3];
  // ↓againを実行している
  again();
}

function again() {
  // ↓answer()を一秒後に実行する
  setTimeout(answer, 1000);
}

// ↓anserを一回だけ実行するように命令している
answer();

// 画面にplaceholderつけて画面上で期限を設定できるようにしたい
