// javascript練習

// hot と cold でテーブルを分ける
let hotDrinkTable = document.getElementById("hotDrinkTable");
let coldDrinkTable = document.getElementById("coldDrinkTable");

// ドリンククラス
class Drink{
  constructor(drinkName, sSize, mSize, lSize, imgUrl){
      this.drinkName= drinkName;
      this.sSize = sSize;
      this.mSize = mSize;
      this.lSize = lSize ;
      this.imgUrl = imgUrl;
  }
}

// ドリンクオブジェクト
let hotCoffee = new Drink("ホットコーヒー", "300円<br />（税込330円）", "400円<br />（税込440円）","500円<br />（税込550円）", "#");
let espresso = new Drink("エスプレッソ", "300円<br />（税込330円）", "400円<br />（税込440円）","500円<br />（税込550円）", "#");
let caffeLatte = new Drink("カフェラテ", "400円<br />（税込440円）","500円<br />（税込550円）", "600円<br />（税込660円）", "#");
let caffeMocha = new Drink("カフェモカ", "400円<br />（税込440円）","500円<br />（税込550円）", "600円<br />（税込660円）", "#");
let soyLatte = new Drink("ソイラテ", "400円<br />（税込440円）","500円<br />（税込550円）", "600円<br />（税込660円）", "#");
let matchaLatte = new Drink("抹茶ラテ", "400円<br />（税込440円）","500円<br />（税込550円）", "600円<br />（税込660円）", "#");

let orangeJuice = new Drink("オレンジジュース", "300円<br />（税込330円）", "400円<br />（税込440円）","500円<br />（税込550円）", "#");
let appleJuice = new Drink("アップルジュース", "300円<br />（税込330円）", "400円<br />（税込440円）","500円<br />（税込550円）", "#");
let iceCoffee = new Drink("アイスコーヒー", "300円<br />（税込330円）", "400円<br />（税込440円）","500円<br />（税込550円）", "#");
let iceCaffeLatte = new Drink("アイスカフェラテ", "400円<br />（税込440円）","500円<br />（税込550円）", "600円<br />（税込660円）", "#");
let iceMatchaLatte = new Drink("アイス抹茶ラテ", "400円<br />（税込440円）","500円<br />（税込550円）", "600円<br />（税込660円）", "#");

function createDrinkRow(drinkObject){
  let innerTr = document.createElement("tr");

  //*** 飲み物の名前 ***
  let innerTh = document.createElement("th");
  innerTh.setAttribute("scope", "row");
  innerTh.innerHTML = drinkObject.drinkName;

  //*** 飲み物の価格 ***
  let sSizeTd = document.createElement("td");
  sSizeTd.innerHTML = drinkObject.sSize;

  let mSizeTd = document.createElement("td");
  mSizeTd.innerHTML = drinkObject.mSize;

  let lSizeTd = document.createElement("td");
  lSizeTd.innerHTML = drinkObject.lSize;

  //*** <tr>に<th>と<td>をappendする ***
  innerTr.append(innerTh);
  innerTr.append(sSizeTd);
  innerTr.append(mSizeTd);
  innerTr.append(lSizeTd);

  return innerTr;
}

// hot
hotDrinkTable.append(createDrinkRow(hotCoffee));
hotDrinkTable.append(createDrinkRow(espresso));
hotDrinkTable.append(createDrinkRow(caffeLatte));
hotDrinkTable.append(createDrinkRow(caffeMocha));
hotDrinkTable.append(createDrinkRow(soyLatte));
hotDrinkTable.append(createDrinkRow(matchaLatte));

// cold
coldDrinkTable.append(createDrinkRow(iceCoffee));
coldDrinkTable.append(createDrinkRow(iceCaffeLatte));
coldDrinkTable.append(createDrinkRow(iceMatchaLatte));
coldDrinkTable.append(createDrinkRow(orangeJuice));
coldDrinkTable.append(createDrinkRow(appleJuice));