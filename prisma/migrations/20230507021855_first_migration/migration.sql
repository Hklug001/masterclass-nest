-- CreateTable
CREATE TABLE "membroDoTimeDaRocket" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "function" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "membroDoTimeDaRocket_id_key" ON "membroDoTimeDaRocket"("id");
