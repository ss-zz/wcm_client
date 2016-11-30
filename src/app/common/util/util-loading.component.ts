import { Component, Input } from '@angular/core';

@Component({
  selector: 'util-loading',
  template: `<span *ngIf="isShow">加载中...</span>`,
  styles: []
})
export class UtilLoadingComponent {

  // 是否显示加载状态
  @Input() isShow: boolean;

}