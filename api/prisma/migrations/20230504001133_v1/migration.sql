/*
  Warnings:

  - You are about to drop the column `classId` on the `students` table. All the data in the column will be lost.
  - You are about to drop the column `register` on the `students` table. All the data in the column will be lost.
  - You are about to drop the column `register` on the `teachers` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[registerStudent]` on the table `students` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[registerTeacher]` on the table `teachers` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `registerStudent` to the `students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `registerTeacher` to the `teachers` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "students" DROP CONSTRAINT "students_classId_fkey";

-- AlterTable
ALTER TABLE "students" DROP COLUMN "classId",
DROP COLUMN "register",
ADD COLUMN     "registerStudent" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "teachers" DROP COLUMN "register",
ADD COLUMN     "registerTeacher" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "_ClassToStudent" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ClassToStudent_AB_unique" ON "_ClassToStudent"("A", "B");

-- CreateIndex
CREATE INDEX "_ClassToStudent_B_index" ON "_ClassToStudent"("B");

-- CreateIndex
CREATE UNIQUE INDEX "students_registerStudent_key" ON "students"("registerStudent");

-- CreateIndex
CREATE UNIQUE INDEX "teachers_registerTeacher_key" ON "teachers"("registerTeacher");

-- AddForeignKey
ALTER TABLE "_ClassToStudent" ADD CONSTRAINT "_ClassToStudent_A_fkey" FOREIGN KEY ("A") REFERENCES "classes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClassToStudent" ADD CONSTRAINT "_ClassToStudent_B_fkey" FOREIGN KEY ("B") REFERENCES "students"("id") ON DELETE CASCADE ON UPDATE CASCADE;
