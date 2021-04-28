import { Component } from '@angular/core';
/**
 * Angular component
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'My Stocks';
  frameworkComponents: any;
  rowDataClicked: any = '';
  rowData: any = [];
  tagData: any = [];
  filter: string = 'watching';
  filtervalue: string = 'All';
  copyofRowData: any = [];

  /**
   * Column definition
   */
  columnDefs = [
    { headerName: 'Symbol', field: 'symbol' },
    { headerName: 'Last Price', field: 'last_price' },
    { headerName: 'Tag', field: 'tag' },
    { headerName: 'Actions', filed: 'actions' }
  ];

  /**
   * A callback method that is invoked immediately after the default change detector has 
   * checked the directive's data-bound properties for the first time, and before any of 
   * the view or content children have been checked.
   * Fetches the data from the mock API. The json result is then used to create row data.
   * Individual tag data from each row is also populated.
   */
  ngOnInit() {
    fetch('http://localhost:3000/getDetails')
      .then(result => result.json())
      .then(rowData => {
        this.rowData = rowData;
        this.copyofRowData = rowData;
        let tagData = this.rowData.map((ele: any) => {
          return ele.tag;
        });
        let refineTagData: any = [];
        tagData.forEach((element: any) => {
          console.log(refineTagData.indexOf(element));
          if (refineTagData.indexOf(element) == -1) {
            refineTagData.push(element);
          }
        });
        this.tagData = refineTagData;
      });
  }

  /**
   * Stock details shown on button click
   * @param item 
   */
  onBtnClick(item: any) {
    this.rowDataClicked = item;
  }

  /**
   * Delete Row action
   * @param deleteRow
   */
  deleteRow(deleteRow: any) {
    const index = this.rowData.indexOf(deleteRow);
    this.rowData.splice(index, 1);
    this.rowDataClicked = null;
  }

  /**
   * Filter Row action on change of filter
   * @param event
   */
  onChangeFilter(event: any) {
    this.filtervalue = event.target.value;
    this.rowData = this.copyofRowData;
    if (this.filtervalue == " ") {
      return this.rowData;
    }
    else if (this.filtervalue !== 'All') {
      this.rowData = this.rowData.filter((ele: any) => {
        return ele.tag == this.filtervalue;
      })
    }
    this.rowDataClicked = null;
  }
}
