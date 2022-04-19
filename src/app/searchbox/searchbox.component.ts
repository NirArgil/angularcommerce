import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  Input,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
@Injectable({
  providedIn: 'root',
})
export class SearchboxComponent implements OnInit {
@Input() myControl: FormControl | undefined
@Input() options: any[] | undefined | null;

  // filteredOptions: Observable<Product[]> | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
