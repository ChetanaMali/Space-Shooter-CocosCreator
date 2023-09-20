import { _decorator, Button, Component, director, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MMButtonScript')
export class MMButtonScript extends Component {

    @property(Button) 
    startButton:Button = null;

    protected onLoad(): void {
        this.startButton.node.on(Button.EventType.CLICK, ()=> {
        
            director.loadScene('L1')
           })
    }
    start() {

    }

    update(deltaTime: number) {
        
    }
}


