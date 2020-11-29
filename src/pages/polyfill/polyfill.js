import '@babel/polyfill'

// 引入polyfill之后就可以随意使用ES6的特征了
console.log([3].includes(3))
async function test () {
  const res = await new Promise((resolve, reject) => { resolve('测试Promise') })
  console.log(res)
}
test()
