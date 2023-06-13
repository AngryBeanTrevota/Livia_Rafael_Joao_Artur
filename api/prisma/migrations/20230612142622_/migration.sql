/*
  Warnings:

  - You are about to drop the column `isCharacter` on the `items` table. All the data in the column will be lost.
  - Added the required column `bonus` to the `items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_character` to the `items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rarity` to the `items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "items" DROP COLUMN "isCharacter",
ADD COLUMN     "bonus" TEXT NOT NULL,
ADD COLUMN     "colors" TEXT[],
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "equiped" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "image_chibi" TEXT,
ADD COLUMN     "is_character" BOOLEAN NOT NULL,
ADD COLUMN     "quotes" TEXT[],
ADD COLUMN     "rarity" TEXT NOT NULL;
