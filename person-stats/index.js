function changeStats(ev) {
  ev.preventDefault()
  const f = ev.target
  const name = f.personName.value
  const age = f.personAge.value
  const statsSelector = document.querySelector('#stats')
  if (name =="blue"){
    document.querySelector("input[name=\"personName\"]").style.color = "blue"
  }
  else if(age =="blue"){
    document.querySelector("input[name=\"personage\"]").style.color = "blue"
  }
  else if (name=="" || age=="") {
    alert("ERROR: CAN NOT LEAVE EMPTY")
  }
  else{
    statsSelector.innerHTML = "<p>name: "+ name +"</p><p>Age: " +age +"</a>"
  }
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', changeStats)
