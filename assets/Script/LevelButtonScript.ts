import { _decorator, Button, Component, director, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('LevelButtonScript')
export class LevelButtonScript extends Component {

    @property(Button) 
    L1Button:Button

    @property(Button) 
    L2Button:Button

    @property(Button) 
    L3Button:Button

    //gamestate : GameSTates = GameSTates.Level1
   
    
    start() {

       /* this.L1Button.node.on(Button.EventType.CLICK, ()=> {
        
            director.loadScene('L1')
           // this.gamestate = GameSTates.Level1
           })

           this.L2Button.node.on(Button.EventType.CLICK, ()=> {
        
            director.loadScene('L1')
           // this.gamestate = GameSTates.Level2
           })

           this.L3Button.node.on(Button.EventType.CLICK, ()=> {
        
            director.loadScene('L1')
           // this.gamestate = GameSTates.Level3
           })
    */
    }

    update(deltaTime: number) {
        
    }
}


