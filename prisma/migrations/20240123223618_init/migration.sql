-- CreateTable
CREATE TABLE "Api" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "auth" TEXT,
    "https" BOOLEAN NOT NULL,
    "cors" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "category" TEXT NOT NULL
);
