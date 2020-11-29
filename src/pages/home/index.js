import '@babel/polyfill'
import './index.scss'
import { throttle } from '@/tools/utils'
import $ from 'jquery'
console.log(throttle)

console.log('首页js')
$('#test').html('<h1>你好</h1>')
