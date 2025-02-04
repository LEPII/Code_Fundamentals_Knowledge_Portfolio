//// Error Handling Tools.

//// Table Of Content

//// - Transport
//// - Formatters
//// - Log Levels

//// Transport

// Transports define where log messages are sent. They allow you to:
// Send logs to different destinations: Console, file, database, cloud services (e.g., Logstash, Papertrail), etc.
// Control logging behavior: Configure things like file rotation, maximum file size, and error handling for each transport.

// Console
// Purpose: Sends log messages directly to the console (terminal or command-line interface). Ideal for development and debugging and provides immediate feedback during development.

// File
// Purpose Writes log messages to a file on the local file system. Useful for persistent storage of logs. Allows for later analysis and review.
// Supports options like file rotation (creating new files periodically) to prevent log files from growing excessively large.

// HTTP
// Sends log messages to an HTTP endpoint (e.g., a custom server or a third-party logging service). Enables centralized logging across multiple servers or applications.
// Can be used to integrate with cloud-based logging services.

//// Formatters

// Formatters define how log messages are presented

// Timestamp - How the timestamp is displayed (e.g., ISO 8601, human-readable).
// Level - How the log level is displayed (e.g., uppercase, color-coded).
// Message - How the actual log message is displayed.
// Other metadata - How other metadata (e.g., source file, line number) is included.

//// Log Levels

// Log levels are used to categorize the severity or importance of log messages.
// Filtering Logs by controlling which messages are displayed or stored based on their severity. For example, you might only want to see error messages in production but all messages during development.
// Prioritize debugging by focusing on messages related to specific issues by filtering for specific log levels.
// Improve readability by making log files easier to read by grouping messages with similar importance.

// Common Log Levels:

// Error: Critical errors that prevent the application from functioning correctly.
logger.error("Database connection failed!");

// Warn: Warning messages that indicate potential problems or unexpected behavior.
logger.warn("User input may be invalid.");

// Info: Informational messages about the application's state or events.
logger.info("Application started successfully.");

// Debug: Detailed messages for debugging purposes, often containing sensitive information.
logger.debug("Received request with parameters:", req.params);

// Verbose: Very detailed messages, usually only used during development.
logger.verbose("Entering function: processOrder");
