
// Carousel用の処理 
class carouselContent{
    constructor(index, label, text, imgUrl,alt, nextUrl){
        this.index = index;
        this.label = label;
        this.text = text;
        this.imgUrl = imgUrl;
        this.alt= alt;
        this.nextUrl = nextUrl;
    }
    //indicator部分　button作成
    generateCarouselIndicator(){
        let indicatorsObj = document.getElementById("carouselIndicators");
        let indicatorButton = document.createElement("button");
        indicatorButton.type = "button";
        indicatorButton.setAttribute('data-bs-target','#carouselControls');
        strIndex = String(this.index);
        indicatorButton.setAttribute('data-bs-slide-to',strIndex);
        
        if(this.index==0){
            indicatorButton.classList.add("active");
            indicatorButton.setAttribute('aria-current','true'); 
        }
        slideIndex = String(this.index + 1);
        indicatorButton.setAttribute('aria-label','Slide '+slideIndex);
        indicatorsObj.append(indicatorButton);
        return indicatorsObj;
    }
    // inner部分作成
    generateCarouselInner(){
        let innerObj = document.getElementById("carouselItem");
        let divItem = document.createElement("div");
        divItem.classList.add("carousel-item");
        if(this.index == 0){
            divItem.classList.add("active");
        }

        let imgItem = document.createElement("img");
        imgItem.src = this.imgUrl;
        imgItem.alt = this.alt;
        imgItem.classList.add("d-block","w-100", "col-12", "col-sm-10", "col-lg-11");
        // caption部分
        let divCaption = document.createElement("div");
        divCaption.classList.add("carousel-caption", "d-none", "d-md-block");
        let hCaption = document.createElement("h5");
        let pCaption = document.createElement("p");
        hCaption.innerHTML = this.label;
        pCaption.innerHTML = this.text;
        
        // DOM
        // 画像とキャプション
        divCaption.append(hCaption);
        divCaption.append(pCaption);
        imgItem.append(divCaption);
        divItem.append(imgItem);
        innerObj.append(divItem);

        return innerObj;
    }
}


class helperFunctionCarousel{
    static createCarouselAll(carouselList){
        for(let i=0; i<carouselList.length; i++){
            carouselList[i].generateCarouselIndicator();
            carouselList[i].generateCarouselInner();
        }
    }
}

//インスタンス作成
let cContent1 = new carouselContent(0, "イベント", "特集です！", "images/linkedin_banner_image_2.png","1","special.html");
let cContent2 = new carouselContent(1, "イベント", "aaa！", "images/pancakes-5989136_1280.jpg", "2","special.html");
let cContent3 = new carouselContent(2, "イベント", "eeeee！", "images/apple-pie-5479993_1280.jpg", "3","special.html");

let cList = [cContent1,cContent2,cContent3];

helperFunctionCarousel.createCarouselAll(cList);

const operatorCarousel = document.querySelectorAll(".carousel-item");
for(let i = 0; i < operatorCarousel.length; i++){
    let opeElement = operatorCarousel[i];
    opeElement.addEventListener("click", function(){
        let nextPage = document.createElement("a");
        nextPage.href = cList[i].nextUrl;
        nextPage.click();
    })
}
