import { _decorator, Button, Component, director, game, Node } from 'cc';
import { SoundScript } from './SoundScript';
const { ccclass, property } = _decorator;

@ccclass('L1ButtonScript')
export class L1ButtonScript extends Component {
    
    @property(Button) 
    MainMenu:Button = null;
    protected onLoad(): void {
        this.MainMenu.node.on(Button.EventType.CLICK, ()=> {
            game.end();
            SoundScript.instance.backgroundSound.stop();
            //director.loadScene('MainMenu')
        })
 
        
    }
}


