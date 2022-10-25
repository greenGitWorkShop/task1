// slider用の処理 GypsyR
class slideImg{
    constructor(alt, explanation, imgUrl, place, colorCode){
        this.alt = alt;
        this.explanation = explanation;
        this.imgUrl = imgUrl;
        this.place = place;
        this.colorCode = colorCode;
    }
    // 画像位置設定
    placeTable = {
        "left" : "left",
        "center" : "center",
        "right" : "right"
    }

    colorTable = {
        "c1" : "color1",
        "c2" : "color2",
        "c3" : "color3"
    }

    // スライダ要素の作成
    generateSliderContent(){
        // target
        let domObj = document.getElementById("slider");
        domObj.classList.add("box");
        // slider div
        let divSlider = document.createElement("div");
        divSlider.classList.add("slider__content");
        
        let divSub = document.createElement("div");
        divSub.classList.add("divSubContainer");

        // slider img
        let imgSlider = document.createElement("img");
        imgSlider.src = this.imgUrl;
        imgSlider.alt = this.alt;

        // slider text
        let pSlider = document.createElement("p");
        pSlider.innerHTML = this.explanation;
        pSlider.classList.add(this.placeTable[this.place], this.colorTable[this.colorCode]);
        
        // DOM
        divSub.append(imgSlider);
        divSub.append(pSlider);

        console.log(divSub);
        // アニメーションをもつスライダーにappend
        divSlider.append(divSub);
        domObj.append(divSlider);

        return domObj;
    }
}
class helperFunction{
    static startupSlider(sliderList){
        for(let i=0; i<sliderList.length; i++){
            sliderList[i].generateSliderContent();
        }
    }
}
//各要素作成
let sImg1 = new slideImg("slider_image1", "【特集】this is coffee", "images/coffee-2151200_1280.jpg","left", "c1");
let sImg2 = new slideImg("slider_image2", "【特集】Wow pancakes, awesome", "images/pancakes-5989136_1280.jpg","center", "c3");
let sImg3 = new slideImg("slider_image3", "【新メニュー!】Wow cake", "images/cake-1284548_1280.jpg","right", "c1");
let sImg4 = new slideImg("slider_image4", "Apple pie yummy", "images/apple-pie-5479993_1280.jpg","left", "c3");
let sImg5 = new slideImg("slider_image5", "this is coffee beens!", "images/coffee-6632524_1280.jpg","center", "c1");
let sList = [sImg1,sImg2,sImg3,sImg4,sImg5];
//各要素配置
helperFunction.startupSlider(sList);

/////////  イベント
// スライダー押されたときにイベント
const operatorSlider = document.querySelectorAll(".slider__content");
for(let i = 0; i < operatorSlider.length; i++){
    let opElement = operatorSlider[i];
    opElement.addEventListener("click", function(){
        alert(sList[i].explanation);
        console.log("イベント");
    })
}
