> Dev server is **not** checking types so make sure to handle types in IDE

# Manage schema changes

1. Generate migration file using prisma CLI

```bash
$ npx prisma migrate dev --name <migration_name>
```

2. Apply migration using turso CLI

```bash
$ turso db shell sora < ./prisma/migration/<migration-folder>/migration.sql
```
