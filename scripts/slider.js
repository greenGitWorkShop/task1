// slider用の処理 GypsyR
class slideImg{
    constructor(alt, explanation, imgUrl, place, colorCode, nextUrl){
        this.alt = alt;
        this.explanation = explanation;
        this.imgUrl = imgUrl;
        this.place = place;
        this.colorCode = colorCode;
        this.nextUrl = nextUrl;
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

    // スライダ要素の作成(old)
    generateSliderContent(){
        // target
        let domObj = document.getElementById("slider");
        domObj.classList.add("box");

        // slidser用 div
        let divSlider = document.createElement("div");
        divSlider.classList.add("slider__content");
        // sliderに入れる一要素のdiv
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
        // アニメーションをもつスライダーにappend
        divSlider.append(divSub);
        domObj.append(divSlider);

        return domObj;
    }

    //carouselのコンテンツを加える関数(開発途中)
    generateCarouselElement(){
        let domObj = document.getElementById("carousel");

        // a tag element
        let aSlider = document.createElement("a");
        aSlider.href = this.nextUrl;
        aSlider.classList.add("carousel-item");
        aSlider.style = "margin-right: 5px;";

        //span
        let spanSlider = document.createElement("span");
        spanSlider.classList.add("carousel-item-img absolute-height");

        // slider img
        let imgSlider = document.createElement("img");
        imgSlider.src = this.imgUrl;
        imgSlider.alt = this.alt;
        imgSlider.width = "600";
        imgSlider.height = "300";

        // slider text
        let pSlider = document.createElement("p");
        pSlider.innerHTML = this.explanation;
        pSlider.classList.add(this.placeTable[this.place], this.colorTable[this.colorCode]);

        //DOM
        domObj.append(aSlider);
        domObj.append(spanSlider);
        domObj.append(imgSlider);
        //domObj.append(pSlider);

        return domObj;
    }
}

class helperFunction{
    static startupSlider(sliderList){
        for(let i=0; i<sliderList.length; i++){
            sliderList[i].generateSliderContent();
            //sliderList[i].generateCarouselElement();
        }
    }
}

//インスタンス作成　名称、テキスト、画像URL、画像位置、文字色、クリック先のURL
let sImg1 = new slideImg("slider_image1", "　", "images/linkedin_banner_image_2.png","left", "c1", " ");
let sImg2 = new slideImg("slider_image2", "【特集】プレゼント企画！", "images/pancakes-5989136_1280.jpg","center", "c3","special.html");
let sImg3 = new slideImg("slider_image3", "カフェでチーム開発?リアルイベント開催", "images/teamdev.png","right", "c1","special.html");
let sImg4 = new slideImg("slider_image4", "【新メニュー】ドリンク？", "images/apple-pie-5479993_1280.jpg","left", "c3","special.html");
let sImg5 = new slideImg("slider_image5", "【新メニュー】フード？", "images/coffee-6632524_1280.jpg","center", "c1","special.html");
let sList = [sImg1,sImg2,sImg3,sImg4,sImg5];
//各要素配置
helperFunction.startupSlider(sList);

/////////  イベント
// スライダー押されたときに発生するイベント、別ページへの移動
const operatorSlider = document.querySelectorAll(".slider__content");
for(let i = 0; i < operatorSlider.length; i++){
    let opElement = operatorSlider[i];
    opElement.addEventListener("click", function(){
        let nextPage = document.createElement("a");
        nextPage.href = sList[i].nextUrl;
        nextPage.click();
    })
}
