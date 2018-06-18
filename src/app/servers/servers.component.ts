import { Component, OnInit } from '@angular/core';
//za iliustracia vmesto templateUrl: './servers.component.html' moje da se polzva inline template
@Component({
  selector: 'app-servers',
  //template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowsNewServer = false;
  serverCreationStatus = "No server was created";
  serverName = 'testServerName';
  serverCreated = false;
  servers = ['testServer', 'testServer 2'];
  constructor() {
    setTimeout(() => {
      this.allowsNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
