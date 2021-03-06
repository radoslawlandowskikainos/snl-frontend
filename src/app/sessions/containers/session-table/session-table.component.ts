import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-session-table',
  templateUrl: './session-table.component.html',
  styleUrls: ['./session-table.component.css']
})
export class SessionTableComponent implements OnInit {

  displayedColumns = ['position', 'name', 'time', 'jurisdiction'];
  dataSource;

  constructor(private store: Store<AppState>) {

    this.store.pipe(select(state => state.sessionsReducer.sessions)).subscribe(data => {
      if (data) {
        data.map(element => { element.date = new Date(element.date); });
        this.dataSource = new MatTableDataSource(data);
      }
    });
  }

  ngOnInit() {
  }

}
