import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
import { AngularFireAuthModule} from '@angular/fire/compat/auth';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

var firebaseConfig = {apiKey: "AIzaSyA5TIMeucbz15LWMtEzLh7q22eAa2ncDIA",
authDomain: "coldstore-1866b.firebaseapp.com",
projectId: "coldstore-1866b",
storageBucket: "coldstore-1866b.appspot.com",
messagingSenderId: "853012999520",
appId: "1:853012999520:web:25a4e7641f1a21f87b8205",
measurementId: "G-9MMNKHZNLR"
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
            AngularFireModule.initializeApp(firebaseConfig),
            AngularFirestoreModule,
            AngularFireAuthModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})

export class AppModule {}
