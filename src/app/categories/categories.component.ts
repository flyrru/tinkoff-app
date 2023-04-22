import {AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {StateRepositoryService} from '../state-repository.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesComponent implements AfterViewInit {
  @ViewChild('form')
  form!: NgForm;

  model: {[id: number]: boolean} = {}

  constructor(public repo: StateRepositoryService) {
    const cats = repo.getCategories();
    cats.forEach(cat => {
      this.model[cat.id] = true;
    })
  }

  ngAfterViewInit() {
    this.form.form.valueChanges.subscribe(val => {
      const ids = Object.entries(val).filter(([id, val]) => val).map(([id, val]) => parseInt(id));
      this.repo.setFilterCategories(ids);
    });
  }
}
