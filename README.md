# linebot_calendar
Googleカレンダーの予定をLINEで通知します。  
GoogleAppScript使ってます。  
  
## 使い方
1.LINE Notifyにログインし、トークンを発行する  
[https://notify-bot.line.me/my/](https://notify-bot.line.me/my/)  
「トークンを発行する」ボタンより、トークン名とトークンルームを選択する。  
トークンが発行される。２度と同じトークンは確認ができないので、しっかりコピーする！  

2.サービスのCallback URLにGASプロジェクトの共有URLを設定する。  
  
3.GASプロジェクトを開き、  
ファイル＞プロジェクトのプロパティ＞スクリプトのプロパティより、  
LINE_TOKENというプロパティ名で、2で発行したトークンを値に登録する。  
  
4.GASのトリガーを登録  
毎朝8時とかにしてます。  
  
5.2で設定したルームに「LINE notify」 を招待する  
  
