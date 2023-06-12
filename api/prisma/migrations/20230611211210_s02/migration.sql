/*
  Warnings:

  - You are about to drop the `characters` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[teacher_id]` on the table `classes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `type` to the `items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "classes" ADD COLUMN     "teacher_id" INTEGER;

-- AlterTable
ALTER TABLE "items" ADD COLUMN     "type" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "students" ADD COLUMN     "class_id" INTEGER;

-- DropTable
DROP TABLE "characters";

-- CreateTable
CREATE TABLE "_ItemToStudent" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ItemToStudent_AB_unique" ON "_ItemToStudent"("A", "B");

-- CreateIndex
CREATE INDEX "_ItemToStudent_B_index" ON "_ItemToStudent"("B");

-- CreateIndex
CREATE UNIQUE INDEX "classes_teacher_id_key" ON "classes"("teacher_id");

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "classes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "classes" ADD CONSTRAINT "classes_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "teachers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItemToStudent" ADD CONSTRAINT "_ItemToStudent_A_fkey" FOREIGN KEY ("A") REFERENCES "items"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItemToStudent" ADD CONSTRAINT "_ItemToStudent_B_fkey" FOREIGN KEY ("B") REFERENCES "students"("id") ON DELETE CASCADE ON UPDATE CASCADE;
