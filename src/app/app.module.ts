import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";

import { MenubarModule } from 'primeng/menubar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SidebarModule } from "primeng/sidebar";
import { ButtonModule } from "primeng/button";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SplitterModule } from 'primeng/splitter';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from "primeng/toast";
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from "primeng/autocomplete";
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { CheckboxModule } from 'primeng/checkbox';
import { TreeSelectModule } from 'primeng/treeselect';
import { MenuItem, MessageService, TreeNode,ConfirmationService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserPageComponent } from './user-page/user-page.component';
import { BoardPanelComponent } from './user-page/board-panel/board-panel.component';
import { EditUserComponent } from './user-page/edit-user/edit-user.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogService } from 'primeng/dynamicdialog';
import { FieldsetModule } from 'primeng/fieldset';
import { AccordionModule } from 'primeng/accordion';
@NgModule({
  declarations: [
    AppComponent,
    UserPageComponent,
    BoardPanelComponent,
    EditUserComponent,
    LeftnavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,DynamicDialogModule,FieldsetModule,AccordionModule,
    BrowserModule,TreeSelectModule, TableModule , RouterModule,
    AppRoutingModule,CascadeSelectModule,CheckboxModule,ReactiveFormsModule,
    MenubarModule,FormsModule,DialogModule, AutoCompleteModule,
    SplitButtonModule,BrowserAnimationsModule, ConfirmPopupModule,
    SidebarModule,ButtonModule,PanelMenuModule, SplitterModule,ToastModule,InputTextModule
  ],
  providers: [MessageService,DialogService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
