import { _decorator, AudioSource, AudioSourceComponent, Component, director, Game, game, instantiate, Node, Prefab, randomRange, RichText } from 'cc';
import { Asteroid } from './Asteroid';

import { SoundScript } from './SoundScript';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {

    //BULLATE INSTANTIATE VARIABLE
    @property(Node)
    player: Node = null;
    @property(Prefab)
    BulletPre: Prefab = null
    bulletSpawn: number = 0

    //ASTEROID INSTANTIATE VARIABLE
    @property(Prefab)
    asteroidPref : Prefab = null
    @property(Node)
    Asteroids : Node = null
    asteroidSpawn: number = 0



    //COIN VARIABLE TO INSTANTIATE AFTER DESTROYING ASTEROID
    // @property(Prefab)
    // public coinPref:Prefab = null

    @property(Node)
    public coinNode:Node
   
    @property(RichText)
    scoreText:RichText
    score:number = 0;

    public static instance: GameManager
    protected onLoad(): void {
        if(GameManager.instance == null)
        {
            GameManager.instance = this;
        }
        else
        {
            GameManager.instance.destroy
        }

        
        
    }
    //  gamestate: GameSTates;
    //  protected start(): void {
    //      this.gamestate = GameSTates.Level1
    //  }

//INSTANTIATE BULLATE AFTER OME TIME PERIOD
    InstantiateInTimeIntervalForBullets(deltaTime: number,   TimeInterval: number) {

        this.bulletSpawn += deltaTime
        if (TimeInterval < this.bulletSpawn) {
            // Instantiate Bullet code
            const bullet = instantiate(this.BulletPre)
            bullet.setPosition(this.player.getPosition().x* 1, this.player.getPosition().y += 100)
            this.player.parent.addChild(bullet)
            
            // Shoot sound play 
            SoundScript.instance.shootSound.play()

            //SET TIMER FOR DESTROY BULLET AFTER 5 SEC
            setTimeout(function () {
                bullet.destroy();
                bullet.removeFromParent();
              }.bind(this), 5000);

            //Bullatespawn time 0 again
            this.bulletSpawn = 0;
        }
        
    }
//INSTANTIATE ASTEROID AFTER SOME TIME PERIOD
    InstantiateInTimeIntervalForAsteroid(deltaTime: number,   TimeInterval: number) {
        this.asteroidSpawn += deltaTime
        if(TimeInterval <this.asteroidSpawn)
        {
            //Instantiate Asteroid Code
            const asteroid = instantiate(this.asteroidPref)
            asteroid.setPosition(randomRange(-400,400),900)
            this.Asteroids.parent.addChild(asteroid) 

            //SET TIMER FOR DESTROY ASTEROID AFTER 6 SEC
            setTimeout(function () {
                asteroid.destroy();
                asteroid.removeFromParent();
              }.bind(this), 6000);

              this.asteroidSpawn = 0
        }
    }
    //gamestate:GameSTates = GameSTates.Level1

    public  Score()
    {
        this.score += 10;
        this.scoreText.string = 'Score: ' + this.score.toString() + '/ 100'
        /* trying to use Game state
        if(this.score <= 100)
        {  
             this.gamestate = GameSTates.Level1
        }
        if(this.score > 100 && this.score < 200)
        {
            this.gamestate = GameSTates.Level2
        }
        if(this.score > 200)
        {
            this.gamestate = GameSTates.Level3
        }

        if(this.score > 300)
        {
            console.log("you win")
            game.pause();
        }*/
        SoundScript.instance.asteroidDestroySound.play()
        
    }

    update(deltaTime: number) {

 
        this.InstantiateInTimeIntervalForBullets(deltaTime, 1)

        this.InstantiateInTimeIntervalForAsteroid(deltaTime, 3)
        this.InstantiateInTimeIntervalForAsteroid(deltaTime, 3)

 /*       if(GameSTates.Level1 )
        {
            this.InstantiateInTimeIntervalForAsteroid(deltaTime, 3)
        }
        if(GameSTates.Level2)
        {
            this.InstantiateInTimeIntervalForAsteroid(deltaTime, 3)
            this.InstantiateInTimeIntervalForAsteroid(deltaTime, 3)
        }
        if(GameSTates.Level3)
        {
            this.InstantiateInTimeIntervalForAsteroid(deltaTime, 3)
            this.InstantiateInTimeIntervalForAsteroid(deltaTime, 3)
            this.InstantiateInTimeIntervalForAsteroid(deltaTime, 3)
        }
        
        */
        //this.InstantiateInTimeIntervalForAsteroid(deltaTime, 5)
    }
}


