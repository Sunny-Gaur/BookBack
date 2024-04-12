import Book from "../modal/Bookmodal.js";

export const getbook = async (req, res) => {
    try {
        const books = await Book.find();
        // console.log(books);
        res.status(200).json(books);
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json(error);
    }
};
