import { Component, inject } from '@angular/core';
import { RestService } from '../../service/RestService';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-user-component',
  imports: [CommonModule,FormsModule],
  templateUrl: './new-user-component.html',
  styleUrl: './new-user-component.css',
})


export class NewUserComponent {

  private restService = inject(RestService);

  firstname: string = '';
  surname: string = '';

  saving: boolean = false;
  message: string = '';

  onSubmit() {
    this.saving = true; 
    this.restService.addUser({ firstname: this.firstname, surname: this.surname }).subscribe({
      next: (response) => {
        this.message = 'User added successfully with id :' + response.id;
        this.saving = false;
      },
      error: (error) => {
        this.message = 'Error adding user: ' + error.message;
        this.saving = false;
      }
    });
  }

}