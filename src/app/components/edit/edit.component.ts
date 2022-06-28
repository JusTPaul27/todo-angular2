import { Component, OnInit } from '@angular/core';
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

  constructor(private route: ActivatedRoute, private dataS: DataService, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.dataS.getTodoById(id).subscribe({
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
      this.todo.creationDate = new Date().getTime();
    }
    if (this.todo.priority < 0) {
      this.todo.priority = 0;
    }

    if (this.todo.priority > 3) {
      this.todo.priority = 3 
    }
    this.dataS.saveTodo(this.todo);
    this.router.navigate(['/todo'])
  }
  

}
