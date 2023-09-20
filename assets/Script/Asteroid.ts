import { _decorator, Component, Node, random, randomRange } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Asteroid')
export class Asteroid extends Component {
    @property(Number)
    fallingSpeed = 0
    start() {

    }

    update(deltaTime: number) {
        this.node.setPosition(this.node.getPosition().x,this.node.getPosition().y -= this.fallingSpeed * deltaTime )
    }
}


