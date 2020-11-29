import '@babel/polyfill'
import './category.scss'
import $ from 'jquery'
import { getUrlParam } from '@/tools/utils'
console.log($)

let type = getUrlParam('type') || 1
let page = getUrlParam('page') || 1

$('.content').html(`栏目${type} ：第${page}页`)
