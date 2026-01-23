-- CreateEnum
CREATE TYPE "requirementType" AS ENUM ('minimum', 'recommended');

-- CreateTable
CREATE TABLE "gameRequirements" (
    "id" UUID NOT NULL,
    "gameId" UUID NOT NULL,
    "type" "requirementType" NOT NULL,
    "os" TEXT NOT NULL,
    "cpu" TEXT NOT NULL,
    "gpu" TEXT NOT NULL,
    "ram" TEXT NOT NULL,
    "storage" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "gameRequirements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "genres" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "genres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gameGenres" (
    "gameId" UUID NOT NULL,
    "genreId" UUID NOT NULL,

    CONSTRAINT "gameGenres_pkey" PRIMARY KEY ("gameId","genreId")
);

-- CreateIndex
CREATE UNIQUE INDEX "gameRequirements_gameId_type_key" ON "gameRequirements"("gameId", "type");

-- CreateIndex
CREATE UNIQUE INDEX "genres_slug_key" ON "genres"("slug");

-- AddForeignKey
ALTER TABLE "gameRequirements" ADD CONSTRAINT "gameRequirements_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "games"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "gameGenres" ADD CONSTRAINT "gameGenres_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "games"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "gameGenres" ADD CONSTRAINT "gameGenres_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "genres"("id") ON DELETE CASCADE ON UPDATE CASCADE;
