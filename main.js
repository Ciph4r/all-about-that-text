
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
    if (!searchBar.value)
    return printValue('Bro, put something in me...no homo!')
    printValue(biggify(Number(searchBar.value)))
    searchBar.value = "";
    searchBar.focus();
}
bigButton.addEventListener('click',bigAns)






const bigNasty = document.querySelector('.nasafy')


const shittyFunction = () => {
    clearValue()
    if (!searchBar.value)
    return printValue('Bro, put something in me...no homo!')
    const bigGucci = nasafy(Number(searchBar.value))
    for (const items of bigGucci){
    printValue(items)
    }
    searchBar.value = "";
    searchBar.focus();
}

bigNasty.addEventListener('click',shittyFunction)

const crazyify = document.querySelector('.crazify')

const myOtherShittyFunction = (val) => {
    clearValue()
    if (!searchBar.value)
    return printValue('Bro, put something in me...no homo!')
    printValue(val)
    searchBar.value = "";
    searchBar.focus();
}


crazyify.addEventListener('click',function () {
    myOtherShittyFunction(crazify(searchBar.value))
})





const reverse1 = document.querySelector('.reversify')

reverse1.addEventListener('click', function () {
myOtherShittyFunction(reversify(searchBar.value))
})

const title = document.querySelector('.titleify')
const titles = () => {
    clearValue();
    if (!searchBar.value)
    return printValue('Bro, put something in me...no homo!')
    printValue(titleify(searchBar.value))
    searchBar.value = "";
    searchBar.focus();
}
title.addEventListener('click', titles )












/************************
 * DOM HELPER FUNCTIONS *
 ************************/



/***************************
 * EVENT HANDLER FUNCTIONS *
 ***************************/



/**************************
 * SET UP EVENT LISTENERS *
 **************************/


