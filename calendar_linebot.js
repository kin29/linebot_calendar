var lineToken = PropertiesService.getScriptProperties().getProperty('LINE_TOKEN');

function main() {
  var calendars = CalendarApp.getAllCalendars();
  var text = Utilities.formatDate(new Date(), 'JST', 'yyyy/MM/dd　(E)') + "\n";
  var calendar = calendars[0];
  var events = calendar.getEventsForDay(new Date());   
   
  if(events.length == 0) text += "予定なし。ブーメランしに行こう。";
       
  for(j in events) {
    var event = events[j];
    var title = event.getTitle();
    var start = toTime(event.getStartTime());
    var end = toTime(event.getEndTime());
    text += "▶︎" + start + ' - ' + end + " " + title + '\n';
  }
  sendToLine(text);
  
}

function sendToLine(text){
  var token = lineToken;
  var options =
   {
     "method"  : "post",
     "payload" : "message=" + text,
     "headers" : {"Authorization" : "Bearer "+ token}

   };
   UrlFetchApp.fetch("https://notify-api.line.me/api/notify", options);
}

function toTime(str){
  return Utilities.formatDate(str, 'JST', 'HH:mm');
}

