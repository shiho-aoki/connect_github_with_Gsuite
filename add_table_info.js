function add_table_info_comment() {
  var issueNumber = 11; //need to change
  var username = 'user name';
  var repository = 'repository name';
  var accesstoken = '';
  var url = "https://api.github.com/repos/"+username+"/"+repository+"/issues/" + issueNumber + "/comments?access_token="+accesstoken;
  
  var spreadsheet = SpreadsheetApp.openById('Your spread sheet ID');
  var sheet_name = spreadsheet.getSheetByName('tab name');
  var reqest_comment = spreadsheet.getSheetByName('tab name');//need to change
  var body = reqest_comment.getRange('A1:M57').getValues();//need to chnage
  
  var data = new Date();
  var summary = '<details>\n<summary>'+ data.toString() + '</summary>\n';
  
  var body_table = '';
  for (var i=0; i<body.length; i++){
    body_table += "\n"+"|"
    if(i==1){
      body_table += ' --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |\n|'//need to change
    }
    var row_data = body[i]
    for (var n=0; n<row_data.length; n++){
      var col_data = row_data[n]
      if(col_data==''){
        if (n==0){
          body_table += ' ^ |';
        }
        else{
          body_table += ' > |';
        }
      }
      else{
        col_data = col_data.toString();
        if (col_data.search(/[\r\n]+/g)){
          console.log(col_data);
          col_data = col_data.replace(/[\r\n]+/g,'<br>');
          console.log("chenged", col_data);
        }
        body_table += col_data + '|'
      }
    }
  }
  var body = summary + body_table + '\n</details>';
  var issueBody = {body:body};
  var options = 
      {
        "method": "post",
        "payload": JSON.stringify(issueBody),
        "muteHttpExceptions": true        
      };
  var response = UrlFetchApp.fetch(url,options);
  console.log(response.getContentText());
}
