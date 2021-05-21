import print from './print'
if(module.hot){
    console.log(module)
    // accept itself
    module.hot.accept()
}
const ele=document.querySelector('#root')
console.log(ele,'a3322')