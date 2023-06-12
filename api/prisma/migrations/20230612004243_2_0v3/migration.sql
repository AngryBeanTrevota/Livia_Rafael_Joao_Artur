/*
  Warnings:

  - You are about to drop the column `type` on the `items` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "items" DROP COLUMN "type",
ADD COLUMN     "isCharacter" BOOLEAN NOT NULL DEFAULT false;
