import { _decorator, Component, EventMouse, EventTouch, input, Input, instantiate, Node, NodeEventType, Prefab, Sprite, Vec2, Vec3,director, PhysicsSystem2D, Contact2DType, Collider2D, IPhysics2DContact, Game } from 'cc';
import { SoundScript } from './SoundScript';
const { ccclass, property } = _decorator;

@ccclass('InputTouch')
export class InputTouch extends Component {

    @property(Node)
        player: Node = null;
        @property(Prefab)
        BulletPre: Prefab = null
    
    bulletSpawn: number = 0
    timeIntervalBulletSpawn: number = 0
    
    private curTouchLoc: Vec2

    @property(Node)
    gO_UI:Node 

    onLoad() {
     
        input.on(Input.EventType.TOUCH_MOVE, this.onTouchStart, this)
        input.off(Input.EventType.TOUCH_END, this.onTouchEnd, this)
    }



    onTouchStart(event: EventTouch) {
        this.curTouchLoc = event.getLocation()
        
        //Code for block this ship from outside screen
        if ((((this.curTouchLoc.x - 400) * 2 > -450) && ((this.curTouchLoc.x - 400) * 2 < 450)) &&
            (((this.curTouchLoc.y - 500) * 2 > -940) && ((this.curTouchLoc.y - 500) * 2 < 940))) {
            this.player.position = new Vec3((this.curTouchLoc.x - 400) * 2, (this.curTouchLoc.y - 500) * 2, 0)
        }
    }



    onTouchEnd(event: EventTouch) {
        console.log("touch end")
    }


    protected start(): void {
        let collider = this.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
        // Registering global contact callback functions
        if (PhysicsSystem2D.instance) {
            PhysicsSystem2D.instance.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }

    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) 
    {
        if(selfCollider.name === 'Rocket<BoxCollider2D>' && otherCollider.name === 'Asteroid<BoxCollider2D>')
        {
            SoundScript.instance.gameOverSound.play()
            this.gO_UI.active = true; //Game Over UI will Active
            director.pause();
            //Game.EVENT_PAUSE
            //this.node.active = false;
        
            setTimeout(function()
            {
               selfCollider.node.destroy()
                //otherCollider.node.destroy()
            }.bind(this),0);
        }
    }
  
}


