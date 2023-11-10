import prisma from "../database";
import { Book, CreateBook } from "../protocols/book";
import { CreateReview } from "../protocols/review";

export async function getBooks() {

  const books = await prisma.books.findMany();
  return books;
}

export async function getBook(id: number) {

  const book = await prisma.books.findFirst({
    where:{
      id
    }
  })

  return book;
}

export async function createBook(bookInfo: CreateBook) {

  const book = await prisma.books.create({
    data: bookInfo
  })

  return book;
  
}

export async function reviewBook(bookReview: CreateReview) {
  const { bookId, grade, review } = bookReview;

  const updateBook = await prisma.books.update({
    where: {
      id: bookId
    },
    data:{
      grade,
      review

    }
  })
  return updateBook;
}