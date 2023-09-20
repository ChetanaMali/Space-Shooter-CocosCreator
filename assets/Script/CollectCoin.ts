import { _decorator, Collider2D, Component, Contact2DType, IPhysics2DContact, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CollectCoin')
export class CullectCoin extends Component {
    
    protected start(): void {
        let collider = this.getComponent(Collider2D);
        //collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this)
    }
    
    onBeginContact(selfCollider:Collider2D, otherCollider:Collider2D, contact:IPhysics2DContact | null)
    {
        //console.log("coin selfcollider" +selfCollider.name)
        //console.log("coin other collider"+otherCollider.name)
        /**if(selfCollider.name == "Rocket<BoxCollider2D>" && otherCollider.name =="Coin<CircleCollider2D>")
        {
            setTimeout(function () {
                otherCollider.node.destroy()
                //otherCollider.node.removeFromParent();
            }.bind(this),1);
        }*/
    }
}


