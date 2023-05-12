/*
  Warnings:

  - You are about to drop the column `teacherId` on the `classes` table. All the data in the column will be lost.
  - You are about to drop the column `classId` on the `quizzes` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "classes" DROP CONSTRAINT "classes_teacherId_fkey";

-- DropForeignKey
ALTER TABLE "quizzes" DROP CONSTRAINT "quizzes_classId_fkey";

-- AlterTable
ALTER TABLE "classes" DROP COLUMN "teacherId";

-- AlterTable
ALTER TABLE "quizzes" DROP COLUMN "classId";
