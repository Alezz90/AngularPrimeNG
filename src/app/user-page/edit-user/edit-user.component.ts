import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { NgForm } from '@angular/forms';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
  providers: [DialogService],
})
export class EditUserComponent {
  title = 'Edit User';
  UserDialog: boolean = false;
  Designation: any[] = ['developer', 'Network'];
  Department: any[] = ['IT', 'HR'];

  public User: any = [];
  UserForm: boolean = false;

  ref: DynamicDialogRef | undefined;
  constructor(
    public userservice: UserService,
    public dialogService: DialogService,
    public messageService: MessageService
  ) {}
  show() {
    this.ref = this.dialogService.open(this.User, { header: 'Edit User' });
  }
  ngOnInit(): void {
    this.User = this.userservice.getUser();
  }

  onSubmit(form: NgForm) {}
  isDisplayed = true;
  showMe() {
    this.UserForm = true;
  }
  closeDialog() {
    this.UserForm = false;
  }
}
