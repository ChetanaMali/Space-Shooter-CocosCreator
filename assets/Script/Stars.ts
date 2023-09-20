import { _decorator, Collider2D, Component, Contact2DType, instantiate, IPhysics2DContact, Node, PhysicsSystem2D, Prefab, randomRange, Vec2, Vec3 } from 'cc';
import { GameManager } from './GameManager';
const { ccclass, property } = _decorator;

@ccclass('Stars')
export class Stars extends Component {
    //Variable for Speed foe stars
    @property({type: Number})
    private speed ;

    @property(Prefab)
    coinPref:Prefab
    asteroidPos: Vec3
    asteroidDis: boolean = false
    score:number=0 ;

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
        if(selfCollider.name === 'Star<CircleCollider2D>' && otherCollider.name === 'Asteroid<BoxCollider2D>')
        {   
            //console.log('otherCollider.name' + otherCollider.name)
            setTimeout(function()
            {
                selfCollider.node.destroy()
                //otherCollider.node.destroy()
            }.bind(this),0);
            setTimeout(function()
            {
                otherCollider.node.destroy()
            }.bind(this),0);
           
            setTimeout(function()
            {
                GameManager.instance.Score();
            }.bind(this),0);
           

            /*
            //Instantiation code of coin 
            const coin = instantiate(this.coinPref)
            coin.setPosition(otherCollider.node.getPosition());
            otherCollider.node.parent.addChild(coin);
            */
            
        }
    }

    update(deltaTime: number) {
        this.node.setPosition(this.node.getPosition().x,this.node.getPosition().y += this.speed * deltaTime);
        
    }
   
}


