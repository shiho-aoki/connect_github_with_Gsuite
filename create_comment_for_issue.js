function create_commet(){
  var issueNumber = 11; //need to change
  var username = 'user name';
  var repository = 'repository name';
  var accesstoken = '';
  var url = "https://api.github.com/repos/"+username+"/"+repository+"/issues/" + issueNumber + "/comments?access_token="+accesstoken;
  
  var spreadsheet = SpreadsheetApp.openById('Your spread sheet');
  var sheet_name = spreadsheet.getSheetByName('tab name');
  
  var title = sheet_name.getRange(13,1).getValue();
  var body = sheet_name.getRange(13,2).getValue();
  var label = sheet_name.getRange(13,3).getValue().split(',');
  var issueBody = {title:title,body:body,labels:label};
  var options = 
      {
        "method": "post",
        "payload": JSON.stringify(issueBody),
        "muteHttpExceptions": true
      };
  UrlFetchApp.fetch(url,options);
}
