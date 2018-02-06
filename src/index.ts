import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HttpModule, XSRFStrategy, CookieXSRFStrategy } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { SampleComponent } from './sample.component';
import { SampleDirective } from './sample.directive';
import { SamplePipe } from './sample.pipe';
import { SampleService } from './sample.service';

export * from './sample.component';
export * from './sample.directive';
export * from './sample.pipe';
export * from './sample.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
    // HttpModule
  ],
  declarations: [
    SampleComponent,
    SampleDirective,
    SamplePipe
  ],
  exports: [
    SampleComponent,
    SampleDirective,
    SamplePipe,
    HttpClientModule
        // HttpModule
  ]
})
export class SampleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SampleModule,
      providers: [SampleService]
    };
  }
}
