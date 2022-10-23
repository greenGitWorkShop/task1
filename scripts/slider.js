// slider用の処理 GypsyR
class slideImg{
    constructor(alt, explanation, imgUrl){
        this.alt = alt;
        this.explanation = explanation;
        this.imgUrl = imgUrl;
    }
    // スライダ要素の作成
    generateSliderContent(){
        let domObj = document.getElementById("slider");
        // slider div
        let divSlider = document.createElement("div");
        divSlider.classList.add("slider__content");
        // slider img
        let imgContainer = document.createElement("img");
        imgContainer.src = this.imgUrl;
        imgContainer.alt = this.alt;
        imgContainer.classList.add("slider__img");
        divSlider.append(imgContainer);
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
let sImg1 = new slideImg("slider_image1", "this is coffee", "images/coffee-2151200_1280.jpg");
let sImg2 = new slideImg("slider_image2", "Wow pancakes, awesome", "images/pancakes-5989136_1280.jpg");
let sImg3 = new slideImg("slider_image3", "Wow cake", "images/cake-1284548_1280.jpg");
let sImg4 = new slideImg("slider_image4", "Apple pie yummy", "images/apple-pie-5479993_1280.jpg");
let sImg5 = new slideImg("slider_image5", "this is coffee beens!", "images/coffee-6632524_1280.jpg");
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
    })
}
