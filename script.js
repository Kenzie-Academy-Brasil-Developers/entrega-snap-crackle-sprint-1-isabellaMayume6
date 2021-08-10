function snapCrackle (MaxValue) {
    let retorno=' '
    for (a=1; a<=MaxValue; a++){
        if (a%2===1 && a%5===0){
          retorno+= 'SnapCrackle' + ', '
        }
        else if (a%5===0){
            retorno+='Crackle'+ ', ' 
        }
        else if (a%2===1){
            retorno+='Snap' + ', ' 
        }
        else if (a%2===0 ){
            retorno+=a + ', '
        }
    }
    return retorno
}document.write(snapCrackle(20))

function primo(n){
    let contador =0
    for (let i= n; i>0; i--){
        if (n%i===0){
            contador = contador +1
        } 
    }if (contador===2){
            return 'Sim'
        }
}

function snapCracklePrime (MaxValue) {
    let retorno=[]
    for (a=1; a<=MaxValue; a++){
        let nome =''
        if (a%2!==0){
            nome = 'Snap'+ ', '
        }
        
        if (a%5===0){
          nome += 'Crackle'+ ', '
        }
        
        if (primo(a)=== 'Sim'){
            nome += 'Prime'
        }
        if (a%2===0 && nome!=='Prime' && a%10!==0){
           nome=a
        }
        retorno.push(nome)   
    }
    return retorno
}
document.write(snapCracklePrime(15)) 