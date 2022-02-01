# -Blog-WebAPI_For_SpreadSheet
[ブログ]スプレッドシートをJSONでWebAPI化しようのコードです


呼び出し側のコードです。
```js
function myFunction() {

  const url = 'https://script.google.com/macros/s/AKfycbyfPhxikc4bsuaE3TPFp1iUR3W5PWo5pmFqL-J_QeZK1gFchYikhnzhI2jUQ1ybFXgT/exec';
  const response = UrlFetchApp.fetch(url);

  const json = JSON.parse(response.getContentText());
  const values = json.map(element => Object.values(element));

  SpreadsheetApp.getActiveSheet().getRange(2, 1, values.length, values[0].length).setValues(values);

}
```
