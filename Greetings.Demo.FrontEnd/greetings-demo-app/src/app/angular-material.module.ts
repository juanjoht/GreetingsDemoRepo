import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
   imports: [
      CommonModule,
      MatButtonModule,
      MatInputModule,
      MatCardModule,
      MatFormFieldModule,
      MatRadioModule
   ],
   exports: [
      MatButtonModule,
      MatInputModule,
      MatCardModule,
      MatFormFieldModule,
      MatRadioModule
      ]
})

export class AngularMaterialModule { }
