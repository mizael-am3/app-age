function check() {

   var time = new Date()
   var currentYear = time.getFullYear()
   var birthYear = Number(document.querySelector('#birthYear').value)

   var age = currentYear - birthYear

   var textResult = document.querySelector('#textResult')
   var imgResult = document.querySelector('#imgResult')

   const checked = birthYear == 0 || birthYear > currentYear ? alert('[ERRO] Ano inserido inválido') : ''


   var seeGenre = document.getElementsByName('genre')
   var genre = ''

   if (seeGenre[0].checked) {
      genre = 'Masculino'
      if (age >= 0 && age <= 3) {
         imgResult.src = 'imgs/m0_3.jpg'
         textResult.innerHTML = `Gênero: ${genre} <br> ${age} anos`
      } else if (age > 4 && age <= 12) {
         imgResult.src = 'imgs/m4_12.jpg'
         textResult.innerHTML = `Gênero: ${genre} <br> ${age} anos`
      } else if (age > 12 && age <= 20) {
         imgResult.src = 'imgs/m12_20.jpg'
         textResult.innerHTML = `Gênero: ${genre} <br> ${age} anos`
      } else if (age > 20 && age <= 35) {
         imgResult.src = 'imgs/m20_35.jpg'
         textResult.innerHTML = `Gênero: ${genre} <br> ${age} anos`
      } else if (age > 35 && age <= 55) {
         imgResult.src = 'imgs/m35_55.jpg'
         textResult.innerHTML = `Gênero: ${genre} <br> ${age} anos`
      } else if (age > 55) {
         imgResult.src = 'imgs/m55+.jpg'
         textResult.innerHTML = `Gênero: ${genre} <br> ${age} anos`
      }
   } else if (seeGenre[1].checked) {
      genre = 'Feminino'
      if (age >= 0 && age <= 3) {
         imgResult.src = 'imgs/w0_3.jpg'
         textResult.innerHTML = `Gênero: ${genre} <br> ${age} anos`
      } else if (age > 4 && age <= 12) {
         imgResult.src = 'imgs/w4_12.jpg'
         textResult.innerHTML = `Gênero: ${genre} <br> ${age} anos`
      } else if (age > 12 && age <= 20) {
         imgResult.src = 'imgs/w12_20.jpg'
         textResult.innerHTML = `Gênero: ${genre} <br> ${age} anos`
      } else if (age > 20 && age <= 35) {
         imgResult.src = 'imgs/w20_35.jpg'
         textResult.innerHTML = `Gênero: ${genre} <br> ${age} anos`
      } else if (age > 35 && age <= 55) {
         imgResult.src = 'imgs/w35_55.jpg'
         textResult.innerHTML = `Gênero: ${genre} <br> ${age} anos`
      } else if (age > 55) {
         imgResult.src = 'imgs/w55+.jpg'
         textResult.innerHTML = `Gênero: ${genre} <br> ${age} anos`
      }
   }
}