
const ul = document.querySelector('.result')


const printValue = (text) => {
const li = document.createElement('li')
ul.appendChild(li)
li.innerText = text
}

const clearValue = () => {
const allLi = document.querySelectorAll('li')
   for (const li of allLi){
       if (li){
           li.remove()
       }
   }
}



const searchBar = document.querySelector('#user-input')


const bigButton = document.querySelector('.biggify')
const bigAns = () => {
    clearValue()
    printValue(biggify(Number(searchBar.value)))
}
bigButton.addEventListener('click',bigAns)






const bigNasty = document.querySelector('.nasafy')


const shittyFunction = () => {
    clearValue()
    const bigGucci = nasafy(Number(searchBar.value))
    for (const items of bigGucci){
    printValue(items)
    }
}

bigNasty.addEventListener('click',shittyFunction)

const crazyify = document.querySelector('.crazify')

const myOtherShittyFunction = (val) => {
    clearValue()
    printValue(val)
}


crazyify.addEventListener('click',function () {
    myOtherShittyFunction(crazify(searchBar.value))
})











/************************
 * DOM HELPER FUNCTIONS *
 ************************/



/***************************
 * EVENT HANDLER FUNCTIONS *
 ***************************/



/**************************
 * SET UP EVENT LISTENERS *
 **************************/


