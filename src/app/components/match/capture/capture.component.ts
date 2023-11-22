import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.css']
})
export class CaptureComponent {

  nameForm: FormGroup; 

  constructor(private fb: FormBuilder) {
    this.nameForm = this.fb.group(
      {
      nameControl: ['', [Validators.required, Validators.maxLength(200)]],
      matchDateControl: [null, Validators.required] 
      });
    }

    onSubmit() {
      // Mark all form controls as touched to trigger validation
      this.markFormGroupTouched(this.nameForm);
  
      if (this.nameForm.valid) {
        const enteredName = this.nameForm.get('nameControl')?.value;
        const enteredMatchDate = this.nameForm.get('matchDateControl')?.value;
        console.log('Submitted name:', enteredName);
        console.log('Match Date:', enteredMatchDate);
        
        // Proceed with form submission logic here
      }
    }
  
    // Function to mark all form controls as touched
    private markFormGroupTouched(formGroup: FormGroup) {
      Object.values(formGroup.controls).forEach(control => {
        control.markAsTouched();
  
        if (control instanceof FormGroup) {
          this.markFormGroupTouched(control);
        }
      });
    }
}
