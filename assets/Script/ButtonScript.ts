import { _decorator, Button, Component, director, game, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ButtonScript')
export class ButtonScript extends Component {
    @property(Button) 
    startButton:Button = null;

    // @property(Button)
    // levelButton: Button = null                       
/* Try to use Game state
    gamestate:GameSTates = GameSTates.Level1

    protected start(): void {
       this.gamestate = GameSTates.Level1
    }
*/
    protected onLoad(): void {
       this.startButton.node.on(Button.EventType.CLICK, ()=> {
        
        director.loadScene('L1')
       })
    //    this.levelButton.node.on(Button.EventType.CLICK, ()=> {
        
    //     director.loadScene('LevelsScene')
    //    })

   }
}


