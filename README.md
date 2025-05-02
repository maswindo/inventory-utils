# Inventory Utilities

A collection of essential Google Apps Script tools to maintain clean, reliable inventory data.  
These utilities support the broader Inventory Management System by handling negative quantities, technician removals, and audit logging.

---

## 📦 Features

- **Replace Negative Quantities**
  - Automatically sets negative stock levels to zero in both the `Database` and `Location-Based Inventory` sheets.

- **Remove Fired Technicians**
  - Batch-removes fired or obsolete technicians from all sheets using a customizable list.

- **Log Negative Quantities**
  - Scans inventory sheets and logs any negative quantities to a dedicated audit sheet for review.

---

## 📌 Use Cases

- Maintain data accuracy by eliminating negative stock.
- Clean technician lists when employees leave.
- Identify and investigate inventory issues from negative quantities.

---

## 🚀 How to Use

Each utility is callable as a Google Apps Script function:

| Function | Purpose |
|----------|---------|
| `replaceNegativeQuantities()` | Set negative stock to zero across key sheets. |
| `removeFiredTechs()` | Remove entries matching a customizable list of fired technicians. |
| `logNegativeQuantities()` | Log any negative quantities found into an audit sheet. |

---

## 🔧 Technologies

- Google Sheets
- Google Apps Script

---

## 📈 Future Roadmap

- Add configuration sheet for dynamic technician removal (instead of hardcoding).
- Schedule utilities to run automatically as part of system maintenance.

---

## 📬 Contact

Created and maintained by Mason Hotaling.  
For more projects, view my [portfolio](https://maswindo.github.io/).

---
