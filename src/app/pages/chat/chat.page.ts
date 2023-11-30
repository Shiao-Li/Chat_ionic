import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { ChatService, Message } from 'src/app/services/chat.service';
import {Observable} from 'rxjs'
import {Camera} from '@ionic-native/camera/ngx'
import * as CryptoJS from 'crypto-js';
import { AngularFireStorage } from '@angular/fire/storage';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;

  messages: Observable<Message[]>;
  msgEncript:'';
  newMsg = '';
  imgURL;
  passwordAES = 'EstaEsUnaClave';

  selectedFile: any;

  constructor(private chatService: ChatService, private router: Router, private camera: Camera, private storage: AngularFireStorage) { }

  ngOnInit() {
    this.messages =  this.chatService.getChatMessages();
  }

  // sendMessage(){
  //   this.chatService.addChatMessage(this.newMsg).then(()=>{
  //     this.newMsg = '';
  //     this.content.scrollToBottom();
  //   });
  // }

  async sendMessage(){
    this.msgEncript = CryptoJS.AES.encrypt(this.newMsg.trim(),this.passwordAES.trim()).toString();
    this.chatService.addChatMessage(this.msgEncript).then(()=>{
      this.newMsg = '';
      this.msgEncript='';
      this.content.scrollToBottom();
    })
  }

  signOut(){
    this.chatService.signOut().then(()=>{
      this.router.navigateByUrl('/', {replaceUrl: true});
    })
  }


  //////////////////////////////////////////////////




  
  getCamera(){
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.FILE_URI
    }).then((res)=>{
      this.imgURL = res;
    }).catch(e=>{
      console.log('Error Camara ->', e)
    })
  }

  getGallery(){

    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI
    }).then((res)=>{
      this.imgURL = 'data:image/jpeg;'+res;
    }).catch(e=>{
      console.log('Error Camara ->', e)
    })

  }

  choseFile(event){
    this.selectedFile = event.target.files
  }







  // uploadFile(id, file): Promise<any> {
  //   if(file && file.length){
  //     try{
  //       const msg = await this.storage.ref('images').child(id).put(file[0])
  //       return this.storage.ref(`images/${id}`).getDownloadURL().toPromise();
  //     }catch(e){
  //       console.log(e);

  //     }

  //   }
  // }

  // encrypt(){
  //   this.encryptedData = CryptoJS.AES.encrypt(JSON.stringify(this.dataToEncrypt),this.secretKey).tostring
  // }

  // chooseFile(event){
  //   this.selectedFile = event.target.file
  // }

}
