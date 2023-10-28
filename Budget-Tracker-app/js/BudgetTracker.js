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

  static html() {
    return `
    <table class="budget-tracker">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Type</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>

        <tbody class="entries">
          
        </tbody>

        <tbody>
          <tr>
            <td class="controls" colspan="5">
              <button type="button" class="new-entry">New Entry</button>
            </td>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <td class="summary" colspan="5">
              <strong>Total</strong>
              <span class="total">$0.00</span>
            </td>
          </tr>
        </tfoot>
      </table>
    `;
  }

  static entryHtml() {
    return `
    <tr>
      <td>
        <input type="date" class="input input-date" />
      </td>
      <td>
        <input
          type="text"
          class="input input-Description"
          placeholder="Add a Description"
        />
      </td>
      <td>
        <select class="input input-type">
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
      </td>
      <td>
        <input type="number" class="input input-amount" />
      </td>
      <td>
        <button class="delete-entry" type="button">&#10005;</button>
      </td>
    </tr>
    `;
  }

  load() {
    const entries = JSON.parse(
      localStorage.getItem('budget-tracker-entries-dev') || '[]'
    );
    console.log(entries);
    for (const entry of entries) {
      this.addEntry(entry);
    }
    this.updateSummary();
  }

  updateSummary() {}

  save() {
    const data = this.getEntryRows().map((row) => {
      return {
        date: row.querySelector('.input-date').value,
      };
    });
  }

  addEntry(entry = {}) {
    this.root
      .querySelector('.entries')
      .insertAdjacentHTML('beforeend', BudgetTracker.entryHtml());

    const row = this.root.querySelector('.entries tr:last-of-type');

    row.querySelector('.input-date').value =
      entry.date || new Date().toISOString().replace(/T.*/, '');

    row.querySelector('.input-Description').value = entry.description || '';
    row.querySelector('.input-type').value = entry.type || 'Income';
    row.querySelector('.input-amount').value = entry.amount || 0;

    row.querySelector('.delete-entry').addEventListener('click', (e) => {
      this.onDeleteEntryBtnClick(e);
    });

    row.querySelectorAll('.input').forEach((input) => {
      input.addEventListener('change', () => this.save());
    });
  }

  getEntryRows() {
    return Array.from(this.root.querySelector('.entries tr'));
  }

  onNewEntryBtnClick() {
    this.addEntry();
  }

  onDeleteEntryBtnClick(e) {
    console.log('Entry deleted');
  }
}
