const $ = document.querySelector.bind(document)




function TabNavigation() {

    const html = {
        links: [...$('.tab-links').children],
        contents: [...$('.tab-content').children],
        openTab : $('[data-open]')
    }

    function hideAllTabcontent() {
        html.contents.forEach(section => {
            section.style.display = "none"
        })
    }

    function removeAllActiveClass() {
html.links.forEach(tab =>{
    tab.className = tab.className.replace("active","")
})
    }

    function showCurrentTab(id) {
        const tabcontent = $('#' + id)
        tabcontent.style.display = "block"
    }

    function selectTab(event) {
        hideAllTabcontent()
        removeAllActiveClass()
        const target = event.currentTarget
        showCurrentTab(target.dataset.id)
        target.className += "active"

    }

    function listenForChange() {
        html.links.forEach(tab => {
            tab.addEventListener('click', selectTab)
        })
    }

    function init() {
        hideAllTabcontent()
        listenForChange()
        html.openTab.click()
    }
    return {
        init
    }

}


window.addEventListener('load', () => {
    const tabNavigation = TabNavigation()
    tabNavigation.init()
})