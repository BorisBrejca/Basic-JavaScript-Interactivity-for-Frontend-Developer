const dataTabs = document.querySelectorAll('[data-tab]');
const dataBodys = document.querySelectorAll('[data-tab-content]');

dataTabs.forEach(function(tab){
    tab.addEventListener('click',function(){
        const dataTab = this.dataset.tab;
        const searching = document.querySelector('#' + dataTab)
        dataBodys.forEach(function(data){
            data.classList.add('hidden')
        })
        searching.classList.remove('hidden')

    })
})

