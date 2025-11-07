import { DataSource } from 'typeorm';
import { datasourceOptions } from './datasourceOptions';

export default new DataSource(datasourceOptions);
//! pnpm --filter @zyro/server run migration:generate --WorkspaceInit
//! pnpm --filter @zyro/server run migration:run
//! pnpm --filter @zyro/server run migration:revert


