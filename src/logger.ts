import pino from 'pino'

const REDACT_PATHS = [
  'token',
  'tToken',
  'apiKey',
  'authorization',
  'password',
  '*.token',
  '*.tToken',
  '*.apiKey',
  '*.authorization',
  '*.password',
  '*.TELEGRAM_BOT_TOKEN',
  '*.SLACK_BOT_TOKEN',
  '*.SLACK_APP_TOKEN',
  '*.DASHBOARD_TOKEN',
  '*.ANTHROPIC_API_KEY',
  '*.GOOGLE_API_KEY',
  '*.OPENAI_API_KEY',
  'req.headers.authorization',
  'req.headers.cookie',
]

export const logger = pino({
  level: process.env.LOG_LEVEL ?? 'info',
  redact: { paths: REDACT_PATHS, censor: '[REDACTED]' },
  transport:
    process.env.NODE_ENV !== 'production'
      ? { target: 'pino-pretty', options: { colorize: true } }
      : undefined,
})
