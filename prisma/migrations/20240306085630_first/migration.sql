-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "coId" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "wallet" TEXT PRECISION NOT NULL,
    "poolId" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "akey" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pool" (
    "id" SERIAL NOT NULL,
    "wallet" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Pool_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_coId_fkey" FOREIGN KEY ("coId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_poolId_fkey" FOREIGN KEY ("poolId") REFERENCES "Pool"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
