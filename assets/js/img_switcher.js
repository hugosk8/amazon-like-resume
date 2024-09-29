document.addEventListener("DOMContentLoaded", () => {
    const small_imgs = document.querySelectorAll('.small_imgs img');
    const big_img = document.querySelector('.main_img img');
    
    small_imgs.forEach(function(small_img) {
        small_img.addEventListener("click", function() {
            const big_img_url = big_img.src;
            
            big_img.src = small_img.src;
            small_img.src = big_img_url;
        })
    });
})