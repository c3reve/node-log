# @c3reve/node-log

## installation
```bash
npm install @c3reve/node-log
```

## usage
JavaScript
```javascript
const log = require('@c3reve/node-log');
const express = require('express');
const app = express();

log.configure(process.env.LOG_TYPE, process.env.LOG_DEBUG_LEVEL);
app.use(log.express);

log.info(`Server is up and running at port ${PORT}`);
```

TypeScript
```typescript
import * as log from '@c3reve/node-log';

log.configure(process.env.LOG_TYPE, process.env.LOG_DEBUG_LEVEL);
app.use(log.express);

log.info(`Server is up and running at port ${PORT}`);
```
