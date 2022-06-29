import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatChipInput, MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';


import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { TodoComponent } from './components/todo/todo.component';
import { EpochFormatterPipe } from './pipes/epoch-formatter/epoch-formatter.pipe';
import { PriorityColorPipe } from './pipes/priority-color/priority-color.pipe';
import { TagsStringPipe } from './pipes/tags-string/tags-string.pipe';
import { PrioritySortPipe } from './pipes/priority-sort/priority-sort.pipe';
import { EditComponent } from './components/edit/edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TodoComponent,
    EpochFormatterPipe,
    PriorityColorPipe,
    TagsStringPipe,
    PrioritySortPipe,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatInputModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
