import '@babel/polyfill'
import './article.scss'
import $ from 'jquery'
import { getUrlParam } from '@/tools/utils'

console.log($)

let articleId = getUrlParam('id')

$('.content').html(articleId ? `文章内容。。。。。文章ID为${articleId}` : '未找到内容')
