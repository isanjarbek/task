
export default function handler(req, res) {
    res.status(200).json([
        {title: "Gun", brand: "Glock", oldPrice: 10, price: 90},
        {title: "Sig Sauer P365XL Romeo Zero Semi-Auto Pistol", brand: "SigSauer", oldPrice: 840000, price: 790000, img: "https://basspro.scene7.com/is/image/BassPro/master1_100368130_main?id=RxQDn3&wid=834&hei=680&fmt=jpg&dpr=off"},
        {title: "Sig Sauer Cross Bolt-Action Centerfire Rifle", brand: "SigSauer", oldPrice: 0, price: 1790000, img: "https://basspro.scene7.com/is/image/BassPro/master1_100809920_main?id=-rdD_2&wid=762&hei=584&fmt=jpg&dpr=off"},
        {title: "Smith & Wesson M&P 15-22 Sport .22 LR Semiautomatic Rifle - .22 LR", brand: "Smith & Wesson", oldPrice: 8000, price: 7000, img: "https://basspro.scene7.com/is/image/BassPro/master1_10493_main?id=YXACz2&wid=538&hei=584&fmt=jpg&dpr=off"},
    ])
}
  