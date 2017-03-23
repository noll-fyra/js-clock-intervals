$(document).ready(function () {
  var hour = document.querySelector('#hour')
  var $hour = $('hour')
  console.log(hour)
  console.log($hour)
  var minute = document.querySelector('#minute')
  var second = document.querySelector('#second')
  var date = document.querySelector('p')
  var dateFade = true

  function setDate (now) {
    var day = now.getUTCDate()
    var month = now.getUTCMonth() + 1
    var year = now.getUTCFullYear()
    date.textContent = day + '/' + month + '/' + year
  }

  function fadeDate () {
    dateFade = !dateFade
    date.style.opacity = dateFade ? 1 : 0
    date.style.transition = 'all 2s ease'
  }

  setInterval(function () {
    var now = new Date()
    setDate(now)
    var hourDegree = timeRotation('hour', now.getUTCHours() + 8)
    var minuteDegree = timeRotation('minute', now.getUTCMinutes())
    var secondDegree = timeRotation('second', now.getUTCSeconds())
    hour.style.transform = 'rotate(' + hourDegree + 'deg)'
    minute.style.transform = 'rotate(' + minuteDegree + 'deg)'
    second.style.transform = 'rotate(' + secondDegree + 'deg)'
    fadeDate()
  }, 1000)

  function timeRotation (timeType, amount) {
    switch (timeType) {
      case 'hour':
        return amount / 12 * 360
      default:
        return amount / 60 * 360
    }
  }
})
