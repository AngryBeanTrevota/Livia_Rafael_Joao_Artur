/*
  Warnings:

  - You are about to drop the `_CharacterToStudent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ClassToStudent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ItemToStudent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CharacterToStudent" DROP CONSTRAINT "_CharacterToStudent_A_fkey";

-- DropForeignKey
ALTER TABLE "_CharacterToStudent" DROP CONSTRAINT "_CharacterToStudent_B_fkey";

-- DropForeignKey
ALTER TABLE "_ClassToStudent" DROP CONSTRAINT "_ClassToStudent_A_fkey";

-- DropForeignKey
ALTER TABLE "_ClassToStudent" DROP CONSTRAINT "_ClassToStudent_B_fkey";

-- DropForeignKey
ALTER TABLE "_ItemToStudent" DROP CONSTRAINT "_ItemToStudent_A_fkey";

-- DropForeignKey
ALTER TABLE "_ItemToStudent" DROP CONSTRAINT "_ItemToStudent_B_fkey";

-- DropTable
DROP TABLE "_CharacterToStudent";

-- DropTable
DROP TABLE "_ClassToStudent";

-- DropTable
DROP TABLE "_ItemToStudent";
