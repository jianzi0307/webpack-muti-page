import '@babel/polyfill'
import './about.css'
import imgUrl from '../../images/demo.jpg'

console.log('11111')

const img = document.createElement('img')
img.style.width = '200px'
img.src = imgUrl
document.body.appendChild(img)
