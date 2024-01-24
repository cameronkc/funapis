/*
  Warnings:

  - Added the required column `slug` to the `Api` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Api" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "auth" TEXT,
    "https" BOOLEAN NOT NULL,
    "cors" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "slug" TEXT NOT NULL
);
INSERT INTO "new_Api" ("auth", "category", "cors", "createdAt", "description", "https", "id", "link", "title", "updatedAt") SELECT "auth", "category", "cors", "createdAt", "description", "https", "id", "link", "title", "updatedAt" FROM "Api";
DROP TABLE "Api";
ALTER TABLE "new_Api" RENAME TO "Api";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
