import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LogoDirective} from "./logo/logo.directive";

@NgModule({
  declarations: [
    LogoDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoDirective,
    CommonModule
  ]
})
export class SharedModule {}
