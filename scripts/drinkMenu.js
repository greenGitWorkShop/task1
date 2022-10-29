// javascript練習

// hot と cold でテーブルを分ける
let hotDrinkTable = document.getElementById("hotDrinkTable");
let coldDrinkTable = document.getElementById("coldDrinkTable");

// 表を作る
function createDrinkRow(drinkObjectArr){
  let table = document.createElement("table");
  table.classList.add("table")
  let thead = document.createElement("thead");

  let tr = document.createElement("tr");

  let noLabelth = document.createElement("th");
  let labelSth = document.createElement("th");
  let labelMth = document.createElement("th");
  let labelLth = document.createElement("th");
  labelSth.setAttribute("scope", "col");
  labelMth.setAttribute("scope", "col");
  labelLth.setAttribute("scope", "col");

  let strongS = document.createElement("strong");
  let strongM = document.createElement("strong");
  let strongL = document.createElement("strong");

  strongS.innerHTML = "S"
  strongM.innerHTML = "M";
  strongL.innerHTML = "L";

  labelSth.append(strongS);
  labelMth.append(strongM);
  labelLth.append(strongL);

  tr.append(noLabelth);
  tr.append(labelSth);
  tr.append(labelMth);
  tr.append(labelLth);

  thead.append(tr);

  table.append(thead);

  //*** 表の中身 */
  let tbody = document.createElement("tbody");

  //*** 飲み物の数だけ繰り返す */
  for(let i=0; i<drinkObjectArr.length; i++){
    //*** 飲み物の名前 ***
    let innerTh = document.createElement("th");
    innerTh.setAttribute("scope", "row");
    innerTh.innerHTML = drinkObjectArr[i].drinkName;

    //*** 飲み物の価格 ***
    let sSizeTd = document.createElement("td");
    sSizeTd.innerHTML = drinkObjectArr[i].sSize;

    let mSizeTd = document.createElement("td");
    mSizeTd.innerHTML = drinkObjectArr[i].mSize;

    let lSizeTd = document.createElement("td");
    lSizeTd.innerHTML = drinkObjectArr[i].lSize;

    let innerTr = document.createElement("tr");

    //*** <tr>に<th>と<td>をappendする ***
    innerTr.append(innerTh);
    innerTr.append(sSizeTd);
    innerTr.append(mSizeTd);
    innerTr.append(lSizeTd);

    //*** <tbody>に<th>と<td>をappendする ***
    tbody.append(innerTr);
  }
  //*** 飲み物がそろったところで<tbody>に<th>と<td>をappendする ***
  table.append(tbody);

console.log(table);
return table;

}

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

 // ドリンクオブジェクトの2次元配列(活用したいのだがうまく動くか？…)
let hotDrinkArr = [
  new Drink("ホットコーヒー", "300円<br />（税込330円）", "400円<br />（税込440円）","500円<br />（税込550円）", "https://3.bp.blogspot.com/-7A9qrVipedQ/VyNdIMyg-fI/AAAAAAAA6LI/kGw0Eqa17-UxwtCiulVzHTwfHI_9lBzKwCLcB/s800/coffee01_blend.png"),
  new Drink("エスプレッソ", "300円<br />（税込330円）", "400円<br />（税込440円）","500円<br />（税込550円）", "https://2.bp.blogspot.com/-Hf9TuhdlZCw/VyNdMA_5qkI/AAAAAAAA6L4/b3BnlTUZv1My3qbYZJohljm-DRSCfljuACLcB/s800/coffee12_espresso.png"),
  new Drink("カフェラテ", "400円<br />（税込440円）","500円<br />（税込550円）", "600円<br />（税込660円）", "https://1.bp.blogspot.com/-vteKTR2jyec/VyNdKF2_PAI/AAAAAAAA6Lg/IzY1oT2PG3odjBR6lo3GehKJwx2X9fPNgCLcB/s800/coffee06_cafelatte.png"),
  new Drink("カフェモカ", "400円<br />（税込440円）","500円<br />（税込550円）", "600円<br />（税込660円）", "https://2.bp.blogspot.com/-8wM3hXpj--w/VyNdK1hjDcI/AAAAAAAA6Lo/8KYB16qqmN4o0Q357AsE81w7HBsPtMLBwCLcB/s800/coffee08_cafe_mocha.png"),
  new Drink("ソイラテ", "400円<br />（税込440円）","500円<br />（税込550円）", "600円<br />（税込660円）", "https://2.bp.blogspot.com/-T97VCqHqyE8/WrL6KGoMLPI/AAAAAAABK_0/B4m3v9Xm3DQ05_StmGgYRsnFbQo5vuAdwCLcBGAs/s800/coffee_cup_paper.png"),
  new Drink("抹茶ラテ", "400円<br />（税込440円）","500円<br />（税込550円）", "600円<br />（税込660円）", "https://2.bp.blogspot.com/-T97VCqHqyE8/WrL6KGoMLPI/AAAAAAABK_0/B4m3v9Xm3DQ05_StmGgYRsnFbQo5vuAdwCLcBGAs/s800/coffee_cup_paper.png")
]

// ドリンクオブジェクトの2次元配列(アイス）
 let coldDrinkArr = [
  new Drink("オレンジジュース", "300円<br />（税込330円）", "400円<br />（税込440円）","500円<br />（税込550円）", "https://1.bp.blogspot.com/-TXu15ALhc2E/UWgWfSkMjOI/AAAAAAAAQEc/hftbbQjbXzk/s400/juice_orange.png"),
  new Drink("アップルジュース", "300円<br />（税込330円）", "400円<br />（税込440円）","500円<br />（税込550円）", "https://3.bp.blogspot.com/-08bZOkbsO54/UWgWerlihRI/AAAAAAAAQEE/BnkKltCFm7E/s1600/juice_apple.png"),
  new Drink("アイスコーヒー", "300円<br />（税込330円）", "400円<br />（税込440円）","500円<br />（税込550円）", "https://2.bp.blogspot.com/-YW3x5ABJ9xg/VyNdLpYkldI/AAAAAAAA6Lw/nW_PQMS7ZXs52B8eriRoGphb6bqt7ieRwCLcB/s800/coffee10_iced_coffee.png"),
  new Drink("アイスカフェラテ", "400円<br />（税込440円）","500円<br />（税込550円）", "600円<br />（税込660円）", "https://4.bp.blogspot.com/-UBXK1I6AyLk/VyNdL9WYEwI/AAAAAAAA6L0/bvdsqaU5Gb8dYrixhGgeqtzUS7V4iq7KwCLcB/s800/coffee11_iced_milk_coffee.png"),
  new Drink("アイス抹茶ラテ", "400円<br />（税込440円）","500円<br />（税込550円）", "600円<br />（税込660円）", "https://4.bp.blogspot.com/-zNMVQGfTk9Q/XMZ9yEn38qI/AAAAAAABSlM/sNrfBSG44x4B2dcIs9RXnC5FCbSYyjIcgCLcBGAs/s800/drink_coffee_cream_green.png"),
]

// ドリンクオブジェクトの配列(アイス）
let specialDrinkArr = [
  new Drink("カレー", "800円<br />（税込880円）", "900円<br />（税込990円）","100000円<br />（税込110000円）", "https://2.bp.blogspot.com/-meTKaxBJT7U/UNO5rlZOKrI/AAAAAAAAIz4/Ndq8X3vAvPU/s400/nan_curry.png"),
  new Drink("味噌汁", "100円<br />（税込110円）", "150円<br />（税込165円）","100000円<br />（税込110000円）", "https://1.bp.blogspot.com/-fifqRiSdBCw/Wm1ymCJ6LaI/AAAAAAABJ6M/JPpUqUOW7mEOn9fTGunRwAQ961xDuIIuQCLcBGAs/s400/food_misoshiru_toufu_wakame.png"),
]

// hot
hotDrinkTable.append(createDrinkRow(hotDrinkArr));

// cold
coldDrinkTable.append(createDrinkRow(coldDrinkArr));


let targetModaldiv = document.getElementById("fortuneTarget")

// モーダルの中身をランダムで選ぶ
function chooseDrink(allDrinkArr){
  // 毎回リセット
  targetModaldiv.innerHTML = "";

  let innerDiv = document.createElement("div");

  // ドリンク配列の中からランダムに1つ数字を出す。
  let j = Math.floor( Math.random() * allDrinkArr.length)

  // 本日のおすすめドリンクは…?
  let message = document.createElement("h4");
  message.innerHTML = "本日のおすすめドリンクは…?";

  // おすすめドリンクが入るdivを作る
  let modalImgDiv =  document.createElement("div");
  modalImgDiv.classList.add("modal-img");

  // 画像を選んで入れるよ。
  let modalImg = document.createElement("img");
  modalImg.classList.add("rounded-2");

  // 配列からランダムで選んだオブジェクトのurlを使う。
  modalImg.setAttribute("src", allDrinkArr[j].imgUrl);

  // divの中にimg入れる。
  modalImgDiv.append(modalImg);

  // ドリンク名が入るh3タブ
  let drinkName = document.createElement("h3");
  drinkName.innerHTML = allDrinkArr[j].drinkName;

  // 価格が入るdivを作る
  let priceDiv =  document.createElement("div");
  priceDiv.classList.add("price");

  // pricedivの中身
  let priceH4 = document.createElement("h4");
  priceH4.classList.add("mb-4");
  priceH4.innerHTML = "💁‍♀️Price💁‍♂️"

  let priceS = document.createElement("p");
  priceS.innerHTML = "S : " + allDrinkArr[j].sSize;

  let priceM = document.createElement("p");
  priceM.innerHTML = "M : " + allDrinkArr[j].mSize;

  let priceL = document.createElement("p");
  priceL.innerHTML = "L : " + allDrinkArr[j].lSize;


  // priceDivに中身を入れていく。
  priceDiv.append(priceH4);
  priceDiv.append(priceS);
  priceDiv.append(priceM);
  priceDiv.append(priceL);


  // ドリンク紹介後のメッセージ
  let message2 = document.createElement("h5");

 if(allDrinkArr[j].drinkName == "カレー"){
  message2.innerHTML = "カレーは飲み物！"
 }else if(allDrinkArr[j].drinkName == "味噌汁"){
  message2.innerHTML = "白味噌、赤味噌、合わせ味噌どれが好き？"
 }else{
  message2.innerHTML = "飲んだことあった？<br />まだなければ試してみてね！"
 }

  // 全部をinnerDivにいれていくよ
  innerDiv.append(message);
  innerDiv.append(modalImgDiv);
  innerDiv.append(drinkName);
  innerDiv.append(priceDiv);
  innerDiv.append(message2);

  return innerDiv;

}


// 配列と配列を足し合わせる
let allDrinkArr = hotDrinkArr.concat(coldDrinkArr, specialDrinkArr);

targetModaldiv.append(chooseDrink(allDrinkArr));