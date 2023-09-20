import { _decorator, Collider2D, ColliderComponent, Component, Contact2DType, director, instantiate, IPhysics2DContact, Node, PhysicsSystem2D, Prefab, RigidBody2D } from 'cc';
import { GameManager } from './GameManager';
const { ccclass, property } = _decorator;

@ccclass('AsteroidDestroy')
export class AsteroidDestroy extends Component {
   
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
    onBeginContact(selfCollider:Collider2D, otherCollider:Collider2D, contact: IPhysics2DContact|null)
    {
        if(otherCollider.name == "Star<CircleCollider2D>" && selfCollider.name == "Asteroid<BoxCollider2D>")
        {
            
            setTimeout(function () {
                otherCollider.node.destroy();
                selfCollider.node.destroy();
            }.bind(this),0);
        }
    }

    

}


