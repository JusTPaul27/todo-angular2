import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/model/todo';
import { DataService } from 'src/app/services/data.service';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(public dataS: DataService, private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  getTodos(){
    const isActive = this.route.snapshot.data['isActive'];
    if (isActive) {
      return this.dataS.getActiveTodos()
    } else {
      return this.dataS.getDoneTodos()
    }
  }

  openDialog(todo?: Todo){
    if (todo) {
      this.dialog.open(EditComponent, {
        data: {id: todo.id},
        maxWidth : '500px',
        width: '90%'
       });
    } else {
      this.dialog.open(EditComponent , {
        maxWidth : '500px',
        width: '90%'
      });
    }
    
  }

}
