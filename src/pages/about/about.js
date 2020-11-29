import '@babel/polyfill'
import './about.scss'
import imgUrl from '../../images/cat.jpeg'

console.log('11111')

const img = document.createElement('img')
img.style.width = '200px'
img.src = imgUrl
document.body.appendChild(img)
