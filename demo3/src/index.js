document.getElementById('btn').addEventListener('click',function(){
    require.ensure([],()=>{
        let hello = require('./Hello').default;
        hello();
    },'Hello')
})
