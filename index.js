let i = 0
let password
do {
   i++
   password = prompt('password')
   if (i === 3) {
      alert('error')
      break
   }
} while (password !== '7777')