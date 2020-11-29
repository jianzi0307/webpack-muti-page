import '@babel/polyfill'
import './test.css'
import imgUrl from '@/images/demo.jpg'

console.log('demo-test')

// 图片测试2
const img = document.createElement('img')
img.style.width = '200px'
img.src = imgUrl
document.body.appendChild(img)
