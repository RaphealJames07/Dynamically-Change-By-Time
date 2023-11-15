const button = document.querySelector(".button")
const output = document.querySelector(".output")
// output.setAttribute('style', 'width: 200px; height: 100px; color: white;')
output.style.cssText = 'width: 200px; height: 100px; color: white;'

const showOutput = () =>{
  const date = new Date()
  console.log(date.getHours());
  let currentHour = date.getHours()
  let message;
  if (currentHour < 12) {
    message = "Good morning!"
    output.style.backgroundColor = 'skyBlue'
    } else if (currentHour >= 12 && currentHour <= 15){
      message = "Good afternoon!"
    output.style.backgroundColor = 'orange'

      }else{
        message = "Good evening!"
    output.style.backgroundColor = 'blue'

        }
        output.innerHTML = `Current time is ${message}`
        
}
button.addEventListener('click', showOutput)