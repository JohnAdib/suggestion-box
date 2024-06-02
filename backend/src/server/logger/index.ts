const winston = require('winston');

export const logger = winston.createLogger({
  level: 'silly',
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.json(),
  ),
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.cli(),
      ),
      colororize: true,
      prettyPrint: true,
      json: true,
    }),
  ],
});
