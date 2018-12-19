import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyANivYei3J8sLtpl2QvDDcQ4GEwUwRINYM',
      authDomain: 'recipe-ef49f.firebaseapp.com'
    });
  }
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
