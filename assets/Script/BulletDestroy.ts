import { _decorator, Collider2D, Component, Contact2DType, IPhysics2DContact, Node, PhysicsSystem2D } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BulletDestroy')
export class BulletDestroy extends Component {
    start() {
        let collider = this.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
        // Registering global contact callback functions
        if (PhysicsSystem2D.instance) {
            PhysicsSystem2D.instance.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }

    update(deltaTime: number) {
        
    }
    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) 
    {
        if(selfCollider.name === 'triggerforBulletdistroy<BoxCollider2D>' && otherCollider.name === 'Star<CircleCollider2D>')
        {
            setTimeout(function() {
                otherCollider.node.destroy();
            }.bind(this), 0);
            
        }
    }

}


