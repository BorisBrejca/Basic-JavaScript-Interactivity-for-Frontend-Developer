const akordeonTitles = document.querySelectorAll('[data-name="accordeon-title"]')
const akordeonBody = document.querySelectorAll('[data-name="list"]')

akordeonTitles.forEach(function(item){
    item.addEventListener('click', function(){
        this.nextElementSibling.classList.toggle('hidden')
    })
})