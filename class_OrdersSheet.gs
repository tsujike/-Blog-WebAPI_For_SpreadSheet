class OrdersSheet {

  /** OrdersSheetに関するコンストラクタ
    * @constructor
    */
  constructor() {
    this.sheet = SpreadsheetApp.getActiveSheet();
  }


  /** recordsを連想配列で返すメソッド
   * @param{object}
   */
  getHashRecords() {
    const [headers, ...records] = this.sheet.getDataRange().getValues();

    const recordsWithKey = records.map(record => {
      const obj = {};
      headers.map((key, index) => obj[key] = record[index]);
      return obj;
    });

    return recordsWithKey;
  }


  /** recordsをJSONで返すメソッド
   * @param{object}
   */
  getJson() {
    const hashRecords = this.getHashRecords();
    const json = ContentService.createTextOutput(JSON.stringify(hashRecords)).setMimeType(ContentService.MimeType.JSON);
    return json;
  }

}


/**
  * TEST用関数
  */
function testOrderSheet() {

  const o = new OrdersSheet();
  console.log(o.getJson().getContent());
  //[{"受注ID":"j001","受注日":"2022-01-31T15:00:00.000Z"

}






