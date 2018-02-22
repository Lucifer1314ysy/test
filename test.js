//console.log('hello world')
//console.log('fisrt ,javascript')
//console.log(parseInt(10000000000000000000000008))
//console.log(parseInt('10000000000000000000000008'))
//本来想用<![CDATA[]],最后发现只是忽略其中的字符串
//通过replace替代<和>
//通过eval()显示执行结果
function print(str){
     document.write(str.replace(/</g,'&lt;').replace(/>/g,'&gt;')+'  : '+eval(str)+'<br/>')
}

function printline(str){
    document.write('<hr/>')
}

print('typeof null')
print('typeof undefined')
print('typeof 1')
print('typeof \'\'')
print('typeof true')
print('typeof {}')
print('typeof []')
print('typeof function() {} ')
printline()



var f1;
document.write('已声明变量未赋值f1 :'+ typeof f1  +'<br/>')
document.write('未声明变量f2 :'+ typeof f2  +'<br/>')
f1=function(){}
document.write('已声明变量未赋值f1 :'+ typeof f1  +'<br/>')
print('Number.EPSILON')
print('Number.MAX_VALUE')
print('Number.MIN_VALUE')
print('Number.MAX_SAFE_INTEGER')
print('Number.MIN_SAFE_INTEGER')
printline()
print('0.1+0.2')
printline()

print('(0.1+0.2-0.3 < Number.EPSILON)')
print('(0.1+0.2-0.3 > Number.EPSILON)')
printline()
print('Number.isFinite(NaN) ')
print('Number.isFinite(Infinity)')
print('Number.isNaN(NaN)')
print('Number.isNaN(Infinity)')
printline()
print('Boolean(\'\')')
print('Boolean(null)')
print('Boolean(undefined)')
print('Boolean(0)')
print('Boolean(NaN)')
print('Boolean(Infinity)')
print('Boolean({})')


printline()
print('NaN==NaN')
print('typeof (new Number())')
print('typeof (new String())')
print('typeof (new Boolean())')

print('1<2 ,4<3')



