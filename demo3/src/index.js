document.getElementById('btn').addEventListener('click',function(){
    require.ensure([],()=>{
        let hello = require('./Hello').default;
        hello();
    },'Hello')

    //打开注释，体验新语法
   //  import('./Hello').then((Hello) => {
   //     let hello = Hello.default;
   //     hello();
   // }).catch(err => console.log('Failed to load moment', err))

})
