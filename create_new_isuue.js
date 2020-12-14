function createIssue() {
  var spreadsheet = SpreadsheetApp.openById('Your spread sheet Id');
  var sheet_name = spreadsheet.getSheetByName('Tab name');
  
  var username = 'Github account name';
  var repository = 'repository name';
  var accesstoken = '';
  var url = "https://api.github.com/repos/"+username+"/"+repository+"/issues?access_token="+accesstoken;
  
  var title = sheet_name.getRange(3,1).getValue();
  var body = sheet_name.getRange(3,2).getValue();
  var label = sheet_name.getRange(3,3).getValue().split(',');
  var issueBody = {title:title,body:body,labels:label};
  var options = 
      {
        "method": "post",
        "payload": JSON.stringify(issueBody),
        "muteHttpExceptions": true
      };
  UrlFetchApp.fetch(url,options);
}
