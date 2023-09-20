import { _decorator, AudioClip, AudioSource, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SoundScript')
export class SoundScript extends Component {

    public static instance : SoundScript
   
     @property(AudioSource)
     shootSound : AudioSource = null
    @property(AudioSource)
    asteroidDestroySound : AudioSource = null
     @property (AudioSource)
     gameOverSound : AudioSource = null

        @property(AudioSource)
        backgroundSound : AudioSource = null


    protected onLoad(): void {
        if(SoundScript.instance == null)
        {
            SoundScript.instance = this;
        }
        else
        {
            SoundScript.instance.destroy
        }
    }
}


