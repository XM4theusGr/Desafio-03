class Hero{
    constructor(HeroName, HeroAge, HeroClass){
        this.HeroName = HeroName
        this.HeroAge = HeroAge
        this.HeroClass = HeroClass
        this.HeroAttack = ""
    }
    show(){
//DEFININDO AS ARMAS QUE CADA CLASSE USA        
    if(this.HeroClass === "Guerreiro"){
        this.HeroAttack = "Espada"
    }else if(this.HeroClass === "Mago"){
        this.HeroAttack = "Magia"
    }else if(this.HeroClass === "Monge"){
        this.HeroAttack = "Artes Marciais"
    }else if(this.HeroClass === "Ninja"){
        this.HeroAttack = "Shuriken"
    }
//DEFININDO A SAIDA 
    console.log(`O ${this.HeroClass} atacou usando ${this.HeroAttack}`)
}
    
}
//ESCOLHENDO AS VARIAVEIS
let Hero1 = new Hero("Matheus", "21", "Guerreiro")
let Hero2 = new Hero("Vinicius", "20", "Mago")
//IMPRIMINDO O RESULTADO DO CODIGO
Hero1.show()
Hero2.show()