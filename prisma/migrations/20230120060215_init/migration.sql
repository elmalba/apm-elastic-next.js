-- CreateTable
CREATE TABLE "Regions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "zone" TEXT
);

-- CreateTable
CREATE TABLE "Airports" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "RegionId" INTEGER NOT NULL,
    CONSTRAINT "Airports_RegionId_fkey" FOREIGN KEY ("RegionId") REFERENCES "Regions" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Parks" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "RegionId" INTEGER NOT NULL,
    CONSTRAINT "Parks_RegionId_fkey" FOREIGN KEY ("RegionId") REFERENCES "Regions" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
