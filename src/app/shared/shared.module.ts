import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowErrorComponent } from './components/show-error/show-error.component';
import { RichTextEditorModule } from './components/layout/rich-text-editor/rich-text-editor.module';
import { RichTextEditorComponent } from './components/layout/rich-text-editor/rich-text-editor.component';



@NgModule({
  declarations: [ShowErrorComponent],
  imports: [
    CommonModule,
    RichTextEditorModule
  ],
  exports : [
    RichTextEditorModule,
    ShowErrorComponent,
  ]
})
export class SharedModule { }
