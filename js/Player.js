class Player{
    constructor(){

    }
    
    getCaount(){

        var playerCountRef = database.ref('playeCount');
             playerCountRef.on("value",(data)=>{
              playerCount=data.val()
         })

    }

    updateCount(count){
        database.ref('/').update({
             playerCount:count 
        })
    }
}
