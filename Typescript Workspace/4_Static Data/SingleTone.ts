
class Boss{
    bossName="Meena";
    static boss:Boss;
    static getInstance(){
        if(Boss.boss==null)
                Boss.boss=new Boss();
        return Boss.boss;
    }

}

let boss1=Boss.getInstance();
console.log(boss1);
let boss2=Boss.getInstance();
console.log(boss2);
console.log(boss1==boss2);

