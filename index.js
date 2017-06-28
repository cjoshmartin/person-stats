function Update(ev) {
  ev.preventDefault()
  /*
  * Grabbing text
  */
  const f = ev.target
  const name = f.personName.value
  const age = f.personAge.value
  const favcolor = f.favoriteColor.value

  /*
  * Grabbing Selectors
  */
  // starting variables
  const div = document.querySelector('#stats')
  // const list = document.createElement('ul') // where content goes
  const nameItem = document.createElement('li')
  const ageItem = document.createElement('li')
  const colorItem = document.createElement('li')
  const colorDiv = document.createElement('div')

  /*
  * Functions
  */

  function renderColor (color) { // #1
          // very unique
    const newDiv = document.createElement('div')
    // newDiv.style.backgroundColor = color;
    newDiv.textContent = color
    return newDiv;
    }


    function renderListItem(a) { //# 2
     return document.createElement(a)
    }


  function renderList(name,age,favcolor){ // #3
    const newList = renderListItem('ul') // parent
    newList.classList.add("animated", "slideInLeft")
    newList.style.backgroundColor ="#f7f7f7"
    // debugger
    const nameItem = renderListItem('li')
    nameItem.textContent = `Name: ${name}`

    const ageItem = renderListItem('li')
    ageItem.textContent = `Age: ${age}`

    const favcolorItem = renderListItem('li') // parent
    const pindiv = renderListItem("p")
    pindiv.textContent = `Favorite Color : ${favcolor}`
    const coloredDiv = renderListItem('div')
    coloredDiv.style.backgroundColor = favcolor
    coloredDiv.style.width = '6rem'
    coloredDiv.style.height = '3rem'
    coloredDiv.classList.add('col-md-offset-11')
    // coloredDiv.style.float = 'right'
    favcolorItem.appendChild(pindiv)
    favcolorItem.appendChild(coloredDiv)

    newList.appendChild(nameItem)
    newList.appendChild(ageItem)
    newList.appendChild(favcolorItem)

    return newList
    }

 /*
 * Busness Logic
 */

  // name tag
  // nameItem.textContent = `Name: ${name}`
  // list.appendChild(nameItem)
  //
  //
  // ageItem.textContent = `Age: ${age}`
  // list.appendChild(ageItem)
  //
  // colorItem.textContent = 'Favorite Color: '
  //
  //
  // colorDiv.style.backgroundColor = favcolor
  // colorDiv.style.width = '6rem'
  // colorDiv.style.height = '3rem'
  // colorItem.appendChild(colorDiv)
  //colorItem.appendChild(renderColor(favcolor)) // #1

  // list.appendChild(colorItem)

  // list.appendChild()


  div.appendChild(renderList(name,age,favcolor))

}// end of function

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', Update)
