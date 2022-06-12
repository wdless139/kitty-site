document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#header-id')
        .addEventListener('click', () => {
            const cat = document.querySelector('#cat')

            if (cat.classList.contains('hidden')) {
                cat.classList.remove('hidden')
            } else {
                cat.classList.add('hidden')
            }
        })
})
