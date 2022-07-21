
class House{
    constructor(type, rooms, color){
        this.type = type;
        this.rooms = rooms;
        this.color = color; 
   
    }

    info(){
        console.log(`This is a ${this.color} ${this.type} with ${this.rooms} rooms`)
    }

    open(){
        console.log('The House is Open');
    }
   repaint(){
        console.log('Re-paint the house');
    }
}

const newhouse = new House("Duplex", 7, "White");

newhouse.info();
newhouse.open();
newhouse.repaint();
console.log(newhouse);