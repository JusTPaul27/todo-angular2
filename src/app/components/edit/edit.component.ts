import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/model/todo';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public todo: Todo = {
    name: '', 
    creationDate: -1, 
    tags: [], 
    priority:0
  };

  public id : string | null =''

  constructor(
    private dataS: DataService, private router: Router,
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    if (this.data) {
      this.id = this.data.id;
    }
    if (this.id) {
      this.dataS.getTodoById(this.id).subscribe({
        next: t => 
        {if (t) {
          this.todo = t
        }
      },
        error: err => console.error(err)
      })
    }
  }

  convertTags(tagsString: string){
    return tagsString.toLowerCase().split(' ');
  }

  saveTodo(){
    if (this.todo.creationDate === -1) {
      this.todo.creationDate = new Date().getTime() /1000;
    }
    if (this.todo.priority < 0) {
      this.todo.priority = 0;
    }

    if (this.todo.priority > 3) {
      this.todo.priority = 3 
    }
    this.dataS.saveTodo(this.todo);
    this.dialogRef.close()
    // this.router.navigate(['/todo'])
  }
  

}
