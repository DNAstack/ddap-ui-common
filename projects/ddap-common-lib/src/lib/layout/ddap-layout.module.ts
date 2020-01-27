import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MainComponent } from './main/main.component';
import { HeaderComponent } from "./header/header.component";
import { HeaderBtnComponent } from "./header/header-btn/header-btn.component";
import { HeaderAddBtnComponent } from "./header/header-add-btn/header-add-btn.component";
import { SandboxBannerComponent } from "./sandbox-banner/sandbox-banner.component";
import { SearchableHeaderComponent } from "./header/searchable-header.component";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RealmInterceptor } from './realm/realm-interceptor.service';
import { LandingInfoCardComponent } from './landing-info-card/landing-info-card.component';
import { MatCardModule, MatPaginatorModule } from '@angular/material';
import { PaginatorComponent } from './paginator/paginator.component';
import { RealmInputComponent } from './realm/realm-input/realm-input.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import { RealmChangeConfirmationDialogComponent } from './realm/realm-change-confirmation-dialog/realm-change-confirmation-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderBtnComponent,
    HeaderAddBtnComponent,
    LandingInfoCardComponent,
    MainComponent,
    PaginatorComponent,
    SandboxBannerComponent,
    SearchableHeaderComponent,
    RealmInputComponent,
    RealmChangeConfirmationDialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports: [
    HeaderComponent,
    HeaderBtnComponent,
    HeaderAddBtnComponent,
    LandingInfoCardComponent,
    MainComponent,
    PaginatorComponent,
    SandboxBannerComponent,
    SearchableHeaderComponent,
    RealmInputComponent,
    RealmChangeConfirmationDialogComponent
  ],
  entryComponents: [
    RealmChangeConfirmationDialogComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RealmInterceptor, multi: true },
  ],
})
export class DdapLayoutModule { }
