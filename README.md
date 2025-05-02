📦 Inventory Utilities
A collection of small but essential Google Apps Script tools designed to support the Inventory Management System by handling edge cases and operational cleanups.

These utilities are intended to assist warehouse managers and inventory administrators in keeping data clean and actionable without manual corrections.

🛠️ Features
🔹 Replace Negative Quantities
Automatically replaces negative stock quantities with zero in both the Database and Location-Based Inventory sheets.

🔹 Remove Fired Technicians
Batch removal of technicians or specific items that should no longer appear across any sheets. Fully customizable list of names.

🔹 Log Negative Quantities
Scans the Database sheet and logs any negative quantities into a separate sheet for audit and review.

📌 Use Cases
Maintain clean inventory records and avoid calculation errors caused by negative stock.

Remove obsolete or inactive technicians from active records.

Track and review situations where stock levels went negative (for audit or root cause analysis).

🚀 How to Use
Each utility is callable as a Google Apps Script function:

replaceNegativeQuantities() → Run to zero out negative stock.

removeFiredTechs() → Run after updating fired tech list.

logNegativeQuantities() → Run to log and review negative stock occurrences.

📈 Future Roadmap (optional)
Add configuration sheet for fired techs (instead of hardcoded array).

Schedule scripts to run automatically as nightly or weekly maintenance jobs.

📎 Technologies
Google Apps Script

Google Sheets

