import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserPageComponent } from '../user-page/user-page.component';
import { BoardPanelComponent } from '../user-page/board-panel/board-panel.component';
import { EditUserComponent } from '../user-page/edit-user/edit-user.component';
@Component({
  selector: 'app-leftnav',
  templateUrl: './leftnav.component.html',
  styleUrls: ['./leftnav.component.css']
})
export class LeftnavComponent {

  constructor(public router: Router){}

  
}
