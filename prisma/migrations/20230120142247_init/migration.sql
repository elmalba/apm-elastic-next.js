/*
  Warnings:

  - Added the required column `image` to the `Parks` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Parks" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "price" INTEGER,
    "image" TEXT NOT NULL,
    "RegionId" INTEGER NOT NULL,
    CONSTRAINT "Parks_RegionId_fkey" FOREIGN KEY ("RegionId") REFERENCES "Regions" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Parks" ("RegionId", "content", "id", "name", "price") SELECT "RegionId", "content", "id", "name", "price" FROM "Parks";
DROP TABLE "Parks";
ALTER TABLE "new_Parks" RENAME TO "Parks";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
