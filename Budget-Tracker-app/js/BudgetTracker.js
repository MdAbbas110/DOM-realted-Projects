export default class BudgetTracker {
  constructor(querySelectorString) {
    this.root = document.querySelector(querySelectorString);
    this.root.innerHTML = BudgetTracker.html();

    this.root.querySelector('.new-entry').addEventListener('click', () => {
      this.onNewEntryBtnClick();
    });

    //load Initial data from local storage
    this.load();
  }

  static html() {}
  static entryHtml() {}

  load() {}

  updateSummary() {}

  save() {}

  addEntry(entry = {}) {}

  getEntryRows() {}

  onNewEntryBtnClick() {}

  onDeleteEntryBtnClick() {}
}
