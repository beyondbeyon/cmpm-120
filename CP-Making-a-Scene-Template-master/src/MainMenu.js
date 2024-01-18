class MainMenu extends Phaser.Scene{
    constructor(){
        super('mainmenuScene')
        console.log('MainMenu: constructor')
    }
    
    init(){
        console.log('MainMenu: init')
        this.HP = 100
        this.EXP = 0
        console.log(`HP:${this.HP} EXP:${this.EXP}`)
    }

    create(){
        console.log('MainMenu: create')

        let  playerstats = {
            HP: this.HP,
            EXP: this.EXP
        }

        this.scene.start('playScene', playerstats)
    }
}