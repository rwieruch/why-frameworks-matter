import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-item',
    template: `
    <div>{{ item.title }}</div>
    `
})
export class ItemComponent{
    @Input() item: any;
}
