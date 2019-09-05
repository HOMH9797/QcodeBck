import app from './app';

//Setting
app.set('port', process.env.PORT || 4500);

async function main(){
    
    await 
    app.listen(app.get('port'), ()=>{
        console.log(`puerto: ${app.get('port')} `)
    });
}

main();