import './promo.css'
import MyImage from './section-02.png'
import MyImage2 from './section-2-2.png'
import MyImage3 from './section-03.png'
import MyImageMap from './world-map.png'
import React from 'react';

const Promo = () => {
    return (
        <div>
            
            <section class="section-02">
                <div class="section-container">
                    <div class="section-description">
                        <div class="section-number">
                            02
                        </div>
                        <div class="section-text-block">
                            <div class="section-title">
                                Прочность и надежность наших материалов!
                            </div>
                            <div class="section-text">
                                Лесоматериалы являются одними из самых прочных и надежных материалов для строительства зданий и сооружений. Их прочность и долговечность обуславливаются естественной жесткостью древесины и защитными свойствами лесного материала.
                            </div>
                        </div>
                    </div>
                    <div class="section-img">
                        <img class="section-img-pk" src={MyImage} alt=""/>
                        <img class="section-img-2"  src={MyImage2} alt="" />
                    </div>
                </div>
            </section>
            <div class="line-text-block">
                <div class="line-section">
                    <div class="line-section-text">
                        Лесоматериалы являются одними из самых прочных и надежных материалов для строительства зданий и сооружений. Их прочность и долговечность обуславливаются естественной жесткостью древесины и защитными свойствами лесного материала.
                    </div>
                </div>
            </div>
            <section class="section-03">
                <div class="container">
                    <div class="section-03-block">
                        <div class="section-03-img">
                        <img class="" src={MyImage3} alt=""/>
                        </div>
                        <div class="section-03-text">
                            <div class="section-number">
                                03
                            </div>
                            <div class="section-title">
                                Легкий вес, очень прост и упрощён в использовании
                            </div>
                            <div class="section-text">  
                                Лесоматериалы отличаются легким весом, что облегчает транспортировку и монтаж на строительной площадке. Более того, легкие материалы позволяют использовать более легкие фундаменты, что снижает затраты на строительство.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="line-text-block line-text-block-left">
                <div class="line-section">
                    <div class="line-section-text">
                        Лесоматериалы являются одними из самых прочных и надежных материалов для строительства зданий и сооружений. Их прочность и долговечность обуславливаются естественной жесткостью древесины и защитными свойствами лесного материала.
                    </div>
                </div>
            </div>
            <section class="section-map"> 
                <div class="section-map-title">
                    Мы буквально везде!
                </div>
                <div class="section-map-subtitle">
                    Мы всегда работаем со всеми странами мира!
                </div>
                <div class="map-img-block">
                    <img alt="" src={MyImageMap} />
                </div>
            </section>
            <section class="section-faq">
                <div class="container">
                    <div class="section-faq-title">
                        Часто задаваемые вопросы
                    </div>
                    <div class="faq-block">
                        <div class="faq-item" id="faq-1">
                            <div class="faq-item-top"> 
                                 <div class="faq-item-name">
                                    Как мы можем вас найти?
                                 </div>
                                 <div class="faq-item-open"  onClick={(e) => {
                                    var faqItemOpenElements = document.querySelectorAll('.faq-item-open');
                                    faqItemOpenElements.forEach(function(element) {
                                        var faqItemParent = element.closest('#faq-1');
                                        if (faqItemParent) {
                                          faqItemParent.classList.toggle('open');
                                        }
                                     
                                    });
   }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                                        <rect x="20.5833" y="6.33301" width="25.3333" height="3.16667" rx="1.5" transform="rotate(90 20.5833 6.33301)" fill="black"/>
                                        <rect opacity="0.3" x="31.6667" y="20.583" width="25.3333" height="3.16667" rx="1.5" transform="rotate(-180 31.6667 20.583)" fill="black"/>
                                    </svg>
                                 </div>
                            </div>
                            <div class="faq-item-text">
                                Вы можете найти нас в Интернете по адресу <a href="https://KirillChernakov.com" target="_blank">https://KirillChernakov.com</a>. Мы также доступны на различных социальных платформах, таких как Twitter, Facebook, и LinkedIn.
                            </div>
                        </div>
                        <div class="faq-item" id="faq-2">
                            <div class="faq-item-top"> 
                                 <div class="faq-item-name">
                                    Где посмотреть список вашей продукции?
                                 </div>
                                 <div class="faq-item-open"  onClick={(e) => {
                                    var faqItemOpenElements = document.querySelectorAll('.faq-item-open');
                                    faqItemOpenElements.forEach(function(element) {
                                        var faqItemParent = element.closest('#faq-2');
                                        if (faqItemParent) {
                                          faqItemParent.classList.toggle('open');
                                        }
                                     
                                    });
   }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                                        <rect x="20.5833" y="6.33301" width="25.3333" height="3.16667" rx="1.5" transform="rotate(90 20.5833 6.33301)" fill="black"/>
                                        <rect opacity="0.3" x="31.6667" y="20.583" width="25.3333" height="3.16667" rx="1.5" transform="rotate(-180 31.6667 20.583)" fill="black"/>
                                    </svg>
                                 </div>
                            </div>
                            <div class="faq-item-text">
                                Вы можете найти нас в Интернете по адресу <a href="https://KirillChernakov.com" target="_blank">https://KirillChernakov.com</a>. Мы также доступны на различных социальных платформах, таких как Twitter, Facebook, и LinkedIn.
                            </div>
                        </div>
                        <div class="faq-item" id="faq-3">
                            <div class="faq-item-top"> 
                                 <div class="faq-item-name">
                                    Есть ли возможность с вами работать через другие страны?
                                 </div>
                                 <div class="faq-item-open"  onClick={(e) => {
                                    var faqItemOpenElements = document.querySelectorAll('.faq-item-open');
                                    faqItemOpenElements.forEach(function(element) {
                                        var faqItemParent = element.closest('#faq-3');
                                        if (faqItemParent) {
                                          faqItemParent.classList.toggle('open');
                                        }
                                     
                                    });
   }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                                        <rect x="20.5833" y="6.33301" width="25.3333" height="3.16667" rx="1.5" transform="rotate(90 20.5833 6.33301)" fill="black"/>
                                        <rect opacity="0.3" x="31.6667" y="20.583" width="25.3333" height="3.16667" rx="1.5" transform="rotate(-180 31.6667 20.583)" fill="black"/>
                                    </svg>
                                 </div>
                            </div>
                            <div class="faq-item-text">
                                Вы можете найти нас в Интернете по адресу <a href="https://KirillChernakov.com" target="_blank">https://KirillChernakov.com</a>. Мы также доступны на различных социальных платформах, таких как Twitter, Facebook, и LinkedIn.
                            </div>
                        </div>
                        <div class="faq-item" id="faq-4">
                            <div class="faq-item-top"> 
                                 <div class="faq-item-name">
                                    Где можно задать дополнительный вопрос?
                                 </div>
                                 <div class="faq-item-open"  onClick={(e) => {
                                    var faqItemOpenElements = document.querySelectorAll('.faq-item-open');
                                    faqItemOpenElements.forEach(function(element) {
                                        var faqItemParent = element.closest('#faq-4');
                                        if (faqItemParent) {
                                          faqItemParent.classList.toggle('open');
                                        }
                                     
                                    });
   }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                                        <rect x="20.5833" y="6.33301" width="25.3333" height="3.16667" rx="1.5" transform="rotate(90 20.5833 6.33301)" fill="black"/>
                                        <rect opacity="0.3" x="31.6667" y="20.583" width="25.3333" height="3.16667" rx="1.5" transform="rotate(-180 31.6667 20.583)" fill="black"/>
                                    </svg>
                                 </div>
                            </div>
                            <div class="faq-item-text">
                                Вы можете найти нас в Интернете по адресу <a href="https://KirillChernakov.com" target="_blank">https://KirillChernakov.com</a>. Мы также доступны на различных социальных платформах, таких как Twitter, Facebook, и LinkedIn.
                            </div>
                        </div>
                        <div class="faq-item" id="faq-5">
                            <div class="faq-item-top"> 
                                 <div class="faq-item-name">
                                    Где найти ваши контакты для связи?
                                 </div>
                                 <div class="faq-item-open"  onClick={(e) => {
                                    var faqItemOpenElements = document.querySelectorAll('.faq-item-open');
                                    faqItemOpenElements.forEach(function(element) {
                                        var faqItemParent = element.closest('#faq-5');
                                        if (faqItemParent) {
                                          faqItemParent.classList.toggle('open');
                                        }
                                     
                                    });
   }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                                        <rect x="20.5833" y="6.33301" width="25.3333" height="3.16667" rx="1.5" transform="rotate(90 20.5833 6.33301)" fill="black"/>
                                        <rect opacity="0.3" x="31.6667" y="20.583" width="25.3333" height="3.16667" rx="1.5" transform="rotate(-180 31.6667 20.583)" fill="black"/>
                                    </svg>
                                 </div>
                            </div>
                            <div class="faq-item-text">
                                Вы можете найти нас в Интернете по адресу <a href="https://KirillChernakov.com" target="_blank">https://KirillChernakov.com</a>. Мы также доступны на различных социальных платформах, таких как Twitter, Facebook, и LinkedIn.
                            </div>
                        </div>
                        <div class="faq-item" id="faq-6">
                            <div class="faq-item-top"> 
                                 <div class="faq-item-name">
                                    Есть ли бюджетные варианты?
                                 </div>
                                 <div class="faq-item-open"  onClick={(e) => {
                                    var faqItemOpenElements = document.querySelectorAll('.faq-item-open');
                                    faqItemOpenElements.forEach(function(element) {
                                        var faqItemParent = element.closest('#faq-6');
                                        if (faqItemParent) {
                                          faqItemParent.classList.toggle('open');
                                        }
                                     
                                    });
   }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                                        <rect x="20.5833" y="6.33301" width="25.3333" height="3.16667" rx="1.5" transform="rotate(90 20.5833 6.33301)" fill="black"/>
                                        <rect opacity="0.3" x="31.6667" y="20.583" width="25.3333" height="3.16667" rx="1.5" transform="rotate(-180 31.6667 20.583)" fill="black"/>
                                    </svg>
                                 </div>
                            </div>
                            <div class="faq-item-text">
                                Вы можете найти нас в Интернете по адресу <a href="https://KirillChernakov.com" target="_blank">https://KirillChernakov.com</a>. Мы также доступны на различных социальных платформах, таких как Twitter, Facebook, и LinkedIn.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        

    );
}

export default Promo;