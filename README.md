# Univer Clipsheet

**Univer Clipsheet** is a robust Chrome extension for web scraping and data automation. It simplifies the process of extracting, organizing, and managing web data with powerful scraping capabilities and workflow integration.

**English** | [简体中文](./README-zh.md)

## Key Features

### 1. Web Scraping

- **Custom Scraper Configuration**: Easily define a scraper and its scraping strategy with a user-friendly interface.
- **Flexible Execution**: Run scrapers to extract data with support for advanced modes such as scrolling, clicking, and navigating through URLs.
- **Dynamic Extraction**: Extract and structure data dynamically from complex web pages.
- **AJAX Request Interception**: Intercept AJAX requests to capture and extract data from responses.

### 2. Drill-Down Data Extraction

- **Nested Data Handling**: Configure drill-down columns to capture data from nested or linked elements.
- **Granular Task Execution**: Run drill-down tasks to collect detailed data from specified elements efficiently.

### 3. Workflow Automation

- **Comprehensive Workflow Management**: Create workflows that integrate multiple scrapers for end-to-end automation.
- **Event-Driven Execution**: Use scheduling features to automate workflows, allowing tasks to run at specified intervals or predefined times.
- **Data Operations**: Filter, de-duplicate, and schedule tasks to streamline the data collection process.

### 4. Data Management

- **Efficient Data Storage**: Save and organize scraped data in a structured format.
- **Data Aggregation**: Merge results from multiple scrapers and workflows for consolidated analysis.
- **CSV Export**: Export scraped data to CSV files for easy sharing and further processing.

### 5. Chrome Extension Integration

- **Seamless Browser Interaction**: Utilize the Chrome extension to interact directly with web pages for scraper configuration.
- **Background Management**: Leverage background scripts to control scrapers and workflows effortlessly.

### 6. Intuitive User Interface

- **Popup Page Management**: Use the popup page to display and manage lists of scrapers, workflows, and data, making it easy to view and operate various tasks.
- **Side Panel Navigation**: Manage scrapers, create and edit scraper configuration directly from an intuitive side panel.
- **Comprehensive Forms**: Configure scraping and workflow parameters through detailed forms for precision.

---

## Core Repository

The core functionality of **Univer Clipsheet** is implemented in a separate repository.
For more details and access to the core codebase, please visit:
**[univer-clipsheet-core](https://github.com/dream-num/univer-clipsheet-core)**.

---

## Getting Started

### Prerequisites

To use **Univer Clipsheet**, ensure you have the following installed:

- **Node.js**
- **pnpm**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/dream-num/univer-clipsheet.git
   ```

2. Navigate to the project directory and install dependencies:

   ```bash
   cd univer-clipsheet
   git submodule update --init
   npm install
   ```

### Getting Started

1. Build the project:

   ```bash
   pnpm run build
   ```

2. Start the development server:

   ```bash
   pnpm run dev-server // hmr-server
   pnpm run dev
   ```

### Installing the Chrome Extension

To use **Univer Clipsheet** as a Chrome extension, follow these steps:

1. **Build the Extension**:
   First, ensure the extension files are properly built.

   ```bash
   pnpm run build
   ```

2. **Open Chrome Extensions Page**:
   Open Chrome and navigate to the extensions management page:
   - Enter `chrome://extensions/` in the address bar and hit **Enter**.
   - Alternatively, click the menu (three dots in the top-right corner), go to **More Tools > Extensions**.

3. **Enable Developer Mode**:
   Toggle the **Developer Mode** switch in the top-right corner of the extensions page.

4. **Load the Extension**:
   - Click the **Load unpacked** button.
   - In the file dialog, navigate to the `univer-clipsheet/dist` folder inside the project directory.
   - Select the folder and click **Open**.

5. **Verify Installation**:
   Once loaded, the extension should appear in the list of extensions, and its icon should be visible in the Chrome toolbar.

---

## Contributing

We welcome contributions to improve **Univer Clipsheet**!
You can submit [issues or feature requests](https://github.com/dream-num/univer-clipsheet/issues?q=sort%3Aupdated-desc+is%3Aissue+is%3Aopen) to us

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for more details.

---

## Contact

Have questions or feedback?
Feel free to open an issue on GitHub or reach out to us via email: **[developer@univer.ai](mailto:developer@univer.ai)**.
