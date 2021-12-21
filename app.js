const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const imgItems = $$('.img-item img');
const modal = $('.modal');
const imgDetail = $('.detail_img img')

const arrowRight = $('.arrow_right');
const arrowLeft = $('.arrow_left')

const imgItemsLength = imgItems.length



imgItems.forEach((e,index) => {
    e.addEventListener('click', ()=>{
        imgDetail.src = e.src;
        modal.classList.add('show');
        hiddenArrow(index);
        
        arrowRight.onclick = function(){
            index++;
            if(index <= imgItemsLength - 1){
                imgDetail.src = imgItems[index].src
            }
            hiddenArrow(index);
        }
        arrowLeft.onclick = function(){
            index--;
            if(index >= 0){
                imgDetail.src = imgItems[index].src
            }
            hiddenArrow(index);
        }
    })
});



function hiddenArrow(index){
    if(true){
        arrowLeft.style.visibility = 'visible';
        arrowRight.style.visibility = 'visible';
    }
    if(index <= 0){
        arrowLeft.style.visibility = 'hidden';
    }
    if(index >= imgItemsLength - 1){
        arrowRight.style.visibility = 'hidden';
    }
}

const btnClose = $('.modal .close-icon');
btnClose.addEventListener('click',()=>{
    modal.classList.remove('show');
})