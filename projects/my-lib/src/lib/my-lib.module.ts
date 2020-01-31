import { NgModule, ModuleWithProviders } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { CommonModule } from '@angular/common';
import { MyLibRoutingModule } from './my-lib-router.module';

@NgModule({
  declarations: [MyLibComponent],
  imports: [
    CommonModule,
    MyLibRoutingModule
  ],
  exports: [MyLibComponent]
})
export class MyLibModule { 
  static forRoot(config: any): ModuleWithProviders {
    // User config get logged here
    console.log(config);
    return {
      ngModule: MyLibModule,
    };
  }
}
